import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import WelcomeScreen from "./components/WelcomeScreen";
import HeartAnimation from "./components/HeartAnimation";
import CountdownScreen from "./components/CountdownScreen";
import LovePage from "./pages/LovePage";

type Stage = "welcome" | "hearts" | "countdown" | "love";

function App() {
  const [stage, setStage] = useState<Stage>("welcome");

  const handleStart = useCallback(() => setStage("hearts"), []);
  const handleHeartsFinish = useCallback(() => setStage("countdown"), []);
  const handleCountdownFinish = useCallback(() => setStage("love"), []);

  return (
    <div className="min-h-screen min-h-[100dvh] w-full overflow-x-clip bg-rose-950">
      <AnimatePresence mode="wait">
        {stage === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {stage === "hearts" && (
          <HeartAnimation key="hearts" onFinish={handleHeartsFinish} />
        )}

        {stage === "countdown" && (
          <CountdownScreen key="countdown" onFinish={handleCountdownFinish} />
        )}

        {stage === "love" && <LovePage key="love" />}
      </AnimatePresence>
    </div>
  );
}

export default App;