import React from 'react';
import Leaders from "./Leaders"
import {motion } from "framer-motion"


export default function Introduction() {
    const divVariants = {
        "hidden":{
           x: -100,
           opacity:0
        },
        "visible":{
            x:0,
            opacity:1,
            transition:{ duration:0.5},
        }
    }
    return (
        <>
            <div className="w-full h-full absolute top-0" id="aboutUs">
                <motion.div className="mt-18"
                >
                    <br />
                    <motion.div
                        variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}}
                    >
                        <p className="mt-24 md:mt-20 uppercase text-2xl text-white lg:text-4xl font-bold text-center">Rólunk</p>
                        <p className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 pl-2 md:mx-auto text-white text-md md:text-lg lg:text-md mt-5 font-medium text-justify border-l-4 md:pl-4 border-orange-300 ">Fiatal de ugyanakkor sok tapasztalattal rendelkező, egyre bővülő csapat vagyunk. Csapatunk minden tagja specializálódott és specializálódik egy bizonyos fejlesztési területre vagy teknikára így az egész csapat tudja kirakni a fullstack fejlesztést. Nálunk a csapatmunka az első és ezt várjuk el az ügyfeleinktől is. Maximálisan rugalmasak és segítőkészek vagyunk. Ha velünk együtt dolgozol, akkor azonnali választ kaphatsz a kérdéseidre, valamint a csapatból mindig elérhető valaki a kommunikációs platformunkon.</p>
                    </motion.div>
                    <motion.div
                        variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}}
                    ><Leaders /></motion.div>
                    
                    <div className="bg-gray-800 p-5 my-5 w-full py-12 ">
                        <motion.div variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}} >
                        <h1 className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 md:mx-auto text-white text-2xl uppercase lg:text-md font-medium ">A tökéletes <span className="yellow">webfejlesztő</span> partnered</h1>
                        <p className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 pl-2 md:mx-auto text-white text-md md:text-lg lg:text-md mt-5 font-medium text-justify border-l-4 md:pl-4 border-orange-300">Az elmúlt időszakban olyan webhelyek létrehozásában segédkeztünk, amelyek a fejlesztői találékonyság és az innováció kombinációjával elkötelezett felhasználókat vonzottak be.

                        Legyen szó egyedi webalkalmazás-fejlesztésről , e-kereskedelmi webhelyek fejlesztéséről vagy informatív leadgeneráló oldalakról, mi segítünk. A webfejlesztés terén az a célunk, hogy a végfelhasználók kontextusának és szükségleteinek prioritása alapján építsünk megoldásokat, és ezzel érdemi eredményeket biztosítsunk.
                        </p>
                        </motion.div>
                        <motion.div variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}} >
                        <h1 className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 md:mx-auto text-white text-2xl uppercase lg:text-md font-medium mt-8">A <span className="yellow">Te</span> elvárásaid alapján készül minden</h1>
                        <p className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 pr-2 md:mx-auto text-white text-md md:text-lg lg:text-md mt-5 font-medium text-justify border-r-4 md:pr-4 border-orange-300">
                            A vállalkozások üzleti sikerének kulcsa, hogy a webes és mobilplatformokon egyedülálló, ügyfeleik igényeit kielégítő alkalmazások álljanak rendelkezésre.
                            Web- és mobilalkalmazás-szolgáltatásokat kínálunk, amelyek segítségével a legjobban kihasználhatja az internetet és a mobilplatformok által nyújtotta lehetőségeket.
                        </p>
                        </motion.div>
                        <motion.div variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}} >
                        <h1 className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 md:mx-auto text-white text-2xl uppercase lg:text-md font-medium mt-8"><span className="yellow">Weboldalak</span> melyeket készítünk</h1>
                        <p className="md:w-4/5 lg:w-3/4 xl:w-1/2 mx-4 pl-2 md:mx-auto text-white text-md md:text-lg lg:text-md mt-5 font-medium text-justify border-l-4 md:pl-4 border-orange-300">
                            <span className="yellow">Kiterjedt </span>
                            <span>
                            Követjük a szabványos elveket és technikákat annak érdekében, hogy méretezhető webes alkalmazásokat és megoldásokat biztosítsunk az ügyfeleink üzleti igényeinek kielégítésére.
                            </span>
                            <br />
                            <br />
                            <span className="yellow">Reszponziv </span>
                            <span>
                            Programozóink gondoskodnak arról, hogy a megfelelő felhasználói élményt biztosítsanak, függetlenül a felhasználók által használt eszköz képernyőméretétől és felbontásától.
                            </span>
                            <br />
                            <br />
                            <span className="yellow">Gyors </span>
                            <span>
                            Maximalizáljuk a munkafolyamatokat és gyorsabban, hatékonyabban teljesítjük, mint az átlag.
                            </span>
                            <br />
                            <br />
                            <span className="yellow">Biztonságos </span>
                            <span>
                            Biztosítjuk webhelye teljes biztonságát rosszindulatú támadások ellen.
                            </span>
                        </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
        );
}
