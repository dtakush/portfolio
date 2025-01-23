import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function GigaChat(props) {
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


                <div className='case-page_section giga-chat_section'>
                    <img className='giga-chat_cover' src={require("../../pics/cases-pics/giga-chat/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать мастер-баннер для функции написания песен в GigaChat. Подготовить ресайзы по ТТ площадок.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title giga-chat_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Используя брендбук компании, была выбрана стилистика изображений для баннеров. После этого были сгенерированы и обработаны подходящие иллюстрации в стиле анимационных мультфильмов.
                                </p>
                            </div>
                        </div>

                        <img className='giga-chat_pack__status' src={require("../../pics/cases-pics/giga-chat/work.png")} alt='Макет' />


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default GigaChat;