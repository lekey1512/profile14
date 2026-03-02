import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import ModelProfile from './pages/ModelProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/profile" element={<ModelProfile />} />
    </Routes>
  );
}

export default App;
