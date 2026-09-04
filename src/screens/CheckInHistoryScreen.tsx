type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen) => void;
}

const history = [
  {
    id: 1,
    concern: "I feel overwhelmed",
    emoji: "🤍",
    date: "Today, 8:14 AM",
    answers: ["This past week", "It's difficult"],
    tag: "Emotional",
    tagColor: "bg-[#FFF0F5] text-[#C05A8A]",
    saved: true,
  },
  {
    id: 2,
    concern: "Body feels off",
    emoji: "🌿",
    date: "Yesterday, 2:30 PM",
    answers: ["A few days", "Staying the same"],
    tag: "Physical",
    tagColor: "bg-[#EDE9F8] text-[#8B72CF]",
    saved: true,
  },
  {
    id: 3,
    concern: "Something's not right",
    emoji: "💬",
    date: "Sep 1, 9:00 AM",
    answers: ["I just feel 'different'", "It's distracting"],
    tag: "General",
    tagColor: "bg-[#EDF6EE] text-[#4A9055]",
    saved: true,
  },
];

export default function CheckInHistoryScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-12 pb-4">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-[#8A82A8] mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span className="font-semibold text-[14px]">Back</span>
        </button>

        <h1 className="font-display text-2xl font-semibold text-[#2C2645]">Check-In History</h1>
        <p className="text-[#8A82A8] text-[14px] mt-1">Your saved check-ins, privately stored</p>
      </div>

      {/* Weekly summary */}
      <div className="px-6 mb-5">
        <div className="bg-[#EDE9F8] rounded-2xl p-4 flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#5A4A8A] font-bold text-[14px]">This week</p>
            <p className="text-[#8A82A8] text-[13px]">3 check-ins completed</p>
          </div>
          <div className="ml-auto flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-[#8B72CF] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l2.5 2.5L9 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            ))}
            {[4, 5, 6, 7].map((i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-[#D6CEF0]" />
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {history.map((item) => (
          <div key={item.id} className="bg-white border border-[#E4DFF3] rounded-2xl p-4">
            <div className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-bold text-[#2C2645] text-[14px]">{item.concern}</p>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${item.tagColor}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-[#8A82A8] text-[12px] mb-2">{item.date}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.answers.map((a) => (
                    <span key={a} className="bg-[#F0EDF9] text-[#5A4A8A] text-[12px] font-medium px-2.5 py-1 rounded-lg">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 pt-6">
        <button
          onClick={() => onNavigate("home")}
          className="w-full bg-[#8B72CF] text-white font-bold text-[15px] rounded-2xl py-4"
        >
          Start a new check-in
        </button>
      </div>
    </div>
  );
}
