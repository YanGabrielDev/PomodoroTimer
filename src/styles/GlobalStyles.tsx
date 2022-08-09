import styled, { createGlobalStyle } from "styled-components";
import * as Colors from "../configs/Colors/Colors";
export default createGlobalStyle`
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
body{
    font-family: sans-serif;
    background-color: ${Colors.rest};
    
}
`;
export const Pomodoro = styled.div`
  background-color: ${Colors.bodyPomodoro};
  margin: 50px 20px;
  padding: 20px;
  border-radius: 5px;
`;
