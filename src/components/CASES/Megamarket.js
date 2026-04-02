import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Megamarket(props) {
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
                    <img className='megamarket_cover' src={require("../../pics/cases-pics/megamarket/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Что было сделано?</h3>
                                <p className='case-page__subtitle'>
                                Разработала концепцию и сценарную структуру промо-ролика для Мегамаркета, выстроив визуальный нарратив вокруг продуктовых категорий и пользовательских выгод. Сгенерировала фото- и видеоматериалы в NanoBanana и Kling и собрала финальный монтаж, превратив AI-ассеты в цельный рекламный ролик.
                                </p>
                            </div>

                        </div>
                        
                        <iframe className='megamarket_video' width="720" height="405" src="https://rutube.ru/play/embed/acf18dee617c0839017710f1144d65ad"  allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Megamarket;