import React from 'react'
import { motion } from "motion/react"

function Heading({ text }) {
    return (
        <>
            <div className='work-heading'>
                <motion.h2
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 26 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: false }}
                >{text};</motion.h2>
            </div>
        </>
    )
}

export default Heading