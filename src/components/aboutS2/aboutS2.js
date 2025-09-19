import React from 'react';
import { Link } from 'react-router-dom';

import Ab2 from '../../images/about.jpg'
import Ab3 from '../../images/about2.jpg'
import Ab4 from '../../images/about3.jpg'

const aboutS2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <div className="wpo-about-img-wrap">
                                <div className="wpo-about-img-l">
                                    <img src={Ab2} alt="" />
                                </div>
                                <div className="wpo-about-img-r">
                                    <img src={Ab4} alt="" />
                                        <div className="wpo-about-item">
                                            <div className="wpo-about-top">
                                                <div className="wpo-about-thumb-img">
                                                <img src={Ab3} alt="" />
                                                </div>
                                                <div className="wpo-about-info">
                                                    <div className="wpo-about-info-text">
                                                        <h2>Jenny Wilson</h2>
                                                        <span>CEO of BudyBay</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="wpo-about-content">
                                                <p>“Consectetur for adipiscing elited
                                                    quam qufacilis peltesque.”</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-title">
                                <span className="sub">About Us</span>
                                <h2>We’re More than a <span>Industrial</span> Company</h2>
                            </div>
                            <h5>Industry can dolor siot amet, constetur adiping elit. Commodo adipiscing erat aliquam
                                mauris morbioliotion adipiscing vulputate. Hendrerit laoreet vivea sodales odio commodo
                                vulputate nunc.</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis scelerisque quam sit
                                at. Enim leo, eget adipiscing sagittis nec. Facilisi suscipit mi suscipit pharetra
                                penatibus sed integer at congue. Book senectus nibh placerat justo in ultricies. Nunc
                                varius facilisis posuere consectetur mauris integer integer sed sollicitudin. Egestas
                                tristique eget arcu mattis eros dictumst.</p>
                            <div className="btns">
                                <Link onClick={ClickHandler} to="/about" className="theme-btn" >Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutS2;
