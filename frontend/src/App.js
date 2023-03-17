import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Router>
    <div className='Container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
