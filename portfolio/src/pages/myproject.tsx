import React from "react";
import Navigate from "../components/navigation";
import styled from "styled-components";

type Technology = string;

type Project = {
  title: string;
  description: string;
  technologies: Technology[];
  imageUrl: string;
  visit: string;
};

const projects: Project[] = [
  {
    title: "twogaether",
    description: "A real-time chat matching program for dog walking",
    technologies: [
      "React",
      "Redux-Thunk",
      "Styled-components",
      "Axios",
      "Stomp.js",
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AJFCJaXegzMx-W9qE_ys5eO0vJNrRYQXiKL4e_BBMCWT7oXGhiNhcH-MHWmLOksBr8D4FeBXPjhgq5dxmIbnIf-BTs_US8FHYYCnalijYBAZ4fkrRjvCDqBtvE-pvdzgLufQWKSuhdvVFAG1WKU_zv7uMSqdZ4uufa2esNqnOYH5jjktcRiNdSvOqqCkOiNqK0vadSWCXDV-VzR9Vzi9z1sP53tFx0Doc9sl_qKX1dO35Hv4VbPZOjqMKOZJeOKY_gATUslt31OXpO4Ncr9Htyf6_Y9n16yyI1TjWpaw9JoJOTL4kiFRp8eTVtNskLsdgl1Ao3X2fP1dXX0T3lBMiYqOoAgX0x0AiOBhnsff9MM9WYTikwMX8WIgBD1ueY_ZXQKKE1o6BnHMyn6u6z0W0-RIRe-MuPdHk_KJFf0pUYBTFlufqXRMau-NJQUfJxa4C03HFnD1_Dcqoix8jLk7KFPy7bzHLsvzwNrzVfNn9Ptdk07sulTYmin1xKxd9CoUt4Ej17N3ydMIAYk8io6iromFmyWDlpQMC4TcNl_6s0w5xmD0_xK0GPbza00MzmUh1dYqAZ_sKeIlbZbJ-xqXWD_Dt8wGks66a5FJLT4-qwsJKWtz1WXBlQN1z1QClznf0hZUA_uCDXcHWULClu5BobPLFRp6EX2E85bybeetZSY_PnbXm0fRGyBqdCULsmjPpxztGx1r7V177bPZO4l6AnneAnILfD6eFNXomODwH6ozV7QwEkC4izViMBg4Els1jfCenMrU0B1KRgjpq-fPKJzn2N22iKFEns7bCWg-u-i61BLE77UUaHwrlqnBZltAGFVDJs3-0v8I4BruyDS4VSJlUrDV4GlhIp066PLJW2eBLPiLclxTrPCDxcml8JAQbi6be5A_he0PjNs1leM-sa0kDC_8=w1010-h1010-s-no?authuser=0",
    visit: "https://twogaether.site/",
  },
  /*   {
    title: "Project 2",
    description: "Description of Project 2",
    technologies: ["Node.js", "Express", "MongoDB"],
    imageUrl: "https://via.placeholder.com/150",
  }, */
  // ...add more projects
];

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card>
    <Image src={project.imageUrl} alt={project.title} />
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <a href={project.visit}>visit twogaether project</a>
    <Technologies>
      {project.technologies.map((technology) => (
        <Technology key={technology}>{technology}</Technology>
      ))}
    </Technologies>
  </Card>
);

export default function MyProject() {
  return (
    <StyledDiv>
      <Navigate />
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ProjectsContainer>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #1d1d1d;
  min-height: 100vh;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 12rem;
  padding-top: 2rem;
`;

const Card = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 1rem;
  width: 300px;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%; // 원하는 너비로 변경
  height: 200px; // 원하는 높이로 변경
  object-fit: cover; // 이미지 크기를 원하는대로 조절하면서 비율을 유지
  border-radius: 5px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Technologies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-top: 1rem;
`;

const Technology = styled.li`
  background-color: #3498db;
  color: #fff;
  font-size: 0.8rem;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;
