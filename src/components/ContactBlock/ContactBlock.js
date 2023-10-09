import React from 'react';

//Components


function ContactBlock() {
    return (
        <>
            <div className='contact-block'>
                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Город</h3>
                    <p className='contact-block_text'>Москва</p>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Telegram</h3>
                    <a className='contact-block_text' href="https://t.me/dariatakush" target='_blanc'>@dariatakush</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>WhatsApp</h3>
                    <a className='contact-block_text' href="https://wa.me/79859631151" target='_blanc'>+7 (985) 963-1151</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Instagram</h3>
                    <a className='contact-block_text' href="https://www.instagram.com/dariatakush/" target='_blanc'>@dariatakush</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Email</h3>
                    <a  className='contact-block_text' href="mailto:dashatakush@yandex.ru?subject=Письмо с сайта" target='_blanc'>dashatakush@yandex.ru</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Behance</h3>
                    <a  className='contact-block_text' href="https://www.behance.net/dariatakush" target='_blanc'>/dariatakush</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Dribble</h3>
                    <a  className='contact-block_text' href="https://dribbble.com/DariaTakush" target='_blanc'>/DariaTakush</a>
                </div>
            </div>
            
        </>    
    )
}

export default ContactBlock;
