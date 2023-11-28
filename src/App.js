import './App.css';
import { Routes, Route } from 'react-router-dom'
import FormLogin from './routes/FormLogin';
import FormRegister from './routes/FormRegister';
import Navbar from './component/Navbar';
import Payment from './routes/Payment';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import ProtectRoute from './routes/ProtectRoute';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<FormLogin/>}/>
        <Route path='/signup' element={<FormRegister/>}/>
        <Route path='/payment' element={
          <ProtectRoute>
            <Payment/>
          </ProtectRoute>
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;
