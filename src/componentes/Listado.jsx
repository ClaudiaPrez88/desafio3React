import React from 'react'
import Table from 'react-bootstrap/Table';


const Listado = ({usuarios, onDelete, filterColaborador}) => {

  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
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
								<button
									onClick={() =>
										confirm('Estas seguro 😰?') && onDelete(user.id)
									}
								>
									Eliminar
								</button>
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
								<button
									onClick={() =>
										confirm('Estas seguro 😰?') && onDelete(user.id)
									}
								>
									Eliminar
								</button>
							</td>
						</tr>
					))
				) : (
					<tr>
						<td colSpan={7}>
							<h1>No hay datos 😁</h1>
						</td>
					</tr>
				)}

            </tbody>
        </Table>
    </div>
  )
}

export default Listado