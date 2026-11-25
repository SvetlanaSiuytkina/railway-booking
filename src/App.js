import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : '/';
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;