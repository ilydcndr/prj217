import React, { useState } from 'react';
import "./../Styling/Initial.css";
import { Row, Col, Container } from 'reactstrap';
import Login from './Login';
import SignUp from './SignUp';

const Initial = () => {

    const menu = ["Ana Sayfa", "Kariyer", "Servisler","Planlama&Üyelik"]
    const [login, setLogin] = useState(false);
    const [signup,setSignup]=useState(false)

   const LoginButton=()=>{
    setLogin(!login)  
   }
   const SignupButton=()=>{
       setSignup(!signup)
   }

    return (
        <div style={{opacity: login===true ? "0.4" : (signup===true ? "0.4" :null)  }}>
            <Container>
                <Row className="headerDiv">
                    <Col style={{ display: "flex", justifyContent: "center"}} xs="9" md="6"><h1>X Company</h1></Col>
                    <Col style={{ display: "flex", justifyContent: "flex-end" }} xs="3" md="6">
                        <button onClick={LoginButton} className="InitialButtons">Login</button>
                        <button onClick={SignupButton} className="InitialButtons">Sign Up</button>
                    </Col>
                </Row>
                <hr></hr>
            </Container>
            {login=== true ? <Login/> : null }
            {signup===true? <SignUp/>:null}
            <Container>
                <Row>
                    <Col className="navBar mt-2">
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
