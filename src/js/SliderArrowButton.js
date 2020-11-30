import React from 'react';
import ChevronIcon from './ChevronIcon.js';

export default function Arrow (props) {
  return (
    <button className={'button slider__button ' + props.className} onClick={props.onClick}>
      <div className="slider__buttonBG" style={{"backgroundColor": props.bgColor}}></div>
      <ChevronIcon/>
    </button>
  );
}