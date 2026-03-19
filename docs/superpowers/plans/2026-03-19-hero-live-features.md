# Hero Section — Live Local Features Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static hero section with a dynamic, layered hero reflecting real-time local conditions in Baton Rouge, LA — sunrise/sunset gradient, daylight arc meter, animated traffic network, weather particles, and weather badge.

**Architecture:** Seven z-indexed layers render bottom-to-top: CSS gradient (z0), weather tint div (z1), traffic canvas (z2), weather canvas (z3), SVG road network (z4), hero content (z5), daylight meter (z6), and weather badge (z7). A single `requestAnimationFrame` loop in `hero.js` drives both canvases. SunCalc runs client-side for sun position; OpenWeatherMap free-tier API provides weather data cached in localStorage.

**Tech Stack:** Vanilla JS (ES6+), HTML5 Canvas, SVG, CSS, SunCalc (~2KB vendored), OpenWeatherMap API, Jekyll/GitHub Pages

**Spec:** `docs/superpowers/specs/2026-03-19-hero-live-features-design.md`

**Reference mockup:** `.superpowers/brainstorm/30306-1773937381/pared-down.html` (approved final mockup with all working particle code)

---

## File Structure

```
js/
  vendor/
    suncalc.min.js        — vendored SunCalc library (~2KB)
  hero/
    hero.js               — orchestrator: lifecycle, single rAF loop, IntersectionObserver
    gradient.js           — sunrise/sunset gradient phases + opacity crossfade
    daylight-meter.js     — SVG arc meter creation and 60s updates
    traffic.js            — traffic particle system (init, draw, weather interaction)
    weather.js            — weather API fetch, caching, weather particles, lightning, badge
    roads.js              — SVG road path data + labels for BR metro
css/
  hero.css                — hero-specific styles (layers, positioning, badge, responsive)
```

**Modified files:**
- `_layouts/default.html` — add `<link>` for `hero.css`, add `<script>` tags for SunCalc + hero modules
- `index.html` — restructure hero section HTML with layer elements (canvases, SVG container, tint div, meter, badge)

---

## Task 1: Vendor SunCalc Library

**Files:**
- Create: `js/vendor/suncalc.min.js`

- [ ] **Step 1: Download SunCalc**

Download the SunCalc library (minified, ~2KB) from the npm registry CDN. This is a pure-JS library with no dependencies.

```bash
curl -o js/vendor/suncalc.min.js https://cdn.jsdelivr.net/npm/suncalc@1.9.0/suncalc.js
```

- [ ] **Step 2: Verify SunCalc loads**

Create a temporary test in the browser console to confirm the library works:

```bash
# Start Jekyll if not running
cd /Users/maniginam/projects/maniginam.github.io
eval "$(rbenv init -)" && bundle exec jekyll serve &
```

Open `http://localhost:4000` and in the browser DevTools console, paste:

```javascript
// Load SunCalc manually to test
const s = document.createElement('script');
s.src = '/js/vendor/suncalc.min.js';
document.head.appendChild(s);
// Wait, then:
setTimeout(() => {
  const times = SunCalc.getTimes(new Date(), 30.4515, -91.1871);
  console.log('Sunrise:', times.sunrise);
  console.log('Sunset:', times.sunset);
}, 500);
```

Expected: Console logs Baton Rouge sunrise/sunset times for today.

- [ ] **Step 3: Commit**

```bash
mkdir -p js/vendor
git add js/vendor/suncalc.min.js
git commit -m "feat: vendor SunCalc library for sun position calculations"
```

---

## Task 2: Hero CSS Layer Structure

**Files:**
- Create: `css/hero.css`
- Modify: `_layouts/default.html:10` (add stylesheet link)
- Modify: `index.html:7-14` (restructure hero HTML)

- [ ] **Step 1: Create hero.css with layer positioning**

```css
/* ============================================
   Hero Live Features — Layer Stack
   ============================================ */

/* --- Gradient layers for crossfade --- */
.hero-gradient-out,
.hero-gradient-in {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0;
  transition: opacity 2s ease;
}

.hero-gradient-out { opacity: 1; }
.hero-gradient-in  { opacity: 0; }

/* --- Weather tint overlay --- */
.hero-weather-tint {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
  pointer-events: none;
  transition: background 1s ease;
}

/* --- Traffic canvas --- */
.hero-traffic-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 2;
  transition: opacity 1s ease;
}

/* --- Weather canvas --- */
.hero-weather-canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 3;
}

/* --- Road SVG layer --- */
.hero-road-layer {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 4;
  pointer-events: none;
}

.hero-road-layer svg {
  width: 100%;
  height: 100%;
}

/* --- Hero content (override main.css z-index) --- */
.hero-section .hero-content {
  z-index: 5;
  position: relative;
}

/* --- Daylight arc meter --- */
.hero-daylight-meter {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 6;
}

.hero-meter-label {
  font-size: 0.7rem;
  color: #ffcc02;
  font-family: 'Inter', sans-serif;
  margin-top: 2px;
}

/* --- Weather badge --- */
.hero-weather-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(26, 26, 46, 0.8);
  padding: 3px 7px;
  border-radius: 6px;
  z-index: 7;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: 'Inter', sans-serif;
}

.hero-weather-badge .weather-icon {
  font-size: 0.75rem;
}

.hero-weather-badge .weather-temp {
  font-size: 0.7rem;
  font-weight: 600;
  color: #e0e0e0;
}

.hero-weather-badge .weather-details {
  font-size: 0.45rem;
  color: #9e9e9e;
  line-height: 1.2;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero-road-layer text {
    display: none;
  }

  .hero-daylight-meter svg {
    width: 120px;
    height: 30px;
  }

  .hero-weather-badge {
    padding: 4px 8px;
  }
}
```

- [ ] **Step 2: Add hero.css link to default.html**

In `_layouts/default.html`, after line 10 (`<link rel="stylesheet" type="text/css" href="/css/main.css">`), add:

```html
    <link rel="stylesheet" type="text/css" href="/css/hero.css">
```

- [ ] **Step 3: Restructure hero HTML in index.html**

Replace the hero section (lines 7-14 of `index.html`) with:

```html
<!-- Hero -->
<section id="hero" class="hero-section">
  <div class="hero-gradient-out"></div>
  <div class="hero-gradient-in"></div>
  <div class="hero-weather-tint"></div>
  <canvas class="hero-traffic-canvas"></canvas>
  <canvas class="hero-weather-canvas"></canvas>
  <div class="hero-road-layer"></div>
  <div class="hero-content reveal">
    <h1 class="hero-title">Gina Martiny</h1>
    <p class="hero-tagline">Software Craftsman &bull; Agentic AI Developer</p>
    <p class="hero-credentials">Chemical Engineer (UIC) &bull; MBA (LSU)</p>
    <a href="#about" class="hero-cta">Explore</a>
  </div>
  <div class="hero-daylight-meter"></div>
  <div class="hero-weather-badge"></div>
</section>
```

- [ ] **Step 4: Verify in browser**

Open `http://localhost:4000`. The hero should look the same as before (dark background, centered text) with no visible changes yet — just the layer elements in place. Inspect the DOM to confirm all layer elements exist.

- [ ] **Step 5: Commit**

```bash
git add css/hero.css _layouts/default.html index.html
git commit -m "feat: add hero layer structure (CSS + HTML) for live features"
```

---

## Task 3: Road Network SVG

**Files:**
- Create: `js/hero/roads.js`

This module exports road path data and a function to build the SVG road network with labels. Path data comes from the approved mockup at `.superpowers/brainstorm/30306-1773937381/pared-down.html`.

- [ ] **Step 1: Create roads.js with path data and SVG builder**

```javascript
// js/hero/roads.js
// Road network SVG data for East/West Baton Rouge Parish
// ViewBox: 900x500 (stylized, not geographically accurate)

window.HeroRoads = (function () {
  var ROADS = [
    { id: 'rd-i10', label: 'I-10 E/W', d: 'M 0 260 Q 200 250, 400 240 Q 550 235, 700 250 Q 800 258, 900 265', type: 'interstate', stroke: '#b388ff', width: 2.5, opacity: 0.6, labelOffset: '15%', fontSize: 9, fontWeight: 600, letterSpacing: 3, traffic: 'mixed', count: 25 },
    { id: 'rd-i12', label: 'I-12 E', d: 'M 480 240 Q 550 180, 650 140 Q 750 110, 900 90', type: 'interstate', stroke: '#b388ff', width: 2, opacity: 0.5, labelOffset: '35%', fontSize: 8, fontWeight: 600, letterSpacing: 2, traffic: 'flowing', count: 15 },
    { id: 'rd-i110', label: 'I-110 N/S', d: 'M 400 240 Q 395 180, 390 120 Q 388 80, 385 20', type: 'interstate', stroke: '#b388ff', width: 2, opacity: 0.5, labelOffset: '30%', fontSize: 8, fontWeight: 600, letterSpacing: 2, traffic: 'moderate', count: 12 },
    { id: 'rd-airline', label: 'Airline Hwy N/S', d: 'M 300 400 Q 370 320, 410 250 Q 450 190, 500 120', type: 'local', stroke: '#9e9e9e', width: 1.2, opacity: 0.4, labelOffset: '20%', fontSize: 7, fontWeight: 400, letterSpacing: 1.5, traffic: 'moderate', count: 10 },
    { id: 'rd-florida', label: 'Florida Blvd E/W', d: 'M 200 230 Q 350 225, 500 220 Q 650 218, 780 215', type: 'local', stroke: '#9e9e9e', width: 1.2, opacity: 0.4, labelOffset: '25%', fontSize: 7, fontWeight: 400, letterSpacing: 1.5, traffic: 'congested', count: 14 },
    { id: 'rd-perkins', label: 'Perkins Rd E/W', d: 'M 350 300 Q 500 290, 650 285 Q 750 280, 850 278', type: 'local', stroke: '#9e9e9e', width: 1, opacity: 0.3, labelOffset: '20%', fontSize: 6.5, fontWeight: 400, letterSpacing: 1, traffic: 'flowing', count: 8 },
    { id: 'rd-siegen', label: 'Siegen Ln N/S', d: 'M 600 180 Q 610 250, 620 320 Q 628 380, 635 460', type: 'local', stroke: '#9e9e9e', width: 1, opacity: 0.3, labelOffset: '15%', fontSize: 6.5, fontWeight: 400, letterSpacing: 1, traffic: 'flowing', count: 7 },
    { id: 'rd-nicholson', label: 'Nicholson Dr N/S', d: 'M 320 240 Q 335 310, 350 380 Q 360 430, 370 500', type: 'local', stroke: '#9e9e9e', width: 1, opacity: 0.3, labelOffset: '15%', fontSize: 6.5, fontWeight: 400, letterSpacing: 1, traffic: 'moderate', count: 7 },
    { id: 'rd-coursey', label: 'Coursey Blvd E/W', d: 'M 350 170 Q 500 165, 650 160 Q 750 158, 850 155', type: 'local', stroke: '#9e9e9e', width: 1, opacity: 0.3, labelOffset: '20%', fontSize: 6.5, fontWeight: 400, letterSpacing: 1, traffic: 'flowing', count: 8 },
    { id: 'rd-westbr', label: 'Port Allen', d: 'M 0 300 Q 80 290, 160 275 Q 220 265, 280 280', type: 'local', stroke: '#9e9e9e', width: 1.2, opacity: 0.3, labelOffset: '15%', fontSize: 7, fontWeight: 400, letterSpacing: 1.5, traffic: 'flowing', count: 6 },
    { id: 'rd-bridge', label: 'Huey Long E/W', d: 'M 280 280 Q 320 260, 400 240', type: 'bridge', stroke: '#9e9e9e', width: 1.5, opacity: 0.4, labelOffset: '5%', fontSize: 6, fontWeight: 400, letterSpacing: 2, labelFill: 'rgba(255,204,2,0.4)', traffic: 'congested', count: 8 }
  ];

  // Non-labeled paths (Mississippi River, connecting roads)
  var EXTRAS = [
    { d: 'M 150 500 Q 200 400, 260 310 Q 300 250, 330 180 Q 350 130, 360 20', stroke: 'rgba(255,204,2,0.3)', width: 3, opacity: 0.3, dasharray: '8 6' },
    { d: 'M 100 200 Q 150 240, 200 270 Q 240 280, 280 280', stroke: '#9e9e9e', width: 1, opacity: 0.25 }
  ];

  // Area labels
  var AREAS = [
    { text: 'WEST BR', x: 100, y: 340, fontSize: 10, fill: '#9e9e9e', opacity: 0.2, letterSpacing: 3, fontWeight: 300 },
    { text: 'EAST BR', x: 500, y: 310, fontSize: 10, fill: '#9e9e9e', opacity: 0.2, letterSpacing: 3, fontWeight: 300 },
    { text: 'MISSISSIPPI', x: 220, y: 200, fontSize: 8, fill: 'rgba(255,204,2,0.15)', letterSpacing: 6, fontWeight: 300 }
  ];

  // Control points for traffic particle interpolation (same paths as SVG but as arrays)
  var TRAFFIC_PATHS = [
    { points: [[0,260],[200,250],[400,240],[550,235],[700,250],[900,265]], traffic: 'mixed', weight: 2.5, count: 25 },
    { points: [[480,240],[550,180],[650,140],[750,110],[900,90]], traffic: 'flowing', weight: 2, count: 15 },
    { points: [[400,240],[395,180],[390,120],[388,80],[385,20]], traffic: 'moderate', weight: 2, count: 12 },
    { points: [[300,400],[370,320],[410,250],[450,190],[500,120]], traffic: 'moderate', weight: 1.5, count: 10 },
    { points: [[200,230],[350,225],[500,220],[650,218],[780,215]], traffic: 'congested', weight: 1.5, count: 14 },
    { points: [[350,300],[500,290],[650,285],[850,278]], traffic: 'flowing', weight: 1, count: 8 },
    { points: [[600,180],[610,250],[620,320],[635,460]], traffic: 'flowing', weight: 1, count: 7 },
    { points: [[320,240],[335,310],[350,380],[370,500]], traffic: 'moderate', weight: 1, count: 7 },
    { points: [[350,170],[500,165],[650,160],[850,155]], traffic: 'flowing', weight: 1, count: 8 },
    { points: [[0,300],[80,290],[160,275],[220,265],[280,280]], traffic: 'flowing', weight: 1, count: 6 },
    { points: [[280,280],[320,260],[400,240]], traffic: 'congested', weight: 1.5, count: 8 }
  ];

  var SVG_NS = 'http://www.w3.org/2000/svg';

  function buildSVG(container) {
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 900 500');
    svg.setAttribute('preserveAspectRatio', 'none');

    // Road paths
    ROADS.forEach(function (r) {
      var path = document.createElementNS(SVG_NS, 'path');
      path.id = r.id;
      path.setAttribute('d', r.d);
      path.setAttribute('stroke', r.stroke);
      path.setAttribute('stroke-width', r.width);
      path.setAttribute('fill', 'none');
      path.setAttribute('opacity', r.opacity);
      svg.appendChild(path);
    });

    // Extra paths (river, connectors)
    EXTRAS.forEach(function (e) {
      var path = document.createElementNS(SVG_NS, 'path');
      path.setAttribute('d', e.d);
      path.setAttribute('stroke', e.stroke);
      path.setAttribute('stroke-width', e.width);
      path.setAttribute('fill', 'none');
      path.setAttribute('opacity', e.opacity);
      if (e.dasharray) path.setAttribute('stroke-dasharray', e.dasharray);
      svg.appendChild(path);
    });

    // Road labels
    ROADS.forEach(function (r) {
      var text = document.createElementNS(SVG_NS, 'text');
      text.setAttribute('font-family', 'Inter');
      text.setAttribute('font-size', r.fontSize);
      text.setAttribute('fill', r.labelFill || r.stroke);
      text.setAttribute('opacity', r.type === 'interstate' ? 0.55 : (r.type === 'bridge' ? 1 : 0.4));
      if (r.fontWeight) text.setAttribute('font-weight', r.fontWeight);
      text.setAttribute('letter-spacing', r.letterSpacing);
      var tp = document.createElementNS(SVG_NS, 'textPath');
      tp.setAttribute('href', '#' + r.id);
      tp.setAttribute('startOffset', r.labelOffset);
      tp.textContent = r.label;
      text.appendChild(tp);
      svg.appendChild(text);
    });

    // Area labels
    AREAS.forEach(function (a) {
      var text = document.createElementNS(SVG_NS, 'text');
      text.setAttribute('x', a.x);
      text.setAttribute('y', a.y);
      text.setAttribute('font-family', 'Inter');
      text.setAttribute('font-size', a.fontSize);
      text.setAttribute('fill', a.fill);
      text.setAttribute('opacity', a.opacity);
      text.setAttribute('letter-spacing', a.letterSpacing);
      text.setAttribute('font-weight', a.fontWeight);
      text.textContent = a.text;
      svg.appendChild(text);
    });

    container.appendChild(svg);
  }

  return {
    ROADS: ROADS,
    TRAFFIC_PATHS: TRAFFIC_PATHS,
    buildSVG: buildSVG
  };
})();
```

- [ ] **Step 2: Verify road SVG renders**

Temporarily add a script tag to `_layouts/default.html` before `</body>`:

```html
<script src="/js/hero/roads.js"></script>
```

Then in browser console:

```javascript
var container = document.querySelector('.hero-road-layer');
HeroRoads.buildSVG(container);
```

Expected: SVG road network appears in the hero section with labeled streets.

- [ ] **Step 3: Commit**

```bash
mkdir -p js/hero
git add js/hero/roads.js
git commit -m "feat: add BR metro road network SVG data and builder"
```

---

## Task 4: Sunrise/Sunset Gradient System

**Files:**
- Create: `js/hero/gradient.js`

- [ ] **Step 1: Create gradient.js with phase detection and crossfade**

```javascript
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
```

- [ ] **Step 2: Verify gradient displays**

In browser console (with SunCalc already loaded):

```javascript
var out = document.querySelector('.hero-gradient-out');
var inn = document.querySelector('.hero-gradient-in');
HeroGradient.init(out, inn);
console.log('Current phase:', HeroGradient.getPhase(new Date()));
```

Expected: Hero background changes to the gradient matching current time of day.

- [ ] **Step 3: Commit**

```bash
git add js/hero/gradient.js
git commit -m "feat: add sunrise/sunset gradient system with phase crossfade"
```

---

## Task 5: Daylight Arc Meter

**Files:**
- Create: `js/hero/daylight-meter.js`

- [ ] **Step 1: Create daylight-meter.js**

```javascript
// js/hero/daylight-meter.js
// SVG semicircle arc showing sun progress from sunrise to sunset

window.HeroDaylightMeter = (function () {
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var ARC_PATH = 'M 8 36 A 72 72 0 0 1 152 36';
  var ARC_TOTAL_LENGTH = 226; // approximate arc length in SVG units

  function formatTime(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    var ampm = h >= 12 ? 'pm' : 'am';
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
    var dayLength = sunsetMs - sunriseMs;

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
      var progress = (nowMs - sunriseMs) / dayLength;
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
```

- [ ] **Step 2: Verify arc meter renders**

Load the script in the browser and call:

```javascript
var meter = document.querySelector('.hero-daylight-meter');
HeroDaylightMeter.build(meter);
HeroDaylightMeter.update();
```

Expected: Arc meter appears at bottom center of hero with current daylight progress, sunrise/sunset time anchors, and "Xh Ym daylight left" label.

- [ ] **Step 3: Commit**

```bash
git add js/hero/daylight-meter.js
git commit -m "feat: add daylight arc meter with sun position tracking"
```

---

## Task 6: Traffic Particle System

**Files:**
- Create: `js/hero/traffic.js`

- [ ] **Step 1: Create traffic.js with particle system**

```javascript
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
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
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
    var countMult = countMap[condition] || 1;
    canvas.style.opacity = opacity;

    // Rebuild particles with reduced count if weather reduces them
    var baseMult = getCountMultiplier();
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
```

- [ ] **Step 2: Verify traffic particles animate**

In browser console:

```javascript
HeroTraffic.init(document.querySelector('.hero-traffic-canvas'));
function testLoop() { HeroTraffic.draw(); requestAnimationFrame(testLoop); }
testLoop();
```

Expected: Bidirectional colored dots flow along road paths — green (flowing), yellow (moderate), red (congested), with glow halos and pulsing alpha.

- [ ] **Step 3: Commit**

```bash
git add js/hero/traffic.js
git commit -m "feat: add traffic particle system with bidirectional flow"
```

---

## Task 7: Weather System (API + Particles + Badge)

**Files:**
- Create: `js/hero/weather.js`

- [ ] **Step 1: Create weather.js with API, caching, particles, lightning, and badge**

```javascript
// js/hero/weather.js
// OpenWeatherMap API integration, weather particles, lightning, and badge

window.HeroWeather = (function () {
  var API_KEY = ''; // TODO: Add OpenWeatherMap free-tier API key
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
        var fallback = isNight() ? 'clear' : 'clear';
        applyCondition(fallback, tintEl);
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
```

- [ ] **Step 2: Verify weather particles render (without API key, defaults to clear)**

In browser console:

```javascript
HeroWeather.init(document.querySelector('.hero-weather-canvas'));
var tint = document.querySelector('.hero-weather-tint');
var badge = document.querySelector('.hero-weather-badge');
HeroWeather.loadAndApply(tint, badge);
function testWeather() { HeroWeather.draw(); requestAnimationFrame(testWeather); }
testWeather();
```

Expected: Without an API key, falls back to clear weather (heat shimmer during day, stars at night). Badge is hidden.

- [ ] **Step 3: Commit**

```bash
git add js/hero/weather.js
git commit -m "feat: add weather system with API caching, particles, lightning, and badge"
```

---

## Task 8: Hero Orchestrator

**Files:**
- Create: `js/hero/hero.js`
- Modify: `_layouts/default.html` (add all script tags)

- [ ] **Step 1: Create hero.js orchestrator**

```javascript
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
```

- [ ] **Step 2: Add all script tags to default.html**

In `_layouts/default.html`, replace the single script tag at line 33 with:

```html
<script src="/js/scroll-animations.js"></script>
<script src="/js/vendor/suncalc.min.js"></script>
<script src="/js/hero/roads.js"></script>
<script src="/js/hero/gradient.js"></script>
<script src="/js/hero/daylight-meter.js"></script>
<script src="/js/hero/traffic.js"></script>
<script src="/js/hero/weather.js"></script>
<script src="/js/hero/hero.js"></script>
```

- [ ] **Step 3: Verify full hero integration in browser**

Open `http://localhost:4000`. Expected:
- Background gradient matches current time of day
- Road SVG network visible with labeled streets
- Traffic particles flow bidirectionally along roads
- Daylight meter at bottom center shows sun progress
- Weather badge hidden (no API key yet) OR showing weather data if key is set
- Heat shimmer (day) or stars (night) in background
- Animation pauses when scrolling past hero section
- Animation resumes when scrolling back up

- [ ] **Step 4: Commit**

```bash
git add js/hero/hero.js _layouts/default.html
git commit -m "feat: add hero orchestrator with single rAF loop and visibility pausing"
```

---

## Task 9: OpenWeatherMap API Key

**Files:**
- Modify: `js/hero/weather.js:8`

- [ ] **Step 1: Obtain API key**

Sign up at https://openweathermap.org/api and get a free-tier API key. The free tier allows 1000 calls/day.

- [ ] **Step 2: Add API key to weather.js**

Edit `js/hero/weather.js` line 8 to add the key:

```javascript
  var API_KEY = 'YOUR_ACTUAL_KEY_HERE';
```

- [ ] **Step 3: Verify weather data loads**

Reload `http://localhost:4000`. Expected:
- Weather badge appears in top-right with emoji, temperature, condition, and humidity
- Weather particles match current conditions (rain streaks, fog clouds, etc.)
- If clear: heat shimmer (day) or stars (night)
- Traffic particles dim/reduce during weather events
- Check localStorage in DevTools: `hero-weather-cache` key present with data

- [ ] **Step 4: Commit**

```bash
git add js/hero/weather.js
git commit -m "feat: add OpenWeatherMap API key for live weather data"
```

---

## Task 10: Remove Old Hero Background from main.css

**Files:**
- Modify: `css/main.css:159` (remove static hero background)

- [ ] **Step 1: Remove the static hero gradient**

In `css/main.css`, the `.hero-section` rule at line 152-162 has `background: radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a1a 100%);`. Remove this line since the gradient is now managed dynamically by `gradient.js`.

Change line 159 from:
```css
    background: radial-gradient(ellipse at bottom, #1a1a3e 0%, #0a0a1a 100%);
```
to:
```css
    background: #0a0a1a;
```

This provides a fallback color if JS fails to load, without competing with the dynamic gradient.

- [ ] **Step 2: Verify hero still looks correct**

Reload `http://localhost:4000`. The dynamic gradient should be the visible background. Temporarily disable JS in DevTools — the hero should show a plain dark background as fallback.

- [ ] **Step 3: Commit**

```bash
git add css/main.css
git commit -m "refactor: replace static hero gradient with JS-managed dynamic gradient"
```

---

## Task 11: Final Responsive Polish

**Files:**
- Modify: `css/hero.css` (responsive section)

- [ ] **Step 1: Test mobile viewport**

In browser DevTools, switch to mobile viewport (375px width). Check:
- Road labels should be hidden (already in hero.css media query)
- Daylight meter scales to 120px
- Weather badge slightly larger for touch
- Hero content still centered and readable
- Traffic particles reduced (handled by JS device tier detection)

- [ ] **Step 2: Add any needed responsive fixes**

If the hero content overlaps the meter on small screens, adjust spacing. If the weather badge is too small for touch, increase padding. These are visual polish fixes — only add CSS rules that are actually needed based on browser testing.

- [ ] **Step 3: Commit**

```bash
git add css/hero.css
git commit -m "fix: responsive polish for hero live features on mobile/tablet"
```

---

## Task 12: End-to-End Verification

- [ ] **Step 1: Test all five scenarios**

Verify each scenario from the approved mockup works by temporarily forcing weather conditions in the browser console. The `applyCondition` method on `HeroWeather` is not public, so call `loadAndApply` internals directly:

```javascript
// Force a specific weather condition for testing
// This bypasses the API and directly sets the particle/tint state
var tint = document.querySelector('.hero-weather-tint');
var badge = document.querySelector('.hero-weather-badge');

// To test rain:
HeroWeather.init(document.querySelector('.hero-weather-canvas'));
// Manually trigger condition — add a temporary test helper in console:
(function(condition) {
  var tints = { rain:'rgba(20,20,40,0.3)', thunderstorm:'rgba(10,10,20,0.4)', fog:'rgba(40,40,60,0.25)' };
  tint.style.background = tints[condition] || 'transparent';
  HeroTraffic.applyWeatherEffect(condition);
})('rain');  // Change to: 'thunderstorm', 'fog', 'snow', 'clouds', 'clear'
```

Test each: clear day, clear night, rain, thunderstorm, fog. Verify:
- Gradient matches time of day
- Traffic particles dim correctly during weather
- Weather particles match condition
- Lightning flashes during thunderstorm
- Weather badge shows correct emoji and data
- Daylight meter updates

- [ ] **Step 2: Test gradient phases**

Override the Date to test different times of day:

```javascript
// Test sunset gradient
var origDate = Date;
Date = function() { return new origDate(2026, 2, 19, 19, 0, 0); };
Date.now = origDate.now;
```

Verify gradient changes for dawn, morning, noon, golden hour, sunset, twilight, and night.

- [ ] **Step 3: Performance check**

Open DevTools Performance tab, record 5 seconds of animation. Check:
- Frame rate stays near 60fps
- No memory leaks (heap not growing)
- Animation pauses when scrolling past hero (verify rAF stops)

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete hero section live local features

- Sunrise/sunset gradient with phase crossfade
- Daylight arc meter with sun position tracking
- BR metro traffic network with bidirectional particles
- Weather particles (rain, storm, fog, snow, clouds, shimmer, stars)
- Weather badge with OpenWeatherMap integration
- IntersectionObserver-based animation pausing
- Responsive particle budgets per device tier"
```
