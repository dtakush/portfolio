import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function CleanLine(props) {
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
                <img className='clean-line_cover' src={require("../../pics/cases-pics/clean-line/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль бренда Чистая линия. Продукт - гель для душа с ирисом и эфирными маслами. Атмосфера должна быть легкой, ненавязчивой, цветущей.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Макет должен быть ярким и запоминающимся, а также передавать настроение.
                                </p>
                                <p className='case-page__subtitle'>
                                Фитотерапия подразумевает наслаждение ароматами трав и цветов, расслабление тела и ума. Именно это и решено было отразить на макете – парящая девушка в потоках воды в окружении ирисов и трав, которые показывают аромат геля для душа.
                                </p>
                            </div>
                        </div>

                        <img className='clean-line_pack' src={require("../../pics/cases-pics/clean-line/work.png")} alt='Макет' />
                        <img className='clean-line_mockup' src={require("../../pics/cases-pics/clean-line/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default CleanLine;