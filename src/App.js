import { useSelector } from 'react-redux';
import './App.css';
import './index.css';
import './default.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { selectUser } from './features/userSlice';
// import axios from 'axios'

function App() {
  const user = useSelector(selectUser)
  const baseURL = 'http://localhost:3000/article/61f81fda54a285b7a9ab847a';
  fetch(baseURL)
    .then(resp => resp.json())
    .then(data => displayData(data));
  
  function displayData(data) {
    document.querySelector("#pre").innerHTML = JSON.stringify(data, null, 2);
  }
  return (
    <div className="App">
<div id="pre"></div>
    {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
