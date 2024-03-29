import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'
import {skillink} from "../../utils/skillink"


function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 30px ${theme.primary30}`,
    
    }


    return (
        <div className="skills" id='skill' style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary}}>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    {/* <Marquee 
                        gradient={false} 
                        speed={60} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="right"
                    > */}
                        {skillsData.map((skill, id) => (
                            <a href={skill==="ExpressJS" ?  "https://expressjs.com/" :skillink(skill)} style={{ textDecoration: "none"}}>
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={ skill==="ExpressJS" ?  "https://blog.amt.in/wp-content/uploads/2017/12/e16da876-c2fd-4eb8-ae72-4b193c534938-Edited.png":skill==="Redux" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVhbSnmxFDAX7Eww4G-6IBQLW70Q3Brx3rwZN4dhcpqWPi1aCC_bdhpBEHj318eS-Kks&usqp=CAU":skill==="Chakra-UI" ? "https://cdn-icons-png.flaticon.com/512/9036/9036150.png":skill==="Tailwind CSS" ? "https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg":skillsImage(skill)} alt={skill} />
                                <h3 style={{color: theme.tertiary}}>
                                    {skill}
                                </h3>
                            </div>
                            </a>
                        ))}


                    {/* </Marquee> */}
                </div>
            </div>
        </div>
    )
}

export default Skills
