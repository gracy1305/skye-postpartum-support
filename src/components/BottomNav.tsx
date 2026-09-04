type Screen =
  | "home"
  | "checkin"
  | "checkin-questions"
  | "checkin-result"
  | "checkin-history"
  | "cultural"
  | "community"
  | "post-detail"
  | "messages"
  | "conversation"
  | "resources"
  | "profile";

interface BottomNavProps {
  active: Screen;
  onNavigate: (screen: Screen) => void;
}

const tabs = [
  {
    id: "home" as Screen,
    label: "Home",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
        <path d="M9 21V12h6v9"/>
      </svg>
    ),
  },
  {
    id: "community" as Screen,
    label: "Community",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="3"/>
        <circle cx="17" cy="9" r="2.5"/>
        <path d="M1 20.5c0-3.5 3-6 8-6 1 0 2 .15 2.9.4"/>
        <path d="M15 20.5c0-2.5 2-4 5-4s5 1.5 5 4"/>
      </svg>
    ),
  },
  {
    id: "messages" as Screen,
    label: "Messages",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    id: "resources" as Screen,
    label: "Resources",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <path d="M14 14h7M17.5 14v7"/>
      </svg>
    ),
  },
  {
    id: "profile" as Screen,
    label: "Profile",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
];

export default function BottomNav({ active, onNavigate }: BottomNavProps) {
  const rootScreen = (id: Screen): Screen => {
    if (id === "home") return "home";
    if (id === "community" || id === "post-detail") return "community";
    if (id === "messages" || id === "conversation") return "messages";
    if (id === "resources") return "resources";
    if (id === "profile") return "profile";
    return "home";
  };

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white border-t border-[#E4DFF3] px-1 pb-safe">
      <div className="flex items-center justify-around h-16">
        {tabs.map((tab) => {
          const isActive = rootScreen(active) === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="flex flex-col items-center gap-0.5 px-2 py-1 min-w-[56px]"
            >
              <span className={isActive ? "text-[#8B72CF]" : "text-[#C2BBD9]"}>
                {tab.icon(isActive)}
              </span>
              <span
                className={`text-[10px] font-semibold tracking-wide transition-colors ${
                  isActive ? "text-[#8B72CF]" : "text-[#C2BBD9]"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
