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
  
  // app/data/properties.js
  
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
          name: 'Emily & John Smith',
          role: 'Buyer',
          comment: 'I found my ideal home in no time! The listings were detailed, the photos were accurate, and the whole process felt seamless. Customer service was top-notch answering all my questions. I will definitely use this platform again in the future!',
          avatar: '/images/avatars/avatar1.jpg'
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
        '/images/properties/property2.jpg',
        '/images/properties/interior1.jpg',
        '/images/properties/interior2.jpg'
      ],
      highlights: [
        'Stunning City Views',
        'Walking Distance to Parks',
        'Vibrant Neighborhood'
      ],
      locationDetails: 'Skyline Apartments offers the perfect blend of urban living and comfort. Located in the heart of the city, you\'ll be close to public transportation, cultural venues, and a variety of dining options.',
      testimonials: [
        {
          name: 'Michael Johnson',
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
        '/images/properties/property3.jpg',
        '/images/properties/interior3.jpg'
      ],
      highlights: [
        'Prime Business Location',
        'Modern Architecture',
        'Professional Environment'
      ],
      locationDetails: 'Situated in the bustling business district, Executive Office Tower provides the perfect setting for your company to thrive. With easy access to major transportation hubs and surrounded by other prestigious businesses.',
      testimonials: [
        {
          name: 'Sarah Thompson',
          role: 'CEO',
          comment: 'We moved our headquarters here last year and couldn\'t be happier. The facilities are excellent and our team loves the location.',
          avatar: '/images/avatars/avatar3.jpg'
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
      mainImage: '/images/properties/property4.jpg',
      images: [
        '/images/properties/property4.jpg',
        '/images/properties/interior1.jpg',
        '/images/properties/interior2.jpg'
      ],
      highlights: [
        'Waterfront Location',
        'Exclusive Neighborhood',
        'Luxury Lifestyle'
      ],
      locationDetails: 'Coastal Villa is set in one of the most prestigious neighborhoods in Miami. Enjoy the privacy of your own beach while being just minutes away from world-class dining and entertainment.',
      testimonials: [
        {
          name: 'Robert & Lisa Davis',
          role: 'Owners',
          comment: 'This property exceeded all our expectations. The views are incredible and the quality of construction is impressive.',
          avatar: '/images/avatars/avatar4.jpg'
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
      mainImage: '/images/properties/property5.jpg',
      images: [
        '/images/properties/property5.jpg',
        '/images/properties/interior2.jpg',
        '/images/properties/interior3.jpg'
      ],
      highlights: [
        'Creative Neighborhood',
        'Historic Building',
        'Modern Amenities'
      ],
      locationDetails: 'Urban Loft is located in the heart of the city\'s most creative district. Surrounded by galleries, cafes, and boutiques, this location offers an inspiring environment for those who appreciate art and culture.',
      testimonials: [
        {
          name: 'David Wilson',
          role: 'Artist',
          comment: 'The perfect space for both living and working. The natural light is amazing and the community is fantastic.',
          avatar: '/images/avatars/avatar5.jpg'
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
      mainImage: '/images/properties/property6.jpg',
      images: [
        '/images/properties/property6.jpg',
        '/images/properties/interior1.jpg',
        '/images/properties/interior3.jpg'
      ],
      highlights: [
        'Tech-Forward Design',
        'Innovation District',
        'Collaborative Environment'
      ],
      locationDetails: 'Tech Hub Office is situated in Austin\'s growing innovation district. This location puts you in the center of the tech ecosystem, with easy access to talent, investors, and like-minded companies.',
      testimonials: [
        {
          name: 'Jessica Lee',
          role: 'Startup Founder',
          comment: 'Moving our startup here was the best decision. The space is perfect for our team and being in this location has helped us make valuable connections.',
          avatar: '/images/avatars/avatar6.jpg'
        }
      ],
      coordinates: {
        lat: 30.26,
        lng: -97.74
      }
    }
  ];


