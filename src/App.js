import React, {useState } from 'react';
import './App.css';
import Menubar from './components/Menubar.js';
import Introduction from './components/Introduction.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal';

function App() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Menubar />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <br />
      <Introduction />
      <Footer />
    </>
  );
}



export default App;
