import React, { Component } from 'react';
import './bar.css';
class Bar extends Component {
    
    render() { 
        return ( <section>
            <div class="skills">
              <div class="progressBar">
                <h4><b>HARD WORK</b></h4>
                <div class="progressBarContainer">
                  <div class="progressBarValue value-90"></div>
                </div>
              </div>
              <div class="progressBar">
                <h4><b>FUN</b></h4>
                <div class="progressBarContainer">
                  <div class="progressBarValue value-80"></div>
                </div>
              </div>
              <div class="progressBar">
                <h4><b>LAZINESS</b></h4>
                <div class="progressBarContainer">
                  <div class="progressBarValue value-30"></div>
                </div>
              </div>
              <div class="progressBar">
                <h4><b>TIME UTILIZATION</b></h4>
                <div class="progressBarContainer">
                  <div class="progressBarValue value-70"></div>
                </div>
              </div>
            </div>
          
          </section>);
    }
}
 
export default Bar;