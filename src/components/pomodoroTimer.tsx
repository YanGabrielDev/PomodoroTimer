import React, { useEffect } from "react";
import { useInterval } from "../hooks/hooks";
import { secondsToTime } from "../utils/secondsToTime";
import { Button } from "../components/Button/Button";
import { Timer } from "../components/Timer/Timer";
import { Pomodoro } from "../styles/GlobalStyles";
import { Container } from "./styled";
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = React.useState(false);
  const [working, setWorking] = React.useState(false);
  const [resting, setResting] = React.useState(false);

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
  };

  const configureRest = () => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    setMainTime(props.pomodoroTime);
  };

  return (
    <div>
      <Pomodoro>
        <h2>Working</h2>
        <Timer mainTime={mainTime} />
        <Container>
          <Button text="Work" onClick={() => configureWork()}></Button>
          <Button text="Rest" onClick={() => configureRest()}></Button>
          <Button
            text={timeCounting ? "Play" : "Pause"}
            onClick={() => setTimeCounting(!timeCounting)}
          ></Button>
        </Container>
      </Pomodoro>
    </div>
  );
}
