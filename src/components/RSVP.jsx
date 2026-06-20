import { useState } from 'react';
import './RSVP.css';

function RSVP() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // REEMPLAZA EL LINK DE ABAJO POR TU API DE SHEETDB
    fetch('https://sheetdb.io/api/v1/b7zky2nn9xx1q', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: [data] })
    })
    .then((response) => response.json())
    .then(() => {
      setEnviado(true);
    });
  };

  return (
    <section className="rsvp-container">
      <div className='rsvp-content'>
      <h2>Confirmar Asistencia</h2>
      <p className="rsvp-subtitle">
        Por favor, confirmá tu presencia para que pueda organizar todo de la mejor manera.
      </p>

      <div className="form-wrapper">
        {enviado ? (
          <div className="mensaje-exito">
            <h3>¡Gracias por confirmar! 🥳</h3>
            <p>Tus datos ya están en mi lista.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="custom-form">
            
            <div className="form-group">
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input type="text" id="nombre" name="Nombre" required placeholder="Ej: Lionel Messi" />
            </div>

            <div className="form-group">
              <p className="label-text">¿Vas a poder venir?</p>
              <label className="radio-label">
                <input type="radio" name="Asistencia" value="Sí, asistiré!" required />
                Sí, ¡asistiré! 🥳
              </label>
              <label className="radio-label">
                <input type="radio" name="Asistencia" value="No puedo ir" required />
                No puedo ir 😢
              </label>
            </div>

            <div className="form-group">
              <p className="label-text">Consideraciones sobre el menú:</p>
              <select name="Menu" required className="select-input" defaultValue="">
                <option value="" disabled>Elegí una opción...</option>
                <option value="Ninguna">Ninguna (Como de todo)</option>
                <option value="Sin TACC">Sin TACC</option>
                <option value="Sin sal">Sin sal</option>
                <option value="Vegetariano">Vegetariano</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="comentarios">Comentarios o Mensaje:</label>
              <input type="text" id="comentarios" name="Comentarios" placeholder="¡Dejame un mensajito o aclaración acá!" />
            </div>

            <button type="submit" className="btn-enviar">Confirmar</button>
          </form>
        )}
      </div>
      </div>
    </section>
  );
}

export default RSVP;