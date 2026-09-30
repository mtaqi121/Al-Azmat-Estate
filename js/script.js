(function () {
  'use strict';

  var properties = [
    {
      id: 1,
      image: 'assets/images/property-grid.png',
      images: ['assets/images/property-grid.png', 'assets/images/property-detail-1.png'],
      alt: 'Sample modern apartment listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Modern 2-Bedroom Apartments',
      area: 'Gulshan-e-Iqbal',
      location: 'Gulshan-e-Iqbal · Karachi',
      price: 'Price · PKR 80 Lakh - 2.5 Crore',
      priceValue: 8000000 ,
      type: 'apartment',
      typeLabel: 'Apartment',
      bedrooms: '2 beds',
      bathrooms: '2 baths',
      areaSize: '800 sq ft - 1,200 sq ft',
      description: 'Well-located apartments in Gulshan-e-iqbal with options for different sizes, layouts, and budgets.'
    },
    {
      id: 2,
      image: 'assets/images/property-detail-1.png',
      images: ['assets/images/property-detail-1.png', 'assets/images/property-detail-2.png'],
      alt: 'Sample family home listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Spacious 3-Bedroom Apartments',
      area: 'Gulshan-e-iqbal',
      location: 'Gulshan-e-iqbal · Karachi',
      price: 'Price · PKR 1.4 Crore - 3.5 Crore',
      priceValue: 14000000,
      type: 'Flat',
      typeLabel: 'Flat',
      bedrooms: '3 beds',
      bathrooms: '3 baths',
      areaSize: '1,200 sq ft - 1,800 sq ft',
      description: 'Spacious 3-bedroom apartments in Gulshan-e-iqbal with modern layouts and comfortable living spaces'
    },
    {
      id: 3,
      image: 'assets/images/property-detail-2.png',
      images: ['assets/images/property-detail-2.png', 'assets/images/property-detail-3.png'],
      alt: 'Sample development listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Elegant Family Residence',
      area: 'DHA Defence',
      location: 'DHA Defence · Karachi',
      price: 'Price · PKR 2.5 Crore - 7 Crore',
      priceValue: 45000000,
      type: 'Flat',
      typeLabel: 'House',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      areaSize: '1,800 sq ft - 2,500 sq ft',
      description: 'A generously sized family apartment with well-planned rooms, spacious living areas, and a convenient DHA Defence location.'
    },
    {
      id: 4,
      image: 'assets/images/property-detail-3.png',
      images: ['assets/images/property-detail-3.png', 'assets/images/property-detail-4.png'],
      alt: 'Sample luxury residence listing',
      purpose: 'Sale',
      status: 'For Sale',
      title: 'Modern Family Portion',
      area: 'Gulshan-e-iqbal',
      location: 'Gulshan-e-iqbal · Karachi',
      price: 'Price · PKR 1.2 Crore - 4.5 Crore',
      priceValue: 180000,
      type: 'Portion',
      typeLabel: 'Portion',
      bedrooms: '2 beds to 4 beds',
      bathrooms: '2 baths to 4 baths',
      areaSize: '120 SQ YD to 240 SQ YD',
      description: 'A well-maintained portion offering comfortable bedrooms, a bright living space, and practical family-friendly surroundings.'
    },
    {
      id: 5,
      image: 'assets/images/property-detail-4.png',
      images: ['assets/images/property-detail-4.png', 'assets/images/property-detail-5.png'],
      alt: 'Sample home exterior listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Contemporary Family Home',
      area: 'Gulshan-e-iqbal',
      location: 'Gulshan-e-iqbal · Karachi',
      price: 'Price · PKR 3 Crore - 30 Crore',
      priceValue: 35000000,
      type: 'house',
      typeLabel: 'House , 1 Unit ',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      areaSize: '120 SQ YD - 1000 SQ YD',
      description: 'A beautifully designed family home featuring generous living spaces, well-sized bedrooms, modern finishes, and a desirable Gulshan-e-iqbal location'
    },
    {
      id: 6,
      image: 'assets/images/property-detail-6.png',
      images: ['assets/images/property-detail-6.png', 'assets/images/property-detail-5.png'],
      alt: 'Sample villa listing',
      purpose: 'rent',
      status: 'For rent',
      title: 'Well Maintained Flat | House | Portion | Shops and Commercial for Rent',
      area: 'Gulshan-e-iqbal',
      location: 'Gulshan-e-iqbal · Karachi',
      price: 'Price · PKR 35 Thousand to 30 Lakhs / month',
      priceValue: 350000,
      type: 'Hpuse/Flat/Portion/Shops',
      typeLabel: 'Hpuse/Flat/Portion/Shops',
      bedrooms: '2 to 5 beds | Shops | Commercial | Offices',
      bathrooms: '2 to 5 baths ',
      areaSize: '4,500 sq ft',
      description: 'A well-maintained property offering practical space in a convenient location, suitable for residential or commercial requirements.'
    }
  ];

  var whatsappNumber = '923002778818';
  var generalWhatsAppMessage = 'Hello AL-AZMAT ESTATE, I would like information about your properties.';
  var propertyGrid = document.querySelector('#property-grid');
  var revealObserver;

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[character];
    });
  }

  function propertyCard(property, index) {
    return '<article tabindex="0" class="property-card' + (index === 0 ? ' featured' : '') + ' reveal' + (index % 3 === 1 ? ' delay-1' : index % 3 === 2 ? ' delay-2' : '') + '">' +
      '<div class="property-photo"><img src="' + escapeHtml(property.image) + '" alt="' + escapeHtml(property.alt) + '" loading="lazy" decoding="async"><span class="property-tag">Listings</span><span class="property-type">' + escapeHtml(property.status) + '</span></div>' +
      '<div class="property-body"><div><h3>' + escapeHtml(property.title) + '</h3><p>' + escapeHtml(property.location) + '</p><strong class="property-price">' + escapeHtml(property.price) + '</strong></div>' +
      '<div class="property-meta"><span>' + escapeHtml(property.typeLabel) + '</span><span>' + escapeHtml(property.bedrooms) + '</span><span>' + escapeHtml(property.bathrooms) + '</span><span>' + escapeHtml(property.areaSize) + '</span></div>' +
      '<p class="property-description">' + escapeHtml(property.description) + '</p>' +
      '<div class="property-actions"><button type="button" class="property-details" data-property-id="' + property.id + '">View details <span>↗</span></button><a href="#contact" class="property-contact" data-property-id="' + property.id + '">Contact <span>↗</span></a></div></div></article>';
  }

  function observeReveals() {
    if (!propertyGrid) return;
    var newItems = propertyGrid.querySelectorAll('.reveal:not(.is-observed)');
    if (!('IntersectionObserver' in window)) {
      newItems.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    newItems.forEach(function (item) {
      item.classList.add('is-observed');
      revealObserver.observe(item);
    });
  }

  function renderProperties(list) {
    if (!propertyGrid) return;
    propertyGrid.innerHTML = list.slice(0, 6).map(propertyCard).join('');
    bindPropertyActions();
    observeReveals();
  }

  function makeWhatsAppUrl(message) {
    return 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
  }

  function propertyWhatsAppMessage(property) {
    return 'Hello AL-AZMAT ESTATE, I am interested in ' + property.title + ' in ' + property.area + '. Please share more details.';
  }

  var modal = document.querySelector('#property-modal');
  var modalImage = document.querySelector('#modal-image');
  var modalTitle = document.querySelector('#modal-title');
  var modalLocation = document.querySelector('#modal-location');
  var modalPrice = document.querySelector('#modal-price');
  var modalMeta = document.querySelector('#modal-meta');
  var modalDescription = document.querySelector('#modal-description');
  var modalContact = document.querySelector('#modal-contact');
  var modalWhatsApp = document.querySelector('#modal-whatsapp');
  var modalPrevious = document.querySelector('#modal-previous');
  var modalNext = document.querySelector('#modal-next');
  var modalImageCount = document.querySelector('#modal-image-count');
  var modalClose = modal ? modal.querySelector('.modal-close') : null;
  var lastFocusedElement;
  var activePropertyImages = [];
  var activeImageIndex = 0;
  var contactModal = document.querySelector('#contact-modal');
  var contactModalClose = contactModal ? contactModal.querySelector('.modal-close') : null;
  var contactModalTriggers = document.querySelectorAll('[data-contact-popup]');
  var contactCopyButton = contactModal ? contactModal.querySelector('.contact-copy-button') : null;
  var lastContactTrigger;

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function closeContactModal() {
    if (!contactModal || contactModal.hidden) return;
    contactModal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastContactTrigger) lastContactTrigger.focus();
  }

  function openContactModal() {
    if (!contactModal) return;
    lastContactTrigger = document.activeElement;
    contactModal.hidden = false;
    document.body.classList.add('modal-open');
    contactModalClose.focus();
  }

  function copyContactPhone() {
    var phoneNumber = '0300-2778818';

    function showCopyFeedback(message) {
      contactCopyButton.textContent = message;
      window.setTimeout(function () { contactCopyButton.textContent = 'Copy'; }, 1800);
    }

    function copyWithFallback() {
      var input = document.createElement('textarea');
      input.value = phoneNumber;
      input.setAttribute('readonly', '');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      var copied = document.execCommand('copy');
      input.remove();
      showCopyFeedback(copied ? 'Copied' : 'Copy failed');
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(phoneNumber).then(function () {
        showCopyFeedback('Copied');
      }).catch(copyWithFallback);
    } else {
      copyWithFallback();
    }
  }

  function openModal(property) {
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    activePropertyImages = property.images && property.images.length ? property.images : [property.image];
    activeImageIndex = 0;
    updateModalImage(property);
    modalTitle.textContent = property.title;
    modalLocation.textContent = property.location;
    modalPrice.textContent = property.price;
    modalMeta.innerHTML = '<span>' + escapeHtml(property.status) + '</span><span>' + escapeHtml(property.typeLabel) + '</span><span>' + escapeHtml(property.bedrooms) + '</span><span>' + escapeHtml(property.bathrooms) + '</span><span>' + escapeHtml(property.areaSize) + '</span>';
    modalDescription.textContent = property.description;
    modalContact.dataset.propertyId = property.id;
    modalWhatsApp.href = makeWhatsAppUrl(propertyWhatsAppMessage(property));
    modal.hidden = false;
    document.body.classList.add('modal-open');
    modalClose.focus();
  }

  function updateModalImage(property) {
    modalImage.src = activePropertyImages[activeImageIndex];
    modalImage.alt = property.alt + ' image ' + (activeImageIndex + 1);
    modalImageCount.textContent = (activeImageIndex + 1) + ' / ' + activePropertyImages.length;
    modalPrevious.disabled = activePropertyImages.length < 2;
    modalNext.disabled = activePropertyImages.length < 2;
  }

  function changeModalImage(direction) {
    var property = getPropertyById(modalContact.dataset.propertyId);
    if (!property || activePropertyImages.length < 2) return;
    activeImageIndex = (activeImageIndex + direction + activePropertyImages.length) % activePropertyImages.length;
    updateModalImage(property);
  }

  function getPropertyById(id) {
    return properties.find(function (property) { return String(property.id) === String(id); });
  }

  function prefillPropertyInquiry(property) {
    var message = document.querySelector('#message');
    if (message && property) message.value = 'I would like more information about ' + property.title + ' in ' + property.area + '.';
  }

  function bindPropertyActions() {
    document.querySelectorAll('.property-card').forEach(function (card) {
      function openCard(event) {
        if (event.target.closest('a, button')) return;
        var property = getPropertyById(card.dataset.propertyId);
        if (property) openModal(property);
      }

      card.dataset.propertyId = card.querySelector('.property-details').dataset.propertyId;
      card.addEventListener('click', openCard);
      card.addEventListener('keydown', function (event) {
        if ((event.key === 'Enter' || event.key === ' ') && !event.target.closest('a, button')) {
          event.preventDefault();
          openCard(event);
        }
      });
    });
    document.querySelectorAll('.property-details').forEach(function (button) {
      button.addEventListener('click', function () {
        var property = getPropertyById(button.dataset.propertyId);
        if (property) openModal(property);
      });
    });
    document.querySelectorAll('.property-contact').forEach(function (link) {
      link.addEventListener('click', function () {
        var property = getPropertyById(link.dataset.propertyId);
        prefillPropertyInquiry(property);
      });
    });
  }

  modalPrevious.addEventListener('click', function () { changeModalImage(-1); });
  modalNext.addEventListener('click', function () { changeModalImage(1); });

  function scrollToTarget(target) {
    if (!target) return;
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }

  var menu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('#primary-navigation');

  function closeMenu() {
    if (!menu || !nav) return;
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  }

  if (menu && nav) {
    menu.addEventListener('click', function (event) {
      event.stopPropagation();
      var open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      document.body.classList.toggle('menu-open', open);
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
    document.addEventListener('click', function (event) {
      if (nav.classList.contains('is-open') && !nav.contains(event.target) && !menu.contains(event.target)) closeMenu();
    });
  }

  if (contactModalTriggers.length && contactModal) {
    contactModalTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        closeMenu();
        openContactModal();
      });
    });
    contactModalClose.addEventListener('click', closeContactModal);
    contactModal.addEventListener('click', function (event) {
      if (event.target === contactModal) closeContactModal();
    });
    contactCopyButton.addEventListener('click', copyContactPhone);
  }

  document.querySelectorAll('a[href^="#"]:not([data-contact-popup])').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (link.closest('.services-section .service-card')) {
        event.preventDefault();
        closeMenu();
        openContactModal();
        return;
      }
      var target = document.querySelector(link.getAttribute('href'));
      if (target) {
        event.preventDefault();
        closeMenu();
        closeModal();
        scrollToTarget(target);
        window.history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });

  if (modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
        closeContactModal();
        closeMenu();
      }
      if (event.key === 'Tab' && !modal.hidden) {
        var focusable = modal.querySelectorAll('a[href], button:not([disabled])');
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      if (event.key === 'Tab' && contactModal && !contactModal.hidden) {
        var contactFocusable = contactModal.querySelectorAll('a[href], button:not([disabled])');
        var contactFirst = contactFocusable[0];
        var contactLast = contactFocusable[contactFocusable.length - 1];
        if (event.shiftKey && document.activeElement === contactFirst) {
          event.preventDefault();
          contactLast.focus();
        } else if (!event.shiftKey && document.activeElement === contactLast) {
          event.preventDefault();
          contactFirst.focus();
        }
      }
    });
    modalContact.addEventListener('click', function () {
      prefillPropertyInquiry(getPropertyById(modalContact.dataset.propertyId));
      closeModal();
    });
  }

  document.querySelectorAll('[data-whatsapp-general]').forEach(function (link) {
    link.href = makeWhatsAppUrl(generalWhatsAppMessage);
  });

  var form = document.querySelector('#lead-form');
  if (form) {
    var customLocation = document.querySelector('#custom-location');
    var locationSelect = document.querySelector('#location');
    var formFields = [
      { id: 'name', message: 'Please enter your name.' },
      { id: 'phone', message: 'Please enter a valid phone number.' },
      { id: 'need', message: 'Please select what you are interested in.' },
      { id: 'location', message: 'Please choose a preferred location.' },
      { id: 'message', message: 'Please add at least 10 characters about what you need.' }
    ];
    function clearFieldError(field) {
      var error = document.querySelector('#' + field.id + '-error');
      if (error) error.textContent = '';
      field.removeAttribute('aria-invalid');
    }
    function validateField(fieldConfig) {
      var field = document.querySelector('#' + fieldConfig.id);
      var value = field.value.trim();
      var valid = Boolean(value);
      if (fieldConfig.id === 'name') valid = value.length >= 2;
      if (fieldConfig.id === 'phone') valid = /^[0-9+()\s-]{7,}$/.test(value);
      if (fieldConfig.id === 'message') valid = value.length >= 10;
      if (fieldConfig.id === 'location' && value === 'other') valid = customLocation.value.trim().length > 0;
      var error = document.querySelector('#' + fieldConfig.id + '-error');
      if (valid) {
        clearFieldError(field);
        if (customLocation) customLocation.removeAttribute('aria-invalid');
      } else {
        field.setAttribute('aria-invalid', 'true');
        if (error) error.textContent = fieldConfig.message;
      }
      return valid;
    }
    formFields.forEach(function (fieldConfig) {
      var field = document.querySelector('#' + fieldConfig.id);
      field.addEventListener('input', function () { clearFieldError(field); });
      field.addEventListener('change', function () {
        clearFieldError(field);
        if (fieldConfig.id === 'location') {
          customLocation.hidden = field.value !== 'other';
          customLocation.required = !customLocation.hidden;
          if (customLocation.hidden) customLocation.value = '';
          clearFieldError(customLocation);
        }
      });
    });
    customLocation.addEventListener('input', function () {
      clearFieldError(locationSelect);
      clearFieldError(customLocation);
    });
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var valid = formFields.map(validateField);
      var status = form.querySelector('.form-status');
      if (valid.indexOf(false) !== -1) {
        status.className = 'form-status is-error';
        status.textContent = 'Please check the highlighted fields and try again.';
        var invalidField = formFields[valid.indexOf(false)].id;
        (invalidField === 'location' && locationSelect.value === 'other' ? customLocation : document.querySelector('#' + invalidField)).focus();
        return;
      }
      var preferredLocation = locationSelect.value === 'other' ? customLocation.value.trim() : locationSelect.value;
      var queryMessage = [
        'Hello AL-AZMAT ESTATE, I would like to make an inquiry.',
        'Name: ' + document.querySelector('#name').value.trim(),
        'Phone Number: ' + document.querySelector('#phone').value.trim(),
        'Interested In: ' + document.querySelector('#need').value.trim(),
        'Preferred Location: ' + preferredLocation,
        'Query/Requirement: ' + document.querySelector('#message').value.trim()
      ].join('\n');
      window.open(makeWhatsAppUrl(queryMessage), '_blank', 'noopener');
      status.className = 'form-status is-success';
      status.textContent = 'Your query has been prepared in WhatsApp.';
      form.reset();
      customLocation.hidden = true;
      customLocation.required = false;
      status.focus();
    });
  }

  document.querySelectorAll('details').forEach(function (item) {
    var summary = item.querySelector('summary');
    summary.setAttribute('aria-expanded', String(item.open));
    summary.addEventListener('click', function () {
      document.querySelectorAll('details').forEach(function (other) {
        if (other !== item) {
          other.open = false;
          other.querySelector('summary').setAttribute('aria-expanded', 'false');
        }
      });
    });
    item.addEventListener('toggle', function () {
      summary.setAttribute('aria-expanded', String(item.open));
    });
  });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.primary-nav a[href^="#"]'));
  var sectionLinks = navLinks.filter(function (link) { return link.getAttribute('href') !== '#top' && !link.classList.contains('nav-cta'); });
  if ('IntersectionObserver' in window && sectionLinks.length) {
    var activeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          sectionLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-25% 0px -60% 0px', threshold: 0 });
    sectionLinks.forEach(function (link) {
      var section = document.querySelector(link.getAttribute('href'));
      if (section) activeObserver.observe(section);
    });
  }

  renderProperties(properties);
  document.querySelectorAll('.reveal:not(.is-observed)').forEach(function (item) {
    item.classList.add('is-observed');
    if ('IntersectionObserver' in window) {
      if (!revealObserver) {
        revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
      }
      revealObserver.observe(item);
    } else {
      item.classList.add('is-visible');
    }
  });
}());