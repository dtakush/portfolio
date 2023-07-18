import React from 'react';


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
                            <a id='all-works' className='all-work_menu-link all-work_menu-link_active' onClick={props.onSortAllWorks}>Все работы</a>
                            <a id='illustration' className='all-work_menu-link' onClick={props.onSortIllustration}>Иллюстрация</a>
                            <a id='outdoors' className='all-work_menu-link' onClick={props.onSortOutdoors}>Outdoors</a>
                            <a id='press' className='all-work_menu-link' onClick={props.onSortPress}>Пресса</a>
                            <a id='animation' className='all-work_menu-link' onClick={props.onSortAnimation}>Анимация</a>
                            <a id='web' className='all-work_menu-link' onClick={props.onSortWeb}>Веб-дизайн</a>
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