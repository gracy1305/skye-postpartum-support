import HomeScreen from "./HomeScreen";
import CheckInScreen from "./CheckInScreen";
import CheckInHistoryScreen from "./CheckInHistoryScreen";
import CulturalBridgeScreen from "./CulturalBridgeScreen";
import CommunityScreen from "./CommunityScreen";
import PostDetailScreen from "./PostDetailScreen";
import MessagesScreen from "./MessagesScreen";
import ConversationScreen from "./ConversationScreen";
import ResourcesScreen from "./ResourcesScreen";
import ProfileScreen from "./ProfileScreen";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

const noop = () => {};

// Fake post for PostDetail
const fakePost = {
  id: 1,
  author: "Anonymous Mom",
  initials: "AM",
  avatarBg: "bg-[#EDE9F8]",
  avatarColor: "text-[#8B72CF]",
  anonymous: true,
  time: "2 hours ago",
  topic: "Mental Wellbeing",
  topicColor: "bg-[#FFF0F5] text-[#C05A8A]",
  title: "Is it normal to feel disconnected from my baby?",
  preview: "I love her so much but sometimes I just feel numb and distant. I feel so guilty saying this but I can't be the only one...",
  replies: 14,
  hearts: 38,
  hasProReply: true,
};

const fakeConv = {
  id: 1,
  name: "Dr. Fatima Okonkwo",
  role: "Midwife & Lactation Consultant",
  initials: "FO",
  avatarBg: "bg-[#EDF6EE]",
  avatarColor: "text-[#4A9055]",
  verified: true,
  lastMessage: "That's totally normal at this stage.",
  time: "10:32 AM",
  unread: 1,
  online: true,
};


interface PhoneFrameProps {
  label: string;
  children: React.ReactNode;
}

function PhoneFrame({ label, children }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[13px] font-bold text-[#5A4A8A] tracking-wide uppercase">{label}</span>
      {/* Phone shell */}
      <div className="relative" style={{ width: 220, height: 480 }}>
        {/* Outer shell */}
        <div className="absolute inset-0 rounded-[32px] bg-[#1C1635] shadow-[0_20px_60px_rgba(44,38,69,0.35)] ring-1 ring-white/10" />
        {/* Screen bezel */}
        <div className="absolute inset-[6px] rounded-[27px] overflow-hidden bg-[#F8F7FC]">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#1C1635] rounded-full z-20" />
          {/* Scaled screen content */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              transformOrigin: "top left",
              transform: `scale(${208 / 390})`,
              width: 390,
              height: Math.round(468 / (208 / 390)),
            }}
          >
            {children}
          </div>
        </div>
        {/* Side buttons */}
        <div className="absolute right-[-3px] top-16 w-1 h-8 bg-[#120F26] rounded-r-full" />
        <div className="absolute left-[-3px] top-14 w-1 h-6 bg-[#120F26] rounded-l-full" />
        <div className="absolute left-[-3px] top-22 w-1 h-6 bg-[#120F26] rounded-l-full" />
        <div className="absolute left-[-3px] top-32 w-1 h-10 bg-[#120F26] rounded-l-full" />
      </div>
    </div>
  );
}

const screens: Array<{ label: string; element: React.ReactNode }> = [
  {
    label: "Home",
    element: <HomeScreen onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} />,
  },
  {
    label: "Check-In · Q1",
    element: <CheckInScreen concern="body" concernTitle="Body feels off" onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} initialStep="q1" />,
  },
  {
    label: "Check-In · Q2",
    element: <CheckInScreen concern="body" concernTitle="Body feels off" onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} initialStep="q2" />,
  },
  {
    label: "Check-In · Result",
    element: <CheckInScreen concern="overwhelmed" concernTitle="I feel overwhelmed" onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} initialStep="result" />,
  },
  {
    label: "Check-In History",
    element: <CheckInHistoryScreen onNavigate={noop as (s: Screen) => void} />,
  },
  {
    label: "Cultural Bridge",
    element: <CulturalBridgeScreen onNavigate={noop as (s: Screen) => void} />,
  },
  {
    label: "Community",
    element: <CommunityScreen onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} />,
  },
  {
    label: "Post Detail",
    element: <PostDetailScreen post={fakePost} onNavigate={noop as (s: Screen) => void} />,
  },
  {
    label: "Messages",
    element: <MessagesScreen onNavigate={noop as (s: Screen, d?: Record<string, unknown>) => void} />,
  },
  {
    label: "Conversation",
    element: <ConversationScreen conv={fakeConv} onNavigate={noop as (s: Screen) => void} />,
  },
  {
    label: "Resources · Live",
    element: <ResourcesScreen onNavigate={noop as (s: Screen) => void} />,
  },
  {
    label: "Profile",
    element: <ProfileScreen onNavigate={noop as (s: Screen) => void} />,
  },
];

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#F0EDF9] px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-[#8B72CF] text-white px-4 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-widest mb-4">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" fill="white" fillOpacity=".3"/><circle cx="6" cy="6" r="2" fill="white"/></svg>
          Internal Design Review
        </div>
        <h1 className="font-display text-5xl font-semibold text-[#2C2645] mb-2">SKYE</h1>
        <p className="text-[#8A82A8] text-[16px]">All screens · {screens.length} views</p>
      </div>

      {/* Grid */}
      <div
        className="mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "48px 32px",
          maxWidth: 1400,
          justifyItems: "center",
        }}
      >
        {screens.map(({ label, element }) => (
          <PhoneFrame key={label} label={label}>
            {element}
          </PhoneFrame>
        ))}
      </div>

      <p className="text-center text-[#C2BBD9] text-[12px] mt-16">
        SKYE · Postpartum Support Platform · Design Preview
      </p>
    </div>
  );
}
