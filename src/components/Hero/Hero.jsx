import './Hero.css';
import trainBg from '../../assets/train.png';
import iconCalendar from '../../assets/calendar.svg';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${trainBg})` }}>
      <div className="hero__content">
        <h1 className="hero__title">
          Вся жизнь —<br />
          <span>путешествие!</span>
        </h1>

        <div className="search-form">
          <h2 className="search-form__title">Направление</h2>
          <div className="search-form__row">
            <input
              type="text"
              name="from"
              placeholder="Откуда"
              className="search-form__input"
            />
            <input
              type="text"
              name="to"
              placeholder="Куда"
              className="search-form__input"
            />
          </div>

          <h2 className="search-form__title">Дата</h2>
          <div className="search-form__row">
            <div className="search-form__date-wrapper">
              <input type="date" name="date" className="search-form__input" />
              <img
                src={iconCalendar}
                alt=""
                aria-hidden="true"
                className="search-form__icon"
              />
            </div>
          </div>

          <button type="button" className="search-form__button">
            НАЙТИ БИЛЕТЫ
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;