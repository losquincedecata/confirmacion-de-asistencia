import './Dresscode.css';
import dresscodeImg from '../assets/icono-dresscode.svg'; // Importás la imagen primero

function Dresscode() {
  return (
    <section className="dresscode-container">
      <div className="dresscode-content estilo-elegante" >
        <h2> ✨ Dress Code ✨</h2>
        <img src={dresscodeImg} alt="Dress code" className="dresscode-icon-img" />
        <h3>Elegante Sport</h3>
        <p>¡Preparate para brillar y estar súper cómodo/a para bailar toda la noche!</p>
      </div>
    </section>
  );
}

export default Dresscode;