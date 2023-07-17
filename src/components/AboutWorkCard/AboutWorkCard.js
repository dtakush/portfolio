import React from 'react';

//Components


function AboutWorkCard(props) {
    const width = props.width;
    
    return (
        <>
            <div className='about-work__table-line'>
                <div className='about-work__table-place'>
                    <p className='about-work__company'>{props.header}</p>
                    <p className='about-work__speciality'>{props.speciality}</p>
                </div>
                <div className='about-work__line' style={{width}}></div>
                <p className='about-work__table-years'>{props.years}</p>
            </div>
        </>    
    )
}

export default AboutWorkCard;