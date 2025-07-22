// app/data/categories.js
export const categories = [
    {
      id: 'residential',
      name: 'Residential Homes',
      icon: 'home',
      description: 'Find your dream home from our selection of residential properties'
    },
    {
      id: 'office',
      name: 'Office Spaces',
      icon: 'building',
      description: 'Professional office spaces for your business needs'
    },
    {
      id: 'luxury',
      name: 'Luxury Villas',
      icon: 'star',
      description: 'Exclusive luxury properties with premium amenities'
    },
    {
      id: 'apartment',
      name: 'Apartments',
      icon: 'layers',
      description: 'Modern apartments in prime urban locations'
    }
  ];
  
  // Properties data
  
  export const properties = [
    {
      id: '1',
      title: 'Maplewood Residence',
      location: '12 Emerald Heights, Los Angeles',
      categoryId: 'residential',
      price: 590000,
      discounted: true,
      originalPrice: 650000,
      bedrooms: 6,
      bathrooms: 3,
      area: 200,
      description: 'One of the few homes in the area with a private pool.',
      features: [
        'Smart home access',
        'Energy efficient',
        'Private pool',
        'Modern design',
        'Spacious garden'
      ],
      details: 'Built in 2025 with sustainable and smart-home features. Easily check yourself in with a modern keypad system.',
      amenities: [
        'Smart Home Integration',
        'Spacious Living Areas',
        'Energy Efficiency',
        'Natural Light',
        'Security Systems',
        'Outdoor Spaces'
      ],
      mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1635108198979-9806fdf275c6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1629236714859-3a1ec2d8f6c3?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1635108199502-89593581ae96?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1611005893660-34445879f48a?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Proximity to Major Hubs',
        'Nature Trails and Parks',
        'Vibrant Community'
      ],
      locationDetails: 'Located amidst lush green landscapes, Maplewood Residence is just minutes away from essential conveniences. With nearby shopping centers, fine dining restaurants, and reputable schools, you\'ll enjoy the ideal balance of tranquility and accessibility.',
      testimonials: [
        {
          name: 'Aditya',
          role: 'Buyer',
          comment: 'I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch answering all my questions. I will definitely use this platform again in the future!',
          avatar: ''
        }
      ],
      coordinates: {
        lat: 23.04,
        lng: 72.32
      }
    },
    {
      id: '2',
      title: 'Skyline Apartments',
      location: '45 Harbor View, San Francisco',
      categoryId: 'apartment',
      price: 450000,
      discounted: false,
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
      description: 'Modern apartment with stunning city views.',
      features: [
        'Panoramic views',
        'Central heating',
        'Concierge service',
        'Fitness center',
        'Rooftop garden'
      ],
      details: 'Newly renovated in 2024 with premium finishes and latest design trends.',
      amenities: [
        'Smart Home Integration',
        'Fitness Center',
        'Energy Efficiency',
        'Floor-to-ceiling Windows',
        'Security Systems',
        'Community Spaces'
      ],
      mainImage: 'https://images.unsplash.com/photo-1722421492323-eaf9c401befe?q=80&w=2395&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1565329921943-7e537b7a2ea9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1581404569456-a2e7007c3979?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1559599250-9214b5174538?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Stunning City Views',
        'Walking Distance to Parks',
        'Vibrant Neighborhood'
      ],
      locationDetails: 'Skyline Apartments offers the perfect blend of urban living and comfort. Located in the heart of the city, you\'ll be close to public transportation, cultural venues, and a variety of dining options.',
      testimonials: [
        {
          name: 'Rohan',
          role: 'Tenant',
          comment: 'Living here has been a wonderful experience. The amenities are excellent and the location is perfect for my lifestyle.',
          avatar: '/images/avatars/avatar2.jpg'
        }
      ],
      coordinates: {
        lat: 37.77,
        lng: -122.41
      }
    },
    {
      id: '3',
      title: 'Executive Office Tower',
      location: '100 Business District, New York',
      categoryId: 'office',
      price: 1200000,
      discounted: true,
      originalPrice: 1350000,
      bedrooms: null,
      bathrooms: 4,
      area: 350,
      description: 'Premium office space in the heart of the business district.',
      features: [
        'Conference rooms',
        'High-speed internet',
        'Reception area',
        'Security system',
        'Parking garage'
      ],
      details: 'Modern office complex with state-of-the-art facilities for businesses of all sizes.',
      amenities: [
        'Meeting Rooms',
        'High-Speed Internet',
        'Energy Efficient Design',
        'Security System',
        'Cafeteria',
        'Parking Space'
      ],
      mainImage: 'https://images.unsplash.com/photo-1657346088167-b982455bf29a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1654175868733-6e60cc6f9ff4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1641910532059-ad684fd3049c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Prime Business Location',
        'Modern Architecture',
        'Professional Environment'
      ],
      locationDetails: 'Situated in the bustling business district, Executive Office Tower provides the perfect setting for your company to thrive. With easy access to major transportation hubs and surrounded by other prestigious businesses.',
      testimonials: [
        {
          name: 'Manish',
          role: 'CEO',
          comment: 'We moved our headquarters here last year and couldn\'t be happier. The facilities are excellent and our team loves the location.',
          avatar: 'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      coordinates: {
        lat: 40.71,
        lng: -74.00
      }
    },
    {
      id: '4',
      title: 'Coastal Villa',
      location: '8 Seaside Drive, Miami',
      categoryId: 'luxury',
      price: 2500000,
      discounted: false,
      bedrooms: 8,
      bathrooms: 6,
      area: 450,
      description: 'Luxurious waterfront villa with private beach access.',
      features: [
        'Private beach',
        'Infinity pool',
        'Wine cellar',
        'Home theater',
        'Yacht dock'
      ],
      details: 'This exquisite property offers the ultimate luxury lifestyle with unparalleled amenities and breathtaking views.',
      amenities: [
        'Smart Home System',
        'Infinity Pool',
        'Wine Cellar',
        'Private Cinema',
        'Yacht Dock',
        'Outdoor Kitchen'
      ],
      mainImage: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?q=80&w=3177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1639563976871-04a85be57549?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Waterfront Location',
        'Exclusive Neighborhood',
        'Luxury Lifestyle'
      ],
      locationDetails: 'Coastal Villa is set in one of the most prestigious neighborhoods in Miami. Enjoy the privacy of your own beach while being just minutes away from world-class dining and entertainment.',
      testimonials: [
        {
          name: 'Hritk Singh',
          role: 'Owners',
          comment: 'This property exceeded all our expectations. The views are incredible and the quality of construction is impressive.',
          avatar: 'https://images.unsplash.com/photo-1610271283578-a595c4608e13?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      coordinates: {
        lat: 25.76,
        lng: -80.19
      }
    },
    {
      id: '5',
      title: 'Urban Loft',
      location: '78 Artist District, Chicago',
      categoryId: 'apartment',
      price: 380000,
      discounted: true,
      originalPrice: 420000,
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      description: 'Contemporary loft in the vibrant arts district.',
      features: [
        'High ceilings',
        'Exposed brick',
        'Industrial design',
        'Rooftop access',
        'Art studio space'
      ],
      details: 'Renovated former factory with authentic industrial elements preserved throughout the space.',
      amenities: [
        'Artist Studio Space',
        'Community Rooftop',
        'Energy Efficient',
        'Large Windows',
        'Security System',
        'Bike Storage'
      ],
      mainImage: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1666037805138-f227944ed8d7?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1639059790587-95625e6b764c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1638454795595-0a0abf68614d?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Creative Neighborhood',
        'Historic Building',
        'Modern Amenities'
      ],
      locationDetails: 'Urban Loft is located in the heart of the city\'s most creative district. Surrounded by galleries, cafes, and boutiques, this location offers an inspiring environment for those who appreciate art and culture.',
      testimonials: [
        {
          name: 'Aditi Jha',
          role: 'Artist',
          comment: 'The perfect space for both living and working. The natural light is amazing and the community is fantastic.',
          avatar: 'https://images.unsplash.com/photo-1516195851888-6f1a981a862e?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      coordinates: {
        lat: 41.87,
        lng: -87.62
      }
    },
    {
      id: '6',
      title: 'Tech Hub Office',
      location: '255 Innovation Street, Austin',
      categoryId: 'office',
      price: 780000,
      discounted: false,
      bedrooms: null,
      bathrooms: 3,
      area: 200,
      description: 'Modern office space designed for tech companies.',
      features: [
        'Open floor plan',
        'Gigabit internet',
        'Collaboration zones',
        'Break room',
        'Bicycle storage'
      ],
      details: 'Purpose-built for technology companies with all the infrastructure needed for modern businesses.',
      amenities: [
        'High-Speed Internet',
        'Collaboration Spaces',
        'Energy Efficient',
        'Game Room',
        'Security System',
        'Bike Friendly'
      ],
      mainImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      images: [
        'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      highlights: [
        'Tech-Forward Design',
        'Innovation District',
        'Collaborative Environment'
      ],
      locationDetails: 'Tech Hub Office is situated in Austin\'s growing innovation district. This location puts you in the center of the tech ecosystem, with easy access to talent, investors, and like-minded companies.',
      testimonials: [
        {
          name: 'Eman Sehar',
          role: 'Startup Founder',
          comment: 'Moving our startup here was the best decision. The space is perfect for our team and being in this location has helped us make valuable connections.',
          avatar: 'https://images.unsplash.com/photo-1526476148966-98bd039463ea?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
      ],
      coordinates: {
        lat: 30.26,
        lng: -97.74
      }
    }
  ];


