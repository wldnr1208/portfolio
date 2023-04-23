import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import styled, { keyframes, css } from "styled-components";
import Navigation from "../components/navigation";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 로딩 시간 조절 (예: 3000ms = 3초)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <LoadingOverlay isLoading={isLoading}>
        <Loader>
          <LoaderSpan blur="5px" />
          <LoaderSpan blur="10px" />
          <LoaderSpan blur="25px" />
          <LoaderSpan blur="50px" />
          <LoaderAfter />
        </Loader>
      </LoadingOverlay>
    </>
  );
}

export default MyApp;

const LoadingOverlay = styled.div<{ isLoading: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isLoading }) => (isLoading ? "150px" : "100%")};
  width: ${({ isLoading }) =>
    isLoading ? "100%" : "0"}; // width를 100%로 변경
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  z-index: 1000;
  overflow: hidden;
  animation: ${({ isLoading }) =>
    isLoading
      ? css`
          ${slideIn} 0.5s ease-out forwards
        `
      : "none"};
`;
const Loader = styled.div`
  position: absolute; // 로딩 오버레이와 겹치지 않게 함
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  animation: ${loaderAnimation} 1.2s linear infinite;
`;

const LoaderSpan = styled.span<{ blur: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
  filter: ${({ blur }) => `blur(${blur})`};
`;

const LoaderAfter = styled.div`
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #f1f1f1;
  border: solid white 10px;
  border-radius: 50%;
`;
