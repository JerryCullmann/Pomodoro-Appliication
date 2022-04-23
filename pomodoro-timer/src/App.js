import Timer from "./components/Timer";
import Settings from "./components/Settings";
import SettingsContext from "./components/SettingsContext";
import { useState } from "react";
import tomato from "./components/assets/tomato.jpg";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
      <div 
      className="h-full w-full bg-no-repeat bg-cover"
      style={{backgroundImage:`url(${tomato})`}}
      >
      
        <h1 className="text-center text-5xl font-bold p-16">
          Pomodoro App{" "}
        </h1>

        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
    </div>
  );
}

export default App;
