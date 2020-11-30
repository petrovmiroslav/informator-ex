import React from 'react';
import Accordion from './Accordion.js'
import HeroSlider from './HeroSlider';
import CatalogSlider from './CatalogSlider.js'
import ItemsListJSON from './ItemsListJSON.js';
import AdsData from './AdsData.js';
import ListData from './ListData.js';


ListData.forEach((group, groupIndex) => {
  if (!group.list) return;
  group.list = group.list.map((item, i) => {
    return (
      <ListItem key={i}
        groupIndex={groupIndex} 
        inputIndex={i} 
        text={item}/>
    );
  });
});
export default class ListSection extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      sliderRef: {},
    };
    this.ListData = ListData;
    this.setSliderRef = this.setSliderRef.bind(this);
  }

  setSliderRef (ref) {
    this.setState({sliderRef: ref});
  }

  render () {
    return (
      <section className='listSection'>
        <div className='listSection__inner'>
          <div className='listSection__content'>
            <div className='listSection__list collapsedList'>
              <Accordion data={this.ListData}/>
            </div>
            <div className='listSection__slides'>
              <HeroSlider 
                data={AdsData}
                sliderClassName='listSection__adsSlider'
                slidesClassName='listSection__adsSlides'
                prevClassName='listSection__adsButton--prev'
                nextClassName='listSection__adsButton--next'/>
              <CatalogSlider setSliderRef={this.setSliderRef}
                data={ItemsListJSON}
                sliderClassName='listSection__itemsSlider'
                prevClassName='listSection__itemsButton--prev'
                nextClassName='listSection__itemsButton--next'/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function ListItem (props) {
  let id = 'input' + props.groupIndex + props.inputIndex;
  let defaultChecked = (props.groupIndex === 0 && props.inputIndex === 0);
  return (
    <>
    <input type='radio' defaultChecked={defaultChecked}
      className='input visuallyhidden list__input'
      id={id}
      name='List'
      value={props.text}/>
    <label className="button list__label" htmlFor={id}>
      {props.text}
    </label>
    </>
  );
}

