import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../images/logo.svg';
import Services from '../../api/Services';
import Products from '../../api/Products';


const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const Footer = (props) => {
    const { t } = useTranslation();

    const translatedServices = Services.map((item) => ({
        ...item,
        title: t(`services.${item.key}.title`),
    }));

    const translatedProducts = Products.map((item) => ({
        ...item,
        title: t(`products.${item.key}.title`),
    }));

    return (
        <footer className={props.hclass || 'wpo-footer'}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className="logo" to="/">
                                        <img src={logo} alt={t('footer.logo_alt')} />
                                    </Link>
                                </div>
                                <p>{t('footer.about_description')}</p>
                                <ul>
                                    <li>
                                        <Link
                                            to={t('footer.social.facebook')}
                                            aria-label={t('footer.social.facebook_label')}
                                        >
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={t('footer.social.twitter')}
                                            aria-label={t('footer.social.twitter_label')}
                                        >
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={t('footer.social.instagram')}
                                            aria-label={t('footer.social.instagram_label')}
                                        >
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={t('footer.social.google')}
                                            aria-label={t('footer.social.google_label')}
                                        >
                                            <i className="ti-google"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.services_title')}</h3>
                                </div>
                                <ul>
                                    {translatedServices.slice(0, 5).map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                onClick={ClickHandler}
                                                to={`/service-single/${item.slug}`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.products_title')}</h3>
                                </div>
                                <ul>
                                    {translatedProducts.slice(0, 3).map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                onClick={ClickHandler}
                                                to={item.link}
                                            >
                                                {t(item.plan)}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget">
                                <div className="widget-title">
                                    <h3>{t('footer.contact_title')}</h3>
                                </div>
                                <div className="contact-ft" >
                                    <ul >
                                        <li>
                                            <i className="fi flaticon-location"></i>
                                                <a href="" style={{color:"#fff"}}>
                                                {t('footer.contact.address')}
                                            </a>
                                        </li>
                                        <li style={{color:"#fff"}}>
                                            <i className="fi flaticon-telephone"></i>
                                            <a href="tel:+97698117272" style={{color:"#fff"}}>
                                            {t('footer.contact.phone')}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fi flaticon-email"></i>
                                            <a href="mailto:info@optimize-inc.com" style={{color:"#fff"}}>
                                            {t('footer.contact.email')}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12" style={{ marginBottom: "30px" }}>
                            <ul>
                                <li>{t('footer.copyright', { year: new Date().getFullYear() })}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;