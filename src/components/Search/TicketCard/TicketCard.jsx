import './TicketCard.css';
import iconWifi from '../../../assets/page2/wi-fi.png';
import iconExpr from '../../../assets/page2/express.png';
import iconCoffe from '../../../assets/page2/coffee.png';
import iconTrain from '../../../assets/page2/train.png';

function TicketCard({ ticket, onSelectSeats }) {
  const priceTypes = {
    sitting: 'Сидячий',
    reserved: 'Плацкарт',
    coupe: 'Купе',
    lux: 'Люкс',
  };

  const seatsCount = { sitting: '88', reserved: '52', coupe: '24', lux: '15' };

  return (
    <div className="ticket">
      <div className="ticket__info">
        <div className="ticket__icon-wrapper">
          <img src={iconTrain} alt="Поезд" className="ticket__train-icon" />
        </div>
        <div className="ticket__number">{ticket.trainNumber}</div>
        <div className="ticket__route">
          {ticket.route}
        </div>
      </div>

      <div className="ticket__times">
        <div className="ticket__time-block">
          <span className="ticket__time">{ticket.departureTime}</span>
          <span className="ticket__city">
            {ticket.departureCity}<br />
            <small>{ticket.departureStation}</small>
          </span>
        </div>
        
        <div className="ticket__duration">
          <span>{ticket.duration}</span>
          <div className="ticket__arrow">→</div>
        </div>

        <div className="ticket__time-block">
          <span className="ticket__time">{ticket.arrivalTime}</span>
          <span className="ticket__city">
            {ticket.arrivalCity}<br />
            <small>{ticket.arrivalStation}</small>
          </span>
        </div>
      </div>

      <div className="ticket__prices">
        <div className="ticket__price-list">
          {Object.entries(ticket.prices).map(([type, price]) => (
            <div key={type} className="ticket__price-row">
              <span className="ticket__type">{priceTypes[type]}</span>
              <span className="ticket__seats">{seatsCount[type] || '10'}</span>
              <span className="ticket__price">от {price} ₽</span>
            </div>
          ))}
        </div>
        
        <div className="ticket__features">
          {ticket.features?.wifi && (
            <span title="Wi-Fi">
              <img src={iconWifi} alt="Wi-Fi" className="ticket__feature-icon" />
            </span>
          )}
          {ticket.features?.express && (
            <span title="Экспресс">
              <img src={iconExpr} alt="Экспресс" className="ticket__feature-icon" />
            </span>
          )}
          {ticket.features?.coffee && (
            <span title="Завтрак">
              <img src={iconCoffe} alt="Завтрак" className="ticket__feature-icon" />
            </span>
          )}
        </div>

        <button 
          className="ticket__btn" 
          onClick={() => onSelectSeats(ticket)}
        >
          Выбрать места
        </button>
      </div>
    </div>
  );
}

export default TicketCard;