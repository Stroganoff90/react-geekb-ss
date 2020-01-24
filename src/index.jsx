import React from "react";
import ReactDom from "react-dom";

// import MessageField from "./compons/MessageField/MessageField";
// import SendButton from "./compons/SendButton/SendButton";

class MessageField extends React.Component {
  render() {
    return messages.map((message, index) => <Message {...message} key={index} />)
  }
}

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

const messages = [
  {name: "Richard", content: "do you like hurting other people?"},
]

class InputField extends React.Component {
  render() {
    return <input type="text" placeholder="клац клац"/>
  }
}

class SendButton extends React.Component {
  constructor() {
    super();
    // this.state = {};      
    this.answerRichard = this.answerRichard.bind(this);      
    console.log("constructor");
  }

  answerRichard() {
    const jackRep = {name: "Jacket", content: "*BRUH*"};
    // const chat = messages.push({name: "Jacket", content: "*BRUH*"});
    this.setState();
    
    console.log(messages);
  }

  render() {
    return (
      <button onClick={this.answerRichard}>
        click
      </button>
    );
  }
}

ReactDom.render(
  <>
    <MessageField messages={messages} />
    <InputField />
    <SendButton />
  </>,
  document.getElementById("root")
);

//console.log('4pok'); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!