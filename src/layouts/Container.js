import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import MenuFooter from '../components/MenuFooter'
import Sidebar from '../components/Sidebar'

const Container = (props) => {

    return (
        <div className='relative'>
            <Menu />
            <Banner />

            <div className='container mx-auto p-3'>
                <div className='grid grid-cols-12 gap-6'>
                    <aside className='hidden md:flex md:col-span-4'>
                        <Sidebar />
                    </aside>
                    <aside className='col-span-12 md:col-span-8'>
                        {
                            props.children
                        }
                    </aside>                
                </div>
            </div>
            
            <Footer />
            <MenuFooter />
        </div>
    )
}

export default Container