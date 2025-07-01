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
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 2.2 }}
                        viewport={{ once: false }}
                    >"{des}"
                    </motion.p>
                </div>

                <main className='project-container'>
                    {
                        project.map((data, i) => (

                            <motion.div className='project-card-container'
                                whileInView={{ y: 0, scale: 1 }}
                                initial={{ y: 30, scale: 0.9 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.4 }}
                                key={i}
                            >

                                <div className='card-info'>
                                    <div className='card-img'>
                                        <a className='card-img'>
                                            <img loading="lazy" alt={data.alt} src={data.image} />
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
                            </motion.div>
                        ))
                    }
                </main>
            </section>
        </>
    )
}

export default Project