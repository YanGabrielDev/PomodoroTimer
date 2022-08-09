import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { PomodoroTimer } from "./components/pomodoroTimer";
import { Container } from "./styles/GlobalStyles";
function App() {
  return (
    <div>
      <Container>
        <PomodoroTimer
          pomodoroTime={3600}
          shortRestTime={300}
          longRestTime={900}
        />
        <GlobalStyles />
      </Container>
    </div>
  );
}

export default App;
