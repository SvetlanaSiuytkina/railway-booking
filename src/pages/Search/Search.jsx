import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TopSearchForm from '../../components/Search/TopSearchForm/TopSearchForm';
import SearchSteps from '../../components/Search/SearchSteps/SearchSteps';
import SearchSidebar from '../../components/Search/SearchSidebar/SearchSidebar';
import TicketCard from '../../components/Search/TicketCard/TicketCard';
import Pagination from '../../components/Pagination/Pagination';
import LastTickets from '../../components/LastTickets/LastTickets';
import SortDropdown from '../../components/Search/SortDropdown/SortDropdown';
import { MOCK_TICKETS } from '../../mocks/tickets';
import trainBg from '../../assets/page2/image.png'; 
import './Search.css';

function Search() {
  const navigate = useNavigate();
  
  const [filters, setFilters] = useState({
    date: '',
    returnDate: '',
    types: { coupe: true, reserved: true, sitting: false, lux: false },
    features: { wifi: false, express: false },
    priceRange: [1920, 7000],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('time');
  const [itemsPerPage, setItemsPerPage] = useState(5); 

  const filteredAndSortedTickets = useMemo(() => {
    let result = [...MOCK_TICKETS];

    result = result.filter(ticket => {
      return Object.keys(ticket.prices).some(type => filters.types[type]);
    });

    result.sort((a, b) => {
      if (sortBy === 'time') {
        return a.departureTime.localeCompare(b.departureTime);
      }
      if (sortBy === 'price') {
        const getMinPrice = (t) => Math.min(...Object.values(t.prices));
        return getMinPrice(a) - getMinPrice(b);
      }
      if (sortBy === 'duration') {
        return a.duration.localeCompare(b.duration);
      }
      return 0;
    });

    return result;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedTickets.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTickets = filteredAndSortedTickets.slice(startIndex, startIndex + itemsPerPage);

  const handleSelectSeats = (ticket) => {
    navigate(`/search/${ticket.id}/seats`, { state: { ticket } });
  };

  return (
    <div className="search-page">
      
      <div 
        className="search-page__top" 
        style={{ backgroundImage: `url(${trainBg})` }}
      >
        <Header />
        <div className="container search-page__form-wrapper">
          <TopSearchForm />
        </div>
      </div>

      <div className="search-page__steps-wrapper">
        <SearchSteps currentStep={1} />
      </div>

      <main className="search-page__main container">
        <div className="search-page__content">
          <div className="search-page__left-col">
            <SearchSidebar filters={filters} onFilterChange={setFilters} />
            <LastTickets />
          </div>

          <div className="search-page__results">
            <div className="search-page__results-header">
              <span className="search-page__found">найдено {filteredAndSortedTickets.length}</span>
              
              <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
  
              <div className="search-page__show">
                <span className="search-page__show-label">показывать по:</span>
                {[5, 10, 20].map(num => (
                  <button
                    key={num}
                    className={`search-page__show-btn ${itemsPerPage === num ? 'active' : ''}`}
                    onClick={() => {
                      setItemsPerPage(num);
                      setCurrentPage(1);
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="tickets-list">
              {currentTickets.length > 0 ? (
                currentTickets.map(ticket => (
                  <TicketCard 
                    key={ticket.id} 
                    ticket={ticket} 
                    onSelectSeats={handleSelectSeats} 
                  />
                ))
              ) : (
                <p>По вашему запросу ничего не найдено. Попробуйте изменить фильтры.</p>
              )}
            </div>

            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Search;