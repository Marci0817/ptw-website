import React from 'react';
import { AnimatePresence, motion } from "framer-motion"

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        email: "",
        message: "",
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value,
        });
    }
  
    handleSubmit(event) {
      if(this.state.name.length > 0){
        
      }
      
      event.preventDefault();
    }
    
    

    render() {
      return (
        <div className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full modal-popup">
            <div className="relative p-4 w-full mx-auto mt-60 max-w-md h-full md:h-auto bg-white rounded-md shadow-orange-300 shadow-md">
                <p className="absolute right-0 top-0 p-4 cursor-pointer text-gray-700">X</p>
                <h2 className="uppercase text-lg">Kapcsolatfelvétel</h2>
                <form onSubmit={this.handleSubmit}>
                    <p className="text-lg mt-2">Teljes név</p>
                    <input type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4" name="name" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <p className="text-lg mt-2">Email</p>
                    <input type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4" name="email" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <p className="text-lg mt-2">Üzenet</p>
                    <textarea type="text" className="border-2 border-gray-600 rounded-md p-2 w-full mb-4" name="message" value={this.state.value} onChange={this.handleChange} />
                    <br />
                    <input className="border-2 border-orange-400 cursor-pointer font-semibold bg-orange-400 p-2 rounded-lg text-black" type="submit" value="Küldés" />
                </form>
            </div>
        </div>
      );
    }
}

export default Contact;