import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { ModalContext } from '../App.js';

export default function Introduction() {
    const { setShowModal } = useContext(ModalContext);

    function toChar(x) {
        let t = [];
        for (let i = 0; i < x.length; i++) {
            t.push(x[i]);
        }
        return t;
    }

    const titleVariants = {
        "toIntial": {
            opacity: 0,
        },
        "toAnimate": {
            opacity: 1,
        }
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const services = [
        {
            title: "Webfejlesztés",
            description: "Modern, reszponzív weboldalak fejlesztése a legújabb technológiákkal",
            icon: "🌐"
        },
        {
            title: "Mobilalkalmazások",
            description: "Natív és keresztplatformos mobil alkalmazások fejlesztése",
            icon: "📱"
        },
        {
            title: "Blockchain",
            description: "Smart contract és DApp fejlesztés a jövő technológiáival",
            icon: "⛓️"
        }
    ];

    const stats = [
        { number: "100+", label: "Sikeres Projekt" },
        { number: "50+", label: "Elégedett Ügyfél" },
        { number: "5+", label: "Év Tapasztalat" }
    ];

    return (
        <>
            <div id="introBg" className="w-full min-h-screen absolute top-0">
                {/* Hero Section */}
                <motion.div className="mt-64 mx-auto md:mx-32 lg:mx-48 xl:64 w-4/5 md:w-3/5 lg:w-1/3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                >
                    <div className="text-center md:text-left">
                        <motion.p className="text-white uppercase text-2xl lg:text-4xl font-bold"
                            variants={titleVariants}
                            initial="toIntial"
                            animate="toAnimate"
                            transition={{
                                staggerChildren: 0.1,
                                delayChildren: 0.5
                            }}
                        >
                            {toChar("PUSHTOWEB KFT.").map((e, index) =>
                                <motion.span key={index} className=""
                                    variants={titleVariants}
                                    transition={{ duration: 0 }}
                                >
                                    {e}
                                </motion.span>
                            )}
                        </motion.p>
                        <p className="yellow text-xl lg:text-3xl">Szoftverfejlesztési megoldások a sikeres vállalkozásokért</p>
                        <p className="text-gray-200 text-md lg:text-md mt-5 font-medium">Együttműködünk a hasonló márkákkal, hogy olyan webhelyeket hozzunk létre, amelyekre ügyfeleid emlékezni fognak.</p>
                        <motion.button className="border-0 text-black drop-shadow-md yellow-bg p-4 my-6 rounded-md font-semibold"
                            whileHover={{ scale: 1.03 }}
                            onClick={() => setShowModal(true)}
                        >
                            Lépj kapcsolatba velünk
                        </motion.button>
                    </div>
                </motion.div>

                {/* Services Section */}
                <motion.div 
                    className="mt-32 px-4 md:px-8 lg:px-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-3xl font-bold text-center mb-12">Szolgáltatásaink</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="mt-32 px-4 md:px-8 lg:px-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="yellow text-4xl font-bold mb-2">{stat.number}</h3>
                                <p className="text-white text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-32 mb-16 px-4 md:px-8 lg:px-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-3xl font-bold mb-6">Készen állsz a következő nagy projektre?</h2>
                    <motion.button 
                        className="border-0 text-black drop-shadow-md yellow-bg px-8 py-4 rounded-md font-semibold text-lg"
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setShowModal(true)}
                    >
                        Kezdjük el együtt
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
}