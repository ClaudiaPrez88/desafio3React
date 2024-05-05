import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Alerta({ mensaje,color,link}) {

  
  return (
    <div>
      {mensaje && <Alert variant={color}>
      <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center',flexDirection:'column' }}>
      {mensaje}
        <img src={link} alt="GIF de Giphy"style={{ width: '150px', height: '150px', marginTop: '10px' }} />
        <p style={{ marginBottom: '0' }}></p></div>
        </Alert>}
    </div>
  )
}

export default Alerta
