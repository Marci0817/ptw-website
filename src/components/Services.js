import React from 'react';
import Leaders from "./Leaders"
import {motion } from "framer-motion"


export default function Introduction() {
    return (
        <>
        <motion.div className="mt-64 mx-auto lg:mx-64 w-4/5 md:w-2/5 lg:w-1/3" id="landingImage"
            initial={{ opacity: 0,y:-50}}
            animate={{ opacity: 1,y:0}}
            transition={{ duration: 0.65 }}
        >
            <div className="text-center md:text-left">
                <p className="text-white uppercase text-2xl lg:text-4xl font-bold">Weboldal készítés</p>
                <p className="text-gray-200 text-md lg:text-md mt-5 font-medium">Olyan webes és mobil appokat fejlesztünk, amelyek az Te üzleti céljaidra összpontosulnak</p>

            </div>
        </motion.div>
        </>
        );
}
