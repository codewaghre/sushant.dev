import React from 'react'
import '../css/work.css'

import Heading from '../components/Heading'
import workjson from '../data/work.json'

import { motion } from "motion/react"

function Work() {
    const { heading, work } = workjson
    return (
        <>
            <section id='work' className='work'>
                <Heading text={heading} />

                {
                    work.map((work, i) => (
                        <div key={i}>
                            <motion.main className='work-container'
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 26 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: false }}
                            >

                                <div className='work-year'>
                                    <p>{work.year}</p>
                                </div>

                                <div className='work-status'>
                                    <p>{work.position}</p>

                                </div>

                                <div className='work-info'>
                                    <p className='company-name'>{work.company} </p>
                                    <p className='work-des'>{work.description}
                                    </p>
                                </div>
                            </motion.main>
                            <motion.div
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 22 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: false }}
                                className='full-line'></motion.div>
                        </div>
                    ))
                }







            </section>
        </>
    )
}

export default Work