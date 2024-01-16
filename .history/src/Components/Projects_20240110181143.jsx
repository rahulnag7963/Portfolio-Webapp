import { Card, Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import eshopLogo from "../assets/EShop_logo.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const cryptoImage = "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg";
  const nasaLogo = "https://wallpapercave.com/wp/wp3454606.jpg";
  const ecommerceLogo = "https://wallpapercave.com/wp/wp3537544.jpg";
  const taxImage = "https://wallpaperaccess.com/full/2975895.jpg";
  const hackathonLogo = "https://miro.medium.com/v2/resize:fit:1024/0*rnYWcmRH4KbfCWzt.png";
  const mernLogo = "https://markovate.com/wp-content/uploads/2022/08/Top-10-Reasons-To-Choose-MERN-Stack-Development-For-Your-Next-Project_-1280x720px@2x.png";
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
      <motion.div 
      className="card m-2"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 0px 8px rgba(255,180,211,1)"
      }}
      >
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
      </motion.div>
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
      <Card className="m-2">
      <Card.Img variant="top" src={taxImage} />
        <Card.Body>
          <Card.Title>Java Tax Calculator</Card.Title>
          <Card.Text>
            Built a Tax Calculator that can find out the amount that an individual needs to pay in taxes in
            British Columbia, Canada. 
          </Card.Text>
          <Card.Text> 
            Built using Java. The calculator can calculate your after income taxes from all types of income
            as well as predicite what taxes you will pay in the
            future. 
          </Card.Text>
          <Button variant="info" href="https://github.com/rahulnag7963/Tax-Calculator"> Code </Button>
        </Card.Body>        
      </Card>
      <Card className="m-2">
        <Card.Img variant="top" src={mernLogo} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Built an eccomerce website that uses all 
            the CRUD operations needed to create, update
            read and delete the product. 
          </Card.Text>
          <Card.Text> 
            Built using MongoDB, Express.js, and React. 
            Also utilized Postman for testing endpoints 
            in the backend.
          </Card.Text>
          <Button variant="info" href="https://github.com/rahulnag7963/Eshop"> Code </Button>
        </Card.Body>
      </Card>
      <Card className="m-2">
      <Card.Body>
          <Card.Img variant="top" src={hackathonLogo} />
          <Card.Title>Hackathon Game</Card.Title>
          <Card.Text>
            In a team of 4, created a game where the user
            has to raise money for charities. While the
            user goes throughout the map, he will
            require food and energy in order to
            continue his quest. 
          </Card.Text>
          <Card.Text>
            Made purely in react, main role was handling
            interface along with certain interfaces 
            such as Location, Food, and Player typescript
            files
          </Card.Text>
          <Button variant="info" href="https://github.com/rahulnag7963/UBCHacks4.0"> Code </Button>
        </Card.Body>
      </Card>
    </Carousel>
    </Container>  
  )
}

export default Projects