import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Rogozhsky(props) {
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
                    <img className='rogozhsky_cover' src={require("../../pics/cases-pics/rogozhsky/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы для Клубного Дома на Рогожском. Нужно подчеркнуть премиальность дома. Необходимо использовать логотип, цвета и фирменный стиль из брендбука.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Мы показали рендер самого дома на благородном синем цвете. Золотой цвет текста и логотипа подчеркивает элитарность.
                                </p> 
                            </div>
                        </div>

                        <img className='rogozhsky_pack' src={require("../../pics/cases-pics/rogozhsky/work.png")} alt='Макет' />
                        <img className='rogozhsky_mockup' src={require("../../pics/cases-pics/rogozhsky/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Rogozhsky;