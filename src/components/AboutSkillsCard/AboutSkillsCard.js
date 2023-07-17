import React from 'react';

//Components


function AboutSkillsCard(props) {
    const width = props.percent;

    return (
        <>
            <div className='about-work_load-frame'>
                <div className='about-work_load-line'
                    style={{width}}>
                    <p className='about-work_load-text'>{props.text}</p>
                </div>
            </div>
        </>    
    )
}

export default AboutSkillsCard;