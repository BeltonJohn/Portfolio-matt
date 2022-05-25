import React from 'react';
import * as AiIcons from 'react-icons/ai';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h2 id='in-touch'>Get in Touch</h2>
        <div className='contact'>
          <a
            href='https://www.linkedin.com/in/matthew-daniel-creese/'
            className='contact-detail-wrappers'
          >
            <AiIcons.AiFillLinkedin /> Linkedin
          </a>
          <a
            href='https://github.com/BeltonJohn'
            className='contact-detail-wrappers'
          >
            <AiIcons.AiFillGithub /> GitHub
          </a>
          <a
            href='mailto:creesematthew1@gmail.com?subject=get in contact'
            className='contact-detail-wrappers'
            id='email'
          >
            <AiIcons.AiTwotoneMail /> Email
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
