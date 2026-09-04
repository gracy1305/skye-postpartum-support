type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen) => void;
}

const sections = [
  {
    title: "My Care",
    items: [
      { icon: "🕐", label: "Check-in History", screen: "checkin-history" as Screen },
      { icon: "👩‍⚕️", label: "My Professionals", screen: "messages" as Screen },
      { icon: "📅", label: "Registered Webinars", screen: "resources" as Screen },
    ],
  },
  {
    title: "Account",
    items: [
      { icon: "🔔", label: "Notifications", screen: null },
      { icon: "🔒", label: "Privacy & Data", screen: null },
      { icon: "🌐", label: "Language & Region", screen: null },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: "💬", label: "Give Feedback", screen: null },
      { icon: "❓", label: "Help & FAQ", screen: null },
      { icon: "📋", label: "About SKYE", screen: null },
    ],
  },
];

export default function ProfileScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#EDE9F8] to-[#F8F7FC] px-6 pt-12 pb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#8B72CF] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-display font-semibold text-2xl">M</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-semibold text-[#2C2645]">Maya Adeyemi</h1>
            <p className="text-[#8A82A8] text-[13px]">Week 3 postpartum</p>
            <p className="text-[#8A82A8] text-[13px]">Member since August 2026</p>
          </div>
          <button className="ml-auto text-[#8B72CF]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          {[
            { label: "Check-ins", value: "3" },
            { label: "Week", value: "3" },
            { label: "Resources", value: "5" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-3 text-center">
              <p className="font-display font-semibold text-xl text-[#8B72CF]">{stat.value}</p>
              <p className="text-[#8A82A8] text-[11px] font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings sections */}
      <div className="px-6 pt-4 flex flex-col gap-4">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="text-[#8A82A8] font-bold text-[11px] uppercase tracking-wider mb-2">{section.title}</p>
            <div className="bg-white border border-[#E4DFF3] rounded-2xl overflow-hidden divide-y divide-[#F0EDF9]">
              {section.items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => item.screen && onNavigate(item.screen)}
                  className="w-full flex items-center gap-3 px-4 py-3.5 text-left"
                >
                  <span className="text-lg w-7 text-center flex-shrink-0">{item.icon}</span>
                  <span className="font-semibold text-[#2C2645] text-[14px] flex-1">{item.label}</span>
                  <svg className="text-[#C2BBD9]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Emergency */}
        <div className="bg-[#FFF0F5] border border-[#FFD6E5] rounded-2xl p-4 flex items-center gap-3">
          <div className="w-9 h-9 bg-[#FFD6E5] rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-[18px]">🆘</span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-[#8C2B52] text-[13px]">Emergency support</p>
            <p className="text-[#C05A8A] text-[11px]">In a crisis? You're not alone.</p>
          </div>
          <button className="bg-[#C05A8A] text-white font-bold text-[12px] px-3 py-1.5 rounded-lg flex-shrink-0">
            Get help
          </button>
        </div>
      </div>
    </div>
  );
}
