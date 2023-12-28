import React from 'react'
import './About.css'
import frontend from '../Assets/frontend.png'

const About = () => {
    return (
        <div id='skills'>
            <span className='SkillTitle'>About</span>
            <span className='SkillDescription'>A highly skilled Frontend developer with experience in HTML, CSS, JavaScript, React and other web technologies. Passionate about creating responsive and user-friendly web applications. Strong problem-solving and communication skills...</span>
            <div className='skillBars'>
                <div className='skillBar'>
                    <img src={frontend} alt='frontend' className='skillBarImg' />
                    <div className='skillBarText'>
                        <h2>Frontend Developer</h2>
                        <p>As a motivated and detail-oriented having a passion for web development, I am eager to kickstart my career as a frontend developer. Armed with a solid foundation in HTML, CSS, and JavaScript, React, I am excited to create visually appealing and user-friendly websites and applications. My dedication to continuous learning and staying updated with the latest frontend technologies makes me a valuable asset to any team. I am enthusiastic about collaborating with experienced professionals to contribute to innovative and responsive web solutions while expanding my skill set in a dynamic work environment.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About