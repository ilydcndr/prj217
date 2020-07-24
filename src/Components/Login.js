import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody,ButtonGroup, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';
import avatar from '../image/avatar.png';

export default function Login(props) {
    const [modal, setModal] = useState(props.login);
    const toggle = () =>{
        setModal(!modal);
        props.setLogin(false);
    } 

    return (
      
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <div style={{display:"flex",justifyContent:"center"}}><img alt="" src={avatar} style={{ width: "30%"}}></img></div>
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
                <ButtonGroup style={{width:"100%"}}>
                <Button color="success" >Login</Button>
                <Button color="danger" onClick={toggle}>Cancel</Button>
                </ButtonGroup>
                </ModalFooter>
                
            </Modal>
        
    )
}



