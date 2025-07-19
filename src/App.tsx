import { useState, useEffect, useRef } from 'react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { Message } from './types/Message';
import { generateMockResponse } from './services/mockResponse';
import './App.css';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    // ユーザーメッセージを追加
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // タイピング表示
    setIsTyping(true);

    // モック応答を生成
    const botResponse = await generateMockResponse(text);
    
    // ボットメッセージを追加
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setIsTyping(false);
    setMessages(prev => [...prev, botMessage]);
  };

  return (
    <div className="app">
      <header className="chat-header">
        <h1>チャットアプリ</h1>
      </header>
      <div className="chat-container">
        <MessageList messages={messages} />
        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;