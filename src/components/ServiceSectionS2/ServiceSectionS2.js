import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';
import Services from '../../api/Services';
import { useTranslation } from 'react-i18next';

const ServiceSectionS2 = (props) => {
    const { t } = useTranslation();

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const { SectionTitleShow = true } = props;

    // Services массивыг шалгахын тулд консолд хэвлэх
    console.log('Services:', Services);

    return (
        <div className={props.hclass || ''}>
            <div className="container">
                {SectionTitleShow && (
                    <div className="row">
                        <SectionTitle
                            subtitle={t('section.services.subtitle', 'Our Services')}
                            title={t('section.services.title', 'Best Solutions Here')}
                            titleColor={t('section.services.highlight', 'Services')}
                        />
                    </div>
                )}
                <div className="row align-items-center">
                    {Services.slice(0, 6).map((service, item) => (
                        <div className="col-lg-4 col-md-6 col-12" key={item}>
                            <div className="wpo-service-item">
                                <div className="icon">
                                    <i>
                                        <img
                                            src={service.imageDark}
                                            alt={t(`services.${service.key}.title`, service.key)}
                                        />
                                    </i>
                                </div>
                                <h2>
                                    <Link to={`/service-single/${service.slug}`} onClick={ClickHandler}>
                                        {t(`services.${service.key}.title`, service.key)}
                                    </Link>
                                </h2>
                                <p>{t(`services.${service.key}.description`, service.key)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSectionS2;