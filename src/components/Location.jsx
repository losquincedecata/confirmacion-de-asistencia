import './Location.css';

function Location() {
  // Este es el enlace corto que se abrirá al tocar el botón "¿Cómo llegar?"
  const linkComoLlegar = "https://maps.app.goo.gl/JFAE9L4g2sPbY4Bb9";

  return (
    <section className="location-container">
      <div className="location-content estilo-elegante">
        <h2>¿Dónde?</h2>
        <p className="salon-name">Flox Recepciones</p>
        <p className="address">Diego Pombo 511, San Andrés</p>
        <p className="address">Partido de General San Martín, Buenos Aires.</p>

        {/* Contenedor del mapa incrustado */}
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.5066265898495!2d-58.54806572521511!3d-34.56661065553778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb766e5e62501%3A0xda065fdd999ba697!2sFloxs%20Recepciones!5e1!3m2!1ses-419!2sar!4v1781652174102!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de ubicación del salón"
          ></iframe>
        </div>

        <a href={linkComoLlegar} target="_blank" rel="noopener noreferrer" className="btn-llegar">
          ¿Cómo llegar?
        </a>
      </div>
    </section>
  );
}

export default Location;