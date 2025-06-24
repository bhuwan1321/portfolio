import React from "react";
import {Mail , Github, Linkedin, Phone, CircleChevronRight} from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(rgb(9, 1, 14), rgb(4, 1, 14))",
        opacity: 10,
      }}
      className="bg-gray-900 text-white "
    >
      <div className="max-w-full mx-auto py-10 pb-2 ">
        <div className="grid sm:gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-items-center ">
          {/*greeting Section*/}
          <div className="mb-8 md:mb-0 px-20">
              <h3 className="text-3xl font-bold mb-4">Bhuwan Kumar Rasala</h3>
              <p className="text-xl text-gray-400 justify-items-center">Thank you for visiting my portfolio. I appreciate your interest in my work and always welcome the opportunity to connect, collaborate, and grow together. Let’s build something meaningful.</p>
          </div> 
          {/*Quick Links Section*/}
          <div className=" mb-8 md:mb-0 items-center">
            <h3 className="text-3xl font-bold items-center mb-4">Quick Links</h3>
             <div className="flex mb-3 space-y-2 ">
              <ul>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>Home</a></li>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>About</a></li>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>Skills</a></li>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>Education</a></li>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>Projects</a></li>
              <li><a href="" className="group flex items-center py-2 gap-5 w-full text-2xl transition-colors hover:scale-105"><CircleChevronRight className="text-gray-600 group-hover:text-white transition-colors"/>Experience</a></li>
              </ul>
             </div>
          </div>
          {/*Social Media Section*/}
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">Social Media</h3>
            <div className="flex flex-col mb-3 space-y-2 py-2">
              <a href="https://www.linkedin.com/in/bhuwan-kumar-rasala-4835b728b" className="group flex items-center  gap-5 w-full text-2xl transition-colors hover:text-gray-600">Linkedin<span className="text-gray-600 group-hover:text-white transition-colors"><Linkedin size={30} /></span></a>
              <a href="https://github.com/bhuwan1321" className="group flex items-center gap-10 w-full text-2xl transition-colors hover:text-gray-600">Github<span className="text-gray-600 group-hover:text-white transition-colors"><Github size={30} /></span></a>
              <a href="mailto:bhuwan1013@gmail.com" className="group flex items-center gap-16.5 w-full text-2xl transition-colors hover:text-gray-600">Mail<span className="text-gray-600 group-hover:text-white transition-colors"><Mail size={30} /></span></a>
            </div>
          </div>
        </div>
      </div>


   
    </footer>
  );
}
export default Footer;