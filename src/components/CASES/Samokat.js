import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Samokat(props) {
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


                <div className='case-page_section samokat_section'>
                    <img className='samokat_cover' src={require("../../pics/cases-pics/samokat/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать иллюстрацию для продвижения новых офферов в приложении СБОЛ. Необходимо изобразить самые распространенные продукты, покупаемые в Самокате.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title samokat_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Были собраны и согласованы референсы. Минималистичный стиль иллюстрации продиктован фирменным стилем Самоката.
                                </p>
                                <p className='case-page__subtitle'>
                                Иллюстрация должны быть не слишком детальными, так как финально в приложении она будет маленького размера.
                                </p>
                            </div>
                        </div>
                        <img className='samokat__work' src={require("../../pics/cases-pics/samokat/refs.png")} alt='Макет' />
                        <img className='samokat__work' src={require("../../pics/cases-pics/samokat/sketch.png")} alt='Макет' />

                        <img className='samokat__work' src={require("../../pics/cases-pics/samokat/work.png")} alt='Макет' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Samokat;