import { Card, Container, Stack } from "react-bootstrap"
const Projects = () => {
  return (
    <div className="p-2 text-center display-6">
        Projects
        <Container>
          <Stack>
          <div className="row p-2 mx-auto">
            <div className="col">
              <Card className="">hi</Card>
            </div>
            <div className="col">
            <Card>hey</Card>
            </div>
          <div className="row p-2 mx-auto">
            <div className="col">
              <Card className="">hi</Card>
            </div>
            <div className="col">
            <Card>hey</Card>
            </div>
          </div>
          </div>
          </Stack>
        </Container>
    </div>
  )
}

export default Projects