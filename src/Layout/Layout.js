import React from 'react';
import Navbar from './Navbar/Navbar';
import Aux from '../hoc/hoc';
import Footer from './Footer/Footer';



const NavbarComponent=(props)=>{
        return(
            <Aux>
                <Navbar/>
                {props.children}
                <Footer/>
            </Aux>
        );
}

export default NavbarComponent;