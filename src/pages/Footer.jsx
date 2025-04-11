import React from 'react'
import '../css/footer.css'

import Socials from '../components/Socials'

function Footer() {
    return (
        <>

            <footer>
                <div className='footer-text'>
                    <p>© 2024 Your Company, Inc. All rights reserved.</p>
                </div>

                <div>
                    <Socials />
                </div>
            </footer>
        </>
    )
}

export default Footer