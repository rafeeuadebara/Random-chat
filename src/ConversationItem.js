import React from 'react';
import format from 'date-fns/format';

const ConversationItem = ({ conversation, onClick }) => {
  return (
    <div className="individual-item" onClick={onClick}>
      <h2>{conversation.name}</h2>
      <p>Last Updated: {format(new Date(conversation.last_updated), 'MMMM dd, yyyy HH:mm:ss')}</p>
    </div>
  );
};

export default ConversationItem;
