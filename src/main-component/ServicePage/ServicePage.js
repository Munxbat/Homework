import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'
import { useTranslation } from 'react-i18next';
import ChatSection from '../../components/Messenger/ChatSection';
import Ticker from '../../components/Metal/Ticker';

const ServicePage = () => {
    const { t } = useTranslation();

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={t('PageTitles.service')} pagesub={t('PageTitles.service')} />
            <ServiceSection hclass={"wpo-service-area-s2 section-padding"} ServiceBtn={true} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
            <ChatSection />
            <Ticker />
        </Fragment>
    )
};
export default ServicePage;
