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
                        <div className='case-page_image clean-line_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image clean-line_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль для прессы для геля для душа с ирисом и эфирными маслами для бренда Чистая линия.
                                </p>

                                <h3 className='case-page__title clean-line_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Макет должен быть ярким и запоминающимся, а также передавать настроение.
                                </p>
                                <p className='case-page__subtitle'>
                                Фитотерапия подразумевает наслаждение ароматами трав и цветов, расслабление тела и ума. Именно это и решено было отразить на макете – парящая девушка в потоках воды в окружении ирисов и трав, которые показывают аромат геля для душа.
                                </p>
                            </div>
                        </div>

                        <div className='case-page_image clean-line_pack'></div>

                        <div className='case-page_image clean-line_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default CleanLine;