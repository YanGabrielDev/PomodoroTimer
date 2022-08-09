import styled from "styled-components";
import * as Colors from "../../configs/Colors/Colors";

export const GenericButton = styled.button`
  padding: 10px 25px;
  background-color: ${Colors.bodyPomodoro};
  color: ${Colors.whiteColor};
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
  border: solid;
  border-color: ${Colors.whiteColor};
  margin: 20px auto;
`;
