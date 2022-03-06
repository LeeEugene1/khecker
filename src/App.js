import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'
import './index.scss'
import './default.css'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './components/Home'
import Qna from './components/Qna'
import NotFound from './components/NotFound'
// import axios from 'axios'

function App() {

  const user = useSelector(state => state.user.user)

  // const baseURL = 'http://localhost:3000/article/61f81fda54a285b7a9ab847a';
  // fetch(baseURL)
  //   .then(resp => resp.json())
  //   .then(data => displayData(data));
  
  // function displayData(data) {
  //   document.querySelector("#pre").innerHTML = JSON.stringify(data, null, 2);
  // }
  return (
    <BrowserRouter>
		{user ? <Logout/> : <Login/>}
      <Routes>
{/* <div id="pre"></div> */}
		<Route path='/' element={<Home/>} /> 
		<Route path='/qna' element={<Qna/>} /> 
		<Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
