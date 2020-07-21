import React from 'react';
import '../Styling/Allabout.css'
import workerPhoto from '../image/worker.jpg'

const Allabout = () => {
    return (
        <div >
            <div><h1 className="headerStyle">Lorem ipsum dolor sit amet</h1></div>
            <div className="headerStyle">consectetuer adipiscing elit....</div>
            <div className="whyUsText"> Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique</div>
            <img className="workerPhoto" src={workerPhoto}></img>
        </div>
    )

}
export default Allabout;

