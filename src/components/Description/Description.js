import React from 'react'
import './Description.css'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Description = () => {
    return (
        <>
            <div className='job'>
                <article>
                    <h1 className='name'>David Moalem</h1>
                    <p>Web Developer</p>
                    <p>Davidmoa26@gmail.com</p>
                    <p>Programming language - C, C++, C#, Assembly, Java, Python, JavaScript / TypeScript</p>
                    <p>Database - MySQL, Firebase, MongoDB</p>
                    <p>Server - express, PHP</p>
                    <p>Client - React.js, HTML, CSS/SCSS, WordPress</p>
                    <p>UI library / Framework - Bootstrap</p>
                    <a href='https://www.linkedin.com/in/DavidMoalem'><AiFillLinkedin color='hsl(98 100% 62%)' /></a>
                    <a href='https://github.com/DavidMoa26'><AiFillGithub /></a>
                </article>
            </div>
        </>
    )
}

export default Description