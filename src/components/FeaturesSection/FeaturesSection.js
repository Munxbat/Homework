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
                                    <p>We provide access to state-of-the-art mining equipment and drilling tools with advanced features, ensuring higher efficiency, reliability, and productivity for your mining operations globally.</p>
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
<p>Our dedicated team provides round-the-clock technical assistance and consulting, ensuring that your mining operations run smoothly and any issues are resolved promptly.</p>                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="wpo-features-item">
                            <div className="wpo-features-icon">
                                <i className="fi flaticon-smile"></i>
                            </div>
                            <div className="wpo-features-text">
                                <h2>Expert Engineers</h2>
<p>Our team of highly skilled engineers provides professional guidance and technical solutions for mining equipment, drilling tools, and spare parts to ensure optimal performance and efficiency.</p>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturesSection;