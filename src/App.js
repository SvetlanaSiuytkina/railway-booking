import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Seats from './pages/Seats/Seats';
import './App.css';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id/seats" element={<Seats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;