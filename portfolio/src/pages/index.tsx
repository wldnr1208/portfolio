import React, { useEffect, useState } from "react";
import BubbleBackground from "../components/bubbleBackground";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../feat/background.jpg";
import renderText from "../customhook/renderText";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <TiltWrapper>
        <TextWrapper>
          <Greeting>{renderText("Hello,")}</Greeting>
          <Name>{renderText("I'm JungWoo")}</Name>
          <Position>{renderText("Frontend Developer")}</Position>
        </TextWrapper>
        <BubbleBackground mousePosition={mousePosition} />
      </TiltWrapper>
    </>
  );
};

export default Home;

const TiltWrapper = styled.div`
  background-color: #1d1d1d; // 원하는 색상 코드로 변경하세요 (예: #f5f5f5)
  background-image: url(${backgroundImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; // 너비 100%로 설정
  height: 100vh;
`;

const Greeting = styled.h1`
  font-size: 6rem; // 크기 변경
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Name = styled.h2`
  font-size: 5rem; // 크기 변경
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Position = styled.h3`
  font-size: 3rem; // 크기 변경
  margin: 0;
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  text-align: center;
  margin-right: 40%; // 원하는 값으로 변경하세요 (예: 50px, 100px 등)
`;
