import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function SberStrah(props) {
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


                <div className='case-page_section sber-strahovaniye_section'>
                    <img className='sber-strahovaniye_cover' src={require("../../pics/cases-pics/sber-strahovaniye/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать мастер-баннер для функции написания песен в GigaChat. Подготовить ресайзы по ТТ площадок.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Используя брендбук компании, была выбрана стилистика изображений для баннеров. После этого были сгенерированы и обработаны подходящие иллюстрации в стиле анимационных мультфильмов.
                                </p>
                            </div>
                        </div>

                        <iframe className='sber-strahovaniye_video' width="900" height="506" src="https://rutube.ru/play/embed/41b0e23c5d10a4bd4afcd4e856ac8c61?skinColor=00897b" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                        <iframe className='sber-strahovaniye_video' width="900" height="506" src="https://rutube.ru/play/embed/2ad102c8880eeff84fdfd292b6edd6d2" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default SberStrah;