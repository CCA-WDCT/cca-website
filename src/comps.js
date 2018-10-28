//imports
import React,{Component, Fragment} from 'react';
import SideNav from './components/sidenav';
import Loader from './components/Loader';
import Car from './components/car';
import Hover1 from './components/Hover_cnct';
import Cells from './components/cells';
import Footer from './components/footer';
import Contactus from './components/contactus';
import Aarohan from './components/aarohan';

//componenets
const Comps= () =>{
    return(
        <Fragment>
            <Loader />
            <SideNav />
            <Car />
            <Cells />
            <Hover1 />
            <Aarohan />
            <Contactus />
            <Footer />
        </Fragment>
    );
};

//export
export default Comps;