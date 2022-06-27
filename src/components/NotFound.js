import React from 'react';
import { Link } from 'react-router-dom';
import { motion }  from "framer-motion";

const NotFound = () => (
  <div className="notFoundBg w-full h-screen absolute top-0">
    <div className="text-center mt-52">
        <motion.div 
            initial={{scale:0.2}}
            animate={{scale:1}}
            transition={{duration:0.5}}
        >
            <h1 className="yellow text-9xl font-normal">404</h1>
            <h1 className="text-white text-semibold text-xl">O-o nincs találat!</h1>
            <motion.button className="mt-8"
                whileHover={{scale:1.03}}
            >
                <Link to="/" className="mt-8 border-0 text-black drop-shadow-md yellow-bg px-4 py-2 my-6 rounded-md font-semibold">Vissza</Link>
            </motion.button>
        </motion.div>
    </div>
  </div>
);

export default NotFound;