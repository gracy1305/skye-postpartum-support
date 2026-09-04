import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Conversation {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  verified: boolean;
  online: boolean;
}

interface Props {
  conv: Conversation;
  onNavigate: (screen: Screen) => void;
}

const initialMessages = [
  { id: 1, from: "pro", text: "Hi Maya! How are you feeling today? I saw you completed a check-in this morning.", time: "10:15 AM" },
  { id: 2, from: "me", text: "Hi Dr. Okonkwo. Honestly a bit overwhelmed still. And still some engorgement issues.", time: "10:18 AM" },
  { id: 3, from: "pro", text: "I hear you. The first few weeks are truly the hardest. How often are you feeding or pumping right now?", time: "10:20 AM" },
  { id: 4, from: "me", text: "Every 2-3 hours but she sometimes won't latch and I end up just pumping.", time: "10:25 AM" },
  { id: 5, from: "pro", text: "That's totally normal at this stage. Have you tried the laid-back position? Some babies latch better when mum is reclined. How's the latch feeling today?", time: "10:32 AM" },
];

export default function ConversationScreen({ conv, onNavigate }: Props) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: messages.length + 1, from: "me", text: input.trim(), time: "Now" }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-4 pt-12 pb-3 bg-white border-b border-[#E4DFF3] flex items-center gap-3">
        <button onClick={() => onNavigate("messages")} className="text-[#8A82A8] p-1 flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <div className="relative flex-shrink-0">
          <div className={`${conv.avatarBg} w-10 h-10 rounded-full flex items-center justify-center`}>
            <span className={`${conv.avatarColor} font-bold text-[13px]`}>{conv.initials}</span>
          </div>
          {conv.online && (
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#6DB97A] border-2 border-white rounded-full"/>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="font-bold text-[#2C2645] text-[14px] truncate">{conv.name}</p>
            {conv.verified && (
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="6.5" fill="#6DB97A"/>
                <path d="M4 7l2 2 4-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <p className="text-[#C2BBD9] text-[11px]">{conv.role}</p>
        </div>

        {/* Privacy indicator */}
        <div className="flex items-center gap-1 bg-[#EDF6EE] px-2.5 py-1 rounded-full flex-shrink-0">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6DB97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span className="text-[#3A7A44] text-[10px] font-bold">Private</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
              msg.from === "me"
                ? "bg-[#8B72CF] text-white rounded-br-sm"
                : "bg-white border border-[#E4DFF3] text-[#2C2645] rounded-bl-sm"
            }`}>
              <p className="text-[14px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.from === "me" ? "text-[#C8B4F0]" : "text-[#C2BBD9]"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-4 pb-24 pt-2 bg-white border-t border-[#E4DFF3]">
        <div className="flex items-end gap-2">
          <div className="flex-1 bg-[#F8F7FC] border border-[#E4DFF3] rounded-2xl px-4 py-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }}}
              placeholder="Message..."
              rows={1}
              className="w-full bg-transparent text-[14px] text-[#2C2645] placeholder:text-[#C2BBD9] outline-none resize-none"
            />
          </div>
          <button
            onClick={send}
            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${input.trim() ? "bg-[#8B72CF]" : "bg-[#EDE9F8]"}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={input.trim() ? "white" : "#C2BBD9"} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
