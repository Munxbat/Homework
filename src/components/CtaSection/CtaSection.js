import React from "react";

const CtaSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="wpo-subscribe-wrap">
                    <div className="subscribe-text">
                        <h3>Subscribe to our newsletter to receive
                            latest news on our services.</h3>
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


