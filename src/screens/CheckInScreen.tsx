import { useState } from "react";

type Screen = "home" | "checkin" | "checkin-questions" | "checkin-result" | "checkin-history" | "cultural" | "community" | "post-detail" | "messages" | "conversation" | "resources" | "profile";

interface Props {
  concern: string;
  concernTitle: string;
  onNavigate: (screen: Screen, data?: Record<string, unknown>) => void;
  initialStep?: "q1" | "q2" | "result";
}

const concernData: Record<string, {
  emoji: string;
  questions: Array<{ question: string; options: string[] }>;
  resultTitle: string;
  resultBody: string;
  steps: string[];
}> = {
  body: {
    emoji: "🌿",
    questions: [
      {
        question: "How long has this been happening?",
        options: ["Just started today", "A few days", "About a week", "More than two weeks"],
      },
      {
        question: "Is it getting better, worse, or staying the same?",
        options: ["Getting better", "Staying the same", "Getting worse", "Hard to tell"],
      },
    ],
    resultTitle: "Physical changes are normal — and worth tracking",
    resultBody: "Many physical symptoms are common in the first weeks postpartum as your body heals and adjusts. Hormonal shifts, muscle fatigue, and inflammation are all part of recovery. You're not imagining it.",
    steps: [
      "Rest when you can, even briefly",
      "Stay hydrated — at least 8 glasses a day",
      "Note if the symptom changes over 24 hours",
      "Call your OB if pain intensifies or you develop a fever",
    ],
  },
  overwhelmed: {
    emoji: "🤍",
    questions: [
      {
        question: "When did these feelings start?",
        options: ["In the last day or two", "This past week", "Since delivery", "It comes and goes"],
      },
      {
        question: "Are you able to sleep when you get the chance?",
        options: ["Yes, mostly", "It's difficult", "No, even when baby sleeps", "I'm not sure"],
      },
    ],
    resultTitle: "Feeling overwhelmed is not a sign you're failing",
    resultBody: "Up to 80% of new mothers experience mood changes after birth. The combination of sleep deprivation, hormonal shifts, and the emotional weight of caregiving is immense. What you're feeling is real and valid.",
    steps: [
      "Give yourself permission to ask for help",
      "Try one small grounding practice — a breath, a stretch",
      "Reach out to someone you trust today",
      "If feelings persist or deepen, speak with a professional",
    ],
  },
  notsure: {
    emoji: "💬",
    questions: [
      {
        question: "What best describes what you're noticing?",
        options: ["A feeling in my body", "My emotions feel off", "I just feel \"different\"", "Something else"],
      },
      {
        question: "How is this affecting your daily life?",
        options: ["Not much yet", "It's distracting", "Making things harder", "Significantly"],
      },
    ],
    resultTitle: "Trusting your instincts is the right call",
    resultBody: "You know your body and mind better than anyone. When something feels off — even if you can't name it — that's worth paying attention to. Postpartum changes can be subtle and complex.",
    steps: [
      "Take a few minutes to journal what you're noticing",
      "Track how you feel over the next 24–48 hours",
      "Share your check-in with your healthcare provider",
      "You can always message a professional through SKYE",
    ],
  },
};

export default function CheckInScreen({ concern, concernTitle, onNavigate, initialStep = "q1" }: Props) {
  const data = concernData[concern] ?? concernData.notsure;
  const [step, setStep] = useState<"q1" | "q2" | "result">(initialStep);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step === "q1") setStep("q2");
    else setStep("result");
  };

  const q1 = data.questions[0];
  const q2 = data.questions[1];

  const progressWidth = step === "q1" ? "33%" : step === "q2" ? "66%" : "100%";

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <button onClick={() => onNavigate("home")} className="flex items-center gap-2 text-[#8A82A8] mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span className="font-semibold text-[14px]">Back</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">{data.emoji}</span>
          <div>
            <p className="text-[#8A82A8] text-xs font-semibold uppercase tracking-wider">Quick Check-In</p>
            <p className="font-bold text-[#2C2645] text-[15px]">{concernTitle}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-[#EDE9F8] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8B72CF] rounded-full transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-10">
        {step !== "result" && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-[#2C2645] leading-snug mt-4 mb-8">
              {step === "q1" ? q1.question : q2.question}
            </h2>
            <div className="flex flex-col gap-3">
              {(step === "q1" ? q1.options : q2.options).map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="w-full bg-white border-2 border-[#E4DFF3] rounded-2xl p-4 text-left font-semibold text-[#2C2645] text-[15px] hover:border-[#8B72CF] hover:bg-[#EDE9F8] transition-colors active:scale-[0.98]"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "result" && (
          <div className="mt-4">
            {/* Supportive result */}
            <div className="bg-[#EDE9F8] rounded-3xl p-5 mb-5">
              <p className="text-[#8B72CF] font-bold text-xs uppercase tracking-wider mb-2">What we found</p>
              <h2 className="font-display text-xl font-semibold text-[#2C2645] leading-snug mb-3">
                {data.resultTitle}
              </h2>
              <p className="text-[#5A4A8A] text-[14px] leading-relaxed">{data.resultBody}</p>
            </div>

            {/* Next steps */}
            <div className="bg-white border border-[#E4DFF3] rounded-3xl p-5 mb-5">
              <p className="font-bold text-[#2C2645] text-[14px] mb-3">Simple next steps</p>
              <div className="flex flex-col gap-2.5">
                {data.steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EDF6EE] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#6DB97A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-[#2C2645] text-[14px] leading-snug">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={() => onNavigate("messages")}
              className="w-full bg-[#8B72CF] text-white font-bold text-[16px] rounded-2xl py-4 mb-3 active:scale-[0.98] transition-transform"
            >
              Talk to a professional
            </button>
            <button
              onClick={() => onNavigate("checkin-history")}
              className="w-full bg-[#EDE9F8] text-[#8B72CF] font-bold text-[16px] rounded-2xl py-4 active:scale-[0.98] transition-transform"
            >
              Save this check-in
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
