import React from "react";
import styled, { keyframes } from "styled-components";
import LargeTitle from "../components/LargeTitle";

const rotation = keyframes`
  0% {
    transform: rotateY(0) rotateX(0);
  }
  100% {
    transform: rotateY(360deg) rotateX(360deg);
  }
`;

const mySkill = () => {
  return (
    <>
      <SkillWrapper>
        <ContentWrapper>
          <Content>
            <LargeTitle color="#47fcb0">My Skill</LargeTitle>
            <h3>
              I&apos;m a front-end junior developer who&apos;s been working on
              it for nearly half a year. I am studying web development using
              React.
              <br />I completed Navigation 99, an education at the Spartan
              Coding Club, and collaborated on projects with trainees studying
              back and development in the educational curriculum.
            </h3>
          </Content>
          <CubeWrapper>
            <Cube>
              <FrontFace>
                React <br />
                JavaScript
              </FrontFace>
              <BackFace>
                Redux
                <br />
                Axios
              </BackFace>
              <LeftFace>
                TypeScript <br />
                Node.js
              </LeftFace>
              <RightFace>
                CSS
                <br />
                HTML
              </RightFace>
              <BottomFace>
                Github
                <br />
                Figma
              </BottomFace>
              <TopFace>
                ChatGpt
                <br />
                Bing image creator
              </TopFace>
            </Cube>
          </CubeWrapper>
        </ContentWrapper>
      </SkillWrapper>
    </>
  );
};

export default mySkill;

const SkillWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1d1d1d; // 배경색 변경
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  width: 970px;
  height: 100vh;
`;

const Content = styled.div`
  max-height: 100%;
  overflow-y: auto;
  margin-bottom: 2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center; // 세로 가운데 정렬
  align-items: center; // 가로 가운데 정렬
  margin-bottom h3 {
    font-size: 28px;
    line-height: 1.5;
  }
`;

const CubeWrapper = styled.div`
  perspective: 1200px;
  margin-top: 2rem;
  margin-left: 20%;
`;

const Cube = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotation} 20s infinite linear;
`;

const CubeFace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
`;

const FrontFace = styled(CubeFace)`
  background-color: #f25f5c;
  transform: translateZ(100px);
  text-align: center;
`;

const BackFace = styled(CubeFace)`
  background-color: #ffe066;
  transform: translateZ(-100px) rotateY(180deg);
  text-align: center;
`;

const LeftFace = styled(CubeFace)`
  background-color: #70c1b3;
  transform: rotateY(-90deg) translateX(-100px);
  transform-origin: center left;
  text-align: center;
`;

const RightFace = styled(CubeFace)`
  background-color: #247ba0;
  transform: rotateY(90deg) translateX(100px);
  transform-origin: center right;
  text-align: center;
`;

const TopFace = styled(CubeFace)`
  background-color: #50514f;
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
  text-align: center;
`;

const BottomFace = styled(CubeFace)`
  background-color: #f0a927;
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
  text-align: center;
`;
