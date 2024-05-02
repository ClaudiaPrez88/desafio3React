import React from 'react'
import Table from 'react-bootstrap/Table';


const Listado = () => {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default Listado