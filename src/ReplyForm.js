import React, { useState } from "react";

const ReplyForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div>
      <form>
        <label>
          Reply:
          <input type="text" value={message} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleSendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ReplyForm;