import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../SectionTitle/SectionTitle';

// Click handler
const ClickHandler = () => {
    window.scrollTo(10, 0);
};

// Individual Pricing Card Component
// Individual Pricing Card Component
const PricingCard = ({ plan, price, features, description, link }) => {
    return (
        <div className="col col-lg-4 col-md-6 col-12">
            <div className="wpo-pricing-item" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="wpo-pricing-top">
                    <div className="pricing-thumb">
                        <span>{plan}</span>
                    </div>
                    <div className="wpo-pricing-text" style={{textAlign:"center"}}>
                        <h2 style={{display: "block"}}>
                            {price}
                            <span><br />Available for customization</span>
                        </h2>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="wpo-pricing-bottom">
                    <div className="wpo-pricing-bottom-text" style={{textAlign:"center", marginBottom:"20px"}}>
                        <ul style={{ display: 'flex', gap: '10px', padding: 0, margin: 0, listStyle: 'none', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {features.map((feature, fIndex) => (
                                <li key={fIndex}>{feature}</li>
                            ))}
                        </ul>
                        <Link onClick={ClickHandler} to={link}>CHOOSE PLAN</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Pricing Section
const PricingSection = () => {
    const pricingPlans = [
        {
            plan: 'Suggestions',
            price: 'Mining Equipment',
            description: 'High-performance mining equipment for efficiency and durability.',
            link: '/equipment',  // энд линк
            features: [
                'Advanced automation systems',
                'Robust construction',
                'Low maintenance costs',
                'Operator-friendly design',
                'Power & energy optimized'
            ]
        },
        {
            plan: 'Suggestions',
            price: 'Mining Drills',
            description: 'High-performance mining drills designed for efficiency and durability. Perfect for small to medium-scale operations.',
            link: '/drills',  // энд линк
            features: [
                'General living space advices',
                'Complete Petroleum Refinery',
                'Modern Industries planning',
                'Industries design advices',
                'Power & Energy'
            ]
        },
        {
            plan: 'Suggestions',
            price: 'Heavy Tires',
            description: 'Durable heavy tires ideal for mining & construction vehicles.',
            link: '/tires',  // энд линк
            features: [
                'High load capacity',
                'Wear-resistant materials',
                'Excellent traction',
                'Long service life',
                'Ideal for mining & construction vehicles'
            ]
        }
    ];

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <SectionTitle subtitle={'Pricing Plan'} title={'Choose Your Optimal'} titleColor={'Plan'} />
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard 
                                key={index}
                                plan={plan.plan}
                                price={plan.price}
                                features={plan.features}
                                description={plan.description}
                                link={plan.link}  // линк дамжуулж байна
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
