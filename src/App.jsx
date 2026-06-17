import './App.css';
import Hero from './components/Hero';
import Location from './components/Location';
import Gifts from './components/Gifts';
import RSVP from './components/RSVP';

function App() {
  return (
    <div className="invitacion-container">
      <Hero />
      <Location />
      <Gifts />
      <RSVP />
    </div>
  );
}

export default App;