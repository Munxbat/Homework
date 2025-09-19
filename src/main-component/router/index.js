import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage5/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ServicePages from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import PricingPage from '../PricingPage/PricingPage';
import ShopPage from '../ShopPage/ShopPage'
import ProductSinglePage from '../ProductSinglePage';
import CartPage from '../CartPage';
import CheckoutPage from '../CheckoutPage';
import OrderRecived from '../OrderRecived';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="service" element={<ServicePages />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path='shop-single/:slug' element={<ProductSinglePage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='order_received' element={<OrderRecived />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
