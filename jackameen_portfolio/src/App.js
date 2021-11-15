import './App.css';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ProjectsPage from './pages/ProjectsPage';

import Footer from './components/Footer';


function App() {
  
  return (
    <Router basename="/JackameenPortfolio">
      <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/projects' element={<ProjectsPage/>}></Route>  
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
