import { Col, Grid, Row, Button } from "./components";

function App() {
  return (
    <div style={{ padding: "5rem" }}>
      <Grid>
        <Row>
          <Col size={3}>
            <Button size="sm">Small Button</Button>
          </Col>
          <Col size={3}>
            <Button size="md">Medium Button</Button>
          </Col>
          <Col size={3}>
            <Button size="lg">Large Button</Button>
          </Col>
          <Col size={3}>
            <Button fullWidth>Delete Button (Contained by default)</Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
