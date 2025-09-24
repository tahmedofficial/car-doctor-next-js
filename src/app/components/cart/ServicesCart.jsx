import Image from 'next/image';
import React from 'react';

const ServicesCart = ({ service }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <Image src={service.img} height={140} width={440} alt='img'></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <div className="card-actions justify-between items-center">
                    <h6 className='text-xl font-semibold'>Price: ${service.price}</h6>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default ServicesCart;