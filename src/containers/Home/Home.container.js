// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Home</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Song Lyrics Web App merupakan website yang menyediakan berbagai lirik lagu dari berbagai music di dunia.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary"><Link>All Song</Link></Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;