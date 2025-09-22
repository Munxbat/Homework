import React from 'react';
import HeroSlider from './HeroSlider';


export default function HeroSection({ data }) {
  return (
    <section className="cs_hero_1-wrap position-relative cs_hero_slider bg-primary">
      <HeroSlider data={data} />

      <div className="cs_hero_shape_1 position-absolute bottom-0 d-flex align-items-end h-100 cs_zindex_1 text-accent"
      style={{transform:"translateX(80px)"}}>
        
        <svg
          width={734}
          height={759}
          viewBox="-100 0 734 759"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240 0H660L430 759H0L240 0Z"
            fill="url(#paint0_linear_88_285)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_88_285"
              x1={145}
              y1="256.5"
              x2={584}
              y2={748}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#a53030ff" stopOpacity={0} offset="none" />
              <stop offset={1} stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="cs_hero_shape_2 position-absolute start-0 cs_zindex_1 text-accent">
        <svg
          width={572}
          height={715}
          viewBox="0 0 572 715"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M572 -6.10352e-05L6.10352e-05 715L-1.47213e-06 -1.10293e-05L572 -6.10352e-05Z"
            fill="url(#paint0_linear_88_258)"
            fillOpacity="0.7"
          />
          <defs>
            <linearGradient
              id="paint0_linear_88_258"
              x1="388.254"
              y1="384.613"
              x2="-246.401"
              y2="-142.087"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0457759" stopColor="#18191D" stopOpacity={0} />
              <stop
                offset="0.514455"
                stopColor="currentColor"
                stopOpacity="0.35"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
