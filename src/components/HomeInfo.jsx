import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox=({text,link,btnText})=>(
    <div className='info-box'>
        <p className='font-medium sm:text-l text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
);


const renderContent={
    1:(
    <h1 className="sm:text-l sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className="font-semibold">Vamsi Krishna</span>👋
        <br/>
        A software engineer with 2+ years  of experience. 
        <br/>I have deep passion for Artificial Intelligence and 
        <br/>Full Stack Development, and I love creating innovative projects.
        <br/>(<span className="font-small sm:text-xs">Navigate using arrows or mouse. Stop at the mini islands to discover more.</span>)
    </h1>
    ),
    2:(
    <InfoBox
    text="Worked with many companies and picked up many skills along the way"
    link="/about"
    btnText="Learn more"
    />
    ),
    3:(
      <InfoBox
      text="Developed a range of impactful projects, blending cutting-edge technologies with practical solutions."
      link="/projects"
      btnText="Visit my portfolio"
      />
    ),
    4:(
      <InfoBox
      text="Need a project done or looking for a dev? I'm just a few strokes away."
      link="/contact"
      btnText="Let's talk"
      />
    ),
}



const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage]||null
  )
}

export default HomeInfo