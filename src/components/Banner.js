import React from 'react'

const Banner = () => {
    return (
        <div className='container mx-auto relative' style={{height: '45vh'}}>
            <img
                src="https://res.cloudinary.com/dhdxq3mkm/image/upload/v1646940624/e-commerce/banner-1_rs92pf.jpg"
                alt="" 
                className='object-cover object-top w-full'
                style={{height: '45vh'}}
            />
            <div className='absolute top-0 left-0 bottom-0 bg-black bg-opacity-40 w-full flex items-center justify-center'>
                <h3 className='text-white text-4xl tracking-widest font-bold'>Descubre</h3>
            </div>
        </div>
    )
}

export default Banner