import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../SectionTitle/SectionTitle';
import PricingProducts from '../../api/Products';
import './PricingSection.scss';

const ClickHandler = () => window.scrollTo(0, 0);

const PricingCard = ({ plan, image, price, features, description, link }) => {
    const { t } = useTranslation();

    return (
        <div className="col col-lg-4 col-md-6 col-12">
            <div className="wpo-pricing-item">
                <div className="wpo-pricing-top">
                    <div className="pricing-thumb">
                        <span>{t(plan)}</span>
                    </div>
                    <div className="pricing-img" style={{ textAlign: 'center', height: '200px', marginBottom: '10px' }}>
                        <img src={image} alt={t(`pricing.alt.${plan.toLowerCase().replace(/\s+/g, '-')}`)} />
                    </div>
                    <div className="wpo-pricing-text" >
                        <h2 style={{ color: '#FE693E', height: '70px' }}>
                            {price}
                            
                        </h2>
                        <p style={{height:'150px', }}>{t(description)}</p>
                    </div>
                </div>
            <div className="wpo-pricing-bottom" style={{ height:'300px', MarginTop:'10px'}}>
                    <ul style={{marginTop:'-10px', height:'200px'}}>
                        {features.map((feature, index) => (
                            <li key={index} style={{}} >{t(feature)}</li>
                        ))}
                    </ul>
                    <Link to={link} onClick={ClickHandler} >
                        {t('pricing.showMore')}
                    </Link>
                </div>
            </div>
        </div>
    );
};

PricingCard.propTypes = {
    plan: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

const PricingSection = () => {
    const { t } = useTranslation();

    return (
        <section className="wpo-pricing-section-s2 section-padding">
            <div className="container">
                <div className="row" style={{color: '#fff'}}>
                    <SectionTitle
                        subtitle={t('pricing.subtitle')}
                        title={<span style={{ color: '#fff' }}>{t('pricing.title')}</span>}
                        titleColor={t('pricing.titleColor')}
                    />
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {PricingProducts.length > 0 ? (
                            PricingProducts.map((plan) => (
                                <PricingCard key={t('plan.id')} {...plan} />
                            ))
                        ) : (
                            <p>{t('pricing.noProducts')}</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;