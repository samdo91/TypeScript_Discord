import styled from "@emotion/styled";

import PersistentLogin from "../../../store/persistentLogin/persistentLogin";
import ChannelsSideBar from "./channelsSideBar/channelsSideBar";
import SearchSideBar from "./searchSideBar/searchSideBar";

const MePages = () => {
  return (
    <StyledMePages>
      <PersistentLogin />
      <Containers>
        <div>
          <ChannelsSideBar />
        </div>
        <div>
          <SearchSideBar />
        </div>
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
    flex-grow: 0.1;
    width: 40px;
    background-color: #191919;
  }

  & > div:nth-of-type(2) {
    flex-grow: 0.1;
    background-color: #1f1f1f;
  }

  & > div:nth-of-type(3) {
    flex-grow: 1.5;
    background-color: #3e3e3e;
  }
  & > div:nth-of-type(4) {
    flex-grow: 1;
    background-color: #323232;
  }
`;
