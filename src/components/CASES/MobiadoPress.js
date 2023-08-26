import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MobiadoPress(props) {


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
                        <div className='case-page_image mobiado-press_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image mobiado-press_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль для прессы для бренда эксклюзивных мобильных телефонов Mobiado.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо показать одну из самых эксклюзивных моделей телефонов. Стилистика – милимализм. Брендбука нет.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                           <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title mobiado-press_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было решено показать одну из самых дорогих лимитированных моделей бренда со встроенными швейцарскими часами и отделкой красным деревом. Этот телефон – центр композиции.
                                </p> 
                                <p className='case-page__subtitle'>
                                Минимальное количество цветов не отвлекают от самого телефона, а глубокий черный для фона подчеркивает эксклюзивность и золотые детали в отделке. Тонкий изящный шрифт создают стиль.
                                </p> 
                            </div>
                            <div className='case-page_image mobiado-press_solution-pic'></div>
                        </div>

                        <div className='case-page_image mobiado-press_pack'></div>

                        <div className='case-page_image mobiado-press_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MobiadoPress;