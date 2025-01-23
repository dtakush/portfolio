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
                <img className='familia-video_cover' src={require("../../pics/cases-pics/familia-video/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать анимацию для летних и зимних макетов Familia из серии “Шопомонстры”. Необходимо привлечь внимание к скидкам.
                                </p> 
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Яркое появление ценников привлекает внимание к скидкам.  Изменение масштаба строчек слогана также обращает внимание на себя.
                                </p> 
                            </div>
                        </div>
                        <iframe className='familia-video_video' width="900" height="506" src="https://rutube.ru/play/embed/43832220dcb7e03b0378ae41cb5ca457" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                        <iframe className='familia-video_video' width="900" height="506" src="https://rutube.ru/play/embed/c02d72e9a11b6ca8862e45382576ad50" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default FamiliaVideo;