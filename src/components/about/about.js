import React from 'react';
import { Link } from 'react-router-dom';


// image

import Abd1 from '../../images/about2.jpg'

const about = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <div className={"" +props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 colsm-12">
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
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={props.Ab} alt="" />
                                <div className="wpo-about-item">
                                    <div className="wpo-about-top">
                                        <div className="wpo-about-thumb-img">
                                        <img src={Abd1} alt="" />
                                        </div>
                                        <div className="wpo-about-info">
                                            <div className="wpo-about-info-text">
                                                <h2>Jenny Wilson</h2>
                                                <span>CEO of BudyBay</span>
                                            </div>
                                            <div className="wpo-about-info-ratting">
                                                <ul>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                    <li><i className="fa fa-star"></i></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-about-content">
                                        <p>“Consectetur adipiscing elited quam quis aliquam putate duisquis. Molestie ma
                                            facilisis peltesque.”</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default about;

