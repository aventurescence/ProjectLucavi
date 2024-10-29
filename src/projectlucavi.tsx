import React from 'react';
import './projectlucavi.css';

const BackgroundImage = ({ children }: { children: React.ReactNode }) => (
  <div className="backgroundImage" style={{ backgroundImage: 'url(V:/GitHub/ProjectLucavi/assets/Blob1.png)' }}>
    {children}
  </div>
);

const NoiseImage = () => (
  <div className="noiseImage" style={{ backgroundImage: 'url(V:/GitHub/ProjectLucavi/assets/Noise-Animation.png)' }} />
);

const VectorImage = () => (
  <div className="vectorImage" style={{ backgroundImage: 'url(V:/GitHub/ProjectLucavi/assets/comingsoon.svg)' }} />
);

const TextOverlay = () => (
  <>
    <h1 className="textLarge">project:\\</h1>
    <h2 className="textLUCAVI">LUCAVI</h2>
    <p className="textSmall">coming soon.</p>
    <p className="textSignature">@aventurescence</p>
  </>
);

const ProjectLucavi = () => {
  return (
    <div className="container">
      <BackgroundImage>
        <NoiseImage />
        <VectorImage />
        <TextOverlay />
      </BackgroundImage>
    </div>
  );
};

export default ProjectLucavi;