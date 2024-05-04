import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function Alerta({ mensaje, color }) {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (mensaje) {
      setShowAlert(true);

      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 3000); // 10 segundos

      return () => clearTimeout(timeout);
    }
  }, [mensaje]);

  return (
    <div>
      {showAlert && (
        <Alert variant={color}>
          {mensaje}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenkxbzNwc2k0azA0M3c0aTd4MjZneWpwejhzdXhsbXVha3AyeHIyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8rFgzA7aBR0aomiOMj/giphy.gif" alt="GIF de Giphy" style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <p style={{ marginBottom: '0' }}></p>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default Alerta;

