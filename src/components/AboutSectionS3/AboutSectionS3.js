import React from 'react';
import { Link } from 'react-router-dom';
import Ab3 from '../../images/about.jpg'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const AboutSectionS3 = () => {
    return (
        <div className="wpo-about-area-s3 section-padding">
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
                                <Link onClick={ClickHandler} to="/about" className="theme-btn">Discover More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="wpo-about-img">
                            <img src={Ab3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionS3;