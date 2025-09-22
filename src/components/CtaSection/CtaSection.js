import React from "react";

const CtaSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="wpo-subscribe-wrap">
                    <div className="subscribe-text">
                        <h3>Should you require any assistance or wish to establish direct collaboration, 
                            please do not hesitate to contact us.</h3>
                    </div>
                    <div className="subscribe-form">
                        <form>
                            <div className="input-field">
                                <input type="email" placeholder="Enter your email" required />
                                    <button type="submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </section>
    )
}
export default CtaSection;


