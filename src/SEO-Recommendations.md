# SEO Optimization for Mr.G Barbers & Academy

## ✅ Implemented SEO Features

### 1. **Dynamic Meta Tags**
- Title tags optimized for both languages (LT/EN)
- Meta descriptions with keywords
- Language-specific meta keywords
- Automatic lang attribute switching

### 2. **Structured Data (JSON-LD)**
Implemented Schema.org markup for:
- **LocalBusiness** - Barbershop information
- **EducationalOrganization** - Academy information  
- **WebSite** - Website metadata
- **Person** - Gediminas Kuica founder profile

### 3. **Open Graph Tags**
- og:title, og:description, og:type
- og:url, og:locale, og:site_name
- Optimized for Facebook, LinkedIn sharing

### 4. **Twitter Card Tags**
- twitter:card (summary_large_image)
- twitter:title, twitter:description
- Ready for Twitter/X sharing

### 5. **Semantic HTML**
- Proper heading hierarchy (h1 → h2 → h3)
- Section elements with IDs for navigation
- Alt texts for images
- ARIA labels where needed

---

## 🚀 Additional SEO Recommendations

### 1. **Technical SEO**

#### A. Add Canonical URL
```html
<link rel="canonical" href="https://www.mrgbarbers.lt" />
```

#### B. Add Favicon Set
Create and add these files to the project:
- /favicon.ico (32x32)
- /favicon-16x16.png
- /favicon-32x32.png
- /apple-touch-icon.png (180x180)

```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

#### C. Add robots.txt
Create `/public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://www.mrgbarbers.lt/sitemap.xml
```

#### D. Create XML Sitemap
Create `/public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://www.mrgbarbers.lt/</loc>
    <lastmod>2025-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://www.mrgbarbers.lt/?lang=en"/>
    <xhtml:link rel="alternate" hreflang="lt" href="https://www.mrgbarbers.lt/?lang=lt"/>
  </url>
</urlset>
```

### 2. **Content SEO**

#### A. Keywords to Target
**Lithuanian:**
- kirpykla Vilniuje
- vyrų kirpimas Vilnius
- kirpėjas Vilnius
- premium kirpykla
- kirpėjų akademija Vilnius
- Gediminas Kuica

**English:**
- barber Vilnius
- barbershop Vilnius
- men's haircut Vilnius
- premium barbershop Lithuania
- barber academy Vilnius

#### B. Content Improvements
1. Add blog section for SEO content (optional):
   - "Top 5 Men's Haircut Trends in 2025"
   - "How to Choose the Right Barber"
   - "History of Barbering in Lithuania"

2. Add FAQ schema markup (already have FAQ component, add schema)

3. Create location page with Google Maps embed

### 3. **Local SEO**

#### A. Google Business Profile
- Claim and optimize Google Business Profile
- Add location: Žalgirio g. 131, Vilnius
- Add business hours
- Upload professional photos
- Collect and respond to reviews

#### B. Local Citations
Register on:
- Google Business Profile
- Facebook Business
- Yelp
- Lithuanian business directories
- TripAdvisor (if applicable)

#### C. NAP Consistency
Ensure Name, Address, Phone is identical across:
- Website
- Google Business
- Social media
- All directories

### 4. **Image Optimization**

#### Current Status:
✅ All images have alt text
✅ Using Unsplash with proper licensing

#### To Improve:
- [ ] Add OG image (1200x630px) for social sharing
- [ ] Compress images (WebP format)
- [ ] Add image title attributes
- [ ] Implement lazy loading (already done via ImageWithFallback)

#### Recommended OG Image:
Create `/public/og-image.jpg`:
- Size: 1200x630px
- Content: Mr.G Barbers logo + Gediminas photo + key text
- Update in SEO component: `"image": "https://www.mrgbarbers.lt/og-image.jpg"`

### 5. **Performance SEO**

#### A. Core Web Vitals
Monitor and optimize:
- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms
- **CLS** (Cumulative Layout Shift) - Target: < 0.1

#### B. Page Speed Optimization
- Minify CSS/JS (production build)
- Use CDN for assets
- Enable compression (Gzip/Brotli)
- Optimize font loading

### 6. **Social Media Integration**

#### A. Add Social Profiles to Schema
Already added:
- Instagram: @mrg.barbers
- Facebook: /mrgbarbers

#### B. Add Share Buttons (Optional)
Consider adding social share buttons for:
- Facebook
- Instagram
- LinkedIn
- WhatsApp

### 7. **Analytics & Tracking**

#### A. Google Analytics 4
Add GA4 tracking code to monitor:
- Page views
- User behavior
- Conversion tracking (Fresha bookings)
- Language preferences

#### B. Google Search Console
- Verify website ownership
- Submit sitemap
- Monitor search performance
- Track keyword rankings

#### C. Fresha Conversion Tracking
- Track "Book on Fresha" button clicks
- Use UTM parameters: `?utm_source=website&utm_medium=cta&utm_campaign=booking`

### 8. **Multilingual SEO**

#### Already Implemented:
✅ Dynamic language switching
✅ Lang attribute updates
✅ Translated meta tags
✅ Locale in Open Graph

#### To Improve:
- Add hreflang tags for language versions
- Consider separate URLs for languages:
  - `/` (Lithuanian - default)
  - `/en` (English)
- Or use subdomain: `en.mrgbarbers.lt`

### 9. **Link Building**

#### Internal Linking
✅ Already good - smooth scroll navigation

#### External Linking
Ideas for backlinks:
- Guest posts on grooming blogs
- Local business partnerships
- Press releases for awards
- Interviews in barbering magazines
- YouTube videos (if created)

### 10. **Mobile SEO**

✅ Already responsive design
✅ Mobile-friendly navigation

Consider:
- Add "Call Now" button for mobile
- Click-to-call phone number
- Mobile-optimized booking flow

---

## 📊 SEO Checklist

### Immediate Actions:
- [x] Meta tags implemented
- [x] Structured data added
- [x] Open Graph tags
- [x] Alt texts for images
- [ ] Add OG image (1200x630px)
- [ ] Create robots.txt
- [ ] Create sitemap.xml
- [ ] Add favicons

### Short-term (1-2 weeks):
- [ ] Claim Google Business Profile
- [ ] Setup Google Analytics 4
- [ ] Setup Google Search Console
- [ ] Submit sitemap to Google
- [ ] Optimize images (WebP format)
- [ ] Add canonical URLs

### Long-term (1-3 months):
- [ ] Build backlinks
- [ ] Create blog content
- [ ] Monitor Core Web Vitals
- [ ] Collect customer reviews
- [ ] Expand to local directories
- [ ] A/B test meta descriptions

---

## 🎯 Expected Results

### After 1 month:
- Indexed in Google
- Appearing for brand searches ("Mr.G Barbers")
- Google Business Profile active

### After 3 months:
- Ranking for local keywords
- Organic traffic growing
- Improved Google Maps visibility

### After 6 months:
- Top 3 for "kirpykla Vilnius"
- Top 5 for "barber Vilnius"
- Consistent booking traffic from organic search

---

## 📞 Contact Information to Update

In `SEO.tsx`, update these placeholders:
- `"telephone": "+370-xxx-xxxxx"` → Add real phone number
- `"latitude": "54.6872"` → Verify exact coordinates
- `"longitude": "25.2797"` → Verify exact coordinates
- Opening hours → Confirm schedule

---

## 🔗 Useful Tools

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Structured Data Validator**: https://validator.schema.org

---

**Last Updated**: November 22, 2025
**Status**: ✅ Core SEO implemented, ready for deployment
