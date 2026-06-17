import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    // REEMPLAZÁ CON TU FECHA REAL (Ej: '2024-12-15T21:00:00')
    const targetDate = new Date('2026-08-15T20:00:00'); 
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60) 
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000); // Se actualiza cada 1000 milisegundos (1 segundo)
    return () => clearTimeout(timer);
  });

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Cata</h1>
        <p className="hero-subtitle">¡Mis 15 Años!</p>
        <h2>15 de Agosto de 2026, 20.00hs</h2>
        
        <div className="flip-clock">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{timeLeft.days || '00'}</div>
            </div>
            <span className="flip-label">Días</span>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{timeLeft.hours || '00'}</div>
            </div>
            <span className="flip-label">Horas</span>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{timeLeft.minutes || '00'}</div>
            </div>
            <span className="flip-label">Minutos</span>
          </div>
          {/* NUEVA TARJETA PARA LOS SEGUNDOS */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{timeLeft.seconds || '00'}</div>
            </div>
            <span className="flip-label">Segundos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;