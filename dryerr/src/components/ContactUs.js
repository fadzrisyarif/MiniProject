import React from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
function ContactUs() {
  return (
    <div>
      <Container className='m-5'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button type='submit'>Send</Button>
      </Form>
      </Container>
      
    </div>
  )
}

export default ContactUs