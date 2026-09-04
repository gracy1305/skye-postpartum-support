type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen, data?: Record<string, unknown>) => void;
}

const conversations = [
  {
    id: 1,
    name: "Dr. Fatima Okonkwo",
    role: "Midwife & Lactation Consultant",
    initials: "FO",
    avatarBg: "bg-[#EDF6EE]",
    avatarColor: "text-[#4A9055]",
    verified: true,
    lastMessage: "That's totally normal at this stage. How's the latch feeling today?",
    time: "10:32 AM",
    unread: 1,
    online: true,
  },
  {
    id: 2,
    name: "Sofia Reyes",
    role: "Postpartum Doula",
    initials: "SR",
    avatarBg: "bg-[#FFF0F5]",
    avatarColor: "text-[#C05A8A]",
    verified: true,
    lastMessage: "I'll check in with you again tomorrow morning 💙",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "SKYE Support",
    role: "24/7 Peer Support",
    initials: "SK",
    avatarBg: "bg-[#EDE9F8]",
    avatarColor: "text-[#8B72CF]",
    verified: true,
    lastMessage: "We're always here when you need us.",
    time: "Sep 1",
    unread: 0,
    online: true,
  },
];

export default function MessagesScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-12 pb-4 bg-gradient-to-b from-[#EDE9F8] to-[#F8F7FC]">
        <h1 className="font-display text-2xl font-semibold text-[#2C2645]">Messages</h1>
        <p className="text-[#8A82A8] text-[13px] mt-1">Private · Encrypted · Safe</p>
      </div>

      {/* Privacy badge */}
      <div className="px-6 py-4">
        <div className="bg-[#EDF6EE] rounded-xl p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#6DB97A] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <p className="text-[#2D7A3A] font-bold text-[13px]">End-to-end encrypted</p>
            <p className="text-[#6DB97A] text-[11px]">Your conversations are private and never shared</p>
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col divide-y divide-[#F0EDF9]">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onNavigate("conversation", { conv })}
            className="py-4 flex items-center gap-3 w-full text-left"
          >
            <div className="relative flex-shrink-0">
              <div className={`${conv.avatarBg} w-12 h-12 rounded-full flex items-center justify-center`}>
                <span className={`${conv.avatarColor} font-bold text-[15px]`}>{conv.initials}</span>
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#6DB97A] border-2 border-[#F8F7FC] rounded-full"/>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[#2C2645] text-[14px]">{conv.name}</p>
                {conv.verified && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6.5" fill="#6DB97A"/>
                    <path d="M4 7l2 2 4-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <p className="text-[#C2BBD9] text-[11px] mb-0.5">{conv.role}</p>
              <p className="text-[#8A82A8] text-[13px] truncate">{conv.lastMessage}</p>
            </div>
            <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
              <span className="text-[#C2BBD9] text-[11px]">{conv.time}</span>
              {conv.unread > 0 && (
                <span className="w-5 h-5 bg-[#8B72CF] rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                  {conv.unread}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Connect with pro CTA */}
      <div className="px-6 pt-4">
        <div className="bg-white border border-[#E4DFF3] rounded-2xl p-4">
          <p className="font-bold text-[#2C2645] text-[14px] mb-1">Need to speak with someone new?</p>
          <p className="text-[#8A82A8] text-[13px] mb-3">Browse our network of verified postpartum professionals</p>
          <button className="bg-[#8B72CF] text-white font-bold text-[13px] px-4 py-2.5 rounded-xl">
            Find a professional
          </button>
        </div>
      </div>
    </div>
  );
}
