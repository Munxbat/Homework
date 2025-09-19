import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import Hero6 from '../../components/hero6/Hero6.js';
import About from '../../components/about/about';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import SkillSection from '../../components/SkillSection/SkillSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import Ab from '../../images/about4.jpg'
import SImg from '../../images/skill2.jpg'
const HomePage6 = () => {
    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-5'} Logo={Logo} />
            <Hero6 hclass={'static-hero-s2'} />
            <FeaturesSection hclass={'wpo-features-area-s3 section-padding'} />
            <About hclass={'wpo-about-area-s5 section-padding'} Ab={Ab} />
            <ServiceSectionS2 hclass={"wpo-service-area-s2"} ServiceBtn={true} />
            <SkillSection hclass={'wpo-skill-section-s2 section-padding'} Akimg={SImg} />
            <ProjectSection hclass={'wpo-project-area-s3'} SectionTitleShow={true} />
            <Testimonial hclass={'wpo-testimonial-area-s3 section-padding'} />
            <TeamSection hclass={'wpo-team-section-s2 section-padding'} SectionTitleShow={true} sliceStart={3} sliceEnd={6} />
            <BlogSection hclass={'wpo-blog-section-s3 section-padding pt-0'} />
            <CtaSection hclass={'wpo-subscribe-section-s2 section-bg'} />
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage6;