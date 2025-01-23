import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MayakVideo(props) {
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
                <img className='mayak-video_cover' src={require("../../pics/cases-pics/mayak-video/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                         <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать OLV ролик для ЖК “Маяк”. Необходимо использовать видео, снятое на квадрокоптер, KV и фирменный стиль клиента.
                                </p>
                            </div>

                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                OLV ролики часто проматывают, поэтому необходимо сразу показать логотип.
                                </p>
                                <p className='case-page__subtitle'>
                                Динамичный монтаж и поддерживающая музыка цепляют, кадры сменяются быстро, показывая весь ЖК с его преимуществами. Сменяющиеся анимированные надписи с преимуществами ЖК привлекают внимание. В конце же мы обращаемся к KV бренда, где даем все контакты.
                                </p>
                            </div>
                        </div>
                        <iframe className='mayak-video_video' width="900" height="506" src="https://rutube.ru/play/embed/9edfc9d50f7f0abeaabdbbea6644e4a3" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MayakVideo;