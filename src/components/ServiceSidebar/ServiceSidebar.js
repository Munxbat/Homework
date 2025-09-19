import React, { useState } from 'react';
import Services from '../../api/Services';
import { Link } from 'react-router-dom';



import IN1 from '../../images/instragram/7.jpg'
import IN2 from '../../images/instragram/8.jpg'
import IN3 from '../../images/instragram/9.jpg'
import IN4 from '../../images/instragram/10.jpg'
import IN5 from '../../images/instragram/11.jpg'
import IN6 from '../../images/instragram/12.jpg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const ServiceSidebar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [email, setEmail] = useState('');
    
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
    };






    return (
        <div className="blog-sidebar">
            <div className="widget search-widget">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Post.."
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <button type="submit">
                            <i className="ti-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div className="widget category-widget">
                <h3>Services</h3>
                <ul>
                    {Services.slice(0, 5).map((Services, item) => (
                        <li key={item}><Link onClick={ClickHandler} to={`/service-single/${Services.slug}`}>{Services.title} <span>{Services.id}</span></Link></li>
                    ))}
                </ul>
            </div>
            <div className="wpo-newsletter-widget widget">
                <h3>Newsletter</h3>
                <p>Join 20,000 Sabscribers!</p>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Sign Up</button>
                </form>
                <span>By signing up you agree to our <a href="#">Privecy Policy</a></span>
            </div>
            <div className="widget wpo-instagram-widget">
                <div className="widget-title">
                    <h3>Instagram</h3>
                </div>
                <ul className="d-flex">
                    <li><img src={IN1} alt="" /></li>
                    <li><img src={IN2} alt="" /></li>
                    <li><img src={IN3} alt="" /></li>
                    <li><img src={IN4} alt="" /></li>
                    <li><img src={IN5} alt="" /></li>
                    <li><img src={IN6} alt="" /></li>
                  
                </ul>
            </div>
        </div>
    );
};

export default ServiceSidebar;