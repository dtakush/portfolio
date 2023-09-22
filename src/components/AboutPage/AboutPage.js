import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';
import AboutWork from '../AboutWork/AboutWork';

function AboutPage(props) {

    return (
        <>
            <div className='about-page'>
                <Header />
                <AboutMe />
                <AboutWork
                studyCards={props.studyCards}
                workCards={props.workCards}
                skillsCards={props.skillsCards} />
                <Footer />
            </div>
        </>    
    )
}

export default AboutPage;

