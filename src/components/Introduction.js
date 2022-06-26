import React, {useContext} from 'react';
import { motion }  from "framer-motion";
import { ModalContext } from '../App.js';

export default function Introduction() {
    const { setShowModal } = useContext(ModalContext)
    return (
        <>
        <div id="introBg" className="w-full h-full absolute top-0">
            <motion.div className="mt-64 mx-auto md:mx-32 lg:mx-48 xl:64 w-4/5 md:w-3/5 lg:w-1/3" id="landingImage"
                initial={{ opacity: 0,y:-50}}
                animate={{ opacity: 1,y:0}}
                transition={{ duration: 0.65 }}
            >
                <div className="text-center md:text-left">
                    <p className="text-white uppercase text-2xl lg:text-4xl font-bold">PushToWeb kft.</p>
                    <p className="yellow text-xl lg:text-3xl ">Szoftverfejlesztési megoldások a sikeres vállalkozásokért</p>
                    <p className="text-gray-200 text-md lg:text-md mt-5 font-medium">Együttműködünk a hasonló márkákkal, hogy olyan webhelyeket hozzunk létre, amelyekre ügyfeleid emlékezni fognak.</p>
                    <motion.button className="border-0 text-black drop-shadow-md yellow-bg p-4 my-6 rounded-md font-semibold"
                        whileHover={{scale:1.03}}
                        onClick={() => setShowModal(true)}
                    >
                    Lépj kapcsolatba velünk
                    </motion.button>
                </div>
            </motion.div>
        </div>
        </>
        );
}
