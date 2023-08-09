const products = [
  {
    name: 'Acer C24-1851 DQ.BKPSP.002',
    image: '/images/AcerC24-1851 DQ.BKPSP.002.webp',
    description: `Everything in one place. The Aspire C Series all-in-one delivers exceptional, space-saving design. The FHD display—framed between a narrow bezel—boasts a 90.71%1 screen-to-body ratio. The tiltable screen (-5 to 25°) utilizes BlueLightShield technology to lower exposure to blue light for eye comfort. Specifications: Processor: i5-1340P, Memory: 8GB DDR4, Hard Drive: 1TB + 256GB SSD, Graphics Card: Shared, Display: 23.8" Non-Touch, Operating System: Windows 11`,
    brand: 'Acer',
    category: 'Desktops',
    price: 52999.0,
    countInStock: 10,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo IdeaCentre 3 07IAB7 90SM001BPH',
    image: '/images/LenovoIdeaCentre307IAB790SM001BPH.webp',
    description: `With its exceptional processor and discreet graphics plus copious memory. You can opt for the shorter boot time and faster transfer speed of a solid state drive. Specifications: Processor: i5-12400, Memory: 8GB DDR4, Drive: 512GB SSD, Graphics Card: INT, Display: 21.5" 29412B L22i-30, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Desktops',
    price: 46995.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Acer TC-1770 DT.BK7SP.004',
    image: '/images/AcerTC-1770DT.BK7SP.004.webp',
    description: `
    The Acer TC-1770 DT.BK7SP.004 is a powerful yet affordable desktop computer that is perfect for home use, gaming, and light productivity work. It is powered by an Intel Core i5-13400 processor, 8GB of DDR4 RAM, and a 256GB SSD + 1TB HDD storage combo. It also has a 21.5-inch Full HD display, Intel UHD Graphics 730, and Windows 11 Home. Specifications: Processor: Intel Core i5-13400, Memory: 8GB DDR4, Storage: 256GB SSD + 1TB HDD, Graphics: Intel UHD Graphics 730, Display: 21.5-inch Full HD, Operating System: Windows 11 Home`,
    brand: 'Acer',
    category: 'Desktops',
    price: 66999.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI MEG TRIDENT X 12VTE-046PH',
    image: '/images/MSIMEGTRIDENTX12VTE-046PH.webp',
    description: `
    The MSI MEG TRIDENT X 12VTE-046PH is a powerful gaming desktop computer with an exceptional processor, high-end graphics card, and plenty of memory. It also has a solid state drive for faster boot times and transfer speeds. The specifications are as follows: Processor: Intel Core i7-12700KF, Memory: 32GB DDR5, Drive: 1TB + 1TB SSD, Graphics Card: RTX 3080 10GB, Operating System: Windows 10`,
    brand: 'MSI',
    category: 'Desktops',
    price: 165995.0,
    countInStock: 3,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Acer PO3-640 DG.E2WSP.002',
    image: '/images/AcerPO3-640DG.E2WSP.002.webp',
    description: `
    The Acer PO3-640 DG.E2WSP.002 is a powerful desktop computer with an exceptional processor, discreet graphics, and copious memory. It also has a solid state drive for faster boot times and transfer speeds. The specifications are as follows: Processor: Intel Core i7-12700, Memory: 16GB DDR4, Drive: 512GB SSD + 2TB HDD, Graphics Card: RTX 3060 Ti 8GB, Operating System: Windows 11`,
    brand: 'Acer',
    category: 'Desktops',
    price: 109290.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo Legion Tower 7i - 34IMZ5 90Q9005PPP',
    image: '/images/LenovoLegionTower 7i-34IMZ590Q9005PPP.webp',
    description: `The Lenovo Legion Tower 7i - 34IMZ5 90Q9005PPP is a powerful gaming desktop computer with an exceptional processor, high-end graphics card, and plenty of memory. It also has a solid state drive for faster boot times and transfer speeds. The specifications are as follows: Processor: Intel Core i9-11900KF (8C / 16T, 3.5 / 5.3GHz, 16MB), Memory: 4x 8GB UDIMM RGB-XMP DDR4-3600, Drive: 1TB SSD M. 2 2280 PCIe 4.0x4 NVMe, Graphics Card: NVIDIA GeForce RTX 3080 10GB GDDR6X, Operating System: Windows 11 Home`,
    brand: 'Lenovo',
    category: 'Desktops',
    price: 109290.0,
    countInStock: 2,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Acer PO3-630 / DG.E2CSP.002',
    image: '/images/AcerPO3-630DG.E2CSP.002.webp',
    description: `The Acer PO3-630 / DG.E2CSP.002 is a powerful and versatile desktop computer that is perfect for home use, gaming, and light productivity work. It is powered by an Intel Core i7-11700U processor, 16GB of DDR4 RAM, and a 1TB SSD + 512GB HDD storage combo. It also has a 23.8-inch Full HD display, Intel UHD Graphics 730, and Windows 11 Home.`,
    brand: 'Acer',
    category: 'Desktops',
    price: 119999.0,
    countInStock: 12,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Acer PO3-630 DG.E2CSP.005',
    image: '/images/AcerPO3-630DG.E2CSP.005.webp',
    description: `The Acer PO3-630 DG.E2CSP.005 is a powerful desktop computer with an exceptional processor, discreet graphics, and copious memory. It also has a solid state drive for faster boot times and transfer speeds. The specifications are as follows: Processor: i7-11700U, Memory: 16GB DDR4, Hard Drive: 1TB + 512GB SSD, Graphics Card: RTX 3070 8GB, Operating System: Windows 10`,
    brand: 'Lenovo',
    category: 'Desktops',
    price: 139999.0,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS FX506HC-HN083W TUF',
    image: '/images/ASUSFX506HC-HN083WTUF.webp',
    description: `Stun with Style - personalize your experience with sleek Eclipse Gray or bold Graphite Black color options. A textured honeycomb design on the base adds grip and echoes the hexagon reinforcements around the chassis. Hairline brush strokes accent the palm area, adding a subtle texture that looks professional and clean. Processor: i5 11400H, Memory: 8GB DDR4, Hard Drive: 512GB SSD, Graphics Card: 4GB RTX3050, Display: 15.6" FHD 144Hz, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 52999.0,
    countInStock: 4,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI CYBORG 15 A13VF-433PH',
    image: '/images/MSICYBORG15A13VF-433PH.webp',
    description: `The next phase of evolution is here: dive into the world of games in cyberpunk style, flex your sci-fi fashion, and outplay your opponent with revolutionary hardware. Incorporating a futuristic mechanized exterior design, the Cyborg 15 A13V is built to be the most ground-breaking, avant-garde gaming laptop. Processor: i7 13620H, Memory: 16GB DDR5, Hard Drive: 512GB SSD, Graphics Card: 8GB RTX4060, Display: 15.6" FHD, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 86999.0,
    countInStock: 9,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo IDEAPAD SLIM 5 83BG000APH +OFFC H&S Cloud Gray',
    image: '/images/LenovoIDEAPADSLIM583BG000APH+OFFCH&SCloudGray.webp',
    description: `The IdeaPad Slim 5 is so thin and light that the more you travel, the more you’ll appreciate its slender, rugged, and Mil-SPEC-tested good looks. It’s built for life on the move, with a starting weight of 1.89kg / 4.17lbs, so you can carry it all day without breaking a sweat. It shrugs off knocks and bumps and is the perfect device for working in multiple locations and on business trips. Processor: i5 12450H, Memory: 8GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Display: 16" WUXGA IPS, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 41999.0,
    countInStock: 2,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo LEGION 5i 82RD001APH +OFFC H&S',
    image: '/images/LenovoLEGION5i82RD001APH+OFFCH&S.webp',
    description: `NVIDIA® GeForce RTX™ 40 Series GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture, which delivers a quantum leap in performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing and ultra-high FPS gaming with the lowest latency. Discover revolutionary new ways to create unprecedented workflow acceleration. Processor: R7 6800H, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: 6GB RTX3060, Display: 15.6" QHD 165Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 86999.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI GF63 THIN 11SC-1468PH',
    image: '/images/MSIGF63THIN11SC-1468PH.webp',
    description: `Tested by MobileMark®2014 office productivity scenario. Test configuration: GF Series / Full HD 60Hz display /Super battery mode. The battery life will vary from specifications and system configuration. The battery life will decrease over the lifetime of the battery. Processor: i5 11260H, Memory: 8GB DDR4, Hard Drive: 512GB SSD, Graphics Card: 4GB GTX1650, Display: 15" FHD, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 40999.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI CYBORG 15 A12VE-444PH',
    image: '/images/MSICYBORG15A12VE-444PH.webp',
    description: `The next phase of evolution is here: dive into the world of games in cyberpunk style, flex your sci-fi fashion, and outplay your opponent with revolutionary hardware. Incorporating a futuristic mechanized exterior design, the Cyborg 15 A12V is built to be the most ground-breaking, avant-garde gaming laptop. Processor: i7 12650H, Memory: 8GB DDR5, Hard Drive: 512GB SSD, Graphics Card: 6GB RTX4050, Display: 15" FHD, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 70995.0,
    countInStock: 3,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS FA617NS-N3079W TUF',
    image: '/images/ASUSFA617NS-N3079WTUF.webp',
    description: `AMD SmartAccess Graphics technology makes the most of every frame by automating switching between integrated and discrete graphics or gives you full manual control with a dedicated MUX switch. Processor: R7 7735HS, Memory: 8GB DDR5, Hard Drive: 512GB SSD, Graphics Card: 6GB RX7600S, Display: 16" WUXGA 165Hz, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 79999.0,
    countInStock: 6,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS M1605YA-MB155WS +OFFC H&S',
    image: '/images/ASUSM1605YA-MB155WS+OFFCH&S.webp',
    description: `Everything is smoother with the powerful ASUS Vivobook 16, the feature-packed laptop with user-friendly features including a 180° lay-flat hinge, a physical webcam shield and dedicated function keys to turn your mic on or off. Your health is in safe hands with ASUS Antimicrobial Guard Plus protecting frequently-touched surfaces, and the bigger touchpad is now more finger-friendly. Enjoy the smooth power of Vivobook 16! Processor: R5 7530U, Memory: 8GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Operating System: Windows 11, Display: 16" WUXGA IPS`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 37999.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS GA402XI-NC036WS ZEPHYRUS G14 +OFFC H&S Moonlight White',
    image: '/images/ASUSGA402XI-NC036WSZEPHYRUSG14+OFFCH&SMoonlightWhite.webp',
    description: `For gamers who demand unbelievable motion and image clarity, the Zephyrus G14 offers an incredible Nebula HDR Display with a 165Hz refresh rate, 100% DCI-P3 coverage, and 600 nits of peak brightness for stunning HDR gameplay. The 14-inch, 16:10 Mini LED panel provides incredibly deep blacks for content that jumps right off the screen, whether you’re watching a movie or playing a fast-moving arena shooter. Or opt for a QHD 165Hz Nebula Display with 500 nits peak brightness, or a Full HD 144Hz display. All models share an incredible 91% screen-to-body ratio. Processor: R9 7940HS, Memory: 32GB DDR4 (2*16), Hard Drive: 1TB SSD, Graphics Card: 8GB RTX4070, Display: 14" 165Hz, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 159999.0,
    countInStock: 2,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo YOGA SLIM 7I PRO 82Y7003UPH +OFFC H&S',
    image: '/images/LenovoYOGASLIM7IPRO82Y7003UPH+OFFCH&S.webp',
    description: `Be free to perform anywhere with up to Intel® Evo™, featuring 12th Gen Intel® Core™ H Series Processors, distributing performance where you need it most. And with Lenovo X Power, the Yoga Slim 7i Pro X lets you leverage specific scenario tuning to push beyond benchmarks, turbo matrix optimizations for maximum CPU and GPU performance, and fine-tuned industry-leading hardware. Processor: Intel Core i7 13700H, Memory: 16GB DDR5, Hard Drive: 1TBSSD, Graphics Card: 4GB RTX3050 MaxQ, Display: 14.5" 3K 120Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 94999.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo YOGA SLIM 6 X80 82WU001XPH',
    image: '/images/LenovoYOGASLIM6X8082WU001XPH.webp',
    description: `Look around you, we are fascinating! We are inventive and optimistic, and impatient too. Incredibly ambitious, and easily distracted—and that’s ok! Yoga is made for all of us. Whether you’re looking for a portable device you can take anywhere, or endless entertainment, Yoga’s got you covered. Processor: Intel Core i7 1260P, Memory: 16GB DDR5, Hard Drive: 1TBSSD, Graphics Card: Shared, Display: 14.5" 3K 120Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 82999.0,
    countInStock: 9,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo LOQ 3 82XT000VPH +OFFC H&S',
    image: '/images/LenovoLOQ382XT000VPH+OFFCH&S.webp',
    description: `NVIDIA® GeForce RTX™ 40 Series Laptop GPUs are beyond fast for gamers and creators. They're powered by the ultra-efficient NVIDIA Ada Lovelace architecture, which delivers a quantum leap in both performance and AI-powered graphics. Experience lifelike virtual worlds with ray tracing, massively boost performance with DLSS 3, and get a competitive edge with Reflex. Discover revolutionary new ways to create and unprecedented workflow acceleration. Plus, the Max-Q suite of technologies optimizes system performance, power, battery life, and acoustics for peak efficiency. Processor: R5 7640H, Memory: 8GB DDR5, Hard Drive: 512GB SSD, Graphics Card: 6GB RTX4050, Display: 15.6" FHD IPS 144Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 76999.0,
    countInStock: 4,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo IDEAPAD SLIM 3 82RK0047PH +OFFC H&S Arctic Gray',
    image: '/images/LenovoIDEAPADSLIM382RK0047PH+OFFCH&SArcticGray.webp',
    description: `Enjoy a rich media experience on the IdeaPad Slim 3 Gen 8 laptop with its screen that takes up 88% of the display’s surface area for a picture that looks like it’s floating in space. Plus, the display is TÜV Low Blue Light Certified, so if you need to work for a few hours, your eyes won’t get fatigued easily. And as you enjoy the visuals, you can also treat yourself to the amazing sound of Dolby Audio™. Processor: i5 1235U, Memory: 8GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Operating System: Windows 11, Display: 15.6" FHD IPS`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 38999.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS X1605ZA-MB335WS +OFFC H&S',
    image: '/images/ASUSX1605ZA-MB335WS+OFFCH&S.webp',
    description: `Everything is smoother with the powerful ASUS Vivobook 16, the feature-packed laptop with user-friendly features including a 180° lay-flat hinge, a physical webcam shield and dedicated function keys to turn your mic on or off. Your health is in safe hands with ASUS Antimicrobial Guard Plus protecting frequently-touched surfaces, and the bigger touchpad is now more finger-friendly. Enjoy the smooth power of Vivobook 16! Processor: i3 1215U, Memory: 8GB DDR4, Hard Drive: 256GB SSD, Graphics Card: Shared, Display: 16" WUXGA IPS, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 33999.0,
    countInStock: 7,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI KATANA GF66 12UC-1007PH',
    image: '/images/MSIKATANAGF6612UC-1007PH.webp',
    description: `Katana GF series is as powerful and sturdy as a blade and optimized to unleash true performance during gameplay. Katana GF66 runs at the optimum performance with exclusive red illumination keyboard so that you can shine on the battlefield. Processor: i7 12650H, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: 4GB RTX3050, Display: 15.6" FHD IPS 144Hz, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 60999.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo LEGION PRO 7i 82WQ002JPH +OFFC H&S',
    image: '/images/LenovoLEGIONPRO7i82WQ002JPH+OFFCH&S.webp',
    description: `Intel's latest hybrid architecture, paired with industry-leading features, delivers the ultimate gaming experience. Stream, create and compete at the highest levels – 13th Gen Intel Core processors push your gameplay beyond performance, giving you the power to do it all. Processor: i9 13900HX, Memory: 32GB DDR5 (2*16), Hard Drive: 1TB SSD, Graphics Card: 16GB RTX4090, Display: 16" IPS WQXGA 240Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 249999.0,
    countInStock: 1,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Lenovo YOGA SLIM 7 CARBON 83AY002NPH +OFFC H&S Moon White',
    image: '/images/LenovoYOGASLIM7CARBON83AY002NPH+OFFCH&SMoonWhite.webp',
    description: `Crafted from high-strength carbon fiber, the top cover of the Yoga Slim 7i Carbon laptop is the result of high-precision manufacturing. Thanks to second-gen proprietary fiber the material weight is cut by up to 40%, making it our lightest carbon-fiber material. Yet, it’s also 25% more rigid. Additionally, the palm rest and bottom covers are made from magnesium alloy and reinforced with structural ribs for extra portability and durability. Processor: i7 1360P, Memory: 16GB DDR4, Hard Drive: 1TB SSD, Graphics Card: Shared, Display: 13.3" WQXGA 90Hz, Operating System: Windows 11`,
    brand: 'Lenovo',
    category: 'Laptops',
    price: 89999.0,
    countInStock: 6,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS UP3404VA-KN119WS ZENBOOK FLIP +OFFC H&S',
    image: '/images/ASUSUP3404VA-KN119WSZENBOOKFLIP+OFFCH&S.webp',
    description: `The versatile Zenbook 14 Flip OLED is everything you need for your busy on-the-go lifestyle. Its compact and elegant chassis now packs a bigger 14-inch 16:10 2.8K OLED HDR touchscreen with superb PANTONE® Validated color-accurate visuals, and it supports a 4096-pressure-level MPP 2.0 stylus for natural input. Powered by the latest 13th Gen Intel Core CPUs, Zenbook 14 Flip OLED has a class-leading 75 Wh battery, and its 1.5 kg-light chassis is just 15.9 mm thin, with a 360° any-position hinge for effortless versatility. There’s a powerful Harman Kardon-certified Dolby Atmos® sound system for awesome audio and crystal-clear conferencing. Zenbook 14 Flip OLED gives you more power and more versatility! Processor: i5 1340P, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Display: 14" WQXGA+ 90Hz, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 74999.0,
    countInStock: 4,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'Acer PH16-71-95L8 PREDATOR HELIOS 300',
    image: '/images/AcerPH16-71-95L8PREDATORHELIOS300.webp',
    description: `Drop into the game everything you need to obliterate the opposition on a blisteringly-fast display and armed with up to the latest NVIDIA GeForce RTX 30 Series graphics. An 11th Gen Intel Core Processor and our customed engineered 5th gen AeroBlade 3D Fan Technology. Processor: i9 13900HX, Memory: 16GB DDR5, Hard Drive: 1TB SSD, Graphics Card: 8GB RTX4070, Display: 16" WQXGA 240Hz, Operating System: Windows 11`,
    brand: 'Acer',
    category: 'Laptops',
    price: 129999.0,
    countInStock: 2,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI MODERN 15 B11M-027PH Classic Black',
    image: '/images/MSIMODERN15B11M-027PHClassicBlack.webp',
    description: `The Modern Series keep your workflow going, with enlarged touchpad with smooth and responsive fingertip control. The 180° lay-flat and Flip-n-Share function allows you to one click to share your screen for a more productive workspace. The optimized 1.5mm key travel makes the typing experience more ergonomic. Thanks to a full-size backlit keyboard, you can work in dark environments. Processor: i5 1155G7, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Display: 15.6" FHD 60Hz, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 37999.0,
    countInStock: 8,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'MSI MODERN 15 B11M-050PH Silver Blue',
    image: '/images/MSIMODERN15B11M-050PHSilverBlue.webp',
    description: `The Modern Series keep your workflow going, with enlarged touchpad with smooth and responsive fingertip control. The 180° lay-flat and Flip-n-Share function allows you to one click to share your screen for a more productive workspace. The optimized 1.5mm key travel makes the typing experience more ergonomic. Thanks to a full-size backlit keyboard, you can work in dark environments. Processor: i5 1155G7, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: Shared, Display: 15.6" FHD 60Hz, Operating System: Windows 11`,
    brand: 'MSI',
    category: 'Laptops',
    price: 37999.0,
    countInStock: 3,
    rating: 0,
    numReviews: 0
  },
  {
    name: 'ASUS M6500QC-MA056WS VIVOBOOK PRO +OFFC H&S',
    image: '/images/ASUSM6500QC-MA056WSVIVOBOOKPRO+OFFCH&S.webp',
    description: `Vivobook Pro 15 OLED is built to empower your creative lifestyle, with powerful components including up to Ryzen™ 7-5800 Mobile Processor with 16 GB of DDR4 RAM, and an NVIDIA® GeForce RTX™ 3050 Ti GPU that’s the perfect choice for all your creative apps. To maximize performance for the toughest tasks, you can switch to Performance mode, which increases the overall TDP to 85 W. Also, the 512 GB PCIe® SSD gives you plenty of ultrafast storage for all your projects, and loads your apps in the blink of an eye. Processor: R7 5800H, Memory: 16GB DDR4, Hard Drive: 512GB SSD, Graphics Card: 4GB RTX3050, Display: 15.6" OLED 120Hz, Operating System: Windows 11`,
    brand: 'ASUS',
    category: 'Laptops',
    price: 74999.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0
  }
];

export default products;
