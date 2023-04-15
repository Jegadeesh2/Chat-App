import React, { useState } from "react";
import AddProfile from "../images/Add-Profile.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    console.log(file, displayName);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // const storageRef = ref(storage, displayName);
      // const uploadTask = uploadBytesResumable(storageRef, file);

      const imageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(imageRef, file)
  .then((snapshot) => {
    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
    // console.log('File metadata:', snapshot.metadata);
    // Let's get a download URL for the file.
    getDownloadURL(snapshot.ref).then((url) => {
      console.log('File available at', url);
      // ...
    });
  }).catch((error) => {
    console.error('Upload failed', error);
    // ...
  });

      uploadTask.on(
        (error) => {
          console.log("Error upload file", error);
          setIsError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            console.log({ downloadURL });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // console.log(downloadURL);
            // navigate("/");
            // await setDoc(doc(db, "userChats", res.user.uid), {});
          });
        }
      );
    } catch (isError) {
      setIsError(true);
    }
  };

  return (
    <div className="signIn-page">
      <div className="form-wrapper">
        <span className="logo"> J Chat </span>
        <span className="title"> Register</span>
        <form className="form" onSubmit={submitHandler}>
          <input type="text" placeholder="Name" className="input" required />
          <input type="email" placeholder="Email" className="input" required />
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
          <label htmlFor="add-profile" className="add-profile">
            <input
              style={{ display: "none" }}
              name="profile"
              type="file"
              id="add-profile"
            />
            <img src={AddProfile} alt="profile" className="profile" />
            Add profile image
          </label>
          {isError && (
            <span className="notification">Something went wrong.!</span>
          )}
          <button type="submit" className="btn">
            SignUp
          </button>
        </form>
        <Link to="/signin" className="link">
          {" "}
          <span className="link-text"> Already have an account?</span> SignIn
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
