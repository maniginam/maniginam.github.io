# Hero Section — Live Local Features

## Overview

Replace the static hero section on maniginam.github.io with a dynamic, layered hero that reflects real-time local conditions in Baton Rouge, LA. The hero combines five visual systems into a cohesive experience where each layer serves a distinct purpose without competing for attention.

## Visual Layer Stack

Layers render bottom-to-top. Each layer has a fixed z-index and clear responsibility.

| Z-Index | Layer | Purpose |
|---------|-------|---------|
| 0 | Sunrise/sunset gradient | Time-of-day atmosphere (CSS background on .hero-section) |
| 1 | Weather tint | Semi-transparent div overlay to darken gradient during weather |
| 2 | Traffic particles (canvas) | Bidirectional traffic flow on road paths |
| 3 | Weather particles (canvas) | Rain, storm, fog, or shimmer effects |
| 4 | Road network + labels (SVG) | Labeled BR metro roads, area names. `pointer-events: none` |
| 5 | Hero content | Name, tagline, credentials, Explore CTA |
| 6 | Daylight arc meter | Anchored at bottom center, absolute positioned |
| 7 | Weather badge | Tiny badge, top-right corner |

## Feature 1: Sunrise/Sunset Gradient

The hero background is a CSS gradient that shifts based on the sun's position relative to local sunrise/sunset times.

### Phases

| Phase | Trigger | Gradient |
|-------|---------|----------|
| Dawn | Sunrise -30min to +30min | Deep purple -> mauve -> coral -> orange |
| Morning | Sunrise +30min to noon -2hr | Dark blue -> medium blue -> sky blue |
| Noon | Noon -2hr to noon +2hr | Navy -> blue -> bright blue |
| Golden Hour | Sunset -2hr to sunset -30min | Purple -> plum -> burnt orange -> gold |
| Sunset | Sunset -30min to +30min | Dark indigo -> purple -> rose -> coral |
| Twilight | Sunset +30min to +90min | Dark indigo -> purple -> mauve |
| Night | Sunset +90min to sunrise -30min | Radial gradient, deep indigo/black |

### Phase Transitions

Gradients transition using an opacity crossfade between two stacked gradient layers (not CSS transition of gradient values, which produces muddy intermediate colors). The outgoing gradient fades out over 2s while the incoming gradient fades in.

### Data Source

Sunrise/sunset times calculated client-side using the SunCalc library (no API needed). Uses hardcoded coordinates for Baton Rouge (30.4515, -91.1871). SunCalc uses UTC internally and converts based on the Date object, so visitor timezone does not affect accuracy — the gradients always reflect actual sun position in Baton Rouge.

### SunCalc Loading

SunCalc vendored locally as `js/vendor/suncalc.min.js` (~2KB). Loaded via `<script>` tag before `hero.js`. No build tooling required.

## Feature 2: Daylight Arc Meter

A compact SVG semicircle arc showing the sun's progress from sunrise to sunset, positioned at the bottom center of the hero.

### Elements

- **Track**: Faint semicircle arc (full path from sunrise to sunset)
- **Fill**: Gradient-stroked arc from sunrise to current position (orange -> gold -> orange)
- **Sun dot**: Glowing yellow circle tracking along the arc at current position
- **Time anchors**: Sunrise time (left) and sunset time (right) in faint text
- **Label**: "Xh Ym daylight left" or "Sunrise in Xh Ym" at night

### Sizing

Width: 160px, Height: 40px. Option B style (wider arc with time anchors). Positioned absolute, bottom 20px, centered horizontally via `left: 50%; transform: translateX(-50%)`.

### Update Frequency

Recalculates every 60 seconds.

## Feature 3: Traffic Network

Animated particles flowing along a simplified SVG road network of East and West Baton Rouge Parish.

### Road Network

| Road | Direction | Type | Traffic Weight |
|------|-----------|------|----------------|
| I-10 | E/W | Interstate | Heavy (mixed) |
| I-12 | E | Interstate | Medium (flowing) |
| I-110 | N/S | Interstate | Medium (moderate) |
| Airline Hwy | N/S | Local | Medium (moderate) |
| Florida Blvd | E/W | Local | Medium (congested) |
| Perkins Rd | E/W | Local | Light (flowing) |
| Siegen Ln | N/S | Local | Light (flowing) |
| Nicholson Dr | N/S | Local | Light (moderate) |
| Coursey Blvd | E/W | Local | Light (flowing) |
| Huey Long Bridge | E/W | Bridge | Medium (congested) |
| Port Allen area | E/W | Local | Light (flowing) |

Additional non-labeled elements: Mississippi River (dashed gold line), connecting roads.

### Road SVG Path Data

Road paths stored in `js/hero/roads.js` as arrays of [x, y] control points on a 900x500 viewBox, matching the mockup paths. These are simplified/stylized representations — not geographically accurate. Paths were designed during prototyping and are committed in the mockup files at `.superpowers/brainstorm/` for reference.

### Road Labels

SVG textPath elements following road paths. Interstates use `var(--accent-purple)` (#b388ff), local roads use `var(--text-muted)` (#9e9e9e). Area labels (WEST BR, EAST BR, MISSISSIPPI) as positioned text at low opacity.

Direction suffixes included: "I-10 E/W", "Siegen Ln N/S", etc.

### Traffic Particles

- Bidirectional: ~50% flow each direction per road
- Color-coded: Green (#4ade80) flowing, Yellow (#ffcc02) moderate, Red (#ff6b6b) congested
- Speed varies by traffic state: congested 0.0004, moderate 0.0008, flowing 0.0014 (units per frame)
- Glow effect: each particle has a larger faint halo (4x radius, 15% alpha)
- Pulsing: alpha oscillates per particle using sin wave for liveliness
- I-10 uses mixed traffic: 30% flowing, 40% moderate, 30% congested (random per particle)

### Particle Budgets

| Device Tier | Traffic Particles | Weather Particles |
|-------------|-------------------|-------------------|
| Desktop | ~140 total across all roads | Up to 280 (storm) |
| Tablet | ~100 | Up to 200 |
| Mobile (<768px) | ~70 | Up to 140 |

### Data Source

Phase 1: Static traffic assignments per road (as in mockup).
Phase 2 (future): Real-time traffic data from a traffic API (Google Maps, TomTom, or HERE).

### Weather Interaction

During weather events, traffic canvas opacity reduces via CSS opacity on the canvas element:
- Rain: 25% opacity, particle count x0.8
- Thunderstorm: 20% opacity, particle count x0.6
- Fog: 20% opacity, particle count x0.5
- Clear/Night: Full opacity

Note: The weather tint overlay (z-index 1) sits below the traffic canvas (z-index 2), so the tint does not compound with the traffic opacity reduction. Traffic dimming is solely controlled by the canvas element's CSS opacity.

## Feature 4: Weather Particles

Weather-driven particle effects layered above traffic. Only one weather type active at a time.

### Weather Types

| Condition | Particle Effect | Gradient Tint | Particle Color |
|-----------|----------------|---------------|----------------|
| Clear (day) | Gentle heat shimmer (rising warm blobs) | None | rgba(255,230,180) at 2-5% alpha |
| Clear (night) | Twinkling stars | None | rgba(200,200,255) at 20-60% alpha |
| Rain | Angled rain streaks | rgba(20,20,40,0.3) | rgba(200,180,150) at 6-12% alpha |
| Thunderstorm | Heavy rain + lightning flashes | rgba(10,10,20,0.4) | rgba(180,160,200) at 6-15% alpha |
| Fog/Mist | Slow-drifting radial gradient clouds | rgba(40,40,60,0.25) | rgba(230,190,170) at 5-7% alpha |
| Drizzle | Light angled rain (fewer, slower) | rgba(20,20,40,0.15) | rgba(200,180,150) at 4-8% alpha |
| Snow | Slow falling dots with drift | rgba(20,20,40,0.2) | rgba(220,220,240) at 10-20% alpha |
| Clouds | Very slow drifting cloud shapes | rgba(20,20,40,0.15) | rgba(200,200,220) at 3-5% alpha |
| Default/Unknown | Heat shimmer (same as clear day) | None | rgba(255,230,180) at 2-5% alpha |

### OpenWeatherMap Condition Mapping

Map the `weather[0].main` field from the API response:
- "Clear" -> Clear (day/night based on sun position)
- "Rain" -> Rain
- "Thunderstorm" -> Thunderstorm
- "Fog", "Mist", "Haze" -> Fog
- "Drizzle" -> Drizzle
- "Snow" -> Snow
- "Clouds" -> Clouds
- Anything else -> Default (heat shimmer)

### Lightning

Random interval: 2-7 seconds between flashes. Flash is a full-canvas fill that decays exponentially (multiply alpha by 0.85 each frame). Flash color tinted warm (rgba(220,180,180)) during sunset, cool (rgba(200,200,255)) at night.

### Data Source

OpenWeatherMap free tier API (Current Weather endpoint). Fetch on page load, refresh every 10 minutes. Coordinates: Baton Rouge (30.4515, -91.1871).

### API Key Handling

The API key is embedded in client-side JavaScript. This is acceptable because:
- It is a free-tier key with no billing implications
- OpenWeatherMap free tier has a 1000 calls/day limit which provides natural abuse protection
- The key can be rotated easily if abused

The key is stored as a constant in `js/hero/weather.js`.

### Caching

Weather responses cached in `localStorage` with a 10-minute TTL key (`hero-weather-cache`). Multiple page loads within the TTL window reuse the cached response without making a new API call. This prevents burst traffic from consuming the daily rate limit.

### Fallback

If API call fails or returns an error, default to clear weather (heat shimmer or stars depending on time of day). No error shown to user.

## Feature 5: Weather Badge

Tiny informational badge in the top-right corner.

### Content

- Weather emoji icon
- Temperature (Fahrenheit)
- Condition + humidity percentage

### Emoji Mapping

| Condition | Emoji |
|-----------|-------|
| Clear (day) | sun |
| Clear (night) | moon |
| Rain | rain cloud |
| Thunderstorm | storm |
| Fog/Mist/Haze | fog |
| Drizzle | rain |
| Snow | snow cloud |
| Clouds | cloud |

### Styling

- Background: rgba(26,26,46,0.8)
- Padding: 3px 7px
- Border-radius: 6px
- Font sizes: icon 0.75rem, temp 0.7rem, details 0.45rem

## Hero Content

Centered vertically in the hero, above all background layers.

```
Gina Martiny                    (hero-title, clamp 3-6rem)
SOFTWARE CRAFTSMAN . AGENTIC AI DEVELOPER  (tagline, coral, uppercase)
Chemical Engineer (UIC) . MBA (LSU)        (credentials, muted)
[Explore]                                  (hero-cta, existing button preserved)
```

Existing styles preserved. Text shadow on title for readability over dynamic backgrounds. The "Explore" CTA button remains with its current styling.

### Hero Section Height

`min-height: 100vh` preserved from current CSS. The arc meter at `bottom: 20px` positions relative to this container.

## Canvas Strategy

Traffic and weather use separate canvas elements (not shared) for independent opacity control during weather events. Both canvases are sized at `element.offsetWidth * 2` by `element.offsetHeight * 2` with `ctx.scale(2, 2)` for retina sharpness, capped at 2x regardless of actual device pixel ratio to limit GPU memory on 3x devices.

A single `requestAnimationFrame` loop in `hero.js` drives both canvases to avoid redundant frame scheduling. The loop is paused via `IntersectionObserver` when the hero scrolls out of view to save CPU.

## Orchestrator Lifecycle (hero.js)

1. **Init**: On DOMContentLoaded, read cached weather from localStorage
2. **Setup layers**: Create canvas elements, initialize SunCalc, build SVG road network
3. **First paint**: Set initial gradient, render static SVG, start animation loop
4. **Weather fetch**: Call OpenWeatherMap API (or use cache), update weather state
5. **Animation loop**: Single rAF loop updates gradient phase (every 60s check), traffic particles, weather particles, daylight meter
6. **Visibility**: IntersectionObserver pauses/resumes rAF when hero enters/exits viewport
7. **Resize**: Debounced resize handler re-sizes canvases

## Responsive Behavior

- Mobile (<768px): Road labels hidden, particle counts reduced 50%, weather badge slightly larger for touch, arc meter scales to 120px wide
- Tablet (768-1024px): Full features, particle counts reduced 30%
- Desktop (>1024px): Full features, full particle counts

## Performance

- Single requestAnimationFrame loop for all animations
- Canvas at 2x DPR (capped, not 3x)
- Particle budgets per device tier (see table above)
- IntersectionObserver pauses animation when hero not visible
- SunCalc runs client-side (no API latency for gradient)
- Weather API called once on load, cached in localStorage, refreshed every 10 minutes
- No continuous API polling for traffic (Phase 1)

## Dependencies

- **SunCalc** (~2KB): Vendored at `js/vendor/suncalc.min.js`
- **OpenWeatherMap API**: Free tier, 1000 calls/day, CORS supported for browser requests
- No build tools, no npm, no bundler — plain script tags

## File Structure

```
js/
  vendor/
    suncalc.min.js   — vendored SunCalc library
  hero/
    hero.js           — orchestrator, lifecycle, single rAF loop
    gradient.js       — sunrise/sunset gradient management + phase crossfade
    daylight-meter.js — SVG arc meter creation and updates
    traffic.js        — traffic particle system (init, draw, weather interaction)
    weather.js        — weather API, caching, particle effects, badge
    roads.js          — SVG road path data + labels for BR metro
css/
  hero.css            — hero-specific styles (layers, positioning, badge, responsive)
```

## Out of Scope

- Visitor distance feature (removed during design)
- Traffic legend / location label (removed for cleanliness)
- Real-time traffic API integration (Phase 2)
- ClojureScript conversion (separate epic)
