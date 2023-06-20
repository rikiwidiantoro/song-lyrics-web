// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Row className="justify-content-center pt-5">
        <Col lg="8">
          <p>Song Lyrics Web App merupakan website yang menyediakan berbagai lirik lagu dari berbagai music di dunia.</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col lg="2" className='text-center'>
          <Link to="allsong" className="text-white text-decoration-none d-grid"><Button size='sm'>All Song</Button></Link>
        </Col>
      </Row>
      <Row className="justify-content-center pt-5">
        <Col lg="8">
          <p>dibuat oleh Riki Widiantoro</p>
          <p>dengan React JS</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;