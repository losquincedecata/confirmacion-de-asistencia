import './Footer.css';
import footerBanner from '../assets/footer.png';

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
        <img src={footerBanner} alt="Te espero Cata" className="footer-banner-img" />
      </div>

      <button className="btn-up" onClick={scrollToTop}>
        Ir arriba
      </button>

      <div className="footer-credits">
        <p>Creado con mucho amor</p>
        <p>por la tía mono</p>
        <p>🐒🍌</p>
      </div>
    </footer>
  );
}

export default Footer;