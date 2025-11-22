# Headers for Mr.G Barbers & Academy
# Security and Performance Headers

/*
  # Security Headers
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  
  # Cache Control for static assets
  Cache-Control: public, max-age=31536000, immutable

# HTML files - no cache (always fresh)
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# Service Worker - no cache
/sw.js
  Cache-Control: no-cache, no-store, must-revalidate

# Images - long cache
/images/*
  Cache-Control: public, max-age=31536000, immutable

# Fonts - long cache
/fonts/*
  Cache-Control: public, max-age=31536000, immutable
