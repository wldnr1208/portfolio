import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import styled, { keyframes } from "styled-components";
import { useTransition, animated } from "react-spring";
import { CSSProperties } from "react";
import LargeTitle from "../components/LargeTitle";

const About: React.FC = () => {
  const [showKeywords1, setShowKeywords1] = useState<string[]>([]);

  useEffect(() => {
    const keywordList1 = [
      "- Collaborate with web designers & backend developers",
      "- Kakao Talk implements Google SSO",
      "- Image Resizing Implementation",
      "- 1:1 Live Chat Implementation",
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
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [showKeywords1]);

  const keywordTransitions1 = useTransition(showKeywords1, {
    from: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0 },
    config: { duration: 1000 },
    keys: showKeywords1,
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
            ></Carousel>
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
            </Keywords>
          </ExperienceWrapper>
        </ContentWrapper>
      </AboutWrapper>
    </>
  );
};

export default About;

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
  width: 800px;

  font-size: 23px;
  font-weight: bold;
  margin: 50px 0; // 상하 여백 조절
  color: #ffffff;
  animation: ${slideIn} 1s ease-in-out forwards;
  opacity: 0;
  line-height: 2;
`;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1d1d1d;
`;

const KeywordColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0; // margin 제거
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; // 'height'를 '100%'에서 '100vh'로 변경
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; // 'height'를 '100%'에서 '100vh'로 변경
`;

const CarouselWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto; // 'height'를 '80%'에서 'auto'로 변경
  margin-bottom: 60px;
  min-width: 600px;
`;

const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: auto; // 새로 추가된 부분
`;
