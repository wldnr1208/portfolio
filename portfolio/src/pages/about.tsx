import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import styled, { keyframes } from "styled-components";
import { useTransition, animated } from "react-spring";
import { CSSProperties } from "react";

const About: React.FC = () => {
  const [showKeywords1, setShowKeywords1] = useState<string[]>([]);
  const [showKeywords2, setShowKeywords2] = useState<string[]>([]);

  useEffect(() => {
    const keywordList1 = ["React", "JavaScript", "TypeScript", "Next.js"];
    const keywordList2 = ["HTML", "CSS", "Git", "ChatGpt"];

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
                <SlideContent>
                  <h3>About me</h3>
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
                  <h3>Education, certificates</h3>
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
                  <h3>My hobbies</h3>
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
        </ContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 50px); // 50px 만큼의 간격을 유지합니다.
  overflow-y: scroll;
  padding-bottom: 50px; // 페이지 도트와의 간격을 유지하기 위해 패딩을 추가합니다.

  // 스크롤 바를 숨깁니다.
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; // Internet Explorer 및 Edge를 대응합니다.
  scrollbar-width: none; // Firefox를 대응합니다.
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
  margin-left: -10%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100vh;
`;

const CarouselWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 60px; // 오른쪽 여백 조절
  min-width: 500px;
`;

const SlideContent = styled.div`
  max-height: 70%;
  overflow-y: auto;
  margin-bottom: 2rem;
  color: #ffffff; // 글자색 변경

  h3 {
    font-size: 24px; // 글자 크기 변경
    line-height: 1.3; // 줄 간격 변경
  }
`;

const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 60px;
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

const Keyword = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0;
  color: #ffffff;
  animation: ${slideIn} 1s ease-in-out forwards;
  opacity: 0;
`;

const KeywordColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px; // 오른쪽 마진 추가

  &:last-child {
    margin-right: 0; // 마지막 컬럼은 오른쪽 마진 제거
  }
`;
