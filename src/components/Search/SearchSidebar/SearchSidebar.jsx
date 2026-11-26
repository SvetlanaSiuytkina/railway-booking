import './SearchSidebar.css';
import iconCoupe from '../../../assets/page2/compartment.png';
import iconReserved from '../../../assets/page2/carriage.png';
import iconSitting from '../../../assets/page2/sedentary.png';
import iconLux from '../../../assets/page2/deluxe.png';
import iconWifi from '../../../assets/page2/wi-fi.png';
import iconExpress from '../../../assets/page2/express.png';
import iconThere from '../../../assets/page2/there.png'; 
import iconBack from '../../../assets/page2/back.png'; 
import iconAdd from '../../../assets/page2/add.png'; 

function SearchSidebar({ filters, onFilterChange }) {
  
  const handleTypeChange = (type) => {
    onFilterChange({
      ...filters,
      types: { ...filters.types, [type]: !filters.types[type] }
    });
  };

  const handleFeatureChange = (feature) => {
    onFilterChange({
      ...filters,
      features: { ...filters.features, [feature]: !filters.features[feature] }
    });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__block">
        <h3 className="sidebar__title">Дата поездки</h3>
        <input 
          type="date" 
          className="sidebar__date" 
          value={filters.date || ''} 
          onChange={(e) => onFilterChange({...filters, date: e.target.value})} 
        />
      </div>

      <div className="sidebar__block">
        <h3 className="sidebar__title">Дата возвращения</h3>
        <input 
          type="date" 
          className="sidebar__date" 
          value={filters.returnDate || ''} 
          onChange={(e) => onFilterChange({...filters, returnDate: e.target.value})} 
        />
      </div>

      <div className="sidebar__block">
        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconCoupe} alt="Купе" className="sidebar__filter-icon" />
            <span>Купе</span>
          </div>
          <input type="checkbox" checked={filters.types.coupe} onChange={() => handleTypeChange('coupe')} />
          <span className="sidebar__slider"></span>
        </label>

        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconReserved} alt="Плацкарт" className="sidebar__filter-icon" />
            <span>Плацкарт</span>
          </div>
          <input type="checkbox" checked={filters.types.reserved} onChange={() => handleTypeChange('reserved')} />
          <span className="sidebar__slider"></span>
        </label>

        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconSitting} alt="Сидячий" className="sidebar__filter-icon" />
            <span>Сидячий</span>
          </div>
          <input type="checkbox" checked={filters.types.sitting} onChange={() => handleTypeChange('sitting')} />
          <span className="sidebar__slider"></span>
        </label>

        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconLux} alt="Люкс" className="sidebar__filter-icon" />
            <span>Люкс</span>
          </div>
          <input type="checkbox" checked={filters.types.lux} onChange={() => handleTypeChange('lux')} />
          <span className="sidebar__slider"></span>
        </label>
      </div>
      
      <div className="sidebar__block">
        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconWifi} alt="Wi-Fi" className="sidebar__filter-icon" />
            <span>Wi-Fi</span>
          </div>
          <input type="checkbox" checked={filters.features.wifi} onChange={() => handleFeatureChange('wifi')} />
          <span className="sidebar__slider"></span>
        </label>

        <label className="sidebar__toggle">
          <div className="sidebar__label-content">
            <img src={iconExpress} alt="Экспресс" className="sidebar__filter-icon" />
            <span>Экспресс</span>
          </div>
          <input type="checkbox" checked={filters.features.express} onChange={() => handleFeatureChange('express')} />
          <span className="sidebar__slider"></span>
        </label>
      </div>

      <div className="sidebar__block sidebar__block--price">
        <h3 className="sidebar__title">Стоимость</h3>
        <div className="sidebar__price-labels">
          <span>от</span>
          <span>до</span>
        </div>
        <div className="sidebar__price-slider">
          <div className="sidebar__price-track"></div>
          <div className="sidebar__price-fill"></div>
          <div className="sidebar__price-thumb sidebar__price-thumb--left"></div>
          <div className="sidebar__price-thumb sidebar__price-thumb--right"></div>
        </div>
        <div className="sidebar__price-values">
          <span>1920</span>
          <span>4500</span>
          <span>7000</span>
        </div>
      </div>

      <div className="sidebar__block sidebar__block--routes">
        <div className="sidebar__routes">
          <button type="button" className="sidebar__route-btn">
            <img src={iconThere} alt="Туда" className="sidebar__route-icon" />
            <span className="sidebar__route-text">Туда</span>
            <img src={iconAdd} alt="Добавить" className="sidebar__route-add" />
          </button>
          
          <button type="button" className="sidebar__route-btn">
            <img src={iconBack} alt="Обратно" className="sidebar__route-icon" />
            <span className="sidebar__route-text">Обратно</span>
            <img src={iconAdd} alt="Добавить" className="sidebar__route-add" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default SearchSidebar;