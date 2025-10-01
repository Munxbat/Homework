// src/components/AboutSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import defaultImage from '../../images/director.png'; 
import ceoImage from '../../images/team/img-4.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const AboutSection = ({ hclass, mainImage }) => {
    const { t } = useTranslation();

    return (
        <div className={hclass || 'wpo-about-section'} style={{paddingTop: '50px', paddingBottom: '50px'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span className="sub">{t('aboutS2.subTitle')}</span>
                                <h2 dangerouslySetInnerHTML={{ __html: t('aboutS2.title') }} />
                            </div>
                            <h5>{t('aboutS2.greeting')}</h5>
                            <p>{t('aboutS2.description')}</p>
                            <div className="btns">
                                <Link
                                    onClick={ClickHandler}
                                    to="/service"
                                    className="theme-btn"
                                    aria-label={t('aboutS2.discoverMore')}
                                >
                                    {t('aboutS2.discoverMore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: 'right' }}> {/*энэ div ийг баруун тийш нь байрлуулмаар байна */}
                        <div className="wpo-about-img">
                            <img
                                src={mainImage || defaultImage}
                                alt={t('aboutS2.image_alt')}
                                className="about-main-image"
                            />
                            <div className="wpo-about-item">
                                <div className="wpo-about-top">
                                    <div className="wpo-about-thumb-img">
                                        <img src={ceoImage} alt={t('aboutS2.ceo_alt')} />
                                    </div>
                                    <div className="wpo-about-info">
                                        <div className="wpo-about-info-text">
                                            <h2>{t('aboutS2.ceoName')}</h2>
                                            <span>{t('aboutS2.ceoTitle')}</span>
                                        </div>
                                        <div className="wpo-about-info-ratting">
                                            <ul aria-label={t('aboutS2.rating_label')}>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-about-content">
                                    <p>{t('aboutS2.ceoQuote')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;