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
  transition: background-color 300ms ease-in-out;
  margin: 50px 20px;
  padding: 20px;
  border-radius: 16px;
  border-color: ${Colors.whiteColor};
  color: ${Colors.whiteColor};
  text-align: center;
`;

export const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
`;
