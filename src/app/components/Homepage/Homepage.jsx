import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='bg-amber-50 py-20'>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Homepage;