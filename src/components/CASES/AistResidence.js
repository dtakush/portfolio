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
                    <img className='aist-residence_cover' src={require("../../pics/cases-pics/aist-residence/cover.png")} alt='Обложка' />
                        

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для наружной рекламы аппарт-комплекса Aist Residence. Элитный строящийся жилой комплекс на тот момент имел только рендеры. Необходимо использовать фирменные цвета и стилистику из брендбука.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Яркий рендер ЖК привлекает внимание, а песочный и темно-коричневый цвета поддерживают общую стилистику бренда. Силуэт логотипа на заднем плане собирает композицию в единую систему.
                                </p> 
                            </div>
                        </div>

                        <img className='aist-residence_pack' src={require("../../pics/cases-pics/aist-residence/work.png")} alt='Макет' />
                        <img className='aist-residence_mockup' src={require("../../pics/cases-pics/aist-residence/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default AistResidence;