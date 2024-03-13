import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import LandingPage from './pages/Landing';

function App() {

  return (
    <>
       <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/Landing' element={<LandingPage/>}/>
    </Routes>
    </>
  )
}

export default App
