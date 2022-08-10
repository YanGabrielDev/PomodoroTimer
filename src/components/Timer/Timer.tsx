import React from "react";
import { Time } from "./Styled";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
interface Props {
  text?: string;
  className?: string;
  mainTime: number;
}
export const Timer = (props: Props): JSX.Element => {
  return <Time>{secondsToMinutes(props.mainTime)}</Time>;
};
