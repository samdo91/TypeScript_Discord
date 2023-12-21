import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

// channelsData의 구조를 반영한 인터페이스 정의
interface ChannelData {
  src: string; // 이미지 경로
  alt: string; // 이미지 대체 텍스트
  href: string; // 링크 URL
  text: string; // 텍스트
}

function ChannelsSideBar() {
  const channelsData: ChannelData[] = [
    {
      src: "/img/logo.svg",
      alt: "React Bootstrap logo",
      href: "/channels/@me",
      text: "Brand link",
    },
    { src: "/img/logo.svg", alt: "", text: "Brand text", href: "#home" },
    { src: "/img/logo.svg", alt: "", text: "Brand text", href: "#home" },
  ];
  return (
    <>
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
                    alt={channel.alt}
                  />
                )}
                {channel.text && <span>{channel.text}</span>}
              </Navbar.Brand>
            </Container>
          </Navbar>
          <br />
        </React.Fragment>
      ))}
    </>
  );
}

export default ChannelsSideBar;
