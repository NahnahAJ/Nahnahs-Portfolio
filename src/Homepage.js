import React, { useState, useEffect } from 'react';
import Socials from './Socials';

const positions = ['Hi, I am Nahnah😀', 'Full Stack Developer'];

const Homepage = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((position + 1) % positions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [position]);

  return (
    <main id="home" className="md:pl-10 mx-auto pt-10 grid md:grid-cols-2 justify-center text-center items-center bg-gray-100 h-screen sm:p-6">
      <div className="">
        <span className="text-indigo-500">
          <h1 className="font-mono italic text-5xl">{positions[position]}</h1>
        </span>
        Hello! I am a highly innovative web developer with several years of
        experience in website design and full-stack web development. I
        specialize in front and back-end web development to enhance online
        presence and optimize the user&apos;s experience. My expertise lies in
        essential languages such as HTML, CSS, and Sass, and I also have
        experience working with scripting languages like JavaScript and
        frameworks such as Bootstrap.
        <Socials />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679208902/programmer_v_02-removebg_zkeuah.png"
          className="max-w-full h-auto"
          alt="programmer"
        />
      </div>
    </main>
  );
};

export default Homepage;
