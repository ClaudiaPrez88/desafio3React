
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './componentes/Buscador'
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <>
     <Container>
      <Row>
        <Col xs={12}>
        <h1>Listado de colaboradores</h1>
        </Col>
        <Col xs={12} md={4}>
          <Buscador/>
        </Col>
        <Col md={{  offset: 8}}></Col>
        <Col xs={12} md={8}>
          <Listado/>
        </Col>
        <Col xs={12} md={4}>
          <Formulario/>
        </Col>
        <Col xs={12}>
          <Alert variant="danger"/>
        </Col>
      </Row>
    </Container> 
    </>
  )
}

export default App
