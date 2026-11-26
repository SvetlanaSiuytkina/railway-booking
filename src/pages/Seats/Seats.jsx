import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchSteps from '../../components/Search/SearchSteps/SearchSteps';

function Seats() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const ticket = location.state?.ticket;

  return (
    <div className="seats-page">
      <Header />
      <SearchSteps />
      
      <main className="container" style={{ padding: '40px 0', minHeight: '60vh' }}>
        <h2>Выбор мест</h2>
        <p>Вы выбрали поезд: {ticket ? ticket.trainNumber : `ID: ${id}`}</p>

        <div style={{ padding: '20px', background: '#eee', textAlign: 'center', margin: '20px 0' }}>
          [ Тут будет схема вагона и выбор типа вагона ]
        </div>

        <button 
          onClick={() => navigate('/search')} 
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Назад к поиску
        </button>
      </main>
      
      <Footer />
    </div>
  );
}

export default Seats;