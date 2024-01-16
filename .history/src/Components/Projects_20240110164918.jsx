import { Button, Container, Image, Stack } from "react-bootstrap"
import { motion } from "framer-motion"
import eshopLogo from "../assets/EShop_logo.png";
const Projects = () => {
  return (
      <>
        <div className="p-2 text-center display-6">
          Projects
        </div>  
        <Container className="text-center">
          <div className="row p-2 mx-auto">
            <div className="col-sm-6">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              style={{width:"18rem;"}}
              > 
                <img src={eshopLogo} className="card-img-top"></img>
                <div class="card-title">MERN Ecommerce Website</div>
                <p class="card-text">
                  Created a fullstack web app using MERN stack.
                  Has all CRUD operations. Endpoints tested using
                  Postman.
                </p>
              </motion.div>
            </div>
            <div className="col">
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              style={{width:"18rem;"}}
              > 
                <img src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg" className="card-img-top"></img>
                <h5 class="card-title">Cryptocurrency pricetracker</h5>
                <p class="card-text">
                  Created a cryptocurrency pricetracking website using
                  react and bootstrap. Connected to an API tht gets you 
                  the top 250 cryptocurrencies along with important
                  data such as volume, marketcap, and others.
                </p>
                <Button href="https://github.com/rahulnag7963/cpc" className="m-2"variant="info"> Code</Button>
                <Button href="https://cryptocurrencypricechecker.on.fleek.co" className="m-2"variant="info"> Website</Button>
              </motion.div>
            </div>
          </div>  
          <div className="row p-2 mx-auto">
            <div className="col">
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              style={{width:"18rem;"}}
              > 
                <img src="https://cdn-hbegf.nitrocdn.com/yxLrsHApXXKhENYfXoQlkmnHtnVYjhAB/assets/images/optimized/rev-5b6b7fc/taxpage.com/wp-content/uploads/2020/08/44968867_m.jpg" className="card-img-top"></img>
                <h5 class="card-title display-6">Tax Calculator</h5>
                <p class="card-text">
                 Coded in Java. Created basic tax calculator that can calculate
                 the taxes that a person currently owes for the 
                 year based on type of income. Also can estimate taxes
                 owed based on rate of inflation. 
                </p>
                <Button href="https://github.com/rahulnag7963/Tax-Calculator" className="m-2"variant="info">Code</Button>
              </motion.div>
            </div>
            <div className="col">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              style={{width:"30rem;"}}
              > 
                <img src="https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg" className="card-img-top"></img>
                <h5 class="card-title display-6">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </motion.div>
            </div>
            <div className="row mx-auto">
            <div className="col">
              <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(247,247,247)"
              }}
              style={{width:"30rem;"}}
              > 
                <img src="https://buffer.com/library/content/images/2023/09/instagram-image-size.jpg" className="card-img-top"></img>
                <h5 class="card-title display-6">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </motion.div>
            </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default Projects