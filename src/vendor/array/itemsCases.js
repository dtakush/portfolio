const itemsCases = [
    {
      key: "60",
      title: 'GigaChat',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/pRSBZxA.png',
      picLink: '/work/giga-chat',
    },
    {
      key: "62",
      title: 'Tate',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/6uDL93i.png',
      picLink: '/work/tate',
    },
    {
      key: "67",
      title: 'Сберегаем вместе',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/JxLWAly.png',
      picLink: '/work/sberegaem',
    },
    {
      key: "63",
      title: 'Ситидрайв',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/1qj3xrL.png',
      picLink: '/work/citydrive',
    },
    {
      key: "64",
      title: 'Самокат',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/tVBMUiZ.png',
      picLink: '/work/samokat',
    },
    {
      key: "61",
      title: 'СберСтрахование',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/aHVR0UU.png',
      picLink: '/work/sber-strahovaniye',
    },
    {
      key: "69",
      title: 'Плати Частями',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/MMpGQ1l.png',
      picLink: '/work/plati-chastyami',
    },
    {
      key: "68",
      title: 'СберСтрахование',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/zarYhFf.png',
      picLink: '/work/sberstrahovaniye',
    },
    {
      key: "57",
      title: 'Слобода',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/GJSD68j.png',
      picLink: '/work/sloboda',
    },
    {
      key: "26",
      title: 'Чай "Пауза"',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/EeDXr8B.png',
      picLink: '/work/pause-tea-pack',
    },
    {
      key: "58",
      title: 'Brand Ice',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/QbSKhcx.png',
      picLink: '/work/brand-ice',
    },
    {
      key: "65",
      title: 'Ажур&Балансир',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/qcgViW6.png',
      picLink: '/work/azhur',
    },
    {
      key: "27",
      title: 'Дом XXII',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/dNTjfxu.png',
      picLink: '/work/dom-22',
    },
    {
      key: "28",
      title: 'Mobiado',
      subtitle: 'Брендинг',
      picUrl: 'https://i.imgur.com/qJYzafD.png',
      picLink: '/work/mobiado-iphone',
    },
    {
      key: "59",
      title: 'Ворох дел',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/6B6QffF.png',
      picLink: '/work/voroh-del',
    },
    {
      key: "29",
      title: 'Свои',
      subtitle: 'Брендинг',
      picUrl: 'https://i.imgur.com/XZTAAi0.png',
      picLink: '/work/svoi',
    },
    {
      key: "55",
      title: 'Miele',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/nSBYJjO.png',
      picLink: '/work/miele',
    },
    {
      key: "30",
      title: 'Дезринит',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/jvNNRla.png',
      picLink: '/work/desrinit',
    },
    {
      key: "31",
      title: 'Mobiado',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/ryAYhaR.png',
      picLink: '/work/mobiado-outdoor',
    },
    {
      key: "32",
      title: 'MOVIE',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/4BAlbyZ.png',
      picLink: '/work/movie-video',
    },
    {
      key: "33",
      title: 'Долфин',
      subtitle: 'Брендинг',
      picUrl: 'https://i.imgur.com/o5Z138Z.png',
      picLink: '/work/dolfin',
    },
    {
      key: "34",
      title: 'Familia',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/xLBFxMR.png',
      picLink: '/work/familia-video',
    },
    {
      key: "35",
      title: 'HD Consulting',
      subtitle: 'Брендинг',
      picUrl: 'https://i.imgur.com/eaF2ZpT.png',
      picLink: '/work/hd',
    },
    {
      key: "36",
      title: 'St.Pet',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/txbUSg5.png',
      picLink: '/work/st-pet',
    },
    {
      key: "37",
      title: 'Boehringer Ingelheim',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/gLlSbGt.png',
      picLink: '/work/boehringer-ingelheim',
    },
    {
      key: "56",
      title: 'Amigo',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/SXtx08p.png',
      picLink: '/work/amigo',
    },
    {
      key: "38",
      title: 'Маяк',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/Sbh7r6P.png',
      picLink: '/work/mayak-video',
    },
    {
      key: "39",
      title: 'Заповедник "Волость"',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/Nif6aZs.png',
      picLink: '/work/volost',
    },
    /*{
      key: "52",
      title: 'Novo Nordisk',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/hqCVjLH.png',
      picLink: '/work/novo-nordisk',
    },
    {
      key: "40",
      title: 'Чистая линия',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/taNtkNU.png',
      picLink: '/work/clean-line',
    },*/
    {
      key: "41",
      title: 'Mobiado',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/KyKDdGv.png',
      picLink: '/work/mobiado-press',
    },

    {
      key: "53",
      title: 'Boiron',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/SCUpGSr.png',
      picLink: '/work/boiron-landing',
    },
    {
      key: "42",
      title: 'Frautest',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/QLfXFMA.png',
      picLink: '/work/frautest',
    },
    {
      key: "43",
      title: 'Чек-лист Instargam',
      subtitle: 'Иллюстрация',
      picUrl: 'https://i.imgur.com/JvQp4AU.png',
      picLink: '/work/check-list',
    },
    {
      key: "44",
      title: 'Stada',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/EY9WJC0.png',
      picLink: '/work/fungoterbin',
    },
    {
      key: "45",
      title: 'Aist Residence',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/PaQOo1k.png',
      picLink: '/work/aist-residence',
    },
    {
      key: "46",
      title: 'Сердце Столицы',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/VpJQkiY.png',
      picLink: '/work/serdce-stolitsy',
    },
    {
      key: "47",
      title: 'Alcon',
      subtitle: 'Пресса',
      picUrl: 'https://i.imgur.com/ycNtskp.png',
      picLink: '/work/alcon',
    },
    {
      key: "48",
      title: 'Долина Сетунь',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/m0lOwiq.png',
      picLink: '/work/dolina-setun',
    },
    {
      key: "49",
      title: 'MedInform',
      subtitle: 'Анимация',
      picUrl: 'https://i.imgur.com/zkSsq3k.png',
      picLink: '/work/hills-all-legs',
    },
    {
      key: "50",
      title: 'Клубный Дом на Рогожском',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/rHQvRaL.png',
      picLink: '/work/rogozhsky',
    },
    {
      key: "54",
      title: 'Баннеры Ремит',
      subtitle: 'Digital',
      picUrl: 'https://i.imgur.com/sBMRQ0p.png',
      picLink: '/work/remit-video',
    },
    {
      key: "51",
      title: 'Хорошёвский',
      subtitle: 'Outdoor',
      picUrl: 'https://i.imgur.com/RSOPWiM.png',
      picLink: '/work/horoshovsky',
    },

  ]

  export default itemsCases;