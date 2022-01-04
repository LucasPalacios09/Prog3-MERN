// import './App.css';
//import './components/Navbar/Navbar'
// import Navbar from './components/Navbar/Navbar';
// import Appcontext from './context/appcontext';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Users from './components/Users/users'
import NavBar from './components/Navbar/NavBar.jsx'
import UserForm from './components/Users/UserForm';
import MainPage from './components/MainPage/MainPage';
import GameTable from './components/Games/GameTable'

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/vapor/bootstrap.min.css'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="new-user" element={<UserForm />} />
        <Route path="update-user/:id" element={<UserForm />} />
        <Route path="users" element={<Users />} />
        <Route path="game" element={<GameTable />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    // <Appcontext>
    //   <Users></Users>
    //   {/* <Navbar></Navbar>
    //   <Form></Form> */}
    // </Appcontext>

  );
}

export default App;
