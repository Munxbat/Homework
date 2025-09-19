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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula tristique pharetra
                                vestibulum tortor purus. Fusce commodo egestas ipsum ac in nunc gravida. Etiam odio quam
                                vitae est lacus, nulla lectus scelerisque. Varius tellus sapien quis ac.</p>
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
                                <h5 className="progress-title">Machine Power</h5>
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