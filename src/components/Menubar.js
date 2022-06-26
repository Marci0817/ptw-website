import React from 'react'
import logo from '../img/icon.png'
import { Link } from 'react-scroll'
import { motion }  from "framer-motion";
import Modal from "./Modal.js"

export default function Menubar() {
  return (
    <motion.div className="mx-8 lg:mx-16 text-lg uppercase text-white font-medium mt-6"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration:1.2}}
    >
        <div className="float-left ml-8 lg:ml-16">
            <img className="w-14" src={logo} alt="logo"></img>
        </div>
        <div className="float-right hidden lg:block">
            <ul className=" inline-block ">
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <motion.li
                    whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                    transition={{ duration:0.1}}
                  >Home</motion.li>
                </Link>
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <motion.li
                    whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                    transition={{ duration:0.1}}
                  >Szolgáltatások</motion.li>
                </Link>
                <Link activeClass="active" to="aboutUs" smooth={true} offset={25} duration={1500}>
                  <motion.li
                    whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                    transition={{ duration:0.1}}
                  >Rólunk</motion.li>
                </Link>
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <motion.li
                    whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                    transition={{ duration:0.1}}
                  >Referencia</motion.li>
                </Link>
                <Link activeClass="active" to="footer" smooth={true} offset={25} duration={1500}>
                  <motion.li
                    whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                    transition={{ duration:0.1}}
                    
                  >Kapcsolat</motion.li>
                </Link>
            </ul>
        </div>
        <div className="float-right lg:hidden block">
            <p className="inline-block">xds</p>
        </div>
    </motion.div>
  )
}
