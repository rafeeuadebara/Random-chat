import React from "react";
import format from "date-fns/format";

const MessageList = ({ messages }) => {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          <p>{format(new Date(message.last_updated), "MMMM dd, yyyy HH:mm:ss")}</p>
          <p>{message.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;