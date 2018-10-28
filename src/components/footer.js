//imports
import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';


//components
class Footer extends Component{
    render(){
        return(
            <footer>
              <div style={{ backgroundColor: '#f1f1f1',fontSize:'2em',textAlign:'center',overflow:'hidden' }}>
                <p>
                    Created with <span> </span>
                    <FontAwesome name="heart" />
                    <span> </span>
                    by WDCT
                </p>
                </div>
            </footer>

        );
    }
};


//exports
export default Footer;