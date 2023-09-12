import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ClientsList from '../ClientsList/ClientsList';
import ClientPopup from '../ClientPopup/ClientPopup';


function ClientsPage(props) {
    return (
        <>
            <Header />
            <ClientPopup
            isOpen={props.isOpen}
            onClose={props.onClose} />
            <ClientsList
            onEmptyClientClick={props.onEmptyClientClick} />
            <Footer />
        </>    
    )
}

export default ClientsPage;