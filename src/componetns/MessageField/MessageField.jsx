import React from "react";
import Message from "./Message/Message";

const messages = [
  {name: "Ivan", content: "raz raz"},
  {name: "Maria", content: "DVAAAAA"},
  {name: "Oleg", content: "qqq"},
]

const MessageField = ({messages}) => {
  return messages.map((message, index) => <Message {...message} key={index} />)
};

export default MessageField;