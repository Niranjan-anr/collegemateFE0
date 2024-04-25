
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from './pages/Heading';
import { Mainpage1 } from './pages/mainpage';
import './css/App.css'
function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Heading/>} />
          <Route path="/hi" element={<Mainpage1/>} />
        </Routes>
    </div>
  );
}

export default App;


