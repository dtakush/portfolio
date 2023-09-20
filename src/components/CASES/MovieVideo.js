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
                            <div className='case-page_image movie-video_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать анимационные фоновые заставки для мероприятия, приуроченного к 25-летию MOVIE и обновлению фирменного стиля. Заставки должны быть забавными и яркими.
                                </p>

                                <h3 className='case-page__title movie-video_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Забавные ситуации, которые происходят с основными фирменными иллюстративными персонажами в небольших анимированных перебивках.
                                </p> 
                            </div>
                        </div>
                        <div className='movie-video_video-block'>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/m5K9mQy3j5c?si=sEvIb1M8ocn1C2Ns" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/N-05XQGhdI4?si=4j6V4CwTweqYXEbT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/RHaOrZlVB0g?si=KJF_rgRuqm98TXtW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/THgTZHgLEsY?si=RjGBulPJDOrMeubt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/GqljHj7Ltyw?si=fzb7glOSAXEGvPVK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                            <iframe className='movie-video_video' src="https://www.youtube.com/embed/RdBC3kfjvGA?si=cr7q0ITzpxv6lygE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
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