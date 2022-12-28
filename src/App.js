import { useContext } from 'react';
import './App.css';
import Login from './components/pages/Login/Login';
import Register from './components/pages/register/Register';
import Home from '../src/components/pages/Home'
import Topbar from './components/topbar/Topbar';
import Write from './components/pages/write/Write';
import Settings from './components/pages/setting/Settings';
import Single from './components/pages/single/Single'
import {
	BrowserRouter as Router,
	Routes,
	Route,

} from 'react-router-dom';
import { Context } from './context/Context';

function App() {

  const {user}=useContext(Context)
  return (
    <div className="App">
      <Topbar />
    
       <Router>
        <Routes>
        <Route exact path='/home' element={user ? <Home /> : <Login />} />
        <Route exact path='/register' element={user ? <Home /> : <Register/>} />
        <Route exact path='/' element={user ? <Home/>: <Login />} />
        <Route exact path='/write' element={user  ?<Write/>: <Register />} />
        <Route exact path='/setting' element={user ? <Settings/>: <Register />} />
        <Route exact path='/post/:postId' element={<Single />} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
