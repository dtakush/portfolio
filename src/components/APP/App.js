import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

//Arrays
import itemsStudy from '../../vendor/array/itemsStudy';
import itemsWork from '../../vendor/array/itemsWork';
import itemsSkills from '../../vendor/array/itemsSkills';
import itemsWorks from '../../vendor/array/itemsWorks';

//Components
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import ClientsPage from '../ClientsPage/ClientsPage';
import AllWorksPage from '../AllWorksPage/AllWorksPage';
import CasePage from '../CasePage/CasePage';


function App() { 



  return (
    <div className="page">

      <Routes>
        <Route
          exact path="/"
          element={<MainPage />}
        />

        <Route
          exact path="/about"
          element={<AboutPage
            studyCards={itemsStudy}
            workCards={itemsWork}
            skillsCards={itemsSkills}
            />}
        />

        <Route
          exact path="/work"
          element={<AllWorksPage
            works={itemsWorks} />}
        />

        <Route
          exact path="/clients"
          element={<ClientsPage />}
        />

        <Route
          exact path="/contact"
          element={<ContactPage />}
        />

        <Route
          exact path="/work/pause-tea-pack"
          element={<CasePage />}
        />

        
      </Routes>
      
    </div>
  );
}

export default App;
//ERROR
//<Route path="*" element={<Error/>}/>

 