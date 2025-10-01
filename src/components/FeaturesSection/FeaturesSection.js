import React from 'react';
import { useTranslation } from 'react-i18next';

const FeaturesSection = (props) => {
    const { t } = useTranslation();

    return (
        <div className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-car"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>{t('features.technology.title')}</h2>
                                <p>{t('features.technology.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-24-hours-support"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>{t('features.support.title')}</h2>
                                <p>{t('features.support.description')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-smile"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>{t('features.engineers.title')}</h2>
                                <p>{t('features.engineers.description')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;
