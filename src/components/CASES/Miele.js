import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Miele(props) {
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
                    <img className='miele_cover' src={require("../../pics/cases-pics/miele/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать дизайн для  рекламных баннеров винных шкафов Miele. Подготовить ресайзы по ТТ площадок.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Используя брендбук компании была создана централизованная композиция, поддерживаемая расположением логотипа. Также была добавлена кнопка “Узнать больше” в стилистике Miele, которая является call-to-action в баннерах РСЯ и GDN.
                                </p>
                            </div>
                        </div>

                        <img className='miele_pack' src={require("../../pics/cases-pics/miele/work.png")} alt='Макет' />
                        <img className='miele_mockup' src={require("../../pics/cases-pics/miele/mockup.png")} alt='Мокап' />

                </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Miele;