import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
        const nombreRegex = /^.{3,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const { nombre, correo, edad, cargo, tel } = event.target;
    
        if (
          !nombre.value ||
          !correo.value ||
          !edad.value ||
          !cargo.value ||
          !tel.value
        ) {
          handleErrors("Todos los campos obligatorios");
          return;
        }
        if (!nombreRegex.test(nombre.value)) {
          handleErrors("El nombre debe tener al menos 3 caracteres");
          return;
        }
    
        if (!emailRegex.test(correo.value)) {
          handleErrors(
            "Verifica que el correo sea válido y no contenga espacios en blanco"
          );
          return;
        }
      };

  return (
    <div>
        <h5>Agregar un colaborador</h5>
         <Form onSubmit="">
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Control
          name="nombre"
          type="text"
          placeholder="Nombre del colaborador"
          onChange=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="correo">
        <Form.Control
          name="correo"
          type="email"
          placeholder="Email del colaborador"
          onChange=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="edad">
        <Form.Control
          name="edad"
          type="number"
          placeholder="Edad del colaborador"
          onChange=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="cargo">
        <Form.Control
          name="cargo"
          type="text"
          placeholder="Cargo del colaborador"
          onChange=""
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="tel">
        <Form.Control
          name="tel"
          type="tel"
          placeholder="Teléfono del colaborador"
          onChange=""
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