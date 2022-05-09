import React, {useState} from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Footer() {
    const [input, setInput] = useState('')
    const handleInput = (e)=>{
        setInput(e.target.value)
    }
  return (
    <div className='Footer' style={{display:'flex',alignItems:'flex-end', justifyContent:'flex-end', backgroundColor:'black'}}>
        <Container>
            <Row>
                <Col>
                <h2 class="important_text">Important Link</h2>
               <div class="footer_menu">
                  <ul>
                     <li><a href="/">Home</a></li>
                     <li><a href="/about">About Us</a></li>
                     <li><a href="#">Our Latest Event</a></li>
                     <li><a href="#">Our Latest Article</a></li>
                     <li><a href="#">Join With Us</a></li>
                  </ul>
               </div>
                </Col>
                <Col>
                <h2 class="important_text">Social Link</h2>
               <div class="footer_menu">
                  <ul>
                     <li><a href="#">Facebook</a></li>
                     <li><a href="#">Linkedin</a></li>
                     <li><a href="#">Twitter</a></li>
                     <li><a href="#">Youtube</a></li>
                     <li><a href="#">Pinterest</a></li>
                  </ul>
               </div>
                </Col>
                <Col>
                <h2 class="important_text">Subscribe With Us</h2>
               <p class="footer_lorem_text">don't miss information from us</p>
               <div class="input-group mb-3">
                  <input type="text" class="form-control" value={input} onChange={handleInput} placeholder="text" aria-label="Recipient's username" aria-describedby=" basic-addon2"/>
                  <div class="input-group-append">
                     <Button class="input-group-text" id="basic-addon2">Subscribe</Button>
                  </div>
               </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer