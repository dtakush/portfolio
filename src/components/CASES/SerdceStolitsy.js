import React from 'react';
import { useLocation } from 'react-router-dom';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function SerdceStolitsy(props) {


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
                        <div className='case-page_image serdce-stolitsy_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image serdce-stolitsy_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы для ЖК Сердце Столицы. Нужно рассказать о финале продаж квартир, используя фирменный стиль ЖК.
                                </p>

                                <h3 className='case-page__title serdce-stolitsy_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Мы использовали фирменный полигональный фон жилого комплекса и яркие плашки, чтобы выделить биллборд на фоне хмурого зимнего неба.
                                </p> 
                            </div>
                        </div>

                        <div className='case-page_image serdce-stolitsy_pack'></div>

                        <div className='case-page_image serdce-stolitsy_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default SerdceStolitsy;