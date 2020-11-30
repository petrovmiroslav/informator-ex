import React from 'react';
import Slider from "react-slick";
import Arrow from './SliderArrowButton.js';
import Item from './CatalogItem.js'

export default class CatalogSlider extends React.Component {
  constructor (props) {
    super(props);
    this.SliderClassName = this.props.sliderClassName || '';
    this.SlidesClassName = this.props.slidesClassName || '';
    this.PrevArrowClassName = this.props.prevClassName || '';
    this.NextArrowClassName = this.props.nextClassName || '';

    this.Slides = this.createSlides(props.data);

    this.settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      autoplay: false,
      draggable: false,
      swipeToSlide: false,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  createSlides (data) {
    return data.map((slide, i) => {
      return (
        <div key={i} className='catalog__slide'>
          {this.createSlide(slide)}
        </div>
      );
    });
  }

  createSlide (slide) {
    return this.createItemsMap(slide.items);
  }

  createItemsMap (items) {
    return items.map((item, i) => {
      return (
        item.isAds
        ? <Ads key={i} {...item}/>
        : <Item key={i} {...item}/>
      );
    })
  }

  componentDidMount () {
    this.props.setSliderRef(this.slider);
  }

  render () {
    return (
      <section className={'slider ' + this.SliderClassName}>
        <div className='slider__scene'>
          <div className={'slider__slides ' + this.SlidesClassName}>
            <Slider ref={slider => (this.slider = slider)} {...this.settings}>
              {this.Slides}
            </Slider>
          </div>
          <Arrow className={"slider__button--prev " + this.PrevArrowClassName} bgColor={this.props.buttonBGColor} onClick={this.previous}/>
          <Arrow className={"slider__button--next " + this.NextArrowClassName} bgColor={this.props.buttonBGColor} onClick={this.next}/>
          {this.props.editButton && <EditButton className="catalog__sliderButton catalog__sliderButton--edit"/>}
        </div>
      </section>
    );
  }
}

/*Реклама или информация вместо лота*/
function Ads (props) {
  return (
    <div className='slider__item item'>
      <img className='item__AdsImg' src={props.adsBG} alt='Рекламное изображение'/>
      <p className='item__AdsText'>{props.text}</p>
    </div>
  );
}


/* Кнопка редактировать */
function EditButton (props) {
  return (
    <button className={'button ' + props.className}>
      <svg width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="41.4996" cy="41.0162" r="37.1436" fill="url(#paint0_linear)"/>
        <path d="M49.4121 29.7207C48.4307 29.7207 47.4492 30.1016 46.6875 30.8633L31.8633 45.6875L31.8047 45.9805L30.7793 51.1367L30.4863 52.5137L31.8633 52.2207L37.0195 51.1953L37.3125 51.1367L52.1367 36.3125C53.6602 34.7891 53.6602 32.3867 52.1367 30.8633C51.375 30.1016 50.3936 29.7207 49.4121 29.7207ZM49.4121 31.5078C49.8845 31.5078 50.3606 31.7239 50.8184 32.1816C51.7302 33.0935 51.7302 34.0823 50.8184 34.9941L50.1445 35.6387L47.3613 32.8555L48.0059 32.1816C48.4636 31.7239 48.9397 31.5078 49.4121 31.5078ZM46.043 34.1738L48.8262 36.957L37.4883 48.2949C36.873 47.0938 35.9062 46.127 34.7051 45.5117L46.043 34.1738ZM33.5039 47.0352C34.6282 47.4893 35.5107 48.3718 35.9648 49.4961L32.8887 50.1113L33.5039 47.0352Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linearEditButton" x1="5.76026" y1="10.6633" x2="80.1868" y2="12.4106" gradientUnits="userSpaceOnUse">
        <stop stopColor="#13B17C"/>
        <stop offset="1" stopColor="#0099CC"/>
        </linearGradient>
        </defs>
      </svg>
    </button>
  );
}