import React from 'react';

//Components


function AboutMe() {

    return (
        <>
            <div className='about-me'>
                <div className='about-me_image'></div>
                <div className='about-me_description'>
                    <h3 className='about-me_header'>Кто я?</h3>
                    <p className='about-me_text'>
                    Кто такая Даша Такуш, причем тут собака на главной странице и почему этот текст находится не на HH или SuperJob? 
                    </p>
                    <p className='about-me_text'>
                    1/ За годы работы у меня сложилось такое внушительное портфолио, что при загрузке работ на hh.ru, сервер лег отдохнуть. А я, в отличии от него, решительно настроена поработать, поэтому пришлось кодить собственный сайт. А заодно и вы узнаете, что я умею кодить
                    </p>
                    <p className='about-me_text'>
                    2/ Собака на главной странице – это привет моей собаке Чиззи, которая прокачала мои скиллы в умении прощать и принимать, а также научила находить общий язык и договариваться даже с тем, с кем говорим на разных языках. Все это очень пригодилось в моей профессиональной жизни
                    </p>
                    <p className='about-me_text'>
                    3/ Горящие дедлайны, сжатые сроки, важные задачи, работа с большими и маленькими командами - у кого-то от этого дергается глаз, а для меня это обычный понедельник. Многозадачность, стрессовые условия меня не пугают, а только подстегивают
                    </p>
                    <p className='about-me_text'>
                    Меньше слов, больше картинок! Здесь можно посмотреть, что я умею и познакомиться с моими работами
                    </p>
                </div>
            </div>
            
        </>    
    )
}

export default AboutMe;
