
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './componentes/Buscador'
import Listado from './componentes/Listado';
import Formulario from './componentes/Formulario';
import Alert from './componentes/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import colaboradores from './database/BaseColaboradores';

function App() {
  const [users, setUsers] = useState(colaboradores); 
  const [formulario, setFormulario] = useState({
		id: '',
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});
  const [formValido, setFormValido] = useState('');



const handleAddUser = (newUser) => {
  setUsers([...users, newUser]);
};

const handleDelete = (id) => {
  setUsers(users.filter((user) => user.id != id));
};

const handleChange = (event) => {
  const { name, value } = event.target;

  setFormulario({
    ...formulario,
    [name]: value,
  });
};


const handleSubmit = (event) => {
  
  event.preventDefault();
  const id = users.length + 1;
  const { nombre, correo, edad, cargo, telefono } = event.target;

  if (
    !nombre.value ||
    !correo.value ||
    !edad.value ||
    !cargo.value ||
    !telefono.value
  ) {
    setFormValido('Todos los campos son requeridos');
  } else {
    const newUserForm = {
      id,
      nombre: nombre.value,
      correo: correo.value,
      edad: edad.value,
      cargo: cargo.value,
      telefono: telefono.value,
    };

    handleAddUser(newUserForm);
  }
};

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
          <Listado usuarios={users}/>
        </Col>
        <Col xs={12} md={4}>
          <Formulario onSubmit={handleSubmit} onChange={handleChange}/>
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
