import React, { useEffect, useRef, useState } from "react";
import ParallaxTilt from "react-parallax-tilt";
import BubbleBackground from "../components/bubbleBackground";
import styled, { keyframes } from "styled-components";
import backgroundImg from "../feat/background.jpg";

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

  const renderText = (text: string) => {
    return text.split("").map((char, index) => {
      const rotation = Math.random() * 30 - 15; // -15 ~ 15도 회전
      const scale = 1 + Math.random() * 0.2; // 1 ~ 1.2 배 크기
      const [hue, setHue] = useState(Math.random() * 360); // 0 ~ 360도 색상

      const changeColor = () => {
        setTimeout(() => {
          setHue(Math.random() * 360);
          changeColor();
        }, 2000);
      };

      useEffect(() => {
        changeColor();
      }, []);

      const randomTranslate = () => {
        const x = Math.random() * 20 - 10;
        const y = Math.random() * 20 - 10;
        return `translateX(${x}px) translateY(${y}px)`;
      };

      const handleMouseEnter = () => {
        setHue(Math.random() * 360);
      };

      return (
        <ParallaxTilt
          key={index}
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          scale={scale}
        >
          <AnimatedChar
            style={{
              transform: `rotate(${rotation}deg)`,
              color: `hsl(${hue}, 80%, 60%)`,
              transition: "color 2s",
            }}
            onMouseEnter={handleMouseEnter}
          >
            {char === " " ? "\u00A0" : char}
          </AnimatedChar>
        </ParallaxTilt>
      );
    });
  };

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
  background-color: #373531; // 원하는 색상 코드로 변경하세요 (예: #f5f5f5)
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
const bounce = keyframes`
  0%, 100% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(10%);
  }
`;

const AnimatedChar = styled.span`
  display: inline-block;
  animation: ${bounce} 2s infinite ease-in-out;
`;
