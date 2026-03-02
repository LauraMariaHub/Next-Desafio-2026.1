'use client';

import CompactCard from '@/components/compact-product-card'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperProps {
    children: React.ReactNode;
    paginationActive?: boolean
}

import { Pagination, Navigation } from "swiper/modules";


const SwiperComponent = ({ children, paginationActive = true }: SwiperProps) => {
    return (
        <><style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #06434F
                }
                .swiper-pagination-bullet-active {
                    background: #06434F !important; /* Cor da bolinha ativa */
                }
            `}</style>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                pagination={paginationActive ? { clickable: true } : false}
                scrollbar={{ draggable: true }}
                className='w-full pb-12 px-10'
                loop={true}
                modules={[Pagination, Navigation]}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
            >
                {React.Children.map(children, (child) => (
                    <SwiperSlide>
                        <div className="flex justify-center">
                            {child}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper></>
    )
}

export default SwiperComponent