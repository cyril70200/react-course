import { useState } from 'react'
import ChatInput from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages.jsx'
import './App.css'

function App() {
	const [chatMessages, setChatMessages] = useState([
		{ sender: "robot", message: "Hello! I am SuperBot. How can I help you today?" },
		{ sender: "user", message: "Cool! Help me please" },
		{ sender: "robot", message: "I am here to assist you!" }
	]);

	return (
		<div className="app-container">
			<h1>Chat with SuperBot</h1>
			<ChatMessages
				chatMessages={chatMessages}
			/>
			<ChatInput
				chatMessages={chatMessages}
				setChatMessages={setChatMessages}
			/>
		</div>
	);
}

export default App
