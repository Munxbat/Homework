import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import rv1 from '../../images/shop/shop-single/review/img-1.jpg'
import rv2 from '../../images/shop/shop-single/review/img-2.jpg'



const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }



    return (
        <div className="row">
            <div className="col col-xs-12">
                <div className="product-info">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                               Order
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div className="row">
                            

                            <div className="col col-lg-12 col-12 review-form-wrapper">
                                <div className="review-form">
                                    <h4>You can pre-order</h4>
                                    <p>If the product you are looking for is not available in our stock, we can quickly order and deliver it according to your request and needs. Please feel free to contact us directly.</p>
                                    <form onSubmit={SubmitHandler}>
 
                                        <div>
                                            <input type="text" className="form-control" placeholder="Name *"
                                                required/>
                                        </div>
                                        <div>
                                            <input type="email" className="form-control" placeholder="Email *"
                                                required/>
                                        </div>
                                        <div>
                                            <textarea className="form-control"
                                                placeholder="Tell us what do you need? *"></textarea>
                                        </div>
                                        <div className="rating-wrapper">
                                            <div className="submit">
                                            <button type="submit" className="theme-btn-s2">Post
                                                    order</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    );
}

export default ProductTabs;