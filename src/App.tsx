import { useState } from "react";
import ShowcasePage from "./screens/ShowcasePage";
import BottomNav from "./components/BottomNav";
import HomeScreen from "./screens/HomeScreen";
import CheckInScreen from "./screens/CheckInScreen";
import CheckInHistoryScreen from "./screens/CheckInHistoryScreen";
import CulturalBridgeScreen from "./screens/CulturalBridgeScreen";
import CommunityScreen from "./screens/CommunityScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ConversationScreen from "./screens/ConversationScreen";
import ResourcesScreen from "./screens/ResourcesScreen";
import ProfileScreen from "./screens/ProfileScreen";

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

const SCREENS_WITH_NAV: Screen[] = ["home", "community", "messages", "resources", "profile", "checkin-history", "cultural"];

export default function App() {
  if (window.location.pathname === "/showcase") {
    return <ShowcasePage />;
  }

  const [screen, setScreen] = useState<Screen>("home");
  const [screenData, setScreenData] = useState<Record<string, unknown>>({});

  const navigate = (s: Screen, data: Record<string, unknown> = {}) => {
    setScreen(s);
    setScreenData(data);
    window.scrollTo(0, 0);
  };

  const showNav = SCREENS_WITH_NAV.includes(screen);

  return (
    <div className="flex items-start justify-center min-h-full bg-[#D9D5E8]">
      {/* Mobile frame */}
      <div className="relative w-full max-w-sm min-h-screen bg-[#F8F7FC] overflow-hidden shadow-2xl">
        {screen === "home" && <HomeScreen onNavigate={navigate} />}
        {screen === "checkin" && (
          <CheckInScreen
            concern={(screenData.concern as string) ?? "notsure"}
            concernTitle={(screenData.title as string) ?? "Something's not right"}
            onNavigate={navigate}
          />
        )}
        {screen === "checkin-history" && <CheckInHistoryScreen onNavigate={navigate} />}
        {screen === "cultural" && <CulturalBridgeScreen onNavigate={navigate} />}
        {screen === "community" && <CommunityScreen onNavigate={navigate} />}
        {screen === "post-detail" && (
          <PostDetailScreen
            post={screenData.post as Parameters<typeof PostDetailScreen>[0]["post"]}
            onNavigate={navigate}
          />
        )}
        {screen === "messages" && <MessagesScreen onNavigate={navigate} />}
        {screen === "conversation" && (
          <ConversationScreen
            conv={screenData.conv as Parameters<typeof ConversationScreen>[0]["conv"]}
            onNavigate={navigate}
          />
        )}
        {screen === "resources" && <ResourcesScreen onNavigate={navigate} />}
        {screen === "profile" && <ProfileScreen onNavigate={navigate} />}

        {showNav && <BottomNav active={screen} onNavigate={navigate} />}
      </div>
    </div>
  );
}
