import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import styled from "styled-components";

const About = () => {
  return (
    <AboutWrapper>
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
                Trying to take on new challenges every day as a junior front-end
                developer. <br></br> I majored in radio communication, and when
                I made a simple application with RAD Studio 10 in college, I was
                interested, so I chose the path of a late developer.
              </p>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <h3>My experience</h3>
              <p>
                1:1 real-time chat implementation using Stomp.js <br></br> Kakao
                Talk implements Google SSO <br></br> Implementing FormData Image
                Resizing <br></br> Web site development using chat Gpt <br></br>
                Development of services used by real users
              </p>
            </SlideContent>
          </Slide>
          <Slide>
            <SlideContent>
              <h3>My hobbies</h3>
              <p>
                What I am most interested in now is developing the web with
                various frameworks. Usually, I have a hobby of playing games or
                playing basketball.
              </p>
            </SlideContent>
          </Slide>
        </Carousel>
      </CarouselWrapper>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1d1d1d; // 배경색 변경
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 100vh;
`;

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
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ffffff; // 페이지 도트 색상 변경
  }

  &.selected {
    background-color: #ffffff; // 선택된 페이지 도트 색상 변경
  }
`;

const SlideContent = styled.div`
  max-height: 70%;
  overflow-y: auto;
  margin-bottom: 2rem;
  color: #ffffff; // 글자색 변경

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-height: 500px) {
    margin-bottom: 3rem;
  }
`;
