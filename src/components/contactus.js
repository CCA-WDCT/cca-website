//import
import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './contactus.css';


//component
class Contact extends Component{
    render(){
        return(
            <section id="contact">
            <Grid>
                <Row className="show-grid">
                            <Col lg={4}>
                                <span></span>
                            </Col>
                            <Col lg={5} style={{ marginBottom:'15vh' }}>
                                <h1 style={{ fontWeight:'bold',color:'black',fontSize:'40px',fontFamily:'Avenir,sans-serif' }}>Contact Us</h1>
                            </Col>
                            <Col lg={3}>
                                <span></span>
                            </Col>
                        </Row>
                <Row className="show-grid">
                    <Col md={6}lg={4}>
                    <div class="card">
                        <div class="card_Banner one">
                            <div class="card_Avatar"></div>
                            </div>
                            <h3>SHIVAM KUMAR JHA</h3>
                            <h4>Convener & Head</h4>
                            <a>📧 example@email.com</a>
                            <a><FontAwesome name="phone" /> +91-89449-21428</a>
                            <ul>
                            <a><FontAwesome name="github" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="codepen" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="slack" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="spotify" style={{ fontSize:'16px' }} /></a>
                        </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                    <div class="card">
                        <div class="card_Banner two">
                            <div class="card_Avatar"></div>
                            </div>
                            <h3>MAYANK MEHTA</h3>
                            <h4>General Secretary</h4>
                            <a>📧 example@email.com</a>
                            <a><FontAwesome name="phone" /> +91-90835-04362</a>
                            <ul>
                            <a><FontAwesome name="github" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="codepen" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="slack" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="spotify" style={{ fontSize:'16px' }} /></a>
                        </ul>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                    <div class="card">
                        <div class="card_Banner three">
                            <div class="card_Avatar"></div>
                            </div>
                            <h3>AKHIL KOMMINENI</h3>
                            <h4>Treasurer</h4>
                            <a>📧 example@email.com</a>
                            <a><FontAwesome name="phone" /> +91-94930-56384</a>
                            <ul>
                            <a><FontAwesome name="github" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="codepen" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="slack" style={{ fontSize:'16px' }} /></a>
                                <a><FontAwesome name="spotify" style={{ fontSize:'16px' }} /></a>
                        </ul>
                        </div>
                    </Col>
                </Row>
            </Grid>
            </section>
        );
    }
};


//export
export default Contact;