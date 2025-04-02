import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function SberStrahovaniye(props) {
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


                <div className='case-page_section sberstrahovaniye_section'>
                    <img className='sberstrahovaniye_cover' src={require("../../pics/cases-pics/sberstrahovaniye/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать концепцию баннера для рекламы услуги “Защита финансов”. Она состоит из защиты средств на картах, при снятии денег в банкомате и при использовании приложения.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title sberstrahovaniye_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Было разработано несколько концепций для отображения визуала. В итоге выбрали идею с зонтом, как символом страховой защиты. Под них расположены иконка приложения СБОЛ, кошелек с картами и фирменная дебетовая карта Сбера. Все элементы были сгенерированы в Midjourney, а дальнейшая сборка макета осуществлялась вручную.
                                </p>
                            </div>
                        </div>

                        <img className='sberstrahovaniye_pack__status' src={require("../../pics/cases-pics/sberstrahovaniye/work.png")} alt='Макет' />


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default SberStrahovaniye;