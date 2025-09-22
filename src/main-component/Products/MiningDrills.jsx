import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';
import VideoPage from '../../components/VideoPage/VideoPage';
import { Link } from "react-router-dom";
import productDrills from '../../api/ProductDrills';

const MiningDrills = ({ addToCartProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'Mining Drills'} pagesub={'Products'} />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                padding: '20px',
                backgroundColor: '#f5f5f5',
                gap: '20px'
            }}>
                {/* Зүүн тал: Видео */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <VideoPage slug="page-1" /> {/* slug-ээр өөр видеог сонгоно */}
                </div>

                {/* Баруун тал: Текст */}
                <div className="wpo-service-single-area-s2 section-padding"
                    style={{
                        flex: 1,
                        minWidth: '300px',
                        padding: '20px',
                        backgroundColor: '#fff',
                        borderRadius: '8px'
                    }}>

                    {productDrills && productDrills.length > 0 ? (
                        productDrills.slice(0, 3).map((product, idx) => (
                            <div className="details" key={idx}>
                                <h3>
                                    <Link onClick={ClickHandler} to={`/shop-single/${product.slug}`}>
                                        {product.title}
                                    </Link>
                                </h3>
                                <del>${product.delPrice}</del>
                                <span>${product.price}</span>
                                <div className="add-to-cart">
                                    <span
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        title="Add to Cart"
                                        onClick={() => addToCartProduct(product)}
                                    >
                                        Add to cart
                                        <i className="ti-shopping-cart"></i>
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>

            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    );
};

export default MiningDrills;
