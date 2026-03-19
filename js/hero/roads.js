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
