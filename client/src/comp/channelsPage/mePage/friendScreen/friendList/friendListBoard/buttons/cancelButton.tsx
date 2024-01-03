import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FiX } from "react-icons/fi";

const CancelIconHint = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "10px",
      borderRadius: "8px",
      paddingLeft: "20px",
      fontSize: "20px",
      marginBottom: "5px",
      textAlign: "center",
    }}
  >
    취소
  </Tooltip>
);
function CancelButton() {
  return (
    <CancelButtons>
      <OverlayTrigger placement="top" overlay={CancelIconHint}>
        <CancelIcon>
          <FiX />
        </CancelIcon>
      </OverlayTrigger>
    </CancelButtons>
  );
}

export default CancelButton;

const CancelButtons = styled.button`
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

const CancelIcon = styled.div`
  margin-left: auto;
  font-size: 27px;
  color: rgba(126, 126, 126);
  &:hover {
    color: red;
  }
`;
