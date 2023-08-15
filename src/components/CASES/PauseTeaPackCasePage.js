import React from 'react';
import { useLocation } from 'react-router-dom';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function PauseTeaPackCasePage(props) {


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
                        <div className='case-page_image tea-pack-pause_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image tea-pack-pause_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                    Разработать иллюстрацию для упаковки чая “Пауза”. ЦА – молодые современные люди, которые ведут активный образ жизни, интересуются современным миром, много работают. Для них ценно вечернее время после работы, когда можно расслабиться и выдохнуть.
                                    </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Травы, содержащиеся в чае прорастают среди силуэта большого города, они ставят на паузу все заботы и печали. Сразу понятно, что это чай для вечернего времени наедине с собой или книгой.
                                </p>
                                <p className='case-page__subtitle'>
                                Темный, почти черный основной фон переносит нас в атмосферу ночи, спокойствия и тишины. А молочный цвет растений четко контрастирует на его фоне и выделяет их, как основные ингредиенты. Город здесь тоже важен, но на фоне растений он остается на втором плане.
                                </p>
                                <p className='case-page__subtitle'>
                                Графика простая, но добавление растушевки спреем создает небольшие градиенты, чтобы смягчить переходы и линии.
                                </p>
                                
                            </div>
                            <div className='case-page_image tea-pack-pause_solution-pic'></div>
                        </div>

                        <div className='case-page_image tea-pack-pause_pack'></div>

                        <div className='case-page_image tea-pack-pause_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default PauseTeaPackCasePage;