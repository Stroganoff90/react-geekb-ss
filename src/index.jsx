import React from "react";
import ReactDom from "react-dom";

import MessageField from "./compons/MessageField/MessageField";
import SendButton from "./compons/SendButton/SendButton";

const messages = [
  {name: "Richard", content: "do you like hurting other people?"},
]

ReactDom.render(
  <div>
    <MessageField messages={messages} />
    <SendButton />
  </div>,
  document.getElementById("root")
);