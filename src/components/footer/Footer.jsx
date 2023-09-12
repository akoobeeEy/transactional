import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaReact, FaTelegram } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiTailwindcss, SiJavascript, SiBootstrap } from "react-icons/si";
import {motion} from "framer-motion"
const Footer = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Front-end Developer.", "How."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <footer className='fixed bottom-0 w-full py-10 bg-blue-950'>
        <div className="container">
        <motion.div 
        initial={{y:200, opacity:0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1}}
        className="flex justify-between">
          <div
          
          className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-white uppercase">Find me in</h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTelegram />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className="">
          <h1 className="text-2xl font-bold text-white">
            Hi, I'm <span className="text-designColor">Akmal Mamuroff</span>
          </h1>
          <h2 className="text-4xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorColor="red" />
          </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-base font-bold text-white uppercase">
              best skill on
            </h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaReact />
              </span>
              <span className="bannerIcon">
                <SiJavascript />
              </span>
              
              <span className="bannerIcon">
                <SiTailwindcss />
              </span>
              <span className="bannerIcon">
                <SiBootstrap />
              </span>
             
            
            </div>
          </div>
        </motion.div>
        </div>
    </footer>
  )
}

export default Footer