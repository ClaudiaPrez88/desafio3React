
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
    setFormErrors('Todos campos son requeridos');
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
    event.target.reset();
  }
};


const handleSearch = (event) => {
  const value = event.target.value.toLowerCase();

  setFilterColaborador(
    users.filter((user) =>
      Object.values(user).some((userField) =>
        userField.toLowerCase().includes(value)
      )
    )
  );
};

  return (
    <>
     <Container>
      <Row>
        <Col xs={12}>
        <h1 className='titulo'>Listado de colaboradores</h1>
        </Col>
        <Col xs={12} lg={4}>
          <Buscador onChange={handleSearch}/>
        </Col>
        <Col lg={{  offset: 8}}></Col>
        <Col xs={12} xl={9}>
          <Listado usuarios={users} onDelete={handleDelete} filterColaborador={filterColaborador}/>
          
        </Col>
        <Col xs={12} xl={3}>
          <Formulario onSubmit={handleSubmit} onChange={handleChange}/>
          <Alert 
          mensaje={formErrors} 
          link={formErrors === 'Agregado exitosamente' ? 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenkxbzNwc2k0azA0M3c0aTd4MjZneWpwejhzdXhsbXVha3AyeHIyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8rFgzA7aBR0aomiOMj/giphy.gif' : 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFqZWJ3aGt2ajRqYndoMW1ucnQybWVrbGFpbnhscHFxNGtvODN0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qNQFUVIKAt9Ek/giphy.gif'} 
          color={formErrors === 'Agregado exitosamente' ? 'success' : 'danger'}/>
        </Col>
      </Row>
    </Container> 
    </>
  )
}

export default App
