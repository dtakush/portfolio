import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Rogozhsky(props) {


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
                        <div className='case-page_image rogozhsky_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image rogozhsky_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы для Клубного Дома на Рогожском. Нужно подчеркнуть премиальность дома. Необходимо использовать логотип, цвета и фирменный стиль из брендбука.
                                </p>

                                <h3 className='case-page__title rogozhsky_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Мы показали рендер самого дома на благородном синем цвете. Золотой цвет текста и логотипа подчеркивает элитарность.
                                </p> 
                            </div>
                        </div>

                        <div className='case-page_image rogozhsky_pack'></div>

                        <div className='case-page_image rogozhsky_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Rogozhsky;