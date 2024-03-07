import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowDownLeftIcon, ArrowDownRightIcon, ArrowRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
const Travel = () => {
    const data = [
        {
            title: `Work and Travel`,
            img: `https://i.ibb.co/p2xLt39/14.jpg`,
            name: `Embracing the Digital Nomad Lifestyle the Digital Nomad thr...`,
            date: `16 septembar 23`,
            pimg: `https://i.ibb.co/DKBPQLc/Rectangle-30.png`,
            pname: `Digital Image Editing`,
            id: `1`
        },
        {
            img: `https://i.ibb.co/P9Pw6WN/15.jpg`,
            title: `Historical`,
            name: `Historical Journeys: Stepping Back in Time Through Travel`,
            date: `16 septembar 23`,
            pimg: `https://i.ibb.co/2q0CF8Y/Rectangle-32.png`,
            pname: `Digital Image Editing`,
            id: `2`
        },
        {
            img: `https://i.ibb.co/ygDJFsB/16.jpg`,
            title: `Sustainable Tourism`,
            name: `Sustainable Tourism: Preserving the Planet While Seeing It All`,
            date: `16 septembar 23`,
            pimg: `https://i.ibb.co/x78gyV7/Rectangle-33.png`,
            pname: `Digital Image Editing`,
            id: `3`
        },
        {
            img: `https://i.ibb.co/P9Pw6WN/15.jpg`,
            title: `Historical`,
            name: `Sustainable Tourism: Preserving the Planet While Seeing It All`,
            date: `16 septembar 23`,
            pimg: `https://i.ibb.co/2q0CF8Y/Rectangle-32.png`,
            pname: `Digital Image Editing`,
            id: `4`
        },


    ];
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 3,

        slidesToScroll: 1
    };

    return (
        <div className='lg:px-28 px-4 lg:pt-24 pt-4'>
            <div className='ps-4'>
                <h3 className='text-3xl font-semibold lg:mb-20  mb-4'>
                    Travel Blog
                </h3>

                {/* slider */}
                <div>
                    <div className="">
                        <div className="">
                            <div className="mt-5">

                                <Slider {...settings} className=""> {
                                    data.map(

                                        (d) => (
                                            <div className="card  bg-white" key={d.id}>
                                                <figure><img src={d.img} alt="Name" /></figure>
                                                <div className="px-4 py-4">
                                                    <div className='flex gap-4'>
                                                        <p className='font-medium text-sm text-yellow-600'> {d.title}</p>
                                                        <p className='font-normal text-sm '>{d.date}</p>
                                                    </div>
                                                    <h2 className="font-bold text-lg pt-2 pb-2">
                                                        {d.name}
                                                    </h2>
                                                    <div className='border-b-2 border-b-slate-100'>

                                                    </div>
                                                    <div className='flex justify-between items-center pt-2 pb-4'>
                                                        <div><img src={d.pimg} alt="" className='rounded-full w-[40px] h-[40px]' /></div>
                                                        <div ><h6 className='flex items-center gap-1 text-sm font-medium text-yellow-600'><p>Read more</p> <span><ChevronDoubleRightIcon className="h-3 w-3 " /></span> </h6></div>
                                                    </div>

                                                    <div className="card-actions justify-end">

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travel;