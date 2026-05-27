// ═══════════════════════════════════════════════════════════════
//  STROKESTACK — CONFIG FILE
//  All API keys and app settings live here.
//  Edit this file only. Never paste keys into chat or commit
//  this file to a public GitHub repo.
// ═══════════════════════════════════════════════════════════════

const SS_CONFIG = {

  // ── GOOGLE PLACES API ─────────────────────────────────────────
  // Get yours: console.cloud.google.com
  // Enable:    Places API + Maps JavaScript API
  // Restrict:  HTTP referrers → your domain (e.g. strokestack.golf/*)
  GOOGLE_KEY: 'YOUR_GOOGLE_KEY_HERE',

  // ── GOLF COURSE API ───────────────────────────────────────────
  // Get yours: golfcourseapi.com → free tier (500 req/month)
  // Used for:  Hole-by-hole scorecard data for any course worldwide
  GOLF_API_KEY: 'YOUR_GOLF_API_KEY_HERE',

  // ── VENMO / PAYPAL (future) ───────────────────────────────────
  // When ready to wire up auto-settlement
  VENMO_CLIENT_ID:  'YOUR_VENMO_CLIENT_ID_HERE',
  PAYPAL_CLIENT_ID: 'YOUR_PAYPAL_CLIENT_ID_HERE',

  // ── APP SETTINGS ──────────────────────────────────────────────
  APP_NAME:    'StrokeStack',
  APP_VERSION: '1.0.0',
  APP_URL:     'https://strokestack.golf', // update when live

  // GPS search radius in meters (default 48km = 30 miles)
  NEARBY_RADIUS_M: 48280,

  // Max players on free tier / pro tier
  MAX_PLAYERS_FREE: 4,
  MAX_PLAYERS_PRO:  8,
  MAX_PLAYERS_GROUP: 20,

};

// ── HOW TO USE ────────────────────────────────────────────────
// Every HTML file loads this script first:
//   <script src="config.js"></script>
// Then accesses keys like:
//   SS_CONFIG.GOOGLE_KEY
//   SS_CONFIG.GOLF_API_KEY
