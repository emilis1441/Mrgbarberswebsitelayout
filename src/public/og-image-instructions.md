# OG Image Instructions for Mr.G Barbers & Academy

## Purpose
The OG (Open Graph) image appears when someone shares your website on social media platforms like Facebook, LinkedIn, Instagram, or WhatsApp.

---

## Specifications

### Required Size:
- **Width:** 1200px
- **Height:** 630px
- **Aspect Ratio:** 1.91:1
- **Format:** JPG or PNG
- **File Size:** < 1MB (ideally < 500KB)
- **File Name:** `og-image.jpg`

### Design Elements to Include:

1. **Logo/Branding:**
   - "Mr.G Barbers & Academy" text/logo
   - Prominent and readable

2. **Visual:**
   - Photo of Gediminas Kuica (professional portrait)
   - Or barbershop interior/atmosphere
   - High-quality, sharp image

3. **Key Information:**
   - "Premium Barbershop in Vilnius"
   - "Est. 2020" (if applicable)
   - Optional: "Gediminas Kuica - Award-Winning Barber"

4. **Color Scheme:**
   - Use brand colors: #6A6F4E (khaki/olive), black, white, gold accents
   - Professional, premium look
   - Good contrast for readability

5. **Safe Zone:**
   - Keep important text/logo within center 1000x560px
   - Some platforms crop edges

---

## Design Template Structure

```
┌─────────────────────────────────────────────────────┐
│  1200px                                             │
│                                                     │
│  ┌─────────────────────────────────────────┐       │
│  │                                         │       │
│  │    Mr.G BARBERS & ACADEMY              │  630px
│  │                                         │       │
│  │    [Photo of Gediminas]                │       │
│  │                                         │       │
│  │    Premium Barbershop • Vilnius        │       │
│  │                                         │       │
│  └─────────────────────────────────────────┘       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Design Options

### Option 1: Portrait Focus
- Large professional photo of Gediminas
- Logo overlay in top corner
- Tagline at bottom
- Dark background with gold accents

### Option 2: Brand Focus
- Large "Mr.G" logo/typography
- Subtle background image (blurred barbershop)
- "Barbers & Academy" subtitle
- "Vilnius" location text

### Option 3: Action Shot
- Gediminas cutting hair (in action)
- Text overlay with semi-transparent dark box
- "Premium Barbering Since 2020"
- Strong visual impact

---

## Text Suggestions

### Primary Headline Options:
1. "Mr.G Barbers & Academy"
2. "Premium Barbershop in Vilnius"
3. "Award-Winning Master Barber"

### Secondary Text Options:
1. "Founded by Gediminas Kuica"
2. "Professional Grooming & Academy"
3. "Žalgirio g. 131, Vilnius"
4. "Book Your Appointment"

### Keep It Simple:
- Maximum 2-3 text elements
- Large, readable font (min 48px)
- High contrast
- Professional, not cluttered

---

## Tools to Create OG Image

### Free Tools:
1. **Canva** (recommended for beginners)
   - https://www.canva.com
   - Template: Social Media → Facebook Post
   - Resize to 1200x630px

2. **Figma** (if you have design skills)
   - Create 1200x630 frame
   - Export as JPG/PNG

3. **Photoshop/GIMP** (professional)
   - New document: 1200x630px, 72 DPI
   - RGB color mode

### Automated Tools:
- **Bannerbear:** https://www.bannerbear.com/
- **PlaceIt:** https://placeit.net/
- **Remove.bg:** For background removal (if needed)

---

## Steps to Implement

### 1. Design the Image
- Use one of the tools above
- Follow specifications (1200x630px)
- Include branding and key info
- Export as `og-image.jpg`

### 2. Add to Project
- Save file as: `/public/og-image.jpg`
- File should be in the `/public` folder

### 3. Update SEO Component
The `SEO.tsx` component already references the image:
```typescript
updateMetaTag("og:image", "https://www.mrgbarbers.lt/og-image.jpg", "property");
```

Once you add the file, it will automatically work!

### 4. Add Additional Meta Tags (Optional)
In `SEO.tsx`, you can add more image meta tags:
```typescript
updateMetaTag("og:image:width", "1200", "property");
updateMetaTag("og:image:height", "630", "property");
updateMetaTag("og:image:type", "image/jpeg", "property");
updateMetaTag("og:image:alt", "Mr.G Barbers & Academy - Premium Barbershop in Vilnius", "property");
```

---

## Testing Your OG Image

### 1. Facebook Debugger
- URL: https://developers.facebook.com/tools/debug/
- Enter your website URL
- Click "Scrape Again" if you update the image
- Preview how it looks on Facebook

### 2. LinkedIn Post Inspector
- URL: https://www.linkedin.com/post-inspector/
- Enter your URL
- See LinkedIn preview

### 3. Twitter Card Validator
- URL: https://cards-dev.twitter.com/validator
- Enter your URL
- Check Twitter preview

### 4. Open Graph Preview Tool
- URL: https://www.opengraph.xyz/
- Enter your URL
- See preview across multiple platforms

---

## Example URLs to Reference

### Good Examples of OG Images:
1. Professional barbershops with strong branding
2. Service businesses with founder photos
3. Local businesses with location emphasis

Look at competitors for inspiration:
- Other premium barbershops in Vilnius
- International barber brands
- Award-winning barbers' websites

---

## Quick Checklist

Before finalizing your OG image:
- [ ] Size is exactly 1200x630px
- [ ] File size < 1MB (< 500KB ideal)
- [ ] Text is readable on mobile preview
- [ ] Brand colors used correctly
- [ ] High-quality, sharp image
- [ ] Logo/brand name visible
- [ ] Safe zone respected (center content)
- [ ] Tested on Facebook Debugger
- [ ] File saved as `/public/og-image.jpg`
- [ ] Website tested with new image

---

## Alternative: Multiple OG Images

If you want different images for different sections:

```typescript
// In SEO.tsx, you could add logic for different pages
const ogImage = window.location.hash === '#academy' 
  ? 'https://www.mrgbarbers.lt/og-image-academy.jpg'
  : 'https://www.mrgbarbers.lt/og-image.jpg';
```

But for a single-page website, one strong OG image is sufficient!

---

## Brand Assets Checklist

Along with OG image, consider creating:
- [ ] Favicon set (16x16, 32x32, 180x180)
- [ ] Apple touch icon
- [ ] Twitter image (same as OG works)
- [ ] Email signature logo
- [ ] Print materials (business cards)

---

## Need Help?

If you need professional help designing the OG image:
1. Hire a graphic designer on Fiverr/Upwork
2. Use Canva Pro templates
3. Contact local design agencies in Vilnius
4. Ask a photographer for high-res photos first

**Budget:** €50-150 for professional OG image design

---

**Current Status:** ⚠️ Placeholder image URL in code  
**Action Required:** Create and upload `/public/og-image.jpg`  
**Priority:** High (important for social media sharing)

---

**Last Updated:** November 22, 2025
