import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function RemitVideo(props) {
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
                <img className='remit-video_cover' src={require("../../pics/cases-pics/remit-video/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Рассказать об акции “Поставь лето на репит” – нужно снять ролик, выложить в соцсеть с хештегом #РепитРемит и получить возможность выиграть приз.
                                </p>
                                <p className='case-page__subtitle'>
                                Нужно создать анимированные ролики для сториз и поста. Необходимо использовать фирменные цвета и шрифты Ремит.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Необходимо показать все призы, которые можно получить, участвуя в акции. Кроме того, нужно показать настроение расслабленного лета, этому послужат материалы с фотосессии.
                                </p>
                                <p className='case-page__subtitle'>
                                Фирменный яркий красный цвет Ремит  и анимированные элементы помогут привлечь внимание в череде скроллинга.
                                </p>
                                <p className='case-page__subtitle'>
                                Четкая графика и чистые цвета поддержат стилистику бренда.
                                </p>
                            </div>
                        </div>

                        <iframe className='remit-video_video' width="900" height="506" src="https://rutube.ru/play/embed/51a946d7f3eb29de88a184b4d2f82a5d" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default RemitVideo;