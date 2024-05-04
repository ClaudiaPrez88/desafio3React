import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ onSubmit, onChange }) => {


  return (
    <div>
        <h5>Agregar un colaborador</h5>
         <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="nombre">
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Nombre del colaborador"
              onChange={onChange}
            />
          </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Control
          name="correo"
          type="email"
          placeholder="Email del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad">
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad del colaborador"
          min={1}
					max={100}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cargo">
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Cargo del colaborador"
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tel">
        <Form.Control
          name="telefono"
          type="tel"
          placeholder="Teléfono del colaborador"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
       Agregar colaborador
      </Button>
    </Form> 
    </div>
  )
}

export default Formulario