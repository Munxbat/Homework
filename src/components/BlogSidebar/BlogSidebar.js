import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import Ab1 from '../../images/blog/about-widget.jpg'
import Shape from '../../images/blog/ab.png'
import Img1 from '../../images/recent-posts/img-1.jpg'
import Img2 from '../../images/recent-posts/img-2.jpg'
import Img3 from '../../images/recent-posts/img-3.jpg'

import Ing1 from '../../images/instragram/7.jpg'
import Ing2 from '../../images/instragram/8.jpg'
import Ing3 from '../../images/instragram/9.jpg'
import Ing4 from '../../images/instragram/10.jpg'
import Ing5 from '../../images/instragram/11.jpg'
import Ing6 from '../../images/instragram/12.jpg'




const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    
    const SubmitHandler = (e) => {
        e.preventDefault()
    }
    const [searchTerm, setSearchTerm] = useState('');
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (showError) {
            setShowError(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
            console.log('Searching for:', searchTerm);
        }
    };



    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <img src={Ab1} alt='' />
                    </div>
                    <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link to="#"><i className="ti-facebook"></i></Link></li>
                            <li><Link to="#"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link to="#"><i className="ti-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                        <img src={Shape} alt="" />
                    </div>
                </div>
                <div className="widget search-widget">
                    <form
                        onSubmit={handleSubmit}>
                        <div>
                            <input
                                className="form-control"
                                type="text"
                                name="search"
                                value={searchTerm}
                                onChange={handleInputChange}
                                placeholder="Search..."
                            />
                            <button type="submit">
                                <i className="ti-search"></i>
                            </button>
                        </div>
                    </form>
                    {showError && <p style={{ color: 'red' }}>Please enter a search term.</p>}
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {blogs.slice(0, 4).map((blogItem, index) => (
                            <li key={index}><Link onClick={ClickHandler} to={`/blog-single/${blogItem.slug}`} >{blogItem.catagori}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        <div className="post">
                            <div className="img-holder">
                                <img src={Img1} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Industrial Profits Grow Faster in First Eight Months.</Link>
                                </h4>
                                <span className="date">19 Jun 2023 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={Img2} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Industrial and Sustainability in the Time of COVID-19</Link></h4>
                                <span className="date">22 May 2023 </span>
                            </div>
                        </div>
                        <div className="post">
                            <div className="img-holder">
                                <img src={Img3} alt="" />
                            </div>
                            <div className="details">
                                <h4><Link onClick={ClickHandler} to="/blog-single/Why-Industry-Are-A-Juicy-Target-For-Cyberattack">Exploring The Wild Side in an Industrial Jungle.</Link></h4>
                                <span className="date">12 Apr 2023 </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><span><img src={Ing1}
                            alt="" /></span></li>
                        <li><span><img src={Ing2}
                            alt="" /></span></li>
                        <li><span><img src={Ing3}
                            alt="" /></span></li>
                        <li><span><img src={Ing4}
                            alt="" /></span></li>
                        <li><span><img src={Ing5}
                            alt="" /></span></li>
                        <li><span><img src={Ing6}
                            alt="" /></span></li>
                    </ul>
                </div>
                
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link to="#">accountant</Link></li>
                        <li><Link to="#">Engineering</Link></li>
                        <li><Link to="#">Industrial</Link></li>
                        <li><Link to="#">Mechanical</Link></li>
                        <li><Link to="#">Oil & Gas</Link></li>
                        <li><Link to="#">Painting</Link></li>
                        <li><Link to="#">Petroleum</Link></li>
                        <li><Link to="#">Success</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default BlogSidebar;
