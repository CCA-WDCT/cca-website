//imports
import React,{Component} from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import './cells.css';


//components
class Cells extends Component{
    render(){
        return(
                <section id='cells'>
                    <Grid>
                        <Row className="show-grid">
                            <Col lg={4}>
                                <span></span>
                            </Col>
                            <Col lg={5}>
                                <h1 style={{ fontWeight:'bold',color:'black',fontSize:'40px',fontFamily:'Avenir,sans-serif' }}>CCA Cells</h1>
                            </Col>
                            <Col lg={3}>
                                <span></span>
                            </Col>
                        </Row>
                        <div style={{ fontSize:'2em' ,marginTop:'15vh' }}>
                            <p>CCA is divided into five cells which work together in collaboration with each other. We believe in the fact that togetherness yields excellent results.

These cells basically function to cover every aspect required for the success of an organisation.</p>
                        </div>
                        <Row className="show-grid">
                            <Col sm={6} md={3} lg={2}>
                                <div className='content' style={{ height:'50vh' }} >
                                    <div className='circle'>
                                            <div className='circle_title'>
                                                <h2>CORE CELL</h2>
                                            
                                            </div>
                                            <div className='circle_inner'>
                                                <div className='circle_inner__layer'>
                                                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png' />
                                                </div>
                                                <div className='circle_inner__layer'>
                                                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc3.png' />
                                                </div>
                                                <div className='circle_inner__layer'>
                                                <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc2.png' />
                                                </div>
                                            </div>
                                        <div className='content_shadow'></div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={3} lg={2}>
                                <div className='content' style={{ height:'50vh' }} >
                                    <div className='circle'>
                                    <div className='circle_title'>
                                        <h2>WEB,DESIGN & CREATIVE TEAM</h2>
                                        
                                    </div>
                                    <div className='circle_inner'>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png' />
                                        </div>
                                    </div>
                                    <div className='content_shadow'></div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={3} lg={2}>
                                <div className='content' style={{ height:'50vh' }} >
                                    <div className='circle'>
                                    <div className='circle_title'>
                                        <h2>ROBO CELL</h2>
                                    </div>
                                    <div className='circle_inner'>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png' />
                                        </div>
                                    </div>
                                    <div className='content_shadow'></div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={3} lg={2}>
                                <div className='content' style={{ height:'50vh' }} >
                                    <div className='circle'>
                                    <div className='circle_title'>
                                        <h2 style={{ fontSize:'1.5em' }}>ENTREPRENEURSHIP CELL</h2>
                                    </div>
                                    <div className='circle_inner'>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png' />
                                        </div>
                                    </div>
                                    <div className='content_shadow'></div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={3} lg={2}>
                                <div className='content' style={{ height:'50vh' }} >
                                    <div className='circle'>
                                    <div className='circle_title'>
                                        <h2>RD&I CELL</h2>
                                    </div>
                                    <div className='circle_inner'>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc5.png' />
                                        </div>
                                        <div className='circle_inner__layer'>
                                        <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc6.png' />
                                        </div>
                                    </div>
                                    <div className='content_shadow'></div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Grid>


            </section>
        );
    }
};




//export
export default Cells;