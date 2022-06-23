import React from 'react';
import seo from '../img/seo.png';
import Leaders from '../components/Leaders.js';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Introduction() {
  return (
    <>
    <div className="mt-64 mx-auto lg:mx-64 w-4/5 md:w-2/5 lg:w-1/3 ">
        <div className="text-center md:text-left">
            <p className="text-white uppercase text-2xl lg:text-4xl font-bold">PushToWeb kft.</p>
            <p className="yellow text-xl lg:text-3xl ">Szoftverfejlesztési megoldások a sikeres vállalkozásokért</p>
            <p className="text-gray-200 text-md lg:text-md mt-5 font-medium">Együttműködünk a hasonló márkákkal, hogy olyan webhelyeket hozzunk létre, amelyekre ügyfeleid emlékezni fognak.</p>
            <Link activeClass="active" to="footer" smooth={true} offset={25} duration={2500}>
                <button className="border-0 text-black drop-shadow-md hover:shadow-xl yellow-bg p-4 my-6 rounded-md font-semibold">Lépj kapcsolatba velünk</button>
            </Link>
        </div>
    </div>
    <div className="mt-96">
        <br/>
    </div>
    <div className="mt-16 bg-white h-screen" id="aboutUs">
        <br />
        <p className="mt-24 uppercase text-2xl lg:text-4xl font-bold lg:text-center">Rólunk</p>
        <p className="w-1/2 mx-auto text-md lg:text-md mt-5 font-medium">Fiatal de ugyanakkor sok tapasztalattal rendelkező, egyre bővülő csapat vagyunk. Csapatunk minden tagja specializálódott és specializálódik egy bizonyos fejlesztési területre vagy teknikára így az egész csapat tudja kirakni a fullstack fejlesztést. Nálunk a csapatmunka az első és ezt várjuk el az ügyfeleinktől is. Maximálisan rugalmasak és segítőkészek vagyunk. Ha velünk együtt dolgozol, akkor azonnali választ kaphatsz a kérdéseidre, valamint a csapatból mindig elérhető valaki a kommunikációs platformunkon.</p>
        <Leaders />
        
    </div>
    </>
    );
}
