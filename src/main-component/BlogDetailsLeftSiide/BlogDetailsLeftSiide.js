import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo2.svg'

const BlogDetailsLeftSiide = () => {

    const { slug } = useParams()
    const BlogDetails = blogs.find(item => item.slug === slug)
    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog Single'} />
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


