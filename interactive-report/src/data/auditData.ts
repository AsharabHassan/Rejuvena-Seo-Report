export const auditData = {
    client: "Rejuvena Laser & Aesthetics Clinic",
    website: "https://rejuvena.co.uk/",
    date: "2026-03-06",
    overallScore: 52,
    categories: [
        {
            name: "Content Quality",
            score: 62,
            weight: "25%",
            color: "#22bae0",
            icon: "FileText",
            details: {
                good: ["Before/after galleries demonstrate results", "Doctor-led positioning is strong (GMC 6072251)", "4.9/5 from 129 Google reviews"],
                bad: ["No pricing/treatment cost guides (major gap)", "Homepage content is thin (too focused on CTAs)", "Only 9 blog posts total", "No video content visible"],
                fix: "Create a pricing page and significantly expand blog content."
            }
        },
        {
            name: "On-Page SEO",
            score: 50,
            weight: "20%",
            color: "#e52c71",
            icon: "Search",
            details: {
                good: ["Clean permalink structure for service pages", "Title tags include location keywords (Bedford)"],
                bad: ["CRITICAL: 4 H1 tags on the homepage", "ALL CAPS headings reduce readability", "Contact page meta description is just a phone number", "No breadcrumb links visible"],
                fix: "Reduce Homepage to a single H1 tag and rewrite all meta tags."
            }
        },
        {
            name: "Technical SEO",
            score: 48,
            weight: "25%",
            color: "#d8d42d",
            icon: "Code2",
            details: {
                good: ["HTTPS enforced across the site", "robots.txt is well-configured", "GDPR compliance pages present"],
                bad: ["URL Typos: /book_appintment/, /formatm-skin-tightening/", "Sitemaps contain useless pages (cart/checkout/templates)", "Elementor HF sitemap issues"],
                fix: "Implement 301 redirects for broken/typo URLs and clean up XML Sitemaps."
            }
        },
        {
            name: "Performance",
            score: 45,
            weight: "10%",
            color: "#f87171",
            icon: "Zap",
            details: {
                good: ["Responsive mobile layouts via Elementor"],
                bad: ["Elementor Pro + Slider Revolution create massive DOM bloat", "WooCommerce cart scripts load site-wide", "Heavy unoptimized images"],
                fix: "Remove Slider Revolution, defer non-critical JS, cache dynamically pages."
            }
        },
        {
            name: "AI Readiness",
            score: 42,
            weight: "5%",
            color: "#a78bfa",
            icon: "Bot",
            details: {
                good: ["Clear factual claims", "Doctor credentials verifiable", "Allows AI crawling by default"],
                bad: ["No structured data to aid LLM extraction", "No statistics or citations", "Missing comparison formats (X vs Y)"],
                fix: "Restructure service pages with specific 'What is...' definitions for AI overviews."
            }
        },
        {
            name: "Schema",
            score: 40,
            weight: "10%",
            color: "#fb923c",
            icon: "Database",
            details: {
                good: ["Article schema on pages", "Basic WebSite schema present"],
                bad: ["Missing LocalBusiness/MedicalBusiness specifics", "Person schema points to 'Rejuvena Admin' instead of Doctor", "Schema hours differ from UI hours"],
                fix: "Add MedicalBusiness, Physician, Service, and AggregateRating schemas."
            }
        },
        {
            name: "Images",
            score: 35,
            weight: "5%",
            color: "#ef4444",
            icon: "Image",
            details: {
                good: [""],
                bad: ["Missing alt text on majority of images", "Before/After galleries lack descriptive alt text", "Images served in legacy formats (not WebP)"],
                fix: "Convert all images to WebP and systematically apply descriptive ALT attributes."
            }
        },
    ],
    topIssues: [
        "Multiple H1 tags on homepage (4 H1s) - confuses search engines",
        "NAP inconsistency - Opening hours differ between UI and schema",
        "URL typo: /book_appintment/ should be /book-appointment/",
        "Missing alt text on majority of images",
        "No pricing visible on any service page - users bounce to competitors"
    ],
    topWins: [
        "Fix the /book_appintment/ typo URL with 301 redirect",
        "Add alt text to all images (especially before/after galleries)",
        "Reconcile opening hours between schema and displayed content",
        "Reduce homepage to single H1 tag",
        "Add AggregateRating schema (4.9/5 from 129 Google reviews)"
    ]
};
