# Royal Saffron — Imperial Indian Fine Dining

A premium single-page Indian fine dining restaurant website featuring real hero photography, JSON-LD Schema.org structured data for SEO, a white-label persona switcher system, and a reservation section.

## Features

- **Real hero photography**: 3 high-quality restaurant/food images (Dum Biryani, Tandoori Platter, Hero Ambience)
- **JSON-LD Schema.org**: Restaurant structured data for Google rich snippets and SEO
- **White-label persona switcher**: Demo-bar allows switching restaurant identity for client demonstrations
- **Reservation form**: Table booking with validation
- **Menu showcase**: Indian fine dining menu sections
- **Ambient noise overlay**: CSS texture for premium feel
- **Responsive CSS**: Dedicated responsive.css

## Technology Stack

- HTML5 (semantic + Schema.org JSON-LD)
- CSS3 (3 files: styles, components, responsive)
- JavaScript ES6+ (2 files: app, customizer)
- Google Fonts (CDN)
- Real JPG photography (3 images, ~800KB-1MB each)

## Project Structure

```
royal-saffron-restaurant/
├── index.html              # Main page with Schema.org JSON-LD
├── css/
│   ├── styles.css          # Core styles
│   ├── components.css      # UI components
│   └── responsive.css      # Media queries
├── js/
│   ├── app.js              # Main application logic
│   └── customizer.js       # Persona/theme switcher
└── images/
    ├── hero-ambience.jpg   # Restaurant interior (~1MB)
    ├── dum-biryani.jpg     # Food photography (~800KB)
    └── tandoori-platter.jpg # Food photography (~950KB)
```

## Local Setup

```bash
# Open directly in browser
# Double-click index.html

# Or use a local server
npx serve .
```

## Deployment (GitHub Pages)

1. Push to GitHub
2. Settings > Pages > main > / (root)
3. Visit: `https://YOUR_USERNAME.github.io/royal-saffron-restaurant/`

## SEO Features

This site includes Schema.org Restaurant markup which enables Google rich snippets:
- Restaurant name, cuisine type, price range
- Physical address and phone number
- Aggregate rating

## Known Limitations

- Single page only (no separate menu, gallery, or booking pages)
- Reservation form is frontend-only
- The demo-bar persona switcher is intended for agency client presentations

## Links

- **Live Demo:** *(Add after deployment)*
- **GitHub:** *(Add after creating repository)*
