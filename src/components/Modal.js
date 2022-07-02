import React from "react"
import {AnimatePresence, motion, useAnimation} from "framer-motion"


const modalSettings = {
    visible: {opacity:1, y:0,transition:{ duration:0.6}},
    hidden: {opacity:0, y:-250,transition:{ duration:0.6}}
}
const backSettings = {
    visible: {opacity:1,transition:{ duration:0.2}},
    hidden: {opacity:0,transition:{ duration:0.2}}
}

const Modal = ({ showModal, setShowModal }) =>{
    const control = useAnimation();
    const controlInp = useAnimation();
    return (
      <AnimatePresence exitBeforeEnter>
        { showModal && (
          <motion.div
            variants={backSettings}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full modal-popup"
            >
            <motion.div
              animate={control}
            >
            <motion.div 
                variants={modalSettings}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative p-4 w-full mx-auto mt-60 max-w-md h-auto bg-white rounded-md shadow-orange-300 shadow-md">
                    <p className="absolute right-0 top-0 p-4 cursor-pointer text-gray-700" onClick={() => setShowModal(false)}>X</p>
                    <h2 className="uppercase text-lg">Kapcsolatfelvétel</h2>
                    <form>
                        <p className="text-lg mt-2">Teljes név</p>
                        <motion.input type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4 cursor-not-allowed" disabled name="name" animate={controlInp} />
                        <br />
                        <p className="text-lg mt-2">Email</p>
                        <motion.input type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4 cursor-not-allowed" disabled name="email"  animate={controlInp}/>
                        <br />
                        <p className="text-lg mt-2">Üzenet</p>
                        <motion.textarea type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4 cursor-not-allowed" disabled name="message"  animate={controlInp}/>
                        <br />
                        <p className="border-2 border-orange-400 cursor-pointer font-semibold bg-orange-400 p-2 rounded-lg text-black" onClick={() => {control.start({x:[0,-7,0,7,0], transition:{duration:0.15}});controlInp.start({borderColor:"red"})}}  >Küldés</p>
                    </form>
                </motion.div>
                </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    )
}

export default Modal;