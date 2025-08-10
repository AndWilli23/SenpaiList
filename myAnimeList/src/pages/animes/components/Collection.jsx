import React, { useCallback } from "react";
import MemoizedCardAnimes from "./CardAnimes";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';



const Collection = ({ animes }) => {
    const navigate = useNavigate();

    const handleNavigate = useCallback((id) => {
        return() => navigate(`/detailsAnimes/${id}`);
    }, [navigate]);

    return (
        <>
        
            <Swiper
                navigation={true} 
                
                modules={[Navigation]}
                style={{margin: "0 4rem 8rem 4rem"}}
                spaceBetween={2}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {animes.map((item) => (
                    <SwiperSlide key={item.mal_id}> 
                        <MemoizedCardAnimes 
                            item={item} 
                            handleNavigate={handleNavigate(item.mal_id)} 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
};

export default Collection;


     