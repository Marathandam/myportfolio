import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Hackathon Builds</h2>
        <p className="section-subtitle">
          Innovative solutions developed for real-world challenges
        </p>

        <div className="projects-grid">
          {/* 🏦 Citi Bridge Hackathon */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-badge badge-hackathon">Hackathon Winner</span>
              <h3 className="project-title">CIBIL Score Generator – Citi Bridge Hackathon</h3>
              <div className="project-meta">
                <span className="meta-award">Second Runner-Up</span>
                <span className="meta-date">• 2023</span>
              </div>
            </div>
            <p className="project-description">
              This project addresses the challenge of financial inclusion by predicting creditworthiness for individuals who
              lack formal banking history using alternative data sources.
            </p>
            <div className="tech-stack">
              <span className="tech-pill">Machine Learning</span>
              <span className="tech-pill">RandomForest</span>
              <span className="tech-pill">XGBoost</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">SHAP</span>
            </div>
            <ul className="project-features">
              <li>Implemented robust ensemble ML models</li>
              <li>Used SHAP for explainability</li>
              <li>FastAPI for backend inference</li>
              <li>Lovable AI as the frontend layer</li>
            </ul>
          </div>

          {/* 🚀 Zero Gravity Hackathon */}
          <div className="project-card">
            <div className="project-header">
              <span className="project-badge badge-winner">1st Prize</span>
              <h3 className="project-title">SAR Image Colorization – Zero Gravity Hackathon</h3>
              <div className="project-meta">
                <span className="meta-award">Top Among 300+ Teams</span>
                <span className="meta-date">• 2023</span>
              </div>
            </div>
            <p className="project-description">
              Transforms grayscale SAR satellite images into near-optical representations for disaster management and
              environmental monitoring applications.
            </p>
            <div className="tech-stack">
              <span className="tech-pill">Deep Learning</span>
              <span className="tech-pill">Diffusion Models</span>
              <span className="tech-pill">Sentinel API</span>
              <span className="tech-pill">FastAPI</span>
              <span className="tech-pill">React.js</span>
            </div>
            <ul className="project-features">
              <li>Trained diffusion model with 0.85 FID score</li>
              <li>Used Sentinel-1 and Sentinel-2 data</li>
              <li>Live SAR-to-optical via Sentinel Hub API</li>
              <li>React frontend for UI + animation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
