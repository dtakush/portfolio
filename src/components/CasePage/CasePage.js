import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function CasePage() {
    return (
        <>
            <Header />

                <div className='case-page_background-top'></div>

                <div className='case-page-background'>
                    <div className='case-page'>
                        <div className='case-page_menu'>
                            <NavLink  to='#' className='case-page_menu-link'>
                                <img src='' className='case-page__back-arrow' />
                                <p className='case-page_menu-text'>Назад</p>
                            </NavLink>
                        </div>

                        <div className='case-page_block'>
                            
                        </div>

                    </div>
                </div>

                <div className='case-page_background-bottom'></div>
                <Footer />
        </>    
    )
}

export default CasePage;