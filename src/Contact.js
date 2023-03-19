import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto pt-12 text-center">
      <div class="text-5xl font-extrabold ... pb-12">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Contact Me
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-bold text-xl pb-2">Do Send a Message😉</h2>
          <p className="text-gray-600">I'm currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I'm also happy to hear about opportunites that don't fit that description. I'm a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my <a href="#socials" className="underline decoration-purple-500 decoration-4">online profiles </a>and get in touch using the form.</p>
          <img src="https://res.cloudinary.com/db3ckadxp/image/upload/v1679226203/17687_lcu6ot.jpg" alt="contact" className="w-full rounded-lg shadow" />
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <form className="w-full max-w-lg" action="https://formspree.io/f/xjvdevze" method="post">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" name="name"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  E-mail
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="email" placeholder="******************" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Message
                </label>
                <textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" placeholder="Hi Nahnah, I would like to hire you for a project."></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;