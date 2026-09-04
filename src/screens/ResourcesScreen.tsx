import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen) => void;
}

const upcoming = [
  {
    id: 1,
    title: "Understanding Postpartum Anxiety",
    host: "Dr. Keisha Brown",
    role: "Clinical Psychologist",
    date: "Sep 6, 2026 · 11:00 AM",
    duration: "45 min",
    tag: "Mental Wellbeing",
    tagColor: "bg-[#FFF0F5] text-[#C05A8A]",
    spots: "12 spots left",
    spotsColor: "text-[#C05A8A]",
  },
  {
    id: 2,
    title: "Sleep Strategies for New Families",
    host: "Cara Nguyen",
    role: "Certified Sleep Consultant",
    date: "Sep 8, 2026 · 7:00 PM",
    duration: "60 min",
    tag: "Sleep",
    tagColor: "bg-[#EEF2FF] text-[#4A5FA0]",
    spots: "28 spots left",
    spotsColor: "text-[#8A82A8]",
  },
];

const onDemand = [
  {
    id: 1,
    title: "The \"Baby Blues\" vs. PPD: What's the Difference?",
    host: "Dr. Amara Osei",
    duration: "22 min",
    views: "1.4K views",
    tag: "Mental Wellbeing",
    tagColor: "bg-[#FFF0F5] text-[#C05A8A]",
    emoji: "🧠",
    bg: "bg-[#FFF0F5]",
  },
  {
    id: 2,
    title: "Breastfeeding Positions That Actually Work",
    host: "Fatima Okonkwo",
    duration: "18 min",
    views: "2.1K views",
    tag: "Breastfeeding",
    tagColor: "bg-[#FFF6E8] text-[#A06A00]",
    emoji: "🤱",
    bg: "bg-[#FFF6E8]",
  },
  {
    id: 3,
    title: "Your Body at 6 Weeks Postpartum",
    host: "Dr. Lin Wei",
    duration: "30 min",
    views: "3.5K views",
    tag: "Recovery",
    tagColor: "bg-[#EDE9F8] text-[#8B72CF]",
    emoji: "🌿",
    bg: "bg-[#EDE9F8]",
  },
  {
    id: 4,
    title: "Newborn Cues: What Your Baby Is Telling You",
    host: "Sofia Reyes",
    duration: "25 min",
    views: "890 views",
    tag: "Baby Care",
    tagColor: "bg-[#EDF6EE] text-[#4A9055]",
    emoji: "👶",
    bg: "bg-[#EDF6EE]",
  },
];

export default function ResourcesScreen({ onNavigate }: Props) {
  const [tab, setTab] = useState<"upcoming" | "ondemand">("upcoming");

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-12 pb-4 bg-gradient-to-b from-[#EDE9F8] to-[#F8F7FC]">
        <h1 className="font-display text-2xl font-semibold text-[#2C2645]">Resources</h1>
        <p className="text-[#8A82A8] text-[13px] mt-1">Expert sessions, on your schedule</p>
      </div>

      {/* Tabs */}
      <div className="px-6 pt-4 pb-2">
        <div className="flex bg-[#EDE9F8] rounded-xl p-1 gap-1">
          <button
            onClick={() => setTab("upcoming")}
            className={`flex-1 py-2 rounded-lg text-[13px] font-bold transition-colors ${tab === "upcoming" ? "bg-white text-[#8B72CF] shadow-sm" : "text-[#8A82A8]"}`}
          >
            Upcoming Live
          </button>
          <button
            onClick={() => setTab("ondemand")}
            className={`flex-1 py-2 rounded-lg text-[13px] font-bold transition-colors ${tab === "ondemand" ? "bg-white text-[#8B72CF] shadow-sm" : "text-[#8A82A8]"}`}
          >
            On Demand
          </button>
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3 pt-2">
        {tab === "upcoming" && upcoming.map((s) => (
          <div key={s.id} className="bg-white border border-[#E4DFF3] rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${s.tagColor}`}>{s.tag}</span>
              <span className="bg-[#EDE9F8] text-[#8B72CF] text-[11px] font-semibold px-2.5 py-1 rounded-full">LIVE</span>
            </div>
            <h3 className="font-display text-[16px] font-semibold text-[#2C2645] mb-1">{s.title}</h3>
            <p className="text-[#5A4A8A] font-semibold text-[13px]">{s.host}</p>
            <p className="text-[#8A82A8] text-[12px] mb-3">{s.role}</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-1.5 text-[#8A82A8]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                <span className="text-[12px]">{s.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#8A82A8]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span className="text-[12px]">{s.duration}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`font-semibold text-[12px] ${s.spotsColor}`}>{s.spots}</span>
              <button className="bg-[#8B72CF] text-white font-bold text-[13px] px-5 py-2 rounded-xl">
                Register free
              </button>
            </div>
          </div>
        ))}

        {tab === "ondemand" && onDemand.map((s) => (
          <button key={s.id} className="bg-white border border-[#E4DFF3] rounded-2xl p-4 flex items-center gap-4 text-left w-full">
            <div className={`${s.bg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
              {s.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${s.tagColor}`}>{s.tag}</span>
              <h4 className="font-bold text-[#2C2645] text-[13px] mt-1 mb-0.5 leading-snug">{s.title}</h4>
              <p className="text-[#8A82A8] text-[12px]">{s.host} · {s.duration}</p>
              <p className="text-[#C2BBD9] text-[11px]">{s.views}</p>
            </div>
            <div className="w-9 h-9 bg-[#EDE9F8] rounded-full flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#8B72CF">
                <path d="M5 3l14 9-14 9V3z"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
