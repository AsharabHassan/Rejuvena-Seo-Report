import { LayoutTemplate, Youtube, Globe, TrendingUp, Target, Clock } from 'lucide-react';

export const geoScores = {
    overall: {
        score: 28,
        label: "GEO Readiness",
        status: "Poor",
        description: "The site is poorly optimized for AI search engines. Content is promotional rather than informational, lacks source citations, and has minimal brand presence across AI-favored platforms."
    },
    categories: [
        { name: 'Technical Accessibility', score: 45, weight: "20%" },
        { name: 'Structural Readability', score: 40, weight: "20%" },
        { name: 'Citability', score: 30, weight: "25%" },
        { name: 'Multi-Modal Content', score: 25, weight: "15%" },
        { name: 'Authority & Brand Signals', score: 22, weight: "20%" }
    ]
};

export const aiPlatforms = [
    {
        name: "Google AI Overviews",
        score: 30,
        status: "Unlikely to be cited for most queries",
        icon: Globe,
        misses: [
            "Service pages rank for branded terms but lack informational depth",
            "FAQ answers are promotional, not factual",
            "No comparison tables or data-driven content found",
            "ALL CAPS headings reduce natural language processing quality"
        ]
    },
    {
        name: "ChatGPT Web Search",
        score: 15,
        status: "Very unlikely to be cited",
        icon: LayoutTemplate,
        misses: [
            "Zero Wikipedia or Reddit presence (ChatGPT heavily favors these)",
            "Content lacks authoritative, third-party-validated signals",
            "Blog posts attributed to 'Rejuvena Admin' (no named medical expert)",
            "Missing YouTube and News/Media mentions"
        ]
    },
    {
        name: "Perplexity",
        score: 20,
        status: "Unlikely to be cited for non-branded queries",
        icon: Target,
        misses: [
            "Perplexity favors Reddit (46.7%) and Wikipedia — Rejuvena is absent",
            "Community validation signals are entirely missing",
            "No original research or unique data to differentiate from competitors"
        ]
    }
];

export const brandMentions = [
    { name: "YouTube", presence: "None", signal: "0/10", priority: "CRITICAL", icon: Youtube },
    { name: "Reddit", presence: "None", signal: "0/10", priority: "HIGH" },
    { name: "LinkedIn (Company)", presence: "Not found", signal: "0/10", priority: "HIGH" },
    { name: "Wikipedia", presence: "None", signal: "0/10", priority: "MEDIUM" },
    { name: "Instagram", presence: "Active (@rejuvena_aestheticclinic)", signal: "6/10", priority: "Maintain" },
    { name: "Google Business", presence: "Active (129 reviews, 4.9)", signal: "8/10", priority: "Maintain" }
];

export const geoActionPlan = [
    {
        phase: "Week 1 (Quick Wins)",
        icon: Clock,
        tasks: [
            "Create and deploy llms.txt file",
            "Rewrite top 5 service page openings with factual definitions",
            "Change blog author to 'Dr. Nosina' with full credentials",
            "Add explicit AI crawler rules to robots.txt"
        ]
    },
    {
        phase: "Week 2-4 (Medium Effort)",
        icon: TrendingUp,
        tasks: [
            "Create LinkedIn company page",
            "Set up YouTube channel and film first 3 videos",
            "Add source citations to service pages (BAD, NHS, PubMed)",
            "Implement FAQPage & MedicalBusiness schema",
            "Add comparison tables to service pages"
        ]
    },
    {
        phase: "Month 2-3 (High Impact)",
        icon: Target,
        tasks: [
            "Publish 5-10 YouTube videos with Dr. Nosina",
            "Begin expert Reddit participation in r/SkincareAddiction",
            "Rewrite all 30+ service pages following new AI-friendly template",
            "Implement MedicalProcedure schema on all treatment pages"
        ]
    }
];
