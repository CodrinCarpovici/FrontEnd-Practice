import React from 'react'

const About = () => {
    return (
        <section className="section about-section" id="about">
            <div className="about-wrapper">
                <div className="row align-items-center justify-content-around flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text">
                            <h3 className="dark-color">ABOUT ME</h3>
                            <h4 className="theme-color">Frontend Web Developer</h4>
                            <p>Self-taught Developer with skills in JavaScript, HTML5, CSS3, ReactJS, Bootstrap5, SASS and NodeJS, tailored for Front End Development. Passionate and  hard-working, with a variety of skills built through the different jobs I've been in.</p>
                            <p>Entry-level developer driven by a problem-solving mentality and a desire to learn and further improve on my Web Development skills, with a high bar for standard and discipline in my code.</p>
                            <div className="btn-bar">
                                <a className="px-btn theme" href="#">View Works</a>
                                <a className="px-btn theme-t" href="#">Download CV</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className="about-img">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
