
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
  const [filterColaborador, setFilterColaborador] = useState([]);
  const [formulario, setFormulario] = useState({
		id: '',
		nombre: '',
		correo: '',
		edad: '',
		cargo: '',
		telefono: '',
	});
  const [formErrors, setFormErrors] = useState('');

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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { nombre, correo, edad, cargo, telefono } = event.target;

  if (
    !nombre.value ||
    !correo.value ||
    !edad.value ||
    !cargo.value ||
    !telefono.value
  ) {
    setFormErrors('Debes rellenar todos campos son requeridos');
  } 
  else if (emailRegex.test(correo)) {
    setFormErrors('Correo electrónico inválido');
  } 
  else {
    const newUserForm = {
      id,
      nombre: nombre.value,
      correo: correo.value,
      edad: edad.value,
      cargo: cargo.value,
      telefono: telefono.value,
    };
    handleAddUser(newUserForm);
    setFormErrors("Agregado exitosamente")
  }
};
/* const handleDelete = (id) => {
  setUsers(users.filter((user) => user.id != id));
}; */

const handleSearch = (event) => {
  const value = event.target.value.toLowerCase();

  setFilterColaborador(
    users.filter((user) =>
      Object.values(user).some((userField) =>
        userField.toLowerCase().includes(value)
      )
    )
  );
/*   console.log(filterColaborador) */
};

  return (
    <>
     <Container>
      <Row>
        <Col xs={12}>
        <h1>Listado de colaboradores</h1>
        </Col>
        <Col xs={12} md={4}>
          <Buscador onChange={handleSearch}/>
        </Col>
        <Col md={{  offset: 8}}></Col>
        <Col xs={12} md={8}>
          <Listado usuarios={users} onDelete={handleDelete} filterColaborador={filterColaborador}/>
          
        </Col>
        <Col xs={12} md={4}>
          <Formulario onSubmit={handleSubmit} onChange={handleChange}/>
        </Col>
        <Col xs={12}>
          <Alert mensaje={formErrors} color={formErrors === 'Agregado exitosamente' ? 'success' : 'danger'}/>
        </Col>
      </Row>
    </Container> 
    </>
  )
}

export default App
