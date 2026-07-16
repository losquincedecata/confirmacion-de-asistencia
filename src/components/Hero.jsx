import './Hero.css';
import bannerImg from '../assets/banner.png';
import cataSentada from '../assets/cata1.png'
import cataPolaroid from '../assets/cata2.png'



function Hero() {
  return (
    <section className="hero-container estilo-elegante">
      <div className="hero-content">
        <img src={bannerImg} alt="Catalina" className="hero-banner" />
        <img src={cataSentada} alt="fotoCataSentada" className="sticker-hero-cataSentada" />
        <img src={cataPolaroid} alt="fotoCataPolaroid" className="sticker-hero-cataPolaroid" />

        <h2>¡Llegaron mis 15!</h2>
      </div>
    </section>
  );
}

export default Hero;