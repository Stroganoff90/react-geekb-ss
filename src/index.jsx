import React from "react";
import ReactDom from "react-dom";

// import MessageField from "./components/MessageField/MessageField";
// import SendButton from "./components/SendButton/SendButton";

const messages = [
  {name: "Ivan", content: "raz raz"},
  {name: "Maria", content: "DVAAAAA"},
  {name: "Oleg", content: "qqq"},
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;
const MessageField = ({messages}) => {
  return messages.map((message, index) => <Message {...message} key={index} />)
};

ReactDom.render(
  <div>
    <MessageField messages={messages} />
  </div>,
  document.getElementById("root")
);