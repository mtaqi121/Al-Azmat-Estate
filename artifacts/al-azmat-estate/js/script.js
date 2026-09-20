(function () {
  'use strict';

  var properties = [
    {
      id: 1,
      image: 'assets/images/property-grid.png',
      alt: 'Sample modern apartment listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Modern apartment living',
      area: 'Gulshan-e-Iqbal',
      location: 'Gulshan-e-Iqbal · Karachi',
      price: 'Sample sale · PKR 1.2 crore',
      priceValue: 12000000,
      type: 'apartment',
      typeLabel: 'Apartment',
      bedrooms: '2 beds',
      bathrooms: '2 baths',
      areaSize: '1,200 sq ft',
      description: 'A bright sample apartment brief for buyers seeking a connected Karachi address.'
    },
    {
      id: 2,
      image: 'assets/images/property-detail-1.png',
      alt: 'Sample family home listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Family home, considered',
      area: 'Gulistan-e-Johar',
      location: 'Gulistan-e-Johar · Karachi',
      price: 'Sample sale · PKR 2.8 crore',
      priceValue: 28000000,
      type: 'house',
      typeLabel: 'House',
      bedrooms: '3 beds',
      bathrooms: '3 baths',
      areaSize: '2,400 sq ft',
      description: 'A sample family-home profile with room for everyday living and future plans.'
    },
    {
      id: 3,
      image: 'assets/images/property-detail-2.png',
      alt: 'Sample development listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Room to grow',
      area: 'Scheme 33',
      location: 'Scheme 33 · Karachi',
      price: 'Sample sale · PKR 4.5 crore',
      priceValue: 45000000,
      type: 'house',
      typeLabel: 'House',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      areaSize: '3,000 sq ft',
      description: 'A placeholder new-build opportunity for buyers looking for more space.'
    },
    {
      id: 4,
      image: 'assets/images/property-detail-3.png',
      alt: 'Sample luxury residence listing',
      purpose: 'rent',
      status: 'For rent',
      title: 'A quieter kind of luxury',
      area: 'DHA',
      location: 'DHA · Karachi',
      price: 'Sample rent · PKR 180,000 / month',
      priceValue: 180000,
      type: 'villa',
      typeLabel: 'Villa',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      areaSize: '3,600 sq ft',
      description: 'A sample rental brief with privacy, generous proportions and a polished finish.'
    },
    {
      id: 5,
      image: 'assets/images/property-detail-4.png',
      alt: 'Sample home exterior listing',
      purpose: 'sale',
      status: 'For sale',
      title: 'Light-filled family place',
      area: 'Bahria Town Karachi',
      location: 'Bahria Town Karachi',
      price: 'Sample sale · PKR 3.5 crore',
      priceValue: 35000000,
      type: 'house',
      typeLabel: 'House',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      areaSize: '3,200 sq ft',
      description: 'A placeholder home profile for families considering a planned community.'
    },
    {
      id: 6,
      image: 'assets/images/property-detail-6.png',
      alt: 'Sample villa listing',
      purpose: 'rent',
      status: 'For rent',
      title: 'Space for the long view',
      area: 'DHA City Karachi',
      location: 'DHA City Karachi',
      price: 'Sample rent · PKR 250,000 / month',
      priceValue: 250000,
      type: 'villa',
      typeLabel: 'Villa',
      bedrooms: '5 beds',
      bathrooms: '5 baths',
      areaSize: '4,500 sq ft',
      description: 'A sample villa brief for a larger move with room to settle in.'
    }
  ];

  var whatsappNumber = '923002778818';
  var generalWhatsAppMessage = 'Hello AL-AZMAT ESTATE, I would like information about your properties.';
  var propertyGrid = document.querySelector('#property-grid');
  var filterForm = document.querySelector('#property-filters');
  var filterStatus = document.querySelector('#filter-status');
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

  function getBudgetMatch(value, budget) {
    if (budget === 'under-2crore') return value < 20000000;
    if (budget === '2-to-5crore') return value >= 20000000 && value <= 50000000;
    if (budget === 'over-5crore') return value > 50000000;
    return true;
  }

  function getFilteredProperties() {
    if (!filterForm) return properties;
    var purpose = filterForm.querySelector('[name="purpose"]').value;
    var location = filterForm.querySelector('[name="location"]').value;
    var type = filterForm.querySelector('[name="type"]').value;
    var budget = filterForm.querySelector('[name="budget"]').value;

    return properties.filter(function (property) {
      return (purpose === 'all' || property.purpose === purpose) &&
        (location === 'all' || property.area === location) &&
        (type === 'all' || property.type === type) &&
        getBudgetMatch(property.priceValue, budget);
    });
  }

  function propertyCard(property, index) {
    return '<article class="property-card' + (index === 0 ? ' featured' : '') + ' reveal' + (index % 3 === 1 ? ' delay-1' : index % 3 === 2 ? ' delay-2' : '') + '">' +
      '<div class="property-photo"><img src="' + escapeHtml(property.image) + '" alt="' + escapeHtml(property.alt) + '" loading="lazy" decoding="async"><span class="property-tag">Sample listing</span><span class="property-type">' + escapeHtml(property.status) + '</span></div>' +
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
    if (!list.length) {
      propertyGrid.innerHTML = '<p class="no-results">No properties match your current filters. Please adjust your search or contact us for assistance.</p>';
    } else {
      propertyGrid.innerHTML = list.map(propertyCard).join('');
      bindPropertyActions();
      observeReveals();
    }
    if (filterStatus) {
      filterStatus.textContent = list.length ? 'Showing ' + list.length + ' sample ' + (list.length === 1 ? 'property' : 'properties') + '.' : '';
    }
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
  var modalClose = modal ? modal.querySelector('.modal-close') : null;
  var lastFocusedElement;

  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocusedElement) lastFocusedElement.focus();
  }

  function openModal(property) {
    if (!modal) return;
    lastFocusedElement = document.activeElement;
    modalImage.src = property.image;
    modalImage.alt = property.alt;
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

  function getPropertyById(id) {
    return properties.find(function (property) { return String(property.id) === String(id); });
  }

  function prefillPropertyInquiry(property) {
    var message = document.querySelector('#message');
    if (message && property) message.value = 'I would like more information about ' + property.title + ' in ' + property.area + '.';
  }

  function bindPropertyActions() {
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

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
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

  if (filterForm) {
    filterForm.addEventListener('submit', function (event) {
      event.preventDefault();
      renderProperties(getFilteredProperties());
    });
    document.querySelector('#clear-filters').addEventListener('click', function () {
      filterForm.reset();
      renderProperties(properties);
    });
  }

  if (modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeModal();
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
      var error = document.querySelector('#' + fieldConfig.id + '-error');
      if (valid) {
        clearFieldError(field);
      } else {
        field.setAttribute('aria-invalid', 'true');
        if (error) error.textContent = fieldConfig.message;
      }
      return valid;
    }
    formFields.forEach(function (fieldConfig) {
      var field = document.querySelector('#' + fieldConfig.id);
      field.addEventListener('input', function () { clearFieldError(field); });
      field.addEventListener('change', function () { clearFieldError(field); });
    });
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var valid = formFields.map(validateField);
      var status = form.querySelector('.form-status');
      if (valid.indexOf(false) !== -1) {
        status.className = 'form-status is-error';
        status.textContent = 'Please check the highlighted fields and try again.';
        formFields[valid.indexOf(false)] && document.querySelector('#' + formFields[valid.indexOf(false)].id).focus();
        return;
      }
      status.className = 'form-status is-success';
      status.textContent = 'Thank you! Your inquiry has been prepared. Please contact us directly through WhatsApp or phone to continue.';
      form.reset();
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