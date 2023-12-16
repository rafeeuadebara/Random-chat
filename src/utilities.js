// custom utility
export const sortConversationsByDate = (conversations) =>
  conversations.slice().sort((a, b) => new Date(b.last_updated) - new Date(a.last_updated));

export const sortMessagesByDate = (messages) =>
  messages.slice().sort((a, b) => new Date(a.last_updated) - new Date(b.last_updated));
