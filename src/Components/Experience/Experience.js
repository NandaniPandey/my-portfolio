import React from 'react'
import './Experience.css'
import { BsPatchCheckFill, BsFillRecordFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills and Achievements I Have</h5>
      <h2>My Skills & Achievements</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Skills</h3>
          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon' />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>Achievements</h3>
          <div className="experience-content1">
            <article className="experience-details">
              <BsFillRecordFill className='experience-icon' />
              <div>
                <small>Completed a certification course from Cousera in Human-Centered Design for Inclusive Inovation</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillRecordFill className='experience-icon' />
              <div>
                <small>Completed a certification course from Cousera in Genes and Human Condition</small>
              </div>
            </article>
            <article className="experience-details">
              <BsFillRecordFill className='experience-icon' />
              <div>
                <small>Won 2nd prize in Inter school Debate competition in 12th standard</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 