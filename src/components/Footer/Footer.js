import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <>
            {currentPath == '/' ?
                (<section className="footer">
                    <div className="footer__container_main">
                        <p className="footer__disclaimer">©Daria Takush 2023</p>
                        <div className="footer__line_main"></div>
                    </div>
                </section>)
            :
                (<section className="footer">
                    <div className="footer__container_small">
                        <p className="footer__disclaimer">©Daria Takush 2023</p>
                        <div className="footer__line_small"></div>
                        <div className='footer__nav'>
                            <NavLink to="/" className='footer__link'>Главная</NavLink>
                            <NavLink to="/contact" className='footer__link'>Контакты</NavLink>
                        </div>
                    </div>
                </section>)
            }

        </>
    )
}

export default Footer;