import { useState, useRef, useEffect } from 'react';
import { useAppContext } from '@/context/appContext';

// ============================================
// PARTIAL COMPONENTS   kolhom m3ayat lihom l ta7t
// ============================================

// Chatbot Icon Button Partial
const ChatbotIconButton = ({ isOpen, onClick, messageCount, darkMode }) => {
    return (
        <button
            onClick={onClick}
            className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 ${darkMode
                ? 'bg-alpha text-white hover:bg-[#ff6b2a]'
                : 'bg-alpha text-white hover:bg-[#ff6b2a]'
                } ${isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'} `}
            aria-label="Open chatbot"
        >
            <svg
                className="w-7 h-7 transition-transform duration-300 hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
            </svg>
            {messageCount > 1 && !isOpen && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    {messageCount - 1}
                </span>
            )}
        </button>
    );
};

// Chatbot Header Partial
const ChatbotHeader = ({ darkMode, showGuide, onToggleGuide, onClose }) => {
    return (
        <div
            className={`flex items-center justify-between p-4 rounded-t-2xl border-b transition-all duration-300 ${darkMode ? 'bg-dark border-gray-700' : 'bg-alpha/10 border-gray-200'
                }`}
        >
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-alpha flex items-center justify-center shadow-lg animate-pulse">
                    <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                </div>
                <div>
                    <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        Chat Support
                    </h3>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        We're here to help
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={onToggleGuide}
                    className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                        : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                        } ${showGuide ? 'bg-alpha/20 text-alpha scale-110' : ''}`}
                    aria-label="Toggle guide"
                    title="Help & Guide"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button
                    onClick={onClose}
                    className={`p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:rotate-90 ${darkMode
                        ? 'hover:bg-gray-700 text-gray-400 hover:text-white'
                        : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                        }`}
                    aria-label="Close chatbot"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// Guide Panel Partial
const GuidePanel = ({ darkMode }) => {
    return (
        <div
            className={`border-b transition-all duration-500 ${darkMode ? 'bg-[#212529] border-gray-700' : 'bg-alpha/5 border-gray-200'
                }`}
        >
            <div className="p-4 max-h-48 overflow-y-auto custom-scrollbar">
                <h4 className={`font-bold mb-3 text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    💡 Quick Guide
                </h4>
                <div className="space-y-3 text-sm">
                    <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong className="text-alpha">Ask about:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1.5 ml-2">
                            <li className="hover:text-alpha transition-colors">Our services and programs</li>
                            <li className="hover:text-alpha transition-colors">How to contact us</li>
                            <li className="hover:text-alpha transition-colors">Upcoming events</li>
                            <li className="hover:text-alpha transition-colors">Registration information</li>
                        </ul>
                    </div>
                    <div className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <strong className="text-alpha">Tips:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1.5 ml-2">
                            <li className="hover:text-alpha transition-colors">Use quick action buttons for common questions</li>
                            <li className="hover:text-alpha transition-colors">Type your question naturally</li>
                            <li className="hover:text-alpha transition-colors">I'm here 24/7 to help you</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Message Bubble Partial
const MessageBubble = ({ message, darkMode, formatTime }) => {
    const isUser = message.sender === 'user';
    
    return (
        <div
            className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
            style={{ animationDelay: '0.1s' }}
        >
            <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-lg transition-all duration-300 hover:scale-[1.02] ${isUser
                    ? 'bg-alpha text-white rounded-br-sm'
                    : darkMode
                        ? 'bg-[#2a2a2a] text-gray-100 rounded-bl-sm border border-gray-700'
                        : 'bg-white text-gray-900 rounded-bl-sm border border-gray-200'
                    }`}
            >
                <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">{message.text}</p>
                <p
                    className={`text-xs mt-2 ${isUser
                        ? 'text-white/70'
                        : darkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                        }`}
                >
                    {formatTime(message.timestamp)}
                </p>
            </div>
        </div>
    );
};

// Thinking Indicator Partial
const ThinkingIndicator = ({ darkMode }) => {
    return (
        <div className="flex justify-start animate-fade-in">
            <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 rounded-bl-sm shadow-lg ${darkMode
                    ? 'bg-[#2a2a2a] text-gray-100 border border-gray-700'
                    : 'bg-white text-gray-900 border border-gray-200'
                    }`}
            >
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div
                            className={`w-2.5 h-2.5 rounded-full animate-bounce ${darkMode ? 'bg-gray-400' : 'bg-gray-500'
                                }`}
                            style={{ animationDelay: '0ms' }}
                        />
                        <div
                            className={`w-2.5 h-2.5 rounded-full animate-bounce ${darkMode ? 'bg-gray-400' : 'bg-gray-500'
                                }`}
                            style={{ animationDelay: '150ms' }}
                        />
                        <div
                            className={`w-2.5 h-2.5 rounded-full animate-bounce ${darkMode ? 'bg-gray-400' : 'bg-gray-500'
                                }`}
                            style={{ animationDelay: '300ms' }}
                        />
                    </div>
                    <span className="text-xs text-gray-500 animate-pulse">Thinking...</span>
                </div>
            </div>
        </div>
    );
};

// Quick Actions Partial
const QuickActions = ({ quickActions, onQuickAction, darkMode }) => {
    if (quickActions.length === 0) return null;

    return (
        <div className={`px-4 py-3 border-t transition-all duration-300 ${darkMode ? 'bg-[#1a1a1a] border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
            <p className={`text-xs mb-3 font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                    <button
                        key={index}
                        onClick={() => onQuickAction(action.text)}
                        className={`text-xs px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${darkMode
                            ? 'bg-[#2a2a2a] text-gray-300 hover:bg-alpha hover:text-white border border-gray-700 hover:border-alpha'
                            : 'bg-white text-gray-700 hover:bg-alpha hover:text-white border border-gray-200 hover:border-alpha shadow-sm'
                            }`}
                    >
                        <span className="mr-1.5">{action.icon}</span>
                        {action.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Input Area Partial
const InputArea = ({ inputValue, setInputValue, onSendMessage, onKeyPress, inputRef, isThinking, isTyping, darkMode }) => {
    return (
        <div
            className={`p-4 border-t transition-all duration-300 ${darkMode ? 'bg-[#212529] border-gray-700' : 'bg-white border-gray-200'
                }`}
        >
            <div className="flex items-end gap-2">
                <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={onKeyPress}
                    placeholder="Type your message..."
                    rows={1}
                    disabled={isThinking || isTyping}
                    className={`flex-1 resize-none rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-alpha transition-all duration-300 ${darkMode
                        ? 'bg-[#1a1a1a] text-white border border-gray-700 placeholder-gray-500 focus:border-alpha'
                        : 'bg-gray-50 text-gray-900 border border-gray-300 placeholder-gray-400 focus:border-alpha'
                        } ${isThinking || isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:border-alpha/50'}`}
                    style={{ minHeight: '48px', maxHeight: '120px' }}
                />
                <button
                    onClick={onSendMessage}
                    disabled={!inputValue.trim() || isThinking || isTyping}
                    className={`p-3 rounded-xl transition-all duration-300 ${inputValue.trim() && !isThinking && !isTyping
                        ? 'bg-alpha text-white hover:bg-[#ff6b2a] hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl'
                        : darkMode
                            ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    aria-label="Send message"
                >
                    <svg
                        className="w-5 h-5 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// Messages Container Partial
const MessagesContainer = ({ messages, isThinking, darkMode, formatTime, messagesEndRef }) => {
    return (
        <div
            className={`flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar ${darkMode ? 'bg-[#1a1a1a]' : 'bg-gray-50'
                }`}
        >
            {messages.map((message) => (
                <MessageBubble
                    key={message.id}
                    message={message}
                    darkMode={darkMode}
                    formatTime={formatTime}
                />
            ))}

            {isThinking && <ThinkingIndicator darkMode={darkMode} />}

            <div ref={messagesEndRef} />
        </div>
    );
};

// ============================================
// MAIN CHATBOT COMPONENT
// ============================================

const Chatbot = () => {
    const { darkMode } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm here to help. How can I assist you today?",
            sender: 'bot',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isThinking, setIsThinking] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isThinking, isTyping]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.style.height = 'auto';
            inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
        }
    }, [inputValue]);

    const typeMessage = async (text, callback) => {
        setIsTyping(true);
        let displayedText = '';

        for (let i = 0; i < text.length; i++) {
            displayedText += text[i];
            callback(displayedText);
            await new Promise(resolve => setTimeout(resolve, 30));
        }

        setIsTyping(false);
        
        // Refocus input after bot finishes typing
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isThinking || isTyping) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsThinking(true);

        try {
            const response = await fetch('/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                body: JSON.stringify({ message: userMessage.text }),
            });

            const data = await response.json();
            setIsThinking(false);

            const botResponse = {
                id: Date.now() + 1,
                text: '',
                sender: 'bot',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, botResponse]);

            const responseText = data.message || data.response || data.reply || 'I apologize, but I encountered an error. Please try again.';

            await typeMessage(responseText, (text) => {
                setMessages(prev => {
                    const updated = [...prev];
                    updated[updated.length - 1].text = text;
                    return updated;
                });
            });
        } catch (error) {
            console.log(error);
            setIsThinking(false);
            const errorMessage = {
                id: Date.now() + 1,
                text: 'Sorry, I encountered an error. Please try again later.',
                sender: 'bot',
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
            
            
            // Refocus input after error
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 100);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const quickActions = [
        { text: 'What services do you offer?', icon: '💼' },
        { text: 'How can I contact you?', icon: '📞' },
        { text: 'Tell me about your programs', icon: '🎓' },
    ];

    const handleQuickAction = (text) => {
        setInputValue(text);
        setTimeout(() => {
            handleSendMessage();
        }, 100);
    };

    const formatTime = (date) => {
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <>
           

            <ChatbotIconButton
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                messageCount={messages.length}
                darkMode={darkMode}
            />

            {/* Chatbot Window */}
            <div
                className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] flex flex-col rounded-3xl shadow-2xl transition-all duration-500 transform ${isOpen
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                    } ${darkMode
                        ? 'bg-[#1a1a1a] border border-gray-800'
                        : 'bg-white border border-gray-200'
                    }`}
            >
                <ChatbotHeader
                    darkMode={darkMode}
                    showGuide={showGuide}
                    onToggleGuide={() => setShowGuide(!showGuide)}
                    onClose={() => setIsOpen(false)}
                />

                {showGuide && <GuidePanel darkMode={darkMode} />}

                <MessagesContainer
                    messages={messages}
                    isThinking={isThinking}
                    darkMode={darkMode}
                    formatTime={formatTime}
                    messagesEndRef={messagesEndRef}
                />

                {messages.length === 1 && (
                    <QuickActions
                        quickActions={quickActions}
                        onQuickAction={handleQuickAction}
                        darkMode={darkMode}
                    />
                )}

                <InputArea
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    onSendMessage={handleSendMessage}
                    onKeyPress={handleKeyPress}
                    inputRef={inputRef}
                    isThinking={isThinking}
                    isTyping={isTyping}
                    darkMode={darkMode}
                />
            </div>
        </>
    );
};

export default Chatbot;
