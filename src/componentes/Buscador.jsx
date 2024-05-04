import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Buscador = ({ onChange }) => {
  return (
    <div>
        <InputGroup className="mb-3">
        <Form.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        onChange={onChange}
				type="text"
				placeholder="Busca un Colaborador"
        />
        </InputGroup>
    </div>
  )
}

export default Buscador

/* import React from 'react';

const Buscador = ({ onChange }) => {
  return (
    <input type="text" placeholder="Buscar..." onChange={onChange} />
  );
};

export default Buscador; */