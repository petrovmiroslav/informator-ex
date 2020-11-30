import catalogNavbarIcon1 from '../static/catalogNavbarIcon1.png';
import ItemImg1 from '../static/ItemImg1.png';
import ItemImg2 from '../static/ItemImg2.png';
import ItemImg3 from '../static/ItemPlug3.svg';
import ItemImg4 from '../static/ItemImg4.png';
import ItemImg6 from '../static/ItemImg6.png';
import ItemImg7 from '../static/ItemImg7.png';
import AdsBG from '../static/AdsBG.svg';

let items = [
  { "label":"new",
    "daysLeft":59,
    "dark":false,
    "price":900000,
    "priceChange":-1,
    "priceValue":250000000,
    "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
  },
  { "img":ItemImg1,
    "label":"bestPrice",
    "daysLeft":59,
    "price":306000,
    "priceChange":1,
    "priceValue":250000000,
    "description":"Земельный участок для индивидуального жилищного строительства, кадастровый № 31:15:0204011:29",
    "category":"Имущество организаций и ИП • Аукцион"
  },
  { "img":ItemImg2,
    "daysLeft":0,
    "price":0,
    "priceChange":0,
    "priceValue":0,
    "description":"Автомобиль MITSUBISHI, модель","category":"Банкротные торги"
  },
  { "img":ItemImg3,
    "daysLeft":59,
    "dark":true,
    "price":900000,
    "priceChange":-1,
    "priceValue":250000000,
    "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
  },
  { "img":ItemImg4,
    "daysLeft":59,
    "price":295500000,
    "priceChange":1,
    "priceValue":250000000,
    "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
  },
  { "isAds": true,
    "adsBG": AdsBG,
    "text": "500 000 активных лотов"
  },
  { "img":ItemImg6,
    "daysLeft":59,
    "price":295500000,
    "priceChange":1,
    "priceValue":250000000,
    "description":"Земельный участок, общей площадью 54 100 кв. м., кадастровый номер: 50:31:0060219:16, Земельный...","category":"Банкротные имущество • Аукцион"
  },
  {"img":ItemImg7,
    "daysLeft":59,
    "price":295500000,
    "priceChange":1,
    "priceValue":250000000,
    "description":"Автомобиль MITSUBISHI, модель GRANDIS 2.4 6-SEATER, год выпуска 2004 г, VIN JMBLRNA4W4Z002340, ПТС 77 ТС...","category":"Банкротные имущество • Аукцион"
  }
];
export default [ 
  {
    "button": {
      "text": "Транспорт",
      "img": catalogNavbarIcon1
    },
    "items": [
      { "label":"new",
        "daysLeft":59,
        "dark":false,
        "price":900000,
        "priceChange":-1,
        "priceValue":250000000,
        "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
      },
      { "img":ItemImg1,
        "label":"bestPrice",
        "daysLeft":59,
        "price":306000,
        "priceChange":1,
        "priceValue":250000000,
        "description":"Земельный участок для индивидуального жилищного строительства, кадастровый № 31:15:0204011:29",
        "category":"Имущество организаций и ИП • Аукцион"
      },
      { "img":ItemImg2,
        "daysLeft":0,
        "price":0,
        "priceChange":0,
        "priceValue":0,
        "description":"Автомобиль MITSUBISHI, модель","category":"Банкротные торги"
      },
      { "img":ItemImg3,
        "daysLeft":59,
        "dark":true,
        "price":900000,
        "priceChange":-1,
        "priceValue":250000000,
        "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
      },
      { "img":ItemImg4,
        "daysLeft":59,
        "price":295500000,
        "priceChange":1,
        "priceValue":250000000,
        "description":"Торги по реализации имущества Шелевестера Максима Валерьевича: Транспортное средство Марка, модель- INFINIT...","category":"Банкротные имущество • Аукцион"
      },
      { "isAds": true,
        "adsBG": AdsBG,
        "text": "500 000 активных лотов"
      },
      { "img":ItemImg6,
        "daysLeft":59,
        "price":295500000,
        "priceChange":1,
        "priceValue":250000000,
        "description":"Земельный участок, общей площадью 54 100 кв. м., кадастровый номер: 50:31:0060219:16, Земельный...","category":"Банкротные имущество • Аукцион"
      },
      {"img":ItemImg7,
        "daysLeft":59,
        "price":295500000,
        "priceChange":1,
        "priceValue":250000000,
        "description":"Автомобиль MITSUBISHI, модель GRANDIS 2.4 6-SEATER, год выпуска 2004 г, VIN JMBLRNA4W4Z002340, ПТС 77 ТС...","category":"Банкротные имущество • Аукцион"
      }
    ]
  },
  {
    "button": {
      "text": 'Недвижимость',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Земельные участки',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Спецтехника',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Сельхоз- техника',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Дебиторская задолженность',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Кредитные портфели',
    },
    "items": items
  },
  {
    "button": {
      "text": 'Готовый бизнес',
    },
    "items": items
  }
];