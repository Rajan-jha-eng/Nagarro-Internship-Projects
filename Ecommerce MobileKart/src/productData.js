const products = [
    {
        id: 1,
        name: "Xiaomi Redmi K50i",
        price: 25999,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/d/f/df492d4a40f207052cd3d68fbd66832653a9308e.jpg?w=0&h=901&q=80&c=1",
        productType: "Redmi",
        description: "Xiaomi Redmi K50i presents a beautiful 6.6-inches IPS LCD panel, high pixel density of 407ppi, resolution of 2460 x 1080 pixels"
    },
    {
        id: 2,
        name: "Xiaomi Redmi Note 11 Pro Plus 5G",
        price: 19999,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/7/9/79e15729ca25184c5c20f221f0e966689fba27ac.jpg?w=0&h=901&q=80&c=1",
        productType: "Redmi",
        description: "Xiaomi Redmi Note 11 Pro Plus 5G features 6.67 inches AMOLED front screen, comprising a resolution of 1080 x 2400 pixels along with an aspect ratio of 20:9."
    },
    {
        id: 3,
        name: "Xiaomi Redmi Note 11 Pro",
        price: 18999,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/5/b/5ba61b893524ba217047a92f95eada2db0566678.jpg?w=0&h=901&q=80&c=1",
        productType : "Redmi",
        description: "Xiaomi Redmi Note 11 Pro is presented with a 6.67 inches AMOLED display, having a pixel density of 395ppi and a resolution of 1080 x 2400 pixels. "
    },
    {
        id: 4,
        name: "Xiaomi Redmi Note 10S",
        price: 12999,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/1/2/12dd1501976c5f658f8e0a22f8571e2d930b563c.jpg?w=0&h=901&q=80&c=1",
        productType: "Redmi",
        description: "Xiaomi Redmi Note 10S appears with a 6.43-inch AMOLED type display, best-in-class pixel density of 409ppi, reading mode 3.0 and a screen resolution of 1080 x 2400 pixels."
    },
    
    {
        id: 5,
        name: "iPhone 13 Pro Max",
        price: 118900,
        rating: 5,
        image: "https://i.gadgets360cdn.com/products/large/iphone-13-pro-max-400x800-1631648541.jpg?downsize=*:420&output-quality=80",
        productType: "Apple",
        description: "iPhone 13 Pro Max have Bright, crisp 120Hz display, excellent construction quality, stellar battery life and versatile cameras"
    },
    {
        id: 6,
        name: "iPhone 12 Pro",
        price: 102900,
        rating: 5,
        image: "https://i.gadgets360cdn.com/products/large/iphone-12-pro-399x800-1602617214.jpg?downsize=*:420&output-quality=80",
        productType: "Apple",
        description: "iPhone 12 Pro have a resolution of 1170x2532 pixels Solid build quality, excellent display, dolby vision video recording and snappy overall performance"
    },
    {
        id: 7,
        name: "iPhone 13 mini",
        price: 64999,
        rating: 4,
        image: "https://i.gadgets360cdn.com/products/large/iphone-13-mini-1-396x800-1631648715.jpg?downsize=*:420&output-quality=80",
        productType: "Apple",
        description: "iPhone 13 mini have a resolution of 1080x2340 pixels, versatile cameras, sharp, bright display, very portable and convenient"
    },
    {
        id: 8,
        name: "Apple iPhone XR",
        price: 39999,
        rating: 4,
        image: "https://i.gadgets360cdn.com/products/large/1536782796_635_iphone_xr.jpg?downsize=*:420&output-quality=80",
        productType: "Apple",
        description: "Apple iPhone XR have a resolution of 828x1792 pixels, excellent cameras, Dual SIM is finally an option and great battery life"
    },
    {
        id: 9,
        name: "OnePlus 10T",
        price: 46999,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/6/c/6c8e5b4288d6638c261c331a3854d5fb5c8e9599.jpg?w=0&h=901&q=80&c=1",
        productType: "OnePlus",
        description: "OnePlus 10T comes with a 6.7-inches Fluid AMOLED flaunting a pixel density of 394ppi, screen resolution of 1080 x 2412 pixels along with an aspect ratio of 20.1:9."
    },
    {
        id: 10,
        name: "OnePlus 10R",
        price: 34999,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/1/2/1231024c7823cd2c6b07db3a81c8eefc7970eb8b.jpg?w=0&h=901&q=80&c=1",
        productType: "OnePlus",
        description: "OnePlus 10R flaunts a 6.7 inches Fluid AMOLED front screen equipped with a pixel density of 394ppi, an aspect ratio of 20.1:9 and a resolution of 1080 x 2412 pixels."
    },
    {
        id: 11,
        name: "OnePlus Nord 2T 5G",
        price: 28999,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/f/f/ff34826b57947826dd8abe80d36b1c703b0813ef.jpg?w=0&h=901&q=80&c=1",
        productType: "OnePlus",
        description: "OnePlus Nord 2T presents a 6.43 inches AMOLED display with a 1080 x 2400 pixels resolution, pixel density of 409ppi and an aspect ratio of 20:9."
    },
    {
        id: 12,
        name: "OnePlus Nord 2 ",
        price: 27999,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/1/d/1d9c54952b07d54a61f114053d8cb0ac1288a901.jpg?w=0&h=901&q=80&c=1",
        productType : "OnePlus",
        description: "OnePlus Nord 2 comes with a 6.43-inch Fluid AMOLED type display featuring a screen resolution of 1080 x 2400 pixels, display of the smartphone carries a 20:9 aspect ratio and a pixel density of 409ppi"
    },
    {
        id: 13,
        name: "Samsung Galaxy S22 Ultra",
        price: 91530,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/4/8/48bf5a906f255c682881b72af27b4531c250e8e4.jpg?w=0&h=901&q=80&c=1",
        productType : "Samsung",
        description: "Samsung Galaxy S22 Ultra flaunts a 6.8 inches Dynamic AMOLED screen that gets a resolution of 1440 x 3088 pixels and a pixel density of 501ppi. "
    },
    {
        id: 14,
        name: "Samsung Galaxy S20 FE 5G",
        price: 32999,
        rating: 5,
        image: "https://www.91-img.com/gallery_images_uploads/1/b/1b0ca2a0ca83256a04f4af36c7d4b34a92c6bdc0.jpg?w=0&h=901&q=80&c=1",
        productType : "Samsung",
        description: "Samsung Galaxy S20 FE 5G gets a 6.5-inch Super AMOLED display loaded pixel density of 405ppi, front screen flaunts an aspect ratio of 20:9 along with a resolution of 1080 x 2400 pixels. "
    },
    {
        id: 15,
        name: "Samsung Galaxy M53 5G",
        price: 26499,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/1/b/1b0ca2a0ca83256a04f4af36c7d4b34a92c6bdc0.jpg?w=0&h=901&q=80&c=1",
        productType : "Samsung",
        description: "Samsung Galaxy M53 5G comes with a 6.7 inches Super AMOLED Plus type screen, a resolution of 1080 x 2400 pixels and an aspect ratio of 20:9."
    },
    {
        id: 16,
        name: "Samsung Galaxy M52 5G",
        price: 19999,
        rating: 4,
        image: "https://www.91-img.com/gallery_images_uploads/0/d/0d026a7127bf34fe66836afe55ff15694478bf96.jpg?w=0&h=901&q=80&c=1",
        productType: "Samsung",
        description : "Samsung Galaxy M52 5G gets a 6.7 inches Super AMOLED Plus front screen comprising 1080 x 2400 screen resolution and 393ppi pixel density. "
    },
];

export default products;