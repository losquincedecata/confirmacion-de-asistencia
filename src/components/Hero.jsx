import { useState, useEffect } from 'react';
import './Hero.css'; 

function Hero() {
  // Asegurate de dejar aquí tu fecha ya configurada
  const targetDate = new Date("2026-08-15T20:00:00").getTime();

  // 1. Agregamos 'minutes' al estado inicial
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Cálculos matemáticos
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      // 2. Nueva fórmula para extraer los minutos restantes
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      // 3. Actualizamos el estado con los minutos
      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container">
     <h1>Catalina</h1>    
    <h2>¡Mis 15 Años!</h2>
    <h2>15 de Agosto de 2026, 20.00hs</h2>
     
      <p className="countdown-text">Faltan:</p>

      <div className="flip-clock">
        <div className="flip-card">
          <span className="number">{timeLeft.days}</span>
          <span className="label">Días</span>
        </div>
        
        <div className="flip-card">
          <span className="number">{timeLeft.hours}</span>
          <span className="label">Horas</span>
        </div>

        {/* 4. Agregamos la nueva tarjeta visual para los minutos */}
        <div className="flip-card">
          <span className="number">{timeLeft.minutes}</span>
          <span className="label">Minutos</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;