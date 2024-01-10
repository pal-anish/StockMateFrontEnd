import React from 'react'
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

export default function Footer() {
  return (
    <div className="Footer-custom">

      <Row>
        <Col>{`© 2023 Copyright : Anish Pal`}</Col>
      </Row>
      <Row>
        <Col>{<Link to='/about' className="textdeatiling">About</Link>}</Col>
      </Row>

    </div>
    
  )
}
