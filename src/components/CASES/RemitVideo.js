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
                        <div className='case-page_image remit-video_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image remit-video_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Рассказать об акции “Поставь лето на репит” – нужно снять ролик, выложить в соцсеть с хештегом #РепитРемит и получить возможность выиграть приз.
                                </p>
                                <p className='case-page__subtitle'>
                                Нужно создать анимированные ролики для сториз и поста. Необходимо использовать фирменные цвета и шрифты Ремит.
                                </p>

                                <h3 className='case-page__title remit-video_title'>Решение</h3>
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
                        <iframe className='remit-video_video' src="https://www.youtube.com/embed/5vCz9OhLRfE?si=h8Poh8O1S5TgV1tQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default RemitVideo;