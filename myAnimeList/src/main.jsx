import {HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';  
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from './pages/animes/components/Home.jsx'
import DetailsAnimes from './pages/animes/components/detailsAnimes/DetailsAnimes.jsx';
import HomeSearch from './pages/animes/components/searchAnimes/HomeSearch.jsx';
import AnimesByGenres from './pages/animes/components/animesByGenres/AnimesByGenres.jsx';
import AllAnimes from './pages/animes/components/showAllAnimes/AllAnimes.jsx';
import AllAnimeSearched from './pages/animes/components/searchAnimes/AllAnimeSearched.jsx';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx'
import NotFound from './layout/NotFound.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"*"} element={<NotFound/>}/>
      <Route path={"/allAnimes"} element={<AllAnimes/>}/>
      <Route path={"/allAnimesSearched"} element={<AllAnimeSearched/>}/>
      <Route path={"/detailsAnimes/:id"} element={<DetailsAnimes/>}/>
      <Route path={"/searchAnimes"} element={<HomeSearch/>}/>
      <Route path={"/animesByGenres/:genre"} element={<AnimesByGenres/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>,
)
