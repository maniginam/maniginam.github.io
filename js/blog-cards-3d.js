// 3D Blog Card Wall — Three.js
// Cards arranged in a flat gallery wall, gentle float, click to zoom
(function () {
  var container = document.getElementById('blog-3d-scene');
  if (!container) return;

  var posts = window.BLOG_POSTS || [];
  if (!posts.length) return;

  // Reduced motion check
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    container.style.display = 'none';
    var fallback = document.getElementById('blog-fallback');
    if (fallback) fallback.style.display = 'block';
    return;
  }

  // --- Scene ---
  var w = container.clientWidth;
  var h = container.clientHeight;
  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x1a1a2e, 0.04);

  var camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
  camera.position.set(0, 0, 14);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(w, h);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Lighting
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  var ptLight = new THREE.PointLight(0xb388ff, 0.8, 30);
  ptLight.position.set(0, 2, 10);
  scene.add(ptLight);
  var ptLight2 = new THREE.PointLight(0xff6b6b, 0.3, 20);
  ptLight2.position.set(-6, -3, 8);
  scene.add(ptLight2);

  // --- Layout config ---
  var cardW = 3.2;
  var cardH = 1.9;
  var gapX = 3.6;
  var gapY = 2.3;
  var cols = Math.min(3, posts.length);
  var rows = Math.ceil(posts.length / cols);
  var totalW = cols * gapX;
  var totalH = rows * gapY;

  // --- Build cards ---
  var cards = [];

  posts.forEach(function (post, i) {
    var col = i % cols;
    var row = Math.floor(i / cols);

    // Render to canvas
    var canvas2d = document.createElement('canvas');
    canvas2d.width = 512;
    canvas2d.height = 320;
    var ctx = canvas2d.getContext('2d');

    // Background
    ctx.fillStyle = '#242444';
    ctx.beginPath();
    ctx.roundRect(0, 0, 512, 320, 16);
    ctx.fill();

    // Top accent
    var grad = ctx.createLinearGradient(0, 0, 512, 0);
    grad.addColorStop(0, '#b388ff');
    grad.addColorStop(1, '#ff6b6b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 5);

    // Date
    ctx.fillStyle = '#b388ff';
    ctx.font = '600 18px Inter, Arial, sans-serif';
    ctx.fillText(post.date, 28, 42);

    // Title with word wrap
    ctx.fillStyle = '#e0e0e0';
    ctx.font = 'bold 26px Inter, Arial, sans-serif';
    var words = post.title.split(' ');
    var line = '';
    var lineY = 80;
    words.forEach(function (word) {
      var test = line + word + ' ';
      if (ctx.measureText(test).width > 440 && line) {
        ctx.fillText(line.trim(), 28, lineY);
        line = word + ' ';
        lineY += 34;
      } else {
        line = test;
      }
    });
    ctx.fillText(line.trim(), 28, lineY);

    // Excerpt
    if (post.excerpt) {
      ctx.fillStyle = '#9e9e9e';
      ctx.font = '16px Inter, Arial, sans-serif';
      var eWords = post.excerpt.split(' ').slice(0, 18);
      var eLine = '';
      var eY = lineY + 40;
      eWords.forEach(function (word) {
        var test = eLine + word + ' ';
        if (ctx.measureText(test).width > 440 && eLine) {
          ctx.fillText(eLine.trim(), 28, eY);
          eLine = word + ' ';
          eY += 22;
        } else {
          eLine = test;
        }
      });
      if (eY < 280) ctx.fillText(eLine.trim(), 28, eY);
    }

    // Read link
    ctx.fillStyle = '#ff6b6b';
    ctx.font = '600 16px Inter, Arial, sans-serif';
    ctx.fillText('Read \u2192', 28, 296);

    // Border
    ctx.strokeStyle = '#4a3f6b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(1, 1, 510, 318, 16);
    ctx.stroke();

    var tex = new THREE.CanvasTexture(canvas2d);
    tex.minFilter = THREE.LinearFilter;

    var geo = new THREE.PlaneGeometry(cardW, cardH);
    var mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      opacity: 0.92,
      roughness: 0.8,
      metalness: 0.05
    });
    var mesh = new THREE.Mesh(geo, mat);

    // Position in grid — centered
    var x = (col - (cols - 1) / 2) * gapX;
    var y = ((rows - 1) / 2 - row) * gapY;
    mesh.position.set(x, y, 0);

    scene.add(mesh);
    cards.push({
      mesh: mesh,
      baseX: x,
      baseY: y,
      baseZ: 0,
      url: post.url,
      index: i
    });
  });

  // --- Ambient particles ---
  var particleCount = 40;
  var pGeo = new THREE.BufferGeometry();
  var pPos = new Float32Array(particleCount * 3);
  for (var i = 0; i < particleCount; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * totalW * 2;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * totalH * 2;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  scene.add(new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0xb388ff, size: 0.05, transparent: true, opacity: 0.4
  })));

  // --- Interaction ---
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2(0, 0);
  var hoveredCard = null;
  var zoomedCard = null;
  var scrollY = 0;
  var targetScrollY = 0;
  var maxScroll = Math.max(0, (totalH - h * 0.3) / 2);

  // Scroll to pan vertically through the wall
  container.addEventListener('wheel', function (e) {
    if (zoomedCard !== null) return;
    e.preventDefault();
    targetScrollY += e.deltaY * 0.004;
    targetScrollY = Math.max(-maxScroll, Math.min(maxScroll, targetScrollY));
  }, { passive: false });

  // Touch drag
  var touchStartY = 0, touchScrollStart = 0;
  container.addEventListener('touchstart', function (e) {
    touchStartY = e.touches[0].clientY;
    touchScrollStart = targetScrollY;
  }, { passive: true });
  window.addEventListener('touchmove', function (e) {
    if (zoomedCard !== null) return;
    var dy = e.touches[0].clientY - touchStartY;
    targetScrollY = touchScrollStart - dy * 0.008;
    targetScrollY = Math.max(-maxScroll, Math.min(maxScroll, targetScrollY));
  });

  // Hover
  container.addEventListener('mousemove', function (e) {
    var rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  });

  // Click — zoom or navigate
  container.addEventListener('click', function () {
    if (zoomedCard !== null) {
      // If already zoomed, navigate to the post
      window.location.href = cards[zoomedCard].url;
      return;
    }
    if (hoveredCard !== null) {
      zoomedCard = hoveredCard;
    }
  });

  // Escape or click background to unzoom
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && zoomedCard !== null) zoomedCard = null;
  });
  container.addEventListener('click', function (e) {
    // Check if we clicked empty space while zoomed
    if (zoomedCard !== null && hoveredCard === null) {
      zoomedCard = null;
    }
  });

  container.style.cursor = 'default';

  // --- Animate ---
  function animate() {
    requestAnimationFrame(animate);
    var t = Date.now() * 0.001;

    // Smooth scroll
    scrollY += (targetScrollY - scrollY) * 0.08;

    // Raycast
    raycaster.setFromCamera(mouse, camera);
    var meshes = cards.map(function (c) { return c.mesh; });
    var intersects = raycaster.intersectObjects(meshes, false);
    hoveredCard = null;
    if (intersects.length > 0) {
      var hit = intersects[0].object;
      for (var hi = 0; hi < cards.length; hi++) {
        if (cards[hi].mesh === hit) { hoveredCard = hi; break; }
      }
    }

    // Update cards
    cards.forEach(function (c, i) {
      var targetX = c.baseX;
      var targetY = c.baseY + scrollY;
      var targetZ = c.baseZ;
      var targetScaleX = 1, targetScaleY = 1;
      var targetOpacity = 0.92;

      // Gentle float
      targetY += Math.sin(t * 0.6 + i * 1.1) * 0.06;
      targetX += Math.sin(t * 0.4 + i * 0.8) * 0.03;

      if (zoomedCard === i) {
        // Zoom this card to center
        targetX = 0;
        targetY = scrollY;
        targetZ = 6;
        targetScaleX = 1.5;
        targetScaleY = 1.5;
        targetOpacity = 1.0;
      } else if (zoomedCard !== null) {
        // Dim others
        targetOpacity = 0.3;
      } else if (hoveredCard === i) {
        // Hover pop
        targetZ = 1.2;
        targetOpacity = 1.0;
        targetScaleX = 1.05;
        targetScaleY = 1.05;
      }

      // Smooth lerp
      c.mesh.position.x += (targetX - c.mesh.position.x) * 0.1;
      c.mesh.position.y += (targetY - c.mesh.position.y) * 0.1;
      c.mesh.position.z += (targetZ - c.mesh.position.z) * 0.1;
      c.mesh.scale.x += (targetScaleX - c.mesh.scale.x) * 0.1;
      c.mesh.scale.y += (targetScaleY - c.mesh.scale.y) * 0.1;
      c.mesh.material.opacity += (targetOpacity - c.mesh.material.opacity) * 0.1;
    });

    // Cursor
    if (zoomedCard !== null && hoveredCard === zoomedCard) {
      container.style.cursor = 'pointer';
    } else if (hoveredCard !== null) {
      container.style.cursor = 'pointer';
    } else if (zoomedCard !== null) {
      container.style.cursor = 'zoom-out';
    } else {
      container.style.cursor = 'default';
    }

    // Particles drift
    var pArr = pGeo.attributes.position.array;
    for (var i = 0; i < particleCount; i++) {
      pArr[i * 3 + 1] += Math.sin(t * 0.5 + i) * 0.001;
      pArr[i * 3] += Math.cos(t * 0.3 + i * 0.7) * 0.001;
    }
    pGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }
  animate();

  // --- Resize ---
  window.addEventListener('resize', function () {
    w = container.clientWidth;
    h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
