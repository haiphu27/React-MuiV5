import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Chip from './pages/chip/chip'
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create' element={<Create/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
