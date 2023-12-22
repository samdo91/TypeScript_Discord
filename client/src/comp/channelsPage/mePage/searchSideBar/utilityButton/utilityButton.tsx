import styled from "@emotion/styled";
import { useAtom } from "jotai";
import React from "react";
import { screenStateAtom } from "../../../../../global/global";
import { interScreenState } from "../../../../../store/interface";
import { GrRestroomMen } from "react-icons/gr";
import { SiFirefox } from "react-icons/si";
import { PiStorefront } from "react-icons/pi";
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
      <ButtonSection
        screenState={screenState.status}
        value="@me"
        onClick={() => handleButtonClick("@me")}
      >
        <GrRestroomMen
          style={{
            margin: "10px",
            marginRight: "20px",
            fontSize: "40px",
          }}
        />
        <Button>친구</Button>
      </ButtonSection>
      <ButtonSection
        screenState={screenState.status}
        value="store"
        onClick={() => handleButtonClick("store")}
      >
        <SiFirefox
          style={{
            margin: "10px",
            marginRight: "20px",
            fontSize: "35px",
          }}
        />
        <Button>Nitro</Button>
      </ButtonSection>
      <ButtonSection
        screenState={screenState.status}
        value="shop"
        onClick={() => handleButtonClick("shop")}
      >
        <PiStorefront
          style={{
            margin: "10px",
            marginRight: "20px",
            fontSize: "35px",
          }}
        />
        <Button>상점</Button>
      </ButtonSection>
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
const ButtonSection = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 27px;
  width: 90%;
  height: 60px;
  margin: 15px;
  border-radius: 5px;

  background-color: ${(props) =>
    typeof props.value === "string" && props.screenState === props.value
      ? "#3e3e3e"
      : ""};

  transition: background-color 0.3s;
  &:hover {
    background-color: #3e3e3e;
  }
`;
const Button = styled.div``;
