import React, { useState } from "react";
import "./chat.css";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>ChatGPT Clone</h4>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className="chat__message">{message}</p>
        ))}
      </div>
      <div className="chat__footer">
        <form>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
