"use client"
import React, { useState } from 'react'
import BookingDetailTileWrapper from '../BookingDetailTileWrapper'
import TileHeading from '../TileHeading'
import { bgColors, textColors } from '@/constant/colors'
import { FaImage } from 'react-icons/fa'
import { Swiper } from 'swiper/react'
import { SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Modal } from 'antd'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./index.css";



const carImageArr = [

    // "https://rentacar-dubai.ae/wp-content/uploads/2023/10/Porsche-Cayenne-Coupe3.jpg",
    "https://rentacar-dubai.ae/wp-content/uploads/2023/10/2_5301140196283135404.jpg",
    "https://rentacar-dubai.ae/wp-content/uploads/2023/10/Porsche-Cayenne-Coupe1-750x420.jpg",
    "https://rentacar-dubai.ae/wp-content/uploads/2023/10/Porsche-Cayenne-Coupe2-750x420.jpg",
    "https://rentacar-dubai.ae/wp-content/uploads/2023/10/Porsche-Cayenne-Coupe3-750x420.jpg",
    "https://rentacar-dubai.ae/wp-content/uploads/2023/10/Porsche-Cayenne-Coupe4-750x420.jpg"
]





const CarImageCatalogDesktop = () => {
    const [open, setOpen] = useState(false);
    const [openResponsive, setOpenResponsive] = useState(false);
    return (
        <div className='mb-6 relative'>
            <BookingDetailTileWrapper tileBgColor={bgColors.bgTransparent} padding='p-0'>
                <TileHeading title='Hyundai Aura or Similar' />
                <div className={`grid grid-cols-[1.2fr_0.8fr] grid-rows-[260px] gap-3 bg-transparent `}>
                    <div>

                        <img src={carImageArr[0]} alt="" className='rounded-lg h-full w-full' />
                    </div>
                    <div className={`grid grid-rows-[130px_130px] grid-cols-1 gap-3 h-full`}>
                        <div>

                            <img src={carImageArr[1]} alt="" className='rounded-lg h-full w-full' />
                        </div>
                        <div className='relative' onClick={() => setOpenResponsive(true)}>
                            <img src={carImageArr[2]} alt="" className='rounded-lg h-full w-full' />
                            <div className={`flex gap-4  items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#f5f1f123] backdrop-blur-[4px] ${textColors.textWhite} py-2 px-4 rounded-sm`}>
                                <FaImage /> <span>10+ Image</span>
                            </div>
                        </div>
                    </div>
                </div>
            </BookingDetailTileWrapper>

            <div onClick={(e) => e.stopPropagation()}>
                <Modal
                    title="Vehicle Images"
                    centered
                    open={openResponsive}
                    maskClosable={false}
                    onOk={() => setOpenResponsive(false)}
                    onCancel={() => setOpenResponsive(false)}

                    footer={null}
                    width={{
                        sm: '70%',

                    }}
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
                                carImageArr.map((el, i) => {
                                    return <SwiperSlide key={i}>
                                        <div className='w-full rounded-xl'>
                                            <img src={el} alt='' className='w-full rounded-xl' />
                                        </div>
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