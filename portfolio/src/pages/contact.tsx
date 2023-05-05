import React, { useState } from "react";
import Navigate from "../components/navigation";
import styled, { keyframes } from "styled-components";
import "paper-css/paper.css";
import LargeTitle from "../components/LargeTitle";

export default function Contact() {
  const [showLetter, setShowLetter] = useState(false);

  const handleClick = () => {
    setShowLetter(!showLetter);
  };

  return (
    <div>
      <Navigate />
      <Background>
        <Envelope onClick={handleClick}>
          <Flap />
          <InstructionText>Click Contact me</InstructionText>
          {showLetter && (
            <Letter>
              <LargeTitle color="#30d6ec">Contact Me</LargeTitle>
              <Name>Name: Jung Woo Lee</Name>
              <Country>Country: South Korea</Country>
              <Email>Email: jw1208159@gmail.com</Email>
              <GitHub>GitHub: https://github.com/wldnr1208</GitHub>
            </Letter>
          )}
        </Envelope>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background-color: #1d1d1d;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Envelope = styled.div`
  width: 550px; // 가로 크기 변경
  height: 400px; // 세로 크기 변경
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const Flap = styled.div`
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 235px 170px 235px;
  border-color: transparent transparent #f5f5f5 transparent;
`;

const slideIn = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Letter = styled.div`
  padding: 1rem;
  height: 380px; // 세로 크기 변경
  width: 530px; // 가로 크기 변경
  font-family: "Courier New", Courier, monospace;
  line-height: 1.5;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  animation: ${slideIn} 0.5s forwards;
  padding-left: 50px;
`;

const Name = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Country = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const GitHub = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const InstructionText = styled.span`
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
  color: #333;
  position: absolute;
  bottom: 10px;
  opacity: 0.8;
`;
