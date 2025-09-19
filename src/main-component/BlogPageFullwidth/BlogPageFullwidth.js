import React, {Fragment} from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo2.svg'

const BlogPageFullwidth = () => {
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

