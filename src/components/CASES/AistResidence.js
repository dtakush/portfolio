import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function AistResidence(props) {
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
                        <div className='case-page_image aist-residence_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image aist-residence_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы аппарт-комплекса Aist Residence. Элитный строящийся жилой комплекс на тот момент имел только рендеры. Необходимо использовать фирменные цвета и стилистику из брендбука.
                                </p>

                                <h3 className='case-page__title aist-residence_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Яркий рендер ЖК привлекает внимание, а песочный и темно-коричневый цвета поддерживают общую стилистику бренда. Силуэт логотипа на заднем плане собирает композицию в единую систему.
                                </p> 
                            </div>
                        </div>

                        <div className='case-page_image aist-residence_pack'></div>

                        <div className='case-page_image aist-residence_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default AistResidence;