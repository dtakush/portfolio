import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function DomXXII(props) {


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
                        <div className='case-page_image dom-22_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image dom-22_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать серию макетов для наружной рекламы для Жилого Комплекса Дом XXII. Необходимо использовать рендеры, логотип, цвета и стилистику из брендбука клиента.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было решено обыграть номер дома. Рендеры наложены на “x22”, подчеркивая то, что ЖК поможет приумножить статус, безопасность и локацию.
                                </p>
                                <p className='case-page__subtitle'>
                                Яркий черный цвет фона и “дорогие” рендеры подчеркивают премиальность ЖК. Крупные изображения, логотип и шрифт будут хороши видны из проезжающих машин. 
                                </p>
                                
                            </div>
                            <div className='case-page_image dom-22_solution-pic'></div>
                        </div>

                        <div className='case-page_image dom-22_pack__status'></div>
                        <div className='case-page_image dom-22_pack__location'></div>

                        <div className='case-page_image dom-22_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default DomXXII;