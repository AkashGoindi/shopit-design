export const CATEGORIES = [ 
  "Appliances", 
  "Audio", 
  "Camera and Camcoders",
  "Car Electronics and GPS",
  "Cell Phones",
  "Computers and Tables",
  "TV and Home Theater",
  "Video Games"
]

export const BRANDS = [
  { brand_name: "Samsung", products_count: 1 },
  { brand_name: "Metra", products_count: 1 },
  { brand_name: "HP", products_count: 1 },
  { brand_name: "Apple", products_count: 3 },
  { brand_name: "GE", products_count: 0 },
  { brand_name: "Sony", products_count: 3 },
  { brand_name: "Whirpool", products_count: 0 }
]

export const PRODUCTS = [
  {
    id: 1,
    name: "Go-Pro",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 299.99,
    stars: "4",
    brand: "Samsung",
    category: "Camera and Camcoders",
    cover_image: require('./assets/images/gopro.png')
  },
  {
    id: 2,
    name: "Apple Airpods",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 124.00,
    stars: "5",
    brand: "Apple",
    category: "Audio",
    cover_image: require('./assets/images/airpods.png')
  },
  {
    id: 3,
    name: "HP - Inspiron 15.6 Touch-Screen Laptop",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 499.99,
    stars: "4",
    brand: "HP",
    category: "Computers and Tables",
    cover_image: require('./assets/images/playstation.png')
  },
  {
    id: 4,
    name: "Earphones",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 9.99,
    stars: "4",
    brand: "Sony",
    category: "Audio",
    cover_image: require('./assets/images/earphones.png')
  },
  {
    id: 5,
    name: "Sony- Headphones XM-22T",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 99.99,
    stars: "5",
    brand: "Sony",
    category: "Audio",
    cover_image: require('./assets/images/headphones.png')
  },
  {
    id: 6,
    name: "Apple Watch",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 299.99,
    stars: "4",
    brand: "Apple",
    category: "Cell Phones",
    cover_image: require('./assets/images/iwatch.png')
  },
  {
    id: 7,
    name: "Sony PlayStation - 4 (512Gb, 1 Tb)",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 349.99,
    stars: "4",
    brand: "Sony",
    category: "Video Games",
    cover_image: require('./assets/images/playstation.png')
  },
  {
    id: 8,
    name: "Metra Television M-20",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 699.99,
    stars: "4",
    brand: "Metra",
    category: "TV and Home Theater",
    cover_image: require('./assets/images/tv.png')
  },
  {
    id: 9,
    name: "Apple iWatch - Pink Edition",
    description: "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    price: 310.99,
    stars: "4",
    brand: "Apple",
    category: "Cell Phones",
    cover_image: require('./assets/images/iwatch_pink.png')
  },
];