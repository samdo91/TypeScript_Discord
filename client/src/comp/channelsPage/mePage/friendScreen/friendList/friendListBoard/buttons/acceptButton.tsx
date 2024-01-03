import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCheck } from "react-icons/fa6";

const AcceptIconHint = (
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

function AcceptButton() {
  return (
    <AcceptButtons>
      <OverlayTrigger placement="top" overlay={AcceptIconHint}>
        <AcceptIcon>
          <FaCheck />
        </AcceptIcon>
      </OverlayTrigger>
    </AcceptButtons>
  );
}

export default AcceptButton;

const AcceptButtons = styled.button`
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

const AcceptIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: green;
  }
`;
