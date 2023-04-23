declare module "react-particle-effect-button" {
  import { Component } from "react";

  interface ParticleEffectButtonProps {
    hidden?: boolean;
    type?: "circle" | "rectangle" | "triangle";
    onComplete?: () => void;
    color?: string;
    style?: React.CSSProperties;
  }

  class ParticleEffectButton extends Component<ParticleEffectButtonProps> {}

  export = ParticleEffectButton;
}
