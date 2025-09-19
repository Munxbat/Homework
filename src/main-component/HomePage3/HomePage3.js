import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero3 from '../../components/hero3/Hero3';
import AboutS3 from '../../components/AboutSectionS3/AboutSectionS3';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-3'} Logo={Logo} />
            <Hero3 hclass={'wpo-hero-slider wpo-hero-slider-s2'}/>
            <AboutS3 />
            <ServiceSection hclass={"wpo-service-area"} ServiceBtn={true} />
            <ProjectSection hclass={'wpo-project-area'} SectionTitleShow={true} />
            <Testimonial hclass={'wpo-testimonial-area section-padding'} />
            <TeamSection hclass={'wpo-team-section section-padding'} SectionTitleShow={true} />
            <PartnersSection CollClass={'col col-xs-12'} />
            <BlogSection hclass={'wpo-blog-section section-padding'} />
            <CtaSection hclass={'wpo-subscribe-section'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;