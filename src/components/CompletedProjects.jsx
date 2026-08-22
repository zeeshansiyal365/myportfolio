import React from 'react'
import bookProject from "../assets/bookProject.png"
import { RiGlobalLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import saylaniProject from "../assets/saylani-welfare-trust.png"
import CoreBiz from "../assets/corebiz-project.png"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
const CompletedProjects = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("function is working")

    emailjs
      .sendForm(
        "service_wv2lcec",
        "template_x4msc84",
        form.current,
        {
          publicKey: "1GzXGBtxRSdAmEZSw",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("this is error" , error);
          alert("Failed to send message.");
        })}
      
  
  
  return (
<>
<div >
  <div data-aos="fade-up" className='grid mx-3 my-5 shadow-2xl rounded-2xl  grid-cols-1 shadow-4xl md:grid-cols-2'>
<div>
<img src={bookProject} className='mt-20' alt="bookProject" />
</div>
<div>
<div>
<div className="max-w-4xl mx-auto p-6">
  {/* Project Title */}
  <h2 className="text-3xl font-bold text-gray-900 mb-3">
    Book Website
  </h2>

  {/* 2-Line Summary */}
  <p className="text-gray-600 leading-relaxed mb-6">
    A responsive book discovery website built with React.js, Bootstrap and
    Tailwind CSS, featuring search, routing, loading animations and a clean UI.
    It also handles missing book covers with a default image and works smoothly
    across desktop, tablet and mobile devices.
  </p>

  {/* Features */}
  <h3 className="text-xl font-semibold text-gray-900 mb-4">
    Features
  </h3>

  <div className="space-y-3">
    <p>
      <strong>Book Search:</strong> Users can easily search for books.
    </p>

    <p>
      <strong>Loader Animation:</strong> Shows a loader while book data is
      being fetched.
    </p>

    <p>
      <strong>Default Image:</strong> Displays a default image when a book has
      no cover image.
    </p>

    <p>
      <strong>React Routing:</strong> Used React Router to navigate between
      pages.
    </p>

    <p>
      <strong>Responsive Design:</strong> Works smoothly on desktop, tablet and
      mobile devices.
    </p>

    <p>
      <strong>React.js:</strong> Built using reusable React components.
    </p>

    <p>
      <strong>Bootstrap & Tailwind CSS:</strong> Used for responsive layouts
      and modern UI styling.
    </p>

    <p>
      <strong>Book Cards:</strong> Displays book information in clean and
      organized cards.
    </p>

    {/* Links */}
    <div className="flex gap-6 pt-4">
      <a
        href="https://book-website-eight.vercel.app/"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium" target='_blank'
      >
        <RiGlobalLine className='text-xl'/>
        Live Link
      </a>

      <a
        href="https://github.com/zeeshansiyal365/book-website"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium" target='_blank'
      >
       <FaGithub className='text-xl' />
        Code Link
      </a>
    </div>
  </div>
</div>

</div>
</div>



</div>
{/* 2nd */}
<div data-aos="fade-up" className='grid mx-3 my-20 shadow-2xl rounded-2xl  grid-cols-1 shadow-4xl md:grid-cols-2'>
<div>
<img src={saylaniProject} className='mt-20' alt="saylaniProject" />
</div>
<div>
<div>
<div className="max-w-4xl mx-auto p-6">
  {/* Project Title */}
  <h2 className="text-3xl font-bold text-gray-900 mb-3">
    Saylani Website
  </h2>

  {/* 2-Line Summary */}
  <p className="text-gray-600 leading-relaxed mb-6">
    A modern and fully responsive business website built with HTML, CSS and
    Bootstrap, featuring a clean and professional user interface.
    It includes modern layouts and responsive sections optimized for desktop,
    tablet and mobile devices.
  </p>

  {/* Features */}
  <h3 className="text-xl font-semibold text-gray-900 mb-4">
    Features
  </h3>

  <div className="space-y-3">
    <p>
      <strong>Responsive Navbar:</strong> Clean navigation bar for easy access
      to different sections.
    </p>

    <p>
      <strong>Hero Section:</strong> Attractive hero sections designed to
      highlight important content.
    </p>

    <p>
      <strong>Cards:</strong> Modern cards for displaying services and business
      information.
    </p>

    <p>
      <strong>Footer:</strong> Structured footer containing useful links and
      information.
    </p>

    <p>
      <strong>Responsive Design:</strong> Fully responsive across desktop,
      tablet and mobile devices.
    </p>

    <p>
      <strong>Bootstrap:</strong> Used Bootstrap components and its grid system
      for layout and responsiveness.
    </p>

    <p>
      <strong>HTML & CSS:</strong> Built with a clean HTML structure and custom
      CSS styling.
    </p>

    <p>
      <strong>Modern UI:</strong> Professional and visually appealing
      business-focused interface.
    </p>

    {/* Links */}
    <div className="flex gap-6 pt-4">
      <a
        href="https://saylani-walfare.vercel.app/"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <RiGlobalLine className="text-xl" />
        Live Link
      </a>

      <a
        href="https://github.com/zeeshansiyal365/saylani-walfare"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium" target='_blank'
      >
        <FaGithub className="text-xl" />
        Code Link
      </a>
    </div>
  </div>
</div>

</div>
</div>



</div>

{/* 3rd */}
<div data-aos="fade-up" className='grid mx-3 my-20 shadow-2xl rounded-2xl  grid-cols-1 shadow-4xl md:grid-cols-2'>
<div className='mt-10'>
<img src={CoreBiz} className='mt-20' alt="CoreBiz" />
</div>
<div>
<div>
<div className="max-w-4xl mx-auto p-6">
  {/* Project Title */}
  <h2 className="text-3xl font-bold text-gray-900 mb-3">
    CoreBiz
  </h2>

  {/* 2-Line Summary */}
  <p className="text-gray-600 leading-relaxed mb-6">
    A modern and fully responsive business website built with HTML, CSS and
    Bootstrap, featuring a professional UI with engaging hero, services,
    expertise and business sections.
    It includes modern cards, statistics and well-structured layouts optimized
    for desktop, tablet and mobile devices.
  </p>

  {/* Features */}
  <h3 className="text-xl font-semibold text-gray-900 mb-4">
    Features
  </h3>

  <div className="space-y-3">
    <p>
      <strong>Responsive Navbar:</strong> Clean navigation for easy access to
      different website sections.
    </p>

    <p>
      <strong>Hero Section:</strong> Attractive introduction section with
      engaging content and call-to-action.
    </p>

    <p>
      <strong>Service Cards:</strong> Modern cards for displaying different
      services and business information.
    </p>

    <p>
      <strong>About Section:</strong> Dedicated section showcasing business
      information and achievements.
    </p>

    <p>
      <strong>Expertise Section:</strong> Highlights different skills and
      areas of professional expertise.
    </p>

    <p>
      <strong>Statistics:</strong> Displays business achievements using
      numbers and percentages.
    </p>

    <p>
      <strong>Certifications:</strong> Showcases professional certifications
      and qualifications.
    </p>

    <p>
      <strong>Modern UI:</strong> Clean, professional and visually appealing
      business-focused interface.
    </p>

    <p>
      <strong>Responsive Design:</strong> Fully responsive across desktop,
      tablet and mobile devices.
    </p>

    <p>
      <strong>Bootstrap:</strong> Used Bootstrap components and grid system
      for layout and responsiveness.
    </p>

    <p>
      <strong>HTML & CSS:</strong> Built with structured HTML and custom CSS
      styling.
    </p>

    {/* Links */}
    <div className="flex gap-6 pt-4">
      <a
        href="https://corebiz-steel.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
      >
        <RiGlobalLine className="text-xl" />
        Live Link
      </a>

      <a
        href="https://github.com/zeeshansiyal365/corebiz"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium"
      >
        <FaGithub className="text-xl" />
        Code Link
      </a>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
{/* about me  */}
 <div id='About Me' className='flex my-10 flex-col mx-auto items-center gap-2 w-55'>
      <p className='text-4xl font-bold'>About Me</p>
      <div className='h-1 w-full bg-black'></div>
    </div>
    <div data-aos="fade-right" className="max-w-3xl mx-auto text-start px-6 py-10">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
    I am, Zeeshan Sainch
  </h2>

  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
    A dedicated developer focused on turning ideas into clean, functional,
    and visually engaging web applications.
  </p>

  <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-4">
    My expertise lies in MERN Stack development with
    <span className="font-semibold text-gray-900">
      {" "}MongoDB, Express.js, React.js, and Node.js
    </span>
    , along with HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.
    I focus on creating responsive UIs and scalable full-stack applications.
  </p>
</div>
<div className='flex my-10 flex-col mx-auto items-center gap-2 w-55'>
      <p id='Contact Me' className='text-4xl font-bold'>Contect Me</p>
      <div className='h-1 w-full bg-black'></div>
    </div>

<div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2'>
  <div>
    <div className="ms-10">

  <h2 id='Contect Me' className="text-3xl font-bold text-gray-900 my-10">
    Get in Touch
  </h2>

  <p className="text-gray-600 leading-relaxed mt-25 mb-5">
    Have something to say? I am here to help. Fill up the form or send me
    an email and I will get back to you as soon as possible.
  </p>

  <div className="space-y-4">

    <div className="flex items-center gap-3 text-gray-700">
      <FaMapMarkerAlt className="text-black text-xl" />
      <span>Hyderabad, Pakistan</span>
    </div>

    <div className="flex items-center gap-3 text-gray-700">
      <FaEnvelope className="text-black text-xl" />
      <span>zeeshansiyal579@gmail.com</span>
    </div>

    <div className="flex items-center gap-3 text-gray-700">
      <FaLinkedin className="text-black text-xl" />
      <span>Zeeshan Sainch</span>
    </div>

  </div>

</div>
  </div>
  
  
  <div>
    <div className="w-full max-w-xl  p-6 sm:p-8 bg-white rounded-2xl ">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Send Me a Message
  </h2>

  <form className="space-y-2" ref={form} onSubmit={sendEmail}>

    {/* Name */}
    <div>
      <label
        htmlFor="name"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Name
      </label>

      <input
      id='name'
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Email
      </label>

      <input
      id='email'
       type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
      />
    </div>

    {/* Message */}
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows="5"
        placeholder="Write your message..."
        className="w-full h-20 px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
      ></textarea>
    </div>

    {/* Note */}
    <p className="text-sm text-gray-500">
      Please provide your details and message clearly. I will get back to you
      as soon as possible.
    </p>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 px-5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 active:scale-[0.98] transition duration-200"
    >
      Send Message
    </button>

  </form>
</div>
  </div>
</div>
{/* footer */}
<footer className="w-full bg-gray-900 text-white py-15 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <p className="text-sm sm:text-base text-gray-300">
      Copyright © 2023 - All right reserved by Zeeshan Sainch
    </p>
  </div>
</footer>

</>
  )
}

export default CompletedProjects