import React, { useEffect, useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import ReactPlayer from "react-player";
import ReviewsCards from "./ReviewsCards";
import OffCanvas from "./OffCanvas";
import Loading from "../Loading";



const DetailsAnimes = () => {

    const {id} = useParams()
    const [animeSelect, setAnimeSelect] = useState(null)
    const [characters, setCharecters] = useState([])
    const [amountCharacters, setAmountCharacters] = useState(25)
    const [characterSelect, setCharacterSelect] = useState(null)
    const [reviews, setReviews] = useState([])


    
    const handleCharacterSelected = async (characterId) => {

        const getCharactersSelect = await fetch(`https://api.jikan.moe/v4/characters/${characterId}`);

        const response = await getCharactersSelect.json();

        console.log(response.data);

        setCharacterSelect(response.data.about);
    }
   

    useEffect(() => {
        const requestApi = async () => {
            const animeSelected = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

            const response = await animeSelected.json();

            setAnimeSelect(response.data);
        }
        requestApi();
    }, [id])


    
    useEffect(() => {
        const requestApi = async () => {
            const getCharacters = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
            
            const response = await getCharacters.json();
            
            console.log(response.data);
            
            
            setCharecters(response.data);
        }
        requestApi();
    }, [id])

    
    useEffect(() => {
        const requestApi = async () => {
            const getReviews = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`);

            const response = await getReviews.json();

            console.log(response.data);

            setReviews(response.data);
        }
        requestApi();
    }, [id]);


    const loadMoreCharacters  = () => {
        setAmountCharacters(amountCharacters + 10);
    }

    const loadLessCharacters  = () => {
            setAmountCharacters(amount => (amount > 25 ? amount - 10 : amount) );
    }

    if (!animeSelect) {
        return <Loading loaded={animeSelect}></Loading>
    }

    console.log(animeSelect.episodes)
    

    return(
            <main >

                    <section className="m-5">
                            <h2 className="text-warning">{animeSelect.title}:</h2>                  
                    </section>

                    <section className="d-flex justify-content-around" style={{margin: "2rem 5rem"}}>

                        <div >
                            {animeSelect.trailer.url !== null ? (<ReactPlayer url={animeSelect.trailer.url}/>) : (<img src={animeSelect.images.webp.image_url} alt="imagem do anime"/>) }
                        </div>

                        <div className="m-5">
                            <h3 className=" text-warning text-center mb-5">Gênero: </h3>
                            
                                <div className="d-flex gap-4 flex-wrap justify-content-center" >
                                    {animeSelect.genres.map((item, index) => (
                                        <div key={index} className="bg-info-subtle rounded px-5 py-2 my-1" >
                                            <p className="m-0 text-center text-success">{item.name}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                    </section>

                    <section className="m-5">
                        <p className="text-center" style={{color: "#38592E"}}>{animeSelect.synopsis}</p>
                    </section>

                    {animeSelect.episodes!== null && ( 
                        <section>
                            <h3 className="text-warning text-center py-4">Duração: </h3>

                            <div className="d-flex gap-5 justify-content-center">
                                <p className="bg-success px-5 p-2 rounded">Episódios: {animeSelect.episodes}</p>
                            </div>
                        </section>
                    )}

                    {characters.length !== 0 && (
                        <section>
                            <div className="d-flex flex-column align-items-center gap-3 m-5">
                                <div className="d-flex pb-4 flex-column">
                                    <h3 className=" text-warning pb-3">Personagens: </h3>
                                    <OverlayTrigger
                                        placement="right"
                                        overlay={
                                            <Tooltip id="tooltip-top">
                                                Clique nos personagens para mais informações
                                            </Tooltip>
                                        }
                                        >
                                        <Button style={{background: "none", border: "none"}}><span className="bg-secondary rounded px-3 py-2">?</span></Button>
                                    </OverlayTrigger>
                                </div>


                                <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center ">
                                    {characters.slice(0, amountCharacters).map((item, index) => (
                                        <div key={index} style={{width: "5%"}}>

                                            
                                            <button style={{border: "none", background: "none", outline: "none", padding: "0"}} onClick={() => handleCharacterSelected(item.character.mal_id)}>
                                                <OffCanvas characterAbout={characterSelect} name={item.character.name} character={item.character}/>
                                            </button>
                                        </div>            
                                    ))}
                                </div>
                                <div className="d-flex g-3">
                                    {amountCharacters > 25 ? (
                                        <Button style={{margin: "0 1rem"}} variant="outline-warning" onClick={loadLessCharacters }>ver menos...</Button>
                                    ) : (<Button style={{margin: "0 1rem"}} variant="outline-warning" disabled onClick={loadLessCharacters }>ver menos...</Button>)}

                                    {amountCharacters < characters.length ? (
                                        <Button style={{margin: "0 1rem"}} variant="outline-warning" onClick={loadMoreCharacters }>ver mais...</Button>
                                    ) : (<Button style={{margin: "0 1rem"}} variant="outline-warning" disabled onClick={loadMoreCharacters }>ver mais...</Button>)}
                                </div>
                            </div>
                        </section>
                    )}
                

                    {reviews.length !== 0 && (
                        <section>
                            <div>
                                <h3 className=" text-warning text-center" >Reviews: </h3>
                                <div className="d-flex flex-column">         
                                    <ReviewsCards reviews={reviews}/>
                                </div>
                            </div>
                        </section>
                    )}

                    <div className="d-flex justify-content-center p-5" >
                        <Link to={"/Home"}>
                            <Button className="px-5" variant="outline-info">
                                    Voltar para a Home
                            </Button>
                        </Link>
                    </div>
                
            </main>
    )
}

export default DetailsAnimes