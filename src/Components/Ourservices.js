import React from 'react';
import PhotoServis1 from '../image/PhotoServis1.jpg'
import PhotoServis2 from '../image/PhotoServis2.jpg'
import PhotoServis3 from '../image/PhotoServis3.jpg'
import PhotoServis4 from '../image/PhotoServis4.png'
import PhotoServis5 from '../image/PhotoServis5.jpg'
import './../Styling/OurServices.css'



const Ourservices = () => {
    const photoSource = [PhotoServis1, PhotoServis2, PhotoServis3, PhotoServis4, PhotoServis5]
    const services = ["Servis1", "Servis2", "Servis3", "Servis4", "Servis5"]
    return (
        <div id="Servisler">
            <h1 className="servicesHeader">Servislerimiz</h1>
            {
                photoSource.map((item, i) => {
                    return (<div className="divCentered">
                        <div className="servicePhotoFrame">
                            <img src={item} className="servicePhoto"></img>
                        </div>
                        <div className="readServicesFrame">
                            <div className="readServices">
                                <h2 className="service">{services[i]}</h2>
                                <p><a href="" className="readMore">Ayrıntılı Bilgi</a></p>
                                <hr></hr>
                                <button className="calenderButton">Randevu Takvimi</button>
                            </div>
                        </div>
                    </div>)
                })
            }
        </div>
    )

}
export default Ourservices;

