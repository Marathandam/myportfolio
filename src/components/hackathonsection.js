import React from "react";

const HackathonSection = () => {
  return (
    <section id="hackathons" className="hackathons-section">
      <div className="container">
        <h2 className="section-title">Hackathon Achievements</h2>

        {/* Zero Gravity Hackathon */}
        <div className="hackathon-card">
          <h3 className="hackathon-title">Zero Gravity Hackathon – SAR Colorization</h3>
          <p className="hackathon-description">
            Participated in Zero Gravity Hackathon and built a real-time SAR-to-Optical satellite image colorization system using deep learning. 
            The solution was designed for disaster response and geospatial monitoring.
          </p>
          <ul className="hackathon-points">
            <li>Used Sentinel-1 SAR and Sentinel-2 Optical imagery</li>
            <li>Implemented a Diffusion Model for realistic image colorization</li>
            <li>Integrated with Sentinel Hub and React-based frontend</li>
            <li><strong>Won 1st Place</strong> among 300+ participating teams</li>
          </ul>
        </div>

        {/* Citi Bridge Hackathon */}
        <div className="hackathon-card">
          <h3 className="hackathon-title">Citi Bridge Hackathon – Credit Score AI</h3>
          <p className="hackathon-description">
            Developed an AI-based CIBIL score prediction system to help banks evaluate creditworthiness for unbanked individuals using alternate data.
          </p>
          <ul className="hackathon-points">
            <li>Tech stack included RandomForest, XGBoost, SHAP</li>
            <li>Used SHAP for model explainability and fairness</li>
            <li>Backend: FastAPI | Frontend: Lovable AI</li>
            <li><strong>Secured Second Runner-Up</strong> position</li>
          </ul>
        </div>

        {/* BlockDag International Hackathon */}
         <div className="hackathon-card">
          <h3 className="hackathon-title">BlockDag International Hackathon – RealEstateX</h3>
          <p className="hackathon-description">
Developed a decentralized real estate tokenization platform enabling property-backed NFT issuance and $HOMED stablecoin minting with AI-powered document verification.          </p>
          <ul className="hackathon-points">
            <li>Tech stack included TypeScript, Solidity, DAG , OCR</li>
            <li>Used BlockDag testnet and Sepholia testnet</li>
            <li>Backend: FastAPI , Solidity | Frontend: React+Vite+TypeScript</li>
            <li><strong>Participated in Finals among 6000 developers worldwide</strong></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HackathonSection;
