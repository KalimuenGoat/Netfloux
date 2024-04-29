import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PagePaul from '../src/pages/PagePaul';
import PageLoik from "../src/pages/PageLoik";
import PageRichard from "../src/pages/PageRichard"; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='pagePaul' element={<PagePaul/>}/>
        <Route path='pageLoik' element={<PageLoik/>}/>
        <Route path='pageRichard' element={<PageRichard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
