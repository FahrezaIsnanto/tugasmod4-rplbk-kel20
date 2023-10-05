import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import State from '../src/pages/learn-useState/index';


function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/use-state">Genap Kel 20</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<State />}></Route>
        </Routes>
      </Router>
    </>

  )
}

export default App
