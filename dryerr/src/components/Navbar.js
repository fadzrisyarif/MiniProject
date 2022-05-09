import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

function Navbar() {
  return (
    <div className='navbr Header'>
        <Container fluid>
            <Row>
               <Col>
                   <div class="search_icon"><img src="dryerr-corner.png"/></div>
               </Col>
               <Col>
                  <div class="logo"><Link to='/'><img src="dryerr-logo.png"/></Link></div>
               </Col>
               <Col>
                  <div class="togle_3" style={{display:'flex', justifyContent:'flex-end', margin:'1rem'}}>
                     <Link style={{padding:'10px', color:'whitesmoke', textDecoration:'none'}} to='/'>Home</Link>
                     <Link style={{padding:'10px', color:'whitesmoke', textDecoration:'none'}} to='/about'>About</Link>
                     <Link style={{padding:'10px', color:'whitesmoke', textDecoration:'none'}} to='/contactus'>Contact Us</Link>
                  </div>
               </Col>
            </Row>
         </Container>
    </div>
  )
}

export default Navbar