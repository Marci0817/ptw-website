import React from 'react';
import './App.css';
import Menubar from './components/Menubar.js';
import Introduction from './components/Introduction.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Menubar />
      <br />
      <Introduction />
      <Footer />
    </div>
  );
}



export default App;
