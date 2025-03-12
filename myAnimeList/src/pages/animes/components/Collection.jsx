import React from "react";
import CardAnimes from "./CardAnimes";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./style.css"
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Collection = ({ animes }) => {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/detailsAnimes/${id}`);
    };

    return (
        <Swiper
            navigation={true} 
            modules={[Navigation]}
            style={{margin: "0 4rem"}}
            spaceBetween={2}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {animes.map((item) => (
                <SwiperSlide key={item.mal_id}> 
                    <CardAnimes 
                        item={item} 
                        handleNavigate={() => handleNavigate(item.mal_id)} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Collection;


        // <div className="m-5">  
        //     <ul className="d-flex justify-content-center gap-5" style={{margin: "1rem 2rem"}}>
        //         {animes.map((item, index) => {
        //             return (
        //                 <>
        //                     <CardAnimes key={index} item={item} index={index}  handleNavigate={() => handleNavigate(item.mal_id)}/> 
        //                 </>
        //             )
        //         })}
        //     </ul>
        // </div>  
 