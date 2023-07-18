import React from 'react';
import { NavLink } from 'react-router-dom';

//Components


function BtnBack() {


    return (
        <>
            <NavLink  to='/work' className='case-page_menu-link' id="btnBack">
                <div className='case-page__back-arrow'></div>
                <p className='case-page_menu-text'>Назад</p>
            </NavLink>
        </>    
    )
}

export default BtnBack;