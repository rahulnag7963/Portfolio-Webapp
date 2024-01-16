import { Card, Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import eshopLogo from "../assets/EShop_logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const cryptoImage = "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg";
  const nasaLogo = "https://wallpapercave.com/wp/wp3454606.jpg";
  const ecommerceLogo = "https://wallpapercave.com/wp/wp3537544.jpg";
  const taxImage = "https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg";
  return (
  <Container className="text-center p-3">
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <Card className="m-2">
        <Card.Img variant="top" src={cryptoImage} />
          <Card.Body>
              <Card.Title>Cryptocurency Price cheking website</Card.Title>
              <Card.Text>
                Built a webapp that displays important information (ex. marketcap, volume, etc.) of the top 250 cryptocurencies by Marketcap.
              </Card.Text>
              <Card.Text> 
                Built using ReactJS, Bootstrap, and React chartJS. The data is recieved from CoinGecko Api 
              </Card.Text>
              <Button variant="info" href="https://cryptocurrencypricechecker.on.fleek.co/"> Website </Button>{' '}
              <Button variant="secondary" href="https://github.com/rahulnag7963/cpc"> Code </Button>
          </Card.Body>
      </Card>
      <div className="card m-2">
      <Card.Img variant="top" src={nasaLogo} />
        <Card.Body>
          <Card.Title>Nasa API website</Card.Title>
          <Card.Text>
            Built a webapp that displays the daily photo of the day from Nasa using an API.
          </Card.Text>
          <Card.Text> 
            Built using ReactJS and Bootstrap, with the data coming from the Nasa API. Includes a like button 
            and a description of the picture in question.   
          </Card.Text>
            <Button variant="info" href="https://nasainstajam.on.fleek.co/"> Website</Button>{' '}
            <Button variant="secondary" href="https://github.com/rahulnag7963/shopify_frontend_challenge"> Code </Button>
        </Card.Body>
      </div>
      <Card className="m-2">
        <Card.Img variant="top" src={ecommerceLogo} />
        <Card.Body>
          <Card.Title>Eccomerce store</Card.Title>
          <Card.Text>
            Built an eccormerce store in a group of 4 that allows users to buy produts from a page. 
            My main part in the project was dealing with the login/account functions and overall aesthetics of the page.
          </Card.Text>
          <Card.Text> 
            Built using JSP, HTML, Docker, SQL database and Bootstrap.  
          </Card.Text>
          <Button variant="info" href="https://github.com/rahulnag7963/cosc304project"> Code </Button>
        </Card.Body>        
      </Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
    </Carousel>
    </Container>  
  )
}

export default Projects