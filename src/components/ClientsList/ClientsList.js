import React from 'react';
import { NavLink } from 'react-router-dom';

//Components


function ClientsList() {
    return (
        <>
            <div className='clients-list_gradient'></div>
            
            <div className='clients-list'>
                <NavLink to='#' className='clients-list_text'>БНА “Траст”</NavLink>
                <NavLink to='#' className='clients-list_text'>Boiron</NavLink>
                <NavLink to='#' className='clients-list_text'>Роснефть</NavLink>
                <NavLink to='#' className='clients-list_text'>Ремит</NavLink>
                <NavLink to='#' className='clients-list_text'>Донстрой</NavLink>
                <NavLink to='#' className='clients-list_text'>Старость в радость</NavLink>
                <NavLink to='#' className='clients-list_text'>Маяк</NavLink>
                <NavLink to='#' className='clients-list_text'>Mobiado</NavLink>
                <NavLink to='#' className='clients-list_text'>Roche</NavLink>
                <NavLink to='#' className='clients-list_text'>Stada</NavLink>
                <NavLink to='#' className='clients-list_text'>Boeringer Ingelheim</NavLink>
                <NavLink to='#' className='clients-list_text'>Nova Nordisk</NavLink>
                <NavLink to='#' className='clients-list_text'>Amigo</NavLink>
            </div>
        </>    
    )
}

export default ClientsList;
