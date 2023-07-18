import React from 'react';
import { NavLink } from 'react-router-dom';


//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WorksCard from '../WorkCard/WorkCard';


function AllWorksPage(props) {

    return (
            <>
                <div className='btn-up' onClick={props.scrollTop}></div>
                <Header />

                <div className='all-work_background-top'></div>

                <div className='all-work-background'>
                    <div className='all-work'>
                        <div className='all-work_menu'>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortAllWorks}>Все работы</NavLink>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortIllustration}>Иллюстрация</NavLink>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortOutdoors}>Outdoors</NavLink>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortPress}>Пресса</NavLink>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortAnimation}>Анимация</NavLink>
                            <NavLink  to='#' className='all-work_menu-link' onClick={props.onSortWeb}>Веб-дизайн</NavLink>
                        </div>

                        <div className='all-work_block'>
                            <div className='all-work_cards'>
                                {props.cards.slice(0).map((item) => {
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