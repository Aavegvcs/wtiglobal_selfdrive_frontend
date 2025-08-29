import Image from 'next/image'
import React from 'react'

interface BannerProps {
    img: string
}

const Banner = ({ img }: BannerProps) => {
    return (
        <div className=''>
            <div className='w-full h-full'>
                <Image src={img} alt='' />
            </div>
        </div>
    )
}

export default Banner