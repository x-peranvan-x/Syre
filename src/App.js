
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Learn from './components/pages/Learn';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Profile from './components/pages/Profile';

function App() {
  return (

    <Router>
    <div className="App">
        <div>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/learn' element={<Learn/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route></Route>
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;
