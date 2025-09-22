import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import FunFact2 from '../../components/FunFact2/FunFact2';
import TeamSection from '../../components/TeamSection/TeamSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'
import Ab from '../../images/about.jpg'

const AboutPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About hclass={'wpo-about-area-s4 section-padding'} Ab={Ab} />
            <TeamSection hclass={'wpo-team-section-s2 section-padding'} SectionTitleShow={true} />
            <ServiceSection hclass={"wpo-service-area-s2"} ServiceBtn={true} />
            <FunFact2 />
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar /> 
        </Fragment>
    )
};
export default AboutPage;
