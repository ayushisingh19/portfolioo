import Carousel from 'react-bootstrap/Carousel';
import img from "../images/b1.jpg";
import img1  from "../images/b2.avif";
import img2 from "../images/b3.avif";
const Car=()=>{
    return (
      <>
      <div className='c'>
     <h2>PROJECTS</h2>
  <Carousel className='car'>
        <Carousel.Item>
          <img src={img} width="100%"/>
          <Carousel.Caption>
            <h3>TITEN WEBSITE </h3>
            <p>using html css and js,responsive and multipage</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img1 } width="100%"/>
          <Carousel.Caption>
            <h3>DASHBOARD</h3>
            <p>using html css and js,responsive and multipage</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={img2} width="100%"/>
          <Carousel.Caption>
            <h3>HOME DECOR WEBSITE</h3>
            <p>
            using html css and js,responsive and multipage
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      </>
    )
  
  };
  export default Car