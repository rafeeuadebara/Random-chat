import React, { useState } from 'react';
import ConversationItem from './ConversationItem';
import chatJsonData from './Initial-conversation-json-file.json';
import { sortConversationsByDate } from './utilities';

const ConversationList = ({ onSelect }) => {
  const [conversations, setConversations] = useState(sortConversationsByDate(chatJsonData));

  const handleConversationClick = (conversation) => {
    onSelect(conversation);
  };

  return (
    <div className="conversation-list">
      <h1>Chats</h1>
      {conversations.map((conversation) => (
        <ConversationItem
          key={conversation.id}
          conversation={conversation}
          onClick={() => handleConversationClick(conversation)}
        />
      ))}
    </div>
  );
};

export default ConversationList;
