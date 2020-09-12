import React from 'react';
import Navbar from './Navbar/Navbar';
import Aux from '../hoc/Aux';



const NavbarComponent=(props)=>{
        return(
            <Aux>
                <Navbar/>
                {props.children}
            </Aux>
        );
}

export default NavbarComponent;