import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MedinformVideo(props) {
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
                    <img className='hills-all-legs_cover' src={require("../../pics/cases-pics/hills-all-legs/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать анимационную открытку для клиентов, поздравление с Новым годом 2015.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо использовать логотип и фирменные цвета компании. Каждый из пяти фирменных цветов MedInform символизирует одно из подразделений коммуникационной группы.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Так как 2015 – год Овцы, мы решили использовать этот образ в шутливой манере. Овца катится с горки среди флажков фирменных цветов MedInform как образ того, что клиенты проходят 2014 год вместе с командой агентства. В итоге появляется на финише, где она выпивает шампанского и танцует вместе с подарками, которые оживают и начинают танцевать и прыгать. Это олицетворяет то, что в новом году агентство также будет вместе с клиентами работать над проектами вместе.
                                </p>
                                <p className='case-page__subtitle'>
                                В качестве фоновой музыки использован ритмичный трек Lady Gaga “Christmas Tree”.
                                </p>
                            </div>
                        </div>

                        <iframe className='hills-all-legs_video' width="900" height="506" src="https://rutube.ru/play/embed/291ef6c7b542315a766353e48d65337f" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MedinformVideo;