import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import styled, { keyframes } from "styled-components";
import { useTransition, animated } from "react-spring";
import { CSSProperties } from "react";
import LargeTitle from "../components/LargeTitle";

const About: React.FC = () => {
  const [showKeywords1, setShowKeywords1] = useState<string[]>([]);
  const [showKeywords2, setShowKeywords2] = useState<string[]>([]);

  useEffect(() => {
    const keywordList1 = [
      "- Collaborate with web designers & backend developers",
      "- Kakao Talk implements Google SSO",
      "- Image Resizing Implementation",
      "- 1:1 Live Chat Implementation",
    ];
    const keywordList2 = [
      "- Pursuing the development of responsive web pages",
      "- Development of services by real users",
      "- Validation using a regular expression",
      "- Convert the entered address to latitude and longitude coordinates",
    ];

    const interval = setInterval(() => {
      if (showKeywords1.length < keywordList1.length) {
        setShowKeywords1((keywords) => [
          ...keywords,
          keywordList1[showKeywords1.length],
        ]);
      } else if (showKeywords2.length < keywordList2.length) {
        setShowKeywords2((keywords) => [
          ...keywords,
          keywordList2[showKeywords2.length],
        ]);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [showKeywords1, showKeywords2]);

  const keywordTransitions1 = useTransition(showKeywords1, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    keys: showKeywords1,
  });

  const keywordTransitions2 = useTransition(showKeywords2, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    keys: showKeywords2,
  });

  return (
    <>
      <AboutWrapper>
        <ContentWrapper>
          <CarouselWrapper>
            <Carousel
              axis="vertical"
              showThumbs={false}
              showStatus={false}
              emulateTouch
              showArrows={false} // 화살표를 숨깁니다.
              swipeScrollTolerance={0} // 슬라이드 겹침 문제를 해결하기 위해 추가된 코드
              renderIndicator={(onClickHandler, isSelected, index, label) => (
                <PagingDot
                  onClick={onClickHandler}
                  className={isSelected ? "selected" : ""}
                  aria-label={label}
                  key={index}
                />
              )}
            >
              <Slide>
                <LargeTitle color="#ff941b">Myself & I</LargeTitle>
                <SlideContent>
                  <h2>About me</h2>
                  <p>
                    Trying to take on new challenges every day as a junior
                    front-end developer. <br></br> I majored in radio
                    communication, and when I made a simple application with RAD
                    Studio 10 in college, I was interested, so I chose the path
                    of a late developer.
                  </p>
                </SlideContent>
              </Slide>
              <Slide>
                <SlideContent>
                  <h2>Education, certificates</h2>
                  <p>
                    Bachelor of Science in Radio Engineering, Kunsan University
                    National Certificate - Broadcasting and Communications
                    Engineer National Certificate - Information and
                    Communications Engineer National Certificate - Wireless
                    Equipment Engineer
                  </p>
                </SlideContent>
              </Slide>
              <Slide>
                <SlideContent>
                  <h2>My hobbies</h2>
                  <p>
                    What I am most interested in now is developing the web with
                    various frameworks.so TypeScript and Next among several
                    frameworks.I am developing a portfolio using js. Usually, I
                    have a hobby of playing games or playing basketball.
                  </p>
                </SlideContent>
              </Slide>
            </Carousel>
          </CarouselWrapper>
          <ExperienceWrapper>
            <LargeTitle color="#fbfd8e">My experience</LargeTitle>

            <Keywords>
              <KeywordColumn>
                {keywordTransitions1(
                  (style: CSSProperties, keyword: string, index: number) => (
                    <animated.div style={style} key={keyword}>
                      <Keyword>{keyword}</Keyword>
                    </animated.div>
                  )
                )}
              </KeywordColumn>
              <KeywordColumn>
                {keywordTransitions2(
                  (style: CSSProperties, keyword: string, index: number) => (
                    <animated.div style={style} key={keyword}>
                      <Keyword>{keyword}</Keyword>
                    </animated.div>
                  )
                )}
              </KeywordColumn>
            </Keywords>
          </ExperienceWrapper>
        </ContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;
const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 추가된 부분
`;
const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px);
  overflow-y: scroll;

  // 스크롤 바를 숨깁니다.
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  // 슬라이드 간의 여백 조정
  margin-bottom: 15%;
`;

const PagingDot = styled.button`
  width: 10px;
  height: 10px;
  background-color: #c4c4c4;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff; // 페이지 도트 색상 변경
  }

  &.selected {
    background-color: #ffffff; // 선택된 페이지 도트 색상 변경
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1d1d1d; // 배경색 변경
`;

const SlideContent = styled.div`
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

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start; // 변경된 부분
  margin-top: 60px; // 상단 여백 조절
  margin-bottom: 60px; // 하단 여백 조절
  margin-left: 60px;
  width: 100%; // 수정된 부분
  height: 200px; // 높이 조절
`;

const Keyword = styled.span`
  width: 800px;

  font-size: 15px;
  font-weight: bold;
  margin: 50px 0; // 상하 여백 조절
  color: #ffffff;
  animation: ${slideIn} 1s ease-in-out forwards;
  opacity: 0;
  line-height: 2;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1200px; // max-width 값을 늘립니다.
  height: 100vh;
`;

const CarouselWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  margin-bottom: 60px;
  min-width: 600px; // min-width 값을 늘립니다.
`;

const KeywordColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 200px; // margin-right 값을 늘립니다.

  &:last-child {
    margin-right: 0;
  }
`;
