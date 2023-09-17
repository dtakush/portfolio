import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Alcon(props) {
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
                        <div className='case-page_image alcon_cover'></div>

                        <div className='case-page__block'>
                            <div className='case-page_image alcon_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать рекламный модуль в прессу бренда однодневных контактных линз Dailies Total 1 компании Alcon.
                                </p>
                                <p className='case-page__subtitle'>
                                Необходимо показать, что эти линзы отличаются высокой увлажненностью и комфортом ношения.
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                           <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title alcon_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было решено показать преимущество линз в сравнении ощущений от них – правая сторона лизны буквально разбрызгивает воду, подчеркивая увлажняющий эффект. В то же время левая сторона больше похожа на разбитое стекло, что сразу ощущается неприятно.
                                </p> 
                                <p className='case-page__subtitle'>
                                Подвал выполнен в фирменном стиле бренда: серебряная полоса перекликается с серебряными элементами на пачке, а бордовый цвет шрифта и печати также поддерживает фирменный оттенок бренда.
                                </p> 
                            </div>
                            <div className='case-page_image alcon_solution-pic'></div>
                        </div>

                        <div className='case-page_image alcon_pack'></div>

                        <div className='case-page_image alcon_mockup'></div>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Alcon;