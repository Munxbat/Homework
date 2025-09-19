import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PricingCard from './PricingCard';


const pricingPlans = [
    {
        plan: 'Basic',
        price: '$120',
        features: [
            'General living space advices',
            'Complete Petroleum Refinery',
            'Modern Industries planning',
            'Industries design advices',
            'Power & Energy'
        ]
    },
    {
        plan: 'Premium',
        price: '$210',
        features: [
            'General living space advices',
            'Complete Petroleum Refinery',
            'Modern Industries planning',
            'Industries design advices',
            'Power & Energy']
    },
    {
        plan: 'Advanced',
        price: '$373',
        features: [
            'General living space advices',
            'Complete Petroleum Refinery',
            'Modern Industries planning',
            'Industries design advices',
            'Power & Energy']
    }
];

const PricingSection = () => {
    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row">
                    <SectionTitle subtitle={'Pricing Plan'} title={'Choose Your Optimal'} titleColor={'Plan'} />
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {pricingPlans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PricingSection;