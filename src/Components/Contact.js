import React, { useRef } from 'react'
import './Contact.css'
import GithubIcon from '../Assets/github.png'
import twitterIcon from '../Assets/twitter.png'
import linkedInIcon from '../Assets/linkedin.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email send !");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDescription'>Please fill the form below to discuss any work opportunites.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Your Name' className='name' name='your_name' />
                <input type='email' placeholder='Your Email' className='email' name='your_email' />
                <textarea rows='5' cols='50' placeholder='Your Message' className='msg' name='message'></textarea >
                <button className='submitBtn' type='submit' value='send'>Submit</button>
                <div className='Links'>
                    <a href='https://www.linkedin.com/in/himanshu-singh-frontend/' target='_blank'><img src={linkedInIcon} alt='Github' className='link' /></a>
                    <a href='https://github.com/Himanshu5ingh' target='_blank'><img src={GithubIcon} alt='Github' className='link' /></a>
                    <a href='https://twitter.com/Himanshu5ingh' target='_blank'><img src={twitterIcon} alt='twitter' className='link' /></a>

                </div>
            </form >
        </div >
    )
}

export default Contact