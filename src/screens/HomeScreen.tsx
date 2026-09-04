type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen, data?: Record<string, unknown>) => void;
}

const concerns = [
  {
    id: "body",
    emoji: "🌿",
    title: "Body feels off",
    description: "Physical changes, pain, or discomfort",
    bg: "bg-[#EDE9F8]",
    iconBg: "bg-[#D6CEF0]",
  },
  {
    id: "overwhelmed",
    emoji: "🤍",
    title: "I feel overwhelmed",
    description: "Emotionally drained or anxious",
    bg: "bg-[#FFF0F5]",
    iconBg: "bg-[#FFD6E5]",
  },
  {
    id: "notsure",
    emoji: "💬",
    title: "Something's not right",
    description: "Not sure what, but need support",
    bg: "bg-[#EDF6EE]",
    iconBg: "bg-[#C8E8CC]",
  },
];

export default function HomeScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      {/* Header */}
      <div className="px-6 pt-14 pb-6 bg-gradient-to-b from-[#EDE9F8] to-[#F8F7FC]">
        <div className="flex items-center justify-between mb-6">
          <div className="w-10 h-10 rounded-full bg-[#8B72CF] flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <button className="relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8B72CF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#6DB97A] rounded-full"/>
          </button>
        </div>

        <p className="text-[#8A82A8] font-semibold text-sm uppercase tracking-wider mb-1">Good morning</p>
        <h1 className="font-display text-3xl font-semibold text-[#2C2645] leading-tight mb-1">
          Hello, Maya 🌸
        </h1>
        <p className="text-[#8A82A8] text-sm">Week 3 postpartum · You're doing beautifully</p>
      </div>

      {/* Check-in prompt */}
      <div className="px-6 pt-8">
        <h2 className="font-display text-2xl font-semibold text-[#2C2645] leading-snug mb-2">
          How are you feeling today?
        </h2>
        <p className="text-[#8A82A8] text-[15px] mb-6">
          Tap what feels closest. There's no wrong answer.
        </p>

        <div className="flex flex-col gap-3">
          {concerns.map((c) => (
            <button
              key={c.id}
              onClick={() => onNavigate("checkin", { concern: c.id, title: c.title })}
              className={`${c.bg} rounded-2xl p-4 flex items-center gap-4 w-full text-left transition-transform active:scale-[0.98]`}
            >
              <div className={`${c.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                {c.emoji}
              </div>
              <div>
                <p className="font-bold text-[#2C2645] text-[16px]">{c.title}</p>
                <p className="text-[#8A82A8] text-[13px] mt-0.5">{c.description}</p>
              </div>
              <svg className="ml-auto text-[#C2BBD9] flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="px-6 pt-8">
        <h3 className="font-semibold text-[#2C2645] text-[15px] mb-4">Recent activity</h3>
        <button
          onClick={() => onNavigate("checkin-history")}
          className="w-full bg-white border border-[#E4DFF3] rounded-2xl p-4 flex items-center gap-3 mb-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#EDE9F8] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B72CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="font-semibold text-[#2C2645] text-[14px]">Check-in history</p>
            <p className="text-[#8A82A8] text-[12px]">3 check-ins this week</p>
          </div>
          <svg className="ml-auto text-[#C2BBD9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        <button
          onClick={() => onNavigate("cultural")}
          className="w-full bg-white border border-[#E4DFF3] rounded-2xl p-4 flex items-center gap-3 mb-3"
        >
          <div className="w-10 h-10 rounded-xl bg-[#EDF6EE] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6DB97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
            </svg>
          </div>
          <div className="text-left">
            <p className="font-semibold text-[#2C2645] text-[14px]">Cultural Bridge</p>
            <p className="text-[#8A82A8] text-[12px]">Traditional & medical guidance</p>
          </div>
          <svg className="ml-auto text-[#C2BBD9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Support banner */}
      <div className="px-6 pt-4 pb-4">
        <div className="bg-[#8B72CF] rounded-2xl p-5 flex items-center gap-4">
          <div>
            <p className="text-white font-bold text-[15px] mb-1">Talk to a professional</p>
            <p className="text-[#D6C8F5] text-[13px]">Available 24/7 · Private & secure</p>
          </div>
          <button
            onClick={() => onNavigate("messages")}
            className="ml-auto bg-white text-[#8B72CF] font-bold text-[13px] px-4 py-2 rounded-xl flex-shrink-0"
          >
            Chat now
          </button>
        </div>
      </div>
    </div>
  );
}
