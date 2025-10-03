import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Services from '../../api/Services';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';
import ContactForm from '../../components/ServiceContact/ServiceContact';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
import Ticker from '../../components/Metal/Ticker';

const ServiceSinglePage = () => {
  const { t } = useTranslation();
  const { slug } = useParams();
  console.log('Slug:', slug); // Debug slug value
  const serviceDetails = Services.find(item => item.slug === slug);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  if (!serviceDetails) {
    return (
      <Fragment>
        <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
        <PageTitle
          pageTitle={t('section.service_single.error_title', 'Service Not Found')}
          pagesub={t('section.service_single.error_message', 'Error')}
        />
        <div className="wpo-service-single-area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="wpo-service-single-wrap">
                  <div className="wpo-service-single-item">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {t('section.service_single.error_title', 'Service Not Found')}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {t('section.service_single.error_message', 'The requested service could not be found.')}
                    </p>
                    <Link
                      to="/"
                      className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                      onClick={ClickHandler}
                    >
                      {t('section.service_single.back_home', 'Back to Home')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer hclass={'wpo-site-footer'} />
        <Scrollbar />
      </Fragment>
    );
  }

  // Ensure capabilities and workProcess are arrays
  const capabilities = Array.isArray(t(`section.service_single.${slug}.capabilities`, { returnObjects: true }))
    ? t(`section.service_single.${slug}.capabilities`, { returnObjects: true })
    : [];
  const workProcess = Array.isArray(t(`section.service_single.${slug}.workProcess`, { returnObjects: true }))
    ? t(`section.service_single.${slug}.workProcess`, { returnObjects: true })
    : [];

  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
      <PageTitle
        pageTitle={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
        pagesub={t(`section.service_single.${slug}.pageSub`, 'Service Single')}
      />
      <div className="wpo-service-single-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="wpo-service-single-wrap">
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-main-img">
                    <img
                      src={serviceDetails.simag}
                      alt={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
                    />
                  </div>
                  <div className="wpo-service-single-title">
                    <h3>{t(`services.${serviceDetails.key}.title`, serviceDetails.key)}</h3>
                  </div>
                  <p>{t(`section.service_single.${slug}.description`, serviceDetails.key)}</p>
                  <div className="row mt-4">
                    {Array.isArray(serviceDetails.galleryImages) && serviceDetails.galleryImages.length > 0 ? (
                      serviceDetails.galleryImages.map((img, index) => (
                        <div className="col-md-6 col-sm-6 col-12" key={index}>
                          <div className="wpo-p-details-img">
                            <img src={img} alt="" />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No gallery images available.</p>
                    )}
                  </div>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>{t('section.service_single.capabilities_title', 'Our Capabilities')}</h3>
                  </div>
                  <ul>
                    {capabilities.length > 0 ? (
                      capabilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{t('section.service_single.error_message', 'Translation not available')}</li>
                    )}
                  </ul>
                </div>
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-title">
                    <h3>{t('section.service_single.approach_title', 'Our Approach')}</h3>
                  </div>
                  <p>{t(`section.service_single.${slug}.approach`, serviceDetails.key)}</p>
                </div>
                <div className="wpo-service-single-item list-widget">
                  <div className="wpo-service-single-title">
                    <h3>{t('section.service_single.work_process_title', 'Our Work Process')}</h3>
                  </div>
                  <ul>
                    {workProcess.length > 0 ? (
                      workProcess.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))
                    ) : (
                      <li>{t('section.service_single.error_message', 'Translation not available')}</li>
                    )}
                  </ul>
                </div>
                <div className="wpo-service-single-item">
                  <div className="wpo-service-single-title">
                    <h3>{t('section.service_single.related_service_title', 'Related Services')}</h3>
                  </div>
                  <div className="wpo-service-area">
                    <div className="row align-items-center">
                      {Services.filter((serv) => serv.slug !== slug)
                        .slice(0, 5)
                        .map((serv, index) => (
                          <div className="col-lg-6 col-md-6 col-12" key={serv.id}>
                            
                            <div className="wpo-service-item">
                              <i>
                                <img
                                  src={serv.image}
                                  alt={t(`services.${serv.key}.title`, serv.key)}
                                />
                              </i>
                              <h2>
                                <Link
                                  to={`/service-single/${serv.slug}`}
                                  onClick={ClickHandler}
                                >
                                  {t(`services.${serv.key}.title`, serv.key)}
                                </Link>
                              </h2>
                              <p>{t(`services.${serv.key}.description`, serv.key)}</p>
                            </div>
                            
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="wpo-service-single-item">
                  <div className="wpo-service-contact-area">
                    <div className="wpo-contact-title">
                      <h2 style={{ color: '#fff' }}>{t('section.service_single.contact_title', "Have project in mind? Let's discuss")}</h2>
                      <p style={{ color: '#fff' }}>{t('section.service_single.contact_subtitle', 'Get in touch with us to see how we can help you with your project')}</p>
                    </div>
                    <div className="wpo-contact-form-area">
                      <ContactForm />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer hclass={'wpo-site-footer-s2'} />
      <Scrollbar />
      <Ticker />
    </Fragment>
  );
};

export default ServiceSinglePage;