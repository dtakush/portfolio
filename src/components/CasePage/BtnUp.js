import React from 'react';

//Components


function BtnUp(props) {
    const handlerScrollUp = () => {
        if (document.body.scrollTop > 0) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
        }
      }

    return (
        <>
            <div className='btn-up active' onClick={props.scrollTop}></div>
        </>  
    )
}

export default BtnUp;

/*
function BtnUp(props) {
    window.addEventListener('scroll', function() {
        var scroll = document.querySelector('.btn-up');
        scroll.classList.toggle('active', window.scrollY > 300);    
      })

    return (
        <>
            <div className='btn-up' onClick={props.scrollTop}></div>
        </>  
    )
}

export default BtnUp;

*/