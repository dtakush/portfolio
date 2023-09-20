import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function SerdceStolitsy(props) {
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
                    <img className='serdce-stolitsy_cover' src={require("../../pics/cases-pics/serdce-stolitsy/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page_image serdce-stolitsy_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы ЖК Сердце Столицы. Нужно рассказать о финале продаж квартир, используя фирменный стиль ЖК. Корпуса ЖК относятся к классу “бизнес”, что отражено не только в высоком качестве строительства, но и в эффектной авторской архитектуре.
                                </p>

                                <h3 className='case-page__title serdce-stolitsy_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Мы использовали фирменный полигональный фон жилого комплекса и яркие плашки, чтобы выделить биллборд на фоне хмурого зимнего неба.
                                </p> 
                            </div>
                        </div>

                        <img className='serdce-stolitsy_pack' src={require("../../pics/cases-pics/serdce-stolitsy/work.png")} alt='Макет' />
                        <img className='serdce-stolitsy_mockup' src={require("../../pics/cases-pics/serdce-stolitsy/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default SerdceStolitsy;