import React from 'react';
import { services } from "../../../lib/serrvices";
import ServicesCart from '../cart/ServicesCart';

const Services = () => {

    console.log(services);


    return (
        <div>
            <div className='text-center space-y-2'>
                <h1 className='font-medium text-4xl'>Our services area</h1>
                <p>Services</p>
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => (<ServicesCart service={service} key={service._id}></ServicesCart>))
                }
            </div>
        </div>
    );
};

export default Services;