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
import PauseTeaPackCasePage from '../CASES/PauseTeaPackCasePage';

//CASES



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
      const result =[];
      itemsWorks.forEach((item) => {
        setSortedCards([]);
        result.push(item);
        setSortedCards(result);
      }) 
    }
    
    function sortIllustration () {
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

        
      </Routes>
      
    </div>
  );
}

export default App;
//ERROR
//<Route path="*" element={<Error/>}/>

 