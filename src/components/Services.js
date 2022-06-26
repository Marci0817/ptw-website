import React, {useContext} from 'react';
import {motion } from "framer-motion"
import { ModalContext } from '../App.js';

export default function Introduction() {
    const { setShowModal } = useContext(ModalContext)
    return (
        <>
            <div className="servicesBg w-full h-full absolute top-0">
                <div className="mt-64 flex justify-center w-2/3 gap-4 mx-auto">
                    <div className=" mx-auto bg-white rounded-xl  h-full my-8 p-8 drop-shadow-xl border-2 hover:border-orange-300">
                        <h1 className="uppercase text-md font-semibold mb-4 ">Webfejelsztés</h1>
                        <p className="text-sm text-justify">Eljárásunk biztosítja, hogy a folyamatok zökkenőmentesek legyenek a végfelhasználó számára, és az első kapcsolatfelvétel során megismerkedjenek a folyamtokkal. Tervezőink a fejlesztőkkel együtt dolgoznak azon, hogy kiemelkedő végeredményeket tudjanak felmutatni.</p>
                        <motion.button className="border-0 text-black p-2 mt-4 yellow-bg rounded-md mx-auto"
                            onClick={() => setShowModal(true)}
                            >
                            Kapcsolat
                        </motion.button>
                    </div>
                    <div className=" mx-auto bg-white rounded-xl  h-full my-8 p-8 drop-shadow-xl border-2 hover:border-orange-300">
                        <h1 className="uppercase text-md font-semibold mb-4 ">Alkalmazás fejlesztés</h1>
                        <p className="text-sm text-justify">A vállalkozások üzleti sikerének kulcsa, hogy a webes és mobilplatformokon egyedülálló, ügyfeleik igényeit kielégítő alkalmazások álljanak rendelkezésre.

Web- és mobilalkalmazás-szolgáltatásokat kínálunk, amelyek segítségével a legjobban kihasználhatja az internetet és a mobilplatformok által nyújtotta lehetőségeket.</p>
                        <motion.button className="border-0 text-black p-2 mt-4 yellow-bg rounded-md mx-auto"
                            onClick={() => setShowModal(true)}
                            >
                            Kapcsolat
                        </motion.button>
                    </div>
                    <div className=" mx-auto bg-white rounded-xl  h-full my-8 p-8 drop-shadow-xl border-2 hover:border-orange-300">
                        <h1 className="uppercase text-md font-semibold mb-4 ">Blockchain alkalmazás fejlesztés</h1>
                        <p className="text-sm text-justify">Speciális megoldások a Blockchain technológia alkalmazásával
Büszkék vagyunk arra, hogy a Blockchain technológia előnyeit felhasználva, kivételes megoldásokat tudunk nyújtani az új, modern világ problémáinak megoldásaira.
</p>
                        <motion.button className="border-0 text-black p-2 mt-4 yellow-bg rounded-md mx-auto"
                            onClick={() => setShowModal(true)}
                            >
                            Kapcsolat
                        </motion.button>
                    </div>
                </div>
            </div>
        </>
        );
}
