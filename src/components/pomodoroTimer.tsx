import React from "react";
import { useInterval } from "../hooks/hooks";
import { secondsToTime } from "../utils/secondsToTime";
import { Button } from "../components/Button/Button";
import { Timer } from "../components/Timer/Timer";
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
  useInterval(() => {
    setMainTime(mainTime + 1);
  }, 1000);
  return (
    <div>
      <Button text="Play timer"></Button>
      <Timer mainTime={mainTime} />
    </div>
  );
}
