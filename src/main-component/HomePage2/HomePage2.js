import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero2 from '../../components/hero2/Hero2';
import AboutS2 from '../../components/aboutS2/aboutS2';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import SkillSection from '../../components/SkillSection/SkillSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo.svg'
import SImg from '../../images/skill.jpg'
const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <Hero2 />
            <AboutS2 hclass={'wpo-about-area-s2 section-padding'} />
            <FeaturesSection hclass={'wpo-features-area section-padding pt-0'} />
            <ServiceSection hclass={"wpo-service-area"} ServiceBtn={true} />
            <SkillSection hclass={'wpo-skill-section section-padding'} Akimg={SImg}/>
            <ProjectSection hclass={'wpo-project-area-s2'} SectionTitleShow={true} />
            <Testimonial hclass={'wpo-testimonial-area-s2 section-padding'} />
            <BlogSection hclass={'wpo-blog-section-s2 section-padding'} />
            <CtaSection hclass={'wpo-subscribe-section section-bg'} />
            <Footer hclass={'wpo-site-footer'}  />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;