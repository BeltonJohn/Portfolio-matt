import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import Tilt from 'react-parallax-tilt';

function Projects() {
  return (
    <main className='projects-display'>
      <h1 id='projects-title'>My Projects</h1>
      <div className='each-project'>
        <Tilt>
          <div id='nibbler'></div>
        </Tilt>

        <div className='project-info'>
          <h1 className='project-titles'>Nibbler Bytes</h1>
          <p>
            a 7 day solo project to test the skills I had learned up until that
            point. The remit of the task was to build a grid based game using
            Vanilla JavaScript, HTML and CSS. Links to the project and readme
            can be found below:
          </p>
          <div className='project-links'>
            <a
              href='https://bit.ly/37ZMiKK'
              target='_blank'
              className='project-links'
              rel='noreferrer'
              id='nibbler-website'
            >
              <BsIcons.BsLink45Deg />
              Go to Website
            </a>
            <br />
            <a
              href='https://bit.ly/3vWkgrm'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='nibbler-readme'
            >
              <AiIcons.AiOutlineGithub />
              View Readme
            </a>
          </div>
        </div>
      </div>
      <div className='each-project'>
        <Tilt>
          <div id='doggopedia'></div>
        </Tilt>

        <div className='project-info'>
          <h1 className='project-titles'>Doggopedia</h1>
          <p>
            This was a 2 day project to build a website which connected to an
            API and retrieved data. I completed this project with two other
            colleagues. I specifically built the search bar and filter function
            with JavaScript React, tested the API with Postman and completed
            parts of the styling with SCSS and Bulma.
          </p>
          <div className='project-links'>
            <a
              href='https://bit.ly/3sbtr6b'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='doggopedia-website'
            >
              <BsIcons.BsLink45Deg />
              Go to Website
            </a>
            <a
              href='https://bit.ly/385jbFN'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='doggopedia-readme'
            >
              <AiIcons.AiOutlineGithub /> View Readme
            </a>
          </div>
        </div>
      </div>
      <div className='each-project'>
        <Tilt>
          <div id='purely' style={{ scale: 2 }}></div>
        </Tilt>

        <div className='project-info'>
          <h1 className='project-titles'>Purely Podcast</h1>
          <p>
            A 7 day group project to build a document database using mongoDB
            which connected to a React frontend. I built the registration and
            login functions utilising JWT token authorisation, built & tested
            backend functions. Purely Podcast is a website which allows users to
            find, favourite and add new podcasts. I also built some of the
            functions that allow users to upload and edit their own podcasts.
          </p>
          <div className='project-links'>
            <a
              href='https://bit.ly/3sd1IBY'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='purely-website'
            >
              <BsIcons.BsLink45Deg />
              Go to Website
            </a>
            <a
              href='https://bit.ly/38MH1WO'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='purely-readme'
            >
              <AiIcons.AiOutlineGithub /> View Readme
            </a>
          </div>
        </div>
      </div>
      <div className='each-project'>
        <Tilt>
          <div id='ecomo'></div>
        </Tilt>

        <div className='project-info'>
          <h1 className='project-titles'>Ecomo</h1>
          <p>
            This was an 8 day assignment to build a full stack app implementing
            an SQL database connected to a frontend built with JavaScript React.
            This app was built entirely by myself and tested all of the skills I
            had learnt on the GA course. Linked below:
          </p>
          <div className='project-links'>
            <a
              href='https://bit.ly/3OXdMkD'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='ecomo-website'
            >
              <BsIcons.BsLink45Deg />
              Go to Website
            </a>
            <a
              href='https://bit.ly/385ixIn'
              target='_blank'
              rel='noreferrer'
              className='project-links'
              id='ecomo-readme'
            >
              <AiIcons.AiOutlineGithub /> View Readme
            </a>
          </div>
        </div>
      </div>
    </main>
    // </section>
  );
}
export default Projects;
