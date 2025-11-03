import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import './ChatMessage.css'

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

export default ChatMessage;