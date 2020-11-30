import catalogNavbarIcon1 from '../static/catalogNavbarIcon1.png';
import ItemImg1 from '../static/ItemImg1.png';
import ItemImg2 from '../static/ItemImg2.png';

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