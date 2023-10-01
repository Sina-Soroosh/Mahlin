const data = {
  aboutUsImages: [
    {
      id: 1,
      url: "/images/about-us/1.jpg",
      title: "طعم تلخ و شیرین قهوه را با بچشید",
    },
    { id: 2, url: "/images/about-us/2.jpg", title: "8 میز دنج برای رزرو" },
    {
      id: 3,
      url: "/images/about-us/3.jpg",
      title:
        "شما گیاهخوار هستید؟ مشکلی نیست ما ده ها غذا برای شما آماده کرده ایم",
    },
    {
      id: 4,
      url: "/images/about-us/4.jpg",
      title: "طعم پاستا کلاسیک را با رستوران ما مزه کنید",
    },
    { id: 5, url: "/images/about-us/5.jpg", title: "شیرینی میوه ای" },
    {
      id: 6,
      url: "/images/about-us/6.jpg",
      title: "با برگ های ریحون و گوجه فرنگی گیلاسی",
    },
    { id: 7, url: "/images/about-us/7.jpg", title: "چیز برگر ویژه ما" },
    {
      id: 8,
      url: "/images/about-us/8.jpg",
      title: "بهترین مواد برای بهترین سوپ ما",
    },
    {
      id: 9,
      url: "/images/about-us/9.jpg",
      title: "از بیش 400 نوشیدنی ما انتخاب کنید",
    },
  ],
  foods: [
    {
      id: 1,
      title: "صبحانه",
      shortName: "breakfast",
      items: [
        { id: 1, title: "نیم رو", desc: "با بیکن و سالاد سزار", price: 21 },
        {
          id: 2,
          title: "صبحانه با کربوهیدرات کم",
          desc: "مرغ سوخاری با سبزیجات",
          price: 13,
        },
        {
          id: 3,
          title: "ویژه سرآشپز",
          desc: "با میوه تازه، بیکن و شربت پرتغال",
          price: 16,
        },
        {
          id: 4,
          title: "نان فانتزی",
          desc: "با مایه سالمون، پنیر خامه ای و سالسا",
          price: 9,
        },
        {
          id: 5,
          title: "نان تست فرانسوی",
          desc: "با دنت شکلاتی و میوه تازه",
          price: 17,
        },
        {
          id: 6,
          title: "پنکیک آمریکایی",
          desc: "با سس شکلات و عسل",
          price: 21,
        },
      ],
      isDrink: 0,
    },
    {
      id: 2,
      title: "ناهار",
      shortName: "lunch",
      items: [
        { id: 1, title: "جوجه تند", desc: "با زعفران و مایه مخصوص", price: 28 },
        { id: 2, title: "شیرماهی", desc: "با سالاد کلم و خیارشور", price: 27 },
        {
          id: 3,
          title: "استیک گوشت",
          desc: "با قارچ و سیب زمینی سوخاری",
          price: 42,
        },
        {
          id: 4,
          title: "کباب ترکی",
          desc: "با سبزیجات مخصوص و نان فانتزی",
          price: 33,
        },
        {
          id: 5,
          title: "سینه اردک",
          desc: "با سالاد فصل و سس مخصوص",
          price: 35,
        },
        { id: 6, title: "کنتاکی", desc: "با سالاد سزار و سس خردل", price: 75 },
        {
          id: 7,
          title: "سیب زمینی سرخ شده",
          desc: "با سس گوجه فرنگی و رزماری دریایی",
          price: 22,
        },
        { id: 8, title: "همبرگر ویژه", desc: "با سالاد و نون گرد", price: 22 },
      ],
      isDrink: 0,
    },
    {
      id: 3,
      title: "سرد",
      shortName: "drink-cold",
      items: [
        { id: 1, title: "نوشابه سون", desc: "با یخ و لیوان بزگ", price: 8 },
        { id: 2, title: "نوشابه مشکی", desc: "با یخ و لیوان بزگ", price: 8 },
        { id: 3, title: "نوشابه نارنجی", desc: "با یخ و لیوان بزگ", price: 8 },
        { id: 4, title: "دوغ محلی", desc: "با یخ و نعنا", price: 9 },
        { id: 5, title: "دوغ خانواده", desc: "با یخ و پونه", price: 7 },
        { id: 6, title: "موهیتو", desc: "با یخ و لیمو اضافی", price: 15 },
        { id: 7, title: "خاکشیر", desc: "با یخ و گلاب", price: 14 },
      ],
      isDrink: 1,
    },
    {
      id: 4,
      title: "گرم",
      shortName: "drink-warm",
      items: [
        { id: 1, title: "قهوه ترک", desc: "", price: 8 },
        { id: 2, title: "موکا چینو", desc: "", price: 9 },
        { id: 3, title: "کافه لاته", desc: "", price: 4 },
        { id: 4, title: "موکا مخصوص", desc: "", price: 9 },
        { id: 5, title: "کاپوچینو", desc: "", price: 8 },
        { id: 6, title: "نسکافه", desc: "", price: 5 },
        { id: 7, title: "هات چاکلت", desc: "", price: 6 },
        { id: 8, title: "قهوه کوبایی", desc: "", price: 5 },
        { id: 9, title: "شیرکاکائو", desc: "", price: 3 },
        { id: 10, title: "دارک چاکلت", desc: "", price: 6 },
        { id: 11, title: "اسپرسو", desc: "", price: 6 },
        { id: 12, title: "قهوه اسپیشال", desc: "", price: 10 },
      ],
      isDrink: 1,
    },
  ],
  addresses: [
    {
      id: 1,
      city: "شیراز",
      address: "شیراز، خیابان ستارخان فرعی ۶، کوچه شقایقی",
      phone: "12 34 567 (071)",
    },
    {
      id: 2,
      city: "تهران",
      address: "تهران، فرشته، فرعی 3 خیابان ۱۰، کوچه صیادی",
      phone: "12 34 567 (021)",
    },
    {
      id: 3,
      city: "مشهد",
      address: " مشهد، بلوار سجاد، کوچه دقایقی پلاک ۱",
      phone: "12 34 567 (051)",
    },
    {
      id: 4,
      city: "قم",
      address: "قم، سالاریه، فلکه میثم، کوچه نیلوفر، ساختمان عصر",
      phone: "12 34 567 (025)",
    },
  ],
};

export default data;
