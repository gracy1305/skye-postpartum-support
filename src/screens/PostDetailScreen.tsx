import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Post {
  id: number;
  author: string;
  initials: string;
  avatarBg: string;
  avatarColor: string;
  anonymous: boolean;
  time: string;
  topic: string;
  topicColor: string;
  title: string;
  preview: string;
  replies: number;
  hearts: number;
  hasProReply: boolean;
}

interface Props {
  post: Post;
  onNavigate: (screen: Screen) => void;
}

const replies = [
  {
    id: 1,
    author: "Dr. Amara Osei",
    initials: "AO",
    role: "OB-GYN · Verified",
    avatarBg: "bg-[#EDF6EE]",
    avatarColor: "text-[#4A9055]",
    isPro: true,
    time: "1 hour ago",
    body: "What you're describing sounds like it could be postpartum emotional numbness, which is very real and very common. It doesn't mean you love your baby less — it's often a protective response your nervous system creates under extreme stress and sleep deprivation. I'd recommend discussing this with your OB or midwife at your next visit.",
  },
  {
    id: 2,
    author: "Jasmine T.",
    initials: "JT",
    role: "Community member",
    avatarBg: "bg-[#FFF0F5]",
    avatarColor: "text-[#C05A8A]",
    isPro: false,
    time: "90 min ago",
    body: "I felt this exact way at week 4. Completely disconnected. It got better around week 7 and now (week 14) I feel totally bonded. You are absolutely not alone.",
  },
  {
    id: 3,
    author: "Anonymous Mom",
    initials: "AM",
    role: "Community member",
    avatarBg: "bg-[#EDE9F8]",
    avatarColor: "text-[#8B72CF]",
    isPro: false,
    time: "2 hours ago",
    body: "Thank you for posting this. I've been too scared to say anything but I feel this too. Reading these replies helps so much.",
  },
];

export default function PostDetailScreen({ post, onNavigate }: Props) {
  const [reply, setReply] = useState("");
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-12 pb-4">
        <button onClick={() => onNavigate("community")} className="flex items-center gap-2 text-[#8A82A8] mb-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span className="font-semibold text-[14px]">Community</span>
        </button>

        {/* Original post */}
        <div className="bg-white border border-[#E4DFF3] rounded-2xl p-4 mb-5">
          <div className="flex items-center gap-3 mb-3">
            <div className={`${post.avatarBg} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}>
              <span className={`${post.avatarColor} font-bold text-[14px]`}>{post.initials}</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <p className="font-semibold text-[#2C2645] text-[14px]">{post.author}</p>
                {post.anonymous && (
                  <span className="bg-[#F0EDF9] text-[#8A82A8] text-[10px] font-semibold px-1.5 py-0.5 rounded-full">Anonymous</span>
                )}
              </div>
              <p className="text-[#C2BBD9] text-[12px]">{post.time}</p>
            </div>
            <span className={`ml-auto text-[11px] font-semibold px-2.5 py-1 rounded-full ${post.topicColor}`}>
              {post.topic}
            </span>
          </div>
          <h2 className="font-display text-[18px] font-semibold text-[#2C2645] mb-2">{post.title}</h2>
          <p className="text-[#5A4A8A] text-[14px] leading-relaxed mb-4">{post.preview}</p>
          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-1.5 ${liked ? "text-[#C05A8A]" : "text-[#C2BBD9]"}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
            <span className="text-[13px] font-semibold">{liked ? post.hearts + 1 : post.hearts}</span>
          </button>
        </div>

        <h3 className="font-semibold text-[#2C2645] text-[14px] mb-3">{replies.length} Replies</h3>

        {/* Replies */}
        <div className="flex flex-col gap-3 mb-5">
          {replies.map((r) => (
            <div key={r.id} className={`rounded-2xl p-4 ${r.isPro ? "bg-[#EDF6EE] border border-[#C8E8CC]" : "bg-white border border-[#E4DFF3]"}`}>
              <div className="flex items-start gap-3">
                <div className={`${r.avatarBg} w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`${r.avatarColor} font-bold text-[12px]`}>{r.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-bold text-[#2C2645] text-[13px]">{r.author}</p>
                    {r.isPro && (
                      <div className="flex items-center gap-1 bg-[#6DB97A] rounded-full px-2 py-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <circle cx="5" cy="5" r="4.5" fill="white"/>
                          <path d="M2.5 5l1.5 1.5 3-2.5" stroke="#6DB97A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-white text-[10px] font-bold">Verified Pro</span>
                      </div>
                    )}
                  </div>
                  <p className="text-[#C2BBD9] text-[11px] mb-2">{r.role} · {r.time}</p>
                  <p className="text-[#2C2645] text-[13px] leading-relaxed">{r.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply input */}
        <div className="bg-white border border-[#E4DFF3] rounded-2xl p-3">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Share your experience or support..."
            className="w-full text-[14px] text-[#2C2645] placeholder:text-[#C2BBD9] outline-none resize-none h-20 bg-transparent"
          />
          <div className="flex items-center justify-between pt-2 border-t border-[#F0EDF9]">
            <span className="text-[#C2BBD9] text-[12px]">Reply is visible to this thread</span>
            <button
              disabled={!reply.trim()}
              className={`px-4 py-1.5 rounded-xl font-bold text-[13px] transition-colors ${reply.trim() ? "bg-[#8B72CF] text-white" : "bg-[#EDE9F8] text-[#C2BBD9]"}`}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
