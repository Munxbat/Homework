import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import { addToCart } from '../../store/actions/action';
import ShopProduct from '../../components/ShopProduct';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';
import Ticker from '../../components/Metal/Ticker';
import testingImage from '../../images/products/testing-a.jpg';
import mudMotorImage from '../../images/products/mud-motor.jpg';

// Image mapping
const imageMap = {
  'testing-a.jpg': testingImage,
  'mud-motor.jpg': mudMotorImage,
};

const ShopPage = ({ addToCart }) => {
  const { category } = useParams();
  const [productsArray, setProductsArray] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // Fetch products from Google Sheets
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();

        const uniqueCategories = ['All', ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCategories);
        setProductsArray(data);
        setFilteredProducts(data);
        setError(null);
      } catch (err) {
        console.error('API error:', err);
        setError('Failed to connect to server');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products when category or productsArray changes
  useEffect(() => {
    const targetCategory = category || selectedCategory;
    console.log('Filtering products for category:', targetCategory);
    console.log('All products:', productsArray);

    if (targetCategory === 'All' || !targetCategory) {
      setFilteredProducts(productsArray);
    } else {
      setFilteredProducts(
        productsArray.filter((product) => product.category === targetCategory)
      );
    }

    setSelectedCategory(targetCategory || 'All');
    setCurrentPage(1);
  }, [category, productsArray]);

  // Handle category change
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
    window.history.pushState({}, '', `/products/${newCategory}`);
    if (newCategory === 'All') {
      setFilteredProducts(productsArray);
    } else {
      setFilteredProducts(
        productsArray.filter((product) => product.category === newCategory)
      );
    }
    setCurrentPage(1);
  };

  const addToCartProduct = (product, qty = 1) => {
    addToCart(product, qty);
  };

  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Pagination function
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Fragment>
      <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
      <PageTitle pageTitle={'Products'} pagesub={'Shop'} />
      <section className="wpo-shop-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div className="text-center py-5">
                  <h3>{error}</h3>
                </div>
              ) : (
                <>
                  {/* Category Filter */}
                  <div className="category-filter mb-4">
                    <h4 style={{ color: '#fff' }}>Select Category</h4>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="form-control"
                      style={{ maxWidth: '300px', color: '#444' }}
                    >
                      {categories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Products */}
                  {totalProducts === 0 ? (
                    <div className="text-center py-5">
                      <h3>No products found</h3>
                      <p>Please select a different category</p>
                    </div>
                  ) : (
                    <>
                      <ShopProduct
                        addToCartProduct={addToCartProduct}
                        products={currentProducts}
                        imageMap={imageMap} // Pass imageMap to ShopProduct
                      />

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <div className="pagination-wrapper pagination-wrapper-center">
                          <ul className="pg-pagination">
                            <li>
                              <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="page-link"
                              >
                                <i className="ti-angle-left"></i>
                              </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                              <li
                                key={index}
                                className={currentPage === index + 1 ? 'active' : ''}
                              >
                                <button
                                  onClick={() => handlePageChange(index + 1)}
                                  className="page-link"
                                >
                                  {index + 1}
                                </button>
                              </li>
                            ))}
                            <li>
                              <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="page-link"
                              >
                                <i className="ti-angle-right"></i>
                              </button>
                            </li>
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer hclass={'wpo-site-footer-s2'} />
      <Scrollbar />
      <Ticker />
    </Fragment>
  );
};

export default connect(null, { addToCart })(ShopPage);