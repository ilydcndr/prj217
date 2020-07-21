import React from 'react';
import './App.css';
import Initial from './Components/Initial';
import Allabout from './Components/Allabout';
import Ourservices from './Components/Ourservices';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Login from './Components/Login';
import SignUp from './Components/SignUp';



function App() {
  return (
    <div>
      <Initial/>
      <Allabout/>
      <Ourservices/>
      <ContactUs/>
      <Footer/>
      {/* <Login/> */}
      {/* <SignUp/> */}

       
    </div>
  );
}

export default App;
