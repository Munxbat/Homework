import React from 'react';
import FunFactSection from '../FunFact/FunFact';

const SkillSection = (props) => {
    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="wpo-skill-img">
                            <img src={props.Akimg} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="wpo-section-title-s2">
                            <p>Our Skill</p>
                            <h2>Why choose <span>us?</span> </h2>
                        </div>
                        <div className="wpo-skill-progress">
                            <p>By choosing our services, you can reduce both capital expenditure and operational costs through flexible rental options, while gaining access to the latest equipment with advanced features and improved efficiency. In addition, our packages include expert technical support and maintenance, ensuring smooth operations at all times. Best of all, you can easily scale your fleet up or down to match your specific project requirements, giving you both efficiency and flexibility in one complete solution.</p>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Time Management</h5>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '75%' }}>
                                    </div>
                                </div>
                                <span className="progress-number">75%</span>
                            </div>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Working Ability</h5>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }}>
                                    </div>
                                </div>
                                <span className="progress-number">80%</span>
                            </div>
                            <div className="wpo-progress-single">
                                <h5 className="progress-title">Revenue, Profit</h5>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '92%' }}>
                                    </div>
                                </div>
                                <span className="progress-number">92%</span>
                            </div>
                        </div>
                        <FunFactSection/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;