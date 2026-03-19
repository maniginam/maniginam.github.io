// js/hero/gradient.js
// Manages sunrise/sunset gradient phases using SunCalc
// Crossfade between phases using opacity swap on two stacked gradient divs

window.HeroGradient = (function () {
  var BR_LAT = 30.4515;
  var BR_LNG = -91.1871;

  var PHASES = {
    dawn:    'linear-gradient(180deg, #1a0a2e 0%, #3d2054 25%, #b5564e 60%, #e87461 85%, #f4a261 100%)',
    morning: 'linear-gradient(180deg, #0a1a3e 0%, #1a3a6e 30%, #3a6a9e 60%, #5a9ace 100%)',
    noon:    'linear-gradient(180deg, #0a0a3e 0%, #1a2a6e 30%, #2a5aae 60%, #3a7ace 100%)',
    golden:  'linear-gradient(180deg, #1a1a3e 0%, #3d2b5a 25%, #b5564e 60%, #f4a261 85%, #ffcc02 100%)',
    sunset:  'linear-gradient(180deg, #0a0a2a 0%, #2d1b4e 30%, #8b3a5e 55%, #e87461 75%, #ff6b6b 100%)',
    twilight:'linear-gradient(180deg, #0a0a2a 0%, #2d1b4e 30%, #6b3a7d 60%, #3d2054 100%)',
    night:   'radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a1a 100%)'
  };

  var currentPhase = null;

  function getSunTimes(date) {
    return SunCalc.getTimes(date || new Date(), BR_LAT, BR_LNG);
  }

  function getPhase(now) {
    var times = getSunTimes(now);
    var ms = now.getTime();
    var sunrise = times.sunrise.getTime();
    var sunset = times.sunset.getTime();
    var noon = times.solarNoon.getTime();
    var min30 = 30 * 60 * 1000;
    var hr2 = 2 * 60 * 60 * 1000;
    var min90 = 90 * 60 * 1000;

    if (ms >= sunrise - min30 && ms < sunrise + min30) return 'dawn';
    if (ms >= sunrise + min30 && ms < noon - hr2) return 'morning';
    if (ms >= noon - hr2 && ms < noon + hr2) return 'noon';
    if (ms >= noon + hr2 && ms < sunset - min30) return 'golden';
    if (ms >= sunset - min30 && ms < sunset + min30) return 'sunset';
    if (ms >= sunset + min30 && ms < sunset + min90) return 'twilight';
    return 'night';
  }

  function init(outEl, inEl) {
    var phase = getPhase(new Date());
    currentPhase = phase;
    outEl.style.background = PHASES[phase];
    outEl.style.opacity = '1';
    inEl.style.opacity = '0';
  }

  function update(outEl, inEl) {
    var phase = getPhase(new Date());
    if (phase === currentPhase) return;

    // Crossfade: inEl gets new gradient, fades in; outEl fades out
    inEl.style.background = PHASES[phase];
    inEl.style.opacity = '1';
    outEl.style.opacity = '0';

    // After transition (2s), swap roles
    setTimeout(function () {
      outEl.style.background = PHASES[phase];
      outEl.style.opacity = '1';
      inEl.style.opacity = '0';
      currentPhase = phase;
    }, 2100);

    currentPhase = phase;
  }

  return {
    init: init,
    update: update,
    getPhase: getPhase,
    getSunTimes: getSunTimes,
    BR_LAT: BR_LAT,
    BR_LNG: BR_LNG
  };
})();
