import { useState } from 'react';
import './RSVP.css';

function RSVP() {
  const [enviado, setEnviado] = useState(false);
  // Estado para capturar la asistencia y el tipo de menú
  const [asistencia, setAsistencia] = useState('');
  const [menu, setMenu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

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
      })
      .catch((error) => {
        console.error('Error al confirmar asistencia:', error);
        alert('Hubo un error al enviar tu confirmación. Por favor, intentá de nuevo.');
      });
  };

  return (
    <section className="rsvp-container">
      <div className='rsvp-content estilo-elegante'>
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
                <input type="text" id="nombre" name="Nombre" required placeholder="Ej: Osito Gominola" />
              </div>

              <div className="form-group">
                <p className="label-text">¿Vas a poder venir?</p>
                <label className="radio-label">
                  <input type="radio" name="Asistencia" value="Sí, asistiré!" required 
                    onChange={(e) => setAsistencia(e.target.value)} />
                  Sí, ¡asistiré! 🥳
                </label>
                <label className="radio-label">
                  <input type="radio" name="Asistencia" value="No puedo ir" required 
                    onChange={(e) => setAsistencia(e.target.value)} />
                  No puedo ir 😢
                </label>
              </div>

              {/* Solo mostramos el menú si la asistencia es 'Sí' */}
              {asistencia === 'Sí, asistiré!' && (
                <div className="form-group">
                  <p className="label-text">Consideraciones sobre el menú:</p>
                  <select name="Menu" required className="select-input" value={menu} onChange={(e) => setMenu(e.target.value)}>
                    <option value="" disabled>Elegí una opción...</option>
                    <option value="Ninguna">Ninguna (Como de todo)</option>
                    <option value="Sin TACC">Sin TACC</option>
                    <option value="Sin sal">Sin sal</option>
                    <option value="Vegetariano">Vegetariano</option>
                    <option value="Vegano">Vegano</option>
                    <option value="Diabetico">Diabetico</option>
                    <option value="Otro">Otro (Escribir abajo)</option>
                  </select>

                  {/* Campo extra si seleccionan 'Otro' */}
                  {menu === 'Otro' && (
                    <input type="text" name="OtroMenu" required placeholder="Especificá tu preferencia" style={{ marginTop: '10px' }} className="select-input" />
                  )}
                </div>
              )}

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