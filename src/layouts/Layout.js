import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import MenuFooter from '../components/MenuFooter';

const Layout = (props) => {
    return (
        <div className='relative'>
            <Menu />
            
            <div className='container p-3 mx-auto'>
                {
                    props.children
                }
            </div>

            <Footer />
            <MenuFooter />
        </div>
    )
};

export default Layout;