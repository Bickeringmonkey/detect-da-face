import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css'

const Logo = () => {
    return(
        <div className='ma4 mt0'>
            <Tilt className='Tilt'>
                <div>
                    <img style={{paddingTop: '20px', height:'80px'}} alt="Brain Logo" src={brain} />
                    <p>Face Finder</p>
                </div>
            </Tilt>

        </div>
    );
}


export default Logo;