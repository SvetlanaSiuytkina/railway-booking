import './TopSearchForm.css';
import iconPin from '../../../assets/page1/vector.svg'; 

function TopSearchForm() {
  return (
    <div className="top-search-form">
      <div className="top-search-form__fields">

        <div className="top-search-form__group">
          <label>Направление</label>
          <div className="top-search-form__inputs">
            <div className="top-search-form__input-wrapper">
              <input type="text" placeholder="Откуда" />
              <img src={iconPin} alt="Откуда" className="top-search-form__icon" />
            </div>
            <div className="top-search-form__input-wrapper">
              <input type="text" placeholder="Куда" />
              <img src={iconPin} alt="Куда" className="top-search-form__icon" />
            </div>
          </div>
        </div>
        
        <div className="top-search-form__group">
          <label>Дата</label>
          <div className="top-search-form__inputs">
              <div className="top-search-form__input-wrapper">
              <input type="date" placeholder=" " />
            </div>
            <div className="top-search-form__input-wrapper">
              <input type="date" placeholder=" " />
            </div>
          </div>
        </div>
      </div>     
      
      <div className="top-search-form__actions">
        <button type="button" className="top-search-form__btn">НАЙТИ БИЛЕТЫ</button>
      </div>
    </div>
  );
}

export default TopSearchForm;