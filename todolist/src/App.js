import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Routes, Route } from "react-router-dom";
import UpdateData from './UpdateData';
import GetData from './GetData';
import CreateData from './CreateData';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetData/>}></Route>
        <Route path='/Update/:_id' element={<UpdateData/>}></Route>
        <Route path='/Create' element={<CreateData/>}></Route>
      </Routes>
    </BrowserRouter>
    // <CreateData/>
  );
}

export default App;
