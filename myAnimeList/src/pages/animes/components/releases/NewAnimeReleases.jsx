import React, { useState, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const NewAnimeReleases = () => {

  const [newAnimeReleases, setNewAnimeReleases] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const requestApi = async () => {
      const getLastEpisodes = await fetch(`https://api.jikan.moe/v4/watch/episodes`);
      const response = await getLastEpisodes.json();
      console.log(response);
      setNewAnimeReleases(response.data);
    }
    requestApi();
  }, []);

    const handleNavigate = useCallback((id) =>{
        return () => navigate(`/detailsAnimes/${id}`)
    }, [navigate]);

  return (
    <>
      <div className="m-5">
        <h4  className="text-warning">Animes com episódios lançados recentimente: </h4>
      </div>
    
      <Swiper
        navigation={true} 
        modules={[Navigation]}
        style={{ margin: "2rem 4rem" }}
        spaceBetween={5}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {newAnimeReleases.map((anime, index) => {

          if (!anime.entry.images.jpg.large_image_url.includes("icon-banned-youtube-rect.png")) {
            return (
              <SwiperSlide key={index}>
                <div >
                  <div key={index} className="p-2" >
                      <button style={{all: "unset", cursor: "pointer"}} onClick={handleNavigate(anime.entry.mal_id)}>
                          <Card.Img className="p-0" variant='top' src={anime.entry.images.jpg.large_image_url} style={{width: "200px", height:"300px"}}></Card.Img>
                          <div className="py-2 px-0">
                              <Card.Title 
                                  className="p-0" 
                                  style={{
                                    color: "#38592E",  width: "200px", fontSize: "16px", maxWidth:"30ch", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" 
                                  }}>
                                      {anime.entry.title}
                              </Card.Title>            
                          </div>
                      </button>   
                  </div>
              </div>
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
    </>

  );
}

export default NewAnimeReleases
