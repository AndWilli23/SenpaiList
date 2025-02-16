import Carousel from 'react-bootstrap/Carousel';

function ReviewsCards({ reviews }) {
  return (
    <Carousel data-bs-theme="light" style={{ backgroundColor: 'transparent' }} className='m-5'>
      {reviews.slice(0, 3).map((item, index) => ( 
        <Carousel.Item key={index} className="rounded p-5" style={{backgroundColor: "#222831"}}> 
          <h5 className='text-center'>{item.user.username}</h5>
            <p style={{
                paddingTop: "1rem",
                maxWidth: "300ch", 
                overflow: "hidden", 
                textOverflow: "ellipsis", 
                display: "-webkit-box", 
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3}}>{item.review}</p>
            <a className='d-flex justify-content-center' href={item.url}>Ver review completa aqui: </a>
        
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ReviewsCards;