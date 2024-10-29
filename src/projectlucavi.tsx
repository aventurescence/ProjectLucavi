import React, {} from 'react';
import './projectlucavi.css';

const BackgroundImage = ({ children }: { children: React.ReactNode }) => (
  <div className="backgroundImage">
    {children}
  </div>
);

const Ellipse = () => (
  <>
    <div className="ellipse1" />
    <div className="ellipse2" />
    <div className="ellipse3" />
  </>
);

const NoiseImage = () => (
  <div className="noiseImage" style={{ backgroundImage: 'url(https://raw.githubusercontent.com/aventurescence/ProjectLucavi/refs/heads/dev/assets/Noise-Animation.png)' }} />
);

const VectorImage = () => (
  <img className="vectorImage" src="https://raw.githubusercontent.com/aventurescence/ProjectLucavi/ef9089690e5570687d5c07a78fc1103fd19101d8/assets/comingsoon.svg" alt="Coming Soon" />
);

const ProjectLucavi = () => {
  return (
    <div className="container">
      <BackgroundImage>
        <Ellipse />
        <NoiseImage />
        <VectorImage />
      </BackgroundImage>
    </div>
  );
};

export default ProjectLucavi;