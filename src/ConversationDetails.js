import React, { useState, useEffect } from 'react';
import MessageList from './MessageList';
import ReplyForm from './ReplyForm';
import { sortMessagesByDate } from './utilities';

const ConversationDetails = ({ conversation }) => {
 
  const [localMessages, setLocalMessages] = useState([]);

  useEffect(() => {
    setLocalMessages(sortMessagesByDate(conversation.messages));
  }, [conversation]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      last_updated: new Date().toISOString(),
    };
    setLocalMessages([...localMessages, newMessage]);
  };

  return (
    <div className="conversation-details">
      <h2>{conversation.name}</h2>
      <MessageList messages={localMessages} />
      <ReplyForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ConversationDetails;
