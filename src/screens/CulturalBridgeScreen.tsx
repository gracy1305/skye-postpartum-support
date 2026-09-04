import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  onNavigate: (screen: Screen) => void;
}

const topics = ["All", "Diet", "Rest & Sleep", "Recovery", "Baby Care", "Emotions", "Rituals"];

const articles = [
  {
    id: 1,
    topic: "Diet",
    title: "Warming foods after birth",
    traditional: "Many cultures — including Chinese, Indian, and Latin American traditions — advise consuming warming, nourishing foods like bone broths, warm soups, and specific herbs and spices. The body is considered to be in a 'cold' or depleted state after birth, requiring heat and restoration.",
    medical: "Medical nutrition emphasizes high protein intake (50–70g/day while breastfeeding), iron-rich foods to restore blood loss, adequate calcium, and hydration. Warming foods like broths are nutritionally beneficial and align well with these goals.",
    alignment: ["Both traditions prioritize protein-rich, nourishing meals", "Warm soups and broths support hydration and recovery in both perspectives", "Avoiding heavily processed or empty-calorie foods is a shared principle"],
    emoji: "🍲",
    bg: "bg-[#FFF6E8]",
    tagColor: "bg-[#FFE8B8] text-[#A0620A]",
  },
  {
    id: 2,
    topic: "Rest & Sleep",
    title: "The 40-day rest period",
    traditional: "Many cultures observe a 40-day (or similar duration) period of rest after birth, with the mother staying home, avoiding exertion, and being cared for by family. This is called 'zuò yuè zi' in Chinese culture, 'la cuarentena' in Latin cultures, and 'confinement' in parts of South and Southeast Asia.",
    medical: "Medical guidance recommends taking rest seriously in the postpartum period. The body needs time to heal after delivery — strenuous activity, especially in the first 6 weeks, can slow recovery. Light activity is encouraged, but full exertion should wait until cleared by a provider.",
    alignment: ["Both strongly discourage rushing back to normal activity", "Rest protects against postpartum complications like prolapse and hemorrhage", "Social support during this time reduces postpartum depression risk"],
    emoji: "🌙",
    bg: "bg-[#EEE8F8]",
    tagColor: "bg-[#DDD2F5] text-[#5A3FA0]",
  },
  {
    id: 3,
    topic: "Emotions",
    title: "Emotional support after birth",
    traditional: "Traditional practices often involve the whole family or community rallying around a new mother. Emotions are validated openly, crying and processing are expected, and experienced women share wisdom. The concept of the mother needing to be 'filled up' before she can give is central in many traditions.",
    medical: "Postpartum mood disorders affect up to 1 in 5 new mothers. Clinical guidance emphasizes early identification of postpartum depression and anxiety, social connection, and professional support. Screening at postpartum visits is recommended.",
    alignment: ["Social support is consistently one of the strongest protective factors", "Both recognize that new mothers need active care, not just the baby", "Naming and validating emotions — rather than dismissing them — is supported by both"],
    emoji: "💛",
    bg: "bg-[#FFF8E8]",
    tagColor: "bg-[#FFE8B8] text-[#A06A00]",
  },
  {
    id: 4,
    topic: "Recovery",
    title: "Bathing and hygiene restrictions",
    traditional: "Some traditional practices advise avoiding bathing or hair washing for the first 7–30 days postpartum to protect the body from 'wind' or 'cold' entering through open pores. This is especially common in East and Southeast Asian and some African traditions.",
    medical: "Medical guidance encourages regular hygiene to prevent infection, particularly around cesarean incisions or perineal tears. Warm (not cold) showers are generally safe and beneficial. Hair washing does not pose a health risk.",
    alignment: ["Warmth during bathing is valued in both traditions — warm showers vs. cold water avoidance", "Protecting healing tissue from harsh conditions is a shared concern", "Gentle, mindful self-care practices are encouraged in both perspectives"],
    emoji: "🌸",
    bg: "bg-[#EDF6EE]",
    tagColor: "bg-[#C8E8CC] text-[#2D7A3A]",
  },
];

export default function CulturalBridgeScreen({ onNavigate }: Props) {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(1);

  const filtered = articles.filter((a) => {
    const matchesTab = activeTab === "All" || a.topic === activeTab;
    const matchesSearch = search === "" || a.title.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      <div className="px-6 pt-12 pb-4">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-[#8A82A8] mb-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span className="font-semibold text-[14px]">Back</span>
        </button>

        <div className="flex items-center gap-2 mb-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6DB97A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
          </svg>
          <span className="text-[#6DB97A] font-bold text-xs uppercase tracking-wider">Cultural Bridge</span>
        </div>
        <h1 className="font-display text-2xl font-semibold text-[#2C2645]">Tradition meets medicine</h1>
        <p className="text-[#8A82A8] text-[13px] mt-1 mb-5">Both perspectives honor you. Here's where they connect.</p>

        {/* Search */}
        <div className="relative mb-4">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C2BBD9]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search topics..."
            className="w-full bg-white border border-[#E4DFF3] rounded-xl pl-10 pr-4 py-3 text-[14px] text-[#2C2645] placeholder:text-[#C2BBD9] outline-none focus:border-[#8B72CF]"
          />
        </div>
      </div>

      {/* Topic chips */}
      <div className="px-6 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-[13px] font-semibold transition-colors ${
                activeTab === t
                  ? "bg-[#8B72CF] text-white"
                  : "bg-white border border-[#E4DFF3] text-[#8A82A8]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 flex flex-col gap-3">
        {filtered.map((article) => (
          <div key={article.id} className="bg-white border border-[#E4DFF3] rounded-2xl overflow-hidden">
            <button
              className="w-full p-4 flex items-center gap-3 text-left"
              onClick={() => setExpanded(expanded === article.id ? null : article.id)}
            >
              <div className={`${article.bg} w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
                {article.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${article.tagColor}`}>
                  {article.topic}
                </span>
                <p className="font-bold text-[#2C2645] text-[14px] mt-1">{article.title}</p>
              </div>
              <svg
                className={`text-[#C2BBD9] flex-shrink-0 transition-transform ${expanded === article.id ? "rotate-180" : ""}`}
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {expanded === article.id && (
              <div className="px-4 pb-4 flex flex-col gap-3">
                {/* Traditional */}
                <div className="bg-[#FFF8F0] rounded-xl p-3.5">
                  <p className="text-[#A07040] font-bold text-[12px] uppercase tracking-wider mb-1.5">Traditional Wisdom</p>
                  <p className="text-[#5C4A30] text-[13px] leading-relaxed">{article.traditional}</p>
                </div>

                {/* Medical */}
                <div className="bg-[#EEF2FF] rounded-xl p-3.5">
                  <p className="text-[#4A5FA0] font-bold text-[12px] uppercase tracking-wider mb-1.5">Medical Guidance</p>
                  <p className="text-[#303A60] text-[13px] leading-relaxed">{article.medical}</p>
                </div>

                {/* Alignment */}
                <div className="bg-[#EDF6EE] rounded-xl p-3.5">
                  <p className="text-[#3A7A44] font-bold text-[12px] uppercase tracking-wider mb-2">Where they align</p>
                  <div className="flex flex-col gap-1.5">
                    {article.alignment.map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="#6DB97A"/>
                          <path d="M4 7l2 2 4-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-[#2D5A34] text-[13px] leading-snug">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
