import React from 'react';

const Skills = () => {
  return (
    <section
      className='hero is-fullheight-with-navbar is-light'
      id='skills-section'
    >
      <h1 id='skills-title'>My Skills</h1>
      <div className='skills-list-with-icons'>
        <div className='skills-list'>
          <div className='skills-actual' id='languages'>
            <h2 className='skills-headings'>Languages & Libraries</h2>
            <p className='specific-skills'>
              HTML5 | CSS | SCSS | JavaScript | React.js | Node.js | Express |
              NPM | Yarn | Python
            </p>
          </div>

          <div className='skills-actual'>
            <h2 className='skills-headings'>Databases and Managment</h2>
            <p className='specific-skills'>
              PostgreSQL | MySQL | MongoDB | Django | TablePlus | Postman
            </p>
          </div>
          <div className='skills-actual'>
            <h2 className='skills-headings'>Version Control & Storage</h2>
            <p className='specific-skills'>
              Git | GitHub | Command Line | Heroku | Netlify
            </p>
          </div>
        </div>
        <div className='skills-icons'>
          <i class='devicon-html5-plain'></i>
          <i class='devicon-javascript-plain'></i>
          <i class='devicon-react-original'></i>
          <i class='devicon-nodejs-plain'></i>
          <i class='devicon-express-original'></i>
          <i class='devicon-npm-original-wordmark'></i>
          <i class='devicon-yarn-plain'></i>
          <i class='devicon-python-plain'></i>
          <i class='devicon-mongodb-plain'></i>
          <i class='devicon-git-plain'></i>
          <i class='devicon-github-original'></i>
          <i class='devicon-heroku-original'></i>
          <i class='devicon-postgresql-plain'></i>
          <i class='devicon-mysql-plain'></i>
          <i class='devicon-mongodb-plain'></i>
          <i class='devicon-django-plain'></i>
          <i class='devicon-slack-plain'></i>
        </div>
      </div>
    </section>
  );
};
export default Skills;
