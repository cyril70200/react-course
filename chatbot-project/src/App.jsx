import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './App.css'

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

function ChatMessage({message, sender, id}) {
return (
	<div
		id={id}
		className={sender ===
		"user" ? "chat-user-message" : "chat-robot-message"}
	>
		{sender === "robot" && (
			<img src={RobotProfileImage} alt="Robot" />
		)}
		<div className="message-text">
			{message}
		</div>
		{sender === "user" && (
			<img src={UserProfileImage} alt="User" />
		)}
	</div>
);
}

function ChatMessages( { chatMessages } ) {
	const chatMessagesContainerRef = useRef(null);
	useEffect(() => {
		const chatMessagesContainerElem = chatMessagesContainerRef.current;
		chatMessagesContainerElem.scrollTop = chatMessagesContainerElem.scrollHeight;
	}, [chatMessages]);
	return (
		<div
		className="chat-messages-container"
		ref={chatMessagesContainerRef}
		>
			{chatMessages.map((chatMessage, key) => {
				return (
					<ChatMessage
						sender={chatMessage.sender}
						message={chatMessage.message}
						id={key}
						key={key}
					/>
				);
			})}
		</div>
	);
}


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
