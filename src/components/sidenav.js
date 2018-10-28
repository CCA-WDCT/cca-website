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
            <a href="#aboutcca">About</a>
            <a href="#cells">Cells</a>
            <a href="#members">Members</a>
            <a href="#contact">Contact</a>
            <div className="bot">
                <a href="https://www.facebook.com/arhn.nitd/">
                <FontAwesome name="facebook-square" />
                </a> 
                <a href="https://www.instagram.com/arhn.nitd/">
                <FontAwesome name="instagram" />
                </a>
                <a href="https://www.youtube.com/user/arhnNITD">
                <FontAwesome name="youtube" />
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