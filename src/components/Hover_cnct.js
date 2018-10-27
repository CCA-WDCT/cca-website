import React from 'react';
import './hover_cnct.css';
import $ from 'jquery';
import {Grid,Row,Col} from 'react-bootstrap';

class Hover1 extends React.Component {


  componentDidMount(){
    $("figure").mouseleave(
        function () {
          $(this).removeClass("hover");
        }
      );
  };
  render() {
    return (
        <section id="members">
        <Grid>

            <Row className="show-grid" style={{ textAlign:'center',padding:'60px' }}>
                <Col lg={3}>
                    <span></span>
                </Col>
                <Col lg={6}>
                    <h1 style={{ color:'black',fontWeight:'bold',fontSize:'40px',fontFamily:'sans-serif'}}>Meet the members</h1>
                </Col>
                <Col lg={3}>
                    <span></span>
                </Col>
            </Row>

            <Row className="show-grid">
                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 yellow" >
                            <img src="https://www.ccanitd.in/images/Shivam.jpg" alt="sample47"/>
                            <h3>Shivam Kumar Jha<br/><h5>CONVENER & HEAD</h5></h3>
                    
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>

                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 red" >
                            <img src="https://www.ccanitd.in/images/Aaryan.jpg" alt="sample21"/>
                            <h3>AARYAN SINGH<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>

                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 blue" >
                            <img src="https://www.ccanitd.in/images/Vinesh.jpg" alt="sample17"/>
                            <h3>VINESH BATTULA<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>

                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 yellow" >
                            <img src="https://www.ccanitd.in/images/Shivam.jpg" alt="sample47"/>
                            <h3>Shivam Kumar Jha<br/><h5>CONVENER & HEAD</h5></h3>
                    
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>

                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 red" >
                            <img src="https://www.ccanitd.in/images/Aaryan.jpg" alt="sample21"/>
                            <h3>AARYAN SINGH<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>

                <Col sm={6} md={4} lg={3}>
                    <div style={{display: 'inline-block',padding:'50px'}}>
                        <figure class="snip0044 blue" >
                            <img src="https://www.ccanitd.in/images/Vinesh.jpg" alt="sample17"/>
                            <h3>VINESH BATTULA<br/><h5>HEAD, WEB,DESIGN & CREATIVE TEAM</h5></h3>
                            <div class="icons">
                                <a href="#"><i class="ion-social-googleplus"></i></a>
                                <a href="#"><i class="ion-social-twitter"></i></a>
                                <a href="#"><i class="ion-social-instagram-outline"></i></a>
                            </div>
                            <div class="corner"><i class="ion-android-add"></i></div>
                        </figure>
                    </div>
                </Col>              
            </Row>
        </Grid>
        </section>
    );
  }
}

export default Hover1;