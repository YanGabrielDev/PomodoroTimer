import React from "react";
import { Time } from "./Styled";
import { secondsToTime } from "../../utils/secondsToTime";
interface Props {
  text?: string;
  className?: string;
  mainTime: number;
}
export const Timer = (props: Props): JSX.Element => {
  return <Time>{secondsToTime(props.mainTime)}</Time>;
};
