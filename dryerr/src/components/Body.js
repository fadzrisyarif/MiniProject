import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import dryerr2 from '../assets/dryerr2.png'
import dryerr4 from '../assets/dryerr4.png'
import dryerr5 from '../assets/dryerr5.png'
import dryerr6 from '../assets/dryerr6.png'

function Body() {
  return (
    <div style={{margin:'2rem'}}>
        <Container style={{backgroundColor:'#f7fafc', padding:'1rem'}}>
            <Row>
                    <img src={dryerr2} />
           
                    <img src={dryerr4} />
            
                    <img src={dryerr5} />

                    <img src={dryerr6} />
            </Row>
        </Container>
    </div>
  )
}

export default Body