import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function BrandIce(props) {
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
                    <img className='brand-ice_cover' src={require("../../pics/cases-pics/brand-ice/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать дизайн ТВ-баннеров, которые будут показываться пользователю во время просмотра фильмов. В левом углу в режиме “картинка в картинке” будет продолжать идти фильм.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                    Показать ключевые атрибуты разных фильмов и сериалов в формате мороженного. Используя платформу MidJourney удалось получить прекрасные образы для макетов, но они все же требовали доработки.
                                </p>
                                <p className='case-page__subtitle'>
                                    Была разработана сетка с основными элементами макетов, в нее уже встраивались креативы.
                                </p>
                            </div>
                        </div>

                        <img className='brand-ice_pack' src={require("../../pics/cases-pics/brand-ice/work.png")} alt='Макет' />
                        <img className='brand-ice_mockup' src={require("../../pics/cases-pics/brand-ice/mockup.png")} alt='Мокап' />

                </div>



            </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default BrandIce;