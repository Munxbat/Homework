// import React, { Fragment } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';
// import NavbarS3 from '../../components/NavbarS3/NavbarS3';
// import PageTitle from '../../components/pagetitle/PageTitle';
// import Services from '../../api/Services';
// import Footer from '../../components/footer/Footer';
// import Scrollbar from '../../components/scrollbar/scrollbar';
// import Logo from '../../images/logo2.svg';
// import ContactForm from '../../components/ServiceContact/ServiceContact';
// import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';
// import Ticker from '../../components/Metal/Ticker';

// const ServiceSinglePage = () => {
//   const { t } = useTranslation();
// const { slug } = useParams();
// const serviceDetails = Services.find(item => item.slug === slug);

// console.log('Slug:', slug);

//   const ClickHandler = () => {
//     window.scrollTo(10, 0);
//   };

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   if (!serviceDetails) {
//     return (
//       <Fragment>
//         <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
//         <PageTitle
//           pageTitle={t('section.service_single.error_title', 'Service Not Found')}
//           pagesub={t('section.service_single.error_message', 'Error')}
//         />
//         <div className="bg-gray-100 min-h-screen py-12">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-lg"
//             >
//               <h2 className="text-2xl font-bold text-gray-800 mb-4">
//                 {t('section.service_single.error_title', 'Service Not Found')}
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 {t('section.service_single.error_message', 'The requested service could not be found.')}
//               </p>
//               <Link
//                 to="/"
//                 className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
//                 onClick={ClickHandler}
//               >
//                 {t('section.service_single.back_home', 'Back to Home')}
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//         <Footer hclass={'wpo-site-footer'} />
//         <Scrollbar />
//       </Fragment>
//     );
//   }

// const capabilities = t(`section.service_single.${slug}.capabilities`, { returnObjects: true });
// const workProcess = t(`section.service_single.${slug}.workProcess`, { returnObjects: true });

//   return (
//     <Fragment>
//       <NavbarS3 hclass={'wpo-site-header wpo-header-style-2'} Logo={Logo} />
//       <PageTitle
//         pageTitle={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
//         pagesub={t(`section.service_single.${slug}.pageSub`, 'Service Single')}
//       />
//       <div className="bg-gray-50 py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-8">
//             <motion.div
//               initial="hidden"
//               animate="visible"
//               variants={fadeIn}
//               className="lg:w-2/3 w-full"
//             >
//               <div className="bg-white rounded-lg shadow-lg p-6">
//                 <div className="mb-6">
//                   <img
//                     src={serviceDetails.simag}
//                     alt={t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
//                     className="w-full h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//                 <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                   {t(`services.${serviceDetails.key}.title`, serviceDetails.key)}
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   {t(`section.service_single.${slug}.description`, serviceDetails.key)}
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//                   {Array.isArray(serviceDetails.galleryImages) && serviceDetails.galleryImages.length > 0 ? (
//                     serviceDetails.galleryImages.map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt=""
//                         className="w-full h-48 object-cover rounded-lg hover:scale-105 transition"
//                       />
//                     ))
//                   ) : (
//                     <p className="text-gray-600">No gallery images available.</p>
//                   )}
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                     {t('section.service_single.capabilities_title', 'Our Capabilities')}
//                   </h3>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     {Array.isArray(capabilities) && capabilities.length > 0 ? (
//                       capabilities.map((item, index) => (
//                         <li key={index} className="mb-2">{item}</li>
//                       ))
//                     ) : (
//                       <li>{t('section.service_single.error_message', 'Translation not available')}</li>
//                     )}
//                   </ul>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                     {t('section.service_single.approach_title', 'Our Approach')}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {t(`section.service_single.${slug}.approach`, serviceDetails.key)}
//                   </p>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                     {t('section.service_single.work_process_title', 'Our Work Process')}
//                   </h3>
//                   <ul className="list-disc pl-5 text-gray-600">
//                     {Array.isArray(workProcess) && workProcess.length > 0 ? (
//                       workProcess.map((item, index) => (
//                         <li key={index} className="mb-2">{item}</li>
//                       ))
//                     ) : (
//                       <li>{t('section.service_single.error_message', 'Translation not available')}</li>
//                     )}
//                   </ul>
//                 </div>
//                 <div className="mb-6">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                     {t('section.service_single.related_service_title', 'Related Services')}
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {Services.filter((serv) => serv.slug !== slug)
//                       .slice(0, 3)
//                       .map((serv, index) => (
//                         <motion.div
//                           key={serv.id}
//                           initial="hidden"
//                           animate="visible"
//                           variants={fadeIn}
//                           className="bg-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
//                         >
//                           <img
//                             src={serv.image}
//                             alt={t(`services.${serv.key}.title`, serv.key)}
//                             className="w-full h-32 object-cover rounded-lg mb-3"
//                           />
//                           <h4 className="text-lg font-semibold text-gray-800 mb-2">
//                             <Link
//                               to={`/service-single/${serv.slug}`}
//                               onClick={ClickHandler}
//                               className="hover:text-blue-600 transition-colors duration-300"
//                             >
//                               {t(`services.${serv.key}.title`, serv.key)}
//                             </Link>
//                           </h4>
//                           <p className="text-gray-600 text-sm">
//                             {t(`services.${serv.key}.description`, serv.key)}
//                           </p>
//                         </motion.div>
//                       ))}
//                   </div>
//                 </div>
//                 <div className="bg-blue-50 p-6 rounded-lg">
//                   <h3 className="text-2xl font-semibold text-gray-800 mb-3">
//                     {t('section.service_single.contact_title', "Have project in mind? Let's discuss")}
//                   </h3>
//                   <p className="text-gray-600 mb-4">
//                     {t('section.service_single.contact_subtitle', 'Get in touch with us to see how we can help you with your project')}
//                   </p>
//                   <ContactForm />
//                 </div>
//               </div>
//             </motion.div>
//             <div className="lg:w-1/3 w-full">
//               <ServiceSidebar />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer hclass={'wpo-site-footer'} />
//       <Scrollbar />
//       <Ticker />
//     </Fragment>
//   );
// };

// export default ServiceSinglePage;