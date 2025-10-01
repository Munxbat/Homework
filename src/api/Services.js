import img1 from '../images/icon/engineering.svg';
import img2 from '../images/icon/oil-refinery.svg';
import img3 from '../images/icon/turbo.svg';
import img4 from '../images/icon/timing.svg';
import img5 from '../images/icon/recycle-water.svg';
import img6 from '../images/icon/excavator.svg';

import imgD1 from '../images/icon/dark/engineering.svg';
import imgD2 from '../images/icon/dark/oil-refinery.svg';
import imgD3 from '../images/icon/dark/turbo.svg';
import imgD4 from '../images/icon/dark/timing.svg';
import imgD5 from '../images/icon/dark/recycle-water.svg';
import imgD6 from '../images/icon/dark/excavator.svg';

import Simg1 from '../images/service-single/1.jpg';
import Simg2 from '../images/service-single/2.jpg';
import Simg3 from '../images/service-single/3.jpg';
import Simg4 from '../images/service-single/4.jpg';
import Simg5 from '../images/service-single/5.jpg';
import Simg6 from '../images/service-single/6.jpg';

const Services = [
    {
        id: 1,
        image: img5,
        imageDark: imgD5, // Fixed typo: imageDrak -> imageDark
        simag: Simg1,
        slug: 'consulting-services', // Lowercased for consistency
        key: 'consulting',
    },
    {
        id: 2,
        image: img2,
        imageDark: imgD2,
        simag: Simg2,
        slug: 'international-trading',
        key: 'trading',
    },
    {
        id: 3,
        image: img6,
        imageDark: imgD6,
        simag: Simg3,
        slug: 'transportation-logistics',
        key: 'logistics',
    },
    // Add more services here if needed, using img1, img3, img4, etc.
];

export default Services;