import React from 'react';
import Navbar from './Navbar/Navbar';
import Aux from '../hoc/hoc';



const NavbarComponent=(props)=>{
        return(
            <Aux>
                <Navbar/>
                {props.children}
            </Aux>
        );
}

export default NavbarComponent;