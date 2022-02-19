import './App.css';
// import axios from 'axios'

function App() {
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
    </div>
  );
}

export default App;
