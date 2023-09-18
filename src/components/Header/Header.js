import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//import { useMediaQuery } from "react-responsive";

import logo from '../../pics/LOGO.svg';

function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    /*const [isMobile, setIsMobile] = React.useState(false);
    const [isMenuPopupOpen, setIsMenuPopupOpen] = React.useState(false);

    //Открытие попапа аватара
    function handleMenuClick() {
        setIsMenuPopupOpen(!isMenuPopupOpen);
        }
        
    function closePopup() {
        setIsMenuPopupOpen(false);
        }
    
    //Отслеживание размера окна
    function catchWindowSize () {
        if (window.innerWidth < 800) {
            setIsMobile(true);
        }
        };

    catchWindowSize();*/

    return (
            <>
                {currentPath !== '/' ?
                    (<header className="header header_row">
                        <NavLink to="/" className="header_logo"><img className="header__image" src={logo}/></NavLink>

                        <div className="header__links-small">
                            <NavLink to="/about" className="header__link header__link-small">Кто я?</NavLink>
                            <NavLink to="/work" className="header__link header__link-small">Работы.</NavLink>
                            <NavLink to="/clients" className="header__link header__link-small">С кем работала?</NavLink>
                            <NavLink to="/contact" className="header__link header__link-small">Контакты.</NavLink>
                        </div>
                    </header>)
                :
                    (<header className="header header_column">
                        <NavLink to="/" className="header_logo"><img className="header__image" src={logo}/></NavLink>

                        <div className="header__links-main">
                            <NavLink to="/about" className="header__link header__link-main">Кто я?</NavLink>
                            <NavLink to="/work" className="header__link header__link-main">Работы.</NavLink>
                            <NavLink to="/clients" className="header__link header__link-main">С кем работала?</NavLink>
                            <NavLink to="/contact" className="header__link header__link-main">Контакты.</NavLink>
                        </div>
                        
                    </header>)
                }
            </>
        
    )
}

export default Header;

/*<>
                            {isMobile ?
                            <>
                                <button
                                className="header__nav-button"
                                type="button"
                                onClick={handleMenuClick} />
                                <NavPopup
                                isOpen={isMenuPopupOpen}
                                onClose={closePopup} />
                            </>
                            :
                            <div className="header__links-main">
                                <NavLink to="/about" className="header__link header__link-main">Кто я?</NavLink>
                                <NavLink to="/work" className="header__link header__link-main">Работы.</NavLink>
                                <NavLink to="/clients" className="header__link header__link-main">С кем работала?</NavLink>
                                <NavLink to="/contact" className="header__link header__link-main">Контакты.</NavLink>
                            </div>
                            }
                        </>
*/