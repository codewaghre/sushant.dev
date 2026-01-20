import React from 'react'
import '../css/footer.css'

import Socials from '../components/Socials'
import { motion } from "motion/react"

function Footer() {
    return (
        <>

            <footer>
                <div className='footer-text'>
                    <motion.p
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 1, y: 20 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: false }}
                    >© {new Date().getFullYear()} sushant.dev, All rights reserved.</motion.p>
                </div>

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 1, y: 20 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: false }}

                >
                    <Socials />
                </motion.div>
            </footer>
        </>
    )
}

export default Footer