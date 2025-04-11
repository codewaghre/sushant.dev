import React from 'react'
import "../css/home.css"

import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Socials from '../components/Socials'

import { TypeAnimation } from 'react-type-animation';

import homejson from '../data/home.json'


function Home() {
    const { headingTwo, mainPara, connectBtn, resumeBtn } = homejson
    return (
        <section id='home' className='home'>
            <header>
                <Navbar />
            </header>

            <main className='text-container'>
                <div className="heading-one">
                    <h3>
                        console.log("Hello{' '}
                        <TypeAnimation
                            sequence={[
                                'Abhishek!',
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
                    <h1>
                        "{headingTwo}"
                    </h1>
                </div>

                <div className='main-para'>
                    <p>
                        {mainPara}
                    </p>
                </div>

                <div className='home-page-socials'>
                    <div className='home-page-btn'>
                        <Button text={connectBtn} />
                    </div>

                    <div className='home-page-btn'>
                        <Button text={resumeBtn} />
                    </div>

                    <div className='home-page-socials'>
                        <Socials />
                    </div>
                </div>



            </main>

        </section>
    )
}

export default Home