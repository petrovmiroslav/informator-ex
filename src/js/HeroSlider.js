import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronIcon from './ChevronIcon.js';
import Arrow from './SliderArrowButton.js';

export default class HeroSlider extends React.Component {
  constructor (props) {
    super(props);
    this.SliderClassName = this.props.sliderClassName || '';
    this.SlidesClassName = this.props.slidesClassName || '';
    this.PrevArrowClassName = this.props.prevClassName || '';
    this.NextArrowClassName = this.props.nextClassName || '';

    this.Slides = props.data.map((setup, i) => {
      return <Slide
      key={i}
      text={setup[0]}
      linkText={setup[1]}
      slideBG={setup[2]}
      img={setup[3]}
      imgClass={setup[4]}/>;
    });

    this.settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      className: "center",
      centerMode: true,
      centerPadding: "0px",
      autoplay: true,
      pauseOnHover: true,
      swipeToSlide: true,
      autoplaySpeed: 3000,
      cssEase: "ease-in-out",
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

  render () {
    return (
    <section className={'slider ' + this.SliderClassName}>
      <div className='slider__scene'>
        <div className={'slider__slides ' + this.SlidesClassName}>
          <Slider ref={c => (this.slider = c)} {...this.settings}>
            {this.Slides}
          </Slider>
        </div>
      </div>
      <Arrow className={"slider__button--prev " + this.PrevArrowClassName} onClick={this.previous}/>
      <Arrow className={"slider__button--next " + this.NextArrowClassName} onClick={this.next}/>
    </section>
    );
  }
}



function Slide (props) {
  return (
    <div className='slider__slideLayout'>
    <div className={`slider__slide slider__slide--BG${props.slideBG}`}>
      <Circles/>
      {props.img && 
        <img className={'slider__image slider__image--'+ props.imgClass} src={props.img} alt='slider image'/>}
      <p className='slider__text'>{props.text}</p>
      <a className='slider__link link' href='#' rel='noopener noreferrer'>
        {props.linkText}
        <ChevronIcon/>
      </a>
    </div>
    </div>
  );
}


function Circles (props) {
  return (
    <svg className='slider__circles' width="279" height="250" viewBox="0 0 279 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M234 357.239C349.007 357.239 442.239 264.007 442.239 149C442.239 33.993 349.007 -59.2385 234 -59.2385C118.993 -59.2385 25.7615 33.993 25.7615 149C25.7615 264.007 118.993 357.239 234 357.239ZM234 383C363.235 383 468 278.235 468 149C468 19.7654 363.235 -85 234 -85C104.765 -85 0 19.7654 0 149C0 278.235 104.765 383 234 383Z" fill="black" fillOpacity="0.06"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M236.717 284.55C311.413 284.55 371.965 223.997 371.965 149.302C371.965 74.6069 311.413 14.0544 236.717 14.0544C162.022 14.0544 101.47 74.6069 101.47 149.302C101.47 223.997 162.022 284.55 236.717 284.55ZM236.717 310.311C325.64 310.311 397.727 238.225 397.727 149.302C397.727 60.3792 325.64 -11.707 236.717 -11.707C147.795 -11.707 75.7083 60.3792 75.7083 149.302C75.7083 238.225 147.795 310.311 236.717 310.311Z" fill="black" fillOpacity="0.06"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M236.712 212.417C271.57 212.417 299.828 184.16 299.828 149.302C299.828 114.444 271.57 86.1863 236.712 86.1863C201.855 86.1863 173.597 114.444 173.597 149.302C173.597 184.16 201.855 212.417 236.712 212.417ZM236.712 238.179C285.798 238.179 325.589 198.387 325.589 149.302C325.589 100.216 285.798 60.4248 236.712 60.4248C187.627 60.4248 147.835 100.216 147.835 149.302C147.835 198.387 187.627 238.179 236.712 238.179Z" fill="black" fillOpacity="0.06"/>
    </svg>
  );
}