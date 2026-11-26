import './LastTickets.css';

function LastTickets() {
  return (
    <div className="last-tickets">
      <h3 className="last-tickets__title">Последние билеты</h3>
      
      <div className="last-tickets__card">
        <div className="last-tickets__route">
          <span>Санкт-Петербург</span>
          <span>Самара</span>
        </div>
        <div className="last-tickets__price">от 2 500 ₽</div>
      </div>

      <div className="last-tickets__card">
        <div className="last-tickets__route">
          <span>Москва</span>
          <span>Казань</span>
        </div>
        <div className="last-tickets__price">от 3 500 ₽</div>
      </div>

      <div className="last-tickets__card">
        <div className="last-tickets__route">
          <span>Казань</span>
          <span>Нижний Новгород</span>
        </div>
        <div className="last-tickets__price">от 3 800 ₽</div>
      </div>
    </div>
  );
}

export default LastTickets;