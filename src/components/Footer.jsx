import './Footer.css';

function Footer() {
  // Esta función hace que la pantalla suba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-container">
      <div className="banner-final">
        <h2>¡Te espero!</h2>
        <h2> Cata 💕</h2>
      </div>
      
      <button className="btn-up" onClick={scrollToTop}>
        ⬆ Subir al inicio
      </button>

      <div className="footer-credits">
        <p>🐒 Creado con mucho amor por la tía mono 🍌</p>
      </div>
    </footer>
  );
}

export default Footer;