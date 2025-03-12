import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/animes/components/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import DetailsAnimes from './pages/animes/components/detailsAnimes/DetailsAnimes.jsx';
import HomeSearch from './pages/animes/components/searchAnimes/HomeSearch.jsx';
import AnimesByGenres from './pages/animes/components/animesByGenres/AnimesByGenres.jsx';
import DefaultHome from './pages/home/DefaultHome.jsx';
import AllAnimes from './pages/animes/components/showAllAnimes/AllAnimes.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<DefaultHome/>}/>
      <Route path={"/topAnimes"} element={<Home/>}/>
      <Route path={"/allAnimes"} element={<AllAnimes/>}/>
      <Route path={"/detailsAnimes/:id"} element={<DetailsAnimes/>}/>
      <Route path={"/searchAnimes"} element={<HomeSearch/>}/>
      <Route path={"/animesByGenres/:genre"} element={<AnimesByGenres/>}/>
    </Routes>
   
  </BrowserRouter>,
)
