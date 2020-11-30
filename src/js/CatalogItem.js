import React from 'react';

export default function Item (props) {
  let isFinished = false;
  if (props.daysLeft < 1) {
    isFinished = true;
  }
  return (
    <div className='slider__item item'>
      <PhotoSection {...{...props, isFinished: isFinished}}/>
      <Description {...{...props, isFinished: isFinished}}/>
    </div>
  );
}

/* Секция с фото */
function PhotoSection (props) {
  let finished = props.isFinished,
      text = 'Торги окончены';
  if (!finished) {
    text = props.daysLeft + ' дней до подачи заявки';
  }
  return (
    <div className='item__photoSection'>
      {props.img && 
        <img className='item__img' src={props.img} alt='Фотография лота'/>}
      {props.dark ||
        <> 
        <div className='item__angle item__angle--top'></div>
        <div className='item__angle item__angle--bottom'></div>
        </>
      }
      {props.label && <Label label={props.label}/>}
      <FavoritesItemIcon dark={props.dark}/>
      <div className='item__time'>
        <div className='item__timeIndicator'>
          {finished
            ? <IndicatorCircleFull dark={props.dark}/>
            : <IndicatorCircle dark={props.dark}/>}
        </div>
        <p className={
          props.dark
            ? 'item__timeText item__timeText--dark'
            : 'item__timeText'}>{text}</p>
      </div>
    </div>
  );
}

function IndicatorCircle (props) {
  return (
    <svg className={
      props.dark
        ? 'item__timeIndicatorIcon item__timeIndicatorIcon--dark'
        : 'item__timeIndicatorIcon'} width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.3" cx="7.5" cy="8.5" r="6.75" stroke="white" strokeWidth="1.5"/>
      <path d="M4.34603 14.4417C5.21496 14.9434 6.19207 15.2308 7.2019 15.2819C8.21173 15.333 9.22727 15.1463 10.1701 14.7363C11.113 14.3262 11.9579 13.7038 12.6397 12.9171C13.3214 12.1304 13.8218 11.2004 14.1021 10.1989C14.3825 9.1974 14.4353 8.15124 14.2565 7.14118C14.0777 6.13112 13.672 5.18418 13.0709 4.37347C12.4698 3.56277 11.6892 2.90998 10.7895 2.46552C9.88976 2.02106 8.89496 1.79681 7.88188 1.81009" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}
function IndicatorCircleFull (props) {
  return (
    <svg className={
      props.dark
        ? 'item__timeIndicatorIcon item__timeIndicatorIcon--dark'
        : 'item__timeIndicatorIcon'} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.5" cy="7.5" r="6.75" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
}

function FavoritesItemIcon (props) {
  return (
    <svg className={
      props.dark
        ? 'item__favoritesItemIcon item__favoritesItemIcon--dark'
        : 'item__favoritesItemIcon'} width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 14C8.25798 14 8.02465 13.9188 7.84281 13.7714C7.15605 13.2156 6.49393 12.6932 5.90977 12.2324L5.90678 12.23C4.1941 10.879 2.71513 9.71231 1.6861 8.56301C0.535789 7.27817 0 6.05996 0 4.72914C0 3.43613 0.478981 2.24325 1.34862 1.37008C2.22863 0.486588 3.43613 0 4.74908 0C5.73039 0 6.62908 0.287175 7.42012 0.85348C7.81934 1.13933 8.1812 1.48918 8.5 1.89725C8.81893 1.48918 9.18066 1.13933 9.58001 0.85348C10.371 0.287175 11.2697 0 12.251 0C13.5639 0 14.7715 0.486588 15.6515 1.37008C16.5211 2.24325 17 3.43613 17 4.72914C17 6.05996 16.4643 7.27817 15.314 8.56289C14.285 9.71231 12.8062 10.8789 11.0937 12.2298C10.5085 12.6913 9.84538 13.2145 9.15706 13.7717C8.97535 13.9188 8.74189 14 8.5 14ZM4.74908 0.921792C3.71758 0.921792 2.77 1.30285 2.08064 1.99485C1.38104 2.6973 0.995705 3.66832 0.995705 4.72914C0.995705 5.84842 1.44511 6.84945 2.45275 7.97486C3.42667 9.06269 4.87528 10.2054 6.55256 11.5285L6.55567 11.5309C7.14204 11.9935 7.80676 12.5179 8.49857 13.0778C9.19454 12.5168 9.86029 11.9916 10.4478 11.5283C12.125 10.2051 13.5735 9.06269 14.5474 7.97486C15.5549 6.84945 16.0043 5.84842 16.0043 4.72914C16.0043 3.66832 15.619 2.6973 14.9194 1.99485C14.2301 1.30285 13.2824 0.921792 12.251 0.921792C11.4954 0.921792 10.8017 1.14414 10.1891 1.58258C9.64317 1.97348 9.26289 2.46764 9.03994 2.8134C8.92529 2.9912 8.72347 3.09733 8.5 3.09733C8.27653 3.09733 8.07471 2.9912 7.96006 2.8134C7.73724 2.46764 7.35696 1.97348 6.81092 1.58258C6.19835 1.14414 5.50459 0.921792 4.74908 0.921792Z" fill="white"/>
    </svg>
  );
}

function Label (props) {
  let icon;
  if (props.label === 'new') {
    icon = <LabelNew/>;
  }
  if (props.label === 'bestPrice') {
    icon = <LabelBestPrice/>
  }
  return icon;
}

function LabelNew (props) {
  return (
    <svg className="item__label" width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="21" r="20" fill="url(#paint0_linear)"/>
      <circle cx="42" cy="15" r="15" fill="url(#paint1_linear)"/>
      <path d="M14.48 14.64H11.32V11.86H9.83V19H11.32V16.01H14.48V19H15.97V11.86H14.48V14.64ZM18.193 12.77C17.583 13.46 17.283 14.34 17.283 15.43C17.283 16.52 17.583 17.41 18.193 18.1C18.803 18.79 19.663 19.13 20.763 19.13C21.863 19.13 22.713 18.79 23.323 18.1C23.933 17.41 24.243 16.52 24.243 15.43C24.243 14.34 23.933 13.46 23.323 12.77C22.713 12.08 21.863 11.73 20.763 11.73C19.663 11.73 18.803 12.08 18.193 12.77ZM19.303 17.14C18.973 16.7 18.813 16.13 18.813 15.43C18.813 14.73 18.973 14.16 19.303 13.72C19.633 13.28 20.123 13.06 20.763 13.06C21.403 13.06 21.883 13.28 22.213 13.72C22.543 14.16 22.713 14.73 22.713 15.43C22.713 16.13 22.543 16.7 22.213 17.14C21.883 17.58 21.403 17.8 20.763 17.8C20.123 17.8 19.633 17.58 19.303 17.14ZM30.5324 15.16C30.9824 14.92 31.2624 14.39 31.2624 13.75C31.2624 13.21 31.0624 12.76 30.6524 12.4C30.2424 12.04 29.6624 11.86 28.9124 11.86H25.5624V19H29.0024C30.6324 19 31.4624 18.18 31.4624 16.93C31.4624 16.25 31.0524 15.65 30.5324 15.42V15.16ZM27.0524 14.69V13.1H28.7224C29.3924 13.1 29.7324 13.36 29.7324 13.89C29.7324 14.42 29.4024 14.69 28.7324 14.69H27.0524ZM27.0524 17.73V15.94H28.8024C29.5524 15.94 29.9324 16.24 29.9324 16.85C29.9324 17.44 29.5524 17.73 28.7824 17.73H27.0524ZM39.2188 19H40.7088V11.86H39.2188V19ZM34.2888 17.69V15.59H35.5488C36.5088 15.59 36.8988 15.95 36.8988 16.64C36.8988 17.35 36.5088 17.69 35.5488 17.69H34.2888ZM35.7788 19C37.4488 19 38.4288 18.11 38.4288 16.63C38.4288 15.16 37.4488 14.28 35.7788 14.28H34.2888V11.86H32.7988V19H35.7788ZM42.3593 19H44.2993L46.9293 13.91H47.1893V19H48.5893V11.86H46.5793L44.0093 16.84H43.7493V11.86H42.3593V19ZM46.2593 9.96C46.2093 10.33 45.9393 10.58 45.4693 10.58C44.9993 10.58 44.7193 10.32 44.6793 9.96H43.5793C43.6593 10.92 44.3493 11.5 45.4693 11.5C46.5893 11.5 47.2793 10.92 47.3593 9.96H46.2593ZM9.21 31H9.47C10.52 31 11.18 30.8 11.6 29.92C11.84 29.33 11.99 28.44 11.99 27.12V25.19H14.31V31H15.81V23.86H10.58V27.02C10.58 28.53 10.4 29.19 10.11 29.39C9.97 29.49 9.75 29.54 9.46 29.54H9.21V31ZM18.027 24.77C17.417 25.46 17.117 26.34 17.117 27.43C17.117 28.52 17.417 29.41 18.027 30.1C18.637 30.79 19.497 31.13 20.597 31.13C21.697 31.13 22.547 30.79 23.157 30.1C23.767 29.41 24.077 28.52 24.077 27.43C24.077 26.34 23.767 25.46 23.157 24.77C22.547 24.08 21.697 23.73 20.597 23.73C19.497 23.73 18.637 24.08 18.027 24.77ZM19.137 29.14C18.807 28.7 18.647 28.13 18.647 27.43C18.647 26.73 18.807 26.16 19.137 25.72C19.467 25.28 19.957 25.06 20.597 25.06C21.237 25.06 21.717 25.28 22.047 25.72C22.377 26.16 22.547 26.73 22.547 27.43C22.547 28.13 22.377 28.7 22.047 29.14C21.717 29.58 21.237 29.8 20.597 29.8C19.957 29.8 19.467 29.58 19.137 29.14ZM24.6678 23.86V25.17H26.8878V31H28.3778V25.17H30.5978V23.86H24.6678Z" fill="white"/>
      <defs>
      <linearGradient id="paint0_linear" x1="0.756115" y1="4.6565" x2="40.8311" y2="5.59734" gradientUnits="userSpaceOnUse">
      <stop stopColor="#13B17C"/>
      <stop offset="1" stopColor="#0099CC"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="27.5671" y1="2.74238" x2="57.6234" y2="3.448" gradientUnits="userSpaceOnUse">
      <stop stopColor="#13B17C"/>
      <stop offset="1" stopColor="#0099CC"/>
      </linearGradient>
      </defs>
    </svg>
  );
}
function LabelBestPrice (props) {
  return (
    <svg className="item__label" width="61" height="40" viewBox="0 0 61 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="url(#paint0_linearLabelBestPrice)"></circle><circle cx="44.5" cy="18.5" r="16.5" fill="url(#paint1_linearLabelBestPrice)"></circle><path d="M9.21 18H9.47C10.52 18 11.18 17.8 11.6 16.92C11.84 16.33 11.99 15.44 11.99 14.12V12.19H14.31V18H15.81V10.86H10.58V14.02C10.58 15.53 10.4 16.19 10.11 16.39C9.97 16.49 9.75 16.54 9.46 16.54H9.21V18ZM18.297 10.86H16.737L19.377 15.86L18.357 18H19.847L23.267 10.86H21.757L20.247 14.06H19.967L18.297 10.86ZM23.9734 13.13C23.9734 13.69 23.9734 13.96 24.1634 14.41C24.2634 14.64 24.4034 14.81 24.5734 14.94C24.9334 15.19 25.6234 15.41 26.5934 15.41C27.1634 15.41 27.6934 15.35 28.1834 15.24V18H29.6734V10.86H28.1834V13.92C27.7734 14.03 27.3634 14.08 26.9534 14.08C26.0634 14.08 25.7034 13.87 25.5634 13.56C25.4534 13.31 25.4634 13.21 25.4634 12.9V10.86H23.9734V13.13ZM32.7741 16.67V10.86H31.3241V18H40.1941V10.86H38.7441V16.67H36.4841V10.86H35.0341V16.67H32.7741ZM48.0517 18L45.7717 10.86H43.4617L41.1917 18H42.6617L43.2417 16.07H45.9617L46.5417 18H48.0517ZM44.8117 12.29L45.5617 14.77H43.6217L44.3717 12.29H44.8117ZM51.2485 10.86C49.6785 10.86 48.7385 11.69 48.7385 13.08C48.7385 13.98 49.0885 14.62 49.7985 14.99L48.7285 18H50.2285L51.1885 15.31H53.1185V18H54.6085V10.86H51.2485ZM51.4585 14.04C50.6585 14.04 50.2585 13.73 50.2585 13.1C50.2585 12.43 50.6385 12.17 51.6085 12.17H53.1185V14.04H51.4585ZM16.87 31.75V28.67H15.85V22.86H14.36V28.67H11.32V22.86H9.83V30H15.42V31.75H16.87ZM19.4255 26.99H22.3755V25.69H19.4255V24.19H23.2155V22.86H17.9355V30H23.3255V28.67H19.4255V26.99ZM29.2456 25.64H26.0856V22.86H24.5956V30H26.0856V27.01H29.2456V30H30.7356V22.86H29.2456V25.64ZM38.5986 30L36.3186 22.86H34.0086L31.7386 30H33.2086L33.7886 28.07H36.5086L37.0886 30H38.5986ZM35.3586 24.29L36.1086 26.77H34.1686L34.9186 24.29H35.3586Z" fill="white"></path><defs><linearGradient id="paint0_linearLabelBestPrice" x1="0.756115" y1="3.6565" x2="40.8311" y2="4.59734" gradientUnits="userSpaceOnUse"><stop stopColor="#FC5555"></stop><stop offset="1" stopColor="#C800CC"></stop></linearGradient><linearGradient id="paint1_linearLabelBestPrice" x1="28.6238" y1="5.01661" x2="61.6857" y2="5.7928" gradientUnits="userSpaceOnUse"><stop stopColor="#FC5555"></stop><stop offset="1" stopColor="#C800CC"></stop></linearGradient></defs></svg>
  );
}


/*Секция с описанием и ценой */
function Description (props) {
  return (
    <div className='item__descriptionSection'>
      <div className='item__content'>
        <PriceBlock 
          daysLeft={props.daysLeft}
          price={props.price}
          priceChange={props.priceChange}
          priceValue={props.priceValue}/>
        <p className={
          props.isFinished
            ? 'item__description item__description--through'
            : 'item__description'}>
          {props.description}
        </p>
      </div>
      <p className='item__category'>
        {props.category}
      </p>
    </div>
  );
}

function PriceBlock (props) {
  if (props.daysLeft < 1) {
    return (
      <p className='item__price item__priceValue--bold item__priceValue--sold'>Продано</p>
    );
  }
  function formatNumber (num) {
    return new Intl.NumberFormat('ru-RU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'symbol',
    }).format(num);
  }
  const priceValue = formatNumber (props.priceValue);
  const price = formatNumber (props.price);
  return (
    <div className='item__priceBlock'>
      <div className='item__priceAndIcon'>
        <p className='item__price item__priceValue--bold'>{price}</p>
        <PriceIcon priceChange={props.priceChange}/>
      </div>
      <p className='item__price item__priceValue'>{priceValue}</p>
    </div>
  );
}

function PriceIcon (props) {
  let icon;
  if (props.priceChange > 0) {
    icon = (
      <svg className='item__priceIcon item__priceIcon--up' width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.666 5.83325L5.33268 0.499918L-0.00065136 5.83325L10.666 5.83325Z" fill="#13B17C"/>
      </svg>

    );
  }
  if (props.priceChange < 0) {
    icon = (
      <svg className='item__priceIcon' width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0L5.33333 5.33333L10.6667 0L0 0Z" fill="#FC5555"/>
      </svg>
    );
  }
  return icon;
}