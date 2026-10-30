import img1 from '@/images/img_1.jpg'
import img2 from '@/images/img_2.jpg'
import img3 from '@/images/img_3.jpg'
import img4 from '@/images/img_4.jpg'
import img5 from '@/images/img_5.jpg'
import img6 from '@/images/img_6.jpg'
import img7 from '@/images/img_7.jpg'
import img8 from '@/images/img_8.jpg'
import seoMarketingHero from '@/images/seo_marketing_services.jpg'

export const agencyImages = {
  analytics: img1,
  teamCollab: img2,
  visionTelescope: img3,
  seoSearch: img4,
  auditInspect: img5,
  ppcMegaphone: img6,
  marketingEcosystem: img7,
  audienceNetwork: img8,
  seoMarketingHero,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8
}

export const initialServices = [
  {
    id: 'technical-seo',
    slug: 'technical-seo',
    title: 'Enterprise Technical SEO',
    category: 'Architecture & Crawlability',
    iconName: 'Cpu',
    image: img4,
    description: 'Eliminate crawl budget waste, resolve indexation bottlenecks, and accelerate Core Web Vitals to maximize search engine rendering speed.',
    overview: 'Modern search engines prioritize pages that render flawlessly, navigate logically, and provide zero friction. We diagnose and rectify deep technical debt across your CMS, JavaScript frameworks (React/Next.js/Vue), schema architectures, and server infrastructure.',
    problems: [
      'JavaScript rendering delays causing incomplete indexing in Googlebot',
      'Cannibalization and faceted navigation generating millions of duplicate URLs',
      'Poor Core Web Vitals (LCP, INP, CLS) depressing organic search rank',
      'International hreflang mismatches and broken CDN routing'
    ],
    audience: 'High-growth SaaS, multi-region platforms, and enterprise e-commerce portals with 10,000+ indexed pages.',
    scope: 'Complete technical architecture audit, log-file analysis, server response optimization, dynamic rendering remediation, schema markup engineering, and ongoing CI/CD regression testing.',
    deliverables: [
      'Comprehensive 80+ Point Technical Health Audit & Priority Matrix',
      'Core Web Vitals Remediation Code Snippets (LCP, INP, CLS)',
      'Custom JSON-LD Rich Results Schema Implementation',
      'Server Log-File Analysis & Crawl Budget Allocation Plan',
      'Automated SEO Regression Testing Scripts for GitHub/GitLab'
    ],
    workflow: [
      'Deep Crawl & Log Simulation with Screaming Frog & Sitebulb',
      'Prioritized Jira/Linear Ticketing for your engineering team',
      'Staging Environment Verification & Pull Request Reviews',
      'Continuous Crawl Monitoring & Instant Slack Alerting'
    ],
    measurement: 'Indexation efficiency ratio, crawl frequency of money pages, average server latency, INP scores < 200ms, and LCP < 2.0s.',
    impactMetrics: [
      { label: 'Avg. Crawl Efficiency Boost', value: '+310%' },
      { label: 'Core Web Vitals Pass Rate', value: '99.4%' },
      { label: 'Index Coverage Expansion', value: '4.8x' }
    ],
    tools: ['Screaming Frog', 'Google Search Console', 'Sitebulb', 'Chrome DevTools', 'Botify', 'Cloudflare Workers']
  },
  {
    id: 'content-velocity',
    slug: 'content-velocity',
    title: 'High-Intent Content Strategy & SGE Optimization',
    category: 'Content & Semantic Search',
    iconName: 'FileText',
    image: img7,
    description: 'Transform content from vanity blog posts into high-converting topical authority hubs engineered for both traditional search and AI search engines.',
    overview: 'Generic keyword stuffing is obsolete. In the era of Google AI Overviews and Search Generative Experience (SGE), search engines reward first-party data, entity relationships, and deep semantic depth. We build topical clusters that capture demand across the entire buyer journey.',
    problems: [
      'Stagnant organic traffic producing zero pipeline or qualified leads',
      'Surface-level content losing citations to AI Overviews and Perplexity',
      'Disjointed blog architecture lacking internal linking synergy',
      'High bounce rate and poor dwell time on key informational landing pages'
    ],
    audience: 'B2B SaaS, tech startups, professional consulting agencies, and D2C brands looking for compounding inbound revenue.',
    scope: 'Topical authority mapping, entity gap analysis, search intent clustering, human subject-matter-expert drafting, semantic optimization, and conversion-rate tuning.',
    deliverables: [
      '6-Month Comprehensive Topical Map with Semantic Entity Clusters',
      'Monthly High-Depth Articles with custom infographics and proprietary data',
      'AI Overviews / SGE Citation Optimization Strategy',
      'Internal Linking Graph Architecture & Anchor Text Distribution',
      'Conversion Rate Optimization (CRO) audits on top landing pages'
    ],
    workflow: [
      'Semantic keyword clustering & competitive content gap mining',
      'Subject matter expert interviews & proprietary data gathering',
      'Rigorous editorial drafting, technical fact-checking & NLP tuning',
      'Post-publish tracking with keyword ranking velocity monitoring'
    ],
    measurement: 'Organic impression share, entity-level rankings in top 3 positions, AI Overview inclusion rate, and assisted conversion revenue.',
    impactMetrics: [
      { label: 'Topical Authority Gain', value: '+240%' },
      { label: 'Qualified Inbound Pipeline', value: '3.4x' },
      { label: 'SGE Citation Rate', value: '68%' }
    ],
    tools: ['Clearscope', 'SurferSEO', 'Ahrefs', 'MarketMuse', 'Google Search Console', 'Frase']
  },
  {
    id: 'digital-pr-link-building',
    slug: 'digital-pr-link-building',
    title: 'High-Tier Digital PR & Editorial Authority',
    category: 'Authority & Backlinks',
    iconName: 'ShieldCheck',
    image: img8,
    description: 'Acquire Tier-1 editorial backlinks and domain authority through data journalism, survey reports, and high-impact digital PR campaigns.',
    overview: 'We never buy cheap private blog network (PBN) links or spam guest-post farms. We create unignorable data studies and industry benchmark reports that journalists, Forbes, Bloomberg, TechCrunch, and top industry publications organically quote and link to.',
    problems: [
      'Stuck on Page 2 due to competitor domain authority advantage',
      'Toxic link profile polluted by historical legacy spam vendors',
      'Low brand trust and absent brand search volume',
      'Difficulty ranking for competitive commercial bottom-of-funnel keywords'
    ],
    audience: 'Funded startups, scaleups, and enterprise businesses operating in hyper-competitive search verticals.',
    scope: 'Proprietary data report design, journalist relationship outreach, reactive PR newsjacking, disavow file management, and unlinked brand mention reclamation.',
    deliverables: [
      'Quarterly Data-Driven Industry Benchmark Report & Press Release',
      'Guaranteed 8-15 Tier-1 Editorial Links per month (Avg. DR 70+)',
      'Toxic Link Audit & Automated Spam Disavow Submission',
      'Unlinked Brand Mention Conversion Engine',
      'Live Link Tracker Dashboard with DR, Traffic, and Anchor Distribution'
    ],
    workflow: [
      'Ideate newsworthy statistical angles and conduct custom surveys',
      'Pitch top journalists and industry editors with exclusive data snippets',
      'Secure contextually relevant, do-follow links inside editorial bodies',
      'Distribute findings across syndication networks and social channels'
    ],
    measurement: 'Referring domain growth velocity, average Domain Rating (DR) of acquired links, organic search visibility lift, and branded search volume.',
    impactMetrics: [
      { label: 'Average Domain Rating (DR)', value: '74+' },
      { label: 'Monthly Tier-1 Placements', value: '12-18' },
      { label: 'Referral Organic Lift', value: '+185%' }
    ],
    tools: ['Cision', 'Buzzstream', 'Ahrefs', 'Muck Rack', 'SparkToro', 'Hunter.io']
  },
  {
    id: 'programmatic-seo',
    slug: 'programmatic-seo',
    title: 'Programmatic SEO & Scaled Landing Pages',
    category: 'Scale & Automation',
    iconName: 'Layers',
    image: img1,
    description: 'Scale thousands of ultra-targeted, high-converting programmatic landing pages powered by clean databases and dynamic templates.',
    overview: 'Capture long-tail search intent that manual copywriting simply cannot reach. By combining structured relational data with high-quality dynamic design, we build programmatic directories, comparison engines, and location-specific pages that dominate search results.',
    problems: [
      'Missing out on thousands of high-intent long-tail keyword permutations',
      'Manual content creation is too slow and cost-prohibitive to scale',
      'Thin programmatic pages getting penalized by Google helpful content systems',
      'Lack of automated data pipeline to keep page statistics up to date'
    ],
    audience: 'Marketplaces, SaaS aggregators, directory platforms, real estate, travel, and local service networks.',
    scope: 'Database schema design, dynamic page template engineering, anti-thin-content enrichment, programmatic internal linking, and automated XML sitemap feeds.',
    deliverables: [
      'Database Architecture & Scaled Content Dataset (1,000 to 50,000+ entries)',
      'High-Conversion Dynamic Page Templates with Unique Content Modules',
      'Custom API Integration for real-time data refreshes',
      'Automated Sitemap Chunking & Indexing API Pipelines',
      'Post-Launch Indexation & Cannonicalization Monitoring System'
    ],
    workflow: [
      'Identify long-tail search modifiers and search intent patterns',
      'Scrape, clean, or synthesize proprietary verified datasets',
      'Design modular template components that guarantee high value per URL',
      'Staggered deployment with automated Google Indexing API orchestration'
    ],
    measurement: 'Total long-tail keyword footprint, indexed programmatic URLs ratio, programmatic page conversion rate, and customer acquisition cost reduction.',
    impactMetrics: [
      { label: 'Pages Scaled Cleanly', value: '15,000+' },
      { label: 'Long-Tail Keywords Captured', value: '82,000+' },
      { label: 'Reduction in Paid CAC', value: '-54%' }
    ],
    tools: ['Next.js', 'PostgreSQL', 'Python Data Scripts', 'Google Indexing API', 'Screaming Frog', 'Supabase']
  },
  {
    id: 'ecommerce-seo',
    slug: 'ecommerce-seo',
    title: 'E-Commerce SEO & Revenue Optimization',
    category: 'E-Commerce & Shopify/Magento',
    iconName: 'ShoppingCart',
    image: img7,
    description: 'Dominate high-converting transactional queries, optimize product & collection hierarchies, and maximize Shopify/Magento revenue.',
    overview: 'E-commerce SEO requires balancing user experience with deep faceted taxonomy. We restructure your collection pages, optimize product schema, resolve out-of-stock URL management, and capture shoppers right at the point of purchase.',
    problems: [
      'Faceted filters (color, size, price) causing severe duplicate indexing',
      'Product pages ranking below Amazon and big-box aggregators',
      'Out-of-stock products 404ing and leaking hard-earned link equity',
      'Poor Google Shopping organic merchant center feed performance'
    ],
    audience: 'Shopify Plus, Magento/Adobe Commerce, WooCommerce, and custom headless e-commerce stores.',
    scope: 'Faceted navigation canonical strategy, structured data for Merchant Center & Merchant listings, collection page content enrichment, and category UX optimization.',
    deliverables: [
      'E-commerce Faceted Navigation Canonicalization Matrix',
      'Product, Offer, AggregateRating & Merchant Schema Automation',
      'Collection Page Copywriting & Buying Guides',
      'Internal Linking Architecture from High-Traffic Blogs to Top SKUs',
      'Google Merchant Center Organic Feed Optimization'
    ],
    workflow: [
      'Audit crawl depth and inventory management SEO workflows',
      'Implement canonical rules for parameter-driven URL strings',
      'Enrich top 50 revenue-generating collection pages with high-value FAQs & guides',
      'Track SKU-level keyword rankings and revenue attribution'
    ],
    measurement: 'Organic e-commerce revenue, average order value (AOV) from search, non-branded product keyword visibility, and transaction volume.',
    impactMetrics: [
      { label: 'Organic E-comm Revenue', value: '+215%' },
      { label: 'Top 3 Transactional Keywords', value: '1,450+' },
      { label: 'Return on Ad Spend (ROAS) Equity', value: '4.8x' }
    ],
    tools: ['Shopify Plus', 'Google Merchant Center', 'Screaming Frog', 'Looker Studio', 'Ahrefs', 'Semrush']
  },
  {
    id: 'local-seo-multi-location',
    slug: 'local-seo-multi-location',
    title: 'Local SEO & Multi-Location Dominance',
    category: 'Local Search & Google Maps',
    iconName: 'MapPin',
    image: img5,
    description: 'Capture "near me" searches, dominate the Google Maps 3-Pack, and drive phone calls and foot traffic across hundreds of physical locations.',
    overview: 'Local customers possess the highest purchasing intent of all searchers. We deploy geo-targeted location pages, synchronize Google Business Profiles across hundreds of branches, and build high-authority hyper-local citations.',
    problems: [
      'Inconsistent NAP (Name, Address, Phone) citations harming Map rankings',
      'Competitors dominating the Google Maps 3-Pack for high-value services',
      'Negative review velocity hurting local customer conversion rates',
      'Duplicate location pages penalized for low geographic distinctiveness'
    ],
    audience: 'Franchises, healthcare networks, retail chains, and multi-city service providers.',
    scope: 'Google Business Profile (GBP) API synchronization, geo-targeted localized landing pages, review generation frameworks, and local schema implementation.',
    deliverables: [
      'Centralized Google Business Profile Management & Audit',
      'Local Citation Cleanup & Direct Sync with Apple Maps, Bing, Yelp',
      'Custom Location Landing Page Framework with Local Schema & Reviews',
      'Geo-Grid Local Rank Tracking across 5km, 10km, and 25km radii',
      'Automated Review Solicitation Strategy & Response Playbook'
    ],
    workflow: [
      'Conduct geo-grid rank tracking to identify local weak spots',
      'Synchronize citations and eliminate duplicate map pins',
      'Publish localized content and testimonials for each individual branch',
      'Continuous local rank tracking with automated monthly reporting'
    ],
    measurement: 'Google Map Pack impressions, "Get Directions" clicks, direct phone call volume, and localized non-branded search impressions.',
    impactMetrics: [
      { label: 'Map Pack 3-Pack Presence', value: '88%' },
      { label: 'Local Inbound Calls', value: '+340%' },
      { label: 'Foot Traffic Attribution', value: '+190%' }
    ],
    tools: ['BrightLocal', 'Google Business Profile Manager', 'Whitespark', 'GeoGrid Tracker', 'Schema App']
  },
  {
    id: 'ppc-performance-marketing',
    slug: 'ppc-performance-marketing',
    title: 'PPC & Performance Marketing (Google & Meta Ads)',
    category: 'Paid Search & Performance Acquisition',
    iconName: 'Zap',
    image: img6,
    description: 'High-ROAS Google Ads, Performance Max, and Meta paid advertising campaigns engineered to capture ready-to-buy customer intent with zero wasted ad spend.',
    overview: 'Paid acquisition works best when synchronized with organic search data. We build structured Google Search campaigns, negative keyword algorithms, conversion-tuned landing pages, and multi-channel remarketing funnels that deliver profitable Customer Acquisition Cost (CAC).',
    problems: [
      'Rising Customer Acquisition Cost (CAC) and unprofitable Google Ads ROAS',
      'Wasting 30%+ of monthly ad budget on irrelevant broad-match search terms',
      'Low Quality Scores inflating Cost-Per-Click (CPC) across competitive auctions',
      'Disconnect between search ad messaging and post-click landing page conversion rates'
    ],
    audience: 'B2B SaaS, enterprise lead-gen platforms, high-growth e-commerce, and professional service companies.',
    scope: 'Single-keyword ad groups (SKAG), negative keyword harvesting, Performance Max asset groups, server-side conversion tracking (GTM), and landing page CRO experiments.',
    deliverables: [
      'Full-Funnel Google Ads & PPC Account Architecture & Audit',
      'Negative Keyword Harvesting Engine & Wasted-Spend Elimination',
      'High-Converting Modular PPC Landing Pages (A/B Tested)',
      'Server-Side GTM & Enhanced GA4 Conversion Attribution Setup',
      'Real-Time Looker Studio ROAS & Closed-Pipeline Dashboard'
    ],
    workflow: [
      'Analyze historical ad accounts to eradicate negative query bleed',
      'Build granular exact and phrase match ad groups around high-intent keywords',
      'Deploy conversion-optimized landing pages with sub-second load times',
      'Weekly automated bid adjustments, budget pacing, and creative testing'
    ],
    measurement: 'Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), Quality Score improvements, and inbound qualified pipeline.',
    impactMetrics: [
      { label: 'Average ROAS Lift', value: '4.6x' },
      { label: 'CPA Reduction', value: '-38%' },
      { label: 'Wasted Ad Spend Cut', value: '-42%' }
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Looker Studio', 'Optmyzr', 'Unbounce']
  },
  {
    id: 'on-page-seo',
    slug: 'on-page-seo',
    title: 'On-Page SEO & Content Semantic Architecture',
    category: 'On-Page SEO & Search Intent',
    iconName: 'FileText',
    image: img4,
    description: 'Optimize page titles, semantic headings, internal linking graphs, and JSON-LD schema to rank for high-intent transactional buyer searches.',
    overview: 'On-page SEO is the foundation of search relevance. We optimize URL structures, keyword placement, topical depth, and structured data across your entire domain to maximize search visibility and click-through rates.',
    problems: [
      'High impressions but low Click-Through Rates (CTR) in Google SERPs',
      'Pages not ranking for primary transactional search terms',
      'Missing schema markup resulting in plain, unclickable search snippets',
      'Weak internal link distribution leaving critical revenue pages orphaned'
    ],
    audience: 'E-commerce portals, SaaS businesses, and corporate websites with 20+ core transactional pages.',
    scope: 'Meta tag engineering, entity-based content enrichment, heading hierarchy, internal linking siloing, image alt tags, and JSON-LD structured data implementation.',
    deliverables: [
      'Comprehensive On-Page SEO Audit & Priority Keyword Mapping Matrix',
      'Optimized Title Tags, Meta Descriptions & Open Graph Social Cards',
      'JSON-LD Rich Snippet Schema (Product, FAQ, Article, Service)',
      'Internal Linking Architecture Graph & Strategic Anchor Text Guide',
      'Monthly CTR Optimization via Search Console Query Mining'
    ],
    workflow: [
      'Map primary, secondary, and semantic LSI keywords to specific URLs',
      'Rewrite meta titles and descriptions for maximum CTR lift',
      'Implement rich schema markup and test in Google Rich Results tester',
      'Monitor ranking shifts and CTR improvements on a bi-weekly cadence'
    ],
    measurement: 'Average search position, Click-Through Rate (CTR) lift, organic page impressions, and bounce rate reduction.',
    impactMetrics: [
      { label: 'Average CTR Increase', value: '+44%' },
      { label: 'Page 1 Keyword Ranks', value: '850+' },
      { label: 'Organic Page Views', value: '+190%' }
    ],
    tools: ['Google Search Console', 'Ahrefs', 'SurferSEO', 'Schema.org', 'Screaming Frog']
  },
  {
    id: 'off-page-seo',
    slug: 'off-page-seo',
    title: 'Off-Page SEO & Tier-1 Backlink Engineering',
    category: 'Off-Page SEO & Authority',
    iconName: 'ShieldCheck',
    image: img8,
    description: 'Acquire high-DR editorial backlinks, brand mentions, and domain authority through data journalism, PR outreach, and white-hat link building.',
    overview: 'Backlinks remain one of Google\'s strongest ranking signals. We execute high-authority digital PR campaigns, proprietary industry surveys, and journalist outreach to secure contextually relevant editorial links from top-tier publications.',
    problems: [
      'Stuck on Page 2 behind competitors with superior Domain Rating (DR)',
      'Toxic legacy backlinks dragging down algorithmic trust and rankings',
      'Low brand mention volume across authoritative industry platforms',
      'Zero progress from low-quality directory or guest-post link vendors'
    ],
    audience: 'High-growth startups, competitive B2B companies, and e-commerce platforms seeking rapid authority scaling.',
    scope: 'Data study ideation, survey research, journalist pitching, unlinked brand reclamation, competitor link intercept, and disavow management.',
    deliverables: [
      'Guaranteed 8-15 Tier-1 Editorial Links per month (Avg. DR 70+)',
      'Quarterly Data-Driven Industry Benchmark Report & Press Release',
      'Toxic Backlink Audit & Google Disavow File Submission',
      'Unlinked Brand Mention Conversion Engine',
      'Live Backlink Tracker Dashboard with DR, Anchor & Traffic Metrics'
    ],
    workflow: [
      'Analyze competitor backlink gaps to identify high-value linking domains',
      'Conduct original industry research reports that reporters love to cite',
      'Pitch custom data angles to niche journalists and editorial teams',
      'Verify link indexation and track domain rating velocity monthly'
    ],
    measurement: 'Domain Rating (DR) growth, referring domain velocity, organic traffic lift, and non-branded search impressions.',
    impactMetrics: [
      { label: 'Average Domain Rating (DR)', value: '75+' },
      { label: 'Monthly Editorial Links', value: '12-18' },
      { label: 'Organic Traffic Lift', value: '+210%' }
    ],
    tools: ['Ahrefs', 'Cision', 'Buzzstream', 'Muck Rack', 'SparkToro', 'Hunter.io']
  }
]

export const initialPackages = [
  {
    id: 'growth-starter',
    name: 'Growth Foundation',
    badge: 'Essential SEO & PPC',
    recommended: false,
    price: 45000,
    monthlyPrice: 45000,
    quarterlyPrice: 38250,
    billingPeriod: 'per month, billed monthly',
    description: 'Perfect for startups and mid-market businesses ready to fix technical debt, deploy on-page SEO, dominate local search, and streamline PPC ad spend.',
    bestFor: 'Startups & Mid-sized companies seeking consistent 3x-5x search growth.',
    features: [
      'Up to 1,500 Monitored Target Keywords',
      'Complete 80-Point Technical & On-Page SEO Audit',
      'Full On-Page Optimization for 25 Core Transactional Pages',
      'Local SEO & Google Maps 3-Pack Optimization (1 Location)',
      'Foundational Google Ads (PPC) Negative Keyword Audit & Setup',
      '4 High-Depth Semantic Articles / month (2,000+ words each)',
      '3 Guaranteed Tier-1 Off-Page Editorial Backlinks (DR 60+)',
      'Real-Time Looker Studio Live Dashboard',
      'Bi-Weekly 1-on-1 Growth Strategy Calls',
      'Standard Slack Support Channel (24h response)'
    ],
    notIncluded: [
      'Programmatic landing page architecture',
      'Dedicated digital PR press releases',
      'Direct code commits / engineering PRs'
    ]
  },
  {
    id: 'scale-engine',
    name: 'Scale Engine',
    badge: 'Most Popular',
    recommended: true,
    price: 95000,
    monthlyPrice: 95000,
    quarterlyPrice: 80750,
    billingPeriod: 'per month, billed monthly',
    description: 'Our flagship full-stack SEO & digital marketing program: aggressive on-page & off-page authority, high-ROAS PPC advertising, and multi-location dominance.',
    bestFor: 'High-growth SaaS, E-commerce, and B2B scaleups wanting market dominance.',
    features: [
      'Up to 5,000 Monitored Target Keywords',
      'Full On-Page SEO & Schema Optimization for Unlimited Pages',
      'High-ROAS Google Ads (PPC) Campaign Management & A/B Testing',
      '8 Guaranteed Tier-1 Off-Page Editorial Backlinks (DR 70+)',
      'Local SEO & Multi-Location Dominance (Up to 5 Locations)',
      'Conversion Rate Optimization (CRO) Heatmap & Funnel Analysis',
      '10 High-Depth Semantic Articles & SGE Optimization / month',
      'Continuous Technical SEO & Core Web Vitals Monitoring',
      'Direct Engineering Pull Requests (GitHub/GitLab)',
      'Weekly Strategy Sprints & Priority Slack Channel (2h response SLA)'
    ],
    notIncluded: [
      'Multi-region international hreflang in 10+ languages'
    ]
  },
  {
    id: 'enterprise-alpha',
    name: 'Enterprise Alpha',
    badge: 'Enterprise SEO & Marketing',
    recommended: false,
    price: 195000,
    monthlyPrice: 195000,
    quarterlyPrice: 165750,
    billingPeriod: 'per month, billed monthly',
    description: 'The ultimate bespoke search & digital marketing partnership. Complete technical engineering, multi-channel PPC (Google & Meta), nationwide local SEO, and Tier-1 digital PR.',
    bestFor: 'Large enterprises, marketplaces, and international multi-region brands.',
    features: [
      'Unlimited Monitored Target Keywords',
      'Omnichannel Performance Marketing (Google Search, PMax & Meta Ads)',
      'Enterprise On-Page, Off-Page & Technical Architecture',
      'Nationwide / Multi-City Local SEO Geo-Grid Dominance',
      'Full Programmatic SEO Architecture & Dataset Pipelines',
      '15+ High-Tier Off-Page Editorial Backlinks (DR 75-90+)',
      'Conversion Rate Optimization (CRO) Funnel Engineering',
      'Dedicated Senior Growth Director & Content Strategist',
      '24/7 VIP Emergency Slack & Direct Hotline',
      'Executive Board Quarterly Presentation Decks'
    ],
    notIncluded: []
  }
]

export const packageComparisonTable = [
  {
    category: 'Strategy & Diagnostics',
    features: [
      { name: 'Initial Deep Technical & On-Page Audit', starter: 'Standard (80-pt)', scale: 'Comprehensive (150-pt)', enterprise: 'Bespoke Log & Code Review' },
      { name: 'Competitor Reverse-Engineering', starter: 'Top 3 Competitors', scale: 'Top 10 Competitors', enterprise: 'Unlimited Global Landscape' },
      { name: 'Keyword Tracking & Intent Mapping', starter: '1,500 Keywords', scale: '5,000 Keywords', enterprise: 'Unlimited Keywords' },
      { name: 'AI Search & SGE Readiness Audit', starter: 'Basic', scale: 'Advanced', enterprise: 'Continuous AI Overviews Lab' }
    ]
  },
  {
    category: 'PPC & Digital Marketing',
    features: [
      { name: 'Google Ads (PPC) Management', starter: 'Negative Keyword & Setup Audit', scale: 'Full Funnel Search & PMax', enterprise: 'Multi-Channel Global Ads (Google/Meta)' },
      { name: 'On-Page SEO & Schema Optimization', starter: 'Core 25 Pages', scale: 'Unlimited Core Pages', enterprise: 'Full Site & Dynamic Schemas' },
      { name: 'Local SEO & Google Maps Dominance', starter: '1 Primary Location', scale: 'Up to 5 Locations', enterprise: 'Multi-City / Unlimited Locations' },
      { name: 'Conversion Rate Optimization (CRO)', starter: 'Heuristic Review', scale: 'Heatmaps & Landing Page Tests', enterprise: 'Dedicated CRO Experiment Lab' }
    ]
  },
  {
    category: 'Execution & Content Velocity',
    features: [
      { name: 'Monthly Editorial Content Articles', starter: '4 pieces (2,000w)', scale: '10 pieces (2,500w)', enterprise: '20+ pieces + Interactive Tools' },
      { name: 'Entity & Schema Optimization', starter: 'Core Pages', scale: 'Full Site & Dynamic', enterprise: 'Custom Enterprise Knowledge Graph' },
      { name: 'Core Web Vitals Engineering', starter: 'Guidance tickets', scale: 'Direct Code PRs', enterprise: 'Edge/Worker CDN Injections' },
      { name: 'Programmatic SEO Deployment', starter: '—', scale: 'Optional Add-on', enterprise: 'Included (up to 50k URLs)' }
    ]
  },
  {
    category: 'Authority & Off-Page SEO',
    features: [
      { name: 'Tier-1 Guaranteed Editorial Backlinks', starter: '3 per month (DR 60+)', scale: '8 per month (DR 70+)', enterprise: '15+ per month (DR 75-90+)' },
      { name: 'Original Research & Survey Reports', starter: '—', scale: 'Quarterly Report', enterprise: 'Bi-Monthly Industry Benchmark' },
      { name: 'Toxic Backlink Disavow & Reclamation', starter: 'Quarterly', scale: 'Monthly', enterprise: 'Real-time automated' }
    ]
  },
  {
    category: 'Support & SLAs',
    features: [
      { name: 'Meeting Frequency', starter: 'Bi-Weekly Strategy', scale: 'Weekly Agile Sprints', enterprise: 'Weekly + Ad-hoc On Demand' },
      { name: 'Communication Channel', starter: 'Shared Slack (24h SLA)', scale: 'Priority Slack (2h SLA)', enterprise: '24/7 Dedicated Channel & Hotline' },
      { name: 'Reporting & Analytics', starter: 'Looker Studio Dashboard', scale: 'Custom Executive BI Dashboard', enterprise: 'Custom Data Warehouse Pipelines' },
      { name: 'Contract Commitment', starter: 'Month-to-month', scale: 'Month-to-month', enterprise: 'Month-to-month (Zero Lock-in)' }
    ]
  }
]

export const initialCaseStudies = [
  {
    id: 'fintech-saas-growth',
    slug: 'fintech-saas-growth',
    title: 'Scaling Inbound ARR by 340% for Series B FinTech Platform',
    client: 'LedgerFlow (Global FinTech)',
    industry: 'B2B SaaS / FinTech',
    timeframe: '9 Months Partnership',
    heroImage: img1,
    summary: 'How an aggressive technical restructure, programmatic comparison pages, and Tier-1 finance PR took LedgerFlow from 40k to 380k monthly qualified organic visits.',
    challenge: 'LedgerFlow raised $22M Series B but relied on paid Google Search ads at an unsustainable $180 CAC. Their React SPA was poorly indexed by Googlebot, and core transactional keywords were dominated by legacy competitors.',
    solution: 'We executed a dynamic SSR pre-rendering architecture for Googlebot, created 450+ programmatic "X vs Y" comparison hubs with proprietary feature grids, and launched a benchmark study on corporate treasury management cited by Bloomberg and Forbes.',
    results: 'Organic visits skyrocketed from 42,000/mo to 385,000/mo within 9 months, generating $2.4M in pipeline ARR and cutting paid marketing dependency by 62%.',
    metrics: [
      { label: 'Organic Pipeline ARR', value: '$2.4M+' },
      { label: 'Monthly Search Traffic', value: '385K (+810%)' },
      { label: 'CAC Reduction', value: '-62%' },
      { label: 'Page 1 Keyword Rankings', value: '2,840' }
    ],
    testimonial: {
      quote: "Northstar didn't just deliver typical SEO vanity metrics. They operated like an embedded growth squad, fixing our engineering bugs and driving enterprise pipeline from month three.",
      author: 'Marcus Vance',
      role: 'VP of Growth & Marketing, LedgerFlow'
    }
  },
  {
    id: 'ecommerce-fashion-brand',
    slug: 'ecommerce-fashion-brand',
    title: 'Generating ₹14.8 Cr in Organic E-commerce Revenue',
    client: 'AURA Sustainable Apparel',
    industry: 'Direct-to-Consumer / E-commerce',
    timeframe: '12 Months Partnership',
    heroImage: img7,
    summary: 'Fixing Shopify collection crawl traps, enriching product schema, and running sustainable fashion PR campaigns resulted in a 4.6x organic sales lift.',
    challenge: 'AURA had strong social brand equity but zero organic search presence. 60% of their collection URLs were trapped in parameter loops, and out-of-stock items returned 404 errors, shedding valuable page equity.',
    solution: 'We overhauled their Shopify collection architecture, implemented automated Product and Merchant Center JSON-LD schema, and secured editorial features in Vogue, GQ, and Elle with sustainable textile research.',
    results: 'Organic revenue climbed by 360%, accounting for 48% of total e-commerce revenue and generating ₹14.8 Crore in direct attributed sales.',
    metrics: [
      { label: 'Attributed Organic Revenue', value: '₹14.8 Cr' },
      { label: 'Transactional Keywords Top 3', value: '1,920+' },
      { label: 'Organic ROAS Equivalent', value: '6.2x' },
      { label: 'Return Customer Rate', value: '+44%' }
    ],
    testimonial: {
      quote: "Our organic revenue now surpasses our paid Meta campaigns. Northstar's understanding of e-commerce taxonomy and technical SEO is unmatched in India.",
      author: 'Ananya Singhania',
      role: 'Founder & CEO, AURA Apparel'
    }
  },
  {
    id: 'healthtech-marketplace',
    slug: 'healthtech-marketplace',
    title: 'Dominating Local Search for 140+ Clinics Across 18 Cities',
    client: 'CarePulse Health Networks',
    industry: 'Healthcare / Multi-Location',
    timeframe: '7 Months Partnership',
    heroImage: img5,
    summary: 'Consolidating citations, deploying high-converting doctor profile pages, and dominating Google Maps 3-pack drove 42,000+ patient appointments.',
    challenge: 'CarePulse operated 140+ physical clinics, but fragmented local listings and duplicate location pages caused Google to suppress their Google Maps visibility in favor of single-doctor practices.',
    solution: 'We connected Google Business Profile API to automatically synchronize clinic hours and practitioner credentials, deployed programmatic geo-pages with verified patient testimonials, and built hyper-local hospital citations.',
    results: 'CarePulse attained 89% Google Maps 3-Pack presence across all target service areas, driving 42,000+ direct phone calls and appointments.',
    metrics: [
      { label: 'Patient Bookings from Maps', value: '42,000+' },
      { label: '3-Pack Map Presence', value: '89%' },
      { label: 'Inbound Phone Calls', value: '+290%' },
      { label: 'Zero-Click Brand Impressions', value: '1.8M' }
    ],
    testimonial: {
      quote: "Northstar solved what two previous agencies couldn't figure out. Our clinic waiting rooms are full because people find us first on Google Maps.",
      author: 'Dr. Rohan Kulkarni',
      role: 'Chief Medical Officer, CarePulse'
    }
  },
  {
    id: 'b2b-cloud-security',
    slug: 'b2b-cloud-security',
    title: 'Outranking Cisco & Palo Alto for Cloud Security Terms',
    client: 'CipherStack Cyber Systems',
    industry: 'Enterprise B2B / Cyber Security',
    timeframe: '10 Months Partnership',
    heroImage: img3,
    summary: 'Deep cybersecurity technical content, whitepaper asset syndication, and high-DR backlink acquisition beat multi-billion-dollar incumbents.',
    challenge: 'A seed-stage cybersecurity company needed to rank for high-intent enterprise terms against trillion-dollar legacy incumbents with Domain Ratings exceeding 90.',
    solution: 'We engineered an industry-first CVE vulnerability database and Zero Trust benchmark calculators that organically attracted links from security researchers, university labs, and government threat portals.',
    results: 'CipherStack captured position #1 for 48 mission-critical commercial terms, resulting in 220+ enterprise demo requests from Fortune 500 security architects.',
    metrics: [
      { label: 'Enterprise Demo Requests', value: '220+' },
      { label: 'Rank #1 Commercial Keywords', value: '48' },
      { label: 'Avg. Deal Size from SEO', value: '$115,000' },
      { label: 'Domain Rating Lift', value: '28 → 78' }
    ],
    testimonial: {
      quote: "When CISOs search for enterprise container security, they find CipherStack before anyone else. Northstar is the best growth investment we have ever made.",
      author: 'Vikramaditya Sen',
      role: 'Co-Founder & CTO, CipherStack'
    }
  },
  {
    id: 'omnichannel-ppc-seo-scale',
    slug: 'omnichannel-ppc-seo-scale',
    title: '4.8x Blended ROAS & ₹18.5 Cr ARR via Google Ads & Full-Funnel SEO',
    client: 'OmniGrowth Direct (B2B & D2C)',
    industry: 'Performance Marketing & E-Commerce',
    timeframe: '8 Months Partnership',
    heroImage: img6,
    summary: 'Synchronizing high-intent Google Search Ads with On-Page SEO clusters and Local Map dominance reduced customer acquisition costs by 48% while doubling monthly revenue.',
    challenge: 'OmniGrowth was burning ₹35L per month on broad Google Ads campaigns with declining ROAS (1.8x) while their organic search presence was stagnant due to missing on-page schema and unoptimized product landing pages.',
    solution: 'We rebuilt their Google Ads account around high-intent exact-match keywords, eliminated 42% wasted search query spend, deployed A/B tested conversion landing pages, and aligned On-Page SEO topic clusters with paid search landing pages.',
    results: 'Blended return on ad spend jumped from 1.8x to 4.8x, CAC decreased by 48%, and combined organic and paid search revenue surpassed ₹18.5 Crore.',
    metrics: [
      { label: 'Blended ROAS', value: '4.8x' },
      { label: 'Attributed Revenue', value: '₹18.5 Cr' },
      { label: 'CAC Reduction', value: '-48%' },
      { label: 'Wasted Ad Spend Cut', value: '-42%' }
    ],
    testimonial: {
      quote: "Northstar unified our PPC and SEO into one cohesive revenue machine. We cut our wasted ad spend almost in half while achieving our most profitable quarter ever.",
      author: 'Priya Nambiar',
      role: 'Chief Marketing Officer, OmniGrowth Direct'
    }
  }
]

export const initialTeam = [
  {
    id: 'vivang-mishra',
    name: 'Vivang Mishra',
    designation: 'Founder & Chief Search Strategist',
    experience: '9+ Years in Enterprise Search',
    specialty: 'Algorithmic Systems, Core Web Vitals & Growth Architecture',
    bio: 'Former senior growth lead with experience scaling multi-million dollar organic pipelines for global tech brands. Obsessed with search algorithms, SGE entity graphs, and technical performance.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    designation: 'Head of Technical SEO & Engineering',
    experience: '8+ Years Full-Stack & Crawl Analytics',
    specialty: 'JavaScript SEO, Log-File Analysis, Next.js & Server Workers',
    bio: 'Deep technical specialist bridging the gap between engineering teams and search engines. Expert in log-file excavation, rendering bottlenecks, and edge SEO deployments.',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    designation: 'Director of Content & Semantic Search',
    experience: '7+ Years Editorial Strategy & NLP',
    specialty: 'Topical Authority Graphs, SGE Citations & High-Intent Copy',
    bio: 'Priya turns dry industry concepts into high-converting editorial assets that Google’s AI Overviews routinely cite as primary source material.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'kabir-mehta',
    name: 'Kabir Mehta',
    designation: 'Lead Digital PR & Authority Strategist',
    experience: '6+ Years Journalist Outreach & Media Relations',
    specialty: 'Data Journalism, Benchmark Surveys & Unlinked Brand Mentions',
    bio: 'Kabir has placed organic stories in Forbes, Business Insider, TechCrunch, and Economic Times by turning proprietary client data into compelling headlines.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'tanya-deshmukh',
    name: 'Tanya Deshmukh',
    designation: 'Senior Programmatic & E-Commerce Lead',
    experience: '5+ Years Database Architecture & Scaled SEO',
    specialty: 'Shopify Plus, Faceted Navigation & 100k+ URL Systems',
    bio: 'Specialist in scaling millions of programmatic landing pages without quality erosion. Master of relational databases, dynamic schema, and conversion paths.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'rohit-verma',
    name: 'Rohit Verma',
    designation: 'Lead CRO & Search Analytics Engineer',
    experience: '6+ Years Looker Studio & GA4 Attribution',
    specialty: 'User Intent Funnels, Heatmaps & Revenue Attribution',
    bio: 'Ensures that every visitor delivered by search turns into revenue. Designs custom Looker Studio dashboards that prove exact bottom-line ROI to board members.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80',
    linkedin: 'https://linkedin.com'
  }
]

export const initialBlogPosts = [
  {
    id: 'sge-ai-overviews-playbook-2026',
    slug: 'sge-ai-overviews-playbook-2026',
    title: 'The 2026 Playbook for Dominating Google AI Overviews & SGE',
    category: 'AI Search & Future of SEO',
    author: 'Vivang Mishra',
    publishedAt: '2026-03-15',
    readTime: '8 min read',
    excerpt: 'Traditional 10 blue links are now secondary to AI synthesis. Here is how we engineer content structure, schema entity relationships, and first-party data to guarantee brand citations in Gemini-powered search results.',
    content: `
### The New Search Reality
Search is no longer a matching engine of string queries to keyword density. With Google AI Overviews and multimodal search dominating over 35% of commercial and informational queries, Google acts as an answering engine that synthesizes answers from verified entity sources.

### 1. Entity Salience Over Keyword Density
Google constructs an internal knowledge graph of entities (people, organizations, concepts, tools). To be included in an AI Overview:
- Explicitly state relationships using schema \`sameAs\` properties and Wikidata references.
- Structure definitions in direct, authoritative answer paragraphs (< 50 words) immediately beneath H2/H3 question headers.
- Include structured comparison tables that AI models can extract cleanly into summary cards.

### 2. The Power of Proprietary First-Party Data
AI summaries require fresh, un-hallucinated citations. If your article merely summarizes existing internet knowledge, an AI Overview will synthesize it without citing you. If your article contains a proprietary survey of 1,200 industry leaders, you become the un-substitutable citation source.

### 3. Technical INP and Bot Crawlability
Googlebot uses significant compute to render JavaScript for AI training. Websites with heavy client-side JavaScript rendering suffer delayed re-crawling. Pre-render your primary content server-side to guarantee instant entity parsing.
    `
  },
  {
    id: 'technical-seo-nextjs-spa-guide',
    slug: 'technical-seo-nextjs-spa-guide',
    title: 'Solving Client-Side React & Next.js SEO Rendering Failures',
    category: 'Technical Engineering',
    author: 'Aarav Sharma',
    publishedAt: '2026-02-28',
    readTime: '11 min read',
    excerpt: 'A technical deep-dive into how hydration mismatches, client-side data fetching, and unoptimized TTFB silently kill your Google indexation rates, and how to fix them.',
    content: `
### Why JavaScript Frameworks Break SEO
Modern web applications prioritize developer velocity with React, Vue, and Next.js. However, if your application relies on \`useEffect\` or client-side \`fetch\` calls for critical content, Googlebot must queue your pages for a second wave of rendering—which can take hours or even days.

### Key Remediation Checklist:
1. **Server-Side Generation (SSG) / Incremental Static Regeneration (ISR)**: Ensure money pages ship full HTML over the wire with TTFB under 300ms.
2. **Metadata Hydration**: Never inject canonical tags, title tags, or structured JSON-LD purely in client-side lifecycle hooks. Use Next.js Metadata API or native SSR heads.
3. **Internal Links Must Use Native \`<a>\` Tags**: Never bind route transitions to \`onClick\` handlers on \`<div>\` or \`<button>\` tags. Googlebot does not execute clicks during automated crawling.
    `
  },
  {
    id: 'programmatic-seo-architecture-scale',
    slug: 'programmatic-seo-architecture-scale',
    title: 'Building a 50,000-Page Programmatic SEO Engine Without Penalties',
    category: 'Scalable Growth',
    author: 'Tanya Deshmukh',
    publishedAt: '2026-02-12',
    readTime: '9 min read',
    excerpt: 'How to combine PostgreSQL databases, dynamic programmatic templates, and unique value algorithms to capture millions of long-tail search visits safely.',
    content: `
### The Thin Content Trap
Google’s Helpful Content updates ruthlessly de-index programmatic sites that simply swap out city names or keyword modifiers on an identical 200-word template.

### The 4 Principles of Safe Programmatic Scale:
- **Unique Proprietary Data per Page**: Every generated URL must present unique data points, graphs, or calculations not available elsewhere.
- **Dynamic Modular Components**: Vary layout, related resources, and customer reviews based on data category logic.
- **Staggered Indexing**: Do not blast 50,000 URLs to Google in a single day. Roll out 1,000 URLs, evaluate search console indexation and engagement signals, and iterate.
- **Aggressive Orphan Page Prevention**: Connect your programmatic nodes with logical breadcrumb graphs and category hub pages.
    `
  },
  {
    id: 'digital-pr-data-journalism-playbook',
    slug: 'digital-pr-data-journalism-playbook',
    title: 'How to Build DR 80+ Editorial Backlinks Without Paying a Rupee',
    category: 'Link Building & PR',
    author: 'Kabir Mehta',
    publishedAt: '2026-01-20',
    readTime: '7 min read',
    excerpt: 'Stop paying \$500 for low-quality sponsored guest posts. Learn our exact data-journalism formula that earned organic mentions in Forbes, Bloomberg, and TechCrunch.',
    content: `
### The Death of Paid Guest Posting
Search engines have grown adept at detecting sponsored links, guest-post networks, and transactional anchor texts. Google actively discounts or penalties unnatural links.

### The Data Journalism Formula:
1. **Find a High-Emotion, High-Debate Industry Question**: Look for trends where opinion is divided (e.g. "Is remote work lowering enterprise security?").
2. **Survey Your User Base or Scrape Public Datasets**: Collect 500-1,000 data points and calculate surprising correlations.
3. **Create 3 Clean Infographic Charts**: Journalists are on deadline and need visual proof to embed in their articles.
4. **Targeted Personalized Pitching**: Reach out directly to beat reporters covering that specific niche with bulleted findings and high-resolution chart downloads.
    `
  }
]

export const initialFaqs = [
  {
    id: 'faq-1',
    question: 'How quickly can we expect to see tangible SEO results?',
    answer: 'While technical fixes and Core Web Vitals remediation often produce measurable crawl improvements and indexation within 2 to 4 weeks, significant revenue and competitive keyword rank gains typically compound over 3 to 6 months. SEO is a compounding equity asset; the work done in month one continues paying dividends for years without ongoing per-click ad costs.'
  },
  {
    id: 'faq-2',
    question: 'How are you different from traditional digital marketing agencies?',
    answer: 'Most agencies outsource content to cheap AI tools, buy spammy guest posts, and send boilerplate automated PDF reports with zero business context. At Northstar, we operate as an embedded growth engineering squad. We commit code directly via GitHub PRs, write subject-matter-expert content, acquire real Tier-1 editorial media links, and measure success strictly in pipeline and revenue.'
  },
  {
    id: 'faq-3',
    question: 'Do you guarantee #1 rankings on Google?',
    answer: 'Any agency that promises guaranteed #1 rankings on Google is lying or using high-risk black-hat tactics that will eventually trigger manual penalties. What we guarantee is rigorous algorithmic excellence, unmatched technical execution, Tier-1 authority acquisition, and full transparency. Our track record across 120+ client engagements speaks for itself.'
  },
  {
    id: 'faq-4',
    question: 'Are there any long-term lock-in contracts?',
    answer: 'No. All our standard retainers are month-to-month with a 30-day notice period. We believe in retaining clients through verifiable ROI and measurable performance, not legal handcuffs. Our average client retention rate is over 94% across 18+ months.'
  },
  {
    id: 'faq-5',
    question: 'Will your team work directly with our developers and content writers?',
    answer: 'Yes. We seamlessly plug into your existing toolchain—whether that is Jira, Linear, GitHub, GitLab, Slack, or Notion. We write clear technical tickets with reproduction steps and code snippets, and our engineers can even submit direct Pull Requests for your review.'
  },
  {
    id: 'faq-6',
    question: 'What is included in your free initial SEO audit?',
    answer: 'Our free audit is not an automated 5-second PDF export. A senior SEO strategist personally inspects your domain, analyzing crawl architecture, indexation bottlenecks, competitor keyword gaps, Core Web Vitals performance, and backlink health. We then present a 15-minute video walkthrough and actionable next-steps roadmap.'
  }
]

export const initialTestimonials = [
  {
    id: 't-1',
    clientName: 'Marcus Vance',
    role: 'VP of Growth & Demand Gen',
    company: 'LedgerFlow FinTech',
    metricHighlight: '+810% Organic Traffic',
    review: 'Northstar transformed our organic acquisition completely. We went from being buried on page 3 behind legacy banks to dominating the top 3 spots for our core enterprise keywords. Invaluable team.',
    rating: 5
  },
  {
    id: 't-2',
    clientName: 'Ananya Singhania',
    role: 'Founder & CEO',
    company: 'AURA Sustainable Apparel',
    metricHighlight: '₹14.8 Cr Organic Sales',
    review: 'Our organic revenue grew so fast that we were able to scale back our Meta ad spend significantly. They solved our Shopify duplicate URL nightmare within 30 days.',
    rating: 5
  },
  {
    id: 't-3',
    clientName: 'Dr. Rohan Kulkarni',
    role: 'Chief Medical Officer',
    company: 'CarePulse Health Networks',
    metricHighlight: '42k+ Patient Bookings',
    review: 'Dominating Google Maps in 18 competitive metropolitan cities changed our business. The transparency and weekly communication from Vivang and his team is world-class.',
    rating: 5
  },
  {
    id: 't-4',
    clientName: 'Vikramaditya Sen',
    role: 'Co-Founder & CTO',
    company: 'CipherStack Cyber Systems',
    metricHighlight: 'Rank #1 for 48 Terms',
    review: 'As an engineering-heavy team, we hated traditional SEO agencies who sent vague advice. Northstar spoke our language, submitted GitHub pull requests, and delivered Fortune 500 enterprise pipeline.',
    rating: 5
  }
]

export const initialSiteSettings = {
  companyName: 'Northstar Growth Studio',
  tagline: 'Strategic Search & Organic Revenue Engineering',
  description: 'Independent SEO and digital growth engineering studio helping ambitious tech companies, e-commerce brands, and enterprises turn search intent into compounding market dominance.',
  email: 'growth@northstarseo.com',
  phone: '+91 (011) 4892-3100',
  whatsapp: '+919876543210',
  address: 'Level 5, Cyber Park Tech Enclave, Gurugram, NCR Delhi 122002',
  businessHours: 'Monday – Friday, 9:30 AM – 6:30 PM IST',
  socials: {
    linkedin: 'https://linkedin.com/company/northstar-seo',
    instagram: 'https://instagram.com/northstar.growth',
    facebook: 'https://facebook.com/northstarseo',
    youtube: 'https://youtube.com/@northstarseo'
  },
  privacyPolicy: `
### Privacy Policy — Northstar Growth Studio
**Last updated: March 2026**

#### 1. Information We Collect
We collect information you provide directly to us when filling out audit requests, booking consultations, or subscribing to our industry journal. This includes your name, work email address, company name, website URL, phone number, and project goals.

#### 2. How We Use Your Information
We use the information collected strictly to:
- Deliver customized website SEO audits and competitive gap reports.
- Communicate with you regarding booked consultation sessions and service inquiries.
- Provide monthly data research reports and algorithmic update notifications if subscribed.
- Enhance our digital offerings and ensure secure technical operations.

#### 3. Client Data & Non-Disclosure
All client data, search console access, analytics credentials, and proprietary strategy blueprints shared with Northstar are protected under strict Non-Disclosure Agreements (NDAs). We never sell, lease, or monetize your search data to third parties or competitor platforms.

#### 4. Analytics & Cookies
We use privacy-conscious analytics tools to measure website performance, user dwell time, and interaction rates. You may disable cookies at any time through your browser settings.
  `,
  terms: `
### Terms of Service — Northstar Growth Studio
**Last updated: March 2026**

#### 1. Scope of Engagement
Northstar Growth Studio provides search engine optimization, content strategy, technical remediation, and digital PR consulting. All services are governed by individual Statement of Work (SOW) documents detailing agreed deliverables, timelines, and milestones.

#### 2. Guarantees & Algorithmic Reality
Search engine algorithms (Google, Bing, Perplexity, OpenAI) are operated by independent third-party entities. While Northstar guarantees the highest industry standards of technical quality, compliance with Google Search Essentials, and verified white-hat methodologies, no agency can guarantee specific rank placement or third-party indexation timelines.

#### 3. Intellectual Property & Deliverables
Upon full settlement of invoices, all custom content, code snippets, schema implementations, and strategy playbooks generated specifically for your business become your exclusive intellectual property.

#### 4. Billing, Cancellations & Terms
Retainer packages operate on a month-to-month basis with a 30-day written cancellation notice unless otherwise stipulated in an Enterprise Master Services Agreement.
  `
}

