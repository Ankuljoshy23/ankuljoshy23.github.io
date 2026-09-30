// =========================================
// NAV SCROLL SHADOW
// =========================================

const nav = document.getElementById('nav');

if (nav) {

  const updateNavShadow = () => {

    nav.style.boxShadow =
      window.scrollY > 20
        ? '0 8px 40px rgba(23,105,255,0.12)'
        : '0 4px 24px rgba(23,105,255,0.08)';

  };

  window.addEventListener(
    'scroll',
    updateNavShadow,
    { passive: true }
  );

  updateNavShadow();

}



// =========================================
// BURGER MENU
// =========================================

const burger = document.getElementById('burger');

const navMobile =
  document.getElementById('navMobile');


if (burger && navMobile) {

  burger.addEventListener('click', () => {

    navMobile.classList.toggle('open');

  });


  // Close mobile menu after clicking a link

  navMobile
    .querySelectorAll('a')
    .forEach((link) => {

      link.addEventListener('click', () => {

        navMobile.classList.remove('open');

      });

    });

}



// =========================================
// FILTER TABS
// =========================================
// Future filters ke liye rakha hai.
// Abhi portfolio mein sirf 4 reels hain.

const filterButtons =
  document.querySelectorAll('.proj-filter');


filterButtons.forEach((button) => {

  button.addEventListener('click', () => {

    filterButtons.forEach((btn) => {

      btn.classList.remove('active');

    });


    button.classList.add('active');


    const filter =
      button.dataset.filter;


    document
      .querySelectorAll('.proj-card')
      .forEach((card) => {

        const match =
          filter === 'all' ||
          card.dataset.category === filter;


        card.classList.toggle(
          'hidden',
          !match
        );

      });

  });

});



// =========================================
// SCROLL REVEAL
// =========================================

const revealEls =
  document.querySelectorAll(
    '.reveal, .proj-card, .svc-card, .process-step'
  );



if ('IntersectionObserver' in window) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }


          const element =
            entry.target;


          const delay =
            parseInt(
              element.dataset.delay,
              10
            ) || 0;


          setTimeout(() => {

            element.classList.add(
              'visible'
            );

          }, delay);


          observer.unobserve(element);

        });

      },
      {
        threshold: 0.1
      }
    );


  revealEls.forEach((element) => {

    observer.observe(element);

  });


} else {

  // Fallback for old browsers

  revealEls.forEach((element) => {

    element.classList.add(
      'visible'
    );

  });

}