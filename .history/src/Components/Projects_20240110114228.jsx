import { Card, Container } from "react-bootstrap"
const Projects = () => {
  return (
    <div className="p-2 text-center display-6">
        Projects
        <Container>
          <div className="row p-2">
          <div className="col">
            <Card className="p-2">hi</Card>{" "}
            <Card>hey</Card>
          </div>
          <div className="col">
          <Card>hey</Card>
          <Card>hi</Card>
          </div>
          </div>
        </Container>
    </div>
  )
}

export default Projects