import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Desrinit(props) {
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
                <img className='desrinit_cover' src={require("../../pics/cases-pics/desrinit/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать два рекламных модуля в медицинскую прессу для препарата Дезринит компании Teva. Один из макетов направлен на педиаторов, а второй на специалистов для взрослых.
                                </p>
                                <p className='case-page__subtitle'>
                                Фирменного стиля у препарата нет.
                                </p>
                                <p className='case-page__subtitle'>
                                После создания макета, компания изменила дизайн упаковки.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Рецептурный препарат снимает заложенность носа у взрослых и детей при аллергиях, оказывает противовоспалительное и противоаллергическое действие.
                                </p> 
                                <p className='case-page__subtitle'>
                                Макет для детей показывает детскую уточку для купания, а ее голова в воде метафорически передает ощущения при заложенном носе.
                                </p> 
                                <p className='case-page__subtitle'>
                                Макет для взрослых напротив показывает нос, который прорвался сквозь неприятные ощущения в пазухах.
                                </p> 
                            </div>
                        </div>
                        <img className='desrinit_pack' src={require("../../pics/cases-pics/desrinit/work.png")} alt='Макет' />
                        <img className='desrinit_mockup' src={require("../../pics/cases-pics/desrinit/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Desrinit;