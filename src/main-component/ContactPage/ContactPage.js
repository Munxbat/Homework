import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';


const ContactPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;





