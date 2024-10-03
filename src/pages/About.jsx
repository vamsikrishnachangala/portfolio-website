import React from 'react'
import {skills,experiences} from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Vamsi Krishna</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>I am a passionate computer science enthusiast currently pursuing a Master's at the University at Albany, SUNY, 
          with a strong foundation in both Artificial Intelligence and Full Stack Web Development.
           My enthusiasm lies in continuously learning and developing innovative projects,
            leveraging my experience in deep learning and the MERN stack to create impactful solutions.
        </p>
      </div>
      <div className="py-10 flex flex-col">
      <h3 className="subhead-text">My Skills</h3>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill)=>(
          <div className="block-container w-20 h-20 relative group" key={skill.name}>
            <div className="btn-back rounded-xl"/>
            <div className="btn-front rounded-xl flex justify-center items-center">
            <img
            src={skill.imageUrl}
            alt={skill.name}
            className="w-1/2 h-1/2 object-contain"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-65 text-grey text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
              {skill.name}
            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='py-16'>
        <h3 className="subhead-text">
          Work Experience
        </h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
        {/* <p> I have worked with all sorts of companies. Here's the rundown:
        </p> */}
        </div>
        
        <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience)=>(
            <VerticalTimelineElement
            key={experience.company_name}
            date={experience.date}
            icon={<div className="flex justify-center items-center w-full h-full">
              <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[80%] h-[80%] object-contain"
              />
            </div>}
            iconStyle={{background:experience.iconBg}}
            contentStyle={{
              borderBottom:'8px',
              borderStyle:'solid',
              borderBottomColor:experience.iconBg,
              boxShadow:'none'
            }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  {experience.title}
                </h3>
                <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                  {experience.company_name}
                </p>
              </div>

              <ul className="my-5 list-disc ml-5 space-y-2">
                {experience.points.map((point,index)=>(
                  <li key={`experience-point-${index}`}
                  className="text-black-500/70 font-normal pl-1 text-sm"
                  >
                    {point}
                  </li>
                ))}
              </ul>

            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200"/>
      <CTA/>
    </section>
  )
}

export default About