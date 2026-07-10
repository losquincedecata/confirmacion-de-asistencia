import './App.css';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import Dresscode from './components/Dresscode';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import cata1 from './assets/collage/cata1.png';
import cata2 from './assets/collage/cata2.png';


// Definimos la función AFUERA del componente para que esté siempre disponible
function calculateTimeLeft() {
  const targetDate = new Date('2026-08-15T20:00:00');
  const now = new Date();
  const difference = targetDate - now;
  let time = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return time;
}

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const agendarEvento = () => {
    const titulo = "¡Fiesta de 15 de Cata!";
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=20260815T200000/20260815T235900&location=Floxs%20Recepciones`;
    window.open(url, "_blank");
  };

  return (
    <div className="app-container">
      <img src={cata2} className="sticker-prueba" />
      <Hero />
      <EventDetails timeLeft={timeLeft} agendarEvento={agendarEvento} />
      <Location />

      <Dresscode />
      <Gifts />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;