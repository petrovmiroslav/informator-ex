import React from 'react';
import CatalogSlider from './CatalogSlider.js'
import ItemsJSON from './ItemsJSON.js';

export default class Catalog extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sliderRef: {},
    };

    this.setSliderRef = this.setSliderRef.bind(this);
    this.goToSlideNumber = this.goToSlideNumber.bind(this);
  }
  setSliderRef (ref) {
    this.setState({sliderRef: ref});
  }

  goToSlideNumber (e) {
    this.state.sliderRef.slickGoTo(e.currentTarget.dataset.slideNumber);
  }

  render () {
    return (
    <section className='catalog'>
      <NavBar goToSlideNumber={this.goToSlideNumber}/>
      <div className='catalog__contentContainer'>
        <CatalogSlider setSliderRef={this.setSliderRef}
          data={ItemsJSON}
          sliderClassName='catalog__slider'
          buttonBGColor='#D9F3EB'
          prevClassName='catalog__sliderButton'
          nextClassName='catalog__sliderButton catalog__sliderButton--next'
          editButton={true}/>
        <a className='slider__link--goToCatalog link' href='#' rel='noopener noreferrer'>Перейти в каталог</a>
      </div>
    </section>
    );
  }
}

/* Секция с кнопками-категориями */
function NavBar (props) {
  const Buttons = ItemsJSON.map((data, i) => {
    let {text, img} = data.button;
    return (
      <Button key={i} text={text} img={img} 
      slideNumber={i}
      goToSlideNumber={props.goToSlideNumber}/>
    );
  });
  return (
    <div className='catalog__navbar navbar'>
      {Buttons}
    </div>
  );
}

function Button (props) {
  return (
    <button className='navbar__button button' data-slide-number={props.slideNumber}
    onClick={props.goToSlideNumber}>
      <div className='navbar__icon'>
        <div className='navbar__iconBG'></div>
          {props.img && 
            <div className='navbar__ButtonImg' style={{backgroundImage: `url(${props.img})`}}></div>}
      </div>
  <p className='navbar__buttonText'>{props.text}</p>
    </button>
  );
}