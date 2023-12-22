import styled from "@emotion/styled";
import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { BiMessageAdd } from "react-icons/bi";
import { BsMailboxFlag } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

const newGroupMessages = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "5px",
      borderRadius: "8px",
      fontSize: "20px",
    }}
  >
    새로운 그룹 메시지
  </Tooltip>
);
const mailBox = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "5px",
      borderRadius: "8px",
      fontSize: "20px",
    }}
  >
    받은 편지함
  </Tooltip>
);
const Helps = (
  <Tooltip
    id="tooltip"
    style={{
      backgroundColor: "#242424",
      color: "white",
      padding: "5px",
      borderRadius: "8px",
      fontSize: "20px",
    }}
  >
    도움말
  </Tooltip>
);

function MessageIcons() {
  return (
    <MessageIconss>
      <OverlayTrigger placement="bottom" overlay={newGroupMessages}>
        <div>
          <BiMessageAdd
            style={{
              margin: "10px",
              marginRight: "10px",
              fontSize: "40px",
            }}
          />
        </div>
      </OverlayTrigger>
      <OverlayTrigger placement="bottom" overlay={mailBox}>
        <div>
          <BsMailboxFlag
            style={{
              margin: "10px",
              marginRight: "10px",
              fontSize: "40px",
            }}
          />
        </div>
      </OverlayTrigger>
      <OverlayTrigger placement="left" overlay={Helps}>
        <div>
          <BsQuestionCircle
            style={{
              margin: "10px",
              marginRight: "10px",
              fontSize: "40px",
            }}
          />
        </div>
      </OverlayTrigger>
    </MessageIconss>
  );
}

export default MessageIcons;

const MessageIconss = styled.div`
  display: flex;
`;
