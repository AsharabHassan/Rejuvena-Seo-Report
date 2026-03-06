# SEO Action Plan: Rejuvena Laser & Aesthetics Clinic

**Website:** https://rejuvena.co.uk/
**Current Score:** 50/100
**Target Score:** 75/100 (3-month target) | 85/100 (6-month target)
**Date:** 2026-03-06

---

## CRITICAL Priority (Fix Immediately - Blocks Indexing or Causes Penalties)

### C1. Fix NAP Inconsistencies
**Impact:** Local rankings, Google Business Profile trust
**Current Problem:**
- Business name varies: "Aesthetic" vs "Aesthetics" across site and schema
- Schema markup missing address (52 Thor Dr, Bedford MK41 0WP) and phone (01234 958891)
- Opening hours mismatch: page shows Mon-Fri 10am-8pm, Sat-Sun 10am-5pm; schema shows Mon-Sun 9am-5pm

**Action:**
1. Decide on canonical business name and use it consistently everywhere
2. Update Organization schema to include `address`, `telephone`, and `geo` coordinates
3. Correct opening hours in schema to match actual hours
4. Verify Google Business Profile matches exactly

### C2. Fix Multiple H1 Tags on Homepage
**Impact:** Keyword targeting, search engine understanding
**Current:** 4 H1 tags on homepage
**Action:**
1. Keep ONE H1: "Laser Hair Removal & Aesthetics Experts in Bedford" (best keyword target)
2. Convert remaining H1s to H2s
3. Use sentence case, not ALL CAPS (improves readability and perceived quality)
4. Apply same heading audit across all pages (anti-wrinkle page also has duplicate H1)

### C3. Fix `/book_appintment/` URL Typo
**Impact:** User trust, crawl equity, professionalism
**Action:**
1. Create new page at `/book-appointment/` (correct spelling, hyphens not underscores)
2. Set up 301 redirect from `/book_appintment/` to `/book-appointment/`
3. Update all internal links site-wide
4. Update sitemap

### C4. Add Missing Alt Text to All Images
**Impact:** Accessibility (legal requirement under UK Equality Act), image search rankings
**Action:**
1. Audit every image on the site
2. Add descriptive alt text to all images, prioritizing:
   - Before/after galleries: "Before and after [treatment name] at Rejuvena Clinic Bedford"
   - Service images: Describe the treatment being shown
   - Product images: Include product name and brand
   - Team photos: "Dr Nosina, Medical Director at Rejuvena Clinic" etc.
3. Never use "image of" or "photo of" - just describe the content

### C5. Remove Non-Indexable Pages from Sitemap
**Impact:** Crawl budget waste, index quality signals
**Action:**
1. Remove `/cart/`, `/checkout/`, `/my-account/` from sitemap (add noindex)
2. Remove `/slider-test/` (delete page or noindex)
3. Remove `elementor-hf-sitemap.xml` entirely (header/footer templates are not pages)
4. Remove or redirect `/book_appintment/` after creating corrected URL

---

## HIGH Priority (Fix Within 1 Week - Significantly Impacts Rankings)

### H1. Upgrade Schema Markup
**Impact:** Rich results eligibility, SERP visibility, AI search citations
**Actions:**
1. Change `HealthAndBeautyBusiness` to `MedicalBusiness` (more accurate for doctor-led clinic)
2. Add complete `LocalBusiness` properties: address, geo, phone, priceRange, areaServed
3. Add `Physician` schema for Dr. Nosina with:
   - `medicalSpecialty`: Dermatology
   - `credential`: MBBS, MRCGP, etc.
   - `memberOf`: GMC
   - `identifier`: 6072251
4. Add `FAQPage` schema to all service pages with FAQ sections (laser hair removal, anti-wrinkle, dermal fillers - at least 3 pages ready)
5. Add `AggregateRating` schema: 4.9 rating, 129 reviews
6. Add `Service` schema to each service page
7. Add `Product` schema with pricing to WooCommerce products
8. Add `sameAs` links to social profiles

### H2. Fix Meta Descriptions
**Impact:** Click-through rates from SERPs
**Actions:**
1. **Contact page:** Change from "Call Us: 01234 958891" to "Contact Rejuvena Clinic Bedford for a free consultation. Call 01234 958891 or book online. 52 Thor Dr, Bedford MK41 0WP. Open 7 days."
2. **About page:** Capitalize "Rejuvena" properly
3. **Homepage:** Add unique selling point and CTA
4. Ensure all 61 pages have unique, compelling meta descriptions (150-160 chars)

### H3. Fix Heading Hierarchy Across Site
**Impact:** Content structure, accessibility, search engine understanding
**Actions:**
1. Convert ALL CAPS headings to sentence case across entire site
2. Ensure each page has exactly one H1
3. Follow proper hierarchy: H1 > H2 > H3 (no skipping levels)
4. Make headings descriptive and keyword-relevant

### H4. Add Pricing Information
**Impact:** User experience, conversion rate, "helpful content" signal, competitive advantage
**Actions:**
1. Add "from" pricing to each service page (e.g., "Laser Hair Removal from £50 per session")
2. Create a dedicated `/price-list/` page (already linked in nav)
3. Add `priceRange` to schema markup
4. If exact pricing isn't possible, provide price ranges or "starting from" figures

### H5. Create Location Landing Pages
**Impact:** Local search visibility for surrounding areas
**Actions:**
1. Create pages targeting nearby areas:
   - `/laser-hair-removal-bedford/`
   - `/aesthetics-clinic-milton-keynes/`
   - `/botox-bedford/`
   - `/dermal-fillers-bedfordshire/`
2. Each page should have unique content (not copy-paste with city name swapped)
3. Include local landmarks, directions, travel time

### H6. Attribute Content to Dr. Nosina
**Impact:** E-E-A-T for YMYL medical content
**Actions:**
1. Change blog post author from "Rejuvena Admin" to "Dr. P Nosina, MBBS, MRCGP"
2. Create author bio box with credentials, photo, and GMC link
3. Add `Person` schema with medical credentials to blog posts
4. Add "Medically reviewed by Dr. Nosina" badges to all treatment pages

---

## MEDIUM Priority (Fix Within 1 Month - Optimization Opportunity)

### M1. Content Expansion Strategy
**Impact:** Topical authority, long-tail keyword coverage
**Actions:**
1. **Blog target:** Publish 2-4 posts per month to reach 30+ posts within 6 months
2. **Priority blog topics:**
   - "How much does laser hair removal cost in Bedford?" (pricing query)
   - "Best anti-wrinkle treatments for [age group]"
   - "Profhilo vs Dermal Fillers: Which is right for you?"
   - "What to expect at your first aesthetics consultation"
   - "Is Morpheus 8 worth it? An honest review"
   - "Laser hair removal for dark skin: what you need to know"
   - "How to choose an aesthetics clinic in Bedford"
3. **Concern-based content hub:** Expand the 5 concern pages into comprehensive guides
4. **Treatment comparison pages:** Create vs-style content for related treatments
5. **Aftercare guides:** Detailed post-treatment content for each service

### M2. Internal Linking Optimization
**Impact:** Crawl efficiency, page authority distribution, user navigation
**Actions:**
1. Add "Related Treatments" section to every service page (3-4 related services)
2. Add contextual links within blog post body text to service pages
3. Cross-link blog posts to each other
4. Link concern pages to relevant treatment pages with clear CTAs
5. Add visible breadcrumb navigation (schema exists but breadcrumbs not visible)
6. Create a treatment comparison matrix page linking to all services

### M3. Fix URL Structure Issues
**Impact:** User experience, crawl efficiency
**Actions:**
1. Move `/cool-laser/` to `/service/cool-laser/` (or keep as category page)
2. Move `/morpheus-8-burst/` to `/service/morpheus-8-burst/`
3. Move `/1-2-1-make-up-lessons-with-lana/` to `/service/makeup-lessons/`
4. Fix `/formatm-skin-tightening/` to `/forma-skin-tightening/`
5. Fix `/lumeccatm-ipl/` to `/lumecca-ipl/`
6. Set up 301 redirects for all old URLs

### M4. Performance Optimization
**Impact:** Core Web Vitals, user experience, rankings
**Actions:**
1. **Quick wins:**
   - Enable browser caching headers
   - Compress images and serve in WebP format
   - Add width/height attributes to all images
   - Defer non-critical JavaScript loading
2. **Medium effort:**
   - Replace Slider Revolution with lightweight CSS slider or static hero
   - Limit WooCommerce scripts to shop pages only (use `wp_dequeue_script`)
   - Lazy load below-fold images properly
   - Inline critical CSS
3. **Longer term:**
   - Consider replacing Elementor with lighter theme or generating static HTML
   - Implement server-side caching plugin
   - Consider CDN setup

### M5. Image Optimization
**Impact:** Page speed, image search traffic, accessibility
**Actions:**
1. Convert all images to WebP format (with fallback)
2. Implement responsive images with `srcset`
3. Properly size images (avoid CSS scaling of oversized images)
4. Rename image files descriptively (e.g., `laser-hair-removal-before-after-bedford.webp` instead of `WhatsApp-Image-2023-07-21.jpg`)
5. Convert logo to SVG format
6. Implement proper lazy loading with native `loading="lazy"` attribute

### M6. Fix Blog Issues
**Impact:** Content quality, E-E-A-T, user experience
**Actions:**
1. Remove "No posts found / Coming Soon!!!" message from blog page
2. Add visible publication dates to all posts
3. Add category/tag taxonomy and navigation
4. Add related posts widget at bottom of each post
5. Add social sharing buttons
6. Add estimated reading time

### M7. Add Google Map to Contact Page
**Impact:** Local SEO signals, user experience
**Actions:**
1. Remove CSS that hides map section
2. Embed Google Maps with business location marked
3. Add directions information
4. Add parking information

---

## LOW Priority (Backlog - Nice to Have)

### L1. AI Search Readiness
**Actions:**
1. Create `llms.txt` file describing the business for AI crawlers
2. Add concise, factual "definition paragraphs" at the top of each service page
3. Include statistics and research citations in blog posts
4. Structure FAQ answers as direct, quotable statements
5. Consider allowing/blocking specific AI crawlers in robots.txt based on strategy

### L2. Social Media Integration
**Actions:**
1. Add social media links to footer (Instagram, Facebook, TikTok)
2. Add Open Graph meta tags for social sharing
3. Add Twitter Card meta tags
4. Implement social proof widgets

### L3. Video Content Strategy
**Actions:**
1. Create treatment explanation videos with Dr. Nosina
2. Film before/after transformation videos
3. Add video schema markup
4. Host on YouTube and embed on service pages (dual benefit)

### L4. Review Strategy
**Actions:**
1. Implement first-party review collection system
2. Display Google reviews on site with proper schema
3. Add review CTAs to post-treatment emails
4. Respond to all Google reviews (positive and negative)

### L5. WooCommerce Product SEO
**Actions:**
1. Add unique product descriptions (not manufacturer copy)
2. Add Product schema with pricing
3. Optimize product images and alt text
4. Add "Frequently bought together" recommendations
5. Add customer reviews to product pages

### L6. Standardize Title Tag Format
**Actions:**
1. Choose consistent format: `[Page Title] | Rejuvena Clinic Bedford`
2. Apply across all pages
3. Include primary keyword and location where natural

---

## Implementation Timeline

### Week 1 (Immediate)
- [ ] C1: Fix NAP inconsistencies
- [ ] C2: Fix multiple H1 tags
- [ ] C3: Fix book appointment URL typo
- [ ] C4: Start alt text audit (prioritize service pages)
- [ ] C5: Clean up sitemap
- [ ] H2: Fix meta descriptions

### Week 2
- [ ] H1: Upgrade schema markup (LocalBusiness, FAQPage, AggregateRating)
- [ ] H3: Fix heading hierarchy site-wide
- [ ] H6: Update blog author attribution
- [ ] C4: Complete alt text audit

### Week 3-4
- [ ] H4: Add pricing information
- [ ] H5: Create first 2 location landing pages
- [ ] M6: Fix blog issues
- [ ] M7: Add Google Map

### Month 2
- [ ] M1: Begin content expansion (4-8 new blog posts)
- [ ] M2: Internal linking optimization
- [ ] M3: Fix URL structure issues
- [ ] M4: Performance optimization (quick wins)

### Month 3
- [ ] M4: Performance optimization (medium effort)
- [ ] M5: Image optimization
- [ ] M1: Continue content expansion
- [ ] L1-L6: Begin low priority items

---

## Expected Impact

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| SEO Health Score | 50/100 | 75/100 | 85/100 |
| Indexed Pages | ~70 | ~90 | ~120+ |
| Blog Posts | 9 | 20 | 35+ |
| Schema Types Active | 4 | 10+ | 12+ |
| Pages with Alt Text | ~20% | 100% | 100% |
| FAQ Rich Results | 0 | 3-5 | 10+ |
| Local Pack Visibility | Low | Medium | High |

---

## Monitoring Checklist

- [ ] Set up Google Search Console property (verify via Site Kit)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Track keyword rankings for top 20 target keywords
- [ ] Monitor Google Business Profile insights weekly
- [ ] Check crawl errors monthly
- [ ] Review schema validation via Rich Results Test after changes
- [ ] Track organic traffic growth monthly via GA4
