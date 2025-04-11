import React from 'react'
import '../css/work.css'
import Heading from '../components/Heading'

import workjson from '../data/work.json'

function Work() {
    const { heading, work } = workjson
    return (
        <>
            <section id='work' className='work'>
                <Heading text={heading} />

                {
                    work.map((work, i) => (
                        <div key={i}>
                            <main className='work-container'>

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
                            </main>
                            <div className='full-line'></div>
                        </div>
                    ))
                }



                <div className='full-line'></div>



            </section>
        </>
    )
}

export default Work