import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen, data?: Record<string, unknown>) => void;
}

const posts = [
  {
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
  },
  {
    id: 2,
    author: "Priya M.",
    initials: "PM",
    avatarBg: "bg-[#EDF6EE]",
    avatarColor: "text-[#4A9055]",
    anonymous: false,
    time: "5 hours ago",
    topic: "Recovery",
    topicColor: "bg-[#EDE9F8] text-[#8B72CF]",
    title: "C-section scar itching at week 5 — anyone else?",
    preview: "My incision area is incredibly itchy. I read this is normal healing but wanted to hear from others who experienced this.",
    replies: 9,
    hearts: 22,
    hasProReply: true,
  },
  {
    id: 3,
    author: "Sarah K.",
    initials: "SK",
    avatarBg: "bg-[#FFF0F5]",
    avatarColor: "text-[#C05A8A]",
    anonymous: false,
    time: "1 day ago",
    topic: "Breastfeeding",
    topicColor: "bg-[#FFF6E8] text-[#A06A00]",
    title: "Latch issues at 3 weeks — I almost gave up",
    preview: "We finally figured it out after seeing an IBCLC. If you're struggling, please don't give up yet. Here's what helped us...",
    replies: 27,
    hearts: 91,
    hasProReply: false,
  },
];

const filters = ["All", "Mental Wellbeing", "Recovery", "Breastfeeding", "Sleep", "Baby Care"];

export default function CommunityScreen({ onNavigate }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAskModal, setShowAskModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [anonymous, setAnonymous] = useState(false);

  const filtered = posts.filter((p) => activeFilter === "All" || p.topic === activeFilter);

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20 relative">
      {/* Ask modal */}
      {showAskModal && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl p-6 w-full max-w-sm mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-xl font-semibold text-[#2C2645]">Ask the community</h3>
              <button onClick={() => setShowAskModal(false)} className="text-[#8A82A8]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What's on your mind? Every question is welcome here..."
              className="w-full bg-[#F8F7FC] border border-[#E4DFF3] rounded-xl p-3 text-[14px] text-[#2C2645] placeholder:text-[#C2BBD9] outline-none resize-none h-28 mb-3"
            />
            <button
              onClick={() => setAnonymous(!anonymous)}
              className="flex items-center gap-2 mb-4"
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${anonymous ? "bg-[#8B72CF] border-[#8B72CF]" : "border-[#C2BBD9]"}`}>
                {anonymous && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <span className="text-[14px] text-[#5A4A8A] font-semibold">Post anonymously</span>
            </button>
            <button
              onClick={() => { setShowAskModal(false); setQuestion(""); }}
              className="w-full bg-[#8B72CF] text-white font-bold text-[15px] rounded-2xl py-4"
            >
              Post question
            </button>
          </div>
        </div>
      )}

      <div className="px-6 pt-12 pb-4 bg-gradient-to-b from-[#EDE9F8] to-[#F8F7FC]">
        <h1 className="font-display text-2xl font-semibold text-[#2C2645]">Community</h1>
        <p className="text-[#8A82A8] text-[13px] mt-1">Real conversations from real mothers</p>
      </div>

      {/* Filters */}
      <div className="px-6 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors ${
                activeFilter === f ? "bg-[#8B72CF] text-white" : "bg-white border border-[#E4DFF3] text-[#8A82A8]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {filtered.map((post) => (
          <button
            key={post.id}
            onClick={() => onNavigate("post-detail", { post })}
            className="bg-white border border-[#E4DFF3] rounded-2xl p-4 text-left w-full"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`${post.avatarBg} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className={`${post.avatarColor} font-bold text-[13px]`}>{post.initials}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold text-[#2C2645] text-[13px]">{post.author}</p>
                  {post.anonymous && (
                    <span className="bg-[#F0EDF9] text-[#8A82A8] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">Anonymous</span>
                  )}
                </div>
                <p className="text-[#C2BBD9] text-[11px]">{post.time}</p>
              </div>
              <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${post.topicColor}`}>
                {post.topic}
              </span>
            </div>

            <h3 className="font-bold text-[#2C2645] text-[14px] mb-1.5">{post.title}</h3>
            <p className="text-[#8A82A8] text-[13px] leading-relaxed mb-3 line-clamp-2">{post.preview}</p>

            <div className="flex items-center gap-4">
              {post.hasProReply && (
                <div className="flex items-center gap-1.5 bg-[#EDF6EE] rounded-lg px-2.5 py-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" fill="#6DB97A"/>
                    <path d="M3 6l2 2 4-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[#3A7A44] text-[11px] font-bold">Pro replied</span>
                </div>
              )}
              <div className="flex items-center gap-1 text-[#C2BBD9] ml-auto">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                <span className="text-[12px] font-semibold">{post.replies}</span>
              </div>
              <div className="flex items-center gap-1 text-[#C2BBD9]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                <span className="text-[12px] font-semibold">{post.hearts}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* FAB */}
      <div className="px-6 pt-5">
        <button
          onClick={() => setShowAskModal(true)}
          className="w-full bg-[#8B72CF] text-white font-bold text-[15px] rounded-2xl py-4 flex items-center justify-center gap-2"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
          Ask a question
        </button>
      </div>
    </div>
  );
}
