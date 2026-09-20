(function () {
  'use strict';
  var propertyData = [
    {
      image: 'assets/images/property-grid.png',
      alt: 'Sample modern apartment listing',
      status: 'For sale',
      title: 'Modern apartment living',
      location: 'Gulshan-e-Iqbal · Karachi',
      price: 'Sample price on request',
      type: 'Apartment',
      bedrooms: '2 beds',
      bathrooms: '2 baths',
      area: '1,200 sq ft',
      description: 'A bright sample apartment brief for buyers seeking a connected Karachi address.'
    },
    {
      image: 'assets/images/property-detail-1.png',
      alt: 'Sample family home listing',
      status: 'For sale',
      title: 'Family home, considered',
      location: 'Gulistan-e-Johar · Karachi',
      price: 'Sample price on request',
      type: 'House',
      bedrooms: '3 beds',
      bathrooms: '3 baths',
      area: '2,400 sq ft',
      description: 'A sample family-home profile with room for everyday living and future plans.'
    },
    {
      image: 'assets/images/property-detail-2.png',
      alt: 'Sample development listing',
      status: 'New build',
      title: 'Room to grow',
      location: 'Scheme 33 · Karachi',
      price: 'Sample price on request',
      type: 'House',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      area: '3,000 sq ft',
      description: 'A placeholder new-build opportunity for buyers looking for more space.'
    },
    {
      image: 'assets/images/property-detail-3.png',
      alt: 'Sample luxury residence listing',
      status: 'For rent',
      title: 'A quieter kind of luxury',
      location: 'DHA · Karachi',
      price: 'Sample rent on request',
      type: 'Residence',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      area: '3,600 sq ft',
      description: 'A sample rental brief with privacy, generous proportions and a polished finish.'
    },
    {
      image: 'assets/images/property-detail-4.png',
      alt: 'Sample home exterior listing',
      status: 'For sale',
      title: 'Light-filled family place',
      location: 'Bahria Town Karachi',
      price: 'Sample price on request',
      type: 'House',
      bedrooms: '4 beds',
      bathrooms: '4 baths',
      area: '3,200 sq ft',
      description: 'A placeholder home profile for families considering a planned community.'
    },
    {
      image: 'assets/images/property-detail-6.png',
      alt: 'Sample villa listing',
      status: 'For rent',
      title: 'Space for the long view',
      location: 'DHA City Karachi',
      price: 'Sample rent on request',
      type: 'Villa',
      bedrooms: '5 beds',
      bathrooms: '5 baths',
      area: '4,500 sq ft',
      description: 'A sample villa brief for a larger move with room to settle in.'
    }
  ];

  var propertyGrid = document.querySelector('#property-grid');
  if (propertyGrid) {
    propertyGrid.innerHTML = propertyData.map(function (property, index) {
      return '<article class="property-card' + (index === 0 ? ' featured' : '') + ' reveal' + (index % 3 === 1 ? ' delay-1' : index % 3 === 2 ? ' delay-2' : '') + '">' +
        '<div class="property-photo"><img src="' + property.image + '" alt="' + property.alt + '"><span class="property-tag">Sample listing</span><span class="property-type">' + property.status + '</span></div>' +
        '<div class="property-body"><div><h3>' + property.title + '</h3><p>' + property.location + '</p><strong class="property-price">' + property.price + '</strong></div>' +
        '<div class="property-meta"><span>' + property.type + '</span><span>' + property.bedrooms + '</span><span>' + property.bathrooms + '</span><span>' + property.area + '</span></div>' +
        '<p class="property-description">' + property.description + '</p>' +
        '<div class="property-actions"><button type="button" class="property-details" data-property="' + property.title + '">View details <span>↗</span></button><a href="#contact" class="property-contact">Contact <span>↗</span></a></div></div></article>';
    }).join('');
  }

  var menu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('#primary-navigation');
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menu.setAttribute('aria-expanded', 'false');
      });
    });
  }
  document.querySelectorAll('[data-scroll]').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.querySelector(button.getAttribute('data-scroll'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  document.querySelectorAll('.property-details').forEach(function (button) {
    button.addEventListener('click', function () {
      var message = document.querySelector('#message');
      var property = button.getAttribute('data-property');
      if (message && property) message.value = 'I would like more information about the sample listing: ' + property + '.';
      var contact = document.querySelector('#contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  var form = document.querySelector('#lead-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = form.querySelector('.form-status');
      var name = form.querySelector('#name').value.trim();
      if (!name) return;
      status.textContent = 'Thank you, ' + name.split(' ')[0] + '. Your enquiry is ready to be followed up by AL-AZMAT ESTATE.';
      form.reset();
      status.focus();
    });
  }
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }
  document.querySelectorAll('details').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        document.querySelectorAll('details[open]').forEach(function (other) {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });
}());