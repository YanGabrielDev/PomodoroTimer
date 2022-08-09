import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { PomodoroTimer } from "./components/pomodoroTimer";
function App() {
  return (
    <div className="App">
      <>
        <PomodoroTimer
          pomodoroTime={3600}
          shortRestTime={300}
          longRestTime={900}
        />
        <GlobalStyles />
      </>
    </div>
  );
}

export default App;
