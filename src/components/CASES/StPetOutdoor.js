import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function StPetOutdoor(props) {
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
                        <div className='st-pet__cover case-page_image'></div>

                         <div className='case-page__block'>
                            <div className='st-pet__task-pic case-page_image'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать детальную иллюстрацию для сити-формата для сервиса перевозки животных в городе St.Pet. Сервис работает только в Санкт-Петербурге и это необходимо отразить на иллюстрации. Также необходимо адаптировать иллюстрацию для поста и сториз.
                                </p>
                                <p className='case-page__subtitle'>
                                ЦА – мужчина и женщины со средним и высоким доходом, которые ведут активный образ жизни, интересуются современным миром, много перемещаются по городу. Для них ценно время и комфорт животного. Позитивно относятся к рекомендациям инфлюенсеров и друзей.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Теплый персиковый фирменный цвет St.Pet ассоциируется с доверием, радостью.
                                </p>
                                <p className='case-page__subtitle'>
                                Пурпурный цвет означает любовь и привязанность, с которой сотрудники относятся к питомцам, а сине-фиолетовый поможет показать оригинальность и непохожесть проекта. Голубой же покажет безопасность и компетентность организации.
                                </p>
                                <p className='case-page__subtitle'>
                                Сервис нацелен на довольно молодую аудиторию, которая живет активной жизнью, поэтому можно добавить в иллюстрации немного юмора за счет антропоморфности персонажей. Кроме того, хочется показать динамическую композицию, что придаст дополнительный штрих энергичности иллюстрации.
                                </p>
                                
                            </div>
                            <div className='st-pet__solution-pic case-page_image'></div>
                        </div>

                        <div className='st-pet__pack case-page_image'></div>

                        <div className='st-pet__mockup case-page_image'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default StPetOutdoor;