import { useState } from 'react';
import './Gifts.css';
import giftImg from '../assets/icono-regalo.svg'; // Importación de la imagen

// Dejamos configurados solo los datos esenciales de tu misión lunar 🌕
const datosTransferencia = {
  titulo: "Financiar mi viaje a la luna",
  alias: "micaela.za",
  cvu: "0000003100015137881806"
};

function Gifts() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [copiadoTexto, setCopiadoTexto] = useState(""); // Estado para el aviso de copiado

  // Función mágica para copiar los datos automáticamente al portapapeles
  const copiarAlPortapapeles = (texto, tipo) => {
    navigator.clipboard.writeText(texto);
    setCopiadoTexto(`¡${tipo} copiado!`);
    
    // El cartelito flotante desaparece solo después de 2 segundos
    setTimeout(() => {
      setCopiadoTexto("");
    }, 2000);
  };

  return (
    <section className="seccion-regalos">
      <div className='gifts-content estilo-elegante'>
        <h2>Regalos</h2>
        <img src={giftImg} alt="Regalo" className="gift-icon-img" />
        <p>¡Mi regalo favorito es compartir esta noche con vos!✨</p>
        <p>Si igual querés mimarme un poquito, </p>
        <p>podés dejar tu regalo en el salón o colaborar con mi misión espacial...</p>
        <br />
        
        {/* Un único botón estelar centrado y sin monto */}
        <div className="contenedor-regalo-unico">
          <button onClick={() => setModalAbierto(true)} className="btn-regalo-lunar">
            <span>🚀</span>
            <h3>Financiar mi viaje a la luna</h3>
          </button>
        </div>

        {modalAbierto && (
          <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
            <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
              <h3>{datosTransferencia.titulo}</h3>
              <p>Hacé clic sobre los datos para copiarlos:</p>
              
              {/* Al hacer clic en cualquiera de estos divs, se copia el dato al instante */}
              <div className="caja-transferencia">
                <div className="item-copiar" onClick={() => copiarAlPortapapeles(datosTransferencia.alias, "Alias")}>
                  <p>Alias: <strong>{datosTransferencia.alias}</strong> 📋</p>
                </div>
                <div className="item-copiar" onClick={() => copiarAlPortapapeles(datosTransferencia.cvu, "CVU")}>
                  <p>CVU: <strong>{datosTransferencia.cvu}</strong> 📋</p>
                </div>
              </div>

              {/* Si el invitado copió algo, acá sale el aviso flotante (¡Alias copiado! / ¡CVU copiado!) */}
              {copiadoTexto && <div className="aviso-copiado">{copiadoTexto}</div>}
              
              <button onClick={() => setModalAbierto(false)} className="btn-cerrar">Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gifts;