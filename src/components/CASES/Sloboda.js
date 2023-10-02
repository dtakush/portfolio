import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function Sloboda(props) {
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
                <img className='sloboda_cover' src={require("../../pics/cases-pics/sloboda/cover.png")} alt='Обложка' />

                         <div className='case-page__block'>
                            <div className='case-page_image sloboda_task-pic'></div>
                            <div className='case-page__text case-page__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Акция проводилась во время пандемии 2020 года, когда во городах России ввели режим самоизоляции. Это был сложный период и таким образом бренд поддерживал людей. Были сняты рекламные ролики, наружная реклама, реклама в соцсетях.
                                </p>
                                <p className='case-page__subtitle'>
                                После завершения необходимо было смонтировать кейс для размещения на <a href="https://www.sostav.ru/publication/dukhopodemnyj-kejs-movie-i-sloboda-kak-jogurt-pomozhet-perezhit-samoizolyatsiyu-43783.html">Sostav</a>.
                                </p>

                                <h3 className='case-page__title sloboda_title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Во время создания ролика люди все еще были на самоизоляции, было принято решения снимать из дома, а потом уже монтировать под видео-конференцию. Я занималась созданием дизайна, монтажом и анимацией ролика.
                                </p>
                            </div>
                        </div>
                        <iframe className='sloboda_video' src="https://www.youtube.com/embed/abbGbutqjwk?si=Z028f9xp7um0cqRq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default Sloboda;