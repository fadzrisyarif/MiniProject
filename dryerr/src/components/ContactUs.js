import React,{useState} from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { sendContactQuery } from './sendContactQuery'
import { useMutation } from '@apollo/client'
function ContactUs() {

  const [error,setError] = useState('')
  const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const [sendContact, {data,loading}] = useMutation(sendContactQuery)
  const [dataForm, setDataForm] = useState({
    message:'',
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

  const handleContact = async() => {
    if(error!==''|| dataForm.message==='' || dataForm.name===''){
      if(error) alert(error)
      return
    }else{
      await sendContact({variables:{email:dataForm.email, message:dataForm.message}})
      if(error){
        console.log(error);
      }
      return
    }
  }
  return (
    <div>
      <Container className='m-5'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' onChange={(e)=>handleUserInput(e)} value={dataForm.email} type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control name='message' onChange={(e)=>handleUserInput(e)} value={dataForm.message} as="textarea" rows={3} />
        </Form.Group>
        <Button type='submit' onClick={handleContact}>Send</Button>
      </Form>
      </Container>
      
    </div>
  )
}

export default ContactUs