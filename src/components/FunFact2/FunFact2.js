import React from 'react';
import CountUp from 'react-countup';

const FunFact2 = () => {
    return (
        <section className="wpo-fun-fact-section-s2">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={25} enableScrollSpy />00</h3>
                                    <p>Years Of Experience</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={32} enableScrollSpy />00</h3>
                                    <p>Expert Specialist</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={321} enableScrollSpy />+</h3>
                                    <p>Successful Project</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><CountUp end={210} enableScrollSpy />+</h3>
                                    <p>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FunFact2;