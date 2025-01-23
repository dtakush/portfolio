import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Frautest(props) {
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
                    <img className='frautest_cover' src={require("../../pics/cases-pics/frautest/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать универсальный рекламный модуль для прессы и рекламы в женских уборных в университетах для бренда тестов на беременность Frautest.
                                </p>
                                <p className='case-page__subtitle'>
                                Макет должен быть ориентирован на молодую ЦА 18-25 лет. Необходимо использовать фирменный стиль бренда, но сделать современный макет.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title frautest_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Тема тестов на беременность все еще вызывает смущение, особенно у молодых девушек. Нам необходимо показать, что это такая же норма в жизни женщины, как и чашка кофе. Показать на макете разные виды тестов, которые регулярно проходят молодые девушки: учебные, шутливые и другие. Среди этих тестов есть и Frautest, который необходимо также регулярно проходить.
                                </p>
                            </div>
                        </div>


                        <img className='frautest_pack' src={require("../../pics/cases-pics/frautest/work.png")} alt='Макет' />
                        <img className='frautest_mockup' src={require("../../pics/cases-pics/frautest/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Frautest;