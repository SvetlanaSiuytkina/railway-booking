import './Reviews.css';
import avatarWoman from '../../assets/page1/woman.png';
import avatarMan from '../../assets/page1/man.png';

function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <h2 className="section-title">Отзывы</h2>
        <div className="reviews__list">
          <div className="review">
            <img src={avatarWoman} alt="Екатерина Вальнова" className="review__avatar" />
            <div className="review__content">
              <h3 className="review__name">Екатерина Вальнова</h3>
              <p className="review__text">
                «Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или жд билет, даже если вы заказываете онлайн билет впервые.»
              </p>
            </div>
          </div>

          <div className="review">
            <img src={avatarMan} alt="Евгений Стрыкало" className="review__avatar" />
            <div className="review__content">
              <h3 className="review__name">Евгений Стрыкало</h3>
              <p className="review__text">
                «СМС-сопровождение до посадки. Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.»
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;