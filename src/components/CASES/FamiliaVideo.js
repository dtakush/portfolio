import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function FamiliaVideo(props) {
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
                        <div className='case-page_image familia-video_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image familia-video_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать анимацию для летних и зимних макетов Familia из серии “Шопомонстры”. Необходимо привлечь внимание к скидкам.
                                </p>

                                <h3 className='case-page__title familia-video_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Яркое появление ценников привлекает внимание к скидкам.  Изменение масштаба строчек слогана также обращает внимание на себя.
                                </p> 
                            </div>
                        </div>
                        <iframe className='familia-video_video' src="https://www.youtube.com/embed/5ZVT_c1_U_0?si=WnuNiI2OlGZ7pKKr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default FamiliaVideo;