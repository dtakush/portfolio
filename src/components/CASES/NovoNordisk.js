import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function NovoNordisk(props) {
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
                        <div className='case-page_image novo-nordisk_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image novo-nordisk_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать серию макетов о борьбе с лишним весом с Надеждой Ангарской.
                                </p>
                                <p className='case-page__subtitle'>
                                Причины ожирения бывают разными и не всегда человек сам может с ними справиться. Компания Novo Nordisk занимается изучением ожирения и причин его возникновения.
                                </p>
                                <p className='case-page__subtitle'>
                                Цель макета – привлечь людей на сайт ЛишнийВесНет.рф, чтобы пройти скрининг и узнать что именно мешает похудеть.
                                </p>

                                <h3 className='case-page__title novo-nordisk_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Фирменный синий цвет фона контрастирует с образами Надежды Ангарской, что выделяет ее.
                                </p>
                                <p className='case-page__subtitle'>
                                Один из фирменных элементов компании – линейная графика. Ее же было решено использовать в макете, чтобы выделить QR-код и связать его с героиней.
                                </p>
                                <p className='case-page__subtitle'>
                                Крупный слоган привлекает внимание и перекликается с реакцией героини на этот вопрос.
                                </p>
                                
                            </div>
                        </div>

                        
                        <div className='case-page_image novo-nordisk_pack-1'></div>
                        <div className='case-page_image novo-nordisk_pack-2'></div>
                        <div className='case-page_image novo-nordisk_pack-3'></div>

                        <div className='case-page_image novo-nordisk_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default NovoNordisk;