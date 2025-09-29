import React, { Fragment, useState, useEffect } from 'react';
import { connect } from "react-redux";
import NavbarS3 from '../../components/NavbarS3/NavbarS3';  
import PageTitle from '../../components/pagetitle/PageTitle'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo2.svg';

const SHEET_ID = '1l7CNp3e_cC5LP4aY8_TTSq4_EeFD7OormBotfdYIHZw';
const API_KEY = 'AIzaSyCFZ9-TOJmvES8ukgfFLjpzIklBDt0koUs';
const SHEET_NAME = 'Products';

const ShopPage = ({ addToCart }) => {
    const [productsArray, setProductsArray] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Филтерлэсэн бүтээгдэхүүн
    const [categories, setCategories] = useState([]); // Категориудын жагсаалт
    const [selectedCategory, setSelectedCategory] = useState('All'); // Сонгогдсон категори
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    // Google Sheets-ээс дата татах функц
    useEffect(() => {
        const fetchProductsFromSheets = async () => {
            try {
                setLoading(true);
                const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
                
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Google Sheets API-ээс дата авахад алдаа гарлаа');
                }
                
                const data = await response.json();
                const rows = data.values || [];
                
                if (rows.length === 0) {
                    throw new Error('Sheet-д дата байхгүй байна');
                }

                // Products array үүсгэх
                const products = rows.slice(1).map((row, index) => {
                    if (row.length < 6) {
                        console.warn(`Row ${index + 2} has insufficient data`);
                        return null;
                    }
                    
                    return {
                        id: index + 1,
                        name: row[0] || 'Unnamed Product',
                        description: row[1] || '',
                        length: row[2] || '',
                        diameter: row[3] || '',
                        quantity: parseInt(row[4]) || 0,
                        stock: parseInt(row[5]) || 0,
                        category: row[6] || 'Uncategorized',
                        supplier: row[7] || '',
                        price: parseFloat(row[8]) || 0, // Sheet-д price талбар нэмсэн гэж үзнэ
                        image: `/images/products/${row[0]?.replace(/\s+/g, '-').toLowerCase()}.jpg`
                    };
                }).filter(product => product !== null);

                // Категориудын жагсаалтыг гаргаж авах
                const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];
                setCategories(uniqueCategories);
                setProductsArray(products);
                setFilteredProducts(products); // Эхэндээ бүх бүтээгдэхүүнийг харуулна
                setError(null);
            } catch (err) {
                console.error('Google Sheets API алдаа:', err);
                setError(err.message);
                
                // Fallback дата
                const fallbackProducts = [
                    // Таны fallback дата энд хэвээр байна
                    {
                        id: 1,
                        name: "DTH Hammer Bit 6\"",
                        description: "Down-The-Hole Hammer Drill Bit",
                        length: "350mm",
                        diameter: "152mm",
                        quantity: 120,
                        stock: 10,
                        category: "Drilling Bit",
                        supplier: "Drillhunter",
                        price: 1500,
                        image: "/images/products/dth-hammer-bit.jpg"
                    },
                    // ... бусад fallback бүтээгдэхүүнүүд
                ];
                
                const uniqueCategories = ['All', ...new Set(fallbackProducts.map(product => product.category))];
                setCategories(uniqueCategories);
                setProductsArray(fallbackProducts);
                setFilteredProducts(fallbackProducts);
                setError('Something went wrong while fetching data. Showing fallback products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProductsFromSheets();
    }, []);

    // Категори сонгоход фильтр хийх
    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(productsArray);
        } else {
            setFilteredProducts(productsArray.filter(product => product.category === selectedCategory));
        }
        setCurrentPage(1); // Категори өөрчлөгдвөл хуудсыг эхнээс эхэлнэ
    }, [selectedCategory, productsArray]);

    // Пагинаци
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const currentProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    // Категори сонгох функц
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    if (loading) {
        return (
            <Fragment>
                <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
                <PageTitle pageTitle={'Products'} pagesub={'Shop'} />
                <section className="wpo-shop-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div style={{ textAlign: 'center', padding: '50px' }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Progresing products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer hclass={'wpo-site-footer'} />
                <Scrollbar />
            </Fragment>
        );
    }

    if (error) {
        return (
            <Fragment>
                <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
                <PageTitle pageTitle={'{Products}'} pagesub={'Shop'} />
                <section className="wpo-shop-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="alert alert-warning" role="alert">
                                    <h4 className="alert-heading">Warning!</h4>
                                    <p>{error}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer hclass={'wpo-site-footer'} />
                <Scrollbar />
            </Fragment>
        );
    }

    return (
        <Fragment>
            <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
            <PageTitle pageTitle={'Products'} pagesub={'Shop'} />
            <section className="wpo-shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Категори сонгох UI */}
                            <div className="category-filter mb-4">
                                <h4>Select category</h4>
                                <select 
                                    value={selectedCategory} 
                                    onChange={(e) => handleCategoryChange(e.target.value)}
                                    className="form-control"
                                    style={{ maxWidth: '300px' }}
                                >
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {totalProducts === 0 ? (
                                <div className="text-center py-5">
                                    <h3>No result</h3>
                                    <p>Try again another way</p>
                                </div>
                            ) : (
                                <>
                                    <ShopProduct
                                        addToCartProduct={addToCartProduct}
                                        products={currentProducts}
                                    />
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
                                                    <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
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
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    );
};

export default connect(null, { addToCart })(ShopPage);