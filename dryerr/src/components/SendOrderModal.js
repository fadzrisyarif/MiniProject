import React,{useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import {useMutation} from '@apollo/client'
import { sendOrderQuery } from './sendOrderQuery';

function SendOrderModal() {
  const [show, setShow] = useState(false);
  const [showSent, setShowSent] = useState(false);
  const [error,setError] = useState('')
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const [sendOrder, {data,loading}] = useMutation(sendOrderQuery)
  const [dataForm, setDataForm] = useState({
    name:'',
    email:''
})

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name==='email'){
      if(emailregex.test(value)) {
        setError('')
      }else{
        setError(
          'wrong email format'
        )
      }
    }

    setDataForm({...dataForm,[name]: value});
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSent = () => setShowSent(false);
  const handleShowSent = () => setShowSent(true);

  const handleOrder = async() => {
    if(error!==''|| dataForm.email==='' || dataForm.name===''){
      if(error) alert(error)
      return
    }else{
      await sendOrder({variables:{name:dataForm.name, email:dataForm.email}})
      handleClose()
      handleShowSent()
      return
    }
  }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Order Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
              type="text"
              name='name'
              required
              value={dataForm.name}
              onChange={(e) => handleUserInput(e)}
              autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name='email'
                onChange={(e) => handleUserInput(e)}
                value={dataForm.email}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>{handleOrder()}}>
            Send Order
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSent} onHide={handleCloseSent}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>Order has been created! Please check your email address periodically to get payment link</Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleCloseSent}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

    </>
  );
}

export default SendOrderModal