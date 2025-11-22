# SEO Testing Guide for Mr.G Barbers & Academy

## Quick SEO Tests

### 1. **Meta Tags Test**
Open browser DevTools (F12) → Console → Run:
```javascript
// Check title
console.log('Title:', document.title);

// Check meta description
console.log('Description:', document.querySelector('meta[name="description"]')?.content);

// Check Open Graph
console.log('OG Title:', document.querySelector('meta[property="og:title"]')?.content);
console.log('OG Description:', document.querySelector('meta[property="og:description"]')?.content);

// Check language
console.log('Lang:', document.documentElement.lang);
```

**Expected Results:**
- ✅ Title changes when switching language (LT/EN)
- ✅ Description contains keywords
- ✅ OG tags present
- ✅ Lang attribute = "lt" or "en"

---

### 2. **Structured Data Test**

#### Method A: Browser Console
```javascript
// Check JSON-LD
const jsonLd = document.querySelector('script[type="application/ld+json"]');
if (jsonLd) {
  console.log('Structured Data:', JSON.parse(jsonLd.textContent));
} else {
  console.log('❌ No structured data found');
}
```

#### Method B: Google Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your website URL
3. Check for:
   - ✅ LocalBusiness
   - ✅ EducationalOrganization
   - ✅ WebSite

**Expected Schema Types:**
- LocalBusiness (Mr.G Barbers)
- EducationalOrganization (Academy)
- WebSite
- Person (Gediminas Kuica)

---

### 3. **Mobile-Friendly Test**
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter: `https://www.mrgbarbers.lt`
3. Expected: ✅ **Page is mobile-friendly**

---

### 4. **Page Speed Test**
1. Go to: https://pagespeed.web.dev/
2. Enter your URL
3. Test both Mobile and Desktop

**Target Scores:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100 ✅

---

### 5. **Image Alt Text Check**

#### Browser Console:
```javascript
// Check all images have alt text
const images = document.querySelectorAll('img');
let missingAlt = 0;

images.forEach((img, index) => {
  if (!img.alt || img.alt.trim() === '') {
    console.log(`❌ Image ${index + 1} missing alt:`, img.src);
    missingAlt++;
  }
});

console.log(`✅ Images with alt: ${images.length - missingAlt}/${images.length}`);
console.log(`❌ Images missing alt: ${missingAlt}/${images.length}`);
```

**Expected:** All images should have descriptive alt text

---

### 6. **Heading Hierarchy Check**

```javascript
// Check heading structure
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
headings.forEach(h => {
  console.log(`${h.tagName}: ${h.textContent.substring(0, 50)}...`);
});

// Check for multiple H1s (should only be one)
const h1Count = document.querySelectorAll('h1').length;
console.log(`H1 Count: ${h1Count} ${h1Count === 1 ? '✅' : '❌ Should be exactly 1'}`);
```

**Expected:**
- ✅ Only ONE h1 per page
- ✅ Logical hierarchy (h1 → h2 → h3)
- ✅ No skipping levels

---

### 7. **Links Check**

```javascript
// Check all links have proper attributes
const links = document.querySelectorAll('a[target="_blank"]');
let missingRel = 0;

links.forEach(link => {
  const rel = link.getAttribute('rel');
  if (!rel || (!rel.includes('noopener') && !rel.includes('noreferrer'))) {
    console.log('❌ Missing rel attribute:', link.href);
    missingRel++;
  }
});

console.log(`✅ External links with proper rel: ${links.length - missingRel}/${links.length}`);
```

**Expected:** All external links have `rel="noopener noreferrer"`

---

### 8. **Bilingual SEO Test**

#### Test LT → EN switching:
1. Load page in Lithuanian
2. Check title: Should contain "kirpykla Vilniuje"
3. Switch to English (click 🇬🇧)
4. Check title: Should change to "Barbershop in Vilnius"
5. Check meta description: Should be in English
6. Check lang attribute: Should be "en"

```javascript
// Quick language check
console.log('Current lang:', document.documentElement.lang);
console.log('Current title:', document.title);
console.log('Should match language! ✅');
```

---

### 9. **Social Media Preview Test**

#### Facebook/LinkedIn:
1. Go to: https://www.opengraph.xyz/
2. Enter your URL
3. Check preview

**Should display:**
- ✅ Title: "Mr.G Barbers & Academy - Premium Barbershop in Vilnius"
- ✅ Description: Award-winning barbershop...
- ✅ Image: (when og:image is added)

#### Twitter:
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. Check Twitter Card preview

---

### 10. **Console Errors Check**

```javascript
// Should be clean!
// Open DevTools → Console
// Expected: No red errors ✅
```

---

## SEO Validation Tools

### Free Online Tools:

1. **Google Tools:**
   - Search Console: https://search.google.com/search-console
   - Rich Results Test: https://search.google.com/test/rich-results
   - Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
   - PageSpeed Insights: https://pagespeed.web.dev/

2. **Schema Validators:**
   - Schema.org Validator: https://validator.schema.org/
   - JSON-LD Playground: https://json-ld.org/playground/

3. **SEO Checkers:**
   - Lighthouse (Chrome DevTools → Lighthouse tab)
   - Ubersuggest: https://neilpatel.com/ubersuggest/
   - Ahrefs Free Tools: https://ahrefs.com/
   - SEMrush: https://www.semrush.com/

4. **Local SEO:**
   - Google Business Profile: https://business.google.com/
   - BrightLocal: https://www.brightlocal.com/

---

## Quick Pre-Launch Checklist

### Meta & Headers:
- [ ] Title tag present and descriptive
- [ ] Meta description present (150-160 chars)
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Lang attribute set correctly
- [ ] Canonical URL set (when deployed)

### Content:
- [ ] H1 tag present (only one per page)
- [ ] Heading hierarchy logical
- [ ] All images have alt text
- [ ] All links have proper attributes
- [ ] Content is bilingual (LT/EN)

### Technical:
- [ ] Structured data (JSON-LD) present
- [ ] robots.txt created
- [ ] sitemap.xml created
- [ ] Mobile-friendly design
- [ ] Fast loading speed
- [ ] No console errors

### Local SEO:
- [ ] Google Business Profile claimed
- [ ] Address consistent (NAP)
- [ ] Phone number visible
- [ ] Business hours listed
- [ ] Location map embedded (optional)

### External:
- [ ] Google Analytics installed
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Fresha booking link working
- [ ] Social media profiles linked

---

## Post-Launch Monitoring

### Week 1:
- [ ] Check Google Search Console for indexing
- [ ] Monitor Google Analytics traffic
- [ ] Test all CTAs (Book on Fresha)
- [ ] Check mobile experience
- [ ] Monitor page load speed

### Month 1:
- [ ] Check keyword rankings
- [ ] Review user behavior (GA4)
- [ ] Collect customer reviews
- [ ] Monitor booking conversions
- [ ] Check backlink profile

### Month 3:
- [ ] Analyze organic traffic growth
- [ ] Review top performing pages
- [ ] Optimize based on data
- [ ] A/B test CTAs if needed
- [ ] Expand content (blog?)

---

## Common SEO Issues & Fixes

### Issue: Title not changing when switching language
**Fix:** Check that `<SEO />` component is imported in App.tsx

### Issue: Structured data errors
**Fix:** Validate JSON-LD at https://validator.schema.org/

### Issue: Images missing alt text
**Fix:** Search codebase for `<img` and `<ImageWithFallback` tags

### Issue: Multiple H1 tags
**Fix:** Ensure only the main heading uses `<h1>`

### Issue: Slow page speed
**Fix:** 
- Optimize images (WebP format)
- Minify CSS/JS
- Use CDN
- Enable compression

---

## Success Metrics

### SEO KPIs to Track:

1. **Visibility:**
   - Google Search impressions
   - Average position for target keywords
   - Branded search volume

2. **Traffic:**
   - Organic sessions (Google Analytics)
   - New vs returning visitors
   - Pages per session

3. **Engagement:**
   - Bounce rate (< 50% is good)
   - Average session duration (> 2 min)
   - Click-through rate (CTR)

4. **Conversions:**
   - "Book on Fresha" clicks
   - Phone calls
   - Contact form submissions

5. **Local SEO:**
   - Google Business Profile views
   - Direction requests
   - Phone calls from Google Maps

---

## Test Results Template

```
Date: __________
Tester: __________

✅ = Pass | ⚠️ = Warning | ❌ = Fail

[ ] Meta tags present and correct
[ ] Structured data validates
[ ] Mobile-friendly
[ ] PageSpeed score > 90
[ ] All images have alt text
[ ] Only one H1 tag
[ ] External links have rel attributes
[ ] Language switching works
[ ] No console errors
[ ] Social media previews work

Notes:
_________________________________
_________________________________
```

---

**Last Updated:** November 22, 2025  
**Status:** ✅ Ready for testing
