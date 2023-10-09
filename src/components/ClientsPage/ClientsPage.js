import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ClientsList from '../ClientsList/ClientsList';
import ClientPopup from '../ClientPopup/ClientPopup';
import ClientsLogos from '../ClientsLogos/ClientsLogos';


function ClientsPage(props) {
    
    return (
        <>
            <Header />
            <ClientPopup
            isOpen={props.isOpen}
            onClose={props.onClose} />
            <ClientsLogos />
            <Footer />
        </>    
    )
}

export default ClientsPage;

/*
            <ClientsList
            onEmptyClientClick={props.onEmptyClientClick} />
            */