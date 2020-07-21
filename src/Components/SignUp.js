import React,{ useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,ButtonGroup , ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Signup from '../image/Signup.png'

export default function SignUp() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (       
            <Modal isOpen={toggle} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <div style={{display:"flex",justifyContent:"center"}}><img src={Signup} style={{ width: "30%"}}></img></div>
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
                    <p>By creating an account you agree to our <a href="">Terms & Privacy.</a></p>
                </ModalBody>
                <ModalFooter>
                <ButtonGroup style={{width:"100%"}}>
                <Button color="success" onClick={toggle}>Signup</Button>
                <Button color="danger"  onClick={toggle}>Cancel</Button>
                </ButtonGroup>
                </ModalFooter>
            </Modal>
                   
    )
}
