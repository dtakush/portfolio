import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Amigo(props) {
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
                    <img className='amigo_cover' src={require("../../pics/cases-pics/amigo/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать дизайн и анимацию для HTML-баннеров рулонных штор Amigo. Подготовить ресайзы по ТТ площадок.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Используя фирменный стиль Amigo был разработан дизайн баннеров. Синий цвет поддерживает изображение по гамме. Анимация в HTML-баннерах будет привлекать внимание пользователя. Также была добавлена кнопка “Заказывай жалюзи на shop.amigo.ru” является call-to-action в баннерах РСЯ и GDN.
                                </p>
                            </div>
                        </div>
                        <iframe className='amigo_video' width="900" height="506" src="https://rutube.ru/play/embed/8a65f7fdb527b717424403d05857648e" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                        <img className='amigo_pack' src={require("../../pics/cases-pics/amigo/work.png")} alt='Макет' />
                </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Amigo;