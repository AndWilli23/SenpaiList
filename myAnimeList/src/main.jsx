import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/animes/components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import DetailsAnimes from './pages/animes/components/detailsAnimes/DetailsAnimes.jsx';
import HomeSearch from './pages/animes/components/searchAnimes/HomeSearch.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/topAnimes"} element={<Home/>}/>
      <Route path={"/detailsAnimes/:id"} element={<DetailsAnimes/>}/>
      <Route path={"/searchAnimes"} element={<HomeSearch/>}/>
    </Routes>
   
  </BrowserRouter>,
)
