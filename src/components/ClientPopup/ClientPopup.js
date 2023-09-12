import React from 'react';

//Components


function ClientPopup({isOpen, onClose}) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
        onClose();
        }
        });

    return (
        <>
            <div className={`client-popup_block ${isOpen ? 'client-popup_opened' : ''}`}  onClick={onClose}>
                <div className='client-popup'>
                    <button className='client-popup_close-button' type="button" onClick={onClose}></button>
                    <p className='client-popup_text'>
                    К сожалению, проекты, которые велись с этим клиентом нельзя показать. Но вы можете посмотреть другие мои работы
                    </p>
                </div>
            </div>
        </>    
    )
}

export default ClientPopup;
