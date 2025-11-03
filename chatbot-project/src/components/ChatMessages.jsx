import { useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage/ChatMessage.jsx'
import './ChatMessages.css'

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

export default ChatMessages;
