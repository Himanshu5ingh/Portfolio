import React from 'react'
import './Work.css'
import calculator from '../Assets/calculator.png'
import todolist from '../Assets/ToDo List.png'

const Work = () => {
    return (
        <section id='works'>
            <h2 className='portfolio'>My Projects</h2>
            <span className='description'>I take pride in paying attention to the smallest details and making sure that my work is perfect. I am excited to bring my skuills and experience to help business achieve their goals and create a strong online presence.</span>
            <div className='workdetails'>
                <div className='projects'><img src={calculator} alt='calculator' className='img' /><div>
                    <div className='projectTitle'>calculator</div><div className='breif'>
                        Developed a fully functional calculator web application using
                        React, JavaScript, and CSS to perform basic arithmetic operations.
                    </div>
                </div>
                </div>
                <div className='projects'><img src={todolist} alt='todolist' className='img' /><div>
                    <div className='projectTitle'>ToDo List</div><div className='breif'>
                        Developed a dynamic and interactive Todo List web application
                        using React.js, allowing users to efficiently manage their tasks and prioritize
                        their work.
                    </div>
                </div>
                </div>
                <div className='projects'><img src={calculator} alt='calculator' className='img' /><div>
                    <div className='projectTitle'>calculator</div><div className='breif'>
                        Developed a fully functional calculator web application using
                        React, JavaScript, and CSS to perform basic arithmetic operations.
                    </div>
                </div>
                </div>
                <div className='projects'><img src={todolist} alt='todolist' className='img' /><div>
                    <div className='projectTitle'>ToDo List</div><div className='breif'>
                        Developed a dynamic and interactive Todo List web application
                        using React.js, allowing users to efficiently manage their tasks and prioritize
                        their work.
                    </div>
                </div>
                </div>
            </div>
            {/* <button className='workbtn'>See More</button> */}
        </section>
    )
}

export default Work