import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function SberStrah(props) {
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


                <div className='case-page_section sber-strahovaniye_section'>
                    <img className='sber-strahovaniye_cover' src={require("../../pics/cases-pics/sber-strahovaniye/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать анимационный html-баннер и сделать ресайзы под ТТ площадок.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Используя инструменты Adobe Animate, была собрана анимация, которая отсылала к отпускной тематике за счет мягкого покачивания листьев пальмы на заднем фоне. Сложность была в том, чтобы уместиться под технические требования площадок, так как у них есть ограничения по весу. Эта проблема была решена за счет пересборки некоторых элементов в векторном формате.
                                </p>
                                <p className='case-page__subtitle'>
                                    Во втором баннере клиент хотел использовать эффект бохе, что сложно селать за счет инструментов Animate. Было предложено решение запустить баннеры на площадках, где допустимо использовать видео-файлы в формате html. Таким образом я смогла реализовать желание клиента, встроив видео-файлы в html-формат.
                                </p>
                            </div>
                        </div>

                        <iframe className='sber-strahovaniye_video' width="900" height="506" src="https://rutube.ru/play/embed/41b0e23c5d10a4bd4afcd4e856ac8c61?skinColor=00897b" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>

                        <iframe className='sber-strahovaniye_video' width="900" height="506" src="https://rutube.ru/play/embed/2ad102c8880eeff84fdfd292b6edd6d2" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default SberStrah;