import React from 'react'

function Button({ text, onClick }) {
    return (
        <>


            <div className='connect-btn'>
                <button onClick={onClick} >
                    <a>
                        {text}
                    </a>
                </button>
            </div>
        </>
    )
}

export default Button