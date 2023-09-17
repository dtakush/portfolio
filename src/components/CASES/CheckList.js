import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function CheckList(props) {
    props.scrollTop();

    return (
        <>
        <BtnUp
            scrollTop={props.scrollTop} />
        <Header />
        <BackgroundTop />
        <div className='case-page-background'>
            <div className='case-page'>
                <BtnBack />


                <div className='case-page_section'>
                        <div className='case-page_image check-list_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image check-list_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать иллюстрации и сверстать чек-лист по ведению социальной сети. Стилистика: корпоративный стиль MOVIE. Колористическое решение:  маджента, оранжевый, фиолетовый и бирюзовый – фирменный стиль компании.
                                </p>

                                <h3 className='case-page__title check-list_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Иллюстрации в стиле наив с использованием всех ярких фирменных цветов компании поддержат веселый и забавный тон текста.
                                </p>
                                <p className='case-page__subtitle'>
                                Яркие плашки помогают выделить главное.
                                </p>
                            </div>
                        </div>

                        <div className='case-page_image check-list_pack'></div>

                        <div className='case-page_image check-list_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default CheckList;