
import AddEmployee from './components/AddEmployee';
import SearchEmployee from './components/SearchEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AddEmployee/>}/>
    <Route path='/search' element={<SearchEmployee/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
