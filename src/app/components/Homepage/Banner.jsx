import next from 'next';
import React from 'react';

const Banner = () => {

    const banners = [
        {
            title: "Affordable price for car services",
            description: "jfsldjf fsjsdjffs slfjlf fofosieeroidfo sldjflijew frjwei",
            next: "#slide2",
            prev: "#slide4",
        },
        {
            title: "Affordable price for car services",
            description: "jfsldjf fsjsdjffs slfjlf fofosieeroidfo sldjflijew frjwei",
            next: "#slide3",
            prev: "#slide1",
        },
        {
            title: "Affordable price for car services",
            description: "jfsldjf fsjsdjffs slfjlf fofosieeroidfo sldjflijew frjwei",
            next: "#slide4",
            prev: "#slide2",
        },
        {
            title: "Affordable price for car services",
            description: "jfsldjf fsjsdjffs slfjlf fofosieeroidfo sldjflijew frjwei",
            next: "#slide1",
            prev: "#slide3",
        }
    ]

    return (
        <div className="w-full h-screen container mx-auto mb-10">
            <div className="carousel w-full h-full rounded-xl">
                {
                    banners.map((banner, index) => (
                        <div key={index}
                            style={{
                                backgroundImage: `linear-gradient(4deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index + 1}.jpg)`
                            }}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full">
                            <div className='h-full text-white w-full space-y-3 flex flex-col justify-center px-10'>
                                <h1 className='text-5xl'>{banner.title}</h1>
                                <p>{banner.description}</p>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Banner;