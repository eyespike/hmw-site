(function () {
  'use strict';

  var photos = [];
  var current = 0;
  var lb, lbImg, lbCounter, lbPrev, lbNext;
  var touchStartX = 0;

  function init() {
    var imgs = document.querySelectorAll('.listing-photos img');
    if (!imgs.length) return;

    photos = Array.from(imgs);

    // Build overlay
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.innerHTML =
      '<button class="lb-close" aria-label="Close">&times;</button>' +
      '<button class="lb-prev" aria-label="Previous">&#8249;</button>' +
      '<img class="lb-img" src="" alt="">' +
      '<button class="lb-next" aria-label="Next">&#8250;</button>' +
      '<div class="lb-counter"></div>';
    document.body.appendChild(lb);

    lbImg     = lb.querySelector('.lb-img');
    lbCounter = lb.querySelector('.lb-counter');
    lbPrev    = lb.querySelector('.lb-prev');
    lbNext    = lb.querySelector('.lb-next');

    // Click photos to open
    photos.forEach(function (img, i) {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () { open(i); });
    });

    // Close on backdrop or image click
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target === lbImg) close();
    });

    lb.querySelector('.lb-close').addEventListener('click', close);
    lbPrev.addEventListener('click', function (e) { e.stopPropagation(); prev(); });
    lbNext.addEventListener('click', function (e) { e.stopPropagation(); next(); });

    // Keyboard
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('lightbox-active')) return;
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    });

    // Touch swipe
    lb.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lb.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        dx < 0 ? next() : prev();
      }
    }, { passive: true });
  }

  function open(index) {
    current = index;
    update();
    lb.classList.add('lightbox-active');
    document.body.classList.add('lightbox-open');
  }

  function close() {
    lb.classList.remove('lightbox-active');
    document.body.classList.remove('lightbox-open');
  }

  function prev() {
    current = (current - 1 + photos.length) % photos.length;
    update();
  }

  function next() {
    current = (current + 1) % photos.length;
    update();
  }

  function update() {
    var img = photos[current];
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCounter.textContent = (current + 1) + ' / ' + photos.length;
    var multi = photos.length > 1;
    lbPrev.style.display = multi ? '' : 'none';
    lbNext.style.display = multi ? '' : 'none';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
