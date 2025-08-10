import Carousel from 'react-bootstrap/Carousel';

function ReviewsCards({ reviews }) {
  return (
    <Carousel data-bs-theme="dark" style={{ backgroundColor: 'transparent' }} className='m-5'>
      {reviews.slice(0, 3).map((item, index) => ( 
        <Carousel.Item key={index} className="rounded p-5 shadow-sm" style={{backgroundColor: "#FAFAFA"}}> 
          <h5 className='text-center text-black'>{item.user.username}: </h5>
            <p style={{
                padding: "0 7rem",
                textAlign: "center",
                color: "#1E1E1E",
                paddingTop: "1rem",
                maxWidth: "300ch", 
                overflow: "hidden", 
                textOverflow: "ellipsis", 
                display: "-webkit-box", 
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3}}>{item.review}</p>
            <a className='d-flex justify-content-center' href={item.url}>Click hero to see the review: </a>
        
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ReviewsCards;