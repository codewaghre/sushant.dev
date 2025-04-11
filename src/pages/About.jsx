import React from 'react'
import '../css/about.css'
import Heading from "../components/Heading"
import Button from '../components/Button'
import Socials from '../components/Socials'

import aboutjson from "../data/about.json"

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
                            <p>
                                {section.content.map((item, index) =>
                                    item.type === "normal" ? item.text : (
                                        <span key={index} className={item.type}>{item.text}</span>
                                    )
                                )}
                            </p>
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
                            <div key={index} className={item.className}>
                                <div className={item.innerClass}>
                                    <h1>{item.title}</h1>
                                    <p className='tagline'>{item.tagline}</p>
                                    <div className='full-line'></div>
                                    <p className='taglinetwo'>{item.taglinetwo}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </main>


        </section >
    )
}

export default About