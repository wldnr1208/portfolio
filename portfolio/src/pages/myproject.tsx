import React from "react";
import Navigate from "../components/navigation";
import styled from "styled-components";
import togather from "../feat/togather.png";

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
    imageUrl: "togather.png",
    visit: "https://twogaether.site/",
  },
  {
    title: "clonetube",
    description: "Youtube clonecoding",
    technologies: [
      "React",
      "React-Query",
      "tailwind-CSS",
      "Axios",
      "Youtube API",
    ],
    imageUrl: "clonecoding.PNG",
    visit: "https://elegant-naiad-94d690.netlify.app/",
  },
];

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card>
    <Image src={project.imageUrl} alt={project.title} />
    <Title>{project.title}</Title>
    <Description>{project.description}</Description>
    <a href={project.visit}>{project.title}</a>
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
