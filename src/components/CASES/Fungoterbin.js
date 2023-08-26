import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Fungoterbin(props) {


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
                        <div className='case-page_image fungoterbin_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image fungoterbin_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль для прессы для препарата Фунготербин Нео компании Stada. Препарат комплексно ухаживает и защищает стопы.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо привлечь внимание к препарату и выделить его среди конкурентов. Фирменного стиля нет.
                                </p>

                                <h3 className='case-page__title fungoterbin_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Создать типографический макет, визуально разделенные на две части – до применения препарата и после. Соответсвенно, до применения кожа стоп зудела и огрубела, а после – Фунготербин смягчил кожу и помог победить грибок. Стилистически макет показывает меловую доску и надписи на ней, это создает дополнительный эффект неприятных прикосновений. В подвале же уже более точно описывается действие препарата.
                                </p>
                            </div>
                        </div>

                        <div className='case-page_image fungoterbin_pack'></div>

                        <div className='case-page_image fungoterbin_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Fungoterbin;