import './Footer.css';
import footerImg from '../assets/icono-frase.svg'; // Importación de la imagen

function Footer() {
  // Esta función hace que la pantalla suba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container estilo-elegante">
      <div className="banner-final">
        <h2>¡Te espero!</h2>
        <h2> Cata</h2>
        <img src={footerImg} alt="Regalo" className="footer-image" />
      </div>

      <button className="btn-up" onClick={scrollToTop}>
        ⬆ Ir arriba
      </button>

      <div className="footer-credits">
        <p>🐒 Creado con mucho amor por la tía mono 🍌</p>
      </div>
    </footer>
  );
}

export default Footer;