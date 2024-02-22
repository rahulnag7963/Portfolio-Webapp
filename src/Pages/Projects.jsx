import { Card, Container, Button } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {animations} from "../Components/Animations"
import { motion } from "framer-motion";

const Projects = () => {
  const cryptoImage = "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg";
  const nasaLogo = "https://wallpapercave.com/wp/wp3454606.jpg";
  const ecommerceLogo = "https://wallpapercave.com/wp/wp3537544.jpg";
  const taxImage = "https://wallpaperaccess.com/full/2975895.jpg";
  const hackathonLogo = "https://miro.medium.com/v2/resize:fit:1024/0*rnYWcmRH4KbfCWzt.png";
  const mernLogo = "https://sbr-technologies.com/wp-content/uploads/2021/06/mern.png";
  return (
  <motion.div
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <Container className="text-center p-2">
      <div className="display-6">Projects</div>
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
            <Card.Title>Cryptocurency Price Checking Website</Card.Title>
            <Card.Text>
              Built a web app that displays important information (ex. market cap, volume, etc.) 
              of the top 250 cryptocurrencies, ordered based on market cap.
            </Card.Text>
            <Card.Text> 
              Built using ReactJS, Bootstrap, and React chartJS. 
              The data is received from CoinGecko API.
            </Card.Text>
            <Button variant="info" href="https://cryptocurrencypricechecker.on.fleek.co/"> Website </Button>{' '}
            <Button variant="secondary" href="https://github.com/rahulnag7963/cpc"> Code </Button>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src={nasaLogo} />
          <Card.Body>
            <Card.Title>Nasa API Website</Card.Title>
            <Card.Text>
              Built a web app that displays the daily photo of 
              the day from Nasa using their API.
            </Card.Text>
            <Card.Text> 
              Built using ReactJS and Bootstrap, with the data coming from the Nasa API. Includes a like button 
              and a description of the picture in question.   
            </Card.Text>
              <Button variant="info" href="https://nasainstajam.on.fleek.co/"> Website</Button>{' '}
              <Button variant="secondary" href="https://github.com/rahulnag7963/shopify_frontend_challenge"> Code </Button>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src={ecommerceLogo} />
          <Card.Body>
            <Card.Title>eComerce Store</Card.Title>
            <Card.Text>
              Built an eCommerce store in a group of 4 that allows users to buy products from a page.
              My main part in the project was dealing with the login/account functions, authentication
              and overall aesthetics of the page.
            </Card.Text>
            <Card.Text> 
              Built using JSP, HTML, Docker, SQL database and Bootstrap.  
            </Card.Text>
            <Button variant="secondary" href="https://github.com/rahulnag7963/cosc304project"> Code </Button>
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
              Built using Java. The calculator can calculate 
              your after-income taxes from all types of income
              as well as predict what taxes you will pay in the future. 
            </Card.Text>
            <Button variant="secondary" href="https://github.com/rahulnag7963/Tax-Calculator"> Code </Button>
          </Card.Body>        
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src={mernLogo} />
          <Card.Body>
            <Card.Title>MERN Stack eComerce Website</Card.Title>
            <Card.Text>
              Built an eCommerce website that uses all
              the CRUD operations needed to create, update
              read and delete a product.
            </Card.Text>
            <Card.Text> 
              Built using MongoDB, Express.js, Bootstrap and React. 
              Also utilized Postman for testing endpoints 
              in the backend.
            </Card.Text>
            <Button variant="secondary" href="https://github.com/rahulnag7963/Eshop"> Code </Button>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Img variant="top" src={hackathonLogo} />  
          <Card.Body>
            <Card.Title>Hackathon Game</Card.Title>
            <Card.Text>
              In a team of 4, we created a game where the user
              has to raise money for charities. While the
              user goes through the map, they will
              require food and energy to continue his quest.
            </Card.Text>
            <Card.Text>
              Made purely in react. My main role was handling
              interface along with certain interfaces 
              such as Location, Food, and Player typescript
              files.
            </Card.Text>
            <Button variant="secondary" href="https://github.com/rahulnag7963/UBCHacks4.0"> Code </Button>
          </Card.Body>
        </Card>
      </Carousel>
      </Container>
    </motion.div>  
  )
}

export default Projects