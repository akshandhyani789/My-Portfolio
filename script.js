// ── Custom cursor: both elements track the mouse position
const dot  = document.getElementById('c-dot');
const ring = document.getElementById('c-ring');

document.addEventListener('mousemove', function(e) {
  dot.style.left  = e.clientX + 'px';
  dot.style.top   = e.clientY + 'px';
  ring.style.left = e.clientX + 'px';
  ring.style.top  = e.clientY + 'px';
});

// ── Hamburger: toggle mobile menu open/closed
const ham  = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

ham.addEventListener('click', function() {
  ham.classList.toggle('open');
  menu.classList.toggle('open');
  // Lock body scroll while menu is open
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

// Close mobile menu when any link inside it is clicked
menu.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    ham.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Scroll reveal: watch elements with .reveal / .reveal-left
// When they enter the viewport, add .in to trigger the CSS transition
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target); // stop watching once revealed
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal, .reveal-left').forEach(function(el) {
  observer.observe(el);
});