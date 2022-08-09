import React from "react";
import { useInterval } from "../hooks/hooks";
import { secondsToTime } from "../utils/secondsToTime";
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
      <h1>osakfmnsalkmhfghsafasfsaffk{secondsToTime(mainTime)}</h1>
    </div>
  );
}
