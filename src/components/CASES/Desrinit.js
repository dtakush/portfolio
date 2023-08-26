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
                        <div className='case-page_image desrinit_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image desrinit_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать два рекламных модуля для медицинской прессы для препарата Дезринит компании Teva. Один из макетов направлен на педиаторов, а второй на специалистов для взрослых.
                                </p>
                                <p className='case-page__subtitle'>
                                Фирменного стиля у препарата нет.
                                </p>
                                <p className='case-page__subtitle'>
                                После создания макета, компания изменила дизайн упаковки.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                           <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title desrinit_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Рецептурный препарат снимает заложенность носа у взрослых и детей при аллергиях, оказывает противовоспалительное и противоаллергическое действие.Рецептурный препарат снимает заложенность носа у взрослых и детей при аллергиях, оказывает простивовоспалительное и противоаллергическое действие.
                                </p> 
                                <p className='case-page__subtitle'>
                                Макет для детей показывает детскую уточку для купания, а ее голова в воде метафорически передает ощущения при заложенном носе.
                                </p> 
                                <p className='case-page__subtitle'>
                                Макет для взрослых напротив показывает нос, который прорвался сквозь неприятные ощущения в пазухах.
                                </p> 
                            </div>
                            <div className='case-page_image desrinit_solution-pic'></div>
                        </div>

                        <div className='case-page_image desrinit_image'></div>

                        <div className='case-page_image desrinit_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Desrinit;