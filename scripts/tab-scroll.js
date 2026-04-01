// Add scroll indicators to overflowing tab lists
function initTabScrollIndicators() {
  document.querySelectorAll('[role="tabpanel"] [role="tablist"]').forEach(function (tablist) {
    if (tablist.dataset.scrollInit) return;
    tablist.dataset.scrollInit = 'true';

    // Wrap the tablist itself in a relative container
    var wrapper = document.createElement('div');
    wrapper.className = 'tab-scroll-wrapper';
    wrapper.style.position = 'relative';
    tablist.parentNode.insertBefore(wrapper, tablist);
    wrapper.appendChild(tablist);

    // Create fade elements
    var fadeLeft = document.createElement('div');
    fadeLeft.className = 'tab-scroll-fade tab-scroll-fade-left';
    fadeLeft.textContent = '←';
    fadeLeft.style.cursor = 'pointer';
    fadeLeft.style.pointerEvents = 'auto';
    fadeLeft.addEventListener('click', function () {
      tablist.scrollBy({ left: -200, behavior: 'smooth' });
    });

    var fadeRight = document.createElement('div');
    fadeRight.className = 'tab-scroll-fade tab-scroll-fade-right';
    fadeRight.textContent = '→';
    fadeRight.style.cursor = 'pointer';
    fadeRight.style.pointerEvents = 'auto';
    fadeRight.addEventListener('click', function () {
      tablist.scrollBy({ left: 200, behavior: 'smooth' });
    });

    wrapper.appendChild(fadeLeft);
    wrapper.appendChild(fadeRight);

    function updateIndicators() {
      var scrollLeft = tablist.scrollLeft;
      var maxScroll = tablist.scrollWidth - tablist.clientWidth;

      if (maxScroll <= 2) {
        fadeLeft.classList.remove('visible');
        fadeRight.classList.remove('visible');
        return;
      }

      if (scrollLeft > 2) {
        fadeLeft.classList.add('visible');
      } else {
        fadeLeft.classList.remove('visible');
      }

      if (scrollLeft < maxScroll - 2) {
        fadeRight.classList.add('visible');
      } else {
        fadeRight.classList.remove('visible');
      }
    }

    tablist.addEventListener('scroll', updateIndicators);
    window.addEventListener('resize', updateIndicators);

    // Initial check
    setTimeout(updateIndicators, 100);
    setTimeout(updateIndicators, 500);
  });
}

// Run on load and on navigation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTabScrollIndicators);
} else {
  initTabScrollIndicators();
}

// Re-run on DOM changes (Mintlify SPA navigation)
new MutationObserver(function () {
  setTimeout(initTabScrollIndicators, 200);
}).observe(document.body, { childList: true, subtree: true });
