import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import AboutS2 from '../../components/aboutS2/aboutS2';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import SkillSection from '../../components/SkillSection/SkillSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import CtaSection from '../../components/CtaSection/CtaSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import SImg from '../../images/skill2.jpg'
import HeroSection from '../../components/HeroSlider/Herosection';
import Ticker from '../../components/Metal/Ticker';
import ChatSection from '../../components/Messenger/ChatSection';


const HomePage = () => {


    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} />
            <HeroSection />
            <Ticker />
            <AboutS2 hclass={'wpo-about-area-s4 section-padding'}/>
            <FeaturesSection hclass={'wpo-features-area-s2 section-padding'} />
            <ServiceSectionS2 hclass={"wpo-service-area-s2"} ServiceBtn={true} />
            <SkillSection hclass={'wpo-skill-section-s2 section-padding'} Akimg={SImg} />
            
            <Testimonial hclass={'wpo-testimonial-area-s3 section-padding'} />
 
            <CtaSection hclass={'wpo-subscribe-section-s2 section-bg'} />
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
            <ChatSection />

        </Fragment>
    )
};
export default HomePage;