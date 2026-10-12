/**
 * WHITE-LABEL LIVE DEMO SWITCHER & THEME CUSTOMIZER ENGINE
 * =========================================================
 * Allows prospective restaurant owners / clients to switch
 * between restaurant presets in real-time, or test a custom
 * brand live without page reloading.
 */

const Customizer = {
  init() {
    this.bindEvents();
    this.applyCurrentTheme();
  },

  // Apply CSS Variables and brand tokens for the active preset
  applyCurrentTheme() {
    const activeKey = RESTAURANT_CONFIG.activePreset || 'royal-saffron';
    const preset = RESTAURANT_CONFIG.presets[activeKey];
    if (!preset) return;

    const root = document.documentElement;
    const theme = preset.theme;

    root.style.setProperty('--primary-gold', theme.primaryGold);
    root.style.setProperty('--primary-gold-light', theme.primaryGoldLight);
    root.style.setProperty('--primary-gold-dark', theme.primaryGoldDark);
    root.style.setProperty('--accent-saffron', theme.accentSaffron);
    root.style.setProperty('--accent-saffron-glow', theme.accentSaffronGlow);
    root.style.setProperty('--bg-dark', theme.bgDark);
    root.style.setProperty('--bg-card', theme.bgCard);
    root.style.setProperty('--bg-card-elevated', theme.bgCardElevated);
    root.style.setProperty('--border-color', theme.borderColor);

    if (theme.fontHeading) {
      root.style.setProperty('--font-heading', theme.fontHeading);
    }

    // Update active state on top demo bar buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
      if (btn.dataset.preset === activeKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Re-render brand text & content
    if (window.App && typeof window.App.renderBrandContent === 'function') {
      window.App.renderBrandContent();
      window.App.renderMenuItems();
      window.App.updateCartUI();
    }
  },

  // Switch to a pre-built restaurant preset
  switchPreset(presetId) {
    if (!RESTAURANT_CONFIG.presets[presetId]) return;

    RESTAURANT_CONFIG.activePreset = presetId;
    this.applyCurrentTheme();

    const preset = RESTAURANT_CONFIG.presets[presetId];
    if (window.App && typeof window.App.showToast === 'function') {
      window.App.showToast(`Switched Demo: ${preset.name} (${preset.cuisineType})`);
    }
  },

  // Open the Live Rebrand Modal
  openRebrandModal() {
    const modal = document.getElementById('rebrand-modal');
    if (!modal) return;

    const activeConfig = RESTAURANT_CONFIG.presets[RESTAURANT_CONFIG.activePreset];

    // Prefill form
    const nameInput = document.getElementById('custom-brand-name');
    const phoneInput = document.getElementById('custom-phone');
    const waInput = document.getElementById('custom-whatsapp');
    const colorInput = document.getElementById('custom-primary-color');
    const accentInput = document.getElementById('custom-accent-color');
    const addressInput = document.getElementById('custom-address');

    if (nameInput) nameInput.value = activeConfig.name;
    if (phoneInput) phoneInput.value = activeConfig.contact.phone;
    if (waInput) waInput.value = activeConfig.contact.whatsapp;
    if (colorInput) colorInput.value = activeConfig.theme.primaryGold;
    if (accentInput) accentInput.value = activeConfig.theme.accentSaffron;
    if (addressInput) addressInput.value = activeConfig.contact.address;

    modal.classList.add('open');
  },

  // Apply Live Rebrand Customizations
  applyCustomRebrand(form) {
    const activeKey = RESTAURANT_CONFIG.activePreset;
    const config = RESTAURANT_CONFIG.presets[activeKey];

    const customName = form.custom_name.value.trim() || config.name;
    const customPhone = form.custom_phone.value.trim() || config.contact.phone;
    const customWa = form.custom_whatsapp.value.trim() || config.contact.whatsapp;
    const customColor = form.custom_color.value || config.theme.primaryGold;
    const customAccent = form.custom_accent.value || config.theme.accentSaffron;
    const customAddress = form.custom_address.value.trim() || config.contact.address;

    // Mutate current active configuration
    config.name = customName;
    config.contact.phone = customPhone;
    config.contact.displayPhone = customPhone;
    config.contact.whatsapp = customWa;
    config.contact.address = customAddress;
    config.theme.primaryGold = customColor;
    config.theme.accentSaffron = customAccent;

    // Apply
    this.applyCurrentTheme();

    if (window.App && typeof window.App.closeModals === 'function') {
      window.App.closeModals();
      window.App.showToast(`✨ Rebranded successfully to "${customName}"!`);
    }
  },

  bindEvents() {
    // Topbar preset click handlers
    document.querySelectorAll('.preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetId = btn.dataset.preset;
        this.switchPreset(presetId);
      });
    });

    // Customizer Modal Toggle
    const customizerToggle = document.getElementById('btn-open-customizer');
    if (customizerToggle) {
      customizerToggle.addEventListener('click', () => {
        this.openRebrandModal();
      });
    }

    // Rebrand Form Submit
    const rebrandForm = document.getElementById('rebrand-customizer-form');
    if (rebrandForm) {
      rebrandForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.applyCustomRebrand(rebrandForm);
      });
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  Customizer.init();
});

window.Customizer = Customizer;
