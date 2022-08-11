import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { PomodoroTimer } from "./components/Pomodoro/pomodoroTimer";
import { Container } from "./styles/GlobalStyles";
function App() {
  return (
    <div>
      <Container>
        <PomodoroTimer
          pomodoroTime={1800}
          shortRestTime={600}
          longRestTime={900}
          cycles={4}
        />
        <GlobalStyles />
      </Container>
    </div>
  );
}

export default App;
