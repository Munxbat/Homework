import React, { Fragment } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';
import { productsArray } from '../../data/products'; // productsArray-г import хийх эсвэл context/props-аар дамжуулна
import Ticker from '../../components/Metal/Ticker';

const ProductSinglePage = () => {
  const { slug } = useParams();

  // productsArray-аас slug-тай бүтээгдэхүүнийг олно
  const productDetails = productsArray.find((p) => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

  const ClickHandler = () => {
    window.scrollTo(0, 0);
  };

  if (!productDetails) {
    return (
      <Fragment>
        <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
        <PageTitle pageTitle={'Product Not Found'} pagesub={'Shop'} />
        
            
       
        <Footer hclass={'wpo-site-footer'} />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
      <PageTitle pageTitle={productDetails.name} pagesub={'Shop'} />
      <div className="wpo-shop-single-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="wpo-shop-single-wrap">
                <div className="wpo-shop-single-item">
                  <div className="wpo-shop-single-img text-center mb-4">
                    <img src={productDetails.image} alt={productDetails.name} />
                  </div>
                  <h2>{productDetails.name}</h2>
                  <p>{productDetails.description}</p>
                  <ul>
                    <li>Length: {productDetails.length}</li>
                    <li>Diameter: {productDetails.diameter}</li>
                    <li>Quantity: {productDetails.quantity}</li>
                    <li>Stock: {productDetails.stock}</li>
                    <li>Supplier: {productDetails.supplier}</li>
                    <li>Price: ${productDetails.price}</li>
                  </ul>
                  <Link
                    to="/shop"
                    className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    onClick={ClickHandler}
                  >
                    Back to Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer hclass={'wpo-site-footer'} />
      <Scrollbar />
      <Ticker />
    </Fragment>
  );
};

export default ProductSinglePage;
