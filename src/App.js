import { Routes, Route } from 'react-router-dom';
import PieChart from './components/Charts/PieChart';
import { Home } from './page/Home';

function App() {
    
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/chart' element={<PieChart/>}/>
        </Routes>
    );
}

export default App;
