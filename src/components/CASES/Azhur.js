import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Azhur(props) {
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


                <div className='case-page_section azhur_section'>
                    <img className='azhur_cover' src={require("../../pics/cases-pics/azhur/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать лендинг для компании Ажур&Балансир, которые специализируются на ювелирном и часовом деле премиум сегмента.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title azhur_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                В командной работе с клиентом и проджект-менеджером была разработана структура лендинга, Базируясь на ней и фирменном стиле клиента была собрала начальная версия страницы.
                                </p>
                                <p className='case-page__subtitle'>
                                Минималистичный дизайн и крупные макро-фотографии рассказывают об услугах и работах бренда, подчеркивая премиальность их изделий.
                                </p>
                                <p className='case-page__subtitle'>
                                Но лендинг рассказывает еще и об истории и философии бренда. Чтобы акцентировать на этом внимание, мы добавили фирменные эскизы ювелирных изделий на страницу, говоря ою эксклюзивности работ бренда.
                                </p>
                            </div>
                        </div>
                        <img className='azhur__work' src={require("../../pics/cases-pics/azhur/work.png")} alt='Макет' />
                        <img className='azhur__work' src={require("../../pics/cases-pics/azhur/landing.png")} alt='Макет' />
                        <img className='azhur__work' src={require("../../pics/cases-pics/azhur/mockup.png")} alt='Макет' />


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Azhur;