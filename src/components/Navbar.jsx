import React from 'react'
import '../css/navbar.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useTheme } from '../hooks/theme-context';
import themeMap from '../data/theme.json'



import { TypeAnimation } from 'react-type-animation';
function Navbar() {


    const { theme, setTheme } = useTheme()




    const logoSrc =
        theme === 'dark' || theme === 'darkBlue'
            ? '/logo/logo-dark.png'
            : theme === 'light'
                ? './logo/logo-light.png' : ""



    return (
        <nav>
            <div className='logo'>
                <a> <img src={logoSrc} />  sushant.dev</a>
            </div>


            <div className='slogan'>
                <h3>
                    Crafting Code Daily.{' '}
                    <TypeAnimation
                        sequence={[
                            500,
                            'Not daily',
                            1000,
                            'Everyday',
                            1000,
                            'Sometimes',
                            1000,
                            'Rarely',
                            1000,
                        ]}
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </h3>
            </div>

            <div className="theme-container">
                {themeMap[theme].map((t, i) => (
                    <div
                        key={i}
                        className={t.color}
                        onClick={() => setTheme(t.theme)}
                    ></div>
                ))}
            </div>




        </nav >
    )
}

export default Navbar

