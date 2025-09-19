import React from 'react';

const FeaturesSection = (props) => {
    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-car"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>Advanced Technology</h2>
                                <p>Mattis aliquam sit non nuncoest vitae. Proin id adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-24-hours-support"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>24/7 Customer Support</h2>
                                <p>Mattis aliquam sit non nuncoest vitae. Proin id adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-smile"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>Expert Engineers</h2>
                                <p>Mattis aliquam sit non nuncoest vitae. Proin id adipiscing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;