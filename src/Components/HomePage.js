import React, { Component } from 'react'
import Initial from './Initial'
import Allabout from './Allabout';
import Ourservices from './Ourservices';
import ContactUs from './ContactUs';
import Footer from './Footer';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                  <Initial/>
                  <Allabout/>
                  <Ourservices/>
                  <ContactUs/>
                  <Footer/>
            </div>
        )
    }
}
