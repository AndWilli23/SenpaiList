import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroSectionImage from "./heroSectionImage.jpg"


const HeroSection = () => {

    const infoCards = [{
        title: "Explore",
        description : "Discover new adventures, worlds, and characters to love. 🧙",
        link: "/allAnimes",
    },{
        title: "Search",
        description : "Search Anime and find out all its details. 🕵️",
        link: "/allAnimesSearched"
    },
    {
        title: "Have your favorites",
        description : "Add to your favorites Animes in your list. 😍",
        link: "/"

    }]

    return (
        <>
          <section className="vh-75 " style={{backgroundImage: `url(${heroSectionImage})`, backgroundPosition: "center" ,backgroundRepeat: "no-repeat",height: "65vh"}} >

                <div className="d-flex justify-content-center" >
                    <h1 className="text-light fs-1 text-center w-50" style={{marginTop: "10rem"}}>Welcome to Senpai List  <span className="">your complete guide to the world of anime </span></h1>
                </div>

            </section>

            <div className="d-flex justify-content-center gap-5 py-5 mb-5" style={{ marginTop: "-15rem" }}>
                {infoCards.map((item, index) => (
                    <Card className="mt-5 " key={index} style={{width: '22rem', height: "18rem"}}>
                        <Card.Body>
                            <Card.Title className="text-center">{item.title}</Card.Title>
                            <Card.Text className="py-5 text-center">
                                {item.description }
                            </Card.Text>
                            <div className="d-flex justify-content-center">
                                <Button className="px-5">
                                    <Link className="link-light" to={item.link}>Let`s go!</Link>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
        )
}

export default HeroSection;