
import type { Product } from './types';

export const products: Omit<Product, 'stock'>[] = [
  {
    id: '1',
    name: 'Aether-Wing Drone',
    description: 'High-performance drone with 4K camera and 3-axis gimbal. Perfect for aerial photography and cinematography. 30-minute flight time.',
    price: 799.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1738748140319-b07cd28c41d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxkcm9uZSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'drone technology'
  },
  {
    id: '2',
    name: 'Nova Smartwatch',
    description: 'Feature-packed smartwatch with heart rate monitoring, GPS, and a vibrant AMOLED display. Syncs with all your devices.',
    price: 249.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1714218707756-173966d250b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwcHJvZHVjdHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'smartwatch product'
  },
  {
    id: '3',
    name: 'Ergo-Flow Keyboard',
    description: 'Ergonomic mechanical keyboard with customizable RGB backlighting and programmable macros. Designed for comfort and performance.',
    price: 159.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618586810102-aaa7049200c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxtZWNoYW5pY2FsJTIwa2V5Ym9hcmR8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'mechanical keyboard'
  },
  {
    id: '4',
    name: 'Azure Silk Scarf',
    description: 'A luxurious 100% silk scarf with a vibrant, abstract pattern. The perfect accessory to elevate any outfit.',
    price: 89.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1606259458027-54d2a728b6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzaWxrJTIwc2NhcmZ8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'silk scarf'
  },
  {
    id: '5',
    name: 'Chronos Leather Watch',
    description: 'A classic timepiece with a genuine leather strap and stainless steel case. Water-resistant and built to last.',
    price: 220.0,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1598463370698-bba402980d47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxsZWF0aGVyJTIwd2F0Y2h8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'leather watch'
  },
  {
    id: '6',
    name: 'Vogue-Strut Heels',
    description: 'Elegant high heels with a pointed toe and a comfortable cushioned insole. Perfect for a night out or a formal event.',
    price: 135.0,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1576231976954-ac82b45bbe6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxoaWdoJTIwaGVlbHN8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'high heels'
  },
  {
    id: '7',
    name: 'Artisan Roast Coffee',
    description: 'A 12oz bag of single-origin, medium-roast coffee beans. Ethically sourced with notes of chocolate and citrus.',
    price: 22.5,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE3NTYwNTA1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'coffee beans'
  },
  {
    id: '8',
    name: 'Zen Garden Succulent Set',
    description: 'A set of three low-maintenance succulent plants in minimalist ceramic pots. Perfect for home or office decor.',
    price: 35.0,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1694898631363-0cdd16603aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdWNjdWxlbnQlMjBwbGFudHN8ZW58MHx8fHwxNzU2MDcxMzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'succulent plants'
  },
  {
    id: '9',
    name: 'SoundSphere Bluetooth Speaker',
    description: 'Portable waterproof speaker with 360-degree sound and 12-hour battery life. Deep bass and crystal-clear highs.',
    price: 99.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618374583993-bfd12f17e7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxibHVldG9vdGglMjBzcGVha2VyfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'bluetooth speaker'
  },
  {
    id: '10',
    name: 'Quantum VR Headset',
    description: 'Immersive virtual reality headset with ultra-wide field of view and integrated spatial audio. Step into new worlds.',
    price: 399.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1599028483861-126d69158933?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXR8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'vr headset'
  },
  {
    id: '11',
    name: 'Solar-Flare Power Bank',
    description: 'High-capacity 20,000mAh power bank with solar charging panels. Never run out of battery on the go.',
    price: 59.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1635541689363-c3c54d19c115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGJhbmt8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'power bank'
  },
  {
    id: '12',
    name: 'Urban Explorer Backpack',
    description: 'A stylish and durable backpack with multiple compartments and a padded laptop sleeve. Made from recycled materials.',
    price: 120.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1587397845347-a37c227d86f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzdHlsaXNoJTIwYmFja3BhY2t8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'stylish backpack'
  },
  {
    id: '13',
    name: 'Tundra Insulated Jacket',
    description: 'A lightweight, weather-resistant jacket filled with synthetic down for warmth. Perfect for cold-weather adventures.',
    price: 199.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1579362350222-2ab59152a8a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBqYWNrZXR8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'winter jacket'
  },
  {
    id: '14',
    name: 'Linen Lounge Trousers',
    description: 'Breathable and comfortable linen trousers with a relaxed fit. Ideal for casual wear in warm climates.',
    price: 75.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1627494194017-53c896d747c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHRyb3VzZXJzfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'linen trousers'
  },
  {
    id: '15',
    name: 'Celestial Pendant Necklace',
    description: 'A delicate sterling silver necklace featuring a crescent moon and star pendant. A touch of magic for any look.',
    price: 65.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1616464858901-b3711c479429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBuZWNrbGFjZXxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'silver necklace'
  },
  {
    id: '16',
    name: 'AeroPress Coffee Maker',
    description: 'A revolutionary coffee press that brews smooth, rich coffee in under a minute. Easy to clean and portable.',
    price: 39.95,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1599819199351-fe86a8a5b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhZXJvcHJlc3N8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'coffee maker'
  },
  {
    id: '17',
    name: 'Weighted Serenity Blanket',
    description: 'A 15lb weighted blanket designed to reduce anxiety and improve sleep quality. Made with soft, breathable fabric.',
    price: 150.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1622396637389-6c3237153641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWlnaHRlZCUyMGJsYW5rZXR8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'weighted blanket'
  },
  {
    id: '18',
    name: 'Marble & Acacia Coasters',
    description: 'A set of four elegant coasters made from white marble and acacia wood. Protects surfaces with a touch of class.',
    price: 29.99,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1618687588979-998835848243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYXJibGUlMjBjb2FzdGVyc3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'elegant coasters'
  },
  {
    id: '19',
    name: 'Himalayan Salt Lamp',
    description: 'A hand-carved lamp from Himalayan salt that emits a warm, soothing amber glow. Creates a calming ambiance.',
    price: 45.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1605330368943-7b8354c51322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzYWx0JTIwbGFtcHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'salt lamp'
  },
  {
    id: '20',
    name: 'Noise-Cancelling Headphones',
    description: 'Over-ear headphones with active noise cancellation and 30-hour battery life. Immerse yourself in pure sound.',
    price: 349.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf4022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'headphones audio'
  },
  {
    id: '21',
    name: 'Gaming Mouse Pro',
    description: 'Ultra-lightweight gaming mouse with a high-precision sensor and customizable buttons. For competitive gamers.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1613298642438-348555e55455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb3VzZXxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'gaming mouse'
  },
  {
    id: '22',
    name: '4K Streaming Stick',
    description: 'Plug-in media player for streaming your favorite shows and movies in stunning 4K HDR. Supports all major services.',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1616091093714-c64882e9934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBkZXZpY2V8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'streaming device'
  },
  {
    id: '23',
    name: 'Denim Trucker Jacket',
    description: 'A timeless denim jacket with a classic fit and button-front closure. A wardrobe staple for any season.',
    price: 110.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1543087904-142c7929def4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGphY2tldHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'denim jacket'
  },
  {
    id: '24',
    name: 'Aviator Sunglasses',
    description: 'Iconic aviator sunglasses with polarized lenses and a lightweight metal frame. 100% UV protection.',
    price: 150.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdmlhdG9yJTIwc3VuZ2xhc3Nlc3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'aviator sunglasses'
  },
  {
    id: '25',
    name: 'Knit Beanie Hat',
    description: 'A soft, chunky-knit beanie to keep you warm and stylish in colder weather. Available in multiple colors.',
    price: 25.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1542838132-350bf66b2483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrbml0JTIwYmVhbmllfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'knit beanie'
  },
  {
    id: '26',
    name: 'Bamboo Bath Caddy',
    description: 'Extendable bath caddy with a book holder, wine glass slot, and space for your essentials. The ultimate relaxation tool.',
    price: 49.99,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1596796335193-4a74931557b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYXRoJTIwY2FkZHl8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'bath caddy'
  },
  {
    id: '27',
    name: 'Smart Indoor Garden',
    description: 'An indoor hydroponic garden that grows fresh herbs and vegetables year-round. Includes LED grow lights.',
    price: 199.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1632549293424-340157934444?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBnYXJkZW58ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'indoor garden'
  },
  {
    id: '28',
    name: 'Essential Oil Diffuser',
    description: 'An ultrasonic diffuser that fills your space with calming aromas. Features multiple timer settings and ambient light.',
    price: 55.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1585250474323-535323215266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvaWwlMjBkaWZmdXNlcnxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'oil diffuser'
  },
  {
    id: '29',
    name: 'Cast Iron Skillet',
    description: 'A pre-seasoned 12-inch cast iron skillet that provides even heat distribution. Perfect for searing, baking, and frying.',
    price: 45.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1582199434011-9239a16b9ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXN0LWlyb24lMjBza2lsbGV0fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'cast-iron skillet'
  },
  {
    id: '30',
    name: 'Portable Projector',
    description: 'Compact and lightweight projector that displays a screen up to 120 inches. Built-in battery and speakers.',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1621768216099-238f0b7e40a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0YWJsZSUyMHByb2plY3RvcnxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'portable projector'
  },
  {
    id: '31',
    name: 'Digital Drawing Tablet',
    description: 'A slim graphics tablet with a battery-free stylus. Ideal for digital artists, designers, and photo editors.',
    price: 99.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1606822299855-339a73373523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkcmF3aW5nJTIwdGFibGV0fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'drawing tablet'
  },
  {
    id: '32',
    name: 'Leather Messenger Bag',
    description: 'A sophisticated messenger bag crafted from full-grain leather. Fits a 15-inch laptop and your daily essentials.',
    price: 250.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwYmFnfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'leather bag'
  },
  {
    id: '33',
    name: 'Cashmere Crewneck Sweater',
    description: 'An incredibly soft 100% cashmere sweater with a classic crewneck design. A timeless piece of luxury.',
    price: 275.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1587834351509-f80c68198f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYXNobWVyZSUyMHN3ZWF0ZXJ8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'cashmere sweater'
  },
  {
    id: '34',
    name: 'Trail-Runner Sneakers',
    description: 'Durable and lightweight sneakers with aggressive tread for trail running. Waterproof and breathable.',
    price: 140.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwc25lYWtlcnN8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'running sneakers'
  },
  {
    id: '35',
    name: 'French Press Coffee Maker',
    description: 'A classic 8-cup French press with a stainless steel filter. Brews a rich and flavorful pot of coffee.',
    price: 35.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1563868045-84930604176e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBwcmVzc3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'french press'
  },
  {
    id: '36',
    name: 'Memory Foam Pillow',
    description: 'An ergonomic memory foam pillow that adapts to the shape of your head and neck for optimal support.',
    price: 60.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1587829774536-23b355e19198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZW1vcnktZm9hbSUyMHBpbGxvd3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'memory-foam pillow'
  },
  {
    id: '37',
    name: 'Robotic Vacuum Cleaner',
    description: 'A smart vacuum that automatically navigates and cleans your floors. Controllable via a smartphone app.',
    price: 350.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1621682372795-aff562854934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHZhY3V1bXxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'robot vacuum'
  },
  {
    id: '38',
    name: 'E-Reader Tablet',
    description: 'A lightweight e-reader with a glare-free, paper-like display. Holds thousands of books and has weeks of battery life.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1599583818306-7871b3e8a4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlcmVhZGVyJTIwZGV2aWNlfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'ereader device'
  },
  {
    id: '39',
    name: 'Wireless Earbuds',
    description: 'True wireless earbuds with active noise cancellation and a comfortable, secure fit. Up to 24 hours of total listening time.',
    price: 179.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1606841837230-7c34f9547545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aXJlbGVzcyUyMGVhcmJ1ZHN8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'wireless earbuds'
  },
  {
    id: '40',
    name: 'Minimalist Leather Wallet',
    description: 'A slim, RFID-blocking wallet made from premium leather. Holds cards and cash without the bulk.',
    price: 55.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1619119280194-9a4a796299b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'leather wallet'
  },
  {
    id: '41',
    name: 'Puffer Vest',
    description: 'A versatile and lightweight puffer vest that provides core warmth without restricting movement.',
    price: 85.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1634066113425-a80f0891501b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwdWZmZXIlMjB2ZXN0fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'puffer vest'
  },
  {
    id: '42',
    name: 'Canvas Slip-On Shoes',
    description: 'Comfortable and casual slip-on shoes made from durable canvas. Perfect for everyday wear.',
    price: 65.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1613479261899-73347ec57322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBzaG9lc3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'canvas shoes'
  },
  {
    id: '43',
    name: 'Hand-Poured Soy Candle',
    description: 'A large soy wax candle with a calming lavender and vanilla scent. 60-hour burn time.',
    price: 28.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1594323634024-c1132506a655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzY2VudGVkJTIwY2FuZGxlfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'scented candle'
  },
  {
    id: '44',
    name: 'Knife Block Set',
    description: 'A 15-piece set of high-carbon stainless steel knives with a wooden storage block. For all your culinary needs.',
    price: 150.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1569418659422-337996412166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrbmlmZSUyMHNldHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'knife set'
  },
  {
    id: '45',
    name: 'Plush Microfiber Robe',
    description: 'A soft and absorbent microfiber bathrobe that feels luxurious against the skin. Perfect for lounging.',
    price: 70.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1596796335193-4a74931557b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwbHVzaCUyMHJvYmV8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'plush robe'
  },
  {
    id: '46',
    name: 'Curved Ultrawide Monitor',
    description: 'A 34-inch curved monitor with a 21:9 aspect ratio. Immerse yourself in work or play.',
    price: 599.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1603573852236-092520639917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx1bHRyYXdpZGUlMjBtb25pdG9yfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'ultrawide monitor'
  },
  {
    id: '47',
    name: 'Action Camera',
    description: 'A rugged and waterproof action camera that records in 4K at 60fps. Capture all your adventures.',
    price: 399.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1590059546294-8b1c4161a067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBjYW1lcmF8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'action camera'
  },
  {
    id: '48',
    name: 'Wool Peacoat',
    description: 'A classic double-breasted peacoat made from a warm wool blend. A sophisticated outerwear piece.',
    price: 280.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1616258823024-3a537554e287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b29sJTIwcGVhY29hdHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'wool peacoat'
  },
  {
    id: '49',
    name: 'Leather Chelsea Boots',
    description: 'Stylish and versatile Chelsea boots with an elastic side panel for easy pull-on. Great for any occasion.',
    price: 180.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1603890257343-3bf0f1b95b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjaGVsc2VhJTIwYm9vdHN8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'chelsea boots'
  },
  {
    id: '50',
    name: 'Merino Wool Socks',
    description: 'A 3-pack of soft and breathable merino wool socks. Moisture-wicking and odor-resistant.',
    price: 35.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1605552259128-4852f8936495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3b29sJTIwc29ja3N8ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'wool socks'
  },
  {
    id: '51',
    name: 'Electric Kettle',
    description: 'A rapid-boil electric kettle with variable temperature control for perfect tea and coffee.',
    price: 75.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1622325983273-35a95a89b6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGtldHRsZXxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'electric kettle'
  },
  {
    id: '52',
    name: 'Dutch Oven',
    description: 'A 6-quart enameled cast iron Dutch oven. Perfect for braising, baking, and stewing.',
    price: 130.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1591136423921-9d2a6773ecea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkdXRjaCUyMG92ZW58ZW58MHx8fHwxNzU2MDcxMzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'dutch oven'
  },
  {
    id: '53',
    name: 'Linen Sheet Set',
    description: 'A queen-size sheet set made from 100% pure linen for a soft, breathable, and luxurious sleep experience.',
    price: 250.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1629853315023-8a4a58797f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsaW5lbiUyMHNoZWV0c3xlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'linen sheets'
  },
  {
    id: '54',
    name: 'Webcam with Ring Light',
    description: 'A 1080p webcam with a built-in, adjustable ring light for professional-quality video calls.',
    price: 89.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1616486777694-8e47c19a4197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3ZWJjYW0lMjBsaWdodHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'webcam light'
  },
  {
    id: '55',
    name: 'External SSD Drive',
    description: 'A super-fast 1TB external solid-state drive with USB-C. Transfer large files in seconds.',
    price: 150.00,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1618840428416-a745339c2c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxleHRlcm5hbCUyMHNzZHxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'external ssd'
  },
  {
    id: '56',
    name: 'Trench Coat',
    description: 'A classic, water-resistant trench coat with a belted waist. A timeless and elegant outerwear choice.',
    price: 220.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1591421369978-7e308b393527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx0cmVuY2glMjBjb2F0fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'trench coat'
  },
  {
    id: '57',
    name: 'Silk Tie',
    description: 'A handsome 100% silk tie with a subtle geometric pattern. The perfect finishing touch for a formal look.',
    price: 60.00,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1589139823939-1b3594191336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzaWxrJTIwdGllfGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'silk tie'
  },
  {
    id: '58',
    name: 'High-Speed Blender',
    description: 'A powerful blender that can crush ice, make smoothies, and blend hot soups. 1500-watt motor.',
    price: 180.00,
    category: 'Home Goods',
    image: 'https://images.unsplash.com/photo-1587204683523-263463769a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrSXRjaGVuJTIwYmxlbmRlcnxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'kitchen blender'
  }
];
