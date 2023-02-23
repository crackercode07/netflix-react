import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import ProtectedRoute from './component/ProtectedRoute';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    <AuthContextProvider>
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' 
        element={
          <ProtectedRoute>
        <Account/>
        </ProtectedRoute>}/>
      </Routes>
    </Router>
    </AuthContextProvider>
    </>
  );
}

export default App;
