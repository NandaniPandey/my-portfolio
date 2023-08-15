import React from 'react'
import './About.css'
import ME from '../../images/me-about.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt='me' />
          </div>
        </div>
        <div className="about-content">
          <p>I am a dedicated 2nd year Biotechnology student at NIET Greater Noida, pursuing a Bachelor of Technology degree.
            Alongside my academic pursuits, I am a passionate frontend developer, proficient in React.js, JavaScript, HTML, and CSS.
            With a keen eye for detail and a drive for user-centric design, I strive to create engaging and intuitive web experiences.
            Through personal projects and a commitment to continuous learning, I am honing my skills in both disciplines.
            I am eager to contribute my unique blend of biotechnology insights and frontend expertise to innovative and collaborative projects that make a positive impact.</p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About 