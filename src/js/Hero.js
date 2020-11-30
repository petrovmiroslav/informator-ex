import React from 'react';
import HeroSlider from './HeroSlider';
import data from './AdsData.js';

export default function Hero (props) {
  return (
    <section className='hero'>
      <h1 className='hero__header'><span className='hero__boldHeaderText'>Все торги в одном месте —</span> банкротные и арестованные торги, имущество банков и лизинговых компаний</h1>
      <HeroSlider data={data}
        sliderClassName='hero__slider'
        slidesClassName='hero__slides'/>
    </section>
  );
}