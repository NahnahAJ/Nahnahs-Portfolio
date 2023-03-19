import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center text-xs absolute w-full border-gray-400">
      <img className="inline w-20 h-20" src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679061680/nahnah_logo_bkmhbl.png" alt="Nahnah Logo" />
      <a className="text-indigo-500" href="">Nahnah</a>
      <span className="text-gray-400">© 2021 All rights reserved.</span>
    </footer>
  );
};

export default Footer;