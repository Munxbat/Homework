import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import IMg from '../../images/error-404.svg'
import Logo from '../../images/logo2.svg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ErrorPage = (props) => {


    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={404} pagesub={'404'} />
            <section className="error-404-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="content clearfix">
                                <div className="error">
                                    <img src={IMg} alt="" />
                                </div>
                                <div className="error-message">
                                    <h3>Oops! Page Not Found!</h3>
                                    <p>We’re sorry but we can’t seem to find the page you requested. This might be because
                                        you have typed the web address incorrectly.</p>
                                    <Link Onclick={ClickHandler} to="/" className="theme-btn-s4">Back to home</Link>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </section>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ErrorPage;



