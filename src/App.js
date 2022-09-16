import Board from "./components/board";
import './components/style.css';
import Update from "./pages/update";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App" id='main'>
        <Router>
            <Routes>
                <Route exact path='/' element={<Board />} />
                <Route path='/update' element={<Update/>} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
