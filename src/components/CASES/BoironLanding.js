import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function BoironLanding(props) {
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
                    <img className='boiron-landing_cover' src={require("../../pics/cases-pics/boiron-landing/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать landing page для промо-акции с участием препаратов Оциллококцинум и Гомеострес. На странице необходимо рассказать о препаратах, условиях акции, победителях. Также необходима форма для отправки чеков, участвующих в акции.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Была выстроена визуальная концепция современного дизайна с использованием фирменных деталей препаратов Boiron, удобная навигация упрощает взаимодействие пользователя с сайтом. Рассказали про препараты, аптеки, участвующие в акции, условия участия в розыгрыше. Фото победителей повысят лояльность и доверие к промо-акции.
                                </p>
                            </div>
                        </div>

                        <img className='boiron-landing_pack' src={require("../../pics/cases-pics/boiron-landing/work.png")} alt='Макет' />
                        <img className='boiron-landing_landing' src={require("../../pics/cases-pics/boiron-landing/landing.png")} alt='Макет' />
                        <img className='boiron-landing_mockup' src={require("../../pics/cases-pics/boiron-landing/mockup.png")} alt='Мокап' />

                </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default BoironLanding;