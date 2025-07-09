import React from "react";
import profilePic from '../Assets/jithesh_photo.jpeg';

const Home = () => {
    return (
        <section id='home' className="section home">
            <img src={profilePic} alt="Jithesh" className="profile-pic" />
            <h1>Hi there, I'm Jithesh 👋</h1>
            <p>I'm a final-year Computer Science Engineering student with a strong passion for technology, innovation, and problem-solving.
I specialize in building intelligent solutions using Machine Learning, FastAPI, and React, with hands-on experience in full-stack development.
My interests span across AI, Web Development, and Cloud Deployment, and I constantly push myself to learn new frameworks and tools.
I've participated in national-level hackathons and delivered impactful solutions under pressure.
Known for being a hardworking team player, I thrive in collaborative environments and believe in learning through execution.
I actively upskill via LeetCode, GitHub projects, and tech communities.
Eager to contribute to innovative products that make a real-world difference.

</p>
        </section>
    );
};

export default Home;
