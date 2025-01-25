import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Citydrive(props) {
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


                <div className='case-page_section citydrive_section'>
                    <img className='citydrive_cover' src={require("../../pics/cases-pics/citydrive/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать статичные и видео-баннеры для нескольких тем: новый промокод “Удача”, Новый год.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title citydrive_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Использовать яркий фирменный стиль, ассоциации и элементы мемов для привлечения ЦА. Фирменные 3D-элементы были дополнены векторной графикой для лучшей композиции.
                                </p>
                            </div>
                        </div>

                        <img className='citydrive_pack__status' src={require("../../pics/cases-pics/citydrive/work.png")} alt='Макет' />

                        <iframe className='citydrive_video' width="900" height="506" src="https://rutube.ru/play/embed/d227448ab6eaf4fcd239de25b48d93fe" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Citydrive;