import React from "react";
import ReactDom from "react-dom";

// import MessageField from ".App/compons/MessageField/MessageField";
// import SendButton from ".App/compons/SendButton/SendButton";
// import InputField from ".App/compons/InputField/InputField";

// componentDidMount() {
//   console.log();
// }

const Message = ({ name, content }) => <div><strong>{name}:</strong> {content}</div>;

const messages = [
  {name: "Richard", content: "do you like hurting other people?"},
];

class MessageField extends React.Component {
  componentDidMount() {
    console.log('field');
  }

  // state() {
  //   messages: messages
  // }
  
  componentDidUpdate(messages) {
    if (this.messages !== messages) {
      this.setState(this.messages)
    }
  }

  render() {
    return messages.map((message, index) => <Message {...message} key={index} />)
  }
}

class InputField extends React.Component {
  componentDidMount() {
    console.log('input');
  }
  
  render() {
    return <input type="text" placeholder="клац клац"/>
  }
}

class SendButton extends React.Component {
  answerRichard() {
    console.log('4pok');
    return messages.push({name: "Jacket", content: "..."})
  }

 componentDidMount() {
  console.log('send');
}

 render() {
   return (
     <button onClick={this.answerRichard}>
       click
     </button>
   );
 }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <MessageField messages={messages}/>
      <InputField />
      <SendButton />
    </div>
    )
  }
} 

ReactDom.render(<App />,document.getElementById("root"));

//console.log('4pok'); 

// компоненты с логикой - умные, контейнеры(только логкиа)
// компоненты с версткой - глупые, просто компоненты, не содежат стейта