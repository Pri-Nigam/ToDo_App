import Header from './components/Header'
import './App.css';
import { BrowserRouter as Router  } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Header/>
      </Router>
    </>
  );
}

export default App;
