import React from "react";
import { GenericButton } from "./styled";
interface Props {
  onClick?: () => void;
  text: string;
  className?: string;
}
export const Button = (props: Props): JSX.Element => {
  return (
    <GenericButton onClick={props.onClick} className={props.className}>
      {props.text}
    </GenericButton>
  );
};
