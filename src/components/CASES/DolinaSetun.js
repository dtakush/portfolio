import React from 'react';
import { useLocation } from 'react-router-dom';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function DolinaSetun(props) {


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
                        <div className='case-page_image dolina-setun_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image dolina-setun_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать два макета для наружной рекламы для ЖК Долина Сетунь. Нужно отразить элитность жилого комплекса и то, что продающиеся квартиры – это пентхаусы. Также необходимо намекнуть на специальные цены к Новому Году.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо использовать фотографии ЖК и логотип.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было решено сделать два макета: ночной и дневной. Образ ЖК уже достаточно узнаваем, поэтому можно использовать фото только одной башни. Облака и луна вокруг башни гипертрофированно показывают как высоки небоскребы.
                                </p>
                                <p className='case-page__subtitle'>
                                Золотые оттенки шрифта на ночном макете подчеркивают элитность и премиальность ЖК.
                                </p>
                                
                            </div>
                            <div className='case-page_image dolina-setun_solution-pic'></div>
                        </div>

                        <div className='case-page_image dolina-setun_pack'></div>

                        <div className='case-page_image dolina-setun_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default DolinaSetun;