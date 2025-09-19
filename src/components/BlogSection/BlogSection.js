import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from '../../api/blogs'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {

    return (
        <section className={"" +props.hclass} id="blog">
            <div className="container">
                <div className="row">
                    <SectionTitle subtitle={'Latest News'} title={'Our Latest'} titleColor={'Blog'} />
                </div>
                <div className="wpo-blog-items">
                    <div className="row">
                        {blogs.slice(0, 3).map((bloge, bkye) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bkye}>
                                <div className="wpo-blog-item">
                                    <div className="wpo-blog-img">
                                        <img src={bloge.screens} alt="" />
                                        <div className="thumb">
                                            <ul>
                                                <li>May 25,2022</li>
                                                <li>By <Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.author}</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="wpo-blog-content">
                                        <h2><Link onClick={ClickHandler} to={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h2>
                                        <p>{bloge.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default BlogSection;

