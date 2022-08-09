import React from "react";
import { secondsToTime } from "../../utils/secondsToTime";
interface Props {
  text?: string;
  className?: string;
  mainTime: number;
}
export const Timer = (props: Props): JSX.Element => {
  return <h3>{secondsToTime(props.mainTime)}</h3>;
};
