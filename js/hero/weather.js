// js/hero/weather.js
// OpenWeatherMap API integration, weather particles, lightning, and badge

window.HeroWeather = (function () {
  var API_KEY = ''; // Added in Task 9
  var CACHE_KEY = 'hero-weather-cache';
  var CACHE_TTL = 10 * 60 * 1000; // 10 minutes
  var BR_LAT = 30.4515;
  var BR_LNG = -91.1871;

  var canvas = null;
  var ctx = null;
  var currentCondition = 'clear';
  var particles = [];
  var flashAlpha = 0;
  var nextFlashTime = 0;
  var weatherData = null;

  var CONDITION_MAP = {
    'Clear': 'clear', 'Rain': 'rain', 'Thunderstorm': 'thunderstorm',
    'Fog': 'fog', 'Mist': 'fog', 'Haze': 'fog',
    'Drizzle': 'drizzle', 'Snow': 'snow', 'Clouds': 'clouds'
  };

  var EMOJI_MAP = {
    'clear-day': '\u2600\uFE0F', 'clear-night': '\uD83C\uDF19',
    'rain': '\uD83C\uDF27', 'thunderstorm': '\u26C8',
    'fog': '\uD83C\uDF2B', 'drizzle': '\uD83C\uDF26',
    'snow': '\uD83C\uDF28', 'clouds': '\u2601\uFE0F'
  };

  function getDeviceTier() {
    var w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w <= 1024) return 'tablet';
    return 'desktop';
  }

  function getMaxParticles() {
    var tier = getDeviceTier();
    if (tier === 'mobile') return 140;
    if (tier === 'tablet') return 200;
    return 280;
  }

  function isNight() {
    var phase = HeroGradient.getPhase(new Date());
    return phase === 'night' || phase === 'twilight';
  }

  // --- API + Caching ---

  function getCached() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var cached = JSON.parse(raw);
      if (Date.now() - cached.ts > CACHE_TTL) return null;
      return cached.data;
    } catch (e) { return null; }
  }

  function setCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data }));
    } catch (e) { /* quota exceeded, ignore */ }
  }

  function fetchWeather(callback) {
    var cached = getCached();
    if (cached) { callback(cached); return; }
    if (!API_KEY) { callback(null); return; }

    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + BR_LAT + '&lon=' + BR_LNG + '&appid=' + API_KEY + '&units=imperial';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          var data = JSON.parse(xhr.responseText);
          setCache(data);
          callback(data);
        } catch (e) { callback(null); }
      } else { callback(null); }
    };
    xhr.onerror = function () { callback(null); };
    xhr.send();
  }

  // --- Particle builders ---

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    resizeCanvas();
  }

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
  }

  function buildParticles(condition) {
    particles = [];
    var W = canvas.offsetWidth;
    var H = canvas.offsetHeight;
    var max = getMaxParticles();

    if (condition === 'rain') {
      var count = Math.min(180, max);
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, len: 10 + Math.random() * 18, speed: 4 + Math.random() * 5, alpha: 0.06 + Math.random() * 0.12 });
      }
    } else if (condition === 'thunderstorm') {
      var count = Math.min(max, 280);
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, len: 15 + Math.random() * 25, speed: 7 + Math.random() * 9, alpha: 0.06 + Math.random() * 0.15 });
      }
      nextFlashTime = Date.now() + 2000 + Math.random() * 4000;
    } else if (condition === 'fog') {
      var count = Math.min(14, Math.floor(max / 10));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W * 1.5 - W * 0.25, y: Math.random() * H, w: 180 + Math.random() * 280, h: 50 + Math.random() * 90, speed: 0.08 + Math.random() * 0.15, alpha: 0.05 + Math.random() * 0.07, phase: Math.random() * Math.PI * 2 });
      }
    } else if (condition === 'drizzle') {
      var count = Math.min(90, Math.floor(max * 0.5));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, len: 6 + Math.random() * 10, speed: 2 + Math.random() * 3, alpha: 0.04 + Math.random() * 0.08 });
      }
    } else if (condition === 'snow') {
      var count = Math.min(100, Math.floor(max * 0.5));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, r: 1 + Math.random() * 2, speed: 0.5 + Math.random() * 1, drift: -0.3 + Math.random() * 0.6, alpha: 0.1 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 });
      }
    } else if (condition === 'clouds') {
      var count = Math.min(8, Math.floor(max / 20));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W * 1.5 - W * 0.25, y: Math.random() * H, w: 250 + Math.random() * 350, h: 60 + Math.random() * 100, speed: 0.03 + Math.random() * 0.06, alpha: 0.03 + Math.random() * 0.05, phase: Math.random() * Math.PI * 2 });
      }
    } else if (isNight()) {
      // Stars
      var count = Math.min(70, Math.floor(max * 0.25));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: Math.random() * H, r: 0.5 + Math.random() * 1.5, alpha: 0.2 + Math.random() * 0.6, twinkle: 0.5 + Math.random() * 2, phase: Math.random() * Math.PI * 2, isStar: true });
      }
    } else {
      // Heat shimmer
      var count = Math.min(30, Math.floor(max * 0.15));
      for (var i = 0; i < count; i++) {
        particles.push({ x: Math.random() * W, y: H * 0.5 + Math.random() * H * 0.5, r: 15 + Math.random() * 25, speed: 0.2 + Math.random() * 0.4, alpha: 0.02 + Math.random() * 0.05, phase: Math.random() * Math.PI * 2, isShimmer: true });
      }
    }
  }

  // --- Draw ---

  function draw() {
    if (!ctx) return;
    var W = canvas.offsetWidth;
    var H = canvas.offsetHeight;
    var t = Date.now() * 0.001;
    var now = Date.now();
    ctx.clearRect(0, 0, W, H);

    if (currentCondition === 'rain' || currentCondition === 'drizzle') {
      var color = 'rgba(200,180,150,';
      var xDrift = currentCondition === 'rain' ? -0.4 : -0.2;
      particles.forEach(function (d) {
        d.y += d.speed; d.x += xDrift;
        if (d.y > H) { d.y = -d.len; d.x = Math.random() * W; }
        ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + 0.8, d.y + d.len);
        ctx.strokeStyle = color + d.alpha + ')'; ctx.lineWidth = 1; ctx.stroke();
      });
    } else if (currentCondition === 'thunderstorm') {
      // Lightning
      if (now > nextFlashTime) {
        flashAlpha = 0.2 + Math.random() * 0.25;
        nextFlashTime = now + 2000 + Math.random() * 5000;
      }
      if (flashAlpha > 0) {
        var flashColor = isNight() ? 'rgba(200,200,255,' : 'rgba(220,180,180,';
        ctx.fillStyle = flashColor + flashAlpha + ')';
        ctx.fillRect(0, 0, W, H);
        flashAlpha *= 0.85;
        if (flashAlpha < 0.01) flashAlpha = 0;
      }
      // Heavy rain
      particles.forEach(function (d) {
        d.y += d.speed; d.x -= 2.5;
        if (d.y > H) { d.y = -d.len; d.x = Math.random() * W; }
        ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x + 3, d.y + d.len);
        ctx.strokeStyle = 'rgba(180,160,200,' + d.alpha + ')'; ctx.lineWidth = 1.2; ctx.stroke();
      });
    } else if (currentCondition === 'fog' || currentCondition === 'clouds') {
      var color = currentCondition === 'fog' ? [230, 190, 170] : [200, 200, 220];
      particles.forEach(function (cl) {
        cl.x += cl.speed;
        if (cl.x > W + cl.w) cl.x = -cl.w;
        var a = cl.alpha * (0.7 + 0.3 * Math.sin(t * 0.4 + cl.phase));
        var grd = ctx.createRadialGradient(cl.x + cl.w / 2, cl.y + cl.h / 2, 0, cl.x + cl.w / 2, cl.y + cl.h / 2, cl.w / 2);
        grd.addColorStop(0, 'rgba(' + color.join(',') + ',' + a + ')');
        grd.addColorStop(1, 'rgba(' + color.join(',') + ',0)');
        ctx.fillStyle = grd;
        ctx.fillRect(cl.x, cl.y, cl.w, cl.h);
      });
    } else if (currentCondition === 'snow') {
      particles.forEach(function (s) {
        s.y += s.speed;
        s.x += s.drift + 0.3 * Math.sin(t + s.phase);
        if (s.y > H) { s.y = -5; s.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(220,220,240,' + s.alpha + ')'; ctx.fill();
      });
    } else {
      // Stars or shimmer
      particles.forEach(function (p) {
        if (p.isStar) {
          var a = p.alpha * (0.3 + 0.7 * Math.abs(Math.sin(t * p.twinkle + p.phase)));
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(200,200,255,' + a + ')'; ctx.fill();
          if (p.r > 1) {
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(200,200,255,' + (a * 0.1) + ')'; ctx.fill();
          }
        } else if (p.isShimmer) {
          p.y -= p.speed;
          if (p.y < H * 0.3) { p.y = H; p.x = Math.random() * W; }
          var a = p.alpha * (0.5 + 0.5 * Math.sin(t * 1.5 + p.phase));
          var grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
          grd.addColorStop(0, 'rgba(255,230,180,' + a + ')');
          grd.addColorStop(1, 'rgba(255,230,180,0)');
          ctx.fillStyle = grd;
          ctx.fillRect(p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
        }
      });
    }
  }

  // --- Weather tint ---

  function getTint(condition) {
    var tints = {
      rain: 'rgba(20,20,40,0.3)', thunderstorm: 'rgba(10,10,20,0.4)',
      fog: 'rgba(40,40,60,0.25)', drizzle: 'rgba(20,20,40,0.15)',
      snow: 'rgba(20,20,40,0.2)', clouds: 'rgba(20,20,40,0.15)'
    };
    return tints[condition] || 'transparent';
  }

  // --- Badge ---

  function updateBadge(badgeEl, data) {
    if (!data || !data.weather) {
      badgeEl.style.display = 'none';
      return;
    }
    var main = data.weather[0].main;
    var condition = CONDITION_MAP[main] || 'clear';
    var emojiKey = condition === 'clear' ? (isNight() ? 'clear-night' : 'clear-day') : condition;
    var emoji = EMOJI_MAP[emojiKey] || '\u2600\uFE0F';
    var temp = Math.round(data.main.temp);
    var humidity = data.main.humidity;
    var desc = data.weather[0].description;
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);

    badgeEl.innerHTML =
      '<div class="weather-icon">' + emoji + '</div>' +
      '<div><div class="weather-temp">' + temp + '\u00B0F</div>' +
      '<div class="weather-details">' + desc + ' \u2022 ' + humidity + '%</div></div>';
    badgeEl.style.display = 'flex';
  }

  // --- Public API ---

  function applyCondition(condition, tintEl) {
    currentCondition = condition;
    tintEl.style.background = getTint(condition);
    buildParticles(condition);
    HeroTraffic.applyWeatherEffect(condition);
  }

  function loadAndApply(tintEl, badgeEl) {
    fetchWeather(function (data) {
      weatherData = data;
      if (data && data.weather) {
        var main = data.weather[0].main;
        var condition = CONDITION_MAP[main] || 'clear';
        applyCondition(condition, tintEl);
        updateBadge(badgeEl, data);
      } else {
        // Fallback: clear weather
        applyCondition('clear', tintEl);
        badgeEl.style.display = 'none';
      }
    });
  }

  return {
    init: init,
    draw: draw,
    resize: resizeCanvas,
    loadAndApply: loadAndApply,
    fetchWeather: fetchWeather,
    updateBadge: updateBadge
  };
})();
