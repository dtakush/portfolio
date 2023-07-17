import React from 'react';

//Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ClientsList from '../ClientsList/ClientsList';


function ClientsPage() {
    return (
        <>
            <Header />
            <ClientsList />
            <Footer />
        </>    
    )
}

export default ClientsPage;