import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <div className='experience' id='experience'>
            <div className='container'>
                <h2>Experience</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <h2>2018 - Today</h2>
                        <h3>Webmaster, BarMaster LTD</h3>
                        <ul className='job-list'>
                            <li>Responsible for maintaining the company's website</li>
                            <li>Building custom templates for the website</li>
                            <li>Online store operation</li>
                            <li>Order management</li>
                        </ul>
                    </div>
                    <div className='card'>
                        <h2>2019 - Today</h2>
                        <h3>Webmaster, CocktailArt</h3>
                        <ul className='job-list'>
                            <li>Responsible for design website</li>
                            <li>Building e-commerce application</li>
                            <li>Online store operation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
