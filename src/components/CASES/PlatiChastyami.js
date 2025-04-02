import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function PlatiChastyami(props) {
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


                <div className='case-page_section plati-chastyami_section'>
                    <img className='plati-chastyami_cover' src={require("../../pics/cases-pics/plati-chastyami/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать серию баннеров с топовыми товарами, которые рассказывают о новом сервисе “Плати частями”.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title plati-chastyami_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Использовать для баннеров фирменную стилистику бренда, интегрировать в нее ходовые товары в крупном виде, которые сразу привлекают внимание. Визуал дополняется лайнами, рассказывающими об основной функции сервиса — оплата частями.
                                </p>
                            </div>
                        </div>

                        <img className='plati-chastyami_pack__status' src={require("../../pics/cases-pics/plati-chastyami/work.png")} alt='Макет' />


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default PlatiChastyami;