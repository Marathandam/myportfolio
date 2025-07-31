import React from "react";

const CurrentProjectsSection = () => {
  return (
    <section id="current-projects" className="section current-projects">
      <div className="container">
        <h2 className="section-title">Current Projects</h2>

        <div className="projects-grid">
          {/* Blind Chat */}
          <div className="project">
            <span className="project-status status-active">In Development</span>
            <h3>Blind Chat</h3>
            <p className="project-description">
              An anonymous real-time chat application developed exclusively for internal communication in our college. 
              Focused on privacy-first architecture and smooth user interactions.
            </p>
            
            <div className="tech-stack">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Socket.IO</span>
              <span className="tech-pill">Node.js</span>
              <span className="tech-pill">OTP Auth</span>
            </div>

            <ul className="project-features">
              <li>Realtime messaging with WebSocket and Socket.IO</li>
              <li>Anonymous user authentication with OTP</li>
              <li>Frontend built using React with dynamic routing</li>
            </ul>

          </div>

        

          {/* Echoes of Us */}
          <div className="project">
            <span className="project-status status-active">In Development</span>
            <h3>Echoes of Us</h3>
            <p className="project-description">
              A React-based web app built to document and relive shared memories. 
              Features journaling, sentiment tagging, and personalized experience with conversational AI.
            </p>
            
            <div className="tech-stack">
              <span className="tech-pill">React</span>
              <span className="tech-pill">NLP</span>
              <span className="tech-pill">Sentiment Analysis</span>
              <span className="tech-pill">Firebase</span>
            </div>

            <ul className="project-features">
              <li>React frontend with modular component architecture</li>
              <li>Speech-to-text journaling and sentiment analysis</li>
              <li>Timeline-based memory navigation</li>
              <li>Emotion-aware chatbot interaction</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProjectsSection;