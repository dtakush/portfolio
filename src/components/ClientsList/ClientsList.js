import React from 'react';
import { NavLink } from 'react-router-dom';

//Components


function ClientsList({onEmptyClientClick}) {

    return (
        <>  
            <div className='clients-list'>
                <NavLink to='/work/boiron-landing' className='clients-list_text'>Boiron</NavLink>
                <NavLink to='#' className='clients-list_text' onClick={onEmptyClientClick}>Роснефть</NavLink>
                <NavLink to='/work/miele' className='clients-list_text'>Miele</NavLink>
                <NavLink to='/work/remit-video' className='clients-list_text'>Ремит</NavLink>
                <NavLink to='/work/dom-22' className='clients-list_text'>Донстрой</NavLink>
                <NavLink to='/work/dolfin' className='clients-list_text'>Alvogen</NavLink>
                <NavLink to='#' className='clients-list_text' onClick={onEmptyClientClick}>БНА “Траст”</NavLink>
                <NavLink to='/work/familia-video' className='clients-list_text'>Familia</NavLink>
                <NavLink to='/work/desrinit' className='clients-list_text'>Teva</NavLink>
                <NavLink to='/work/mayak-video' className='clients-list_text'>Маяк</NavLink>
                <NavLink to='/work/mobiado-outdoor' className='clients-list_text'>Mobiado</NavLink>
                <NavLink to='/work/novo-nordisk' className='clients-list_text'>Novo Nordisk</NavLink>
                <NavLink to='#' className='clients-list_text' onClick={onEmptyClientClick}>Roche</NavLink>
                <NavLink to='/work/fungoterbin' className='clients-list_text'>Stada</NavLink>
                <NavLink to='/work/boehringer-ingelheim' className='clients-list_text'>Boehringer Ingelheim</NavLink>
                <NavLink to='#' className='clients-list_text' onClick={onEmptyClientClick}>Amigo</NavLink>
            </div>
        </>    
    )
}

export default ClientsList;
