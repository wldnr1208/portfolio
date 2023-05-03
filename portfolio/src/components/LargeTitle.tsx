import React from "react";
import styled from "styled-components";

type LargeTitleProps = {
  children: React.ReactNode;
  color?: string;
};

const LargeTitle: React.FC<LargeTitleProps> = ({ children, color }) => {
  return (
    <h1>
      {React.Children.toArray(children).flatMap((child) =>
        typeof child === "string"
          ? child.split("").map((char, index) => (
              <CharWrapper key={`${char}-${index}`} color={color}>
                {char}
              </CharWrapper>
            ))
          : child
      )}
    </h1>
  );
};

export default LargeTitle;

type CharWrapperProps = {
  color?: string;
};

const CharWrapper = styled.span<CharWrapperProps>`
  font-size: 2.5rem;
  display: inline-block;
  height: 40px;
  margin: 2px;
  transition: transform 0.3s ease;
  color: ${({ color }) => color || "#fdcc70"};
  &:hover {
    transform: translateY(-10px);
  }
`;
