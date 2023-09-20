import React from 'react';
import { useLocation } from 'react-router-dom';


function Illustration() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {currentPath === '/' ?
                (<div className='illustration'></div>)
            :
                (<div className='illustration illustration__small'></div>)
            }

            
        </>    
    )
}

export default Illustration;