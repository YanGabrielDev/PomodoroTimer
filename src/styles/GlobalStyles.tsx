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
     background-image: url("../assets/image/vai.png"); 
    /* background: url("https://media.gettyimages.com/photos/belo-horizonte-minas-gerais-brazil-picture-id495598911?s=2048x2048"); */
    /* background-image: url("../../assets/backImage.jpg"); */
    /* background-color: ${Colors.rest};     */
}
.working{
  background-color: ${Colors.WOrking};
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
