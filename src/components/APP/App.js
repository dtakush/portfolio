import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

//Arrays
import itemsStudy from '../../vendor/array/itemsStudy';
import itemsWork from '../../vendor/array/itemsWork';
import itemsSkills from '../../vendor/array/itemsSkills';
import itemsCases from '../../vendor/array/itemsCases';

//Components
import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';
import ClientsPage from '../ClientsPage/ClientsPage';
import AllWorksPage from '../AllWorksPage/AllWorksPage';
import Error from '../Error/Error';

//CASES
//Illustration
import PauseTeaPackCasePage from '../CASES/PauseTeaPackCasePage';
import StPetOutdoor from '../CASES/StPetOutdoor';
import StikersVolost from '../CASES/StikersVolost';
import VorohDel from '../CASES/VorohDel';
import Samokat from '../CASES/Samokat';
import Sberegaem from '../CASES/Sberegaem';
//Outdoor
import DomXXII from '../CASES/DomXXII';
import Horoshovsky from '../CASES/Horoshovsky';
import DolinaSetun from '../CASES/DolinaSetun';
//Press
import BoehringerIngelheim from '../CASES/BoehringerIngelheim';
import Alcon from '../CASES/Alcon';
//Branding
import Svoi from '../CASES/Svoi';
import MobiadoIphone from '../CASES/MobiadoIphone';
import Dolfin from '../CASES/Dolfin';
import HD from '../CASES/HD';
//Animation
import MovieVideo from '../CASES/MovieVideo';
import Sloboda from '../CASES/Sloboda';
//Digital
import BoironLanding from '../CASES/BoironLanding';
import BrandIce from '../CASES/BrandIce';
import GigaChat from '../CASES/GigaChat';
import Tate from '../CASES/Tate';
import Citydrive from '../CASES/Citydrive';
import PlatiChastyami from '../CASES/PlatiChastyami';
import Megamarket from '../CASES/Megamarket';



function App() { 
  //Constants
  //const location = useLocation();
  //Variables
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);


  //Scroll Button
  function scrollTop () {
      window.scrollTo ({
          top: 0,
          left: 0,
          behavior: 'smooth',
      })
    }

    //Open Popup
    function handleClientClick() {
      setIsPopupOpen(!isPopupOpen);
    }

    //close Popup
    function closePopup() {
      setIsPopupOpen(false);

      document.removeEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closePopup();
        }
        });
    }

    //Sort Works
    const [sortedCards, setSortedCards] = React.useState(itemsCases);
    
    function sortAllWorks () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("all-works");
      link.classList.add('all-work_menu-link_active');

      const result =[];
      itemsCases.forEach((item) => {
        setSortedCards([]);
        result.push(item);
        setSortedCards(result);
      }) 
    }
    
    function sortIllustration () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("illustration");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Иллюстрация')) {
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
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("outdoors");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Outdoor')) {
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
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("press");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Пресса')) {
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
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("animation");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Анимация')) {
          setSortedCards([]);
          result.push(item);
          setSortedCards(result);
        } else if (result.length < 1) {
          setSortedCards([]);
        }
      })
    }

    function sortBranding () {
      const menuLinks = document.querySelectorAll('.all-work_menu-link');
      menuLinks.forEach((item) => {
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("Branding");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Брендинг')) {
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
        item.classList.remove('all-work_menu-link_active');
      });

      const link = document.getElementById("web");
      link.classList.add('all-work_menu-link_active');

      const result = [];
      itemsCases.forEach((item) => {
        if((item.subtitle === 'Digital')) {
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
          element={<ClientsPage
            onClose={closePopup}
            isOpen={isPopupOpen}
            onEmptyClientClick={handleClientClick} />}
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
            onSortBranding={sortBranding}
            onSortWeb={sortWeb}
            cards={sortedCards} />}
        />

        <Route
          exact path="/work/megamarket"
          element={<Megamarket
            scrollTop={scrollTop} />}
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
          exact path="/work/dom-22"
          element={<DomXXII
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

        <Route
          exact path="/work/boehringer-ingelheim"
          element={<BoehringerIngelheim
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/alcon"
          element={<Alcon
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/svoi"
          element={<Svoi
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/mobiado-iphone"
          element={<MobiadoIphone
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/dolfin"
          element={<Dolfin
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/hd"
          element={<HD
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/movie-video"
          element={<MovieVideo
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/boiron-landing"
          element={<BoironLanding
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/sloboda"
          element={<Sloboda
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/brand-ice"
          element={<BrandIce
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/voroh-del"
          element={<VorohDel
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/giga-chat"
          element={<GigaChat
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/tate"
          element={<Tate
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/citydrive"
          element={<Citydrive
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/samokat"
          element={<Samokat
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/sberegaem"
          element={<Sberegaem
            scrollTop={scrollTop} />}
        />

        <Route
          exact path="/work/plati-chastyami"
          element={<PlatiChastyami
            scrollTop={scrollTop} />}
        />

        <Route
          path="*"
          element={<Error />}
        />
        
      </Routes>
      
    </div>
  );
}

export default App;

 