
/* Single image */
import img1 from '../images/icon/engineering.svg'
import img2 from '../images/icon/oil-refinery.svg'
import img3 from '../images/icon/turbo.svg'
import img4 from '../images/icon/timing.svg'
import img5 from '../images/icon/recycle-water.svg'
import img6 from '../images/icon/excavator.svg'

import imgD1 from '../images/icon/dark/engineering.svg'
import imgD2 from '../images/icon/dark/oil-refinery.svg'
import imgD3 from '../images/icon/dark/turbo.svg'
import imgD4 from '../images/icon/dark/timing.svg'
import imgD5 from '../images/icon/dark/recycle-water.svg'
import imgD6 from '../images/icon/dark/excavator.svg'



import Simg1 from '../images/service-single/1.jpg'
import Simg2 from '../images/service-single/2.jpg'
import Simg3 from '../images/service-single/3.jpg'
import Simg4 from '../images/service-single/4.jpg'
import Simg5 from '../images/service-single/5.jpg'
import Simg6 from '../images/service-single/6.jpg'

const Services = [
    {
        id: 1,
        image: img5,
        imageDrak: imgD5,
        simag: Simg1,
        subtitle: 'Transport',
        title: 'Consulting Services',
        description: (
            <>
                <li>Legal due diligence </li>
           <li> Business analysis & valuation </li>
           <li> Strategic planning </li>
           <li> Business plan development </li>
           <li> Project management </li>
           <li> Processing & material handling </li>
           <li> Cost saving optimization </li>
           <li> Licensing assistance </li>
            </>
            ),
        slug: 'Consulting-Services'
    },
    {
        id: 2,
        image: img2,
        imageDrak: imgD2,
        simag: Simg2,
        subtitle: 'Transport',
        title: 'International Trading',
        description: (
            <>
       <li> Import of high-quality goods 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for consumers </li>
       <li> Heavy machinery lease services </li>
       <li> International trade facilitation </li>
       <li> Supply chain management </li>
       <li> Cross-border logistics&nbsp;coordination </li>
            <br/>
            
            </>
            
        ),
        slug: 'International-Trading'
    },
    {
        id: 3,
        image: img6,
        imageDrak: imgD6,
        simag: Simg3,
        subtitle: 'Transport',
        title: 'Transportation & Logistics',
        description: (
            <>
       <li> Compact and midsize trucks </li>
       <li> Heavy and full-size trucks </li>
       <li> Dump trucks </li>
       <li> Truck crane services </li>
       <li> Special condition transport </li>
       <li> Inter-city logistics </li>
       <li> Local delivery services </li>
            <br/>
            </>
        ),
        slug: 'Transportation-Logistics'
    },
    
];
export default Services;