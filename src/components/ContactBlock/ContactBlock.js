import React from 'react';

//Components


function ContactBlock() {
    return (
        <>
            <div className='contact-block'>
                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Город</h3>
                    <div className='contact-block_line' style={{width: 243}}></div>
                    <p className='contact-block_text'>Москва</p>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Telegram</h3>
                    <div className='contact-block_line' style={{width: 142}}></div>
                    <a className='contact-block_text' href="https://t.me/dariatakush" target='_blanc'>@dariatakush</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Instagram</h3>
                    <div className='contact-block_line' style={{width: 130}}></div>
                    <a className='contact-block_text' href="https://www.instagram.com/dariatakush/" target='_blanc'>@dariatakush</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Email</h3>
                    <div className='contact-block_line' style={{width: 65}}></div>
                    <a  className='contact-block_text' href="mailto:dashatakush@yandex.ru?subject=Письмо с сайта" target='_blanc'>dashatakush@yandex.ru</a>
                </div>

                <div className='contact-block_table'>
                    <h3 className='contact-block_header'>Behance</h3>
                    <div className='contact-block_line' style={{width: 155}}></div>
                    <a  className='contact-block_text' href="https://www.behance.net/dariatakush" target='_blanc'>/dariatakush</a>
                </div>
            </div>
            
        </>    
    )
}

export default ContactBlock;
