//imports
import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import './sidenav.css';



//componenets
class SideNav extends Component {
    render(){
        return(

            <div className="sidebar">
                <div className="side-btn">
                    <label for="side-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                <input type="checkbox" id="side-check" />
            <div className="side-links">
            <a className="active" href="#">Home</a>
            <a href="#">Cells</a>
            <a href="#">Contact</a>
            <a href="#aboutcca">About</a>
            <a href="#members">Members</a>
            <div className="bot">
                <a href="#">
                <FontAwesome name="facebook-square" />
                </a> 
                <a href="#">
                <FontAwesome name="instagram" />
                </a>
                
            </div>
            </div>

            </div>

        );
    }
};



//styles


//export
export default SideNav;