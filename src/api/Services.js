// Remove unused imports
import img2 from '../images/icon/oil-refinery.svg';
import img5 from '../images/icon/recycle-water.svg';
import img6 from '../images/icon/excavator.svg';
import imgD2 from '../images/icon/dark/oil-refinery.svg';
import imgD5 from '../images/icon/dark/recycle-water.svg';
import imgD6 from '../images/icon/dark/excavator.svg';
import Simg1 from '../images/service-single/1.jpg';
import Simg2 from '../images/service-single/2.jpg';
import Simg3 from '../images/service-single/3.jpg';
const Services = [
  {
    id: 1,
    image: imgD5,
    imageDark: imgD5,
    simag: Simg1,
    galleryImages: [Simg1, Simg2], // Add gallery images
    slug: 'consulting-services',
    key: 'consulting',
    
  },
  {
    id: 2,
    image: imgD2,
    imageDark: imgD2,
    simag: Simg2,
    galleryImages: [Simg2, Simg3],
    slug: 'international-trading',
    key: 'trading',
  },
  {
    id: 3,
    image: imgD6,
    imageDark: imgD6,
    simag: Simg3,
    galleryImages: [Simg3, Simg1],
    slug: 'transportation-logistics',
    key: 'logistics',
  },
];

export default Services;