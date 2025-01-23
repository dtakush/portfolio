import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Horoshovsky(props) {
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
                    <img className='horoshovsky_cover' src={require("../../pics/cases-pics/horoshovsky/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы Жилого Комплекса семейного класса Хорошевский. Нужно сделать акцент на больших кухнях в квартирах и теплых семейных отношениях, используя логотип, цвета и фирменный стиль из брендбука.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Мы использовали фирменный полигональный фон жилого комплекса и яркие плашки, чтобы выделить биллборд на фоне хмурого зимнего неба.
                                </p> 
                            </div>
                        </div>

                        <img className='horoshovsky_pack' src={require("../../pics/cases-pics/horoshovsky/work.png")} alt='Макет' />
                        <img className='horoshovsky_mockup' src={require("../../pics/cases-pics/horoshovsky/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Horoshovsky;