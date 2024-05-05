import React from 'react'
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button'


const Listado = ({usuarios, onDelete, filterColaborador}) => {
  const handleDelete = (userId) => { Swal.fire({ 
    title: '¿Estás seguro de Eliminar el Usuario?',       
    text: '¡No podrás deshacer esto!',       
    icon: 'warning',       
    showCancelButton: true,       
    confirmButtonColor: '#3085d6',       
    cancelButtonColor: '#d33',       
    confirmButtonText: 'Sí, bórralo'})
    .then((result) => {if (result.isConfirmed) { onDelete(userId);}
  });
};

  return (
    <div className='listado'>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {filterColaborador?.length ? (
					filterColaborador.map((user, index) => (
						<tr key={index}>
							<td>{user.id}</td>
							<td>{user.nombre}</td>
							<td>{user.correo}</td>
							<td>{user.edad}</td>
							<td>{user.cargo}</td>
							<td>{user.telefono}</td>
							<td>
              <Button
								onClick={() => handleDelete(user.id)}	
                variant="primary"
								>
									Eliminar
								</Button>
							</td>
						</tr>
					))
				) : usuarios?.length ? (
					usuarios.map((user, index) => (
						<tr key={index}>
							<td>{user.id}</td>
							<td>{user.nombre}</td>
							<td>{user.correo}</td>
							<td>{user.edad}</td>
							<td>{user.cargo}</td>
							<td>{user.telefono}</td>
							<td>
              <Button
									
                  variant="primary"
                    onClick={() => handleDelete(user.id)}	
								>
									Eliminar
								</Button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={7}>
							<h1>No existen Datos</h1>
						</td>
					</tr>
				)}

            </tbody>
        </Table>
    </div>
  )
}

export default Listado