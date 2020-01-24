import React from "react";
import Message from "./Message/Message";

const MessageField = ({messages}) => {
  return messages.map((message, index) => <Message {...message} key={index} />)
};

export default MessageField;