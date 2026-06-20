import './EventDetails.css';
import partyImg from '../assets/icono-fiesta.svg'; // Importás la imagen primero


function EventDetails({ timeLeft, agendarEvento }) {
    // Si timeLeft no existe, retornamos un cargando o simplemente null
    if (!timeLeft) return null;

    return (
        <section className="event-details-container estilo-elegante">
            <h2>¡La fiesta!</h2>
            <img src={partyImg} alt="Dress code" className="party-icon-img" />
            <p>¿Cuándo?</p>
            <p>15 de Agosto de 2026, 20.00hs</p>

            <button onClick={agendarEvento} className="btn-calendario">
                📅 Agendar en mi calendario
            </button>

            <p>Faltan:</p>
            <div className="flip-clock">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">{timeLeft.days ?? '00'}</div>
                    </div>
                    <span className="flip-label">Días</span>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">{timeLeft.hours ?? '00'}</div>
                    </div>
                    <span className="flip-label">Horas</span>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">{timeLeft.minutes ?? '00'}</div>
                    </div>
                    <span className="flip-label">Minutos</span>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">{timeLeft.seconds ?? '00'}</div>
                    </div>
                    <span className="flip-label">Segundos</span>
                </div>
            </div>
        </section>
    );
}

export default EventDetails;