import React from 'react';
import { NavLink } from 'react-router-dom';

//Components


function ClientsList() {
    return (
        <>
            <div className='clients-list_gradient'></div>
            
            <div className='clients-list'>
                <NavLink to='/work/boiron-landing' className='clients-list_text'>Boiron</NavLink>
                <NavLink to='#' className='clients-list_text'>Роснефть</NavLink>
                <NavLink to='/work/remit-video' className='clients-list_text'>Ремит</NavLink>
                <NavLink to='/work/dom-22' className='clients-list_text'>Донстрой</NavLink>
                <NavLink to='#' className='clients-list_text'>БНА “Траст”</NavLink>
                <NavLink to='/work/mayak-video' className='clients-list_text'>Маяк</NavLink>
                <NavLink to='/work/mobiado-outdoor' className='clients-list_text'>Mobiado</NavLink>
                <NavLink to='#' className='clients-list_text'>Roche</NavLink>
                <NavLink to='/work/fungoterbin' className='clients-list_text'>Stada</NavLink>
                <NavLink to='/work/boehringer-ingelheim' className='clients-list_text'>Boehringer Ingelheim</NavLink>
                <NavLink to='/work/novo-nordisk' className='clients-list_text'>Novo Nordisk</NavLink>
                <NavLink to='#' className='clients-list_text'>Amigo</NavLink>
            </div>
        </>    
    )
}

export default ClientsList;
