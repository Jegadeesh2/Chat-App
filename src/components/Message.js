import React from "react";

const Message = () => {
  return (
    <div className="message">
      <div className="message-info">
        <img
          src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
          className="message-image"
          alt=""
          srcset=""
        />
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hello</p>
        <img
          src="https://mages.pexels.com/photos/9137845/pexels-photo-9137845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          srcset=""
          // className="message-image"
        />
      </div>
    </div>
  );
};

export default Message;
