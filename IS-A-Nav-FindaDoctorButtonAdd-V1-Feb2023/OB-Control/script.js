/* OB Control */

function findADoctorTest() {
  var waitForElements = setInterval(() => {
    const headerContainer = document.querySelector('.site-header'); // Select Target Element Here
    if (typeof (ranFindADoctorTest) === 'undefined' && headerContainer) {
      window.ranFindADoctorTest = true;
      clearInterval(waitForElements);
    }
  }, 100);
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
    vwodesc: 'IS-A-Nav-FindaDoctorButtonAdd-V1-Feb2023 - OB Control',
    type: 'vwo',
    message: err.toString(),
    stack: err.stack,
    source: window.location.href
  };
  const x = new XMLHttpRequest();
  x.open('POST', 'https://us-central1-tixray.cloudfunctions.net/err', !0), x.send(JSON.stringify(e));
}
