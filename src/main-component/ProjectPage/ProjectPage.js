import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg'
import { Link } from 'react-router-dom';
import Projects from '../../api/projects';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ProjectPage = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Projects Page'} pagesub={'Projects'} />
            <section className='wpo-project-area s4 section-padding'>
                <div className="container">
                    <div className="wpo-project-wrap">
                        <div className="row ">
                            {Projects.slice(0, 3).map((project, index) => (
                                <div className="col-lg-4 col-md-6 col-12" key={index}>
                                    <div className="wpo-project-item">
                                        <div className="wpo-project-img">
                                            <img src={project.pimg} alt="" />
                                            <div className="thumb">
                                                <h4>{project.id}</h4>
                                            </div>
                                        </div>
                                        <div className="wpo-project-text">
                                            <h2><Link onClick={ClickHandler} to={`/project-single/${project.slug}`}>{project.title}</Link></h2>
                                            <span>{project.subtitle}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;
