import styled from "@emotion/styled";

import PersistentLogin from "../../../store/persistentLogin/persistentLogin";
import ChannelsSideBar from "./channelsSideBar/channelsSideBar";
import SearchSideBar from "./searchSideBar/searchSideBar";
import FriendScreen from "./friendScreen/friendScreen";

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
        <div>
          <FriendScreen />
        </div>
      </Containers>
    </StyledMePages>
  );
};

export default MePages;

const StyledMePages = styled.div`
  width: 100vw; /* 화면 전체 너비를 차지하도록 설정 */
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
  display: flex; /* Flexbox 레이아웃 사용 */
  flex-direction: column; /* 세로 방향으로 정렬 */
`;

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
