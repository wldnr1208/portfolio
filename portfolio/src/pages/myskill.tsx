import React from "react";
import Navigate from "../components/navigation";
import ProgressBar from "../components/progerssBar";
import styled from "styled-components"; // styled-components import

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MySkill: React.FC = () => {
  return (
    <div>
      <Navigate />
      <StyledContainer>
        {/* 원하는 스킬과 진행률을 나타내는 ProgressBar 컴포넌트 추가 */}
        <ProgressBar label="HTML" value={90} />
        <ProgressBar label="CSS" value={80} />
        <ProgressBar label="JavaScript" value={75} />
        <ProgressBar label="React" value={70} />
        {/* 필요한 만큼 ProgressBar 컴포넌트를 추가하십시오. */}
      </StyledContainer>
    </div>
  );
};

export default MySkill;
