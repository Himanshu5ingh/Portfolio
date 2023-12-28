import React from 'react'
import './Home.css'
import profile from '../Assets/profile.jpg'

const Home = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello,</span>
                <span className='introtext'>I'm <span className='introname'>Himanshu Singh</span> <br />I'm a Frontend Developer</span>
                <p className='intropara'>Passionate about creating responsive and user-friendly applications</p>
                <a className='resume' href='https://docs.google.com/document/d/1t_ez_VTfaFUtgglLfyNAhUbVShKY7HfbsTo9JVOEdkQ/edit?usp=sharing' target="_blank" rel="noreferrer">Resume</a>
            </div>
            <img src={profile} alt='profile' className='bg' />
        </section>
    )
}

export default Home