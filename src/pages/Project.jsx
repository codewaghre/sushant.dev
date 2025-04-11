import React from 'react'
import '../css/project.css'

import Heading from '../components/Heading'
import { FaCircleDot } from "react-icons/fa6";

import projectjson from "../data/project.json"

function Project() {
    const { heading, project, des } = projectjson
    return (
        <>
            <section id='project' className='project'>
                <Heading text={heading} />
                <div className='project-para'>
                    <p>"{des}"</p>
                </div>

                <main className='project-container'>
                    {
                        project.map((data, i) => (
                            <div className='project-card-container'>

                                <div className='card-info'>
                                    <div className='card-img'>
                                        <a className='card-img'>
                                            <img src={data.image} />
                                        </a>
                                    </div>

                                    <div className='card-text'>
                                        <p>{data.projectName}</p>

                                        <div className='full-line'></div>
                                        <div className='project-links'>
                                            <a href={data.live}><span><FaCircleDot /></span> Live</a>
                                            <a href={data.source}> <span><FaCircleDot /></span> Source Code</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default Project