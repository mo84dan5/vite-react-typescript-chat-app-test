import React from 'react';
import { Message } from '../types/Message';
import './MessageList.css';

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
        >
          <div className="message-bubble">
            <p className="message-text">{message.text}</p>
            <span className="message-time">
              {message.timestamp.toLocaleTimeString('ja-JP', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};