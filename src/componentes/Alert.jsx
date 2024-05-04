import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Alerta({ mensaje,color}) {
  return (
    <div>
      {mensaje && <Alert variant={color}>{mensaje}</Alert>}
    </div>
  )
}

export default Alerta
