"use client"
import React, { useState } from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { bgColors, textColors } from '@/constant/colors'
import { FaImage } from 'react-icons/fa'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./index.css";
import Image from 'next/image'
import { Modal } from '@mui/material'






interface CarImageCatalogDesktopProps {
    carModelName: string;
    carImage: string[];
}




const CarImageCatalogDesktop = ({ carImage, carModelName }: CarImageCatalogDesktopProps) => {
    // const [open, setOpen] = useState(false);
    const [openResponsive, setOpenResponsive] = useState(false);
    return (
        <div className='mb-6 relative'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgTransparent} padding='p-0'>
                <TileHeading title={carModelName} />
                <div className={`grid grid-cols-[1.2fr_0.8fr] grid-rows-[260px] gap-3 bg-transparent `}>
                    <div>

                        <img src={carImage[0]} alt="" className='rounded-lg h-full w-full' />
                    </div>
                    <div className={`grid grid-rows-[130px_130px] grid-cols-1 gap-3 h-full`}>
                        <div>

                            <img src={carImage[1]} alt="" className='rounded-lg h-full w-full' />
                        </div>
                        <div className='relative' onClick={() => setOpenResponsive(true)}>
                            <img src={carImage[2]} alt="" className='rounded-lg h-full w-full' />
                            <div className={`flex gap-4  items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f5f1f123] backdrop-blur-[4px] ${textColors.textWhite} py-2 px-4 rounded-sm`}>
                                <FaImage /> <span>10+ Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BookingDetailTileWrapper>

            <div onClick={(e) => e.stopPropagation()}>
                <Modal

                    open={openResponsive}

                    onClose={() => setOpenResponsive(false)}
                >
                    <div>

                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            scrollbar={{
                                hide: false,
                                draggable: true, // optional: lets user drag the scrollbar
                            }}
                            // navigation={{
                            //     nextEl: ".swiper-button-next",
                            //     prevEl: ".swiper-button-prev",
                            // }}

                            loop={true}
                            autoplay={{
                                delay: 2000, // time between slides in ms
                                disableOnInteraction: false, // keeps autoplay after user interacts
                            }}

                            navigation={true}

                            modules={[Scrollbar, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                carImage.map((el, i) => {
                                    return <SwiperSlide key={i}>

                                        <div className="relative h-[480px]">
                                            <Image
                                                src={el || "https://drive.yango.com/images/preview/rs:fill:320:200:1/q:80/g:ce/sm:1/ar:1/dpr:2/plain/s3://aggregator-media-me-central-1/746044ee-de23-4d44-ae87-3252886e7730/ec2ef857-de726d3f-94de5ffc-1795c503"}
                                                alt=""
                                                className="w-full rounded-t-2xl object-cover"
                                                fill

                                            />
                                        </div>


                                        {/* <div className='w-full rounded-xl'>
                                            <img src={el} alt='' className='w-full rounded-xl' />
                                        </div> */}
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>




                </Modal>
            </div>



        </div>
    )
}

export default CarImageCatalogDesktop