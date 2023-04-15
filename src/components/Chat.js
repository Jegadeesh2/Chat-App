import React from "react";
import {FaUserPlus} from "react-icons/fa"
import {IoEllipsisHorizontalSharp} from "react-icons/io5"
import Input from "./Input";
import Messages from "./Messages";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jega</span>
        <div className="chatIcons">
          <FaUserPlus className="icon"/>
          <IoEllipsisHorizontalSharp className="icon"/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  );
};

export default Chat;
