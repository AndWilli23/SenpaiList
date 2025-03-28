import React, { useCallback } from "react";
import MemoizedCardAnimes from "./CardAnimes";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const Collection = ({ animes }) => {
    const navigate = useNavigate();

    const handleNavigate = useCallback((id) => {
        return() => navigate(`/detailsAnimes/${id}`);
    }, [navigate]);

    return (
        <>
            <div className="ms-5 me-5 mb-5 d-flex align-items-center justify-content-between" style={{paddingTop: "3rem"}}>
                <h4  className="text-warning">Animes populares: </h4>
                <Link className="fs-5  p-2" to={"/allAnimes"}  >Ver todos</Link>
            </div>
        
            <Swiper
                navigation={true} 
                
                modules={[Navigation]}
                style={{margin: "0 4rem 8rem 4rem"}}
                spaceBetween={2}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {animes.map((item, index) => (
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


     