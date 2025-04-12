import React from 'react'
import "../css/home.css"

import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Socials from '../components/Socials'

import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react"

import homejson from '../data/home.json'


function Home() {
    const { headingTwo, mainPara, connectBtn, resumeBtn, connect, resume } = homejson
    return (
        <motion.section id='home' className='home'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header>
                <Navbar />
            </header>

            <main className='text-container'>
                <div className="heading-one">
                    <h3>
                        console.log("Hello{' '}
                        <TypeAnimation
                            sequence={[
                                'Sushant!',
                                2000,
                                'World!',
                                2000,
                            ]}
                            speed={200}
                            repeat={Infinity}
                            style={{ display: 'inline' }}
                        />");
                    </h3>

                </div>


                <div className='heading-two'>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        "{headingTwo}"
                    </motion.h1>
                </div>

                <div className='main-para'

                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {mainPara}
                    </motion.p>
                </div>

                <div className='home-page-socials'>
                    <div className='home-page-btn'>
                        <Button text={connectBtn} link={connect} />
                    </div>

                    <div className='home-page-btn'>
                        <Button text={resumeBtn} link={resume} />
                    </div>

                    <div className='home-page-socials'>
                        <Socials />
                    </div>
                </div>



            </main>

        </motion.section>
    )
}

export default Home