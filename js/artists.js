const artistsBio = [
  {
    name: 'Доменико Гирландайо',
    img: 'img/Domenico.jpg',
    date: '2 июня 1448 — 11 января 1494.',
    bio: 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)'
  },
  {
    name: 'Андреа Верроккьо',
    img: 'img/verrokkio.jpg',
    date: '1435 — 10 октября 1488.',
    bio: 'Выдающийся итальянский скульптор, живописец и ювелир эпохи Возрождения. Учитель Леонардо да Винчи, Сандро Боттичелли, Пьетро Перуджино.'
  },
  {
    name: 'Веккьетта',
    img: 'img/gallery_img_2.jpg',
    date: '2 июня 1448 — 11 января 1476.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Беноццо Гоццоли',
    img: 'img/gallery_img_1.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero. Labore, ex voluptates.'
  },
  {
    name: 'Граначчи, Франческо',
    img: 'img/gallery_img_3.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Грегорио ди Чекко',
    img: 'img/gallery_img_4.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero. Labore, ex voluptates.'
  },
  {
    name: 'Джованни да Удине',
    img: 'img/gallery_img_5.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Джованни ди Паоло',
    img: 'img/gallery_img_6.jpg',
    date: '2 июня 1448 — 11 января 1466.',
    bio: 'Lorem ipsum dolor sit amet. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Джорджоне',
    img: 'img/gallery_img_7.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Парентино, Бернардо',
    img: 'img/gallery_img_6.jpg',
    date: '2 июня 1448 — 11 января 1467.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consectetur adipisicing elit molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Пезеллино',
    img: 'img/gallery_img_5.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Пьетро Перуджино',
    img: 'img/gallery_img_4.jpg',
    date: '2 июня 1448 — 11 января 1487.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ex voluptates. Culpa molestiae reprehenderit dolorum delectus sit amet, consectetur adipisicing sit amet, consectetur adipisicing eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Перуцци, Бальдассаре',
    img: 'img/gallery_img_3.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor consectetur adipisicing sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus consectetur adipisicing eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Пизанелло',
    img: 'img/gallery_img_2.jpg',
    date: '2 июня 1448 — 11 января 1496.',
    bio: 'Lorem ipsum dolor sit molestiae reprehenderit dolorum amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus eveniet. Labore, ex molestiae reprehenderit dolorum voluptates.'
  },
  {
    name: 'Пинтуриккьо',
    img: 'img/gallery_img_1.jpg',
    date: '2 июня 1448 — 11 января 1449.',
    bio: 'Lorem ipsum dolor consectetur adipisicing elit sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus consectetur adipisicing elit eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Бенедетто ди Биндо',
    img: 'img/gallery_img_1.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero. Labore, ex voluptates.'
  },
  {
    name: 'Бергоньоне, Амброджо',
    img: 'img/gallery_img_3.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Биссоло, Франческо',
    img: 'img/gallery_img_4.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero. Labore, ex voluptates.'
  },
  {
    name: 'Больтраффио, Джованни',
    img: 'img/gallery_img_5.jpg',
    date: '2 июня 1448 — 11 января 1486.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Бонсиньори, Франческо',
    img: 'img/gallery_img_6.jpg',
    date: '2 июня 1448 — 11 января 1466.',
    bio: 'Lorem ipsum dolor sit amet. Culpa molestiae reprehenderit sint aperiam in rem suscipit, nulla quos deserunt totam deleniti vero, autem voluptatibus dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Боттичини, Рафаэлло',
    img: 'img/gallery_img_7.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Брамантино',
    img: 'img/gallery_img_6.jpg',
    date: '2 июня 1448 — 11 января 1467.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa consectetur adipisicing elit molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Бреа, Людовико',
    img: 'img/gallery_img_5.jpg',
    date: '2 июня 1448 — 11 января 1456.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa molestiae reprehenderit dolorum delectus eveniet. Labore, ex voluptates.'
  },
  {
    name: 'Бьяджо д’Антонио Туччи',
    img: 'img/gallery_img_4.jpg',
    date: '2 июня 1448 — 11 января 1487.',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ex voluptates. Culpa molestiae reprehenderit dolorum delectus sit amet, consectetur adipisicing sit amet, consectetur adipisicing eveniet. Labore, ex voluptates.'
  },
]
