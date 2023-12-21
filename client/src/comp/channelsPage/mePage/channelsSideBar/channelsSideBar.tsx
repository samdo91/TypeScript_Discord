import { useAtom } from "jotai";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { userDataAtom } from "../../../../global/global";
import styled from "@emotion/styled";
import PersistentLogin from "../../../../store/persistentLogin/persistentLogin";

// channelsData의 구조를 반영한 인터페이스 정의
interface ChannelData {
  src: string; // 이미지 경로
  alt: string; // 이미지 대체 텍스트
  href: string; // 링크 URL
  text: string; // 텍스트
}

function ChannelsSideBar() {
  const [userData, setUserData] = useAtom(userDataAtom);
  const myChannelsData = userData.meChannelData;
  const channelsData: ChannelData[] = [
    {
      src: "/img/logo.svg",
      alt: "React Bootstrap logo",
      href: "/channels/@me",
      text: "Brand link",
    },
    {
      src: "/img/logo.svg",
      alt: "",
      text: "Brand text",
      href: "#home",
    },
    { src: "/img/logo.svg", alt: "", text: "Brand text", href: "#home" },
  ];
  return (
    <SideBars>
      <PersistentLogin />
      <Container>
        <div>
          <React.Fragment key={"myChannelsD"}>
            <Navbar className="bg-body-tertiary">
              <Container>
                <Navbar.Brand href={myChannelsData?.[0]?.href ?? "#"}>
                  {myChannelsData?.length > 0 && myChannelsData[0]?.src && (
                    <img
                      src={myChannelsData[0].src}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt={myChannelsData[0].alt ?? ""}
                      style={{ margin: "10px" }}
                    />
                  )}
                </Navbar.Brand>
              </Container>
            </Navbar>
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
                      src={channel.src}
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt={channel.alt ?? ""}
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
