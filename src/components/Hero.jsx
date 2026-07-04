import './Hero.css';
import bannerImg from '../assets/banner.png';


function Hero() {
  return (
    <section className="hero-container estilo-elegante">
      <div className="hero-content">
        <img src={bannerImg} alt="Catalina" className="hero-banner" />
        <h2>¡Llegaron mis 15!</h2>
      </div>
    </section>
  );
}

export default Hero;