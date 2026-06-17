import Hero from './components/Hero';
import Location from './components/Location';
import Dresscode from './components/Dresscode'; // <- Agregado
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';
import Footer from './components/Footer'; // <- Agregado

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Location />
      <Dresscode /> {/* <- Lo ponemos donde más te guste (antes o después de los regalos) */}
      <Gifts />
      <RSVP />
      <Footer /> {/* <- ¡Siempre al final de todo! */}
    </div>
  );
}

export default App;