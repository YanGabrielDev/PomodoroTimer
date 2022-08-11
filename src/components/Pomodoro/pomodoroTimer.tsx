import React, { useEffect, useState, useCallback } from "react";
import { useInterval } from "../../hooks/hooks";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import { Button } from "../Button/Button";
import { Timer } from "../Timer/Timer";
import { Pomodoro } from "../../styles/GlobalStyles";
import { Container } from "./styled";
import { arrayBuffer } from "stream/consumers";
import { secondsToTime } from "../../utils/secondsToTime";
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}
export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesManager, setcyclesManager] = useState(
    new Array(props.cycles - 1).fill(true)
  );
  const [completeCycle, setCompleteCycle] = useState(0);
  const [workingTime, setWorkingTime] = useState(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setWorkingTime(workingTime + 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      setMainTime(props.pomodoroTime);
      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ]
  );
  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
    if (mainTime > 0) return;
    if (working && cyclesManager.length > 0) {
      configureRest(false);
      cyclesManager.pop();
    } else if (working && cyclesManager.length <= 0) {
      configureRest(true);
      setcyclesManager(new Array(props.cycles - 1).fill(true));
      setCompleteCycle(completeCycle + 1);
    }
    if (working) setNumberOfPomodoro(numberOfPomodoro + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    configureRest,
    setcyclesManager,
    configureWork,
    cyclesManager,
    props.cycles,
    completeCycle,
  ]);

  return (
    <div>
      <Pomodoro>
        <h2>Você esta: {working ? "Trabalhando" : "Descansando"}</h2>
        <Timer mainTime={mainTime} />
        <Container>
          <Button text="Work" onClick={() => configureWork()}></Button>
          <Button text="Rest" onClick={() => configureRest(false)}></Button>
          <Button
            className={!working && !resting ? "hidden" : ""}
            text={timeCounting ? "Pause" : "Play"}
            onClick={() => setTimeCounting(!timeCounting)}
          ></Button>
        </Container>
        <div>
          <h2>Ciclos concluídos: {completeCycle}</h2>
          <h2>Horas trabalhadas: {secondsToTime(workingTime)}</h2>
          <h2>Pomodoros concluídos: {numberOfPomodoro}</h2>
        </div>
      </Pomodoro>
    </div>
  );
}
