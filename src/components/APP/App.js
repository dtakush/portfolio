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

//CASES
//Illustration
import PauseTeaPackCasePage from '../CASES/PauseTeaPackCasePage';
import StPetOutdoor from '../CASES/StPetOutdoor';
import StikersVolost from '../CASES/StikersVolost';
//Outdoor
import SerdceStolitsy from '../CASES/SerdceStolitsy';
import DomXXII from '../CASES/DomXXII';
import AistResidence from '../CASES/AistResidence';
import Rogozhsky from '../CASES/Rogozhsky';
import Horoshovsky from '../CASES/Horoshovsky';
import DolinaSetun from '../CASES/DolinaSetun';



function App() { 
  //Constants
  const location = useLocation();


  //Scroll Button
  function scrollTop () {
      window.scrollTo ({
          top: 0,
          left: 0,
          behavior: 'smooth',
      })
    }

    //Sort Works
    const [sortedCards, setSortedCards] = React.useState(itemsWorks);
    
    function sortAllWorks () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("all-works");
      link.classList.add('all-work_menu-link_active');

      const result =[];
      itemsWorks.forEach((item) => {
        setSortedCards([]);
        result.push(item);
        setSortedCards(result);
      }) 
    }
    
    function sortIllustration () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("illustration");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsWorks.forEach((item) => {
        if((item.subtitle == 'Иллюстрация')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }

    function sortOutdoors () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("outdoors");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsWorks.forEach((item) => {
        if((item.subtitle == 'Outdoor')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }

    function sortPress () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("press");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsWorks.forEach((item) => {
        if((item.subtitle == 'Пресса')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }

    function sortAnimation () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("animation");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsWorks.forEach((item) => {
        if((item.subtitle == 'Анимация')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }

    function sortWeb () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        if (item.classList == 'all-work_menu-link all-work_menu-link_active') {
          item.classList.remove('all-work_menu-link_active');
        }
      });

      const link = document.getElementById("web");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsWorks.forEach((item) => {
        if((item.subtitle == 'Веб-дизайн')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }


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
          exact path="/clients"
          element={<ClientsPage />}
        />

        <Route
          exact path="/contact"
          element={<ContactPage />}
        />

        <Route
          exact path="/work"
          element={<AllWorksPage
            scrollTop={scrollTop}
            onSortAllWorks={sortAllWorks}
            onSortIllustration={sortIllustration}
            onSortOutdoors={sortOutdoors}
            onSortPress={sortPress}
            onSortAnimation={sortAnimation}
            onSortWeb={sortWeb}
            cards={sortedCards} />}
        />

        <Route
          exact path="/work/pause-tea-pack"
          element={<PauseTeaPackCasePage
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/st-pet"
          element={<StPetOutdoor
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/volost"
          element={<StikersVolost
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/serdce-stolitsy"
          element={<SerdceStolitsy
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/dom-22"
          element={<DomXXII
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/aist-residence"
          element={<AistResidence
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/rogozhsky"
          element={<Rogozhsky
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/horoshovsky"
          element={<Horoshovsky
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/dolina-setun"
          element={<DolinaSetun
            scrollTop={scrollTop} />}
        />
        
      </Routes>
      
    </div>
  );
}

export default App;
//ERROR
//<Route path="*" element={<Error/>}/>

 