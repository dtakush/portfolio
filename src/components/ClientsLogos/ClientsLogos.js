import React from 'react';

//Components


function ClientsLogos(props) {
    
    return (
        <>
            <div className='clients-logos'>
                <div className='clients-logos_background-top'></div>

                <div className='clients-logos_background'>
                    <div className='clients-logos-table'>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/sber.png")} alt='Сбер' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/samokat.png")} alt='Самокат' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/citydrive.png")} alt='Ситидрайв' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/baltika.png")} alt='Балтика' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/rosneft.png")} alt='Роснефть' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/donstroy.png")} alt='Донстрой' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/sloboda.png")} alt='Слобода' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/miele.png")} alt='Miele' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_small-logo' src={require("../../pics/logos/brand-ice.png")} alt='BRand Ice' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/alvogen.png")} alt='Alvogen' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/remit.png")} alt='Ремит' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/monarh.png")} alt='Монарх' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/trust.png")} alt='БНА Траст' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/familia.png")} alt='Familia' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/boiron.png")} alt='Boiron' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_small-logo' src={require("../../pics/logos/teva.png")} alt='Teva' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/mobiado.png")} alt='Mobiado' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/alcon.png")} alt='Alcon' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_small-logo' src={require("../../pics/logos/magistrat.png")} alt='Магиcтрат' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/stada.png")} alt='Stada' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/boehringer.png")} alt='Boehringer Ingelheim' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_small-logo' src={require("../../pics/logos/roche.png")} alt='Roche' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_small-logo' src={require("../../pics/logos/novo-nordisk.png")} alt='Novo Nordisk' /></div>
                        <div className='clients-logos_logo-block'><img className='clients-logos_logo' src={require("../../pics/logos/amigo.png")} alt='Amigo' /></div>
                    </div>
                </div>

                <div className='clients-logos_background-bottom'></div>
            </div>
        </>    
    )
}

export default ClientsLogos;