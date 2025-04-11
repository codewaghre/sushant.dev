import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Socials() {
    return (
        <>
            <div className='social-container'>
                <div>
                    <a><FaLinkedinIn /></a>
                </div>

                <div>
                    <a><FaGithubAlt /></a>
                </div>

                <div>
                    <SiGmail />
                </div>
            </div>
        </>
    )
}

export default Socials