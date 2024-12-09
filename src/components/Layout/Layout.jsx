import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Theme from '../Theme/Theme';

const Layout = () => {
    return (
        <div>
           <NavBar></NavBar> 
           <Theme></Theme>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Layout;