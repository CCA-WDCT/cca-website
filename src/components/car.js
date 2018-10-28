import React, { Component } from 'react';
import Load from './img';
import './car.css';
import {Grid,Row,Col,code} from 'react-bootstrap';
import Bar from './bar';
 class Car extends Component {


    render() { 
        return (
            <section id="aboutcca">
            <Grid>
            <Row className="show-grid">
              <Col sm={6} md={3}>
                
                  <Load/>
                  
              
                
              </Col>
              <Col sm={6} md={3}>
                
                
               
              </Col>
              <Col sm={6} md={3}>
                
                
                
              </Col>
              <Col sm={6} md={3}>
                
                <p className="para1" style={{ fontFamily:'sans-serif' }}>ABOUT CCA</p><br/>
                <p className="para2">CCA, Centre for Cognitive Activities, is the focal point where convergence of all technical and scientific endeavours of the students materialises. As the technical gymkhana of the institute, this club is the revolution which bridges the gap between knowledge and application. Bulk of the extracurricular activities held in the college all the year round are organised by the CCA , with the objective of probing the dark recesses of human mind so that the grey cells are stimulated to create , conceptualise and evolve, triggering a rebellion of the new age mind against baseless conventions and meek acceptance.</p>
<Bar/>

  
     
  
     
                
              </Col>
            </Row>
          </Grid>
        
          </section>
         );
    }
};
 
export default Car;