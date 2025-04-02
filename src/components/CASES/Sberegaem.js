import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Sberegaem(props) {
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


                <div className='case-page_section sberegaem_section'>
                    <img className='sberegaem_cover' src={require("../../pics/cases-pics/sberegaem/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Разработать уникальную иллюстрацию к лайну “В начале была любовь”. У клиента уже было разработано фирменное начертание слова “любовь”, его можно использовать в макете.
                                </p>
                            </div>

                            <div className='case-page__text case-page__solution'>
                                <h3 className='case-page__title sberegaem_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Использовать hand-drawn стиль иллюстрации, чтобы выразить более близкий к зрителю подход, душевность. Мы предложили несколько подходов к стилистике иллюстрации и композиции. В итоге была выбрана концепция с использованием иконок, которые последовательно показывают жизнь человека, а в начале была любовь.
                                </p>
                            </div>
                        </div>

                        <img className='sberegaem_pack__status' src={require("../../pics/cases-pics/sberegaem/work.png")} alt='Макет' />


                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Sberegaem;