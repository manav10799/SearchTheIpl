import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './ipl.css'

function Ipl() {
    return (
        <div className="ipl_i">
        <Container fluid>
        <Row>
        <Col xs={6} md={4}>
        <div className="ipl_mo">
            <h1>INDIAN PREMIER LEAGUE</h1>
            <div className="ipl_l"></div>
            <div className="ipl_d">
            <h4>Cricket league</h4>
            <p>The Indian Premier League is a professional Twenty20 cricket league in India usually contested between March and May of every year by eight teams representing eight different cities or states in India. The league was founded by the Board of Control for Cricket in India in 2007.</p>
            <h5>No. Of Teams :<span>8</span></h5> 
            </div>
        </div>
        </Col>
        <Col xs={6} md={4}>
        <div className="ipl_img">
        <img src="https://resources.platform.iplt20.com/photo-resources/2020/08/20/8ab72598-0ed5-411d-9b91-7fc371ae2812/IPL_v1.jpg?width=350&height=220"></img>
        </div>
        </Col>
        </Row>
        </Container>
        </div>

    )
}

export default Ipl
