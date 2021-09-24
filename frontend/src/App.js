import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0.0);

  useEffect(() => {
    fetch('http://localhost:8000/test')
    .then(res => res.json())
    .then(data => {
      setTime(data['time'])
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current Epoch Time is {time}
        </p>
      </header>
    </div>
  );
}

export default App;
