import { useEffect } from "react";
import { RiReactjsFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";

import "aos/dist/aos.css";

function AboutUsPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="p-12">
      <h3 className="text-violet-500 text-3xl mb-4">About Developer</h3>
      <p className="text-2xl mb-6">
        Hello, I'm <span className="text-violet-500">Mohammad Faramarzi</span>,
        20 years old, student at Eslamshahr University. It's about 1.5 years
        that learning and coding Font-End.
      </p>
      <h3 className="text-violet-500 text-3xl mb-4">
        Frameworks and Technologies Used
      </h3>
      <p className="text-2xl mb-4">
        In the development of this website, I've harnessed the power of the
        following frameworks and technologies to create a modern, single-page
        application (SPA):
      </p>
      <div
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        className="flex justify-between my-10 w-[750px] mx-auto child:flex child:flex-col
        child:items-center child:text-4xl child:cursor-pointer"
      >
        <Link to="https://react.dev/">
          <RiReactjsFill className="hover:text-indigo-700 transition-colors delay-75" />
          <h5>React</h5>
        </Link>
        <Link to="https://www.axios.com/">
          <SiAxios className="hover:text-violet-700 transition-colors delay-75" />
          <h5>Axios</h5>
        </Link>
        <Link to="https://tanstack.com/query/latest">
          <SiReactquery className="hover:text-red-600 transition-colors delay-75" />
          <h5>React Query</h5>
        </Link>
        <Link to="https://tailwindcss.com/">
          <RiTailwindCssFill className="hover:text-sky-500 transition-colors delay-75" />
          <h5>Tailwind</h5>
        </Link>
      </div>
      <h3 className="text-violet-500 text-3xl mb-4">Let's Connect</h3>
      <p className="text-2xl mb-4">
        Explore the website, discover the offerings, and if you have any
        questions or suggestions, I'm here to listen. Your journey through this
        online shopping experience is as important to me as it is to you. Happy
        exploring!
      </p>
      <div className="flex justify-between my-10 max-w-80 mx-auto child:text-6xl">
        <Link
          to="https://www.faramarzi.dev@gmail.com"
          className=" hover:text-red-600 transition-colors delay-75"
        >
          <MdEmail />
        </Link>
        <Link
          to="https://github.com/mohammadfaramarzi1"
          className="hover:text-white transition-colors delay-75"
        >
          <FaGithub />
        </Link>
      </div>
    </div>
  );
}

export default AboutUsPage;
