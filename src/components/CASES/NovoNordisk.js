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
                    <img className='novo-nordisk_cover' src={require("../../pics/cases-pics/novo-nordisk/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
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
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
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

                        <img className='novo-nordisk_pack-1' src={require("../../pics/cases-pics/novo-nordisk/work.png")} alt='Макет' />
                        <img className='novo-nordisk_pack-2' src={require("../../pics/cases-pics/novo-nordisk/work-1.png")} alt='Макет' />
                        <img className='novo-nordisk_pack-3' src={require("../../pics/cases-pics/novo-nordisk/work-2.png")} alt='Макет' />
                        <img className='novo-nordisk_mockup' src={require("../../pics/cases-pics/novo-nordisk/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default NovoNordisk;