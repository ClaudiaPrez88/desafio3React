import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Buscador = () => {
  return (
    <div>
        <InputGroup className="mb-3">
        <Form.Control
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        />
        </InputGroup>
    </div>
  )
}

export default Buscador