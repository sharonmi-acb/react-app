import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Badge from '../ui/Badge';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hi! I\'m here to help you with any questions about FlowTech. How can I assist you today?',
      timestamp: new Date(),
      sender: 'FlowBot'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [onlineAgents, setOnlineAgents] = useState(3);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    'How do I get started?',
    'Pricing information',
    'Technical support',
    'Billing questions',
    'Feature requests'
  ];

  const handleSendMessage = (text = message) => {
    if (!text.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: text,
      timestamp: new Date(),
      sender: 'You'
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: getBotResponse(text),
        timestamp: new Date(),
        sender: 'FlowBot'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return 'Our pricing starts at $29/month for the Starter plan. You can view all our plans and features on our pricing page. Would you like me to connect you with our sales team for a custom quote?';
    }
    
    if (lowerMessage.includes('started') || lowerMessage.includes('begin') || lowerMessage.includes('setup')) {
      return 'Getting started is easy! First, create your account, then follow our onboarding guide. I can also connect you with a specialist who can walk you through the setup process. Would that be helpful?';
    }
    
    if (lowerMessage.includes('technical') || lowerMessage.includes('bug') || lowerMessage.includes('error')) {
      return 'I\'d be happy to help with technical issues. Can you describe the specific problem you\'re experiencing? For complex technical matters, I can also escalate you to our technical support team.';
    }
    
    if (lowerMessage.includes('billing') || lowerMessage.includes('payment') || lowerMessage.includes('invoice')) {
      return 'For billing questions, I can help you understand your charges, update payment methods, or explain your invoice. What specific billing question do you have?';
    }
    
    if (lowerMessage.includes('feature') || lowerMessage.includes('request') || lowerMessage.includes('suggestion')) {
      return 'We love hearing feature suggestions from our users! I\'ll make sure your request gets to our product team. Can you tell me more about what feature you\'d like to see?';
    }
    
    return 'Thanks for your message! I\'m here to help with any questions about FlowTech. If you need to speak with a human agent, I can connect you right away. What would you like to know more about?';
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
        {onlineAgents > 0 && (
          <div className="absolute -top-2 -left-2">
            <Badge variant="success" className="text-xs">
              {onlineAgents} online
            </Badge>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-200 ${
        isMinimized ? 'w-80 h-16' : 'w-80 h-96'
      }`}>
        {/* Header */}
        <div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">FlowTech Support</h3>
              <div className="flex items-center gap-1 text-xs text-blue-100">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{onlineAgents} agents online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-blue-700 p-1 rounded"
              aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700 p-1 rounded"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`flex items-center gap-2 mb-1 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        msg.type === 'user' ? 'bg-blue-100 order-2' : 'bg-gray-100 order-1'
                      }`}>
                        {msg.type === 'user' ? 
                          <User className="w-3 h-3 text-blue-600" /> : 
                          <Bot className="w-3 h-3 text-gray-600" />
                        }
                      </div>
                      <span className="text-xs text-gray-500">{formatTime(msg.timestamp)}</span>
                    </div>
                    <div className={`p-3 rounded-lg text-sm ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gray-100">
                        <Bot className="w-3 h-3 text-gray-600" />
                      </div>
                    </div>
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-lg rounded-bl-none text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button
                  onClick={() => handleSendMessage()}
                  disabled={!message.trim()}
                  size="sm"
                  className="px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Contact Options */}
              <div className="flex justify-center gap-4 mt-3 pt-3 border-t">
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                  <Phone className="w-3 h-3" />
                  Call
                </button>
                <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600">
                  <Mail className="w-3 h-3" />
                  Email
                </button>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  24/7 Support
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;
