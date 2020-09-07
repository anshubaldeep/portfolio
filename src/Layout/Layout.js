import React from 'react';
//import classes from './Layout.module.css';
import Navbar from './Navbar/Navbar';



const NavbarComponent=(props)=>{
        return(
            <div>
                <Navbar/>
                {props.children}
            </div>
        );
}

export default NavbarComponent;