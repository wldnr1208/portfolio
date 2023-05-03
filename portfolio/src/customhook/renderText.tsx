import { useEffect, useState, useCallback } from "react";
import ParallaxTilt from "react-parallax-tilt";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(10%);
  }
`;

const renderText = (text: string) => {
  return text.split("").map((char, index) => {
    const rotation = Math.random() * 30 - 15; // -15 ~ 15도 회전
    const scale = 1 + Math.random() * 0.2; // 1 ~ 1.2 배 크기
    const [hue, setHue] = useState(Math.random() * 360); // 0 ~ 360도 색상

    const changeColor = useCallback(() => {
      setTimeout(() => {
        setHue(Math.random() * 360);
        changeColor();
      }, 2000);
    }, []);

    useEffect(() => {
      changeColor();
    }, [changeColor]);

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

export default renderText;

const AnimatedChar = styled.span`
  display: inline-block;
  animation: ${bounce} 2s infinite ease-in-out;
`;
