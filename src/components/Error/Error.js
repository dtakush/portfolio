import React from 'react';
import { NavLink } from 'react-router-dom';

//Components



function Error() {
    return (
        <>
            <div className='error_block'>
                <div className='error'>
                    <h1 className='error_header'>404</h1>
                    <p className='error_text'>Такой страницы нет, но мы ее уже ищем!</p>
                    <p className='error_text'>
                        Все вкусняшки на <NavLink to="/" className='error_link'>Главной странице</NavLink>
                    </p>
                    
                </div>

                <div className='error_image'></div>
            </div>
            

        </>    
    )
}

export default Error;