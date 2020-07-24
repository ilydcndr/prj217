import React,{ useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,ButtonGroup , ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Signup from '../image/Signup.png'
import { Link } from 'react-router-dom';

export default function SignUp(props) {
    const [modal, setModal] = useState(props.signup);
    const toggle = () =>{
        setModal(!modal);
        props.setSignup(false);
    } 

    return (       
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <div style={{display:"flex",justifyContent:"center"}}><img alt="" src={Signup} style={{ width: "30%"}}></img></div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label style={{fontWeight:"bold"}}for="Username">Username</Label>
                            <Input type="text" name="username" id="Username" placeholder="with a placeholder"/>
                            <Label style={{fontWeight:"bold"}}for="Password">Password</Label>
                            <Input type="password" name="Password" id="Password" placeholder="with a placeholder"/>
                            <Label style={{fontWeight:"bold"}}for="Password">Repeat Password</Label>
                            <Input type="password" name="Password" id="RepeatPassword" placeholder="with a placeholder"/>
                        </FormGroup>
                    </Form>
                    <p>By creating an account you agree to our <Link to="/Agreement">Terms & Privacy.</Link></p>
                </ModalBody>
                <ModalFooter>
                <ButtonGroup style={{width:"100%"}}>
                <Button color="success" >Signup</Button>
                <Button color="danger"  onClick={toggle}>Cancel</Button>
                </ButtonGroup>
                </ModalFooter>
            </Modal>
                   
    )
}
