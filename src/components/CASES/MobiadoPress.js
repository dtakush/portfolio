import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MobiadoPress(props) {
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
                    <img className='mobiado-press_cover' src={require("../../pics/cases-pics/mobiado-press/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль в прессу бренда эксклюзивных мобильных телефонов Mobiado.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо показать одну из самых эксклюзивных моделей телефонов. Стилистика – минимализм. Брендбука нет.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было решено показать одну из самых дорогих лимитированных моделей бренда со встроенными швейцарскими часами и отделкой красным деревом. Этот телефон – центр композиции.
                                </p> 
                                <p className='case-page__subtitle'>
                                Минимальное количество цветов не отвлекает от самого телефона, а глубокий черный для фона подчеркивает эксклюзивность и золотые детали в отделке. Тонкий изящный шрифт создает стиль.
                                </p> 
                            </div>
                        </div>

                        <img className='mobiado-press_pack' src={require("../../pics/cases-pics/mobiado-press/work.png")} alt='Макет' />
                        <img className='mobiado-press_mockup' src={require("../../pics/cases-pics/mobiado-press/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MobiadoPress;