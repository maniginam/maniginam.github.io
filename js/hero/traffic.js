// js/hero/traffic.js
// Bidirectional traffic particles flowing along road paths

window.HeroTraffic = (function () {
  var COLORS = {
    flowing:   { r: 74, g: 222, b: 128 },
    moderate:  { r: 255, g: 204, b: 2 },
    congested: { r: 255, g: 107, b: 107 }
  };

  var SPEEDS = { congested: 0.0004, moderate: 0.0008, flowing: 0.0014 };

  var particles = [];
  var canvas = null;
  var ctx = null;
  var scaleX = 1;
  var scaleY = 1;

  function getDeviceTier() {
    var w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w <= 1024) return 'tablet';
    return 'desktop';
  }

  function getCountMultiplier() {
    var tier = getDeviceTier();
    if (tier === 'mobile') return 0.5;
    if (tier === 'tablet') return 0.7;
    return 1;
  }

  function lerp(a, b, t) { return a + (b - a) * t; }

  function pointOnPath(points, t) {
    var segs = points.length - 1;
    var seg = Math.min(Math.floor(t * segs), segs - 1);
    var lt = t * segs - seg;
    return {
      x: lerp(points[seg][0], points[seg + 1][0], lt),
      y: lerp(points[seg][1], points[seg + 1][1], lt)
    };
  }

  function init(canvasEl) {
    canvas = canvasEl;
    ctx = canvas.getContext('2d');
    resize();
    buildParticles();
  }

  function resize() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    scaleX = canvas.offsetWidth / 900;
    scaleY = canvas.offsetHeight / 500;
  }

  function buildParticles() {
    particles = [];
    var mult = getCountMultiplier();
    var paths = HeroRoads.TRAFFIC_PATHS;

    paths.forEach(function (road) {
      var baseColor = COLORS[road.traffic];
      var speed = SPEEDS[road.traffic] || SPEEDS.flowing;
      var count = Math.round(road.count * mult);

      for (var i = 0; i < count; i++) {
        var color = baseColor;
        if (road.traffic === 'mixed') {
          var r = Math.random();
          color = r < 0.3 ? COLORS.flowing : r < 0.7 ? COLORS.moderate : COLORS.congested;
          speed = r < 0.3 ? SPEEDS.flowing : r < 0.7 ? SPEEDS.moderate : SPEEDS.congested;
        }
        var dir = Math.random() < 0.5 ? 1 : -1;
        particles.push({
          road: road,
          t: Math.random(),
          speed: speed * (0.7 + Math.random() * 0.6) * dir,
          color: color,
          alpha: 0.4 + Math.random() * 0.4,
          radius: road.weight * (0.8 + Math.random() * 0.5),
          phase: Math.random() * Math.PI * 2
        });
      }
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    var t = Date.now() * 0.001;

    particles.forEach(function (p) {
      p.t += p.speed;
      if (p.t > 1) p.t -= 1;
      if (p.t < 0) p.t += 1;

      var pos = pointOnPath(p.road.points, p.t);
      var px = pos.x * scaleX;
      var py = pos.y * scaleY;
      var pulse = 0.6 + 0.4 * Math.sin(t * 2 + p.phase);
      var a = p.alpha * pulse;

      // Glow halo
      ctx.beginPath();
      ctx.arc(px, py, p.radius * 4, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + (a * 0.15) + ')';
      ctx.fill();

      // Core dot
      ctx.beginPath();
      ctx.arc(px, py, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + p.color.r + ',' + p.color.g + ',' + p.color.b + ',' + a + ')';
      ctx.fill();
    });
  }

  // Weather interaction: reduce opacity and particle count
  function applyWeatherEffect(condition) {
    var opacityMap = { rain: 0.25, thunderstorm: 0.20, fog: 0.20, drizzle: 0.25, snow: 0.25, clouds: 0.8 };
    var countMap = { rain: 0.8, thunderstorm: 0.6, fog: 0.5, drizzle: 0.8, snow: 0.7, clouds: 0.9 };
    var opacity = opacityMap[condition] || 1;
    canvas.style.opacity = opacity;

    // Rebuild particles with reduced count if weather reduces them
    var baseMult = getCountMultiplier();
    var countMult = countMap[condition] || 1;
    particles = [];
    var paths = HeroRoads.TRAFFIC_PATHS;
    paths.forEach(function (road) {
      var baseColor = COLORS[road.traffic];
      var speed = SPEEDS[road.traffic] || SPEEDS.flowing;
      var count = Math.round(road.count * baseMult * countMult);
      for (var i = 0; i < count; i++) {
        var color = baseColor;
        if (road.traffic === 'mixed') {
          var r = Math.random();
          color = r < 0.3 ? COLORS.flowing : r < 0.7 ? COLORS.moderate : COLORS.congested;
          speed = r < 0.3 ? SPEEDS.flowing : r < 0.7 ? SPEEDS.moderate : SPEEDS.congested;
        }
        var dir = Math.random() < 0.5 ? 1 : -1;
        particles.push({
          road: road,
          t: Math.random(),
          speed: speed * (0.7 + Math.random() * 0.6) * dir,
          color: color,
          alpha: 0.4 + Math.random() * 0.4,
          radius: road.weight * (0.8 + Math.random() * 0.5),
          phase: Math.random() * Math.PI * 2
        });
      }
    });
  }

  function clearWeatherEffect() {
    canvas.style.opacity = '1';
    buildParticles();
  }

  return {
    init: init,
    draw: draw,
    resize: resize,
    applyWeatherEffect: applyWeatherEffect,
    clearWeatherEffect: clearWeatherEffect
  };
})();
