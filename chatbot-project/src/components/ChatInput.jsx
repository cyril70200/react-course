import { useState } from "react";
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'

function ChatInput({ chatMessages, setChatMessages }) {
    const[inputText, setInputText] = useState("");

    function saveInputText(event) {
        const inputText = event.target.value;
        setInputText(inputText);
    }

    function sendMessage( ) {
        const newChatMessages = [
            ...chatMessages,
            { sender: "user", message: inputText }
        ]
        setChatMessages(newChatMessages);

        // Get chat bot response
        const response = Chatbot.getResponse(inputText);
        setChatMessages([
            ...newChatMessages,
            { sender: "robot", message: response }
        ]);

        setInputText("");
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }

return (
<div className="chat-input-container">
    <input
        className="chat-input"
        type="text"
        size="30"
        placeholder="Type your message..."
        onChange={saveInputText}
        onKeyDown={handleKeyPress}
        value={inputText}
        id="chat-input"
        />
    <button
        className="send-button"
        onClick={sendMessage}
    >
        Send
    </button>
</div>
);
}

export default ChatInput;