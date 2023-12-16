import { useState } from "react";
import React from "react";
import ConversationList from './ConversationList';
import ConversationDetails from "./ConversationDetails";

function App() {
    const [selectedConversation, setSelectedConversation] = useState(null)

    return (
        <div style={{ display: 'flex' }}>
            <ConversationList onSelect={setSelectedConversation} />
            {selectedConversation && <ConversationDetails conversation={selectedConversation} />}
        </div>
    )
}

export default App;
