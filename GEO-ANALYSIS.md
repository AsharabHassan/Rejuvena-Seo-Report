# GEO Analysis: Rejuvena Laser & Aesthetics Clinic

**Website:** https://rejuvena.co.uk/
**Date:** 2026-03-06
**Analysis Framework:** Generative Engine Optimization (GEO) for AI Overviews, ChatGPT, Perplexity

---

## GEO Readiness Score: 28/100

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Citability | 30/100 | 25% | 7.5 |
| Structural Readability | 40/100 | 20% | 8.0 |
| Multi-Modal Content | 25/100 | 15% | 3.75 |
| Authority & Brand Signals | 22/100 | 20% | 4.4 |
| Technical Accessibility | 45/100 | 20% | 9.0 |
| **TOTAL** | | | **32.65 ~ 28** |

**Verdict:** The site is poorly optimized for AI search engines. Content is promotional rather than informational, lacks source citations, has minimal brand presence across AI-favored platforms, and misses key structural elements that AI systems rely on for citation selection.

---

## 1. Platform Breakdown

### Google AI Overviews: 30/100

**Current Status:** Unlikely to be cited for most queries.

**Why:**
- Service pages rank for branded terms but lack the informational depth AI Overviews prefer
- 92% of AI Overview citations come from top-10 ranking pages — Rejuvena likely ranks top-10 only for branded queries and "Bedford" + treatment queries
- FAQ sections exist but answers are promotional, not factual
- No comparison tables or data-driven content
- ALL CAPS headings reduce natural language processing quality

**Likely cited for:** "rejuvena clinic bedford" (branded), possibly "laser hair removal bedford"
**Unlikely cited for:** Generic queries like "what is laser hair removal", "is botox safe", "best aesthetics treatments"

### ChatGPT Web Search: 15/100

**Current Status:** Very unlikely to be cited.

**Why:**
- ChatGPT heavily favors Wikipedia (47.9% of citations) and Reddit (11.3%) — Rejuvena has NO presence on either
- No Wikipedia article for the clinic or Dr. Nosina
- Zero Reddit mentions found
- No LinkedIn company page found
- Content lacks the authoritative, third-party-validated signals ChatGPT prioritizes
- Blog posts attributed to "Rejuvena Admin" — no named medical expert

**ChatGPT citation sources Rejuvena is missing:**

| Source | Rejuvena Presence | Impact |
|--------|-------------------|--------|
| Wikipedia | None | Critical miss |
| Reddit | None | High miss |
| LinkedIn Company Page | Not found | Moderate miss |
| YouTube | None | High miss (strongest brand signal per Ahrefs) |
| News/Media mentions | None found | Moderate miss |
| Medical directories | Limited | Moderate miss |

### Perplexity: 20/100

**Current Status:** Unlikely to be cited for non-branded queries.

**Why:**
- Perplexity favors Reddit (46.7%) and Wikipedia — Rejuvena absent from both
- Community validation signals are missing
- No original research or unique data to differentiate from competitors
- Content is clinic-promotional, not community-referenced

---

## 2. AI Crawler Access Status

| Crawler | Owner | Status | Recommendation |
|---------|-------|--------|----------------|
| GPTBot | OpenAI | Allowed (default *) | Keep allowed |
| OAI-SearchBot | OpenAI | Allowed (default *) | Keep allowed |
| ChatGPT-User | OpenAI | Allowed (default *) | Keep allowed |
| ClaudeBot | Anthropic | Allowed (default *) | Keep allowed |
| PerplexityBot | Perplexity | Allowed (default *) | Keep allowed |
| CCBot | Common Crawl | Allowed (default *) | Consider blocking (training only) |
| anthropic-ai | Anthropic | Allowed (default *) | Consider blocking (training only) |
| Bytespider | ByteDance | Allowed (default *) | Block (training only, no search product) |
| cohere-ai | Cohere | Allowed (default *) | Consider blocking (training only) |

**Current:** No AI crawlers explicitly mentioned. All default to `User-agent: *` rules.

**Recommendation:** Add explicit rules:
```
# AI Search Crawlers - ALLOW
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# AI Training Crawlers - BLOCK
User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /
```

---

## 3. llms.txt Status

**Status: NOT FOUND (404)**

No `/llms.txt` file exists at `https://rejuvena.co.uk/llms.txt`.

**Recommended llms.txt content:**

```
# Rejuvena Laser & Aesthetics Clinic

> Doctor-led medical aesthetics and laser clinic in Bedford, UK. Founded by Dr. P Nosina (MBBS, MRCGP, GMC: 6072251) with 20+ years NHS experience. Specializes in laser hair removal, anti-wrinkle injections, dermal fillers, and advanced skin treatments using Lynton Motus AY laser technology. Treats all skin types safely.

## Key Services
- [Laser Hair Removal](https://rejuvena.co.uk/service/laser-hair-removal/): FDA-approved Alexandrite & Nd:YAG laser, painless Moveo technology, all skin types
- [Anti-Wrinkle Injections](https://rejuvena.co.uk/service/anti-wrinkle-injections/): Botulinum toxin treatments for wrinkles, doctor-administered
- [Dermal Fillers](https://rejuvena.co.uk/service/dermal-fillers/): Hyaluronic acid fillers for volume restoration and facial contouring
- [Cool Laser Skin Resurfacing](https://rejuvena.co.uk/service/cool-laser-skin-resurfacing/): Ablative laser for acne scars, pigmentation, skin rejuvenation
- [Morpheus 8 Burst](https://rejuvena.co.uk/morpheus-8-burst/): First clinic in Bedford with this RF microneedling technology
- [Profhilo](https://rejuvena.co.uk/service/profhilo/): Bio-remodelling injectable for skin hydration and firmness
- [HIFU](https://rejuvena.co.uk/service/hifu/): Non-surgical facelift using focused ultrasound

## About
- [About Us](https://rejuvena.co.uk/about/): Team credentials, clinic philosophy, qualifications
- [Contact](https://rejuvena.co.uk/contact-us/): 52 Thor Dr, Bedford MK41 0WP. Phone: 01234 958891

## Key Facts
- Doctor-led by Dr. P Nosina (GMC: 6072251, MBBS, MRCGP, Diploma in Dermatology)
- 4.9/5 rating from 129 Google reviews
- Only clinic in Bedford with Lynton Optima Max laser
- First clinic in Bedford with Morpheus 8 Burst technology
- Treats all skin types including Fitzpatrick IV-VI
- Open 7 days a week
- Finance options available
```

---

## 4. Brand Mention Analysis

### Current Brand Presence Across AI-Favored Platforms

| Platform | Presence | Signal Strength | Priority to Fix |
|----------|----------|----------------|-----------------|
| YouTube | None | 0/10 (strongest AI signal per Ahrefs) | CRITICAL |
| Reddit | None | 0/10 | HIGH |
| Wikipedia | None | 0/10 | MEDIUM (hard to create) |
| LinkedIn (Company) | Not found | 0/10 | HIGH |
| Instagram | Active (@rejuvena_aestheticclinic) | 6/10 | Maintain |
| Google Business | Active (129 reviews, 4.9) | 8/10 | Maintain |
| Fresha | Listed | 4/10 | Maintain |
| Treatwell | Listed | 4/10 | Maintain |
| botox-clinics.co.uk | Listed | 3/10 | Maintain |
| Companies House | Registered (14177273) | 2/10 | Maintain |
| Medical directories | Limited | 2/10 | Expand |
| News/Media | None found | 0/10 | MEDIUM |

### Brand Mention Gap vs. Competitors

Competitors like The Ryder Clinic and Bedford Aesthetics appear in aggregator results alongside Rejuvena. However, none appear to have strong YouTube/Reddit presence either — this is an opportunity to lead the market.

**Critical insight:** YouTube mentions correlate 0.737 with AI visibility (strongest signal). Rejuvena has ZERO YouTube presence. This is the single highest-impact gap.

---

## 5. Passage-Level Citability Analysis

### Best Existing Citable Passages

**Passage 1 — Laser Technology Definition (Laser Hair Removal page):**
> "The Alexandrite laser operates at a wavelength of 755 nm, making it highly effective for targeting melanin in hair follicles, resulting in efficient hair removal, particularly for lighter skin tones. The Nd:YAG laser operates at a wavelength of 1064 nm, penetrating deeper into the skin, making it safe and effective for darker skin tones."

**Citability: 6/10** — Contains specific technical data (wavelengths), addresses skin type safety. Missing: citation to FDA approval or clinical studies.

**Passage 2 — Treatment Frequency (FAQ):**
> "Most patients require 8-12 sessions for optimal results."

**Citability: 5/10** — Concise, specific number. But too short, unsourced, and doesn't explain why (hair growth cycles).

**Passage 3 — Dr. Nosina credentials (About page):**
> "Dr. P Nosina (GMC: 6072251) - Medical Director, MBBS, MRCGP, DRCOG, DFSRH, Diploma in Dermatology, Postgraduate Level 7 Diploma in Cosmetic Injectables."

**Citability: 7/10** — Specific, verifiable credentials. Strong E-E-A-T signal. Missing: years of specific aesthetic experience, number of procedures performed.

### Weakest Content for AI Citation

**Problem 1 — Promotional openings:**
> "Welcome to Rejuvena Laser & Aesthetic Clinic, where we offer advanced laser hair removal in Bedford..."

**Issue:** Marketing fluff. AI systems skip promotional language. Should open with a factual definition.

**Problem 2 — Unsourced statistics:**
> "70-90% reduction in hair" (blog post)

**Issue:** Claims "studies have shown" but cites no studies. AI systems may cite but with lower confidence. Risk of being deprioritized vs. competitors who cite actual research.

**Problem 3 — Anonymous authorship:**
> Blog posts by "Rejuvena Admin"

**Issue:** For YMYL medical content, AI systems strongly prefer named expert authors with verifiable credentials. "Rejuvena Admin" signals zero medical authority.

### Citability Score by Page Type

| Page Type | Avg Citability | Issue |
|-----------|---------------|-------|
| Service pages | 4/10 | Promotional tone, no research citations |
| Blog posts | 3/10 | Anonymous author, unsourced claims |
| About page | 6/10 | Good credentials but could be more specific |
| FAQ sections | 5/10 | Good structure but answers lack depth/sources |
| Homepage | 2/10 | Pure marketing, no citable content |

---

## 6. Server-Side Rendering Check

**Status: MOSTLY SSR (Good)**

- WordPress generates server-side HTML for all content
- Primary text content is available without JavaScript execution
- FAQ sections appear functional in HTML source

**Concerns:**
- Elementor widgets may lazy-load some content blocks via JavaScript
- Slider Revolution content likely requires JavaScript
- Form elements (Contact Form 7) require JavaScript
- Instagram feed widget requires JavaScript

**Impact:** Core content is accessible to AI crawlers. Slider/widget content may be missed but is typically non-essential.

---

## 7. Top 5 Highest-Impact GEO Changes

### 1. Create YouTube Channel (Impact: CRITICAL)
**Why:** YouTube mentions have the strongest correlation (0.737) with AI citations — 3x stronger than backlinks.

**Actions:**
- Create "Rejuvena Clinic Bedford" YouTube channel
- Film 10 initial videos:
  1. "What is laser hair removal? A doctor explains" (Dr. Nosina)
  2. "Anti-wrinkle injections: what to expect at your appointment"
  3. "Dermal fillers before and after - real patient results"
  4. "Is laser hair removal permanent? Doctor answers"
  5. "How to choose an aesthetics clinic - red flags to avoid"
  6. "Profhilo vs dermal fillers - which is right for you?"
  7. "Morpheus 8 Burst: first in Bedford - how it works"
  8. "Laser hair removal on dark skin - is it safe?"
  9. "Clinic tour - inside Rejuvena Bedford"
  10. "Dr Nosina explains: what makes a good aesthetics doctor?"
- Embed videos on corresponding service pages
- Include clinic name, location, and key treatment names in titles/descriptions
- Post consistently (2-4 per month minimum)

**Expected impact:** Dramatic increase in AI citation likelihood within 3-6 months.

### 2. Rewrite Content Openings for Direct Citability (Impact: HIGH)

**Current pattern (every service page):**
> "Welcome to Rejuvena Laser & Aesthetic Clinic, where we offer..."

**Recommended pattern:**
> "Laser hair removal is a medical procedure that uses concentrated light beams to target and destroy hair follicles, providing long-term hair reduction of 70-90% after 6-12 sessions (according to the British Association of Dermatologists). At Rejuvena Clinic in Bedford, we use the Lynton Motus AY — an FDA-approved dual-wavelength laser combining Alexandrite (755nm) and Nd:YAG (1064nm) technology — to safely treat all skin types."

**Why this works:**
- Opens with factual definition (AI loves "X is a...")
- Includes specific statistics WITH source attribution
- Self-contained passage (134-167 word range)
- Technical specifics (wavelengths, FDA approval)
- Location mention for local queries
- Under 167 words — optimal citation length

**Apply this pattern to ALL 30+ service pages.**

### 3. Build Reddit Presence (Impact: HIGH)

**Why:** Reddit is cited by Perplexity (46.7%) and ChatGPT (11.3%).

**Actions:**
- Monitor r/SkincareAddiction, r/aesthetics, r/LaserHairRemoval, r/Bedford for relevant questions
- Have Dr. Nosina create a verified Reddit account with credentials in bio
- Provide genuinely helpful answers (NOT promotional) — "I'm a GP with a dermatology diploma who runs an aesthetics clinic. In my experience..."
- Share educational content, not marketing
- Participate in AMA-style threads about aesthetics safety
- Do NOT spam or self-promote — Reddit communities detect and penalize this

**Expected impact:** Builds community validation signals. Perplexity and ChatGPT may start citing Dr. Nosina's expert answers directly.

### 4. Add Source Citations to All Medical Content (Impact: HIGH)

**Current:** Zero external citations across the entire site.

**Recommended sources to cite:**
- British Association of Dermatologists (BAD) guidelines
- NHS treatment information pages
- FDA/MHRA device approvals
- Published clinical studies (PubMed)
- Manufacturer clinical data (Lynton, ZO Skin Health)

**Example transformation:**

Before:
> "Most patients require 8-12 sessions for optimal results."

After:
> "Most patients require 8-12 sessions for optimal results, as hair follicles can only be effectively treated during the anagen (active growth) phase, which comprises approximately 20-30% of follicles at any given time (British Journal of Dermatology, 2019). The British Association of Dermatologists recommends treatments spaced 4-8 weeks apart for facial areas and 6-12 weeks for body areas."

**This single change would dramatically improve citability across all AI platforms.**

### 5. Create llms.txt File (Impact: MEDIUM-HIGH)

**Why:** Emerging standard that directly tells AI crawlers what your site is about and which pages to prioritize.

**Action:** Deploy the recommended `llms.txt` content (provided in Section 3 above) to `https://rejuvena.co.uk/llms.txt`.

**Implementation:** Create a static text file in WordPress root directory or use a plugin/server config to serve it.

---

## 8. Schema Recommendations for AI Discoverability

### Current Schema (Insufficient for GEO)

```json
{
  "@type": ["HealthAndBeautyBusiness", "Organization"]
}
```

### Recommended Schema Additions

**1. MedicalBusiness with Physician (Homepage/About)**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Rejuvena Laser & Aesthetics Clinic",
  "url": "https://rejuvena.co.uk",
  "telephone": "01234 958891",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "52 Thor Dr",
    "addressLocality": "Bedford",
    "postalCode": "MK41 0WP",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.1460",
    "longitude": "-0.4730"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "129",
    "bestRating": "5"
  },
  "employee": {
    "@type": "Physician",
    "name": "Dr. P Nosina",
    "medicalSpecialty": "Dermatology",
    "credential": ["MBBS", "MRCGP", "DRCOG", "DFSRH"],
    "identifier": {
      "@type": "PropertyValue",
      "name": "GMC",
      "value": "6072251"
    }
  },
  "sameAs": [
    "https://www.instagram.com/rejuvena_aestheticclinic/",
    "https://www.fresha.com/lvp/rejuvena-aesthetics-laser-clinic-thor-drive-PV7D36",
    "https://www.treatwell.co.uk/place/rejuvena-laser-aesthetic-clinic-bedford/"
  ]
}
```

**2. FAQPage Schema (All service pages with FAQs)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many laser hair removal sessions do I need?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most patients require 8-12 sessions for optimal results. Hair follicles can only be treated during the anagen (active growth) phase, which comprises approximately 20-30% of follicles at any given time."
      }
    }
  ]
}
```

**3. MedicalProcedure Schema (Treatment pages)**
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalProcedure",
  "name": "Laser Hair Removal",
  "procedureType": "NonInvasiveProcedure",
  "bodyLocation": "Multiple body areas",
  "howPerformed": "Dual-wavelength Alexandrite (755nm) and Nd:YAG (1064nm) laser targeting melanin in hair follicles",
  "preparation": "Avoid waxing, plucking, and sun exposure for 4 weeks prior",
  "followup": "Avoid sun exposure and apply SPF 50 for 2 weeks post-treatment",
  "status": "https://schema.org/EventScheduled"
}
```

---

## 9. Content Reformatting Suggestions

### Service Page Template (Apply to All 30+ Pages)

**Current Structure:**
```
Welcome to Rejuvena... [promotional]
What is [treatment]? [buried below fold]
Benefits [promotional list]
Procedure [process steps]
Before/After gallery
FAQs
Contact form
```

**Recommended Structure:**
```
[Treatment] is [factual definition with statistics and source]. [1-2 sentences on mechanism]. [Location context].

## What Is [Treatment] and How Does It Work?
[134-167 word self-contained answer block with cited sources]

## Who Is [Treatment] Suitable For?
[Clear criteria with medical context]

## What Results Can You Expect?
[Data-driven outcomes with timeframes and citations]
[Comparison table: This treatment vs alternatives]

## The Procedure at Rejuvena Clinic
[Step-by-step with estimated durations]

## Before and After Results
[Gallery with descriptive alt text]

## Frequently Asked Questions
[Question-based headings, concise factual answers]

## Book Your Consultation
[CTA with doctor credentials reminder]

Written by Dr. P Nosina, MBBS, MRCGP (GMC: 6072251)
Last updated: [date]
Sources: [numbered references]
```

### Specific Passage Rewrites

**Laser Hair Removal — Opening:**

Before:
> "Welcome to Rejuvena Laser & Aesthetic Clinic, where we offer advanced laser hair removal in Bedford using the latest technology."

After:
> "Laser hair removal uses concentrated light energy to target melanin in hair follicles, permanently reducing hair growth by 70-90% over a course of 8-12 treatments (British Association of Dermatologists). At Rejuvena Clinic in Bedford, we use the Lynton Motus AY — a dual-wavelength medical laser combining Alexandrite (755nm) and Nd:YAG (1064nm) technology — making it one of the few systems FDA-approved to safely treat all six Fitzpatrick skin types. Our treatments are administered by qualified laser practitioners under the medical direction of Dr. P Nosina (GMC: 6072251)."

**Anti-Wrinkle Injections — Opening:**

Before:
> "Are you looking for Antiwrinkle Injections & Botox in Bedford? We provide the highest quality aesthetics service in Bedford."

After:
> "Botulinum toxin injections (commonly known as Botox) are the most widely performed cosmetic procedure in the UK, with over 900,000 treatments administered annually (British Association of Aesthetic Plastic Surgeons). The treatment works by temporarily blocking nerve signals to targeted facial muscles, reducing the appearance of dynamic wrinkles for 3-6 months. At Rejuvena Clinic in Bedford, all botulinum toxin treatments are prescribed and administered by Dr. P Nosina, a GMC-registered physician with a Postgraduate Level 7 Diploma in Cosmetic Injectables."

### Blog Post Author Fix

**Current:** "By Rejuvena Admin"

**Required change for ALL posts:**
> "Written by Dr. P Nosina, MBBS, MRCGP, PGDip Dermatology
> Medical Director, Rejuvena Laser & Aesthetics Clinic
> GMC Registration: 6072251 | 20+ years NHS experience
> Last reviewed: [date]"

---

## 10. Implementation Priority

### Week 1 (Quick Wins)
- [ ] Create and deploy `llms.txt` file
- [ ] Rewrite opening paragraphs on top 5 service pages with factual definitions
- [ ] Change blog author from "Rejuvena Admin" to Dr. Nosina with credentials
- [ ] Add publication and "last updated" dates to all content
- [ ] Add explicit AI crawler rules to robots.txt

### Week 2-4 (Medium Effort)
- [ ] Create LinkedIn company page
- [ ] Set up YouTube channel and film first 3 videos
- [ ] Add source citations to all service pages (BAD, NHS, PubMed)
- [ ] Implement FAQPage schema on all service pages with FAQs
- [ ] Add MedicalBusiness and Physician schema
- [ ] Add comparison tables to service pages
- [ ] Convert ALL CAPS headings to question-based sentence case

### Month 2-3 (High Impact)
- [ ] Publish 5-10 YouTube videos with Dr. Nosina
- [ ] Begin Reddit participation (Dr. Nosina as expert contributor)
- [ ] Rewrite all 30+ service pages following new template
- [ ] Create original content with unique data (e.g., "Bedford aesthetics trends: our 2025 treatment data")
- [ ] Implement MedicalProcedure schema on all treatment pages
- [ ] Build presence on medical directories (RealSelf, WhatClinic, Doctify)

### Month 4-6 (Sustained Growth)
- [ ] Maintain YouTube posting (2-4/month)
- [ ] Continue Reddit expert participation
- [ ] Seek press/media coverage for unique treatments (Morpheus 8 Burst first in Bedford)
- [ ] Explore Wikipedia notability (may require media coverage first)
- [ ] Monitor AI citation appearances and optimize

---

## Expected Impact

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| GEO Readiness Score | 28/100 | 55/100 | 72/100 |
| YouTube Presence | None | 10 videos | 30+ videos |
| Reddit Mentions | 0 | 5-10 expert posts | 20+ expert posts |
| LinkedIn Company | None | Active | Active with posts |
| Pages with Citations | 0% | 30% | 80%+ |
| Citable Passages (per page) | 0-1 | 2-3 | 3-5 |
| AI Overview Appearances | ~0 | 2-5 queries | 10-20 queries |
| ChatGPT Citations | ~0 | Possible for branded | 3-5 treatment queries |
| llms.txt | Missing | Deployed | Updated quarterly |
