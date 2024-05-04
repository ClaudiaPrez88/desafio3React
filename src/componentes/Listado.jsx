import React from 'react'
import Table from 'react-bootstrap/Table';


const Listado = ({usuarios}) => {

  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Cargo</th>
                <th>Teléfono</th>
                </tr>
            </thead>
            <tbody>
           {usuarios.map((user,index) => ( 
                <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.edad}</td>
                <td>{user.cargo}</td>
                <td>{user.telefono}</td>
                </tr>
                ))} 
            </tbody>
        </Table>
    </div>
  )
}

export default Listado