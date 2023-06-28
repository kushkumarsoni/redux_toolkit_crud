import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import UserCreate from './components/UserCreate';
import ReadUser from './components/ReadUser';
import Update from './components/Update';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='container-fluid'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<ReadUser/>}></Route>
          <Route exact path='/create' element={<UserCreate/>}></Route>
          <Route exact path='/read' element={<ReadUser/>}></Route>
          <Route exact path='/edit/:id' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
