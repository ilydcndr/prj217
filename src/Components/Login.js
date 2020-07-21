import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import avatar from '../image/avatar.png';

export default function Login() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
      
            <Modal isOpen={toggle} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <div style={{display:"flex",justifyContent:"center"}}><img src={avatar} style={{ width: "30%"}}></img></div>
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label style={{fontWeight:"bold"}}for="Username">Username</Label>
                            <Input type="text" name="username" id="Username" placeholder="with a placeholder"/>
                            <Label style={{fontWeight:"bold"}}for="Password">Password</Label>
                            <Input type="password" name="username" id="Password" placeholder="with a placeholder"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="success" style={{width:"100%"}} onClick={toggle}>Login</Button>{' '}
                </ModalFooter>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        
    )
}



