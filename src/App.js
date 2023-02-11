import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Button from './components/Buttons/Button';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PrivateRoute from './components/Privetrout/PrivetRout';
import Login from './components/LoginSignup/Login/Login';
import Signup from './components/LoginSignup/Signup/Signup';
import Dashbord from './components/Body/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashbord />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
