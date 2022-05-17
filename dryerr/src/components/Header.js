import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Button} from 'react-bootstrap'
import SendOrderModal from './SendOrderModal'

function Header() {
  return (
    <div className='Header'>
        <div class="header_section">
      <div class="banner_section layout_padding">
      <Container>
                <Row style={{display:'flex', alignItems:'center', paddingBottom: '2rem'}}>
                    <Col >
                        <h2 className='pb-5'>Dryerr Steam Machine automatic dryer after cleaning Clothes. Dryer as well as Sterilizing and Hanging Clothes Irons.</h2>
                        {/* <SendOrderModal/> */}
                        <Button href='https://invoice-staging.xendit.co/od/dryerr-pay' variant='success'>Order Now</Button>
                    </Col>
                    <Col>
                    <img src='dryerr1.png'/>
                    </Col>
                </Row>
                <Row>
                  <Col className='mb-5' ></Col>
                </Row>
      </Container>

      </div>
   </div>
    </div>
  )
}

export default Header