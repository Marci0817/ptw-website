import React, {useState} from 'react';
import './App.css';
import Menubar from './components/Menubar.js';
import Introduction from './components/Introduction.js';
import Modal from './components/Modal';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import NotFound from "./components/NotFound.js";
import About from "./components/About.js";
import Services from "./components/Services.js";

export const ModalContext = React.createContext()

function App() {
  
  const [showModal, setShowModal] = useState(false);
  const [NavbarColor, setNavbarColor] = useState("light");

  return (
    <>
      <Router>
        <ModalContext.Provider value={{showModal, setShowModal, NavbarColor, setNavbarColor}}>
          <Menubar />
          <Modal showModal={showModal} setShowModal={setShowModal} />
          <br />
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="rolunk" element={<About />} />
            <Route path="szolgaltatasok" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ModalContext.Provider>
      </Router>
      

    </>
  );
}



export default App;
