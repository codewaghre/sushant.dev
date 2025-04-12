import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import linkjosn from "../data/links.json"

function Socials() {
    return (
        <>

            {
                linkjosn.map((link, i) => (
                    <div key={i} className='social-container'>
                        <div>
                            <a href={link.linkedin} target='blank'><FaLinkedinIn /></a>
                        </div>

                        <div>
                            <a href={link.github} target='blank'><FaGithubAlt /></a>
                        </div>

                        <div>
                            <a href={link.gmail} target='blank'><SiGmail /></a>

                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default Socials