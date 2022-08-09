import React from "react";
import { useInterval } from "../hooks/hooks";
import { secondsToTime } from "../utils/secondsToTime";
import { Button } from "../components/Button/Button";
import { Timer } from "../components/Timer/Timer";
interface Props {
  defaultPomodoroTime: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);
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
