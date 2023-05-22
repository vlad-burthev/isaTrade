import React from "react";

const CoffeeContext = React.createContext({
  coffee: [
    {
      id: 1,
      photo: "./img/catalog/coffee/cherry.jpg",
      name: "Зернова кава Індія «Cherry»",
      sort: "Купаж арабіки та робусти",
      roast: "Середня ступінь обсмаження",
      strength: 3, // міцність
      description:
        "Має насичений бархатистий смак чорного шоколаду та аромат прянощів",
      taste: "",
      price: 35,
    },
    {
      id: 2,
      photo: "./img/catalog/coffee/columbia.jpg",
      name: "Зернова кава «Колумбія»",
      sort: "100% арабіки",
      roast: "Середня ступінь обсмаження",
      strength: 3, // міцність
      description:
        "Добре збалансована, з легкою цитрусовою кислинкою та солодкими фруктовими нотками",
      taste: "Післясмак какао та іриски",
      price: 72,
    },
    {
      id: 3,
      photo: "./img/catalog/coffee/brazil.jpg",
      name: "Зернова кава «Бразилія»",
      sort: "100% арабіки",
      roast: "Середня ступінь обсмаження",
      strength: 4, // міцність
      description: "Високий вміст кофеїну",
      taste:
        "Має оксамитову гіркуватість у поєднанні з легкою кислинкою та винним присмаком",
      price: 57,
    },
    {
      id: 4,
      photo: "./img/catalog/coffee/premium.jpg",
      name: "Зернова кава “Premium Crema” ",
      sort: "100% арабіки",
      roast: "Середня ступінь обсмаження",
      strength: 3, // міцність
      description:
        "Збалансована класична кава із незначною кислинкою з карамельно-горіховими нотками",
      taste: "",
      price: 62,
    },
    {
      id: 5,
      photo: "./img/catalog/coffee/mexico.jpg",
      name: "Зернова кава «Мексика»",
      sort: "100% арабіки",
      roast: "Середня ступінь обсмаження",
      strength: 3, // міцність
      description: "Має насичений шоколадний аромат з горіховими нотками",
      taste: "",
      price: 63,
    },
    {
      id: 6,
      photo: "./img/catalog/coffee/vietnam.jpg",
      name: "Зернова кава  «В’єтнам» ",
      sort: "Купаж арабіки та робусти",
      roast: "",
      strength: 3, // міцність
      description: "Має насичений аромат з переважанням горіхових відтінків",
      taste:
        "Кава виходить із майже відсутньою кислинкою та делікатною гірчинкою",
      price: 33,
    },
    {
      id: 7,
      photo: "./img/catalog/coffee/gonduras.jpg",
      name: "Зернова кава «Гондурас»",
      sort: "100% арабіка",
      roast: "",
      strength: 4, // міцність
      description:
        "Кава з регіонів Lempira, Santa Barbara характеризується: фруктовим ароматом, з нотками  темного шоколаду, горіха та какао.",
      taste:
        "Кава виходить із майже відсутньою кислинкою та делікатною гірчинкою",
      price: 63,
    },
  ],

  tea: [
    {
      id: 1,
      photo: "./img/catalog/tea/imperator.jpg",
      name: "Вибір Імператора",
      sort: "Чорний чай із цукатами апельсину, шипшини і каркаде",
      price: 82,
    },
    {
      id: 2,
      photo: "./img/catalog/tea/assam.jpg",
      name: "Ассам Намданг",
      sort: "Чорний Терпкий індійскьий чай",
      price: 70,
    },
    {
      id: 3,
      photo: "./img/catalog/tea/fruitBoom.jpg",
      name: "Фруктовий Бум",
      sort: "Фруктова суміш зі шматочками ананасу, папайї, манго, малини, брусники, шипшини",
      price: 75,
    },
    {
      id: 4,
      photo: "./img/catalog/tea/sausep.jpg",
      name: "Саусепчик",
      sort: "Чорний чай, вирощеного на Цейлоні з додаванням плодів саусепу",
      price: 78,
    },
    {
      id: 5,
      photo: "./img/catalog/tea/supreme.jpg",
      name: "Supreme Pekoe",
      sort: "Чорний цейлонський чай середньолистовий, без добавок",
      price: 75,
    },
    {
      id: 6,
      photo: "./img/catalog/tea/greychik.jpg",
      name: "Ерл Грейчик",
      sort: "Чорний цейлонський чай з бергамотом",
      price: 80,
    },
    {
      id: 7,
      photo: "./img/catalog/tea/malina.jpg",
      name: "Малина-троянда",
      sort: "Чорний араматизований чай. З трояндою, малиною та цукатами",
      price: 78,
    },
    {
      id: 8,
      photo: "./img/catalog/tea/poroh.jpg",
      name: "Зелений порох",
      sort: "Класичний зелений китайський чай",
      price: 65,
    },
    {
      id: 9,
      photo: "./img/catalog/tea/1001.jpg",
      name: "1001 Ніч",
      sort: "Бленд цейлинського чорного та китайського зеленого чайїв зш шматочками яблук, пелючтками і бутонами троянди, календули, сафлору і волошки",
      price: 82,
    },
    {
      id: 10,
      photo: "./img/catalog/tea/1002.jpg",
      name: "1002 Ночі",
      sort: "Бленд цейлинського чорного та китайського зеленого чайїв зі шматочками ананасу, пелюстками квітів мальви та китайської троянди",
      price: 75,
    },
    {
      id: 11,
      photo: "./img/catalog/tea/1003.jpg",
      name: "1003 Ночі",
      sort: "Бленд цейлинського чорного та китайського зеленого чайїв з квітами календули, пелюстками півонії та індійської троянди",
      price: 82,
    },
    {
      id: 12,
      photo: "./img/catalog/tea/star.jpg",
      name: "Зірка Сходу",
      sort: "Чорний чай із цедрою апельсину, шматочками персика та мальви",
      price: 75,
    },
    {
      id: 13,
      photo: "./img/catalog/tea/field.jpg",
      name: "Волошкове поле",
      sort: "Композиційна суміш чорного та зеленого чаїв. Із пелюстками волошки та шматочками полуниці",
      price: 78,
    },
    {
      id: 14,
      photo: "./img/catalog/tea/oolong.jpg",
      name: "Молочний оолонг",
      sort: "Дає світло зелений настій з тонким вершковим ароматом",
      price: 90,
    },
    {
      id: 15,
      photo: "./img/catalog/tea/garden.jpg",
      name: "Чарівний сад",
      sort: "Зелений чай зі шматочками папайі, ананасу, вишні, малини, пелюстки соняшника та червоної смородини",
      price: 90,
    },
    {
      id: 16,
      photo: "./img/catalog/tea/kiss.jpg",
      name: "Перший поцілунок",
      sort: "Зелений чай із шматочками суниці та пелюстками суданької троянди",
      price: 70,
    },
    {
      id: 17,
      photo: "./img/catalog/tea/shampanskoe.jpg",
      name: "Бризки шампанського",
      sort: "Чорний цейлонський чай із додаванням шматочків полуниці, волошки, чорної смородини",
      price: 78,
    },
    {
      id: 18,
      photo: "./img/catalog/tea/spokusa.jpg",
      name: "Спокуса",
      sort: "Зелений чай зі шматочками чорниці, ожини, суниці та волошки",
      price: 70,
    },
    {
      id: 19,
      photo: "./img/catalog/tea/sausep.jpg",
      name: "Саусепчик",
      sort: "Зелений чай із додаванням плодів саусепу",
      price: 78,
    },
    {
      id: 20,
      photo: "./img/catalog/tea/karkade.jpg",
      name: "Королівське каркаде",
      sort: "Червоний чай із сушених пелюсток суданської троянди",
      price: 49,
    },
    {
      id: 21,
      photo: "./img/catalog/tea/tuti.jpg",
      name: "Туті-фруті",
      sort: "Фруктова суміш зі шматочками дині, яблук, груші, папайї, абрикоса, персика, шипшини",
      price: 80,
    },
    {
      id: 22,
      photo: "./img/catalog/tea/sheih.jpg",
      name: "Скарби Шейха",
      sort: "Суміш вишуканих сортів білого, чорного та зеленого чаїв, із цукатами манго, ананаса, маракйї, суниці та квіткамимальви",
      price: 75,
    },
  ],
});

export default CoffeeContext;
