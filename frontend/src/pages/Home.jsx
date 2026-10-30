import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
  Globe,
  Plus,
  Minus,
  Activity,
  Network,
  Database,
  Code,
  FileText,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Lock,
  Users,
  Compass
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import { useQuery } from '@tanstack/react-query'
import { LogoMarquee } from '@/components/ui/logo-marquee'
import { fetchCaseStudies, fetchFaqs, fetchPackages, fetchServices } from '../api'
import { initialTestimonials, packageComparisonTable, agencyImages } from '../data/seoAgencyData'
import techSvgPaths from '../data/techSvgPaths.json'

const techSkillLogos = [
  { name: 'React', svgPath: techSvgPaths.react, color: '#00D8FF' },
  { name: '.NET', svgPath: techSvgPaths.dotnet, color: '#512BD4' },
  { name: 'Python', svgPath: techSvgPaths.python, color: '#3776AB' },
  { name: 'PHP', svgPath: techSvgPaths.php, color: '#777BB4' },
  { name: 'WordPress', svgPath: techSvgPaths.wordpress, color: '#21759B' },
  { name: 'Shopify', svgPath: techSvgPaths.shopify, color: '#7AB55C' },
  { name: 'Next.js', svgPath: techSvgPaths.nextdotjs, color: '#000000' },
  { name: 'Node.js', svgPath: techSvgPaths.nodedotjs, color: '#5FA04E' },
  { name: 'Laravel', svgPath: techSvgPaths.laravel, color: '#FF2D20' },
  { name: 'WooCommerce', svgPath: techSvgPaths.woocommerce, color: '#96588A' },
  { name: 'Magento', svgPath: techSvgPaths.magento, color: '#EE672F' },
]

const seoHeroSlides = [
  {
    image: agencyImages.seoSearch,
    tag: "Technical & On-Page SEO",
    badge: "99.8% Core Web Vitals",
    title: "Enterprise Technical Health & Semantic On-Page Architecture",
    detail: "Sub-second hydration, zero crawl budget waste, structured JSON-LD entity schema, and semantic on-page keyword mapping."
  },
  {
    image: agencyImages.ppcMegaphone,
    tag: "PPC & Google Ads",
    badge: "4.6x Average ROAS",
    title: "High-ROAS Paid Search, Performance Max & Meta Advertising",
    detail: "Negative keyword pruning, precision audience targeting, and high-converting landing pages engineered to minimize CAC."
  },
  {
    image: agencyImages.audienceNetwork,
    tag: "Off-Page SEO & Digital PR",
    badge: "DR 75+ Editorial Links",
    title: "High-Impact Tier-1 Backlink Engineering & Media PR",
    detail: "Data-driven industry benchmark studies earning do-follow links from Bloomberg, Forbes, and tier-1 authoritative publications."
  },
  {
    image: agencyImages.analytics,
    tag: "Local & Multi-Channel Telemetry",
    badge: "Looker Studio BI",
    title: "Multi-Channel Telemetry & Looker Studio BI Attribution",
    detail: "Connecting Google Search Console, Google Ads, and CRM pipeline to track closed ARR instead of vanity clicks."
  }
]

export default function Home() {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0)
  const [pricingPeriod, setPricingPeriod] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)
  const [showComparisonTable, setShowComparisonTable] = useState(false)

  // Auto-advance SEO image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % seoHeroSlides.length)
    }, 4600)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % seoHeroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + seoHeroSlides.length) % seoHeroSlides.length)

  const services = useQuery({ queryKey: ['services'], queryFn: fetchServices })
  const caseStudies = useQuery({ queryKey: ['case-studies'], queryFn: fetchCaseStudies })
  const faqs = useQuery({ queryKey: ['faqs'], queryFn: fetchFaqs })
  const packages = useQuery({ queryKey: ['packages'], queryFn: fetchPackages })

  // 6 Integrated SEO & Digital Marketing Workflow Stages
  const workflowStages = [
    {
      step: '01',
      phase: 'Diagnostics & Architecture',
      title: 'Full-Funnel Audit: Technical SEO & Ad Health',
      description: 'We execute full-fidelity crawls with Screaming Frog and Sitebulb, inspect HTTP server logs, eliminate crawl-budget traps, and audit historical Google Ads query bleed to eliminate wasted ad spend.',
      deliverable: '120+ Point Technical SEO Health Audit & Wasted Spend Analysis Matrix',
      tools: ['Screaming Frog', 'Server Access Logs', 'Google Ads Editor', 'Chrome DevTools'],
      metric: '100% Crawl Coverage & Zero Waste'
    },
    {
      step: '02',
      phase: 'Keyword Architecture',
      title: 'Search Intent & Paid-Search Keyword Mapping',
      description: 'We map transactional and informational search queries into topical clusters, matching high-intent buyer journeys directly to Google Knowledge Graph entity nodes and high-converting exact-match PPC groups.',
      deliverable: 'Topical Authority Map, On-Page Matrix & Negative Keyword Architecture',
      tools: ['Ahrefs Enterprise', 'Google Search Console API', 'Semrush', 'Optmyzr'],
      metric: 'Zero Keyword Cannibalization'
    },
    {
      step: '03',
      phase: 'On-Page Optimization',
      title: 'Semantic On-Page Content & Rich Schema Architecture',
      description: 'Optimizing titles, meta tags, heading hierarchies, entity depth, and custom JSON-LD schema (TechArticle, FAQ, Product, LocalBusiness) to capture rich snippets and dominate Google AI Overviews.',
      deliverable: 'On-Page Semantic Optimization & Custom JSON-LD Schema Markup',
      tools: ['Clearscope', 'Surfer SEO', 'Schema.org JSON-LD', 'Google Rich Results Tester'],
      metric: '+44% Average SERP CTR Lift'
    },
    {
      step: '04',
      phase: 'Performance Marketing',
      title: 'High-ROAS PPC Deployment & Landing Page CRO',
      description: 'Deploying laser-targeted Google Search, Performance Max, and Meta campaigns with conversion-tuned, sub-second landing pages designed to maximize pipeline and lower Customer Acquisition Cost (CAC).',
      deliverable: 'High-ROAS Google Ads Architecture & A/B Tested Conversion Funnels',
      tools: ['Google Ads', 'Meta Ads Manager', 'Google Tag Manager', 'Unbounce/Next.js'],
      metric: '4.6x Average ROAS'
    },
    {
      step: '05',
      phase: 'Authority & Local SEO',
      title: 'Off-Page Tier-1 Digital PR & Google Maps 3-Pack',
      description: 'Securing white-hat DR 75+ editorial backlinks through data journalism and survey reports, while synchronizing Google Business Profiles to dominate local Google Maps 3-pack rankings.',
      deliverable: 'Guaranteed Tier-1 Editorial Links & Local Geo-Grid Dominance',
      tools: ['Cision', 'Buzzstream', 'Google Business Profile Manager', 'BrightLocal'],
      metric: 'DR 75+ Links & 88% Map 3-Pack'
    },
    {
      step: '06',
      phase: 'Revenue Attribution',
      title: 'Multi-Channel Telemetry & Looker Studio BI',
      description: 'Connecting Google Search Console, Google Ads, GA4, and your CRM (HubSpot/Salesforce) into unified Looker Studio dashboards, measuring qualified closed pipeline and blended customer acquisition ROI.',
      deliverable: 'Unified Looker Studio Executive Dashboard & Bi-Weekly Sprint Reports',
      tools: ['Looker Studio', 'Google Analytics 4', 'HubSpot / Salesforce', 'BigQuery'],
      metric: 'Direct Closed Revenue Attribution'
    }
  ]

  // Bento layout mapping from dynamic API services
  const technicalService = services.data?.find((s) => s.id === 'technical-seo' || s.slug === 'technical-seo') || services.data?.[0]
  const ppcService = services.data?.find((s) => s.id === 'ppc-performance-marketing' || s.slug === 'ppc-performance-marketing') || services.data?.[6]
  const onPageService = services.data?.find((s) => s.id === 'on-page-seo' || s.slug === 'on-page-seo') || services.data?.[7]
  const offPageService = services.data?.find((s) => s.id === 'off-page-seo' || s.id === 'digital-pr-link-building' || s.slug === 'off-page-seo') || services.data?.[8]
  const localService = services.data?.find((s) => s.id === 'local-seo-multi-location' || s.slug === 'local-seo-multi-location' || s.id === 'local-seo') || services.data?.[5]

  const scrollToHeroContent = () => {
    const el = document.getElementById('hero-overview-content')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.95, behavior: 'smooth' })
    }
  }

  return (
    <main>
      {/* 1. HERO SECTION (FULL SCREEN 50/50 SPLIT ON DESKTOP, FULL SCREEN HERO SLIDER FIRST ON MOBILE) */}
      <section className="hero-editorial-section">
        <div className="hero-editorial-grid">
          {/* Left: Editorial Value Proposition */}
          <div className="hero-text-block" id="hero-overview-content">
              <div className="hero-eyebrow-text">
                <Sparkles size={12} />
                <span>SEO, PPC & Digital Marketing Studio</span>
              </div>

              <h1 className="hero-headline">
                Turn Search & Performance Marketing Into <span className="text-gradient-blue">Sustainable Growth.</span>
              </h1>

              <p className="hero-support-copy">
                We engineer organic search visibility, high-ROAS PPC advertising, on-page semantic architecture, off-page PR authority, and local search dominance.
              </p>

              {/* CTAs */}
              <div className="hero-cta-group">
                <Link to="/contact" className="hero-btn-primary">
                  Get a Free Growth Audit <ArrowUpRight size={15} />
                </Link>
                <Link to="/services" className="hero-btn-secondary">
                  Explore Our Services <ArrowRight size={15} />
                </Link>
              </div>

              {/* Authentic Trust Statement */}
              <div className="hero-trust-statement">
                <ShieldCheck size={16} className="text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong>100% white-hat algorithmic architecture & performance marketing.</strong> We do not rent temporary clicks or buy low-tier link schemes. We engineer technical foundations, on-page relevance, high-ROAS paid search, and compounding brand equity.
                </span>
              </div>
            </div>

            {/* Right: Half-Page SEO Image Slider Showcase */}
            <div className="hero-image-slider-wrapper">
              <div className="hero-image-slider-showcase">
                {seoHeroSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`hero-slide-item ${currentSlide === idx ? 'active-slide' : ''}`}
                    aria-hidden={currentSlide !== idx}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="hero-slide-img"
                      loading={idx === 0 ? "eager" : "lazy"}
                    />
                    <div className="hero-slide-overlay-scrim" />

                    {/* Caption & Detailed Description on Image (Pure Text, No Capsule) */}
                    <div className="hero-slide-caption-box">
                      <span className="hero-slide-tag">{slide.tag} • {slide.badge}</span>
                      <h3 className="hero-slide-title">{slide.title}</h3>
                      <p className="hero-slide-detail">{slide.detail}</p>
                    </div>
                  </div>
                ))}

                {/* Arrow Chevrons on Hover */}
                <button
                  type="button"
                  className="hero-slider-arrow prev"
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="hero-slider-arrow next"
                  onClick={nextSlide}
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Slider Pagination (Pills & Dots just like reference image) */}
                <div className="hero-slider-pagination">
                  {seoHeroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`hero-slider-dot ${currentSlide === idx ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Mobile View Scroll-to-Explore Suggestion Indicator */}
                <button
                  type="button"
                  className="hero-mobile-scroll-indicator"
                  onClick={scrollToHeroContent}
                  aria-label="Scroll down to explore overview"
                >
                  <span>Scroll to explore</span>
                  <ChevronDown size={14} className="hero-bounce-arrow" />
                </button>
              </div>
            </div>
          </div>
      </section>

      {/* 2. TRUST & OPERATING PRINCIPLES SECTION */}
      <section className="operating-principles-section">
        <div className="shell">
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <ShieldCheck size={20} />
              </div>
              <h4>100% White-Hat Algorithmic Safety</h4>
              <p>Strict compliance with Google Search Essentials. No private blog networks (PBNs), zero algorithmic penalty risks, and permanent asset value.</p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Users size={20} />
              </div>
              <h4>Direct Senior Engineer Ownership</h4>
              <p>You collaborate directly with experienced technical SEO architects and growth engineers, never handed off to junior account managers.</p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <BarChart3 size={20} />
              </div>
              <h4>Transparent Live Telemetry</h4>
              <p>Unfiltered access to Looker Studio BI reports, Google Search Console logs, and Jira/Linear task sprint boards. Full visibility 24/7.</p>
            </div>

            <div className="principle-card">
              <div className="principle-icon-wrapper">
                <Lock size={20} />
              </div>
              <h4>Zero Contract Lock-In</h4>
              <p>We earn our engagement every month. Rolling sprint cycles with complete flexibility and full ownership of all code and content assets.</p>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH TECH STACK STRIP ("PATTI") */}
        <div className="tech-stack-fullwidth-strip">
          <div className="stack-marquee-title">
            Enterprise Development Stack & Platforms We Optimize
          </div>
          <LogoMarquee logos={techSkillLogos} className="brand-logo-marquee-strip" />
        </div>
      </section>

      {/* 3. ASYMMETRIC BENTO GRID FOR SERVICES */}
      <section className="bento-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Full-Stack Capabilities</p>
              <h2>Engineered for <em>measurable progress.</em></h2>
            </div>
            <Link className="text-link" to="/services">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-grid">
            {/* Bento Anchor: Enterprise Technical & On-Page SEO (Spans 7 columns) */}
            {technicalService && (
              <article className="bento-card bento-anchor">
                <span className="bento-tag">{technicalService.category || 'Architecture & Crawlability'}</span>
                <h3>{technicalService.title}</h3>
                <p>{technicalService.description}</p>

                {/* Technical Inspector Mockup */}
                <div className="bento-code-preview">
                  <div><span className="keyword">const</span> audit = <span className="keyword">await</span> crawlEngine.<span className="prop">inspect</span>(&#123; target: <span className="string">"yourbrand.com"</span> &#125;);</div>
                  <div><span className="keyword">assert</span>(audit.coreWebVitals.<span className="prop">lcp</span> &lt; <span className="string">"1.2s"</span>); <span className="keyword">// Passed</span></div>
                  <div><span className="keyword">assert</span>(audit.schemaGraph.<span className="prop">hasEntity</span> === <span className="keyword">true</span>); <span className="keyword">// Knowledge Graph Connected</span></div>
                </div>

                {technicalService.deliverables && (
                  <div className="bento-deliverables-pills">
                    {technicalService.deliverables.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="bento-pill">
                        <CheckCircle2 size={12} className="text-blue-600" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="bento-card-footer">
                  <Link to={`/services/${technicalService.slug || technicalService.id}`} className="bento-link">
                    Detailed Architecture Blueprint <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )}

            {/* Bento Side: PPC & Performance Acquisition (Spans 5 columns) */}
            {ppcService && (
              <article className="bento-card bento-side">
                <span className="bento-tag">{ppcService.category || 'Paid Search & Performance Acquisition'}</span>
                <h3>{ppcService.title}</h3>
                <p>{ppcService.description}</p>

                {/* Performance Ads Preview */}
                <div className="bento-code-preview">
                  <div><span className="keyword">const</span> adFunnel = <span className="keyword">await</span> googleAds.<span className="prop">audit</span>(&#123; targetROAS: <span className="string">"4.6x"</span> &#125;);</div>
                  <div><span className="keyword">assert</span>(adFunnel.wastedSpend.<span className="prop">negativePruned</span> === <span className="keyword">true</span>); <span className="keyword">// -42% Waste</span></div>
                  <div><span className="keyword">assert</span>(adFunnel.landingPage.<span className="prop">croOptimized</span> === <span className="keyword">true</span>); <span className="keyword">// High Intent</span></div>
                </div>

                <div className="bento-deliverables-pills">
                  {ppcService.deliverables?.slice(0, 2).map((item, idx) => (
                    <span key={idx} className="bento-pill">
                      <CheckCircle2 size={12} className="text-blue-600" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="bento-card-footer">
                  <Link to={`/services/${ppcService.slug || ppcService.id}`} className="bento-link">
                    Explore Paid Search Blueprint <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )}

            {/* Bento Third: On-Page SEO (Spans 4 columns) */}
            {onPageService && (
              <article className="bento-card bento-third">
                <span className="bento-tag">{onPageService.category || 'On-Page SEO & Search Intent'}</span>
                <h3>{onPageService.title}</h3>
                <p>{onPageService.description}</p>
                <div className="bento-card-footer">
                  <Link to={`/services/${onPageService.slug || onPageService.id}`} className="bento-link">
                    On-Page Blueprint <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )}

            {/* Bento Third: Off-Page SEO & Digital PR (Spans 4 columns) */}
            {offPageService && (
              <article className="bento-card bento-third">
                <span className="bento-tag">{offPageService.category || 'Off-Page SEO & Authority'}</span>
                <h3>{offPageService.title}</h3>
                <p>{offPageService.description}</p>
                <div className="bento-card-footer">
                  <Link to={`/services/${offPageService.slug || offPageService.id}`} className="bento-link">
                    PR & Link Blueprint <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )}

            {/* Bento Third: Local SEO & Multi-Location (Spans 4 columns) */}
            {localService && (
              <article className="bento-card bento-third">
                <span className="bento-tag">{localService.category || 'Local Search & Google Maps'}</span>
                <h3>{localService.title}</h3>
                <p>{localService.description}</p>
                <div className="bento-card-footer">
                  <Link to={`/services/${localService.slug || localService.id}`} className="bento-link">
                    Multi-Location Strategy <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            )}
          </div>

          {/* COMPOUNDING SEARCH & DIGITAL MARKETING FLYWHEEL */}
          <div className="ecosystem-banner">
            <div className="ecosystem-banner-content">
              <div className="ecosystem-lead">
                <h3>The Compounding Search & Performance Flywheel</h3>
                <p>
                  Isolated tactics fail. Sustainable market dominance is achieved when Technical SEO, On-Page Architecture, High-ROAS PPC, and Off-Page Authority reinforce each other continuously.
                </p>
              </div>

              <div className="ecosystem-pillars">
                <div className="ecosystem-pillar-box">
                  <span>Pillar 01</span>
                  <strong>Technical & On-Page SEO</strong>
                  <p>Flawless crawl accessibility, sub-second hydration, semantic titles, and structured JSON-LD entity graphs.</p>
                </div>

                <div className="ecosystem-pillar-box">
                  <span>Pillar 02</span>
                  <strong>High-ROAS PPC Campaigns</strong>
                  <p>Google Search, PMax, and Meta ads with negative keyword pruning and high-converting landing pages.</p>
                </div>

                <div className="ecosystem-pillar-box">
                  <span>Pillar 03</span>
                  <strong>Off-Page & Local Dominance</strong>
                  <p>Tier-1 DR 75+ editorial backlinks, digital PR coverage, and local Google Maps 3-Pack rank tracking.</p>
                </div>
              </div>
            </div>

            <div className="ecosystem-banner-visual-wrap">
              <div className="ecosystem-banner-visual">
                <img src={agencyImages.marketingEcosystem} alt="Full-Funnel Digital Marketing Ecosystem" className="ecosystem-marketing-img" />
              </div>
              <span className="ecosystem-visual-caption">Search, Paid & Performance Synergy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL SEO EXPERTISE: 6-STAGE TECHNICAL WORKFLOW */}
      <section className="workflow-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Real SEO Engineering</p>
              <h2>The 6-stage <em>technical workflow.</em></h2>
            </div>
            <p className="section-intro">
              How our team diagnoses, optimizes, and scales organic search presence from audit to compounding pipeline revenue.
            </p>
          </div>

          <div className="workflow-layout">
            {/* Left: Interactive Timeline Nav */}
            <div className="workflow-timeline-nav">
              {workflowStages.map((stage, idx) => (
                <button
                  key={idx}
                  className={`workflow-stage-btn ${activeWorkflowStage === idx ? 'active' : ''}`}
                  onClick={() => setActiveWorkflowStage(idx)}
                >
                  <div className="stage-btn-meta">
                    <span className="stage-btn-num">Stage {stage.step} • {stage.phase}</span>
                    <span className="stage-btn-title">{stage.title}</span>
                  </div>
                  <ArrowRight size={16} className="stage-btn-arrow" />
                </button>
              ))}
            </div>

            {/* Right: Detailed Inspector Card */}
            <div className="workflow-detail-card">
              <span className="workflow-detail-tag">
                {workflowStages[activeWorkflowStage].phase} • Stage {workflowStages[activeWorkflowStage].step}
              </span>
              <h3>{workflowStages[activeWorkflowStage].title}</h3>
              <p className="workflow-detail-desc">
                {workflowStages[activeWorkflowStage].description}
              </p>

              <div className="workflow-meta-grid">
                <div className="workflow-meta-item">
                  <span>Primary Tooling</span>
                  <strong>{workflowStages[activeWorkflowStage].tools.join(', ')}</strong>
                </div>
                <div className="workflow-meta-item">
                  <span>Standard Of Excellence</span>
                  <strong>{workflowStages[activeWorkflowStage].metric}</strong>
                </div>
              </div>

              <div className="workflow-deliverable-box">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>
                  <strong>Core Deliverable:</strong> {workflowStages[activeWorkflowStage].deliverable}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONSULTING METHODOLOGY FRAMEWORK (DARK CONTRAST) */}
      <section className="methodology-dark-section">
        <div className="shell">
          <div className="section-heading methodology-heading">
            <div>
              <p className="kicker">Strategic Consulting Methodology</p>
              <h2>How we turn search algorithms into <em>revenue machines.</em></h2>
            </div>
            <Link to="/about" className="button button-lime">
              Learn Our Philosophy <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="methodology-steps-grid">
            <div className="methodology-step-card">
              <span className="methodology-num">01 / DISCOVERY</span>
              <h3>Audit & Diagnostics</h3>
              <p>
                We reverse-engineer crawl logs, audit technical debt, profile competitors' backlink graphs, and uncover high-intent search gaps.
              </p>
              <span className="methodology-tag">Sprint 1</span>
            </div>

            <div className="methodology-step-card">
              <span className="methodology-num">02 / STRATEGY</span>
              <h3>Opportunity Mapping</h3>
              <p>
                We architect topic clusters, prioritize engineering fixes by revenue impact, and design an authoritative editorial publishing roadmap.
              </p>
              <span className="methodology-tag">Sprint 2</span>
            </div>

            <div className="methodology-step-card">
              <span className="methodology-num">03 / IMPLEMENTATION</span>
              <h3>Technical Deployment</h3>
              <p>
                Direct code commits for Core Web Vitals, JSON-LD schema injection, high-depth semantic content delivery, and Tier-1 digital PR outreach.
              </p>
              <span className="methodology-tag">Ongoing Sprints</span>
            </div>

            <div className="methodology-step-card">
              <span className="methodology-num">04 / COMPOUNDING</span>
              <h3>Measurement & Refinement</h3>
              <p>
                Real-time Looker Studio telemetry tracking inbound pipeline and conversion rates, continuously iterating as Google algorithms evolve.
              </p>
              <span className="methodology-tag">Compounding</span>
            </div>
          </div>

          {/* Methodology Visual Showcase */}
          <div className="methodology-visual-showcase">
            <div className="methodology-visual-tile">
              <div className="methodology-tile-img-box">
                <img src={agencyImages.visionTelescope} alt="Long-Term Search Vision & Discovery" className="methodology-tile-img" />
              </div>
              <div className="methodology-tile-content">
                <span className="tile-kicker">Vision & Opportunity</span>
                <h4>Algorithmic Horizon Mapping</h4>
                <p>We anticipate search algorithm updates and AI search paradigm shifts to keep your brand ahead.</p>
              </div>
            </div>
            <div className="methodology-visual-tile">
              <div className="methodology-tile-img-box">
                <img src={agencyImages.teamCollab} alt="Collaborative Growth Engineering Squad" className="methodology-tile-img" />
              </div>
              <div className="methodology-tile-content">
                <span className="tile-kicker">Integrated Execution</span>
                <h4>Embedded Strategy Squad</h4>
                <p>Direct collaboration with seasoned search engineers, content strategists, and performance media buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDITORIAL CASE STUDIES PORTFOLIO */}
      <section className="editorial-case-studies-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="kicker">Verified Client Evidence</p>
              <h2>Real companies. <em>Verifiable growth.</em></h2>
            </div>
            <Link className="text-link" to="/case-studies">
              Explore All Case Studies <ArrowRight size={16} />
            </Link>
          </div>

          <div className="editorial-case-grid">
            {caseStudies.data?.slice(0, 2).map((study) => (
              <article className="editorial-case-row" key={study.id}>
                <div className="case-col-text">
                  <span className="case-industry-badge">{study.industry}</span>
                  <h3>{study.title}</h3>
                  <p className="case-summary">{study.summary}</p>

                  <div className="case-metrics-grid">
                    {study.metrics?.map((m) => (
                      <div key={m.label} className="case-metric-cell">
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {study.testimonial && (
                    <blockquote className="case-quote mb-4">
                      "{study.testimonial.quote}"
                      <cite>— {study.testimonial.author}, {study.testimonial.role}</cite>
                    </blockquote>
                  )}

                  <Link to="/case-studies" className="text-link">
                    Read Full Case Breakdown <ArrowRight size={15} />
                  </Link>
                </div>

                <div className="case-col-visual">
                  <img
                    src={study.heroImage || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"}
                    alt={study.title}
                    loading="lazy"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="testimonials-section shell">
        <div className="section-heading text-center-heading">
          <p className="kicker">Client Endorsements</p>
          <h2>Trusted by founders and <em>growth leaders.</em></h2>
        </div>

        <div className="testimonials-grid">
          {initialTestimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="testimonial-metric-badge">{t.metricHighlight}</div>
              <p className="testimonial-text">"{t.review}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.clientName.charAt(0)}</div>
                <div>
                  <strong>{t.clientName}</strong>
                  <span>{t.role}, {t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. REDESIGNED PRICING SECTION */}
      <section className="pricing-redesign-section">
        <div className="shell">
          <div className="section-heading text-center-heading">
            <p className="kicker">Transparent Retainers</p>
            <h2>Plans engineered for your <em>growth stage.</em></h2>
          </div>

          {/* Monthly / Quarterly Billing Toggle */}
          <div className="billing-toggle-container">
            <div className="billing-toggle-btn">
              <button
                className={`billing-pill ${pricingPeriod === 'monthly' ? 'active' : ''}`}
                onClick={() => setPricingPeriod('monthly')}
              >
                Billed Monthly
              </button>
              <button
                className={`billing-pill ${pricingPeriod === 'quarterly' ? 'active' : ''}`}
                onClick={() => setPricingPeriod('quarterly')}
              >
                Quarterly Sprint
              </button>
            </div>
            <span className="discount-badge">Save 15% on Quarterly</span>
          </div>

          {/* 3 Differentiated Pricing Cards */}
          <div className="pricing-cards-trio">
            {packages.data?.map((pkg) => {
              const activePrice = pricingPeriod === 'quarterly'
                ? (pkg.quarterlyPrice || Math.round(pkg.price * 0.85))
                : pkg.price

              return (
                <div
                  key={pkg.id}
                  className={`pricing-card-refined ${pkg.recommended ? 'is-featured' : ''}`}
                >
                  {pkg.recommended && (
                    <div className="pricing-rec-badge">Most Popular Retainer</div>
                  )}

                  <span className="pkg-header-badge">{pkg.badge}</span>
                  <h3>{pkg.name}</h3>
                  <p className="pkg-refined-desc">{pkg.description}</p>

                  <div className="pkg-price-hero">
                    <span className="pkg-price-val">₹{Number(activePrice).toLocaleString('en-IN')}</span>
                    <span className="pkg-price-sub">/ month</span>
                  </div>

                  {/* Included features */}
                  <ul className="pkg-checklist">
                    {pkg.features?.map((f, i) => (
                      <li key={i} className="pkg-checklist-item">
                        <Check size={15} className="pkg-check-icon" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Excluded features if available */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <ul className="pkg-excluded-list">
                      {pkg.notIncluded.map((nf, i) => (
                        <li key={i} className="pkg-excluded-item">
                          <X size={14} className="pkg-excluded-icon" />
                          <span>{nf}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link to={`/book/${pkg.id}`} className="pricing-action-btn">
                    Book This Package <ArrowUpRight size={15} />
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Feature Comparison Matrix Toggle */}
          <div className="text-center mt-6">
            <button
              className="button button-secondary inline-flex items-center gap-2"
              onClick={() => setShowComparisonTable(!showComparisonTable)}
            >
              {showComparisonTable ? 'Hide Detailed Comparison Table' : 'Compare All Detailed Inclusions & SLAs'}
              {showComparisonTable ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {showComparisonTable && (
            <div className="comparison-matrix-wrapper mt-8">
              <table className="comparison-matrix-table">
                <thead>
                  <tr>
                    <th>Capability & Service Level</th>
                    <th>Growth Foundation</th>
                    <th>Scale Engine</th>
                    <th>Enterprise Alpha</th>
                  </tr>
                </thead>
                <tbody>
                  {packageComparisonTable.map((cat, cIdx) => (
                    <Fragment key={cIdx}>
                      <tr className="comparison-cat-row">
                        <td colSpan={4}>{cat.category}</td>
                      </tr>
                      {cat.features.map((f, fIdx) => (
                        <tr key={fIdx}>
                          <td><strong>{f.name}</strong></td>
                          <td>{f.starter}</td>
                          <td><strong>{f.scale}</strong></td>
                          <td>{f.enterprise}</td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* 9. ACCORDION FAQ */}
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="kicker">Frequently Answered</p>
            <h2>No agency jargon.<br /><em>Honest, direct answers.</em></h2>
          </div>
        </div>

        <div className="faq-accordion-container">
          {faqs.data?.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div className={`faq-card ${isOpen ? 'active-faq' : ''}`} key={faq.id}>
                <button
                  className="faq-question-btn"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon-wrapper">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 10. FINAL HIGH-CONVERTING CTA */}
      <section className="final-cta shell">
        <div>
          <p className="kicker">Discuss Your Growth</p>
          <h2>Ready to turn search intent into your <em>most predictable revenue channel?</em></h2>
          <p className="final-cta-desc">
            Request our comprehensive 80-point confidential technical audit. We’ll analyze your domain, identify competitor weaknesses, and hand you an actionable engineering roadmap.
          </p>
        </div>
        <div className="final-cta-actions">
          <Link to="/contact" className="button button-lime">
            Discuss Your Project <ArrowUpRight size={18} />
          </Link>
          <Link to="/services" className="text-link-white">
            Explore Our Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
