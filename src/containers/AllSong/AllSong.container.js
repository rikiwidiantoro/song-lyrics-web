import { Container, Row, Col } from 'react-bootstrap';
import Content from '../../component/Content/Content.component';

function AllSong() {
  return (
    <Container>
      <Row className="pt-3">
        <Col>
          <h1>All Song</h1>
        </Col>
      </Row>
      <Row>
        <Content />
      </Row>
    </Container>
  );
}

export default AllSong;