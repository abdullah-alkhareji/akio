import { Col, Grid, Row, Button } from "./components";

function App() {
  return (
    <div style={{ padding: "5rem" }}>
      <Grid>
        <Row>
          <Col size={3}>
            <Button variant="contained">Contained Button</Button>
          </Col>
          <Col size={3}>
            <Button variant="outlined" delete>
              Outlined Button
            </Button>
          </Col>
          <Col size={3}>
            <Button>Link Button</Button>
          </Col>
          <Col size={3}>
            <Button>Delete Button (Contained by default)</Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
