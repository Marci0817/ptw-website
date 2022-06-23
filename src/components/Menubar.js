import React from 'react'
import logo from '../img/icon.png'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Menubar() {
  return (
    <div className="mx-8 lg:mx-16 text-lg uppercase text-white font-medium mt-6">
        <div className="float-left ml-8 lg:ml-16">
            <img className="w-14" src={logo} alt="logo"></img>
        </div>
        <div className="float-right hidden lg:block">
            <ul className=" inline-block ">
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <li>Home</li>
                </Link>
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <li>Szolgáltatások</li>
                </Link>
                <Link activeClass="active" to="aboutUs" smooth={true} offset={25} duration={1500}>
                  <li>Rólunk</li>
                </Link>
                <Link activeClass="active" to="" smooth={true} offset={25} duration={1500}>
                  <li>Referencia</li>
                </Link>
                <Link activeClass="active" to="footer" smooth={true} offset={25} duration={1500}>
                  <li>Kapcsolat</li>
                </Link>
            </ul>
        </div>
        <div className="float-right lg:hidden block">
            <p className="inline-block">xds</p>
        </div>
    </div>
  )
}
