import './Gifts.css';

function Gifts() {
  // Aquí puedes agregar, quitar o modificar todos los regalos que quieras.
  // Solo asegúrate de cambiar el "link" por el que te dé Mercado Pago.
  const regalos = [
    {
      id: 1,
      titulo: "Cabalgata por la playa",
      monto: "$15.000",
      icono: "🐎",
      link: "https://link.mercadopago.com.ar/ejemplo3"
    },
    {
      id: 2,
      titulo: "Balde de Nutella",
      monto: "$30.000",
      icono: "🍫",
      link: "https://link.mercadopago.com.ar/ejemplo1" 
    },
    {
      id: 3,
      titulo: "Oso Panda Gigante",
      monto: "$40.000",
      icono: "🐼",
      link: "https://link.mercadopago.com.ar/ejemplo2"
    },
    {
      id: 4,
      titulo: "Financiar mi viaje a la luna",
      monto: "$50.000",
      icono: "🚀",
      link: "https://link.mercadopago.com.ar/ejemplo3"
    },

  ];

  return (
    <section className="gifts-container">
      <h2>Mesa de Regalos</h2>
      <p className="gifts-subtitle">
        Tu presencia es mi mejor regalo, pero si querés podes elegir alguno de los siguientes regalos:
      </p>

      <div className="gifts-grid">
        {regalos.map((regalo) => (
          <div key={regalo.id} className="gift-card">
            <span className="gift-icon">{regalo.icono}</span>
            <h3>{regalo.titulo}</h3>
            <p className="gift-amount">{regalo.monto}</p>
            <a 
              href={regalo.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-mercadopago"
            >
              Regalar 🎁
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gifts;