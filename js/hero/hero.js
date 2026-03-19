// js/hero/hero.js
// Orchestrator: lifecycle, single rAF loop, IntersectionObserver

(function () {
  var hero, gradOut, gradIn, tintEl, trafficCanvas, weatherCanvas, roadLayer, meterEl, badgeEl;
  var animating = false;
  var lastGradientCheck = 0;
  var lastMeterUpdate = 0;
  var GRADIENT_INTERVAL = 60000; // check phase every 60s
  var METER_INTERVAL = 60000;
  var WEATHER_REFRESH = 10 * 60 * 1000; // 10 min
  var lastWeatherFetch = 0;

  function initElements() {
    hero = document.getElementById('hero');
    gradOut = hero.querySelector('.hero-gradient-out');
    gradIn = hero.querySelector('.hero-gradient-in');
    tintEl = hero.querySelector('.hero-weather-tint');
    trafficCanvas = hero.querySelector('.hero-traffic-canvas');
    weatherCanvas = hero.querySelector('.hero-weather-canvas');
    roadLayer = hero.querySelector('.hero-road-layer');
    meterEl = hero.querySelector('.hero-daylight-meter');
    badgeEl = hero.querySelector('.hero-weather-badge');
  }

  function setup() {
    // 1. Gradient
    HeroGradient.init(gradOut, gradIn);

    // 2. Road SVG
    HeroRoads.buildSVG(roadLayer);

    // 3. Traffic particles
    HeroTraffic.init(trafficCanvas);

    // 4. Weather particles canvas
    HeroWeather.init(weatherCanvas);

    // 5. Daylight meter
    HeroDaylightMeter.build(meterEl);
    HeroDaylightMeter.update();

    // 6. Fetch weather + apply
    HeroWeather.loadAndApply(tintEl, badgeEl);
    lastWeatherFetch = Date.now();
  }

  function loop(timestamp) {
    if (!animating) return;

    var now = Date.now();

    // Check gradient phase change
    if (now - lastGradientCheck > GRADIENT_INTERVAL) {
      HeroGradient.update(gradOut, gradIn);
      lastGradientCheck = now;
    }

    // Update daylight meter
    if (now - lastMeterUpdate > METER_INTERVAL) {
      HeroDaylightMeter.update();
      lastMeterUpdate = now;
    }

    // Refresh weather data
    if (now - lastWeatherFetch > WEATHER_REFRESH) {
      HeroWeather.loadAndApply(tintEl, badgeEl);
      lastWeatherFetch = now;
    }

    // Draw particles
    HeroTraffic.draw();
    HeroWeather.draw();

    requestAnimationFrame(loop);
  }

  function startAnimation() {
    if (animating) return;
    animating = true;
    requestAnimationFrame(loop);
  }

  function stopAnimation() {
    animating = false;
  }

  // Pause when hero scrolls out of view
  function setupVisibility() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      });
    }, { threshold: 0.01 });
    observer.observe(hero);
  }

  // Debounced resize
  var resizeTimer;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      HeroTraffic.resize();
      HeroWeather.resize();
    }, 200);
  }

  // Init on DOM ready
  document.addEventListener('DOMContentLoaded', function () {
    initElements();
    if (!hero) return;
    setup();
    setupVisibility();
    window.addEventListener('resize', handleResize);
  });
})();
