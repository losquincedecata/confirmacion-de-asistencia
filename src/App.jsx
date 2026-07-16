import './App.css';
import { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Location from './components/Location';
import Dresscode from './components/Dresscode';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

import marcoDerecho from './assets/collage/Izq.png';
import marcoIzquierdo from './assets/collage/Der.png';
import temaMusical from './assets/Dua Lipa - Dance The Night.mp3';

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
  const [musicaActiva, setMusicaActiva] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMusica = () => {
    if (musicaActiva) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setMusicaActiva(!musicaActiva);
  };

  const agendarEvento = () => {
    const titulo = "¡Fiesta de 15 de Cata!";
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=20260815T200000/20260815T235900&location=Floxs%20Recepciones`;
    window.open(url, "_blank");
  };

  return (
    <div className="app-container">
      <audio ref={audioRef} src={temaMusical} loop />

      <button className="btn-musica" onClick={toggleMusica}>
        {musicaActiva ? '🔊' : '🔇'}
      </button>

        <Hero />

  <div className="contenedor-stickers-pegajosos">
     <img src={marcoIzquierdo} className="marco-lateral marco-izquierdo" alt="Decoración Izquierda" />
     <img src={marcoDerecho} className="marco-lateral marco-derecho" alt="Decoración Derecha" />
  </div>

      <div className='caja-datos'>
        <EventDetails timeLeft={timeLeft} agendarEvento={agendarEvento} /></div>
      <div className='caja-datos'>
        <Location /></div>
      <div className='caja-datos'>
        <Dresscode />
      </div>
      <div className='caja-datos'>
        <Gifts />
      </div>
      <div className='caja-datos'>
        <RSVP /></div>
      <div className='caja-datos'>
        <Footer /></div>
    </div>
  );
}

export default App;