import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Ab2 from '../../images/about.jpg';
import Ab3 from '../../images/about2.jpg';
import Ab4 from '../../images/about3.jpg';

const AboutS2 = (props) => {
    const { t } = useTranslation();
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-wrap">
                                <div className="wpo-about-img-l">
                                    <img src={Ab2} alt="" />
                                </div>
                                <div className="wpo-about-img-r">
                                    <img src={Ab4} alt="" />
                                    <div className="wpo-about-item">
                                        <div className="wpo-about-top">
                                            <div className="wpo-about-thumb-img">
                                                <img src={Ab3} alt="" />
                                            </div>
                                            <div className="wpo-about-info">
                                                <div className="wpo-about-info-text">
                                                    <h2>{t('aboutS2.ceoName')}</h2>
                                                    <span>{t('aboutS2.ceoTitle')}</span>
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span className="sub">{t('aboutS2.subTitle')}</span>
                                <h2 dangerouslySetInnerHTML={{ __html: t('aboutS2.title') }} />
                            </div>
                            <h5>{t('aboutS2.greeting')}</h5>
                            <p>{t('aboutS2.description')}</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">
                                    {t('aboutS2.discoverMore')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutS2;