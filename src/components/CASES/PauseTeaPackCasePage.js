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
                        <div className='case-page__cover case-page_image'></div>

                         <div className='case-page__block'>
                            <div className='case-page__task-pic case-page_image'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                    Разработка иллюстрации для бренда чая. У компании уже был логотип, фирменный шрифт и цветовая гамма.
                                    </p>
                                <p className='case-page__subtitle'>
                                    В упаковке нужно передать успокаивающий эффект чая и показать его натуральность.
                                    </p>
                                <p className='case-page__subtitle'>
                                    В то же время, продукт нацелен на молодую аудиторию – упаковка должна быть стильной, необычной, и чтобы она хорошо смотрелась на любой современной кухне.
                                    </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                    Статичная композиция создаст ощущение стабильности, спокойствия.
                                    </p>
                                <p className='case-page__subtitle'>
                                    Используемые цвета – спокойные, по большей части не контрастные, близкие друг к другу.  Но должен быть один или два контрастных цвета, которые помогут направить внимание зрителя. Цвета клиента отлично подходят для этого.
                                    </p>
                                <p className='case-page__subtitle'>
                                    Стилистика графики – минималистичная, мягкая, округлая.
                                    </p>
                            </div>
                            <div className='case-page__solution-pic case-page_image'></div>
                        </div>

                        <div className='case-page__pack case-page_image'></div>

                        <div className='case-page__text case-page__description'>
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

                        <div className='case-page__mockup case-page_image'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default PauseTeaPackCasePage;