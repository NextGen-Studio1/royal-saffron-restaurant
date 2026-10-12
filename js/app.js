/**
 * ROYAL SAFFRON & INDIAN RESTAURANT APPLICATION LOGIC
 * ===================================================
 * Core Interactive Application: Menu Filtering, Cart System,
 * WhatsApp Integration, Table Reservations, and Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  activeCategory: 'all',
  activeDiet: 'all',
  searchQuery: '',
  cart: [],

  init() {
    this.renderBrandContent();
    this.renderMenuCategories();
    this.renderMenuItems();
    this.renderReviews();
    this.renderGallery();
    this.bindEvents();
    this.initHeaderScroll();
    this.updateCartUI();
  },

  // Get current active config from RESTAURANT_CONFIG
  getConfig() {
    const activeKey = RESTAURANT_CONFIG.activePreset || 'royal-saffron';
    return RESTAURANT_CONFIG.presets[activeKey];
  },

  // Hydrate DOM with active brand identity
  renderBrandContent() {
    const config = this.getConfig();
    if (!config) return;

    // Brand Name and Taglines
    document.querySelectorAll('.brand-name-text').forEach(el => el.textContent = config.name);
    document.querySelectorAll('.brand-tagline-text').forEach(el => el.textContent = config.cuisineType);
    document.title = `${config.name} — ${config.tagline}`;

    // Hero Section
    const heroTitleEl = document.getElementById('hero-title');
    if (heroTitleEl) {
      heroTitleEl.innerHTML = `<span class="gold-text">${config.name}</span><br>${config.tagline}`;
    }

    const heroSubEl = document.getElementById('hero-subheadline');
    if (heroSubEl) heroSubEl.textContent = config.subheadline;

    const heroBadgeEl = document.getElementById('hero-badge-text');
    if (heroBadgeEl) heroBadgeEl.textContent = config.heroBadge;

    const heroStatusEl = document.getElementById('hero-status-text');
    if (heroStatusEl) heroStatusEl.textContent = config.timings.statusText;

    const heroBgImg = document.getElementById('hero-bg-img');
    if (heroBgImg) heroBgImg.src = config.heroImage;

    const heroRatingNum = document.getElementById('hero-rating-num');
    if (heroRatingNum) heroRatingNum.textContent = config.stats.rating;

    const heroRatingReviews = document.getElementById('hero-reviews-count');
    if (heroRatingReviews) heroRatingReviews.textContent = config.stats.reviewsCount;

    // Story & Chef Profile
    const chefNameEl = document.getElementById('chef-name');
    if (chefNameEl) chefNameEl.textContent = config.chefName;

    const chefTitleEl = document.getElementById('chef-title');
    if (chefTitleEl) chefTitleEl.textContent = config.chefTitle;

    const chefQuoteEl = document.getElementById('chef-quote');
    if (chefQuoteEl) chefQuoteEl.textContent = `“${config.chefQuote}”`;

    const chefSealEl = document.getElementById('chef-seal');
    if (chefSealEl) chefSealEl.textContent = config.chefName;

    // Contact, Addresses & WhatsApp
    document.querySelectorAll('.restaurant-phone-link').forEach(el => {
      el.href = `tel:${config.contact.phone}`;
      el.textContent = config.contact.displayPhone || config.contact.phone;
    });

    document.querySelectorAll('.restaurant-email-link').forEach(el => {
      el.href = `mailto:${config.contact.email}`;
      el.textContent = config.contact.email;
    });

    document.querySelectorAll('.restaurant-address-text').forEach(el => {
      el.textContent = `${config.contact.address}, ${config.contact.city}`;
    });

    document.querySelectorAll('.restaurant-timing-lunch').forEach(el => el.textContent = config.timings.lunch);
    document.querySelectorAll('.restaurant-timing-dinner').forEach(el => el.textContent = config.timings.dinner);

    const mapsIframe = document.getElementById('contact-maps-iframe');
    if (mapsIframe && config.contact.googleMapsEmbedUrl) {
      mapsIframe.src = config.contact.googleMapsEmbedUrl;
    }

    const mapsDirectLink = document.getElementById('maps-direct-link');
    if (mapsDirectLink && config.contact.googleMapsLink) {
      mapsDirectLink.href = config.contact.googleMapsLink;
    }

    // WhatsApp Links
    const waUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappDefaultMessage)}`;
    document.querySelectorAll('.whatsapp-direct-link').forEach(el => {
      el.href = waUrl;
    });
  },

  // Render Menu Category Tabs
  renderMenuCategories() {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;

    container.innerHTML = RESTAURANT_CONFIG.menuCategories.map(cat => `
      <button class="category-tab-btn ${cat.id === this.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <span>${cat.icon}</span> ${cat.name}
      </button>
    `).join('');
  },

  // Render Filtered Menu Items
  renderMenuItems() {
    const container = document.getElementById('menu-items-grid');
    if (!container) return;

    const config = this.getConfig();
    const currency = config.currency || '₹';

    let items = RESTAURANT_CONFIG.menuItems;

    // Filter by Category
    if (this.activeCategory !== 'all') {
      if (this.activeCategory === 'signatures') {
        items = items.filter(item => item.isChefSpecial);
      } else {
        items = items.filter(item => item.category === this.activeCategory);
      }
    }

    // Filter by Dietary
    if (this.activeDiet !== 'all') {
      items = items.filter(item => item.diet === this.activeDiet);
    }

    // Filter by Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      items = items.filter(item => 
        item.name.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }

    if (items.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="margin-bottom: 0.5rem; font-family: var(--font-heading);">No Delicacies Found</h3>
          <p>Try changing your search query or selecting a different dietary filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => {
      const spiceIcons = '🌶️'.repeat(item.spiceLevel || 0);
      const dietBadgeClass = item.diet === 'veg' ? 'veg' : (item.diet === 'non-veg' ? 'non-veg' : 'vegan');
      const dietLabel = item.diet === 'vegan' ? 'VEGAN' : '';

      return `
        <article class="menu-card" data-dish-id="${item.id}">
          <div class="menu-card-img-wrap" onclick="App.openDishModal('${item.id}')">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="menu-card-badges">
              <span class="badge-diet ${dietBadgeClass}">${dietLabel}</span>
              ${item.isChefSpecial ? '<span class="badge-pill badge-chef">⭐ Chef Special</span>' : ''}
              ${item.isPopular ? '<span class="badge-pill badge-popular">🔥 Must Try</span>' : ''}
            </div>
            <div class="menu-card-price-tag">${currency}${item.price}</div>
          </div>

          <div class="menu-card-body">
            <div class="menu-card-header">
              <h3 class="menu-card-title" onclick="App.openDishModal('${item.id}')">${item.name}</h3>
              ${spiceIcons ? `<span class="spice-meter" title="Spice Level">${spiceIcons}</span>` : ''}
            </div>
            <p class="menu-card-desc">${item.description}</p>

            <div class="menu-card-footer">
              <div class="menu-card-meta">
                <span>⏱️ ${item.prepTime || '20m'}</span>
                <span>🔥 ${item.calories || ''}</span>
              </div>
              <button class="btn-add-cart" onclick="App.addToCart('${item.id}')">
                <span>+</span> Add to Bag
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  },

  // Render Customer Reviews
  renderReviews() {
    const container = document.getElementById('reviews-grid');
    if (!container) return;

    container.innerHTML = RESTAURANT_CONFIG.reviews.map(rev => `
      <div class="review-card">
        <div>
          <div class="review-stars">${'★'.repeat(rev.rating)}</div>
          <p class="review-text">“${rev.comment}”</p>
        </div>
        <div class="review-author-wrap">
          <img src="${rev.avatar}" alt="${rev.name}" class="review-avatar">
          <div>
            <div class="review-name">${rev.name}</div>
            <div class="review-role">${rev.role} • ${rev.date}</div>
          </div>
        </div>
      </div>
    `).join('');
  },

  // Render Ambience Gallery
  renderGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    container.innerHTML = RESTAURANT_CONFIG.gallery.map(item => `
      <div class="gallery-item" onclick="App.openGalleryModal('${item.image}', '${item.title}')">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <div class="gallery-title">${item.title}</div>
        </div>
      </div>
    `).join('');
  },

  // Event Listeners
  bindEvents() {
    // Menu Category Tabs
    const categoryContainer = document.getElementById('category-tabs-container');
    if (categoryContainer) {
      categoryContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.category-tab-btn');
        if (!btn) return;
        this.activeCategory = btn.dataset.category;
        document.querySelectorAll('.category-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.renderMenuItems();
      });
    }

    // Dietary Filter Buttons
    document.querySelectorAll('.diet-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diet-toggle-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeDiet = btn.dataset.diet;
        this.renderMenuItems();
      });
    });

    // Search Input
    const searchInput = document.getElementById('menu-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.renderMenuItems();
      });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-open');
        mobileMenuBtn.textContent = navMenu.classList.contains('mobile-open') ? '✕' : '☰';
      });

      // Close mobile menu on link click
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('mobile-open');
          mobileMenuBtn.textContent = '☰';
        });
      });
    }

    // Floating WhatsApp Popup Toggle
    const waTrigger = document.getElementById('floating-whatsapp-btn');
    const waPopup = document.getElementById('whatsapp-popup-card');
    if (waTrigger && waPopup) {
      waTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        waPopup.classList.toggle('show');
      });

      document.addEventListener('click', (e) => {
        if (!waPopup.contains(e.target) && !waTrigger.contains(e.target)) {
          waPopup.classList.remove('show');
        }
      });
    }

    // Table Reservation Form Submission
    const reservationForm = document.getElementById('table-reservation-form');
    if (reservationForm) {
      reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleReservationSubmit(reservationForm);
      });
    }
  },

  // Header Scroll Effect
  initHeaderScroll() {
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  },

  // Open Dish Details Modal
  openDishModal(dishId) {
    const dish = RESTAURANT_CONFIG.menuItems.find(i => i.id === dishId);
    if (!dish) return;

    const modalBackdrop = document.getElementById('dish-detail-modal');
    const modalContent = document.getElementById('dish-modal-content');
    const config = this.getConfig();
    const currency = config.currency || '₹';

    modalContent.innerHTML = `
      <img src="${dish.image}" alt="${dish.name}" class="modal-dish-img">
      <div class="modal-dish-body">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
              <span class="badge-diet ${dish.diet === 'veg' ? 'veg' : (dish.diet === 'non-veg' ? 'non-veg' : 'vegan')}"></span>
              <h2 style="font-size: 1.5rem; color: #FFF; font-family: var(--font-heading);">${dish.name}</h2>
            </div>
            <span style="font-size: 0.85rem; color: var(--primary-gold); font-weight: 600; text-transform: uppercase;">
              ${dish.category.toUpperCase()} • ${'🌶️'.repeat(dish.spiceLevel || 0)}
            </span>
          </div>
          <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary-gold-light);">${currency}${dish.price}</div>
        </div>

        <p style="margin-bottom: 1.5rem; font-size: 1rem; line-height: 1.6;">${dish.description}</p>

        ${dish.story ? `
          <div style="background: rgba(212, 175, 55, 0.08); border-left: 3px solid var(--primary-gold); padding: 1rem; border-radius: 4px; margin-bottom: 1.5rem;">
            <strong style="color: var(--primary-gold); display: block; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.25rem;">✨ Culinary Heritage</strong>
            <p style="font-size: 0.9rem; color: #E2E8F0; font-style: italic;">${dish.story}</p>
          </div>
        ` : ''}

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2rem; background: rgba(255, 255, 255, 0.03); padding: 1rem; border-radius: var(--radius-md);">
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; display: block;">Allergen Info</span>
            <strong style="font-size: 0.9rem; color: #FFF;">${dish.allergens || 'None'}</strong>
          </div>
          <div>
            <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; display: block;">Sommelier Pairing</span>
            <strong style="font-size: 0.9rem; color: var(--primary-gold);">${dish.pairing || 'Chef Choice Mocktail'}</strong>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end;">
          <button class="btn btn-secondary btn-sm" onclick="App.closeModals()">Close</button>
          <button class="btn btn-primary btn-sm" onclick="App.addToCart('${dish.id}'); App.closeModals();">
            <span>+</span> Add to Bag (${currency}${dish.price})
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');
  },

  openGalleryModal(imgSrc, title) {
    const modalBackdrop = document.getElementById('dish-detail-modal');
    const modalContent = document.getElementById('dish-modal-content');

    modalContent.innerHTML = `
      <img src="${imgSrc}" alt="${title}" style="width: 100%; height: auto; max-height: 70vh; object-fit: contain;">
      <div style="padding: 1.5rem; text-align: center;">
        <h3 style="font-family: var(--font-heading); color: #FFF; margin-bottom: 1rem;">${title}</h3>
        <button class="btn btn-secondary btn-sm" onclick="App.closeModals()">Close</button>
      </div>
    `;

    modalBackdrop.classList.add('open');
  },

  closeModals() {
    document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.remove('open'));
  },

  // Shopping Cart & WhatsApp Order
  addToCart(dishId) {
    const dish = RESTAURANT_CONFIG.menuItems.find(i => i.id === dishId);
    if (!dish) return;

    const existing = this.cart.find(i => i.id === dishId);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...dish, quantity: 1 });
    }

    this.updateCartUI();
    this.showToast(`Added ${dish.name} to your Bag!`);
  },

  updateQuantity(dishId, delta) {
    const index = this.cart.findIndex(i => i.id === dishId);
    if (index === -1) return;

    this.cart[index].quantity += delta;
    if (this.cart[index].quantity <= 0) {
      this.cart.splice(index, 1);
    }

    this.updateCartUI();
  },

  toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('cart-drawer-backdrop');
    if (!drawer || !backdrop) return;

    if (open) {
      drawer.classList.add('open');
      backdrop.classList.add('open');
    } else {
      drawer.classList.remove('open');
      backdrop.classList.remove('open');
    }
  },

  updateCartUI() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const config = this.getConfig();
    const currency = config.currency || '₹';

    // Update Badges
    document.querySelectorAll('.cart-count-badge').forEach(el => el.textContent = totalCount);

    const itemsContainer = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const totalEl = document.getElementById('cart-total-val');

    if (subtotalEl) subtotalEl.textContent = `${currency}${subtotal}`;
    if (totalEl) totalEl.textContent = `${currency}${subtotal}`;

    if (!itemsContainer) return;

    if (this.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🛍️</div>
          <h4>Your Bag is Empty</h4>
          <p style="font-size: 0.85rem;">Add some mouth-watering royal delicacies from our menu!</p>
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-price">${currency}${item.price} each</span>
        </div>
        <div class="cart-item-qty-ctrl">
          <button class="btn-qty" onclick="App.updateQuantity('${item.id}', -1)">-</button>
          <span style="font-weight: 700; color: #FFF; min-width: 18px; text-align: center;">${item.quantity}</span>
          <button class="btn-qty" onclick="App.updateQuantity('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');
  },

  // Construct Direct WhatsApp Order Message
  checkoutViaWhatsApp() {
    if (this.cart.length === 0) {
      this.showToast('Please add items to your bag before checking out!');
      return;
    }

    const config = this.getConfig();
    const currency = config.currency || '₹';
    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let message = `🍽️ *NEW ORDER INQUIRY — ${config.name.toUpperCase()}*\n`;
    message += `──────────────────────\n`;
    this.cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}* (x${item.quantity}) — ${currency}${item.price * item.quantity}\n`;
    });
    message += `──────────────────────\n`;
    message += `*Total Order Value:* ${currency}${subtotal}\n\n`;
    message += `👤 *Customer Request:* Please confirm availability & delivery/takeaway timing.\n`;
    message += `📍 *Ordered via:* ${config.name} Official Digital Menu`;

    const waUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  },

  // Table Reservation Handler with Automated WhatsApp Booking Generator
  handleReservationSubmit(form) {
    const name = form.res_name.value;
    const phone = form.res_phone.value;
    const guests = form.res_guests.value;
    const date = form.res_date.value;
    const time = form.res_time.value;
    const seating = form.res_seating.value;
    const occasion = form.res_occasion.value;
    const notes = form.res_notes.value || 'None';

    const config = this.getConfig();

    let waMessage = `👑 *TABLE RESERVATION REQUEST — ${config.name.toUpperCase()}*\n`;
    waMessage += `──────────────────────\n`;
    waMessage += `👤 *Guest Name:* ${name}\n`;
    waMessage += `📞 *Phone:* ${phone}\n`;
    waMessage += `👥 *Number of Guests:* ${guests} Person(s)\n`;
    waMessage += `📅 *Date:* ${date}\n`;
    waMessage += `⏰ *Time:* ${time}\n`;
    waMessage += `🏛️ *Seating Preference:* ${seating}\n`;
    waMessage += `🎉 *Special Occasion:* ${occasion}\n`;
    waMessage += `📝 *Dietary / Special Notes:* ${notes}\n`;
    waMessage += `──────────────────────\n`;
    waMessage += `Please confirm my royal table reservation. Thank you!`;

    const waUrl = `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(waMessage)}`;
    
    this.showToast('Reservation details formatted! Opening WhatsApp...');
    setTimeout(() => {
      window.open(waUrl, '_blank');
      form.reset();
    }, 600);
  },

  // Toast Notification Trigger
  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
};

// Global App reference
window.App = App;
