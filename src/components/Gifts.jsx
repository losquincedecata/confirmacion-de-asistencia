import { useState } from 'react';
import './Gifts.css';
import giftImg from '../assets/icono-regalo.svg'; // Importación de la imagen

const regalos = [
  { id: 1, titulo: "Cabalgata por la playa", monto: "$15.000", icono: "🐎", alias: "micaela.za", cvu: "0000003100015137881806" },
  { id: 2, titulo: "Balde de Nutella", monto: "$30.000", icono: "🍫", alias: "micaela.za", cvu: "0000003100015137881806" },
  { id: 3, titulo: "Oso Panda Gigante", monto: "$50.000", icono: "🐼", alias: "micaela.za", cvu: "0000003100015137881806" },
  { id: 4, titulo: "Financiar mi viaje a la luna", monto: "$100.000", icono: "🚀", alias: "micaela.za", cvu: "0000003100015137881806" },
];

function Gifts() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [regaloSeleccionado, setRegaloSeleccionado] = useState(null);

  const abrirModal = (regalo) => {
    setRegaloSeleccionado(regalo);
    setModalAbierto(true);
  };

  return (
    <section className="seccion-regalos">
      <div className='gifts-content estilo-elegante'>
        <h2>Regalos</h2>
        <img src={giftImg} alt="Regalo" className="gift-icon-img" />
        <p>Lo más importante es tu presencia,</p>
        <p>pero te dejo algunas ideas... </p>
        <br></br>
        <div className="grilla-regalos">
          {regalos.map((regalo) => (
            <button key={regalo.id} onClick={() => abrirModal(regalo)} className="btn-regalo">
              <span>{regalo.icono}</span>
              <h3>{regalo.titulo}</h3>
              <p>{regalo.monto}</p>
            </button>
          ))}
        </div>

        {modalAbierto && (
          <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <h3>{regaloSeleccionado.titulo}</h3>
              <p>Monto sugerido: <strong>{regaloSeleccionado.monto}</strong></p>
              <p>Datos para transferencia:</p>
              <div className="caja-alias">
                <p>Alias: <strong>{regaloSeleccionado.alias}</strong></p>
                <p>CVU: <strong>{regaloSeleccionado.cvu}</strong></p>
              </div>
              <button onClick={() => setModalAbierto(false)} className="btn-cerrar">Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gifts;