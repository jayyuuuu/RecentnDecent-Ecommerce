const mongoose = require ('mongoose');
const Product = require('./models/product');

const products = [
  
     {
         name : " Iphone 12",
         img : 'https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
         price : 70000,
         desc : 'The iPhone 12 costs more than its predecessors but has a crisp new HDR OLED screen. It offers nearly all the feaures of the iPhone 12 Pro, minus some camera capabilities, but should be a good enough package for most users. Apple has returned to a flat aluminium frame but the iPhone 12 promises to be more durable thanks to its Ceramic Shield material on the front and IP68 rating. You get the A14 Bionic SoC which makes everyday use extremely smooth and responsive, but the device does get a bit warm when stressed. Battery life is good, but not great, and you will be able to get through a full day. The iPhone is relatively light and easy to handle. iOS has some customisation options and privacy features.'
     },
     {
        name : " Macbook Air",
        img : 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price : 200000,
        desc : 'Apple MacBook Air 2020 is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i3 processor and it comes with 8GB of RAM. The Apple MacBook Air 2020 packs 256GB of SSD storage. Graphics are powered by Integrated Graphics Processor.',
    },
    {
        name : "Apple SmartWatch",
        img : 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
        price : 40000,
        desc : 'Apple today announced Apple Watch Series 5, debuting an Always-On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium. Combined with the power of watchOS 6, users are empowered to take charge of their health and fitness with new features like Cycle Tracking, the Noise app and Activity Trends.'
    },
    {
        name : "Boat Speakers",
        img : 'https://images.unsplash.com/photo-1612795146974-84dbe538f4a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price : 3000,
        desc : 'Bring music to life and take your favourite music along fearlessly with portable speakers that are rugged and IPX rated to match your stride. Our speakers are ergonomic yet durable to suit every environment and every vibe.Portable speakers: Carry your music, wherever you go! Powered by IPX for sweat & water resistance. BOAT portable speakers match your stride, whether on a trek, a beach, or your home! Get the best speakers in every budget and size.'
    },
    {
        name : "Headphones",
        img : 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=746&q=80',
        price : 6000,
        desc : 'Get yourself immersed in the colors of musical bliss by choosing the bluetooth headphones. Wide range of wireless Bluetooth headphones, earphones and wireless headsets from Rs.1,199. Original boAt Products. Easy Returns. Free Delivery. Types: Airdopes, Rockerz.'
    },
    {
        name : "Earbuds",
        img : 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        price : 11000,
        desc : 'Wear JBL wired earbuds and earphones with confidence, as they are built for premium sound. Perfect for both iPhone and Android smartphones. Shop today!'
    },
    {
        name : "Drone",
        img : 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
        price : 121430,
        desc : 'The Phantom 4 Pro V2.0 camera drone comes equipped with a 3-axis motorized gimbal and a 1-inch 20MP CMOS sensor with a mechanical shutter that eliminates rolling shutter distortion'
    },
    {
        name : "Nikon DSLR",
        img : 'https://images.unsplash.com/photo-1610092328018-35582b549480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5pa29uJTIwY2FtZXJhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        price : 120000,
        desc : 'Once you’ve felt the liberating power, speed and performance of a Nikon DSLR, you’ll see why they’re the preferred tool of pro and aspiring photographers everywhere. See your photos and videos come to life with stunning clarity and rich detail through masterly-crafted Nikon DSLR cameras and world-renowned NIKKOR lenses.'
    },

]
const seedDB = async ()=>{

    await Product.insertMany(products);
    console.log("DB Seeded");

}

module.exports = seedDB;
