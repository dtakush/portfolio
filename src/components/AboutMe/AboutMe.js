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
                    Кто же такая Даша Такуш, причем тут собака на главной странице и почему этот текст находится не на HH или SuperJob? Потому что:
                    </p>
                    <p className='about-me_text'>
                    1/ Мой опыт работы настолько огромен, что сервер HH лег, когда я выложила туда свои работы. Пришлось кодить свой собственный сайт
                    </p>
                    <p className='about-me_text'>
                    2/ Любопытные факты или причем тут “сырочек”, “giggle” и шавасана? – время идет, интересы меняются, постоянное развитие в и вне работы создаёт work-life balance. Хочу передать тут привет и сказать “спасибо” моей собаке Чиззи, за то, что научила меня быть добрее и терпеливее, мистеру Поттеру за новые знания и открытия в английском языке, а йоге за минуты покоя и умиротворения
                    </p>
                    <p className='about-me_text'>
                    3/ Мои Soft Skills за 9 лет работы или как не сойти с ума в рекламном агенстве? Горящие дедлайны, краткие сроки, важные задачи, работа с командой одновременно в 10 человек – легко, это пройденные этапы, которые теперь являются для меня бытовыми и только разгоняют адреналин
                    </p>
                    <p className='about-me_text'>
                    А теперь разберем конкретнее на примерах что я умею и где успела оставить свой след:
                    </p>
                </div>
            </div>
            
        </>    
    )
}

export default AboutMe;
