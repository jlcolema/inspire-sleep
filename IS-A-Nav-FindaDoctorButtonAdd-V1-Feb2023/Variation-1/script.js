/* Variation 1 */

function findADoctorTest() {
  var waitForElements = setInterval(() => {
    const headerContainer = document.querySelector('.site-header'); // Select Target Element Here
    if (typeof (ranFindADoctorTest) === 'undefined' && headerContainer) {
      window.ranFindADoctorTest = true;
      clearInterval(waitForElements);

      // Scope CSS
      document.body.classList.add('ob6');

      findADoctorUPDATE();

      obFindADoctorTracking();
    }
  }, 100);
}

function findADoctorUPDATE() {

  // Create the `findADoctorNavItem` element
  const findADoctorNavItem = document.createElement('li');
  findADoctorNavItem.classList.add('nav-item', 'nav-item--find-a-doctor', 'icon');
  findADoctorNavItem.innerHTML = `
    <a class="LinkButton" target="_self" aria-label="Find a Doctor Page Link for Header" href="/en-us/find-a-doctor/">Find a Doctor</a>
  `;

  // Add `findADoctorNavItem` to the beginning of each `secondaryMenu`
  const secondaryMenu = document.querySelectorAll('.secondary-menu-ul, .secondary-navbar');
  secondaryMenu.forEach(menu => {
    const clonedFindADoctorNavItem = findADoctorNavItem.cloneNode(true);
    menu.prepend(clonedFindADoctorNavItem);

    // Remove `.icon` from the `findADoctorNavItem` with `.secondary-navbar`
    if (menu.classList.contains('secondary-navbar')) {
      clonedFindADoctorNavItem.classList.remove('icon');
    }
  });

}

function obFindADoctorTracking() {
  // GTM
  // Find all `findADoctorLink` elements
  const findADoctorLink = document.querySelectorAll('.nav-item--find-a-doctor a');

  // Add click event to each `findADoctorLink`
  findADoctorLink.forEach(link => {
    link.addEventListener('click', () => {
      dataLayer.push({
        event: 'vwo_test_event',
        vwo_event_name: 'nav_find_doctor_click'
      });
    });
  });
}

try {
  if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
    findADoctorTest();
  } else {
    document.addEventListener('DOMContentLoaded', findADoctorTest);
  }
} catch (err) {
  const e = {
    dev: 'U05C4LLSK6G',
    vwotest: '6',
    vwodesc: 'IS-A-Nav-FindaDoctorButtonAdd-V1-Feb2023 - Variation 1',
    type: 'vwo',
    message: err.toString(),
    stack: err.stack,
    source: window.location.href
  };
  const x = new XMLHttpRequest();
  x.open('POST', 'https://us-central1-tixray.cloudfunctions.net/err', !0), x.send(JSON.stringify(e));
}
