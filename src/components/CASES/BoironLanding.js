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
                        <div className='case-page_image boiron-landing_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image boiron-landing_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать landing page для промо-акции с участием препаратов Оциллококцинум и Гомеострес. На странице необходимо рассказать о препаратах, условиях акции, победителях. Также необходима форма для отправки чеков, участвующих в акции.
                                </p>

                                <h3 className='case-page__title boiron-landing_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Была выстроена визуальная концепция современного дизайна с использованием фирменных деталей препаратов Boiron, удобная навигация упрощает взаимодействие пользователя с сайтом. Рассказали про препараты, аптеки, участвующие в акции, условия участия в розыгрыше. Фото победителей повысят лояльность и доверие к промо-акции.
                                </p>
                            </div>
                        </div>

                        
                        <div className='case-page_image boiron-landing_pack'></div>
                        <div className='case-page_image boiron-landing_landing'></div>

                        <div className='case-page_image boiron-landing_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default BoironLanding;