// app/FlowiseBubble.jsx
'use client';

import { useState } from 'react';
import { Send, Bot, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function FlowiseBubble() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything about Kandor' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  console.log('messages', messages)

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(
        "https://cloud.flowiseai.com/api/v1/prediction/3192b61f-ca2a-4d59-88ca-6abbeaa3c6ec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: userMessage })
        }
      );

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text || data }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#43338F] text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
      >
        <Bot size={28} />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white/5 rounded-2xl shadow-2xl border border-gray-200/20 flex flex-col backdrop-blur-md">
          <div className="flex items-center justify-between p-4 text-white rounded-t-2xl">
            <div className='flex gap-3 items-center'>
            <div className='relative'>
                <Bot size={20} /> 
                <div className='w-2 h-2 bg-[#99FF99] absolute bottom-[-2px] right-[-2px] rounded-full' />
            </div>
            <h3 className="font-semibold flex gap-2">
              DAI
            </h3>
            </div>
            <button onClick={() => setOpen(false)} className="hover:bg-white/20 rounded-lg p-1">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
        
            {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div className={`max-w-xs px-5 py-3 rounded-2xl text-[13px] ${
      msg.role === 'user' 
        ? 'bg-[#43338F] text-white' 
        : 'text-white prose prose-sm max-w-none'
    }`}>
      {msg.role === 'user' ? (
        <p className="whitespace-pre-wrap">{msg.content}</p>
      ) : (
        <ReactMarkdown>
          {msg.content}
        </ReactMarkdown>
      )}
    </div>
            </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-500/20 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-500/20 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-500/20 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <hr className='opacity-20'/>

          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-3 text-white border border-gray-300/20 rounded-xl focus:outline-none focus:border-[#43338F]"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-3 bg-[#43338F] text-white rounded-xl hover:bg-[#43338F] disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}