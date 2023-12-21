import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React from "react";
import { screenStateAtom } from "../../../../../global/global";
import { interScreenState } from "../../../../../store/interface";

interface screenStates {
  screenState: string;
}

interface ButtonProps {
  screenState: interScreenState["status"];
  value: string;
}

function UtilityButton() {
  const [screenState, SetScreenState] = useAtom(screenStateAtom);
  const handleButtonClick = (value: interScreenState["status"]) => {
    SetScreenState({ status: value });
  };
  return (
    <UtilityButtons>
      <Button
        screenState={screenState.status}
        value="@me"
        onClick={() => handleButtonClick("@me")}
      >
        친구
      </Button>
      <Button
        screenState={screenState.status}
        value="store"
        onClick={() => handleButtonClick("store")}
      >
        Nitro
      </Button>
      <Button
        screenState={screenState.status}
        value="shop"
        onClick={() => handleButtonClick("shop")}
      >
        상점
      </Button>
    </UtilityButtons>
  );
}

export default UtilityButton;

const UtilityButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  width: 90%;
  height: 60px;
  margin: 15px;
  border-radius: 5px;

  background-color: ${(props) =>
    typeof props.value === "string" &&
    props.screenState === props.value.toLowerCase()
      ? "#3e3e3e"
      : ""};

  transition: background-color 0.3s;
  &:hover {
    background-color: #3e3e3e;
  }
`;
