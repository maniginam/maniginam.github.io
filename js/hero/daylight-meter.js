// js/hero/daylight-meter.js
// SVG semicircle arc showing sun progress from sunrise to sunset

window.HeroDaylightMeter = (function () {
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var ARC_PATH = 'M 8 36 A 72 72 0 0 1 152 36';
  var ARC_TOTAL_LENGTH = 226; // approximate arc length in SVG units

  function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    h = h % 12 || 12;
    return h + ':' + (m < 10 ? '0' : '') + m;
  }

  function formatDuration(ms) {
    var totalMin = Math.max(0, Math.floor(ms / 60000));
    var h = Math.floor(totalMin / 60);
    var m = totalMin % 60;
    if (h > 0) return h + 'h ' + m + 'm';
    return m + 'm';
  }

  // Calculate sun dot position on the arc for a given progress (0-1)
  function sunDotPosition(progress) {
    // Arc goes from (8,36) to (152,36) via semicircle with r=72, center at (80,36)
    // Angle goes from PI (left) to 0 (right)
    var angle = Math.PI * (1 - progress);
    var cx = 80, cy = 36, r = 72;
    return { x: cx + r * Math.cos(angle), y: cy - r * Math.sin(angle) };
  }

  function build(container) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('width', '160');
    svg.setAttribute('height', '40');
    svg.setAttribute('viewBox', '0 0 160 40');

    // Gradient definition
    var defs = document.createElementNS(SVG_NS, 'defs');
    var grad = document.createElementNS(SVG_NS, 'linearGradient');
    grad.id = 'hero-arc-gradient';
    grad.setAttribute('x1', '0%');
    grad.setAttribute('x2', '100%');
    [['0%','#ff8a65'],['50%','#ffcc02'],['100%','#ff8a65']].forEach(function (s) {
      var stop = document.createElementNS(SVG_NS, 'stop');
      stop.setAttribute('offset', s[0]);
      stop.setAttribute('stop-color', s[1]);
      grad.appendChild(stop);
    });
    defs.appendChild(grad);
    svg.appendChild(defs);

    // Track (full arc, faint)
    var track = document.createElementNS(SVG_NS, 'path');
    track.setAttribute('d', ARC_PATH);
    track.setAttribute('fill', 'none');
    track.setAttribute('stroke', 'rgba(255,255,255,0.08)');
    track.setAttribute('stroke-width', '2');
    track.setAttribute('stroke-linecap', 'round');
    svg.appendChild(track);

    // Fill (gradient arc, clipped by dashoffset)
    var fill = document.createElementNS(SVG_NS, 'path');
    fill.setAttribute('d', ARC_PATH);
    fill.setAttribute('fill', 'none');
    fill.setAttribute('stroke', 'url(#hero-arc-gradient)');
    fill.setAttribute('stroke-width', '2');
    fill.setAttribute('stroke-linecap', 'round');
    fill.setAttribute('stroke-dasharray', ARC_TOTAL_LENGTH);
    fill.setAttribute('stroke-dashoffset', ARC_TOTAL_LENGTH);
    fill.id = 'hero-arc-fill';
    svg.appendChild(fill);

    // Sun dot (glow + core)
    var glow = document.createElementNS(SVG_NS, 'circle');
    glow.id = 'hero-sun-glow';
    glow.setAttribute('r', '8');
    glow.setAttribute('fill', '#ffcc02');
    glow.setAttribute('opacity', '0.08');
    svg.appendChild(glow);

    var dot = document.createElementNS(SVG_NS, 'circle');
    dot.id = 'hero-sun-dot';
    dot.setAttribute('r', '4.5');
    dot.setAttribute('fill', '#ffcc02');
    dot.setAttribute('opacity', '0.6');
    svg.appendChild(dot);

    // Time anchors
    var tLeft = document.createElementNS(SVG_NS, 'text');
    tLeft.id = 'hero-arc-sunrise';
    tLeft.setAttribute('x', '4');
    tLeft.setAttribute('y', '38');
    tLeft.setAttribute('fill', 'rgba(255,255,255,0.3)');
    tLeft.setAttribute('font-size', '7');
    tLeft.setAttribute('font-family', 'Inter');
    svg.appendChild(tLeft);

    var tRight = document.createElementNS(SVG_NS, 'text');
    tRight.id = 'hero-arc-sunset';
    tRight.setAttribute('x', '138');
    tRight.setAttribute('y', '38');
    tRight.setAttribute('fill', 'rgba(255,255,255,0.3)');
    tRight.setAttribute('font-size', '7');
    tRight.setAttribute('font-family', 'Inter');
    svg.appendChild(tRight);

    container.appendChild(svg);

    // Label element
    var label = document.createElement('div');
    label.className = 'hero-meter-label';
    label.id = 'hero-meter-label';
    container.appendChild(label);
  }

  function update() {
    var now = new Date();
    var times = HeroGradient.getSunTimes(now);
    var sunrise = times.sunrise;
    var sunset = times.sunset;
    var nowMs = now.getTime();
    var sunriseMs = sunrise.getTime();
    var sunsetMs = sunset.getTime();

    var fill = document.getElementById('hero-arc-fill');
    var dot = document.getElementById('hero-sun-dot');
    var glow = document.getElementById('hero-sun-glow');
    var label = document.getElementById('hero-meter-label');
    var srText = document.getElementById('hero-arc-sunrise');
    var ssText = document.getElementById('hero-arc-sunset');

    srText.textContent = formatTime(sunrise);
    ssText.textContent = formatTime(sunset);

    if (nowMs < sunriseMs) {
      // Before sunrise — no arc fill, show countdown
      fill.setAttribute('stroke-dashoffset', ARC_TOTAL_LENGTH);
      dot.setAttribute('opacity', '0');
      glow.setAttribute('opacity', '0');
      label.textContent = 'Sunrise in ' + formatDuration(sunriseMs - nowMs);
      label.style.color = 'rgba(179,136,255,0.6)';
    } else if (nowMs > sunsetMs) {
      // After sunset — check tomorrow's sunrise
      var tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      var tomorrowTimes = HeroGradient.getSunTimes(tomorrow);
      fill.setAttribute('stroke-dashoffset', ARC_TOTAL_LENGTH);
      dot.setAttribute('opacity', '0');
      glow.setAttribute('opacity', '0');
      label.textContent = 'Sunrise in ' + formatDuration(tomorrowTimes.sunrise.getTime() - nowMs);
      label.style.color = 'rgba(179,136,255,0.6)';
    } else {
      // During day — show progress
      var progress = (nowMs - sunriseMs) / (sunsetMs - sunriseMs);
      var offset = ARC_TOTAL_LENGTH * (1 - progress);
      fill.setAttribute('stroke-dashoffset', offset);
      var pos = sunDotPosition(progress);
      dot.setAttribute('cx', pos.x);
      dot.setAttribute('cy', pos.y);
      dot.setAttribute('opacity', '0.6');
      glow.setAttribute('cx', pos.x);
      glow.setAttribute('cy', pos.y);
      glow.setAttribute('opacity', '0.08');
      label.textContent = formatDuration(sunsetMs - nowMs) + ' daylight left';
      label.style.color = '#ffcc02';
    }
  }

  return {
    build: build,
    update: update
  };
})();
