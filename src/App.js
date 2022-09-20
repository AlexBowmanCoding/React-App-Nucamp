import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import './App.css';
import Header from './components/Header';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import  {fetchCampsites} from './features/campsites/campsitesSlice'
import { fetchPartners } from "./features/partners/partnersSlice";
import { fetchPromotions } from './features/promotions/promotionsSlice'
import { fetchComments } from './features/comments/commentsSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments())
    }, [dispatch]);

  return (
      <div className='App'>
          <Header />
          <Routes>
              <Route path='/React-App-Nucamp' element={<HomePage />} />
              <Route path='/React-App-Nucamp/contact' element={<ContactPage />} />
              <Route path='/React-App-Nucamp/directory' element={<CampsitesDirectoryPage />} />
              <Route path='/React-App-Nucamp/directory/:campsiteId' element={<CampsiteDetailPage />}/>
              <Route path='/React-App-Nucamp/about'element={<AboutPage/>}/> 
          </Routes>
          <Footer />
      </div>
  );
}

export default App;