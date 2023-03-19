import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 0,
      name: 'Eco Builders Construction Page',
      technologies: 'HTML5, CSS3, Javascript, Bootstrap',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235534/work1_vktdop.png',
      description:
        'In this project, I will build a simple website for a construction company that builds durable and eco-friendly buildings. The main goal is to put into practice the concepts that I have learned about positioning elements using Flexbox and Grid.',
      liveVersion: 'https://nahnahaj.github.io/construction-page/',
      source: 'https://github.com/NahnahAJ/construction-page',
    },
    {
      id: 1,
      name: 'ClinixGo Health Care Page',
      technologies: 'Rails, React, Javascript, Bootstrap, HTML/CSS',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679244665/Screenshot_from_2023-03-19_16-50-48_nwe23k.png',
      description:
        'The project is based on an app to book an appointment with a health specialist(Doctor). The doctor appointment booking app permits healthcare providers to manage their appointments with increased efficiency while giving reliable management. However, it displays all details of the patients, complete history of appointment, analyses the doctors, etc',
      liveVersion: 'https://clinixgo.up.railway.app/',
      source: 'https://github.com/Strangeal/ClinixGo',
    },
    {
      id: 2,
      name: 'To-Do List Web App',
      technologies: 'HTML5, CSS3, Javascript, Webpack',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235584/work2_oydama.png',
      description:
        'In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.',
      liveVersion: 'https://nahnahaj.github.io/To-Do-List/dist/',
      source: 'https://github.com/NahnahAJ/To-Do-List',
    },
    {
      id: 3,
      name: 'Leaderboard Web App',
      technologies: 'HTML5, CSS3, Javascript, Webpack',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235608/work3_lmizxf.png',
      description:
        'In this project, I will set up a JavaScript project for the Leaderboard list app, using webpack and ES6 features, notably modules. I will also use ES6 syntax, features, and modules to write modular JavaScript with proper ES6+ syntax and best practices.',
      liveVersion: 'https://nahnahaj.github.io/Leaderboard/dist/',
      source: 'https://github.com/NahnahAJ/Leaderboard',
    },
    {
      id: 4,
      name: 'Transaracts Budget Mobile App',
      technologies: 'Rails, Javascript, Bootstrap, CSS',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679246597/Screenshot_from_2023-03-19_17-23-03_wrvopw.png',
      description:
        'With this App, you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. A user is allowed to: register and log in, so that the data is private to them. New transactions are associated with a category : You can see the money spent on each category.',
      liveVersion: 'https://budget-app-3fe3.onrender.com/',
      source:
        'https://github.com/NahnahAJ/Ruby-on-Rails-capstone-project---Budget-App',
    },
    {
      id: 5,
      name: 'Math Magicians Web App',
      technologies: 'React, Redux, Javascript, HTML/CSS',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235630/work4_hspf36.png',
      description:
        '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote.',
      liveVersion: 'https://fancy-empanada-434a74.netlify.app/',
      source: 'https://github.com/NahnahAJ/Math-magicians-Web-App',
    },
    {
      id: 6,
      name: 'Space Travelers Hub',
      technologies: 'React, Redux, Bootstrap, SpaceXAPI',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235660/work5_mmmdgs.png',
      description:
        'In this task, we use the real live data from the SpaceX API. This web application is for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
      liveVersion: 'https://space-travelers-hub-nd.netlify.app/',
      source: 'https://github.com/NahnahAJ/Space-Travelers-Hub',
    },
    {
      id: 7,
      name: 'Metrics Web App',
      technologies: 'React, Redux, Javascript, HTML/CSS',
      image:
        'https://res.cloudinary.com/db3ckadxp/image/upload/v1679235669/work6_tpynfq.png',
      description:
        'Metrics Web App is a mobile web application to that is used to check a list of metrics (numeric values) that will be created by making use of React and Redux and Data from the ACNH API',
      liveVersion: 'https://vintage-art-collection.netlify.app/',
      source: 'https://github.com/NahnahAJ/Metrics-Web-App',
    },
  ];

  return (
    <section id="projects" className="container mx-auto pt-12 text-center">
      <div className="text-5xl font-extrabold ... pb-12">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Projects
        </span>
      </div>
      <div>
        {projects.map((project) => (
          <div
            href="#"
            className="flex flex-col items-center w-full bg-white border border-gray-200 pb-4 mb-6 rounded-lg shadow-md md:flex-row justify-around hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            key={project.id}
          >
            <img
              className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-64 md:rounded-none md:rounded-r-lg"
              src={project.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal md:text-left w-full md:w-auto">
              <h2 className="font-bold text-2xl text-gray-900">
                {project.name}
              </h2>
              <span className="text-indigo-500 flex flex-wrap mt-2">
                {/* Project languages */}
                {project.technologies
                  && project.technologies.split(',').map((language) => (
                    <span
                      className="inline-block bg-indigo-100 text-indigo-500 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 justify-center"
                      key={project.id}
                    >
                      {language}
                    </span>
                  ))}
              </span>
              <p className="mt-4 text-gray-700">{project.description}</p>
              <div className="flex justify-between items-center mt-6 gap-4">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  <a href={project.liveVersion}>View Project</a>
                </button>
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  <a href={project.source}>View Code</a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
