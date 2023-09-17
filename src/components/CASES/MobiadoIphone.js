import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MobiadoIphone(props) {
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
                        <div className='case-page_image mobiado-iphone_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image mobiado-iphone_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Бренд Mobiado производит эксклюзивные модели телефонов собственной марки из красного дерева, золота или платины. Часто используется гравировка. Кроме того, они создают уникальные панели для iPhone.
                                </p>
                                <p className='case-page__subtitle'>
                                Основная задача – создать серию дизайнов задней панели iPhone в стиле художников.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                           <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title mobiado-iphone_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Использовать картины художников напрямую затратно, поэтому было решено взять стилистику картин разных художников разных времен и создать паттерны на их основе, передающие энергетику.
                                </p> 
                                <p className='case-page__subtitle'>
                                Выбор пал на известнейших творцов – Василий Кандинский, Мауриц Корнелиус Эшер и Энди Уорхол. Каждый из них создал свой собственный уникальный стиль работ – значит он будет узнаваем.
                                </p>
                            </div>
                            <div className='case-page_image mobiado-iphone_solution-pic'></div>
                        </div>

                        <div className='case-page_image mobiado-iphone_pack'></div>


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MobiadoIphone;