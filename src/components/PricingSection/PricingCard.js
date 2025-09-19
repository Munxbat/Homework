import React from 'react';
import { Link } from 'react-router-dom';
const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const PricingCard = ({ plan, price, features }) => {
    return (
       
            <div className="col col-lg-4 col-md-6 col-12">
                <div className="wpo-pricing-item">
                    <div className="wpo-pricing-top">
                        <div className="pricing-thumb">
                            <span>{plan}</span>
                        </div>
                        <div className="wpo-pricing-text">
                            <h2>{price}<span>/per m²</span></h2>
                            <p>Industries represents the way to feel happy and complete.</p>
                        </div>
                    </div>
                    <div className="wpo-pricing-bottom">
                        <div className="wpo-pricing-bottom-text">
                            <ul>
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <Link OnClick={ClickHandler} to="/">CHOOSE PLAN</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default PricingCard;
