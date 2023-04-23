import React, { useEffect, useRef, useState } from "react";
import ParallaxTilt from "react-parallax-tilt";
import styled from "styled-components";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particlesArray: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 5; // 수정된 부분
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsla(${Math.random() * 360}, 100%, 50%, 0.8)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const createParticle = (e: MouseEvent) => {
      const xPos = e.x + Math.random() * 20 - 10;
      const yPos = e.y + Math.random() * 20 - 10;
      particlesArray.push(new Particle(xPos, yPos));
    };

    const animateParticles = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animateParticles);
    };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("mousemove", createParticle);
    animateParticles();

    return () => {
      window.removeEventListener("mousemove", createParticle);
    };
  }, []);

  const renderText = (text: string) => {
    return text.split("").map((char, index) => (
      <ParallaxTilt
        key={index}
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
      >
        <span>{char === " " ? "\u00A0" : char}</span>
      </ParallaxTilt>
    ));
  };

  return (
    <TiltWrapper>
      <TextWrapper>
        <Greeting>{renderText("Hello,")}</Greeting>
        <Name>{renderText("I'm JungWoo")}</Name>
        <Position>{renderText("Frontend Developer")}</Position>
      </TextWrapper>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      ></canvas>
    </TiltWrapper>
  );
};

export default Home;

const TiltWrapper = styled.div`
  margin-left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const TextWrapper = styled.div`
  text-align: center;
`;

const Greeting = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Name = styled.h2`
  font-size: 3rem;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const Position = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  display: flex;
  justify-content: center;
`;
