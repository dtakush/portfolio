import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Svoi(props) {
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
                    <img className='svoi_cover' src={require("../../pics/cases-pics/svoi/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать логотип для новой программы лояльности “СВОИ”. Компания позиционирует себя как корпоративное пространство, где можно покупать товары и пользоваться услугами со скидкой до 25%. Программу могут подключить работодатели для своих сотрудников.
                                </p>
                                <p className='case-page__subtitle'>
                                Из фирменного стиля есть начертание слова “СВОИ” и черно-белые фотографии.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Эта программа лояльности, по сути, является закрытым клубом только для сотрудников. Соответственно, необходимо показать, что эта программа включает в себя только близких, “своих” людей.
                                </p> 
                                <p className='case-page__subtitle'>
                                Цветовая гамма должна быть мягкой и ненавязчивой.  Спокойные и чистые оттенки голубого отлично подходят для этого – они олицетворяют стабильность, искренность и постоянство.
                                </p>
                                <p className='case-page__subtitle'>
                                Круг, как символ, тоже поддерживает тему цикличности, то есть постоянство получения скидок. Кроме того, несколько кругов разных оттенков олицетворяют то, что несколько схожих людей вместе внутри этого закрытого клуба.
                                </p>
                            </div>
                        </div>

                        <img className='svoi_pack' src={require("../../pics/cases-pics/svoi/work.png")} alt='Макет' />
                        <img className='svoi_mockup' src={require("../../pics/cases-pics/svoi/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Svoi;