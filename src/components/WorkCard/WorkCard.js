import React from 'react';
import { NavLink } from 'react-router-dom';

//Components


function WorksCard(props) {
    
    
    //console.log(url);

    return (
            <>
                <div className='work-card'>
                    <NavLink
                        to={`${props.picLink}`}
                        className='work-card_link'
                        style={{ backgroundImage: `url(${props.picUrl})` }}>
                        
                        <div className='work-card_text'>
                            <h3 className='work-card__title'>{props.title}</h3>
                            <h3 className='work-card__subtitle'>{props.subtitle}</h3>
                        </div>
                        
                    </NavLink>
                </div>
                
            </>
        
    )
}

export default WorksCard;

/*

<a href={`${props.picLink}`} className='work-card'>
                    <img className='work-card_image' src='../../../pics/main.png' />
                    <p className='work-card_header'>{props.header}</p>
                </a>

                */