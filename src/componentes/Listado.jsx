import React from 'react'
import Table from 'react-bootstrap/Table';


const Listado = ({usuarios}) => {

  console.log(usuarios)

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
           {usuarios.map((user,index) => ( 
                <tr key={index}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.correo}</td>
                <td>{user.edad}</td>
                <td>{user.cargo}</td>
                </tr>
                ))} 
            </tbody>
        </Table>
    </div>
  )
}

export default Listado