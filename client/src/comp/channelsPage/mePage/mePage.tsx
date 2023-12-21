import styled from "@emotion/styled";
import React from "react";
import PersistentLogin from "../../../store/persistentLogin/persistentLogin";
import ChannelsSideBar from "./channelsSideBar";

const MePages = () => {
  return (
    <StyledMePages>
      <PersistentLogin />
      <Containers>
        <div>
          <ChannelsSideBar />
        </div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Containers>
    </StyledMePages>
  );
};

export default MePages;

const StyledMePages = styled.div``;

const Containers = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  & > div:nth-of-type(1) {
    flex-grow: 0.2;
    background-color: red;
  }

  & > div:nth-of-type(2) {
    flex-grow: 0.7;
    background-color: green;
  }

  & > div:nth-of-type(3) {
    flex-grow: 1.5;
    background-color: white;
  }
  & > div:nth-of-type(4) {
    flex-grow: 1;
    background-color: red;
  }
`;
