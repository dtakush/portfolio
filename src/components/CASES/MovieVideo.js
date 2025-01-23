import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MovieVideo(props) {
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
                    <img className='movie-video_cover' src={require("../../pics/cases-pics/movie-video/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать анимационные фоновые заставки для мероприятия, приуроченного к 25-летию MOVIE и обновлению фирменного стиля. Заставки должны быть забавными и яркими.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Забавные ситуации, которые происходят с основными фирменными иллюстративными персонажами в небольших анимированных перебивках.
                                </p> 
                            </div>
                        </div>
                        <div className='movie-video_video-block'>
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/2d57339867ebc3b036c09e63de656dde" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/6975819c4237c348555b4e21d6388ffb" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>                        
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/59b77811efc25ada66d628c75805aa80" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/b96f0adf5c90a975363cb6fdf51f6e24" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/358c7e6797282649bada96f47eeb08a1" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                            <iframe className='movie-video_video' width="400" height="225" src="https://rutube.ru/play/embed/b6178b3ca5f404e06a12c00684716f58" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        </div>

                        <img className='movie-video_mockup-1' src={require("../../pics/cases-pics/movie-video/photo-1.jpg")} alt='Фото' />
                        <img className='movie-video_mockup-2' src={require("../../pics/cases-pics/movie-video/photo-2.jpg")} alt='Фото' />
                        <img className='movie-video_mockup-3' src={require("../../pics/cases-pics/movie-video/photo-3.jpg")} alt='Фото' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MovieVideo;