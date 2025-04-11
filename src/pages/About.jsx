import React from 'react'
import '../css/about.css'
import Heading from "../components/Heading"
import Button from '../components/Button'
import Socials from '../components/Socials'

import aboutjson from "../data/about.json"

import { motion } from "motion/react"


function About() {
    const { headingText, about, aboutPageButtons, stats } = aboutjson
    return (
        <section id='about' className='about'>
            <div className='about-heading'>
                <Heading text={headingText} />
            </div>

            <main className='about-container'>
                <div className='about-info-container'>

                    {about.map((section, i) => (
                        <div key={i} className={section.className}>
                            <motion.p
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 26 }}
                                transition={{ duration: 2 }}
                                viewport={{ once: false }}
                            >
                                {section.content.map((item, index) =>
                                    item.type === "normal" ? item.text : (
                                        <span key={index} className={item.type}>{item.text}</span>
                                    )
                                )}
                            </motion.p>
                        </div>
                    ))}

                    <div className='home-page-socials'>
                        {aboutPageButtons.map((btn, i) => (
                            <div key={i} className={btn.className}>
                                <Button text={btn.props.text} />
                            </div>
                        ))}

                        <div className='home-page-socials'>
                            <Socials />
                        </div>
                    </div>
                </div>




                <div className='stats-container'>

                    <div className='stats'>

                        {stats.map((item, index) => (
                            <motion.div key={index} className={item.className}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                viewport={{ once: false }}
                            >
                                <div className={item.innerClass}>
                                    <h1>{item.title}</h1>
                                    <p className='tagline'>{item.tagline}</p>
                                    <div className='full-line'></div>
                                    <p className='taglinetwo'>{item.taglinetwo}</p>
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </main>


        </section >
    )
}

export default About