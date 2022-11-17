/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Projects.css'
import ecommerce from '../../images/ecommerce.png'
import search from '../../images/search.jpeg'
import chart from '../../images/chart.jpg'
import { Button } from 'react-bootstrap';
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <div className='container'>
                <h2>My Projects</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={ecommerce} />
                        <p>Building e-commerce application with new technologies including React.js</p>
                        <p><span>HTML, CSS, React, Bootstrap</span></p>
                        <a href="https://peaceful-torrone-fbeed6.netlify.app/"><Button variant="warning" style={{ fontWeight: 'bold' }}>To the website >></Button></a>
                        <a href="https://github.com/DavidMoa26/Cocktails-Shop"><Button variant="dark" style={{ fontWeight: 'bold' }}><AiFillGithub size={20} color='white' />To Source Code >></Button></a>
                    </div>
                    <div className='card'>
                        <img src={search} />
                        <p>Building application that show cards with smart search-box </p>
                        <p><span>HTML, CSS, React</span></p>
                        <a href="https://graceful-fox-ec9ecb.netlify.app/"><Button variant="warning" style={{ fontWeight: 'bold' }}>To the website >></Button></a>
                        <a href="https://github.com/DavidMoa26/Cards-Searching"><Button variant="dark" style={{ fontWeight: 'bold' }}><AiFillGithub size={20} color='white' />To Source Code >></Button></a>
                    </div>
                    <div className='card'>
                        <img src={chart} />
                        <p>Building application that shows the monthly expenses in a graphs</p>
                        <p><span>HTML, CSS, React</span></p>
                        <a href="https://spontaneous-kheer-a385b0.netlify.app/"><Button variant="warning" style={{ fontWeight: 'bold' }}>To the website >></Button></a>
                        <a href="https://github.com/DavidMoa26/Expense-App"><Button variant="dark" style={{ fontWeight: 'bold' }}><AiFillGithub size={20} color='white' />To Source Code >></Button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
