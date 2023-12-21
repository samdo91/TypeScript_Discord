import { useAtom } from "jotai";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { userDataAtom } from "../../../../global/global";
import styled from "@emotion/styled";
import PersistentLogin from "../../../../store/persistentLogin/persistentLogin";
import DiscordIcon from "../../../../store/icon/discord_Icon_Defult.jpg";

// channelsData의 구조를 반영한 인터페이스 정의
interface ChannelData {
  src: string; // 이미지 경로
  alt: string; // 이미지 대체 텍스트
  href: string; // 이동할 링크 링크 URL
  text: string; // 텍스트
}

function ChannelsSideBar() {
  const [userData] = useAtom(userDataAtom);
  const myChannelsData = userData.meChannelData;
  const channelsData: ChannelData[] = [
    {
      src: "/store/icon/discord_Icon_Defult.jpg",
      alt: "React Bootstrap logo",
      href: "/channels/@me",
      text: "Brand link",
    },
    {
      src: DiscordIcon,
      alt: "",
      text: "Brand text",
      href: DiscordIcon,
    },
    {
      src: "/store/icon/discord_Icon_Defult.jpg",
      alt: "ㄹㅇㄴㅁㄹㅇㄴㅁ",
      text: "Brand text",
      href: DiscordIcon,
    },
  ];
  return (
    <SideBars>
      <PersistentLogin />
      <Container>
        <div>
          <React.Fragment key={"myChannelsD"}>
            <Navbar className="bg-body-tertiary">
              <Container>
                <IconStion>
                  <Navbar.Brand href={myChannelsData?.[0]?.href ?? "#"}>
                    {myChannelsData?.length > 0 && myChannelsData[0]?.src && (
                      <img
                        src={myChannelsData[0].src}
                        width="60px"
                        height="60px"
                        className="d-inline-block align-top"
                        alt={myChannelsData[0].alt ?? ""}
                        style={{
                          margin: "5px",
                          marginTop: "20px",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </Navbar.Brand>
                </IconStion>
              </Container>
            </Navbar>
            <UnderLine />

            <br />
          </React.Fragment>
        </div>

        {channelsData.map((channel, index) => (
          <React.Fragment key={index}>
            <Navbar className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href={channel.href}>
                  {channel.src && (
                    <img
                      src="https://image.edaily.co.kr/images/Photo/files/NP/S/2021/03/PS21032600411.jpg"
                      width="60px"
                      height="60px"
                      className="d-inline-block align-top"
                      alt={channel.alt ?? ""}
                      style={{ margin: "5px", borderRadius: "20px" }}
                    />
                  )}
                </Navbar.Brand>
              </Container>
            </Navbar>
            <br />
          </React.Fragment>
        ))}
      </Container>
    </SideBars>
  );
}

export default ChannelsSideBar;

const SideBars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UnderLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  box-shadow: 0.5px 0.5px 0 #c0c0c0;
  width: 40px;
  margin: 0 auto;
`;

// const SideLine = styled.div`
//   display: flex;
//   border: 1px solid #c0c0c0;
//   border-radius: 0 0 16px 16px;
//   box-shadow: 0.5px 0.5px 0 #c0c0c0;
//   width: 40px;
//   height: 15px;
//   background-color: #c0c0c0;
//   transform: rotate(-90deg);
//   transform-origin: bottom left;
// `;

const IconStion = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
