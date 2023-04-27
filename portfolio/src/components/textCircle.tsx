import React from "react";
import styled from "styled-components";

interface TextCircleProps {
  text: string;
}

const TextCircle: React.FC<TextCircleProps> = ({ text }) => {
  return (
    <Wrapper>
      {text.split("").map((char, index) => (
        <Character key={index} index={index}>
          {char}
        </Character>
      ))}
    </Wrapper>
  );
};

export default TextCircle;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

interface CharacterProps {
  index: number;
}

const Character = styled.div<CharacterProps>`
  position: absolute;
  font-size: 24px;
  transform: ${({ index }) =>
    `rotate(${index * 14.4}deg) translateY(-150px) rotate(-${
      index * 14.4
    }deg)`};
  transform-origin: bottom center;
  opacity: 0.8;
`;
