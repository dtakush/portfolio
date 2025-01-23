import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function HD(props) {
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
                    <img className='hd_cover' src={require("../../pics/cases-pics/hd/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать логотип для консалтинговой компании HD Consulting. Пожелание клиента – минималистично, строго.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Логотип должен говорить о стабильности и стойкости. Основной синий цвет поддерживает эту тему.
                                </p> 
                                <p className='case-page__subtitle'>
                                Четкие вертикальные линии центрального начертания “HD” устойчивы и непоколебимы. Полное название компании закольцовано вокруг “HD” и разделено горизонтальными линиями.
                                </p>
                                <p className='case-page__subtitle'>
                                Кроме того, необходим дополнительный упрощенный вариант для подписей или уменьшенного изображения.
                                </p> 
                            </div>
                        </div>

                        <img className='hd_pack' src={require("../../pics/cases-pics/hd/work.png")} alt='Макет' />
                        <img className='hd_mockup' src={require("../../pics/cases-pics/hd/mockup.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default HD;