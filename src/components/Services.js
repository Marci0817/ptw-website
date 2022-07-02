import React, {useContext} from 'react';
import { motion } from "framer-motion"
import { ModalContext } from '../App.js';

export default function Introduction() {
    const { setShowModal } = useContext(ModalContext)
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
            <div className="servicesBg w-full h-auto absolute top-0">
                <div className="mt-32 xl:w-2/4 lg:w-3/5 md:w-5/6 p-8 mx-auto"   >
                    <motion.div className=" mx-auto my-8"
                        variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}}
                    >
                        <h1 className="uppercase lg:text-3xl font-semibold mb-4 yellow text-xl">Webfejelsztés</h1>
                        <p className="text-lg text-justify text-white">Eljárásunk biztosítja, hogy a folyamatok zökkenőmentesek legyenek a végfelhasználó számára, és az első kapcsolatfelvétel során megismerkedjenek a folyamtokkal. Tervezőink a fejlesztőkkel együtt dolgoznak azon, hogy kiemelkedő végeredményeket tudjanak felmutatni.</p>
                        <p className="text-lg text-white mt-4 uppercase yellow">Fejlesztési folyamatunk</p>
                        <p className="text-lg md:text-justify text-white mt-2">Eljárásunk biztosítja, hogy a folyamatok zökkenőmentesek legyenek a végfelhasználó számára, és az első kapcsolatfelvétel során megismerkedjenek a folyamtokkal.
                            Tervezőink a fejlesztőkkel együtt dolgoznak azon, hogy kiemelkedő végeredményeket tudjanak felmutatni.</p>
                    </motion.div>
                    <hr />
                    <motion.div className=" mx-auto my-8  "
                        variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}}
                    >
                        <h1 className="uppercase lg:text-3xl font-semibold mb-4 yellow text-xl">Alkalmazás fejlesztés</h1>
                        <p className="text-lg text-justify text-white">Olyan webes és mobil appokat fejlesztünk, amelyek az Te üzleti céljaidra összpontosulnak</p>
                        <p className="text-lg text-white mt-4 uppercase yellow">A Te elvárásaid alapján készül minden</p>
                        <p className="text-lg md:text-justify text-white mt-2">A vállalkozások üzleti sikerének kulcsa, hogy a webes és mobilplatformokon egyedülálló, ügyfeleik igényeit kielégítő alkalmazások álljanak rendelkezésre.
                        Web- és mobilalkalmazás-szolgáltatásokat kínálunk, amelyek segítségével a legjobban kihasználhatja az internetet és a mobilplatformok által nyújtotta lehetőségeket.</p>
                        <p className="text-lg mt-4 uppercase yellow">Webstratégia</p>
                        <p className="text-lg md:text-justify text-white mt-2">Segítünk neked egy precíz stratégiát létrehozni webalkalmazása fejlesztéséhez, hogy erős webes jelenlétet kiépítésében, hogy kielégítse ügyfeleid igényeit és mérhető sikereket érjen el.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Web app-ok fejlesztése</p>
                        <p className="text-lg md:text-justify text-white mt-2">Tapasztalatunkat felhasználva egyedi web alkalmazásokat hozzunk létre, amelyek nemcsak vonzóak, hanem hatékonyak, és merhetően nagyobb leadet generálnak.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Webes app-ok tervezése</p>
                        <p className="text-lg md:text-justify text-white mt-2">Fejlesztőink segítenek kiváló minőségű, felhasználó- és keresőbarát webalkalmazás létrehozásában, amelyek segítségével versenyelőnyre tehetsz szert.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Mobilitás</p>
                        <p className="text-lg md:text-justify text-white mt-2">Veled együttműködve olyan alkalmazás stratégiákat és megoldásokat dolgozunk ki, amelyek mobilplatformra szabottak és a maximális eléréshez vezetnek.</p>
                        
                        <p className="text-lg text-white mt-4 uppercase yellow">Mobil app-ok fejlesztés</p>
                        <p className="text-lg md:text-justify text-white mt-2">Többplatformos mobilalkalmazás-fejlesztési megoldásokat kínálunk, amelyek javítják a kapcsolatot a potenciális ügyfelekkel.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Mobil app-ok tervezés
                        </p>
                        <p className="text-lg md:text-justify text-white mt-2">Fejlesztőink segítenek olyan mobilalkalmazások tervezésében, amelyek páratlan felhasználói élményt, rugalmasságot és üzleti növekedést hoz magával.</p>
                    </motion.div>
                    <hr />
                    <motion.div className=" mx-auto my-8  "
                        variants={divVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{once:true}}
                    >
                        <h1 className="uppercase lg:text-3xl font-semibold mb-4 yellow text-xl">Blockchain alkalmazás fejlesztés</h1>
                        <p className="text-lg text-white mt-4 uppercase yellow">Speciális megoldások a Blockchain technológia alkalmazásával</p>
                        <p className="text-lg md:text-justify text-white mt-2">Büszkék vagyunk arra, hogy a Blockchain technológia előnyeit felhasználva, kívételes megoldásokat tudunk nyújtani az új, modern világ problémáinak megoldásaira.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Smart contract fejlesztés</p>
                        <p className="text-lg md:text-justify text-white mt-2">A smart contractokat a blockchainen lehet létrehozni, melyek által oylan alkalmazásokat lehet csinálni, melyek a a blockchain előnyeit kihasználva biztonságosak és átláthatóak. Az ilyen alkalmazásokat a Solidity nevű programozási keretrendszerben készítjük el.</p>

                        <p className="text-lg text-white mt-4 uppercase yellow">Decentralizált alkalmazásfejlesztés (DApps)</p>
                        <p className="text-lg md:text-justify text-white mt-2">A decentralizált alkalmazások vagy DApp-ok a legbiztonságosabb alternatívák a központosított adatközpontokkal szemben.Mivel fő profilunkba tartozik a webes megjelenés kivitelezése a blockckchainen működő alkalmazásokhoz akár webes felületet is tudunk adni.</p>
                    </motion.div>
                </div>
            </div>
        </>
        );
}
