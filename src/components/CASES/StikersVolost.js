import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function StikersVolost(props) {
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
                    <img className='volost__cover' src={require("../../pics/cases-pics/volost/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='volost__task-pic case-page_image'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать стикерпак для Telegram для привлечения аудитории студентов и молодых активных людей, которые готовы отправиться летом в Карелию, чтобы помогать кольцевать птиц.
                                </p>

                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title volost__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                За основу я взяла образ птиц Крачка и Зарянка и подготовила 6 эскизов стикеров на разные ситуации, встречающиеся в повседневной жизни.
                                </p>
                                <p className='case-page__subtitle'>
                                Была использована техника модульности и фирменные цвета клиента.
                                </p>
                                <p className='case-page__subtitle'>
                                Я постаралась минимальными формами показать эмоцию – это необходимо для маленького формата стикера.
                                </p>
                                
                            </div>
                            <div className='volost__solution-pic case-page_image'></div>
                        </div>

                        <img className='volost__pack' src={require("../../pics/cases-pics/volost/work.png")} alt='Макет' />
                        <img className='volost__mockup' src={require("../../pics/cases-pics/volost/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default StikersVolost;