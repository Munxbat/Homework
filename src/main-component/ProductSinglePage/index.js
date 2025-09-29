import React, { Fragment, useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';  
import PageTitle from '../../components/pagetitle/PageTitle';
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo2.svg';

const SHEET_ID = '1l7CNp3e_cC5LP4aY8_TTSq4_EeFD7OormBotfdYIHZw';
const API_KEY = 'AIzaSyCFZ9-TOJmvES8ukgfFLjpzIklBDt0koUs';
const SHEET_NAME = 'Products';

const ShopPage = ({ addToCart }) => {
    const [productsArray, setProductsArray] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

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
                        price: parseFloat(row[8]) || 0,
                        image: `/images/products/${row[0]?.replace(/\s+/g, '-').toLowerCase()}.jpg`
                    };
                }).filter(product => product !== null);

                const uniqueCategories = ['All', ...new Set(products.map(product => product.category))];
                setCategories(uniqueCategories);
                setProductsArray(products);
                setFilteredProducts(products);
                setError(null);
            } catch (err) {
                console.error('Google Sheets API алдаа:', err);
                setError(err.message);
                
                const fallbackProducts = [
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
                    {
                        id: 2,
                        name: "Tricone Bit TCI 8-1/2\"",
                        description: "Tungsten Carbide Insert Tricone Bit",
                        length: "400mm",
                        diameter: "216mm",
                        quantity: 50,
                        stock: 10,
                        category: "Drilling Bit",
                        supplier: "Koonsa",
                        price: 2200,
                        image: "/images/products/tricone-bit.jpg"
                    },
                    {
                        id: 3,
                        name: "PDC Bit 12-1/4\"",
                        description: "Polycrystalline Diamond Compact Drill",
                        length: "500mm",
                        diameter: "311mm",
                        quantity: 35,
                        stock: 10,
                        category: "Drilling Bit",
                        supplier: "FTM",
                        price: 3500,
                        image: "/images/products/pdc-bit.jpg"
                    },
                    {
                        id: 4,
                        name: "Button Bit 4-1/2\"",
                        description: "Spherical Button Bit",
                        length: "280mm",
                        diameter: "114mm",
                        quantity: 200,
                        stock: 10,
                        category: "Drilling Bit",
                        supplier: "Drillhunter",
                        price: 800,
                        image: "/images/products/button-bit.jpg"
                    },
                    {
                        id: 5,
                        name: "Underground Loader LHD 14",
                        description: "Low-profile Mining Loader LHD",
                        length: "9.2m",
                        diameter: "2.5m",
                        quantity: 8,
                        stock: 10,
                        category: "Mining Equipment",
                        supplier: "Koonsa",
                        price: 125000,
                        image: "/images/products/lhd-loader.jpg"
                    },
                    {
                        id: 6,
                        name: "Jumbo Drill Rig DD422i",
                        description: "Twin Boom Development Drill Rig",
                        length: "12m",
                        diameter: "3m",
                        quantity: 3,
                        stock: 10,
                        category: "Mining Equipment",
                        supplier: "FTM",
                        price: 95000,
                        image: "/images/products/jumbo-drill-rig.jpg"
                    },
                    {
                        id: 7,
                        name: "Roof Bolter DS311",
                        description: "Hydraulic Roof Bolting Rig",
                        length: "7.5m",
                        diameter: "2.2m",
                        quantity: 5,
                        stock: 10,
                        category: "Mining Equipment",
                        supplier: "Drillhunter",
                        price: 45000,
                        image: "/images/products/roof-bolter.jpg"
                    },
                    {
                        id: 8,
                        name: "Michelin XDR 59/80R63",
                        description: "Ultra-class haul truck tire",
                        length: "4.0m",
                        diameter: "",
                        quantity: 12,
                        stock: 1,
                        category: "Heavy Tires",
                        supplier: "Michelin*",
                        price: 28000,
                        image: "/images/products/michelin-tire.jpg"
                    },
                    {
                        id: 9,
                        name: "Bridgestone VRPS 46/90R57",
                        description: "Dump truck radial tire",
                        length: "3.6m",
                        diameter: "",
                        quantity: 20,
                        stock: 1,
                        category: "Heavy Tires",
                        supplier: "Koonsa",
                        price: 18500,
                        image: "/images/products/bridgestone-tire.jpg"
                    },
                    {
                        id: 10,
                        name: "Goodyear RL-5K 45/65R45",
                        description: "Loader tire (cut-resistant)",
                        length: "2.8m",
                        diameter: "",
                        quantity: 30,
                        stock: 10,
                        category: "Heavy Tires",
                        supplier: "FTM",
                        price: 9500,
                        image: "/images/products/goodyear-tire.jpg"
                    }
                ];
                
                const uniqueCategories = ['All', ...new Set(fallbackProducts.map(product => product.category))];
                setCategories(uniqueCategories);
                setProductsArray(fallbackProducts);
                setFilteredProducts(fallbackProducts);
                setError('Google Sheets API ажиллахгүй байна. Fallback дата ашиглаж байна.');
            } finally {
                setLoading(false);
            }
        };

        fetchProductsFromSheets();
    }, []);

    useEffect(() => {
        if (selectedCategory === 'All') {
            setFilteredProducts(productsArray);
        } else {
            setFilteredProducts(productsArray.filter(product => product.category === selectedCategory));
        }
        setCurrentPage(1);
    }, [selectedCategory, productsArray]);

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

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    if (loading) {
        return (
            <Fragment>
                <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
                <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
                <section className="wpo-shop-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div style={{ textAlign: 'center', padding: '50px' }}>
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <p className="mt-3">Бүтээгдэхүүнүүдийг ачаалж байна...</p>
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
                <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
                <section className="wpo-shop-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="alert alert-warning" role="alert">
                                    <h4 className="alert-heading">Анхааруулга!</h4>
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
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <section className="wpo-shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="category-filter mb-4">
                                <h4>Категори сонгох</h4>
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
                                    <h3>Бүтээгдэхүүн олдсонгүй</h3>
                                    <p>Дахин ачаалж үзнэ үү.</p>
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
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    );
};

export default connect(null, { addToCart })(ShopPage);