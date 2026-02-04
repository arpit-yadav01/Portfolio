import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { askPortfolioAI } from "./aiService";

const SUGGESTED_QUESTIONS = [
  "What projects has Arpit worked on?",
  "Tell me about Arpit's experience",
  "What are Arpit's technical skills?",
  "Where did Arpit study?",
  "What technologies does Arpit use?",
];

// ✅ Format AI responses with proper structure
const FormattedMessage = ({ text }) => {
  const lines = text.split('\n');
  const elements = [];
  let currentList = [];
  
  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    
    // Project/Item with number
    if (/^\d+\.\s+\*\*/.test(trimmed)) {
      if (currentList.length > 0) {
        elements.push(<div key={`list-${idx}`} className="space-y-3">{currentList}</div>);
        currentList = [];
      }
      
      const match = trimmed.match(/^\d+\.\s+\*\*(.+?)\*\*/);
      const rest = trimmed.replace(/^\d+\.\s+\*\*(.+?)\*\*\s*-?\s*/, '');
      
      elements.push(
        <div key={idx} className="mt-4 first:mt-0">
          <h4 className="font-bold text-blue-400 mb-1 flex items-center gap-2">
            <span className="text-purple-400">▸</span>
            {match ? match[1] : trimmed}
          </h4>
          {rest && <p className="text-gray-300 text-sm ml-4">{rest}</p>}
        </div>
      );
    }
    // Sub-items with dash
    else if (trimmed.startsWith('-')) {
      const content = trimmed.replace(/^-\s*/, '');
      if (content.includes('Technologies used:')) {
        const [label, techs] = content.split(':');
        currentList.push(
          <div key={idx} className="ml-4 text-sm">
            <span className="text-gray-400">{label}:</span>
            <span className="text-cyan-300 font-medium ml-1">{techs}</span>
          </div>
        );
      } else {
        currentList.push(
          <p key={idx} className="ml-4 text-gray-300 text-sm">• {content}</p>
        );
      }
    }
    // Bold text with **
    else if (trimmed.includes('**')) {
      const parts = trimmed.split(/\*\*(.+?)\*\*/g);
      elements.push(
        <p key={idx} className="text-gray-300 leading-relaxed mb-2">
          {parts.map((part, i) => 
            i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    // Regular paragraph
    else if (trimmed) {
      elements.push(
        <p key={idx} className="text-gray-300 leading-relaxed mb-2">{trimmed}</p>
      );
    }
  });
  
  if (currentList.length > 0) {
    elements.push(<div key="final-list" className="space-y-1">{currentList}</div>);
  }
  
  return <div className="space-y-2">{elements}</div>;
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm Arpit's AI assistant. Ask me anything about his portfolio, projects, skills, or experience!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleAsk = async (questionText = question) => {
    if (!questionText.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: questionText }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await askPortfolioAI(questionText, "FREE_QUERY_MODE");
      setMessages((prev) => [...prev, { type: "bot", text: response }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Sorry, I can only answer questions about Arpit's portfolio. Please try asking about his projects, skills, or experience.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestedQuestion = (q) => {
    handleAsk(q);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  return (
    <>
      {/* Floating Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center cursor-pointer z-50"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-400"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
            >
              AI
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 w-full max-w-md z-50"
          >
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl shadow-blue-500/20 border border-gray-700/50 overflow-hidden backdrop-blur-xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">AI Assistant</h3>
                    <p className="text-blue-100 text-xs">Always online</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-900/50">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-[85%] px-4 py-3 rounded-2xl ${msg.type === "user" ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-br-sm" : "bg-gray-800 text-gray-100 border border-gray-700 rounded-bl-sm"}`}>
                      {msg.type === "bot" ? <FormattedMessage text={msg.text} /> : <p className="text-sm leading-relaxed">{msg.text}</p>}
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-2">
                        <motion.div className="w-2 h-2 bg-blue-400 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                        <motion.div className="w-2 h-2 bg-purple-400 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                        <motion.div className="w-2 h-2 bg-pink-400 rounded-full" animate={{ y: [0, -10, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="px-4 py-3 bg-gray-900/50 border-t border-gray-700/50">
                  <p className="text-xs text-gray-400 mb-2 font-medium">💡 Try asking:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.slice(0, 3).map((q, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleSuggestedQuestion(q)}
                        className="text-xs px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg border border-gray-700 transition-all"
                      >
                        {q}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4 bg-gray-900/50 border-t border-gray-700/50">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about Arpit..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    disabled={loading}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAsk()}
                    disabled={loading || !question.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </motion.button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">Powered by AI • Answers based on Arpit's portfolio</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;