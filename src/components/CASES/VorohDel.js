import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BtnBack from '../CasePage/BtnBack';
import BackgroundTop from '../CasePage/BackgroundTop';
import BackgroundBottom from '../CasePage/BackgroundBottom';
import BtnUp from '../CasePage/BtnUp';


function VorohDel(props) {
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
                <img className='voroh-del_cover' src={require("../../pics/cases-pics/voroh-del/cover.png")} alt='Обложка' />

                        <div className='case-page__block'>
                            <img className='voroh-del_task-pic' src={require("../../pics/cases-pics/voroh-del/task.png")} alt='Макет' />
                            <div className='case-page__text voroh-del__task'>
                                <h3 className='case-page__title'>Задача</h3>
                                <p className='case-page__subtitle'>
                                Создать обложку для подкаста “Ворох дел”. Он состоит из советов молодым людям от 15 до 25 лет. В каждом выпуске психолог Анна Бараева и основательница фонда адаптации сирот Марина Степанова разбирают одну историю, с которой может столкнуться человек в начале самостоятельной жизни. Например: Что делать, если прорвало трубу Куда обращаться, чтобы получить налоговый вычет? Как проверить задолженность по коммунальным платежам?
                                </p>
                            </div>
                        </div>

                        <div className='case-page__block'>
                            <img className='voroh-del_solution-pic' src={require("../../pics/cases-pics/voroh-del/solution.png")} alt='Макет' />
                            <div className='case-page__text voroh-del__task'>
                                <h3 className='case-page__title'>Решение</h3>
                                <p className='case-page__subtitle'>
                                Сейчас актуальна и популярна графика в ретро-стиле, она поможет связать тему молодых людей, которые выходят в мир, и опыта, который им стремятся передать. Иллюстрации должны быть не слишком детальными, так как финально в приложениях будут разные размеры обложки: от очень маленькой, до большой на десктопе.
                                </p>
                                <p className='case-page__subtitle'>
                                Так как заинтересовать зрителя нужно с первого взгляда, цвета должны быть яркими. Кроме того, должен быть необычный сюжет иллюстрации, чтобы заинтересовать и побудить зайти в подкаст.
                                </p>
                                <p className='case-page__subtitle'>
                                Я предложила два варианта:
                                </p>
                                <ul className='case-page__subtitle'>
                                    <li className='case-page__subtitle'>
                                    Буквальное изображения “вороха дел”, в котором увяз человек, а сверху падают дополнительные дела.
                                    </li>
                                    <li className='case-page__subtitle'>
                                    Стилизованные под старую компьютерную игру разные сложность взрослой жизни. Подкаст и плашка “WIN!” наряду с остальными аспектами жизни будут ярче, а значит, давать надежду на решение.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <img className='voroh-del_pack' src={require("../../pics/cases-pics/voroh-del/work.png")} alt='Макет' />
                        <img className='voroh-del_mockup' src={require("../../pics/cases-pics/voroh-del/work-1.png")} alt='Мокап' />

                    </div>



                </div>
        </div>
        <BackgroundBottom />
        <Footer />
        </>    
    )
}

export default VorohDel;