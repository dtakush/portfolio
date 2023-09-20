import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function BoehringerIngelheim(props) {
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
                    <img className='boehringer-ingelheim_cover' src={require("../../pics/cases-pics/boehringer-ingelheim/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page_image boehringer-ingelheim_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать корпоративный журнал для российского отделения фармацевтической компании Boehringer Ingelheim. Необходимо разработать структуру, верстку и дизайн на основе фирменного стиля компании, подобрать изображения, провести фотосессию и переработать материалы, предоставленные клиентом.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                           <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title boehringer-ingelheim_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Международная компания специализируется на фармакологии. Она сильно ориентирована на собственных сотрудников, стараясь создать комфортные условия работы. В том числе, команда Boehringer Ingelheim выпускает корпоративный журнал с новостями, результатами и различными статьями 4 раза в год.
                                </p> 
                                <p className='case-page__subtitle'>
                                Так как это был первый номер журнала, в процессе работы концепция менялась и требовалась переработка материалов.
                                </p> 
                            </div>
                            <div className='case-page_image boehringer-ingelheim_solution-pic'></div>
                        </div>

                        <img className='boehringer-ingelheim_pack' src={require("../../pics/cases-pics/boehringer-ingelheim/work.png")} alt='Макет' />
                        <img className='boehringer-ingelheim_mockup' src={require("../../pics/cases-pics/boehringer-ingelheim/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default BoehringerIngelheim;