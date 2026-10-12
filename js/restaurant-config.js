/**
 * RESTAURANT CONFIGURATION & WHITE-LABEL THEME ENGINE
 * ====================================================
 * This single configuration file controls the entire website brand identity,
 * visual colors, food imagery, menu items, contact information, booking rules,
 * and WhatsApp automation strings.
 * 
 * Changing this configuration updates the entire website instantly.
 */

const RESTAURANT_CONFIG = {
  // Active Preset ID ('royal-saffron' | 'pind-punjab' | 'dawat-e-mughal' | 'urban-mirchi')
  activePreset: 'royal-saffron',

  // Preset Definitions for Instant One-Click White-Label Demo Switching
  presets: {
    'royal-saffron': {
      id: 'royal-saffron',
      name: 'Royal Saffron',
      cuisineType: 'Luxury Indian Fine Dining & Mughlai',
      tagline: 'Imperial Flavors & Contemporary Indian Gastronomy',
      subheadline: 'Where timeless Awadhi heritage meets modern culinary artistry in an ambiance of gold-dusted regal opulence.',
      foundedYear: '2016',
      chefName: 'Chef Ranveer Mehra',
      chefTitle: 'Grand Master Chef & Culinary Historian',
      chefQuote: 'Every grain of saffron, every crackle of cumin in pure ghee, and every hour of dum cooking is a reverence to ancient royal kitchens.',
      currency: '₹',
      
      theme: {
        primaryGold: '#D4AF37',
        primaryGoldLight: '#F5E296',
        primaryGoldDark: '#997B1E',
        accentSaffron: '#E65100',
        accentSaffronGlow: 'rgba(230, 81, 0, 0.4)',
        bgDark: '#0B0B0E',
        bgCard: '#131318',
        bgCardElevated: '#1A1A22',
        textPrimary: '#FFFFFF',
        textMuted: '#A0A0B0',
        borderColor: 'rgba(212, 175, 55, 0.22)',
        fontHeading: "'Cinzel', 'Playfair Display', Georgia, serif",
        fontBody: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      },

      contact: {
        phone: '+91 98765 43210',
        displayPhone: '+91 (0) 98765 43210',
        whatsapp: '919876543210',
        whatsappDefaultMessage: 'Hello Royal Saffron team, I would like to make an inquiry / place an order.',
        email: 'concierge@royalsaffron.com',
        address: 'Plot 42, Royal Crest Boulevard, Road No. 36, Jubilee Hills',
        city: 'Hyderabad, Telangana 500033',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.663183573295!2d78.39958747493566!3d17.42798838346614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96cd48c08467%3A0xc328a9b71eef6c82!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
        googleMapsLink: 'https://maps.google.com/?q=Jubilee+Hills+Hyderabad',
        social: {
          instagram: 'https://instagram.com/royalsaffrondining',
          facebook: 'https://facebook.com/royalsaffrondining',
          tripadvisor: 'https://tripadvisor.com',
          zomato: 'https://zomato.com'
        }
      },

      timings: {
        lunch: '12:00 PM – 03:30 PM',
        dinner: '07:00 PM – 11:30 PM',
        daysOpen: 'Open 7 Days a Week',
        statusText: 'Open Now • Table Reservations Recommended'
      },

      stats: {
        rating: '4.9',
        reviewsCount: '2,840+',
        awards: 'Michelin Guide Recommended • Best Luxury Dining 2025'
      },

      heroBadge: '✨ Royal Indian Dining Experience',
      heroImage: 'assets/images/hero-ambience.jpg'
    },

    'pind-punjab': {
      id: 'pind-punjab',
      name: 'Pind Punjab',
      cuisineType: 'Authentic Punjabi & Live Charcoal Tandoor',
      tagline: 'Hearty Clay Tandoors, Rich Desi Ghee & Highway Dhaba Soul',
      subheadline: 'Savor slow-simmered 24-hour Dal Makhani, smoky charcoal-fired Amritsari tikkas, and crisp stuffed kulchas dripping with churned white butter.',
      foundedYear: '2012',
      chefName: 'Ustad Gurpreet Singh',
      chefTitle: 'Grand Tandoor Master & Highway Culinary Legend',
      chefQuote: 'The secret of true Punjabi food lies in pure slow-churned butter, smoking coals of the clay oven, and feeding people with an open heart.',
      currency: '₹',

      theme: {
        primaryGold: '#F39C12',
        primaryGoldLight: '#FAD7A0',
        primaryGoldDark: '#B9770E',
        accentSaffron: '#E74C3C',
        accentSaffronGlow: 'rgba(231, 76, 60, 0.4)',
        bgDark: '#0E0C0A',
        bgCard: '#181410',
        bgCardElevated: '#241E18',
        textPrimary: '#FFFFFF',
        textMuted: '#B8A89A',
        borderColor: 'rgba(243, 156, 18, 0.28)',
        fontHeading: "'Playfair Display', Georgia, serif",
        fontBody: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
      },

      contact: {
        phone: '+91 98112 34567',
        displayPhone: '+91 (0) 98112 34567',
        whatsapp: '919811234567',
        whatsappDefaultMessage: 'Sat Sri Akal! I would like to book a table at Pind Punjab.',
        email: 'table@pindpunjab.com',
        address: 'SCO 24-25, Sector 29 Food District, Cyber Hub Corridor',
        city: 'Gurugram, Delhi NCR 122002',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4789520443153!2d77.0682121748839!3d28.465134175755198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d190000000001%3A0x82f42a5a049f50e7!2sSector%2029%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
        googleMapsLink: 'https://maps.google.com/?q=Sector+29+Gurugram',
        social: {
          instagram: 'https://instagram.com/pindpunjabofficial',
          facebook: 'https://facebook.com/pindpunjabofficial',
          tripadvisor: 'https://tripadvisor.com',
          zomato: 'https://zomato.com'
        }
      },

      timings: {
        lunch: '12:30 PM – 04:00 PM',
        dinner: '07:00 PM – 12:00 Midnight',
        daysOpen: 'Open All 7 Days',
        statusText: 'Live Charcoal Tandoor Fired Up • Walk-ins & Bookings Welcome'
      },

      stats: {
        rating: '4.8',
        reviewsCount: '4,150+',
        awards: 'Best Authentic Punjabi Restaurant • Times Food Award'
      },

      heroBadge: '🔥 Grand Charcoal Tandoor & Dhaba Feasts',
      heroImage: 'assets/images/tandoori-platter.jpg'
    },

    'dawat-e-mughal': {
      id: 'dawat-e-mughal',
      name: 'Dawat-e-Mughal',
      cuisineType: 'Imperial Awadhi & Royal Mughlai Dastarkhwan',
      tagline: 'Centuries-Old Dum Pukht Recipes of Royal Nawabs',
      subheadline: 'Melt-in-mouth Galouti kebabs infused with 160 secret botanicals, fragrant dum biryanis, and rich saffron gravies slow-simmered in sealed copper degs.',
      foundedYear: '2010',
      chefName: 'Khansama Tariq Qureshi',
      chefTitle: '6th Generation Royal Awadhi Master Chef',
      chefQuote: 'In Mughlai cooking, spice is not meant to burn the palate; it is meant to perfume the senses and linger like poetry.',
      currency: '₹',

      theme: {
        primaryGold: '#E5A93C',
        primaryGoldLight: '#FDE49E',
        primaryGoldDark: '#9C6F16',
        accentSaffron: '#10B981', // Imperial Emerald Accent
        accentSaffronGlow: 'rgba(16, 185, 129, 0.35)',
        bgDark: '#080E0B',
        bgCard: '#0E1713',
        bgCardElevated: '#15241E',
        textPrimary: '#FFFFFF',
        textMuted: '#9BB1A5',
        borderColor: 'rgba(229, 169, 60, 0.25)',
        fontHeading: "'Cinzel', serif",
        fontBody: "'Plus Jakarta Sans', system-ui, sans-serif"
      },

      contact: {
        phone: '+91 94150 98765',
        displayPhone: '+91 (0) 94150 98765',
        whatsapp: '919415098765',
        whatsappDefaultMessage: 'Aadaab! I would like to book an imperial table at Dawat-e-Mughal.',
        email: 'nawab@dawatemughal.com',
        address: 'Nawabi Heritage Enclave, Hazratganj Promenade',
        city: 'Lucknow, Uttar Pradesh 226001',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.789234856789!2d80.9431874748281!3d26.84669377668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd080b0b0b0b%3A0x82f42a5a049f50e7!2sHazratganj%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
        googleMapsLink: 'https://maps.google.com/?q=Hazratganj+Lucknow',
        social: {
          instagram: 'https://instagram.com/dawatemughal',
          facebook: 'https://facebook.com/dawatemughal',
          tripadvisor: 'https://tripadvisor.com',
          zomato: 'https://zomato.com'
        }
      },

      timings: {
        lunch: '12:00 PM – 03:45 PM',
        dinner: '07:15 PM – 11:45 PM',
        daysOpen: 'Open Tuesday to Sunday (Monday Closed)',
        statusText: 'Open for Royal Dastarkhwan • Private Chamber Available'
      },

      stats: {
        rating: '4.9',
        reviewsCount: '2,180+',
        awards: 'Heritage Culinary Icon • National Gastronomy Award'
      },

      heroBadge: '👑 Royal Awadhi Dum Pukht Cuisine',
      heroImage: 'assets/images/dum-biryani.jpg'
    },

    'urban-mirchi': {
      id: 'urban-mirchi',
      name: 'Urban Mirchi',
      cuisineType: 'Progressive Modern Indian Kitchen & Craft Bar',
      tagline: 'Playful Indian Tapas, Artisanal Gin & Modern Fire',
      subheadline: 'Reimagining timeless street flavors and regional classics through modern culinary techniques, theatrical smoke, and botanical cocktails.',
      foundedYear: '2020',
      chefName: 'Chef Aria Kapoor',
      chefTitle: 'Modern Indian Innovator & Mixologist',
      chefQuote: 'Tradition is our foundation, but bold imagination is our compass. Indian food should excite, surprise, and delight.',
      currency: '₹',

      theme: {
        primaryGold: '#F59E0B',
        primaryGoldLight: '#FDE68A',
        primaryGoldDark: '#B45309',
        accentSaffron: '#F43F5E', // Electric Crimson Accent
        accentSaffronGlow: 'rgba(244, 63, 94, 0.4)',
        bgDark: '#0B0F19',
        bgCard: '#111827',
        bgCardElevated: '#1F2937',
        textPrimary: '#FFFFFF',
        textMuted: '#94A3B8',
        borderColor: 'rgba(244, 63, 94, 0.28)',
        fontHeading: "'Playfair Display', sans-serif",
        fontBody: "'Plus Jakarta Sans', system-ui, sans-serif"
      },

      contact: {
        phone: '+91 99001 12233',
        displayPhone: '+91 (0) 99001 12233',
        whatsapp: '919900112233',
        whatsappDefaultMessage: 'Hey Urban Mirchi! I want to reserve a table / order food.',
        email: 'vibes@urbanmirchi.com',
        address: 'Level 2, Zenith Atrium, 100 Feet Road, Indiranagar',
        city: 'Bengaluru, Karnataka 560038',
        googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.989234856789!2d77.6408274747081!3d12.97159877668615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a70b0b0b0b%3A0x82f42a5a049f50e7!2s100+Feet+Rd%2C+Indiranagar%2C+Bengaluru!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
        googleMapsLink: 'https://maps.google.com/?q=Indiranagar+100+Feet+Road+Bangalore',
        social: {
          instagram: 'https://instagram.com/urbanmirchikitchen',
          facebook: 'https://facebook.com/urbanmirchikitchen',
          tripadvisor: 'https://tripadvisor.com',
          zomato: 'https://zomato.com'
        }
      },

      timings: {
        lunch: '12:00 PM – 04:00 PM',
        dinner: '06:30 PM – 01:00 AM',
        daysOpen: 'Open Every Day • DJ Nights Fri & Sat',
        statusText: 'Cocktail Bar & Kitchen Active • Happy Hours 4 PM - 7 PM'
      },

      stats: {
        rating: '4.8',
        reviewsCount: '3,200+',
        awards: 'Best Modern Indian Kitchen & Bar • Nightlife Awards'
      },

      heroBadge: '🍸 Progressive Indian Tapas & Botanical Cocktails',
      heroImage: 'assets/images/hero-ambience.jpg'
    }
  },

  // Interactive Master Culinary Menu Catalog
  menuCategories: [
    { id: 'all', name: 'All Specialties', icon: '🍽️' },
    { id: 'signatures', name: "Chef's Signatures", icon: '👑' },
    { id: 'tandoor', name: 'Charcoal Tandoor & Kebabs', icon: '🍢' },
    { id: 'curries', name: 'Royal Curries & Gravies', icon: '🍲' },
    { id: 'biryani', name: 'Dum Biryanis & Rice', icon: '🍚' },
    { id: 'breads', name: 'Artisan Tandoori Breads', icon: '🫓' },
    { id: 'desserts', name: 'Regal Sweets & Desserts', icon: '🍨' },
    { id: 'beverages', name: 'Craft Elixirs & Cocktails', icon: '🍹' }
  ],

  menuItems: [
    {
      id: 'dish-1',
      name: 'Nawabi Saffron Dum Biryani',
      category: 'biryani',
      price: 685,
      description: 'Aged long-grain basmati cooked dum-style with Kashmiri saffron, tender marinated cuts, caramelized shallots, mint, and edible silver foil. Served with pomegranate burani raita.',
      diet: 'non-veg',
      spiceLevel: 2,
      isChefSpecial: true,
      isPopular: true,
      image: 'assets/images/dum-biryani.jpg',
      calories: '640 kcal',
      prepTime: '25 mins',
      allergens: 'Dairy, Tree Nuts',
      pairing: 'Royal Saffron Lassi or Pinot Noir',
      story: 'Slow-cooked in dough-sealed handis over smoldering coals for 4 hours to infuse subtle aromatics.'
    },
    {
      id: 'dish-2',
      name: 'Grand Butter Chicken Makhani',
      category: 'curries',
      price: 625,
      description: 'Succulent tandoor-roasted chicken tikka simmered in a velvety sauce of San Marzano plum tomatoes, churned white butter, organic cashew paste, and fragrant sun-dried fenugreek.',
      diet: 'non-veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80',
      calories: '590 kcal',
      prepTime: '20 mins',
      allergens: 'Dairy, Cashews',
      pairing: 'Truffle Garlic Butter Naan',
      story: 'Our 50-year heritage recipe with zero synthetic colors and pure dairy cream.'
    },
    {
      id: 'dish-3',
      name: 'Imperial Galouti Kebab Platter',
      category: 'tandoor',
      price: 720,
      description: 'Melt-in-mouth smoked lamb patties infused with 160 secret botanicals, rose water, and roasted gram flour. Served on mini saffron sheermal flatbreads with mint caviar.',
      diet: 'non-veg',
      spiceLevel: 2,
      isChefSpecial: true,
      isPopular: true,
      image: 'assets/images/tandoori-platter.jpg',
      calories: '520 kcal',
      prepTime: '20 mins',
      allergens: 'Dairy, Gluten',
      pairing: 'Single Malt Whisky or Smoked Kokum Soda',
      story: 'Originally crafted for Nawab Asad-ud-Daula of Lucknow who demanded a kebab that required no chewing.'
    },
    {
      id: 'dish-4',
      name: 'Dal Makhani — 24-Hour Dum Pukht',
      category: 'curries',
      price: 495,
      description: 'Slow-simmered whole black urad lentils and kidney beans cooked over low embers for 24 continuous hours with fresh tomato reduction, churned country butter, and pure cream.',
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      calories: '440 kcal',
      prepTime: '15 mins',
      allergens: 'Dairy',
      pairing: 'Laccha Paratha & Pickled Onions',
      story: 'Smoked with burning charcoal soaked in pure ghee (Dhungar technique) right before serving.'
    },
    {
      id: 'dish-5',
      name: 'Zafrani Malai Paneer Tikka',
      category: 'tandoor',
      price: 545,
      description: 'Farm-fresh cottage cheese cubes steeped in Greek yogurt, Kashmiri saffron, crushed green cardamom, and yellow chili glaze, char-roasted over clay tandoor with bell peppers.',
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      calories: '460 kcal',
      prepTime: '18 mins',
      allergens: 'Dairy',
      pairing: 'Mint Coriander Dip & Lemon Chaat',
      story: 'Prepared with in-house crafted paneer delivered fresh every morning from local dairy farms.'
    },
    {
      id: 'dish-6',
      name: 'Awadhi Nalli Nihari',
      category: 'signatures',
      price: 795,
      description: 'Prime shank cuts slow-braised overnight in a rich marrow gravy infused with royal potli masala, ginger juliennes, green chilies, and fresh lime squeeze.',
      diet: 'non-veg',
      spiceLevel: 3,
      isChefSpecial: true,
      isPopular: false,
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
      calories: '710 kcal',
      prepTime: '25 mins',
      allergens: 'Gluten (Flour liaison)',
      pairing: 'Khamiri Roti or Roghani Naan',
      story: 'Traditional dawn breakfast of Mughal nobles cooked in sealed brass cauldrons.'
    },
    {
      id: 'dish-7',
      name: 'Subz Saffron Royal Biryani',
      category: 'biryani',
      price: 535,
      description: 'Fresh organic garden florets, baby potatoes, green peas, and paneer cubes tossed in royal spices, layered with aged basmati, dried apricots, roasted cashews, and saffron milk.',
      diet: 'veg',
      spiceLevel: 2,
      isChefSpecial: false,
      isPopular: true,
      image: 'assets/images/dum-biryani.jpg',
      calories: '490 kcal',
      prepTime: '20 mins',
      allergens: 'Dairy, Tree Nuts',
      pairing: 'Cucumber Mint Raita & Mirchi Ka Salan',
      story: 'Infused with fragrant kewra (pandanus) water and sealed with whole-wheat dough.'
    },
    {
      id: 'dish-8',
      name: 'Truffle & Garlic Butter Naan',
      category: 'breads',
      price: 195,
      description: 'Soft leavened tandoor-baked flatbread brushed with black truffle-infused churned butter, toasted garlic crisps, and fresh coriander.',
      diet: 'veg',
      spiceLevel: 1,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      calories: '280 kcal',
      prepTime: '10 mins',
      allergens: 'Gluten, Dairy',
      pairing: 'Grand Butter Chicken or Shahi Paneer',
      story: 'Hand-stretched on gaddi and slapped directly onto 450°C clay tandoor walls.'
    },
    {
      id: 'dish-9',
      name: 'Zafrani Rasmalai with 24K Gold Leaf',
      category: 'desserts',
      price: 385,
      description: 'Delicate poached cottage cheese discs steeped in saffron-infused reduced milk (rabri), studded with Iranian pistachio slivers, cardamom pearls, and 24K edible gold vark.',
      diet: 'veg',
      spiceLevel: 0,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
      calories: '310 kcal',
      prepTime: '10 mins',
      allergens: 'Dairy, Tree Nuts',
      pairing: 'Royal Kashmiri Kahwa',
      story: 'Rabri is simmered for 6 hours until it reaches golden velvet perfection.'
    },
    {
      id: 'dish-10',
      name: 'Matka Kulfi Falooda Royale',
      category: 'desserts',
      price: 345,
      description: 'Traditional slow-cooked clotted milk kulfi with crushed almonds and pistachio, served over rose syrup infused vermicelli falooda, sabja seeds, and rabri drizzle.',
      diet: 'veg',
      spiceLevel: 0,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      calories: '370 kcal',
      prepTime: '10 mins',
      allergens: 'Dairy, Nuts',
      pairing: 'Espresso or Masala Chai',
      story: 'Set in earthen clay pots (matkas) to impart subtle mineral sweetness.'
    },
    {
      id: 'dish-11',
      name: 'Royal Saffron & Rose Elixir',
      category: 'beverages',
      price: 295,
      description: 'Artisanal mocktail with cold-steeped organic Damask rose petals, saffron threads, lemon verbena, crushed basil seeds, and sparkling Himalayan mineral water.',
      diet: 'vegan',
      spiceLevel: 0,
      isChefSpecial: true,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      calories: '120 kcal',
      prepTime: '8 mins',
      allergens: 'None',
      pairing: 'Spicy Kebabs & Biryanis',
      story: 'Inspired by ancient Mughal summer sherbets served in brass goblets with mountain snow.'
    },
    {
      id: 'dish-12',
      name: 'Smoked Kokum & Cumin Cooler',
      category: 'beverages',
      price: 265,
      description: 'Sun-dried wild kokum berry extract, roasted black cumin, pink Himalayan rock salt, fresh mint leaves, and effervescent ginger beer over hand-carved clear ice.',
      diet: 'vegan',
      spiceLevel: 1,
      isChefSpecial: false,
      isPopular: true,
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
      calories: '95 kcal',
      prepTime: '6 mins',
      allergens: 'None',
      pairing: 'Tandoori Platters & Rich Curries',
      story: 'Traditional digestive elixir packed with natural antioxidants and refreshing coastal tartness.'
    }
  ],

  // Customer Reviews & Social Proof
  reviews: [
    {
      name: 'Vikramaditya Singhania',
      role: 'Food Connoisseur & Critic',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'The Nawabi Dum Biryani and 24-hour Dal Makhani are nothing short of a transcendent experience. The aromatic depth of Kashmiri saffron and melt-in-mouth kebabs set a new benchmark for Indian luxury dining.',
      date: 'Visited 2 weeks ago'
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Luxury Lifestyle Blogger',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'The interior architecture is breathtaking — feels like a modern palace in Rajasthan. Service is impeccable, and the instant table booking via WhatsApp made planning our family anniversary effortless!',
      date: 'Visited 1 month ago'
    },
    {
      name: 'Chef Marcus Sterling',
      role: 'Michelin Star Chef, London',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      comment: 'Remarkable mastery over spice balance and charcoal tandoor temperatures. The Galouti kebabs literally melt on your tongue without effort. World-class culinary excellence.',
      date: 'Visited 3 weeks ago'
    }
  ],

  // Ambience & Culinary Gallery Showcase
  gallery: [
    {
      title: 'Regal Dining Hall & Chandelier Ambiance',
      category: 'ambience',
      image: 'assets/images/hero-ambience.jpg'
    },
    {
      title: 'Charcoal Tandoor Sizzling Platter',
      category: 'food',
      image: 'assets/images/tandoori-platter.jpg'
    },
    {
      title: 'Imperial Hyderabadi Dum Biryani Handi',
      category: 'food',
      image: 'assets/images/dum-biryani.jpg'
    },
    {
      title: 'Velvety Makhani Gravy & Artisan Naan',
      category: 'food',
      image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Royal Rasmalai with Saffron & Gold Leaf',
      category: 'dessert',
      image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Private Maharaja Dining Chamber',
      category: 'ambience',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

// Global accessor
if (typeof window !== 'undefined') {
  window.RESTAURANT_CONFIG = RESTAURANT_CONFIG;
}
