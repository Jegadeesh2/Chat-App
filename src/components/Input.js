import React from "react";
import{FiPaperclip} from "react-icons/fi"
import {IoMdSend} from "react-icons/io"

const Input = () => {
  return (
    <div className="input-area">
      <input type="text" className="text-input" 
          placeholder="Type Something ..."
          />
      <div className="other-input">
      <label htmlFor="file-input" >
        <input
          style={{ display: "none" }}
          type="file"
          name="file"
          id="file-input"
        />
      <FiPaperclip className="file-input"/>
      </label>
      <button className="sent-btn"> <IoMdSend/> </button>
      </div>
    </div>
  );
};

export default Input;
