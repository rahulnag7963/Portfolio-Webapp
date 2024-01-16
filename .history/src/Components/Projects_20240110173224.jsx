import { Card, Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import eshopLogo from "../assets/EShop_logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const cryptoImage = "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg";
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
                Built using ReactJS, Bootstrap, and React chartJS. The data is recieved from CoinGecko Api, and displayed
                on the website. ChartJS also provides a graph of the price data, segmeente dinto 30, 90 and 365 days. 
              </Card.Text>
              <Button variant="primary" href="https://cryptocurrencypricechecker.on.fleek.co/"> Website </Button>{' '}
              <Button variant="info" href="https://github.com/rahulnag7963/cpc"> Code </Button>
          </Card.Body>
      </Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
      <Card className="m-2">hi</Card>
    </Carousel>
    </Container>  
  )
}

export default Projects