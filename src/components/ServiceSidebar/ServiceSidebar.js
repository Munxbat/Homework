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
            
        </div>
    );
};

export default ServiceSidebar;