import React, {useContext, useState} from 'react'
import logo from '../img/icon.png'
import { motion, AnimatePresence }  from "framer-motion";
import { ModalContext } from "../App"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";



export default function Menubar() {
  const { showModal, setShowModal} = useContext(ModalContext);


  const [showMobilMenu, setMobilMenu]= useState(false);

  const mobilMenuSettings = {
    hidden: {x:600,transition:{ duration:0.3}},
    visible: {x:0,transition:{ duration:0.3}}
  }
  const menuItems = [
    "Home",
    "Szolgáltatások",
    "Rólunk",
    "Referencia"
  ];
  const menuItemTo = [
    "/",
    "szolgaltatasok",
    "rolunk",
    "referencia"
  ];
  const [activeItem, setActiveItem] = useState("Home");
  const activeStyle = "border-b-orange-300 border-b-2 pb-2 mb-2";
  //border-b-orange-300 border-b-2 pb-2 mb-2 text-orange-300
  return (
    <>
      {!showMobilMenu && (
        <motion.div className="relative mx-8 lg:mx-16 text-lg uppercase text-white font-medium z-40 mt-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration:1.2}}
      >
          <div className="float-left ml-8 lg:ml-16">
              <img className="w-14" src={logo} alt="logo"></img>
          </div>
          <div className="float-right relative hidden lg:block mr-8">
              <ul className="inline-block">
                  {menuItems.map((menuItem, index) =>
                    <Link to={menuItemTo[index]}>
                      <motion.li
                        whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                        transition={{ duration:0.1}}
                        className={activeItem === menuItem ? activeStyle : ""}
                        onClick={() => setActiveItem(menuItem)}
                      >{menuItem}</motion.li>
                    </Link>
                  )}
                    <motion.li
                      whileHover={{ scale: 1.03, color: "rgb(230,163,51)" }}
                      transition={{ duration:0.1}}
                      onClick={() => setShowModal(true)}
                    >Kapcsolat</motion.li>
                  
              </ul>
          </div>
          <div className="float-right lg:hidden right-0 mr-8 cursor-pointer">
              <p className="inline-block"><svg  className="cursor-pointer" onClick={() => setMobilMenu(true)} fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28"><title>Toggle Menu</title><path d="M24 21v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 13v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1zM24 5v2c0 0.547-0.453 1-1 1h-22c-0.547 0-1-0.453-1-1v-2c0-0.547 0.453-1 1-1h22c0.547 0 1 0.453 1 1z"></path></svg></p>
          </div>
      </motion.div>
      )}
      <AnimatePresence exitBeforeEnter>
      { showMobilMenu && (
          <motion.div 
            variants={mobilMenuSettings}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className=" bg-gray-800 overflow-hidden text-white w-full h-screen fixed m-0 z-50"
          >
          <p className="absolute right-0 top-0 p-8 text-white cursor-pointer font-bold" onClick={() => setMobilMenu(false)}>X</p>
          <div className="p-8 text-3xl  mt-32">
              {menuItems.map((menuItem, index) =>
                <Link to={menuItemTo[index]} onClick={() => setMobilMenu(false)}>
                  <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.65, delay:0.3}}
                    className={activeItem === menuItem ? activeStyle : ""}
                    onClick={() => setActiveItem(menuItem)}
                  >{menuItem}</motion.p>
                </Link>
              )}
            <motion.p
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.65, delay:0.3}}
              onClick={() => {setMobilMenu(false); setShowModal(true)}}
            >Kapcsolat</motion.p>
          </div>
          </motion.div>
      )} 
      </AnimatePresence>
    </>
  )
}
