const Ad = [
    {
        id: 1,
        title_no: "Genser",
        title_en: "Sweaters",
        description_no: "Pent brukt genser til salgs",
        description_en: "Nicely worn sweater for sale",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Genser",
        subcategory_en: "Sweater",
        location: "Sandnes",
        price: 250,
        seller: {
            id: 1,
            name: "John Svelte",
            phone: 12345678
        },
        images: ["https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 2,
        title_no: "Toyota",
        title_en: "Toyota",
        description_no: "Pent brukt Toyota til salgs",
        description_en: "Well maintained Toyota Corolla for sale",
        category_no: "Biler",
        category_en: "Cars",
        subcategory_no: "Toyota",
        subcategory_en: "Toyota",
        location: "Stavanger",
        price: 150000,
        seller: {
            id: 2,
            name: "Alice Hansen",
            phone: 98765432
        },
        images: ["https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 3,
        title_no: "Bow rider",
        title_en: "Bow rider",
        description_no: "Pent brukt Bow rider til salgs",
        description_en: "Well maintained Bow Rider for sale",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Bow rider",
        subcategory_en: "Bow rider",
        location: "Bodø",
        price: 350000,
        seller: {
          id: 3,
          name: "Bob Tuskjebakken",
          phone: 34343434
        },
        images: ["https://upload.wikimedia.org/wikipedia/commons/d/db/BowriderJohnny.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 4,
        title_no: "Bukser",
        title_en: "Pants",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Bukser",
        subcategory_en: "Pants",
        location: "Kristiansand",
        price: 300,
        description_no: "Helt nye bukser til salgs",
        description_en: "Brand new pants for sale",
        seller: {
          id: 4,
          name: "Ola Normann",
          phone: 12731273
        },
        images: ["https://cdn.pixabay.com/photo/2013/07/25/11/52/clothes-166848_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 5,
        title_no: "Tyggeleke",
        title_en: "Chew toy",
        description_no: "Pent brukt tyggeleke for hund til salgs",
        description_en: "Nicely worn chew dog toy for sale",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Tygge",
        subcategory_en: "Chew",
        location: "Gjøvik",
        price: 100,
        seller: {
          id: 5,
          name: "Michael Brown",
          phone: 11111111
        },
        images: ["https://cdn.pixabay.com/photo/2013/07/26/11/50/dog-167663_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 6,
        title_no: "Sko",
        title_en: "Shoes",
        description_no: "Pent brukte sko til salgs",
        description_en: "Nicely worn shoes for sale",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Sko",
        subcategory_en: "Shoes",
        location: "Lillestrøm",
        price: 400,
        seller: {
          id: 6,
          name: "Sophia Lee",
          phone: 99988877
        },
        images: ["https://cdn.pixabay.com/photo/2014/09/03/20/15/shoes-434918_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 7,
        title_no: "Tesla",
        title_en: "Tesla",
        description_no: "1 år gammel Tesla til salgs. Selges da jeg ikke kjører så ofte.",
        description_en: "1 year old Tesla for sale. Selling as I dont drive very often.",
        category_no: "Biler",
        category_en: "Cars",
        subcategory_no: "Tesla",
        subcategory_en: "Tesla",
        location: "Svalbard",
        price: 600000,
        seller: {
          id: 7,
          name: "David Wilson",
          phone: 12398745
        },
        images: ["https://cdn.pixabay.com/photo/2020/01/20/20/39/car-4781370_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 8,
        title_no: "RIB",
        title_en: "RIB",
        description_no: "Velbrukt RIB selges. Denne har gitt oss svært mange gode minner, men pga sykdom i familien får vi ikke brukt den lenger.",
        description_en: "Well used RIB for sale. We have gotten many good memories, but due to illness in our family, we are not able to use it anymore.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "RIB",
        subcategory_en: "RIB",
        location: "Trondheim",
        price: 250000,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://cdn.pixabay.com/photo/2019/11/09/17/14/iceberg-4614041_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 9,
        title_no: "T-skjorte",
        title_en: "T-shirt",
        description_no: "Tskjorte selges.",
        description_en: "T-shirt for sale.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "T-skjorte",
        subcategory_en: "T-shirt",
        location: "Kristiansand",
        price: 200,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_1280.png", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 10,
        title_no: "Tennis ball",
        title_en: "Tennis ball",
        description_no: "Tennisball til salgs. Godt brukt som du kan se. Gi den til hunden din 👍",
        description_en: "Tennis ball for sale to save space. Well used as you can see. Give it to your dog 👍",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Tygge",
        subcategory_en: "Chew",
        location: "Oslo",
        price: 120,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://cdn.pixabay.com/photo/2014/01/26/00/03/tennis-251907_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 11,
        title_no: "Kjole",
        title_en: "Dress",
        description_no: "Fin kjole selges",
        description_en: "Nice dress for sale",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Kjole",
        subcategory_en: "Dress",
        location: "Oslo",
        price: 500,
        seller: {
          id: 8,
          name: "Anna Rosebakken",
          phone: 98712365
        },
        images: ["https://assets.vogue.com/photos/606254e3304b0bcadd6e382e/3:4/w_748%2Cc_limit/slide_.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 12,
        title_no: "Volvo",
        title_en: "Volvo",
        description_no: "2 år gammel Volvo selges",
        description_en: "2 year old Volvo for sale",
        category_no: "Biler",
        category_en: "Cars",
        subcategory_no: "Volvo",
        subcategory_en: "Volvo",
        location: "Stavanger",
        price: 180000,
        seller: {
          id: 9,
          name: "Olivia Anderson",
          phone: 55566677
        },
        images: ["https://cdn.pixabay.com/photo/2017/06/12/16/24/volvo-2396040_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 13,
        title_no: "Cabincruiser",
        title_en: "Cabincruiser",
        description_no: "Familiens troverdige cabincruiser skal selges. Denne har vært med oss i mange år og gitt oss kjempemange gode minner.",
        description_en: "Family's trusted cabincruiser is for sale. This boat has been with us for many years, creating countless wonderful memories.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Cabincruiser",
        subcategory_en: "Cabincruiser",
        location: "Trondheim",
        price: 450000,
        seller: {
          id: 4,
          name: "Ola Normann",
          phone: 12731273
        },
        images: ["https://images.finncdn.no/dynamic/1280w/2021/4/vertical-4/25/5/214/896/855_1890733302.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 14,
        title_no: "Jakke",
        title_en: "Jackets",
        description_no: "Stilige jakker til salgs. Perfekte for kjølige dager. En flott tillegg til garderoben.",
        description_en: "Stylish jackets for sale. Perfect for chilly days. A great addition to your wardrobe.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Jakker",
        subcategory_en: "Jackets",
        location: "Kristiansand",
        price: 600,
        seller: {
          id: 4,
          name: "Ola Normann",
          phone: 12731273
        },
        images: ["https://cdn.pixabay.com/photo/2017/10/06/04/32/jacket-2821961_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 15,
        title_no: "Tug",
        title_en: "Tug",
        description_no: "Lekebåt til salgs! Flott for barnas leketid. Gi barna dine en morsom opplevelse med denne treleken.",
        description_en: "Toy tugboat for sale! Great for children's playtime. Give your kids a fun experience with this wooden toy.",
        category_no: "Leker",
        category_en: "Toys",
        subcategory_no: "Båter",
        subcategory_en: "Boats",
        location: "Gjøvik",
        price: 150,
        seller: {
          id: 3,
          name: "Bob Tuskjebakken",
          phone: 34343434
        },
        images: ["https://cdn.pixabay.com/photo/2019/02/02/16/57/golden-retriever-3970969_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 16,
        title_no: "Shorts",
        title_en: "Shorts",
        description_no: "Shorts til salgs. Perfekt for sommeren. Lett og behagelig for de varme dagene.",
        description_en: "Shorts for sale. Perfect for summer. Lightweight and comfortable for those hot days.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Shorts",
        subcategory_en: "Shorts",
        location: "Oslo",
        price: 200,
        seller: {
          id: 3,
          name: "Bob Tuskjebakken",
          phone: 34343434
        },
        images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgGpuUhM1t_VxXEQOw_uz_hyJ0PE-Bm_S3YHQnZbtW4aS27v1jNyFtzS8hchZ6463Zow&usqp=CAU", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 17,
        title_no: "Underlag",
        title_en: "Inner-layer",
        description_no: "Isolert innerlag til salgs. Hold deg varm i vinterkulden med denne kvalitetsplagget.",
        description_en: "Insulated inner layer for sale. Stay warm in the winter cold with this high-quality garment.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Underlag",
        subcategory_en: "Inner-layer",
        location: "Stavanger",
        price: 350,
        seller: {
          id: 10,
          name: "Lucas Lee",
          phone: 99900011
        },
        images: ["https://dovre.com/cache/3/4/9/6/5/2/5/fit-1600x2000x100.webp", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 18,
        title_no: "Skistaver",
        title_en: "Poles",
        description_no: "Skistaver til salgs. Utmerket tilbehør for skientusiaster. Hold balansen i skisporet med disse stolte stavene.",
        description_en: "Ski poles for sale. Excellent accessory for skiing enthusiasts. Maintain your balance on the slopes with these sturdy poles.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Staver",
        subcategory_en: "Poles",
        location: "Trondheim",
        price: 250,
        seller: {
          id: 3,
          name: "Bob Tuskjebakken",
          phone: 34343434
        },
        images: ["https://cdn.pixabay.com/photo/2014/01/26/15/31/ski-poles-252250_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 19,
        title_no: "Slalombriller",
        title_en: "Goggles",
        description_no: "Ski- og snowboardbriller til salgs. Beskytt øynene dine i bakken. Klar sikt for den ultimate vintersportopplevelsen.",
        description_en: "Ski and snowboard goggles for sale. Protect your eyes on the slopes. Clear vision for the ultimate winter sports experience.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Briller",
        subcategory_en: "Goggles",
        location: "Kristiansand",
        price: 150,
        seller: {
          id: 4,
          name: "Ola Normann",
          phone: 12731273
        },
        images: ["https://cdn.pixabay.com/photo/2015/03/14/23/25/winter-673915_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
      },
      {
        id: 20,
        title_no: "Tau",
        title_en: "Rope",
        description_no: "Tau til salgs. Allsidig og sterkt tau. Perfekt for ulike formål, fra utendørsaktiviteter til hagearbeid.",
        description_en: "Rope for sale. Versatile and strong rope. Perfect for everything from outdoor activites to garden work.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Tau",
        subcategory_en: "Rope",
        location: "Gjøvik",
        price: 100,
        seller: {
          id: 11,
          name: "Sophie Martin",
          phone: 77799900
        },
        images: ["https://cdn.pixabay.com/photo/2017/03/08/01/19/chihuahua-2125691_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 21,
        title_no: "Mellomlag",
        title_en: "Mid-layer",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Mellomlag",
        subcategory_en: "Mid-layer",
        location: "Lillestrøm",
        price: 450,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://cdn.pixabay.com/photo/2018/09/28/12/54/fabric-3709238_1280.jpg", "https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 22,
        title_no: "Tyggeleke",
        title_en: "Chew toy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Tygge",
        subcategory_en: "Chew",
        location: "Kristiansand",
        price: 80,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 23,
        title_no: "Dinghy",
        title_en: "Dinghy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Dinghy",
        subcategory_en: "Dinghy",
        location: "Oslo",
        price: 180000,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 24,
        title_no: "Slalombriller",
        title_en: "Goggles",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Boats",
        subcategory_no: "Briller",
        subcategory_en: "Goggles",
        location: "Gjøvik",
        price: 120,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 25,
        title_no: "Bukser",
        title_en: "Pants",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Bukser",
        subcategory_en: "Pants",
        location: "Stavanger",
        price: 280,
        seller: {
            id: 12,
            name: "Ava Smith",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 26,
        title_no: "Plysjleke",
        title_en: "Plush toy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Plysj",
        subcategory_en: "Plush",
        location: "Trondheim",
        price: 180,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 27,
        title_no: "Opel",
        title_en: "Opel",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Biler",
        category_en: "Cars",
        subcategory_no: "Opel",
        subcategory_en: "Opel",
        location: "Kristiansand",
        price: 220000,
        seller: {
            id: 13,
            name: "Olivia Anderson",
            phone: 55577788
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 28,
        title_no: "Henteleke",
        title_en: "Fetch toy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Hente",
        subcategory_en: "Fetch",
        location: "Gjøvik",
        price: 110,
        seller: {
            id: 14,
            name: "Lucas Lee",
            phone: 77700011
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 29,
        title_no: "Ski",
        title_en: "Skis",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Ski",
        subcategory_en: "Skis",
        location: "Oslo",
        price: 600,
        seller: {
            id: 15,
            name: "Sophia Martinez",
            phone: 12399988
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 30,
        title_no: "Interaktiv",
        title_en: "Interactive",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Interaktiv",
        subcategory_en: "Interactive",
        location: "Lillestrøm",
        price: 140,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 31,
        title_no: "Daycruiser",
        title_en: "Daycruiser",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Daycruiser",
        subcategory_en: "Daycruiser",
        location: "Svalbard",
        price: 420000,
        seller: {
            id: 16,
            name: "Harper Smith",
            phone: 55511122
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 32,
        title_no: "Underlag",
        title_en: "Inner-layer",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Underlag",
        subcategory_en: "Inner-layer",
        location: "Trondheim",
        price: 380,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 33,
        title_no: "Slalåmhjelm",
        title_en: "Slalom helmet",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Hjelm",
        subcategory_en: "Helmet",
        location: "Stavanger",
        price: 450,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 34,
        title_no: "T-skjorte",
        title_en: "Shirts",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "T-skjorte",
        subcategory_en: "T-shirt",
        location: "Oslo",
        price: 220,
        seller: {
            id: 3,
            name: "Bob Tuskjebakken",
            phone: 34343434
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 35,
        title_no: "Volvo",
        title_en: "Volvo",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Biler",
        category_en: "Cars",
        subcategory_no: "Ski",
        subcategory_en: "Skis",
        location: "Kristiansand",
        price: 200000,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 36,
        title_no: "Henteleke",
        title_en: "Fetch toy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Hente",
        subcategory_en: "Fetch",
        location: "Gjøvik",
        price: 140,
        seller: {
            id: 17,
            name: "Carter Davis",
            phone: 12345678
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 37,
        title_no: "Ski",
        title_en: "Skis",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Ski",
        subcategory_en: "Skis",
        location: "Trondheim",
        price: 3500,
        seller: {
            id: 18,
            name: "Quinn Smith",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 38,
        title_no: "Rope",
        title_en: "Rope",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Hundeleker",
        category_en: "Dog toys",
        subcategory_no: "Tau",
        subcategory_en: "Rope",
        location: "Stavanger",
        price: 130,
        seller: {
            id: 19,
            name: "Evelyn Wilson",
            phone: 55555555
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 39,
        title_no: "Dinghy",
        title_en: "Dinghy",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Dinghy",
        subcategory_en: "Dinghy",
        location: "Oslo",
        price: 220000,
        seller: {
            id: 20,
            name: "Riley Johnson",
            phone: 11111111
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 40,
        title_no: "Bow rider",
        title_en: "Bow rider",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Båter",
        category_en: "Boats",
        subcategory_no: "Bow rider",
        subcategory_en: "Bow rider",
        location: "Gjøvik",
        price: 320000,
        seller: {
            id: 21,
            name: "Dylan Davis",
            phone: 44444444
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 41,
        title_no: "Snowboard",
        title_en: "Snowboard",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Skiutstyr",
        category_en: "Skiwear",
        subcategory_no: "Snowboard",
        subcategory_en: "Snowboard",
        location: "Skien",
        price: 2800,
        seller: {
            id: 22,
            name: "Liam Thompson",
            phone: 12345678
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 42,
        title_no: "Kano",
        title_en: "Canoe",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Tur",
        category_en: "Hike",
        subcategory_no: "Kano",
        subcategory_en: "Canoe",
        location: "Tromsø",
        price: 3500,
        seller: {
            id: 23,
            name: "Olivia White",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 43,
        title_no: "Tursko",
        title_en: "Hiking boots",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Klær",
        category_en: "Clothes",
        subcategory_no: "Sko",
        subcategory_en: "Shoes",
        location: "Lillesand",
        price: 600,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 44,
        title_no: "Tennis rekkert",
        title_en: "Tennis racket",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Sport",
        category_en: "Sport",
        subcategory_no: "Tennis",
        subcategory_en: "Tennis",
        location: "Trondheim",
        price: 450,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 45,
        title_no: "Fiskestang",
        title_en: "Fishing rod",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Fisking",
        category_en: "Fishing",
        subcategory_no: "Fiskeutstyr",
        subcategory_en: "Fishing equipment",
        location: "Sandnes",
        price: 300,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 46,
        title_no: "Golfkøller",
        title_en: "Golf clubs",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Sport",
        category_en: "Sport",
        subcategory_no: "Golf",
        subcategory_en: "Golf",
        location: "Bergen",
        price: 1500,
        seller: {
            id: 4,
            name: "Ola Normann",
            phone: 12731273
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 47,
        title_no: "Fjellsykkel",
        title_en: "Mountain bike",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Sykler",
        category_en: "Bikes",
        subcategory_no: "Fjellsykler",
        subcategory_en: "Mountain bikes",
        location: "Gjøvik",
        price: 3000,
        seller: {
            id: 24,
            name: "Liam Clark",
            phone: 44455566
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 48,
        title_no: "Fotball",
        title_en: "Soccer ball",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Sport",
        category_en: "Sport",
        subcategory_no: "Fotball",
        subcategory_en: "Soccer",
        location: "Stavanger",
        price: 150,
        seller: {
            id: 2,
            name: "Alice Hansen",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 49,
        title_no: "Camping telt",
        title_en: "Camping tent",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Tur",
        category_en: "Hiking",
        subcategory_no: "Camping",
        subcategory_en: "Camping",
        location: "Bergen",
        price: 900,
        seller: {
            id: 2,
            name: "Alice Hansen",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
    {
        id: 50,
        title_no: "Baseball hanske",
        title_en: "Baseball glove",
        description_no: "Beskrivelse mangler.",
        description_en: "Description missing.",
        category_no: "Sport",
        category_en: "Sport",
        subcategory_no: "Baseball",
        subcategory_en: "Baseball",
        location: "Kristiansand",
        price: 200,
        seller: {
            id: 2,
            name: "Alice Hansen",
            phone: 98765432
        },
        images: ["https://i.imgur.com/4aTVI9c.jpeg"]
    },
]

export default Ad
