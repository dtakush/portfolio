import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Dolfin(props) {
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
                        <div className='case-page_image dolfin_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image dolfin_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать новый дизайн упаковки средства для промывания носа “Долфин”. Дизайн должен основываться на новом KV и максимально отражать водную тему.
                                </p>

                                <h3 className='case-page__title dolfin_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Частично можно использовать KV, но также необходимо добавить дополнительные элементы: схему использования препарата или устройства, состав, показания к применению и другие технические элементы.
                                </p> 
                                <p className='case-page__subtitle'>
                                Яркий голубой цвет будет поддерживать “водную” тему, а водные всплески и дельфины из воды, которые прыгают с одной стороны пачки на другую создадут цельную композицию.
                                </p>
                            </div>
                        </div>

                        <div className='case-page_image dolfin_pack'></div>

                        <div className='case-page_image dolfin_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Dolfin;