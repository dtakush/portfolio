import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function MobiadoOutdoor(props) {


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
                        <div className='case-page_image mobiado-outdoor_cover'></div>

                         <div className='case-page__block'>
                            <div className='case-page_image mobiado-outdoor_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать макет для лайтбокса для ТЦ Времена Года. Необходимо показать эксклюзивность и элитарность марки Mobiado и указать, что этот магазин есть в торговом центре.
                                </p>

                                <h3 className='case-page__title mobiado-outdoor_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Показать самые интересные моделей телефонов, сделанные из золота и украшенные гравировкой ручной работы. Телефон занимает центральное место в композиции, привлекая к себе внимание. Глубокий черный фон подчеркивает и выделяет модель.
                                </p>
                                <p className='case-page__subtitle'>
                                По бокам два логотипа – самого бренда Mobiado и ТЦ Времена Года. Они поддерживают централизованную композицию.\
                                </p> 
                            </div>
                        </div>

                        <div className='case-page_image mobiado-outdoor_image_1'></div>

                        <div className='case-page_image mobiado-outdoor_image_2'></div>

                        <div className='case-page_image mobiado-outdoor_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default MobiadoOutdoor;