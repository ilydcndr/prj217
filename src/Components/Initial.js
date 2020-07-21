import React, { useState } from 'react';
import "./../Styling/Initial.css";
import { Row, Col, Container } from 'reactstrap';



const Initial = () => {
    const menu = ["Ana Sayfa", "Kariyer", "Servisler","Planlama&Üyelik"]
    const [scrollCount, setscrollCount] = useState(0)
    const [menuStatus, setmenuStatus] = useState(false)

    window.onscroll = function () {
        setscrollCount(2)
    }


{console.log(menuStatus)}
    const onclickMenu = () => {
        setmenuStatus((menuStatus)=>{ return !menuStatus})
    }

    return (
        <div>
            <Container>
                <Row className="headerDiv">
                    <Col style={{ display: "flex", justifyContent: "center"}} xs="9" md="6"><h1>X Company</h1></Col>
                    <Col style={{ display: "flex", justifyContent: "flex-end" }} xs="3" md="6">
                        <button className="InitialButtons d-none d-sm-block">Kulanıcı Girişi</button>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
            <Container>
                <Row>
                    <Col className="navBar mt-2 d-none d-sm-block">
                        {
                            menu.map((item, index) => {
                                return <a href={index === 2 && "#Servisler" || index === 1 && "#BizeUlasın"} className="decoration">{item}&nbsp;&nbsp;&nbsp;</a>
                            })
                        }
                    </Col>
                </Row>
            </Container>


            <div className="workPhoto">
                <button className="InitialButtons">Bize Ulaşın</button>
            </div>
        </div>
    )

}

export default Initial;
