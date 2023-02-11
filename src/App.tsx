import { useState } from 'react';
import './App.css';
import './utils/style.css';

import LoginSignup from './components/login/index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <LoginSignup />
    </div>
  )
}

export default App
