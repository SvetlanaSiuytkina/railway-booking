import './SearchSteps.css';
import arrowIcon from '../../../assets/page2/str.png'; 

function SearchSteps({ currentStep = 1 }) {
  const steps = [
    { num: 1, label: 'Билеты' },
    { num: 2, label: 'Пассажиры' },
    { num: 3, label: 'Оплата' },
    { num: 4, label: 'Проверка' },
  ];

  return (
    <div className="search-steps">
      {steps.map((step, index) => {
        const isActive = step.num === currentStep;
        const showArrow = index < steps.length - 1 && !isActive;

        return (
          <div key={step.num} className="search-steps__wrapper">
            <div className={`search-steps__item ${isActive ? 'active' : ''}`}>
              <span className="search-steps__num">{step.num}</span>
              <span className="search-steps__label">{step.label}</span>
            </div>
            
            {showArrow && (
              <img src={arrowIcon} alt="Стрелка" className="search-steps__arrow" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SearchSteps;