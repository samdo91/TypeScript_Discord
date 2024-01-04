import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { userDataAtom } from "../../../../../../../global/global";
import { useAtom } from "jotai";
import { ButtonProps } from "./acceptButton";

const EtcIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "10px",
      paddingLeft: "20px",
      borderRadius: "8px",
      fontSize: "20px",
      marginBottom: "5px",
      textAlign: "center",
    }}
  >
    수락
  </Tooltip>
);

function EtcButton({ friend }: ButtonProps) {
  return (
    <EtcButtons>
      <OverlayTrigger placement="top" overlay={EtcIconHint}>
        <EtcIcon>
          <BiDotsVerticalRounded />
        </EtcIcon>
      </OverlayTrigger>
    </EtcButtons>
  );
}

export default EtcButton;
const EtcButtons = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  margin: 5px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 15px;
  border: none;
  background-color: #1f1f1f;
`;

const EtcIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: green;
  }
`;
