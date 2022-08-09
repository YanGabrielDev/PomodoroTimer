import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { PomodoroTimer } from "./components/pomodoroTimer";
function App() {
  return (
    <div className="App">
      <>
        <PomodoroTimer defaultPomodoroTime={1000} />
        <GlobalStyles />
      </>
    </div>
  );
}

export default App;
