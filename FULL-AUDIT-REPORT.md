# Full SEO Audit Report: Rejuvena Laser & Aesthetics Clinic

**Website:** https://rejuvena.co.uk/
**Business Type:** Medical Aesthetics Clinic (Doctor-Led)
**Location:** 52 Thor Dr, Bedford MK41 0WP, UK
**CMS:** WordPress + Elementor
**SEO Plugin:** Rank Math
**Date:** 2026-03-06

---

## Executive Summary

### Overall SEO Health Score: 52/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 48/100 | 25% | 12.0 |
| Content Quality | 62/100 | 25% | 15.5 |
| On-Page SEO | 50/100 | 20% | 10.0 |
| Schema / Structured Data | 40/100 | 10% | 4.0 |
| Performance (CWV) | 45/100 | 10% | 4.5 |
| Images | 35/100 | 5% | 1.75 |
| AI Search Readiness | 42/100 | 5% | 2.1 |
| **TOTAL** | | | **49.85 ~ 50** |

### Top 5 Critical Issues
1. **Multiple H1 tags on homepage** (4 H1s) - confuses search engines about primary topic
2. **NAP inconsistency** - Opening hours differ between visible content (Mon-Fri 10am-8pm, Sat-Sun 10am-5pm) and schema markup (Mon-Sun 9am-5pm)
3. **URL typo:** `/book_appintment/` should be `/book-appointment/` - unprofessional and affects crawl equity
4. **Missing alt text** on majority of images across all pages - accessibility and SEO gap
5. **No pricing visible** on any service page - users bounce to competitors; Google may deprioritize for lacking helpful content

### Top 5 Quick Wins
1. Fix the `/book_appintment/` typo URL with 301 redirect to `/book-appointment/`
2. Add alt text to all images (especially before/after galleries)
3. Reconcile opening hours between schema and displayed content
4. Reduce homepage to single H1 tag
5. Add AggregateRating schema (4.9/5 from 129 Google reviews)

---

## 1. Technical SEO (Score: 48/100)

### 1.1 Crawlability

**robots.txt** - Generally well-configured:
```
User-agent: *
Disallow: /wp-content/uploads/wc-logs/
Disallow: /wp-content/uploads/woocommerce_transient_files/
Disallow: /wp-content/uploads/woocommerce_uploads/
Disallow: /*?add-to-cart=
Disallow: /*?*add-to-cart=
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Sitemap: https://rejuvena.co.uk/sitemap_index.xml
```

**Issues:**
- No rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot) - missing opportunity to control AI training access
- No crawl-delay directive (not critical but worth considering)

### 1.2 XML Sitemaps

**Sitemap Index:** 4 child sitemaps (Rank Math generated)

| Sitemap | URLs | Last Modified |
|---------|------|---------------|
| post-sitemap.xml | 9 posts | 2025-09-12 |
| page-sitemap.xml | 61 pages | 2026-02-18 |
| product-sitemap.xml | 54 products | 2024-09-11 |
| elementor-hf-sitemap.xml | Unknown | 2026-02-18 |

**Issues:**
- **elementor-hf-sitemap.xml** includes header/footer template URLs - these should NOT be in sitemap (not real pages)
- **cart, checkout, my-account pages** included in page sitemap - these should be excluded (noindex pages)
- `/slider-test/` page in sitemap - test page should be removed
- `/book_appintment/` (typo URL) in sitemap
- Product pages not updated since Sept 2024 (stale content signal)
- Only 9 blog posts total - very thin blog for a medical clinic

### 1.3 Indexability

**Issues:**
- No evidence of canonical tags explicitly set on service pages (relying on WordPress defaults)
- WooCommerce pages (cart, checkout, my-account) may be indexable
- `/slider-test/` page should be noindexed or removed
- Potential duplicate content between `/service/hair-loss/` (concern page) and `/service/hair-loss-treatment/` (service page)

### 1.4 URL Structure

**Good:**
- Clean permalink structure: `/service/[service-name]/`
- Consistent use of trailing slashes
- Lowercase URLs

**Issues:**
- **`/book_appintment/`** - typo in URL (missing 'o', extra 'p')
- **`/formatm-skin-tightening/`** - likely should be `/forma-skin-tightening/` (trademark symbol issue)
- **`/lumeccatm-ipl/`** - trademark "tm" in URL is not user-friendly
- **`/1-2-1-make-up-lessons-with-lana/`** - not under /service/ prefix, inconsistent structure
- `/cool-laser/` and `/morpheus-8-burst/` are top-level instead of under /service/
- `/aesthetics/` as a category page exists alongside individual service pages - potential keyword cannibalization

### 1.5 Security

**Good:**
- HTTPS enforced across the site
- GDPR compliance pages present (privacy policy, cookie policy, data rectification, etc.)
- reCAPTCHA on forms

**To Verify:**
- Security headers (X-Frame-Options, Content-Security-Policy, X-Content-Type-Options)
- HTTP to HTTPS redirect chain length

### 1.6 Mobile Optimization

**Good:**
- Elementor generates responsive layouts
- Mobile-friendly navigation structure

**Concerns:**
- Heavy page weight from Elementor + Slider Revolution + WooCommerce + GSAP
- Multiple third-party scripts may slow mobile rendering

### 1.7 Core Web Vitals Risks

**High Risk Factors:**
- **Elementor** - known for heavy DOM size and excessive CSS/JS
- **Slider Revolution** - render-blocking JavaScript, large assets
- **WooCommerce** - loaded site-wide even if only used for products
- **GSAP animation library** - additional JS overhead
- **Google Tag Manager + Google Analytics + reCAPTCHA** - third-party script bloat
- Before/after image galleries without lazy loading indicators
- No evidence of image optimization (WebP/AVIF format usage)

### 1.8 JavaScript Rendering

**Concerns:**
- Elementor relies heavily on JavaScript for layout rendering
- Slider Revolution content may not be crawlable by search engines
- GSAP animations could affect CLS (Cumulative Layout Shift)

---

## 2. Content Quality (Score: 62/100)

### 2.1 E-E-A-T Assessment (Your Money Your Life - Medical Content)

**Experience - MODERATE:**
- Before/after galleries demonstrate real results
- Blog posts show practical treatment knowledge
- Missing: patient testimonial content beyond star ratings, case studies, video content

**Expertise - GOOD:**
- Dr. P Nosina: MBBS, MRCGP, DRCOG, DFSRH, Diploma in Dermatology, Level 7 Diploma in Cosmetic Injectables
- GMC Registration displayed (6072251)
- Lana Nosina: BABTAC, CIBTAC, Level 4 laser/IPL qualifications

**Authoritativeness - MODERATE:**
- "Doctor-led" clinic positioning is strong
- Brand partnerships with Lynton, ZO Skin Health, Mesoestetic
- 4.9/5 rating from 129 Google reviews
- Missing: industry awards, publication credits, media mentions, professional body memberships prominently displayed

**Trustworthiness - MODERATE:**
- GDPR compliance fully implemented
- Professional qualifications listed
- Missing: CQC registration (if applicable), insurance details, complaints procedure, medical disclaimers on treatment pages

### 2.2 Content Depth by Page Type

| Page Type | Avg Word Count | Assessment |
|-----------|---------------|------------|
| Homepage | ~800 words | Thin - too focused on CTAs, lacks educational content |
| Service Pages (top) | 2,000-2,800 | Good depth (laser hair removal, dermal fillers) |
| Service Pages (lower) | ~800-1,200 | Moderate - some feel template-like |
| Blog Posts | ~800-1,200 | Adequate but sparse (only 9 posts) |
| About Page | ~1,500 | Good E-E-A-T content |
| Contact Page | ~200 | Minimal - meta description is just phone number |
| Product Pages | Unknown | Likely thin WooCommerce defaults |

### 2.3 Content Gaps

**Missing Content Types:**
- No pricing/treatment cost guides (major gap - users search "laser hair removal cost Bedford")
- No video content visible
- No patient journey/case study content
- No treatment comparison guides (e.g., "Profhilo vs Dermal Fillers")
- No "conditions we treat" hub page
- No area-specific landing pages (Bedford, Bedfordshire, Milton Keynes, etc.)
- No aftercare guide hub
- No FAQ hub page
- Only 9 blog posts - competitors likely have 50-100+

### 2.4 Blog Assessment

**Posts:** 9 total (very low for a medical clinic site)
**Topics Covered:**
1. Pigmentation treatment options
2. PRP for hair loss
3. Anti-wrinkle injection FAQs
4. Rosacea treatment
5. Non-surgical jawline tightening
6. Acne treatment (location-specific)
7. Lip fillers guide
8. Laser hair removal preparation
9. Laser hair removal permanence

**Issues:**
- Blog page shows "No posts found / Coming Soon!!!" message alongside posts - unprofessional
- No author bio boxes on posts (E-E-A-T signal missing)
- Posts attributed to "Rejuvena Admin" - should be attributed to Dr. Nosina for YMYL credibility
- No publication dates visible to users
- No content categories/tags organized
- No internal linking strategy between related posts and service pages

---

## 3. On-Page SEO (Score: 50/100)

### 3.1 Title Tags

| Page | Title | Length | Issues |
|------|-------|--------|--------|
| Homepage | "Bedford Laser & Aesthetics Clinic \| Advanced Skin Treatments" | 58 chars | OK but doesn't include brand name "Rejuvena" |
| About | "About Us - Rejuvena Laser & Aesthetic Clinic" | 46 chars | Good |
| Laser Hair Removal | "Laser Hair Removal Bedford \| Painless Treatment" | 49 chars | Good - includes location |
| Anti-Wrinkle | "Botox & Antiwrinkle Injections Bedford \| Non-Surgical" | 54 chars | Good |
| Dermal Fillers | "Dermal Fillers Bedford \| Rejuvena Laser & Aesthetic Clinic" | 58 chars | Good |
| Contact | "Contact Us - Rejuvena Laser & Aesthetic Clinic" | 47 chars | Good |

**Issues:**
- Homepage title lacks brand name "Rejuvena"
- Inconsistent title format: some use "|", others use "-"
- "Antiwrinkle" should be "Anti-Wrinkle" (spelling)

### 3.2 Meta Descriptions

| Page | Description | Issues |
|------|-------------|--------|
| Homepage | "Rejuvena Laser & Aesthetics Clinic is based in Bedford, providing advanced skin treatments to help boost confidence at affordable prices" | OK but generic |
| About | "Welcome to the rejuvena clinic..." | Lowercase "rejuvena" - should be capitalized |
| Contact | "Call Us: 01234 958891" | Too short, wasted opportunity |
| Laser Hair Removal | Truncated in data | Needs verification |

**Issues:**
- Contact page meta description is just a phone number (should describe services, location, booking)
- Inconsistent quality across pages
- About page has lowercase brand name
- No compelling CTAs in meta descriptions

### 3.3 Heading Structure

**Homepage - CRITICAL ISSUES:**
- **4 H1 tags** (should be exactly 1)
  - "LASER HAIR REMOVAL & AESTHETICS EXPERTS IN BEDFORD"
  - "DOCTOR LED LASER & AESTHETIC CLINIC"
  - "WE DON'T JUST SELL TREATMENTS, WE OFFER SOLUTIONS TO YOUR SKIN CONCERNS"
  - "SERVICES WE OFFER"
- ALL CAPS headings throughout (poor readability, appears aggressive)
- Heading hierarchy not semantic (jumps from H1 to H3 in places)

**Service Pages:**
- Generally better structure with single H1
- Anti-wrinkle page has H1 appearing twice
- Good use of H2s for content sections
- H3s used appropriately for sub-sections

### 3.4 Internal Linking

**Good:**
- Main navigation covers all service categories
- Service pages link to booking page
- Blog posts link to related services

**Issues:**
- No breadcrumb navigation visible on pages (though BreadcrumbList schema exists)
- No "related treatments" section on service pages
- No contextual internal links within body content
- Blog posts don't cross-link to each other
- No hub-and-spoke content structure
- Concern pages (acne, hair loss, etc.) don't link well to treatment pages

---

## 4. Schema & Structured Data (Score: 40/100)

### 4.1 Current Implementation

**Present:**
- `Organization` + `HealthAndBeautyBusiness` (homepage)
- `WebSite` with search action
- `Article` schema on pages
- `Person` schema ("Rejuvena Admin")
- `BreadcrumbList` on service pages
- `WebPage` schema

**Issues with Current Schema:**
- `HealthAndBeautyBusiness` is too generic - should use `MedicalBusiness` or `Physician` for a doctor-led clinic
- `Person` schema shows "Rejuvena Admin" instead of Dr. P Nosina with credentials
- `Article` schema on homepage is incorrect - homepage is not an article
- Opening hours in schema (Mon-Sun 09:00-17:00) don't match displayed hours (Mon-Fri 10am-8pm, Sat-Sun 10am-5pm)
- No `@id` references for entity linking between schemas

### 4.2 Missing Schema (High Impact)

| Schema Type | Where | Impact |
|-------------|-------|--------|
| `MedicalBusiness` | Homepage/About | Better business type representation for medical clinic |
| `Physician` | About page | Dr. Nosina's credentials |
| `Service` | Each service page | Rich results for individual treatments |
| `FAQPage` | Service pages with FAQs | FAQ rich results in SERPs |
| `AggregateRating` | Homepage | Display 4.9/5 stars from 129 reviews in SERPs |
| `Review` | Homepage/service pages | Individual review markup |
| `Product` | Product pages | Price, availability rich results |
| `MedicalProcedure` | Treatment pages | Specific medical procedure markup |
| `LocalBusiness` with `geo` | Contact page | Map/location rich results |
| `HowTo` | Treatment process sections | Step-by-step rich results |
| `BlogPosting` | Blog posts | Proper blog schema (vs generic Article) |

### 4.3 Schema Validation Concerns
- Organization schema lists both `HealthAndBeautyBusiness` and `Organization` types - should be nested properly
- Missing `address`, `telephone`, `geo` in Organization schema
- No `sameAs` links to social media profiles
- No `priceRange` property

---

## 5. Performance / Core Web Vitals (Score: 45/100)

### 5.1 Risk Assessment (Based on Technology Stack)

**High-Risk Performance Factors:**
- **Elementor Pro** - generates excessive DOM nodes, inline CSS, and JavaScript
- **Slider Revolution** - heavy JavaScript plugin, render-blocking
- **WooCommerce** - loads cart/checkout scripts site-wide
- **GSAP** - additional animation JavaScript
- **jQuery** - legacy dependency
- **Google Tag Manager** - container loading delay
- **reCAPTCHA** - loads Google scripts on every page
- **Multiple Google fonts likely loaded**
- **Before/after image galleries** - potentially unoptimized

**Estimated Impact:**
- **LCP (Largest Contentful Paint):** POOR - heavy hero sections with sliders
- **INP (Interaction to Next Paint):** MODERATE - JavaScript-heavy interactions
- **CLS (Cumulative Layout Shift):** MODERATE-POOR - slider content, lazy-loaded images without dimensions

### 5.2 Recommendations
- Implement critical CSS inlining
- Defer non-critical JavaScript
- Replace Slider Revolution with lightweight alternative
- Limit WooCommerce script loading to shop pages only
- Implement proper image lazy loading with width/height attributes
- Consider server-side caching (WP Super Cache or similar)
- Serve images in WebP/AVIF format
- Minimize Elementor frontend CSS/JS

---

## 6. Images (Score: 35/100)

### 6.1 Alt Text

**Critical Issue:** Majority of images across all audited pages lack descriptive alt text.

- Before/after gallery images: No alt text
- Service images: Minimal or no alt text
- Brand logos: Unknown alt text status
- Product images: Likely auto-generated from product titles (WooCommerce default)

### 6.2 Image Optimization

**Issues:**
- No evidence of WebP/AVIF format usage
- Image files appear to use original upload names (e.g., "WhatsApp-Image-2023-07-21")
- No responsive image srcset detected in analysis
- Before/after galleries may load full-size images
- Logo file: `rejuvena-logo.png` (should be SVG or optimized WebP)

### 6.3 Image SEO Opportunities
- 54 product images (ZO Skin Health, Mesoestetic, Lynton) - need proper alt text
- Before/after galleries are powerful E-E-A-T signals but need proper markup
- Missing Open Graph images for social sharing optimization

---

## 7. AI Search Readiness (Score: 42/100)

### 7.1 AI Crawler Access
- **robots.txt** has no rules for GPTBot, ClaudeBot, or PerplexityBot
- By default, all AI crawlers can access the site (good for visibility)
- No `llms.txt` file detected

### 7.2 Citability Assessment

**Strengths:**
- Clear, factual claims about treatments
- FAQ sections provide concise, quotable answers
- Doctor credentials are specific and verifiable (GMC number)
- Location-specific content ("Bedford")

**Weaknesses:**
- Content lacks structured data that aids AI extraction
- No definitive statistics or research citations
- Blog posts lack authoritative sourcing
- No original research or unique data
- Content tone is promotional rather than informational
- Missing comparison/vs content that AI often references

### 7.3 AI Overview Optimization
- No optimized passages for featured snippet / AI Overview inclusion
- Headings are ALL CAPS (harder for AI to parse naturally)
- FAQ answers could be more concise and directly quotable
- Missing "what is [treatment]" definition paragraphs that AI loves to cite

---

## 8. Detailed Page Inventory

### 8.1 Pages in Sitemap (61 pages)

**Core Pages (6):**
- Homepage, About, Contact, Blog, Products, Finance

**Service Pages (30+):**
- Anti-wrinkle injections, Dermal fillers, Fat dissolving, HIFU, Microneedling, Polynucleotides, Profhilo, PRP, Skin analysis, Cool Laser variants (4), Diamond Glow, Chemical peels (5), MoveoGlo, ZO Facials, Forma skin tightening, Hair loss treatment, Laser hair removal, Lumecca IPL, Morpheus 8 Burst, Skin lesion removal, Thread vein removal, Cryotherapy, Dermalux LED

**Concern Pages (5):**
- Acne & Rosacea, Acne/surgical scars, Ageing/wrinkles/saggy skin, Hair loss, Under-eye concerns

**E-Commerce Pages (3 - should be noindexed):**
- Cart, Checkout, My Account

**Privacy Pages (9):**
- Privacy center, Cookie policy, Privacy policy, Data rectification, Forget me, Contact DPO, Contact DMCA, Imprint, Disclaimer, Request data

**Other:**
- Slider test page (should be removed)
- Book appointment (typo URL)
- 1-2-1 makeup lessons
- Aesthetics (category page)
- Service archive page

### 8.2 Blog Posts (9)
All published 2024-2025. Topics align with services but volume is very low.

### 8.3 Products (54)
Primarily ZO Skin Health range, plus Mesoestetic and Lynton products. All last updated September 2024.

---

## 9. Local SEO Assessment

### 9.1 NAP Consistency

| Element | Displayed | Schema | Match? |
|---------|-----------|--------|--------|
| Name | Rejuvena Laser & Aesthetic Clinic | Rejuvena Laser & Aesthetics Clinic | NO - "Aesthetic" vs "Aesthetics" |
| Address | 52 Thor Dr, Bedford MK41 0WP | Not in schema | NO |
| Phone | 01234 958891 | Not in schema | NO |
| Hours (Weekday) | 10:00am-8:00pm | 09:00-17:00 | NO |
| Hours (Weekend) | 10:00am-5:00pm | 09:00-17:00 | NO |

**Critical:** NAP (Name, Address, Phone) data is inconsistent between on-page content and schema markup. The schema is missing address and phone entirely.

### 9.2 Google Business Profile Signals
- 129 Google reviews with 4.9/5 average - excellent
- No embedded Google Map on contact page (CSS hides map section)
- Google Site Kit installed (good for Search Console/Analytics integration)

### 9.3 Local Content Gaps
- No area-specific landing pages (Bedford, Bedfordshire, Milton Keynes, Luton, etc.)
- No directions/parking information
- No local events or community involvement content
- Blog lacks location-specific optimization beyond occasional "Bedford" mentions

---

## 10. Competitive Positioning

### 10.1 Unique Selling Points (Good)
- Doctor-led with named GMC-registered physician
- Claims to be "only clinic in Bedford" with Optima's Max laser
- Treats all skin types (Alexandrite + Nd:YAG combination)
- Strong brand partnerships (Lynton, ZO Skin Health)

### 10.2 Competitive Weaknesses
- No visible pricing (competitors who show pricing may capture more traffic)
- Limited blog content (9 posts vs likely 50-100+ for established competitors)
- No video content
- No comparison pages ("Rejuvena vs [competitor]" or "best aesthetics clinic Bedford")
- No "results guarantee" or money-back policy visible
- Missing CQC/regulatory registration display (if applicable)

---

## Appendix: Technology Stack

| Technology | Purpose | SEO Impact |
|-----------|---------|------------|
| WordPress 6.x | CMS | Neutral |
| Elementor Pro | Page Builder | Negative (performance) |
| Rank Math | SEO Plugin | Positive |
| WooCommerce | E-Commerce | Negative (bloat on non-shop pages) |
| Slider Revolution | Sliders | Negative (performance) |
| Contact Form 7 | Forms | Neutral |
| Google Site Kit | Analytics | Positive |
| Google Tag Manager | Tag Management | Neutral |
| Google Analytics 4 | Analytics | Neutral |
| GSAP | Animations | Negative (performance) |
| jQuery | JS Library | Negative (legacy) |
| reCAPTCHA | Spam Protection | Slight negative (performance) |
| GDPR Plugin | Compliance | Positive (trust) |
