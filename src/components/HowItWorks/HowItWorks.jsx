import './HowItWorks.css';
import railwayBg from '../../assets/railway.png';
import iconMonitor from '../../assets/computer.svg';
import iconHome from '../../assets/home.png';
import iconGlob from '../../assets/globe.png';

function HowItWorks() {
  return (
    <section
      id="how"
      className="how"
      style={{ '--bg-image': `url(${railwayBg})` }}
    >
      <div className="container">
        <div className="how__header">
          <h2 className="section-title section-title--white">Как это работает</h2>
          <button type="button" className="how__btn">Узнать больше</button>
        </div>

        <div className="how__steps">
          <div className="how__step">
            <div className="how__icon">
              <img src={iconMonitor} alt="" aria-hidden="true" />
            </div>
            <p>Удобный заказ<br />на сайте</p>
          </div>
          <div className="how__step">
            <div className="how__icon">
              <img src={iconHome} alt="" aria-hidden="true" />
            </div>
            <p>Нет необходимости<br />ехать в офис</p>
          </div>
          <div className="how__step">
            <div className="how__icon">
              <img src={iconGlob} alt="" aria-hidden="true" />
            </div>
            <p>Огромный выбор<br />направлений</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;