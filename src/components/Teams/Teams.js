import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './Teams.css'
import teams from '../../data/Teams'

function Teams() {
    return (     
      <div className="deck_1">
        <div className="deck_2">
          <Row>
          {
            teams.map(({name, src}) => 
              <Col>
              <Card style={{ width: '18.1rem' }}>
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                </Card.Body>
              </Card>
              </Col>)
          }
          </Row>
        </div>  
      </div> 
    )
}

export default Teams