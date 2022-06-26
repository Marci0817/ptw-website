import React from 'react';
import Leaders from '../components/Leaders.js';
import { Link } from 'react-scroll';
import { motion }  from "framer-motion";

export default function Introduction() {
  return (
    <>
    <motion.div className="mt-64 mx-auto lg:mx-64 w-4/5 md:w-2/5 lg:w-1/3"
        initial={{ opacity: 0,y:-50}}
        animate={{ opacity: 1,y:0}}
        transition={{ duration: 1.2 }}
    >
        <div className="text-center md:text-left">
            <p className="text-white uppercase text-2xl lg:text-4xl font-bold">PushToWeb kft.</p>
            <p className="yellow text-xl lg:text-3xl ">Szoftverfejlesztési megoldások a sikeres vállalkozásokért</p>
            <p className="text-gray-200 text-md lg:text-md mt-5 font-medium">Együttműködünk a hasonló márkákkal, hogy olyan webhelyeket hozzunk létre, amelyekre ügyfeleid emlékezni fognak.</p>
            <Link activeClass="active" to="footer" smooth={true} offset={25} duration={2500}>
                <motion.button className="border-0 text-black drop-shadow-md yellow-bg p-4 my-6 rounded-md font-semibold"
                    whileHover={{scale:1.03}}
                >
                Lépj kapcsolatba velünk
                </motion.button>
            </Link>
        </div>
    </motion.div>
    <div className="mt-96">
        <br/>
    </div>
    <div className="mt-16 bg-white" id="aboutUs">
        <br />
        <p className="mt-24 uppercase text-2xl lg:text-4xl font-bold text-center">Rólunk</p>
        <p className="md:w-1/2 mx-10 pl-2 md:mx-auto text-md lg:text-md mt-5 font-medium text-justify border-l-4 md:pl-4 border-orange-300 ">Fiatal de ugyanakkor sok tapasztalattal rendelkező, egyre bővülő csapat vagyunk. Csapatunk minden tagja specializálódott és specializálódik egy bizonyos fejlesztési területre vagy teknikára így az egész csapat tudja kirakni a fullstack fejlesztést. Nálunk a csapatmunka az első és ezt várjuk el az ügyfeleinktől is. Maximálisan rugalmasak és segítőkészek vagyunk. Ha velünk együtt dolgozol, akkor azonnali választ kaphatsz a kérdéseidre, valamint a csapatból mindig elérhető valaki a kommunikációs platformunkon.</p>
        <Leaders />
    </div>
    </>
    );
}
