import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'

function Footer() {

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}>
                Made with  
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                 by Subhankar Sarkar <br></br>
                 <p className='shoutout' style={{fontSize:"8px",textAlign:"center"}}>
                    cradit goes to <a href='https://github.com/hhhrrrttt222111/developer-portfolio'  style={{ textDecoration: "none"}}>hhhrrrttt222111</a>
                 </p>
                 
            </p>
        </div>
    )
}

export default Footer

