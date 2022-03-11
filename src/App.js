import 'normalize.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import 'index.scss'
import 'default.css'
import Home from 'components/Home'
import Qna from 'components/Qna'
import NotFound from 'components/NotFound'
import Access from 'components/Access'
import Menu from 'components/Menu'
// import axios from 'axios'

function App() {
  const user = useSelector(state => state.user)
  // const baseURL = 'http://localhost:3000/article/61f81fda54a285b7a9ab847a';
  // fetch(baseURL)
  //   .then(resp => resp.json())
  //   .then(data => displayData(data));
  
  // function displayData(data) {
  //   document.querySelector("#pre").innerHTML = JSON.stringify(data, null, 2);
  // }
  return (
    <BrowserRouter>
      <Menu user={user}/>
      <Routes>
{/* <div id="pre"></div> */}
        <Route path='/' element={<Home/>} /> 
        <Route path='/access' element={<Access/>} />
        <Route path='/qna' element={<Qna/>} /> 
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
