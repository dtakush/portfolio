import React from 'react';
import { NavLink } from 'react-router-dom';


//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WorksCard from '../WorkCard/WorkCard';


function AllWorksPage(props) {

    return (
            <>
                <Header />

                <div className='all-work_background-top'></div>

                <div className='all-work-background'>
                    <div className='all-work'>
                        <div className='all-work_menu'>
                            <NavLink  to='#' className='all-work_menu-link'>Иллюстрация</NavLink>
                            <NavLink  to='#' className='all-work_menu-link'>Outdoors</NavLink>
                            <NavLink  to='#' className='all-work_menu-link'>Пресса</NavLink>
                            <NavLink  to='#' className='all-work_menu-link'>Анимация</NavLink>
                            <NavLink  to='#' className='all-work_menu-link'>Веб-дизайн</NavLink>
                        </div>

                        <div className='all-work_block'>
                            <div className='all-work_cards'>
                                {props.works.slice(0).map((item) => {
                                    return (
                                        <WorksCard
                                        title={item.title}
                                        subtitle={item.subtitle}
                                        picUrl={item.picUrl}
                                        picLink={item.picLink}
                                        />
                                        )
                                    })}
                            </div>
                        </div>

                    </div>
                </div>

                <div className='all-work_background-bottom'></div>
                <Footer />
            </>
        
    )
}

export default AllWorksPage;