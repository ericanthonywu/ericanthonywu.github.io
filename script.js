/**
 * ERIC ANTHONY | SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER
 * Bilingual Executive & Casual Experience Runtime (EN & ID)
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. BILINGUAL TRANSLATION DICTIONARY (EN & ID)
     ========================================================================== */
  const translations = {
    en: {
      skip_link: "Skip to main content",
      brand_role: "PRODUCT & SYSTEMS PARTNER",
      nav_results: "Results",
      nav_cases: "Case Studies",
      nav_capabilities: "Services",
      nav_process: "Process",
      nav_track: "Track Record",
      nav_tech_cv: "Engineer CV ↗",
      nav_cta: "Schedule Consultation",
      status_text: "Accepting Select Projects",
      drawer_footer: "Available for consulting, contract builds, and full-time technical leadership.",

      hero_badge: "7+ YEARS DELIVERING HIGH-ROI DIGITAL PLATFORMS",
      hero_title: 'Transforming complex ideas into <span class="text-highlight">high-revenue digital products</span> that scale to millions.',
      hero_subtitle: 'I partner with founders, executives, and growing businesses to build fast, reliable web platforms, automated AI workflows, and scalable apps that <strong>accelerate customer acquisition, slash cloud bills by 80%, and operate with zero downtime</strong>.',
      hero_cta_primary: "Schedule Project Consultation",
      hero_cta_secondary: "Explore Client Case Studies",

      metric1_tag: "Cost Reduction",
      metric1_title: "Cloud & Server Bill Optimization",
      metric1_desc: "Restructured database and caching architectures for a multi-vertical audio streaming platform, slashing monthly infrastructure costs by 80%.",

      metric2_tag: "Conversion Boost",
      metric2_title: "Checkout Speed & Revenue Growth",
      metric2_desc: "Streamlined mobile purchase and policy issuance flows at GoPay, cutting API latency by 30% and lifting customer conversion rates by 15-20%.",

      metric3_tag: "Launch Reliability",
      metric3_title: "Zero-Downtime Product Releases",
      metric3_desc: "Shipped multiple mission-critical financial and e-commerce platforms from scratch with zero critical launch bugs or outages.",

      s1_eyebrow: "THE EXECUTIVE ADVANTAGE",
      s1_heading: "Why business leaders partner with me to build their flagship platforms.",
      s1_subtext: "Technical brilliance means nothing if it doesn't move the business needle. Every architectural decision I make is directly tied to revenue growth, operational efficiency, and customer satisfaction.",

      val1_title: "Revenue-First Performance",
      val1_text: "Slow pages kill sales. I engineer ultra-responsive web applications and seamless payment checkout flows (Stripe, Apple Pay, Google Pay) that eliminate friction and boost customer purchase conversion.",

      val2_title: "Radical Cost Efficiency",
      val2_text: "You shouldn't need a fortune in cloud hosting to serve high traffic. By writing efficient, clean software, I help companies eliminate bloated server bills and third-party SaaS licenses.",

      val3_title: "Bulletproof Reliability",
      val3_text: "Downtime during a major marketing campaign or launch can ruin a brand. I build battle-tested systems with automated recovery, reliable payment tracking, and zero single points of failure.",

      val4_title: "Rapid Speed to Market",
      val4_text: "No endless committees or communication lag. I handle the entire product lifecycle from user interface design to production deployment and app store approvals, delivering live results in weeks.",

      s2_eyebrow: "PROVEN DELIVERIES",
      s2_heading: "Client Case Studies & High-Impact Outcomes",
      s2_subtext: "Explore how I helped businesses modernize their software, automate customer interactions, and scale to millions of users.",

      story_challenge: "THE BUSINESS CHALLENGE",
      story_solution: "THE SOLUTION",
      story_outcome: "KEY OUTCOME",
      visit_platform: "Visit Live Platform",

      c1_client: "GLOBAL E-COMMERCE & TRAVEL",
      c1_badge: "Multi-Currency Global Checkout + AI",
      c1_title: "The Luxe Week: Global Platform Rebuild & Autonomous AI Sales Concierge",
      c1_challenge: "A premier global luxury travel brand was stuck on an outdated legacy CMS that failed to support international multi-currency checkouts, Apple Pay/Google Pay installment plans, and 24/7 inquiry handling.",
      c1_solution: "Engineered a high-speed custom web platform from the ground up, integrated Stripe multi-currency installment payments, and built an autonomous Python AI concierge connected to CloseCRM to qualify leads automatically.",
      c1_outcome: "Seamless international booking conversions across USD, EUR, and GBP with instant Apple Pay checkout and 24/7 automated sales lead qualification.",
      c1_tag1: "Custom Web Platform",
      c1_tag2: "Stripe Multi-Currency",
      c1_tag3: "Autonomous AI Agent",
      c1_tag4: "CRM Integration",

      c2_client: "GOTO FINANCIAL / GOPAY",
      c2_badge: "Millions of Daily Users",
      c2_title: "GoPay Insurance: Scalable Digital Policy Issuance & 30% Latency Reduction",
      c2_challenge: "GoPay required robust, instant policy underwriting and automated monthly recurring billing for multiple digital insurance products serving millions of active app users.",
      c2_solution: "Built core backend transaction services, personalized product recommendation algorithms, automated payment reconciliation, and optimized mobile screen rendering logic.",
      c2_outcome: "Achieved a ~30% reduction in screen loading latency, lifted customer insurance purchase conversion by 15-20%, and delivered all launches with zero critical production incidents.",
      c2_tag1: "Fintech Core Engine",
      c2_tag2: "Automated Recurring Billing",
      c2_tag3: "30% Faster Response",
      c2_tag4: "Zero Downtime",

      c3_client: "SINARMAS GROUP / 1ENGAGE",
      c3_badge: "1M+ Daily Customer Messages",
      c3_title: "1Engage: Automated Enterprise WhatsApp Broadcasting & Real-Time Call Center",
      c3_challenge: "Enterprise clients needed a reliable way to broadcast marketing campaigns over WhatsApp at high speed and automatically route customer support phone calls to available agents without expensive hardware.",
      c3_solution: "Architected the 1Engage SaaS platform from scratch: integrated Meta WhatsApp Cloud APIs for mass broadcast delivery and engineered a browser-based real-time call center using WebRTC.",
      c3_outcome: "Enabled clients to send over 1,000,000 automated messages daily with high delivery rates and intelligently distribute customer calls across support agents with zero hardware overhead.",
      c3_tag1: "WhatsApp Business API",
      c3_tag2: "Cloud Call Center",
      c3_tag3: "1M+ Daily Scale",
      c3_tag4: "Custom SaaS",

      c4_client: "RETAIL & CLINICAL ERP",
      c4_badge: "System Rescue + Dedicated After-Sales & AI",
      c4_title: "Optics POS: Rescuing an Abandoned Retail System with Reliable After-Sales & AI Search",
      c4_challenge: "The client previously purchased a POS system from another developer who disappeared after delivery, leaving behind critical bugs, zero after-sales support, and painful delays. Frustrated store staff were forced back to manual paper filing for lens prescriptions.",
      c4_solution: "Took full ownership of the project: eliminated legacy bugs, streamlined checkout operations, provided dedicated after-sales support with hands-on staff training, and embedded a conversational AI assistant for instant natural-language stock and prescription queries.",
      c4_outcome: "Cut transaction and prescription lookup times by over 50%. The client gained total peace of mind through responsive after-sales support, remarking: \"I wish we had partnered with Eric from day one.\"",
      c4_tag1: "System Rescue & Fixes",
      c4_tag2: "Dedicated After-Sales",
      c4_tag3: "AI Inventory Chatbot",
      c4_tag4: "Prescription Management",

      c5_client: "AFRICAN MARKET ON-DEMAND",
      c5_badge: "4 Connected Mobile Apps",
      c5_title: "Niosoapp: Ride-Hailing, Food Delivery & Courier Super-App Backend",
      c5_challenge: "A regional startup needed an all-in-one on-demand platform spanning ride-hailing, restaurant food delivery, and courier package tracking across rider, driver, merchant, and admin applications.",
      c5_solution: "Engineered the entire real-time backend architecture, geospatial driver matching, live GPS tracking, and in-app customer communications for all 4 mobile application flows.",
      c5_outcome: "Successfully launched the multi-service super-app to production, handling real-time driver dispatching and transactions smoothly.",
      c5_tag1: "Super-App Backend",
      c5_tag2: "Real-Time GPS Tracking",
      c5_tag3: "Multi-App Ecosystem",
      c5_tag4: "On-Demand Logistics",

      m1_tag: "MOBILE E-COMMERCE",
      m1_title: "Splitoff Fashion Retail Platform",
      m1_desc: "Built robust backend APIs and checkout systems powering iOS and Android shopping apps now active on Google Play Store and Apple App Store.",

      m2_tag: "CREATOR ECONOMY",
      m2_title: "Socialbread Marketing Platform",
      m2_desc: "Scalable marketplace connecting small businesses with social media influencers, handling campaign tracking and automated payments.",

      m3_tag: "HEALTH-TECH",
      m3_title: "Halodoc B2B Enterprise Portals",
      m3_desc: "Modernized enterprise healthcare administration systems, creating high-speed portals for corporate healthcare clients.",

      m4_tag: "AUDIO STREAMING",
      m4_title: "Noice Platform (80% Cost Reduction)",
      m4_desc: "Optimized data storage and caching infrastructure for Indonesia's premier audio streaming platform, reducing monthly server costs by ~80%.",

      s3_eyebrow: "WHAT I DELIVER",
      s3_heading: "End-to-End Digital Product Solutions",
      s3_subtext: "Whether you need a brand-new SaaS product built from scratch or an existing platform rescued and scaled, here is how we can work together.",

      srv1_title: "Custom SaaS & Web Applications",
      srv1_text: "Complete web platforms built for speed, conversion, and scale. Includes modern user interfaces, customer authentication, subscription billing (Stripe), and admin dashboards.",
      srv1_i1: "Customer Portals & Subscription SaaS",
      srv1_i2: "Global & Local Payments (Stripe, QRIS, Virtual Accounts)",
      srv1_i3: "Automated User Onboarding & Dashboards",

      srv2_title: "AI Automation & Intelligent Assistants",
      srv2_text: "Transform customer support and internal workflows with tailored AI assistants that qualify leads, query inventories, and sync data directly with your CRM.",
      srv2_i1: "24/7 AI Customer Sales & Support Agents",
      srv2_i2: "Natural Language Inventory & Database Search",
      srv2_i3: "CRM & Workflow Automation (CloseCRM, Meta APIs)",

      srv3_title: "Mobile App Backends & Real-Time Systems",
      srv3_text: "High-concurrency infrastructure powering iOS and Android mobile apps, real-time messaging, live GPS driver tracking, and WebRTC audio calling.",
      srv3_i1: "Scalable REST & WebSocket APIs",
      srv3_i2: "Real-Time Messaging & Voice Dispatching",
      srv3_i3: "App Store & Play Store Backend Deployment",

      srv4_title: "Platform Scaling & Cloud Cost Slashes",
      srv4_text: "Fix slow, laggy applications and eliminate runaway cloud hosting bills. I profile bottlenecked systems to speed up page loads and cut server expenses by up to 80%.",
      srv4_i1: "Up to 80% Server Bill Reduction",
      srv4_i2: "30%+ Faster Screen Loading Times",
      srv4_i3: "Zero-Downtime Migration from Legacy Systems",

      proc_eyebrow: "HOW WE WORK TOGETHER",
      proc_heading: "A Transparent, High-Speed 4-Step Product Blueprint",
      proc_subtext: "From initial business discovery to live launch and post-release support: zero guesswork, clear technical architecture, and no bloated meetings.",
      proc1_title: "1. Discovery & Strategic Alignment",
      proc1_text: "We deep-dive into your revenue goals, customer journey, and essential feature scope. We eliminate bloat and define a clear, high-ROI MVP roadmap.",
      proc2_title: "2. Rapid Milestone Execution",
      proc2_text: "Clean, modular builds delivered in focused feature milestones with continuous staging previews, accompanied by daily async updates and weekly or monthly progress presentations.",
      proc3_title: "3. Real-World Testing & Staff Training",
      proc3_text: "Rigorous payment flow testing, stress testing, and complete admin walkthroughs so your internal team can operate the system effortlessly.",
      proc4_title: "4. Flawless Launch & Post-Release Support",
      proc4_text: "Zero-downtime deployment to production with complete technical handover and ongoing performance monitoring for total peace of mind.",

      s4_eyebrow: "ENTERPRISE TRACK RECORD",
      s4_heading: "Trusted by Industry Leaders & Fast-Growing Companies",
      s4_subtext: "Over 7 years of senior engineering experience delivering business outcomes across Southeast Asia's leading unicorns, conglomerates, and global brands.",

      acad_tag: "ACADEMIC FOUNDATION & CAREER TIMELINE",
      acad_title: "Bachelor of Information Systems, Universitas Tarumanagara",
      acad_desc: "Engineering professionally since 2018 alongside university studies (graduated 2024 with published research on academic management systems in the peer-reviewed JIKSI journal), following intensive graduate web engineering training at Purwadhika Startup & Coding School.",

      tech_cv_tag: "TECHNICAL ARCHITECTURE & DEEP-DIVE",
      tech_cv_title: "Looking for Technical Code Demos & Full-Time Engineer CV?",
      tech_cv_desc: "Explore my dedicated software engineering portfolio featuring interactive terminal interfaces, WebGL animations, and distributed backend architecture matrix.",
      tech_cv_btn: "Explore Developer Portfolio →",

      c1_role: "Lead Technical Partner",
      c1_scope: "6-Week Sprint",
      c3_role: "Core Architect",
      c3_scope: "SaaS Platform",
      c4_role: "System Rescue & Build",
      c4_scope: "POS + AI",

      ent_eyebrow: "ENTERPRISE SCALE & CAREER FOUNDATION",
      ent_heading: "Scalable Architectures Powering Millions of Daily Users",
      ent_c1_title: "Digital Insurance & Microservices",
      ent_c1_desc: "Built core backend policy underwriting engines, cutting screen latency by 30% and lifting purchase conversion by 15-20% across millions of active app users.",
      ent_c2_title: "Cloud Architecture & Caching (80% Cost Slashes)",
      ent_c2_desc: "Optimized data storage and caching architecture for Indonesia's premier audio streaming platform, slashing monthly cloud hosting bills by ~80%.",
      ent_c3_title: "B2B Healthcare Portals",
      ent_c3_desc: "Modernized enterprise healthcare administration systems, creating high-speed portals for corporate healthcare clients.",
      ent_c4_title: "Creator Economy & Mobile Shopping",
      ent_c4_desc: "Built scalable influencer marketplace systems for Socialbread and mobile retail backend APIs for Splitoff active on the Google Play Store and Apple App Store.",

      price_eyebrow: "ENGAGEMENT MODELS",
      price_heading: "Transparent Engagements Tailored to Your Growth Stage",
      price_subtext: "Clear milestone scopes, direct technical ownership, and zero agency overhead.",
      price1_badge: "MVP / FOCUSED BUILD",
      price1_title: "Sprint Milestone",
      price1_floor: "Milestone-Based",
      price1_desc: "Targeted sprints for launching MVP features, AI sales chatbots, Stripe payment integrations, or critical performance rescues. Scope and timelines are estimated directly per feature requirement.",
      price1_f1: "✓ Defined feature milestone scope",
      price1_f2: "✓ Weekly staging live previews",
      price1_f3: "✓ Complete staging walkthrough & handover",

      price2_badge: "MOST POPULAR",
      price2_title: "0-to-1 Product Build",
      price2_floor: "Custom Project Scope",
      price2_desc: "Complete end-to-end web SaaS or mobile platform architecture from user interfaces to database & payment checkouts, delivered in clear phased milestones based on your product roadmap.",
      price2_f1: "✓ Full stack web & mobile architecture",
      price2_f2: "✓ Global & local payment checkouts",
      price2_f3: "✓ AI automation & CRM integration",
      price2_f4: "✓ Complete admin & staff walkthrough",

      price3_badge: "LONG-TERM PARTNER",
      price3_title: "Fractional Tech Lead",
      price3_floor: "Monthly Retainer",
      price3_desc: "Dedicated senior technical advisory, continuous feature iteration, system scaling, and ongoing cloud hosting cost slashes on an ongoing retainer.",
      price3_f1: "✓ Guaranteed weekly engineering hours",
      price3_f2: "✓ Architecture & security reviews",
      price3_f3: "✓ Priority on-call launch support",

      proc1_step: "STEP 01",
      proc2_step: "STEP 02",
      proc3_step: "STEP 03",
      proc4_step: "STEP 04",

      faq_eyebrow: "COMMON QUESTIONS",
      faq_heading: "Everything You Need to Know Before Working Together",
      faq_subtext: "Clear answers on code ownership, confidentiality, and project delivery.",
      faq1_q: "Who owns the code and intellectual property?",
      faq1_a: "You own 100% of all intellectual property, source code, repositories, and credentials upon milestone delivery. No proprietary lock-in, no hidden licensing fees.",
      faq2_q: "Do you sign a Non-Disclosure Agreement (NDA)?",
      faq2_a: "Yes. I routinely sign mutual NDAs before reviewing proprietary data, trade secrets, or detailed technical specifications with international founders and corporate clients.",

      tz_title: "BASE TIMEZONE: JAKARTA (WIB / UTC+7)",
      tz_status_live: "Working Hours Active",
      tz_overlap_note: "Based in Jakarta (WIB / UTC+7). Flexible and open to coordinating synchronous meeting hours across US, European, and APAC timezones upon discussion.",

      cform_eyebrow: "LET'S BUILD SOMETHING PROFITABLE",
      cform_title: "Ready to launch or scale your digital product?",
      cform_desc: "Whether you are an international startup needing a full-stack technical partner or an Indonesian business scaling operations, let's connect for an initial consultation.",
      trust_timezone: "Global Collaboration: Overlapping with US, Europe & APAC",
      trust_flexible: "Flexible Engagements: Sprints, Full Builds & Fractional Lead",
      direct_email_label: "DIRECT EMAIL (CLICK TO COPY)",
      direct_li_label: "LINKEDIN PROFILE",

      form_lbl_name: "Your Name",
      form_lbl_email: "Business Email",
      form_lbl_scope: "Project Scope / Engagement Type",
      opt_placeholder: "Select Your Project Goal",
      opt_1: "Build New SaaS or Web Application",
      opt_2: "AI Automation or Chatbot Assistant",
      opt_3: "Mobile App Backend & APIs",
      opt_4: "Speed Optimization & Server Cost Slashes",
      form_lbl_details: "Project Details & Timeline",
      btn_submit: "Send Project Inquiry",
      btn_submitting: "Sending Inquiry...",
      btn_success: "Inquiry Sent Successfully!",

      footer_desc: "Senior Product Engineer & Technical Partner building high-ROI digital platforms.",
      footer_copy: "© 2026 Eric Anthony. All rights reserved.",
      footer_sub: "Based in Jakarta, Indonesia · Serving Global Clients",
      footer_recruiter_link: "Looking for technical CV & engineering portfolio? View Engineer CV →"
    },

    id: {
      skip_link: "Lewati ke konten utama",
      brand_role: "SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER",
      nav_results: "Hasil",
      nav_cases: "Studi Kasus",
      nav_capabilities: "Layanan",
      nav_process: "Alur Kerja",
      nav_track: "Pengalaman",
      nav_tech_cv: "CV Engineer ↗",
      nav_cta: "Jadwalkan Konsultasi",
      status_text: "Terbuka untuk Proyek Terpilih",
      drawer_footer: "Membantu perusahaan dan startup berkembang membangun platform digital skala enterprise, optimasi arsitektur cloud, hingga Fractional Tech Lead.",

      hero_badge: "7+ TAHUN MEMBANGUN PLATFORM DIGITAL SKALA ENTERPRISE & HIGH-ROI",
      hero_title: 'Mentransformasi kompleksitas teknis menjadi <span class="text-highlight">produk digital berpendapatan tinggi</span> yang siap scale ke jutaan pengguna.',
      hero_subtitle: 'Bermitra dengan founder, eksekutif bisnis, dan tim produk untuk merekayasa platform web berkinerja tinggi, sistem otomasi AI pintar, dan arsitektur scalable. Berfokus pada <strong>akuisisi pelanggan lebih cepat, efisiensi biaya server hingga 80%, dan reliabilitas peluncuran tanpa downtime</strong>.',
      hero_cta_primary: "Jadwalkan Konsultasi Proyek",
      hero_cta_secondary: "Jelajahi Studi Kasus",

      metric1_tag: "Efisiensi Biaya",
      metric1_title: "Optimasi Biaya Cloud & Server",
      metric1_desc: "Restrukturisasi database dan arsitektur caching pada platform streaming audio Noice, memangkas biaya hosting bulanan hingga 80% tanpa penurunan performa.",

      metric2_tag: "Peningkatan Konversi",
      metric2_title: "Kecepatan Checkout & Pertumbuhan Pendapatan",
      metric2_desc: "Mengoptimalkan alur pembelian asuransi di GoPay dengan pemangkasan latensi 30%, mendorong kenaikan konversi transaksi sebesar 15-20% pada jutaan pengguna aktif.",

      metric3_tag: "Reliabilitas Sistem",
      metric3_title: "Peluncuran Produksi Zero-Downtime",
      metric3_desc: "Merilis berbagai platform finansial dan e-commerce berskala enterprise ke jutaan pengguna secara mulus tanpa kegagalan sistem atau bug kritis.",

      s1_eyebrow: "NILAI STRATEGIS UNTUK BISNIS",
      s1_heading: "Keunggulan rekayasa teknis adalah standar. Fokus utama saya: pertumbuhan bisnis dan efisiensi operasional perusahaan Anda.",
      s1_subtext: "Teknologi terbaik adalah teknologi yang memberikan dampak langsung pada profitabilitas dan efisiensi operasional. Setiap keputusan arsitektur dirancang untuk memaksimalkan rasio konversi, menekan biaya infrastruktur, dan menjamin uptime sistem secara konsisten.",

      val1_title: "Kinerja Cepat, Konversi Maksimal",
      val1_text: "Aplikasi yang lambat menurunkan tingkat konversi. Saya membangun platform berkinerja tinggi dengan alur pembayaran instan (Stripe, QRIS, Virtual Account, Apple Pay) yang menghilangkan friksi transaksi bagi pembeli.",

      val2_title: "Efisiensi Biaya Infrastruktur",
      val2_text: "Pertumbuhan trafik tinggi tidak harus diiringi pembengkakan biaya cloud. Melalui arsitektur yang efisien dan bersih, pengeluaran server bulanan dapat ditekan secara signifikan.",

      val3_title: "Stabilitas & Ketahanan Sistem",
      val3_text: "Menjaga keandalan platform saat menghadapi lonjakan trafik tinggi. Sistem dibangun dengan mekanisme pemulihan otomatis, integritas transaksi yang terjaga, dan tanpa titik kegagalan tunggal (zero single point of failure).",

      val4_title: "Kecepatan Eksekusi yang Terukur",
      val4_text: "Tanpa proses birokrasi yang berlarut-larut. Dari perancangan antarmuka pengguna, arsitektur backend, hingga rilis produksi dan persetujuan App Store, seluruh tahap dieksekusi secara terstruktur dan tepat waktu.",

      s2_eyebrow: "HASIL NYATA & STUDI KASUS",
      s2_heading: "Studi Kasus & Dampak Nyata pada Pertumbuhan Bisnis",
      s2_subtext: "Pelajari bagaimana saya membantu brand internasional, startup terkemuka, dan bisnis retail memodernisasi infrastruktur teknologi dan melayani jutaan pengguna.",

      story_challenge: "TANTANGAN BISNIS",
      story_solution: "SOLUSI TEKNIS",
      story_outcome: "HASIL & DAMPAK",
      visit_platform: "Kunjungi Platform Live",

      c1_client: "E-COMMERCE & TRAVEL GLOBAL",
      c1_badge: "Checkout Global Multi-Mata Uang + AI",
      c1_title: "The Luxe Week: Rebuild Platform Mewah Global + AI Asisten Penjualan 24/7",
      c1_challenge: "Brand perjalanan mewah internasional menghadapi kendala sistem warisan (legacy) yang lambat, keterbatasan pembayaran cicilan multi-mata uang Apple Pay/Google Pay, serta lonjakan pertanyaan prospek 24/7.",
      c1_solution: "Membangun ulang platform web kustom dari awal, mengintegrasikan pembayaran multi-mata uang Stripe, dan mengembangkan asisten AI pintar yang terkoneksi langsung ke CloseCRM untuk kualifikasi prospek otomatis.",
      c1_outcome: "Peningkatan signifikan pada pemesanan internasional lintas USD, EUR, dan GBP dengan integrasi checkout instan Apple Pay serta penanganan prospek otomatis 24 jam.",
      c1_tag1: "Platform Web Kustom",
      c1_tag2: "Stripe Multi-Currency",
      c1_tag3: "AI Sales Agent",
      c1_tag4: "Integrasi CRM",

      c2_client: "GOTO FINANCIAL / GOPAY",
      c2_badge: "Jutaan Pengguna Aktif",
      c2_title: "GoPay Insurance: Optimalisasi Asuransi Digital & Peningkatan Konversi",
      c2_challenge: "GoPay membutuhkan sistem penerbitan polis backend dan pemrosesan langganan otomatis berkinerja tinggi yang siap melayani jutaan pengguna aktif harian.",
      c2_solution: "Merancang backend transaksi inti, alur rekomendasi cerdas, otomasi debit langganan berkala, serta optimalisasi latensi antarmuka aplikasi.",
      c2_outcome: "Pengurangan latensi layar sebesar 30%, peningkatan konversi pembelian asuransi sebesar 15-20%, dan stabilitas penuh pada jutaan transaksi harian.",
      c2_tag1: "Core Engine Fintech",
      c2_tag2: "Langganan Otomatis",
      c2_tag3: "Respon 30% Lebih Cepat",
      c2_tag4: "Zero Downtime",

      c3_client: "SINARMAS GROUP / 1ENGAGE",
      c3_badge: "1 Juta+ Pesan Broadcast Tiap Hari",
      c3_title: "1Engage: Platform Broadcast WhatsApp & Cloud Call Center Enterprise",
      c3_challenge: "Perusahaan memerlukan platform pengiriman pesan promosi WhatsApp berskala jutaan secara andal serta pusat panggilan pelanggan yang fleksibel tanpa ketergantungan perangkat keras mahal.",
      c3_solution: "Mengembangkan platform SaaS 1Engage: mengintegrasikan WhatsApp Business Cloud API untuk broadcast massal dan membangun antarmuka pusat panggilan langsung dari browser menggunakan WebRTC.",
      c3_outcome: "Memproses lebih dari 1.000.000 pesan broadcast harian dengan delivery rate tinggi dan mendistribusikan panggilan pelanggan secara otomatis ke tim pendukung tanpa biaya perangkat keras.",
      c3_tag1: "WhatsApp Business API",
      c3_tag2: "Cloud Call Center",
      c3_tag3: "Skala 1 Juta+ Harian",
      c3_tag4: "SaaS Enterprise",

      c4_client: "RETAIL & KLINIK OPTIK",
      c4_badge: "Penyelamatan Sistem + Dukungan Andal & AI",
      c4_title: "Optics POS: Penyelamatan Sistem POS Retail, Asisten AI & Dukungan Paska-Rilis",
      c4_challenge: "Klien sebelumnya membeli aplikasi POS dari pihak lain yang kemudian ditinggalkan tanpa dukungan lanjutan. Sistem memiliki berbagai bug kritis, performa lambat, dan tidak adanya layanan after-sales, memaksa staf toko kembali mengelola data resep secara manual.",
      c4_solution: "Mengambil alih kepemilikan teknis proyek secara penuh: memperbaiki bug sistem, menyempurnakan alur transaksi kasir, memberikan pelatihan tim, serta menyematkan asisten AI untuk pencarian stok dan riwayat resep kacamata berbasis bahasa natural.",
      c4_outcome: "Waktu transaksi kasir dan pencarian resep terpangkas lebih dari 50%. Klien memperoleh kepastian sistem yang stabil dan pendampingan teknis yang responsif: \"Senang sekali sejak awal bermitra dengan Eric.\"",
      c4_tag1: "Penyelamatan Sistem (Rescue)",
      c4_tag2: "Dukungan Paska-Rilis Andal",
      c4_tag3: "AI Asisten Inventaris",
      c4_tag4: "Manajemen Resep Lensa",

      c5_client: "PASAR AFRIKA ON-DEMAND",
      c5_badge: "4 Aplikasi Mobile Terintegrasi",
      c5_title: "Niosoapp: Backend Super-App Transportasi, Pesan Antar & Logistik",
      c5_challenge: "Startup on-demand di Afrika membutuhkan arsitektur backend terpadu untuk layanan transportasi, pemesanan makanan, dan kurir yang tersinkronisasi di 4 aplikasi mobile berbeda secara real-time.",
      c5_solution: "Membangun arsitektur backend real-time, sistem pencocokan pengemudi berbasis koordinat GPS live, serta alur pemrosesan transaksi yang aman dan cepat.",
      c5_outcome: "Seluruh ekosistem 4 aplikasi berhasil diluncurkan ke pasar dan melayani ribuan perjalanan serta pengiriman harian dengan lancar.",
      c5_tag1: "Backend Super-App",
      c5_tag2: "Pelacakan GPS Live",
      c5_tag3: "Ekosistem Multi-Aplikasi",
      c5_tag4: "Logistik On-Demand",

      m1_tag: "E-COMMERCE MOBILE",
      m1_title: "Splitoff Fashion Retail Platform",
      m1_desc: "Membangun backend API dan sistem transaksi berkinerja tinggi untuk aplikasi mobile iOS dan Android yang aktif di App Store & Play Store.",

      m2_tag: "EKONOMI KREATOR",
      m2_title: "Socialbread Marketing Platform",
      m2_desc: "Platform marketplace yang menghubungkan bisnis dengan kreator media sosial, dilengkapi analitik performa kampanye dan otomasi pembayaran.",

      m3_tag: "HEALTH-TECH",
      m3_title: "Halodoc B2B Enterprise Portals",
      m3_desc: "Modernisasi sistem administrasi kesehatan korporat, menghadirkan portal berkinerja tinggi bagi klien enterprise Halodoc.",

      m4_tag: "STREAMING AUDIO",
      m4_title: "Noice Platform (Efisiensi Server 80%)",
      m4_desc: "Optimasi manajemen data dan sistem caching platform audio Noice, berhasil memangkas biaya server cloud bulanan hingga ~80%.",

      s3_eyebrow: "LAYANAN & KAPABILITAS",
      s3_heading: "Solusi Produk Digital Komprehensif untuk Pertumbuhan Bisnis",
      s3_subtext: "Baik Anda ingin membangun produk SaaS baru dari awal maupun mengoptimalkan platform yang sudah berjalan, berikut solusi yang dapat saya berikan:",

      srv1_title: "Pengembangan Web App & SaaS Kustom",
      srv1_text: "Platform web terpadu yang dirancang untuk konversi tinggi, skalabilitas, dan keamanan. Mencakup antarmuka modern, autentikasi aman, penagihan langganan (Stripe), dan dashboard admin lengkap.",
      srv1_i1: "Portal Pelanggan & SaaS Berlangganan",
      srv1_i2: "Integrasi Pembayaran Global & Lokal (Stripe, QRIS, Virtual Account)",
      srv1_i3: "Onboarding Pengguna & Dashboard Admin Lengkap",

      srv2_title: "Otomasi AI & Intelligent Assistant",
      srv2_text: "Transformasi alur kerja operasional dan customer service dengan asisten AI kustom yang melayani 24/7, query database cerdas, dan sinkronisasi otomatis ke CRM Anda.",
      srv2_i1: "AI Assistant Penjualan & Customer Support 24/7",
      srv2_i2: "Pencarian Inventaris & Data Berbasis Bahasa Alami",
      srv2_i3: "Otomasi Alur Kerja CRM (CloseCRM, Meta API)",

      srv3_title: "Backend Mobile App & Sistem Real-Time",
      srv3_text: "Infrastruktur berkapasitas tinggi untuk aplikasi iOS dan Android, fitur pesan instan, pelacakan armada GPS live, hingga integrasi komunikasi suara WebRTC.",
      srv3_i1: "REST & WebSocket API Berkecepatan Tinggi",
      srv3_i2: "Pesan Instan Real-Time & Panggilan Suara",
      srv3_i3: "Deployment Backend Siap Rilis App Store & Play Store",

      srv4_title: "Optimasi Kecepatan & Efisiensi Biaya Server",
      srv4_text: "Mendiagnosis dan mengatasi performa aplikasi yang lambat serta membengkaknya biaya cloud hosting. Mengoptimalkan sistem hingga loading lebih cepat dan biaya server terpangkas hingga 80%.",
      srv4_i1: "Efisiensi Tagihan Server Cloud Hingga 80%",
      srv4_i2: "Peningkatan Kecepatan Loading 30%+",
      srv4_i3: "Migrasi Sistem Tanpa Downtime",

      proc_eyebrow: "ALUR KERJA KOLABORASI",
      proc_heading: "Alur Kerja 4 Tahap: Transparan, Terstruktur, dan Terukur",
      proc_subtext: "Dari penentuan sasaran bisnis hingga peluncuran produksi dan pendampingan paska-rilis: terbebas dari kerumitan teknis dan fokus pada eksekusi nyata.",
      proc1_title: "1. Diskusi Kebutuhan & Penyelarasan Strategi",
      proc1_text: "Mendalami target bisnis, alur pengguna, dan ruang lingkup fitur utama. Menghilangkan fitur yang tidak perlu dan menyusun roadmap produk yang fokus pada ROI tinggi.",
      proc2_title: "2. Eksekusi Cepat per Milestone",
      proc2_text: "Pengerjaan sistem modular dan terstruktur dalam siklus milestone terarah dengan staging preview berkala, didukung update harian serta sesi presentasi progres mingguan atau bulanan.",
      proc3_title: "3. Pengujian Nyata & Pelatihan Tim",
      proc3_text: "Pengujian alur transaksi secara ketat, uji beban sistem, dan walkthrough komprehensif agar tim internal Anda dapat mengoperasikan sistem dengan lancar.",
      proc4_title: "4. Peluncuran Produksi & Serah Terima Lengkap",
      proc4_text: "Peluncuran sistem ke lingkungan live tanpa downtime, disertai dokumentasi teknis lengkap dan pemantauan kinerja untuk kepastian operasional.",

      s4_eyebrow: "REKAM JEJAK TERPERCAYA",
      s4_heading: "Dipercaya oleh Perusahaan Terkemuka & Bisnis Berkembang",
      s4_subtext: "Lebih dari 7 tahun pengalaman senior engineering menghadirkan dampak bisnis nyata bagi unicorn, konglomerasi, dan brand global di Asia Tenggara.",

      acad_tag: "LATAR BELAKANG AKADEMIK & KARIER",
      acad_title: "Sarjana Sistem Informasi, Universitas Tarumanagara",
      acad_desc: "Berkarier profesional di bidang software engineering sejak 2018 beriringan dengan studi universitas (lulus 2024 dari Universitas Tarumanagara dengan publikasi ilmiah di jurnal JIKSI), setelah menyelesaikan pelatihan engineering intensif di Purwadhika Startup & Coding School.",

      tech_cv_tag: "REKAM JEJAK TEKNIS & PORTOFOLIO REKAYASA",
      tech_cv_title: "Mencari Demo Teknis Koding & CV Software Engineer?",
      tech_cv_desc: "Jelajahi portofolio engineering saya yang lengkap dengan terminal interaktif, visualisasi WebGL, dan arsitektur backend microservices.",
      tech_cv_btn: "Buka Portofolio Engineer →",

      c1_role: "Lead Technical Partner",
      c1_scope: "Sprint 6 Minggu",
      c3_role: "Core Architect",
      c3_scope: "Platform SaaS",
      c4_role: "Penyelamatan & Build Sistem",
      c4_scope: "POS + AI",

      ent_eyebrow: "PENGALAMAN ENTERPRISE & SKALA JUTAAN PENGGUNA",
      ent_heading: "Arsitektur Andal yang Melayani Jutaan Transaksi Harian",
      ent_c1_title: "Asuransi Digital & Microservices",
      ent_c1_desc: "Membangun sistem penerbitan polis backend GoPay, memangkas latensi layar 30% dan mendorong konversi pembelian 15-20% bagi jutaan pengguna aktif.",
      ent_c2_title: "Arsitektur Cloud & Caching (Efisiensi 80%)",
      ent_c2_desc: "Mengoptimalkan arsitektur data dan caching platform audio streaming Noice, memangkas biaya cloud hosting bulanan hingga ~80%.",
      ent_c3_title: "Portal Kesehatan B2B Korporat",
      ent_c3_desc: "Memodernisasi portal administrasi kesehatan korporat, menghadirkan dashboard berkinerja tinggi bagi klien enterprise Halodoc.",
      ent_c4_title: "Platform Kreator & Belanja Mobile",
      ent_c4_desc: "Membangun sistem platform marketplace influencer untuk Socialbread serta backend belanja retail mobile Splitoff yang aktif di Play Store & App Store.",

      price_eyebrow: "MODEL KERJA SAMA",
      price_heading: "Skema Kerja Sama Fleksibel Sesuai Tahap Pertumbuhan Bisnis",
      price_subtext: "Sasaran terarah per milestone, kepemilikan penuh atas kode sumber, tanpa birokrasi berbelit.",
      price1_badge: "MVP / TARGETED BUILD",
      price1_title: "Sprint Milestone",
      price1_floor: "Berbasis Milestone",
      price1_desc: "Siklus pengerjaan terarah untuk peluncuran fitur MVP, integrasi asisten AI, payment gateway Stripe, atau penyelamatan performa. Ruang lingkup dan timeline diestimasi sesuai kompleksitas fitur yang Anda butuhkan.",
      price1_f1: "✓ Ruang lingkup target fitur yang terdefinisi jelas",
      price1_f2: "✓ Preview staging live dan demo berkala",
      price1_f3: "✓ Walkthrough sistem lengkap dan serah terima",

      price2_badge: "PALING DIMINATI",
      price2_title: "0-to-1 Product Build",
      price2_floor: "Sesuai Roadmap Proyek",
      price2_desc: "Pengembangan menyeluruh platform web SaaS atau mobile app dari antarmuka pengguna, arsitektur database, sistem pembayaran, hingga rilis produksi. Terbagi dalam tahapan milestone yang selaras dengan roadmap produk Anda.",
      price2_f1: "✓ Arsitektur full-stack web & mobile app",
      price2_f2: "✓ Integrasi payment gateway lokal & global",
      price2_f3: "✓ Otomasi AI & integrasi CRM",
      price2_f4: "✓ Panduan operasional lengkap untuk tim internal",

      price3_badge: "PARTNER JANGKA PANJANG",
      price3_title: "Fractional Tech Lead",
      price3_floor: "Retainer Bulanan",
      price3_desc: "Pendampingan teknis senior khusus, iterasi fitur berkelanjutan, peninjauan arsitektur & keamanan, serta optimasi efisiensi infrastruktur cloud secara berkesinambungan.",
      price3_f1: "✓ Alokasi jam engineering mingguan yang terjamin",
      price3_f2: "✓ Review keamanan kode & arsitektur sistem",
      price3_f3: "✓ Prioritas dukungan saat peluncuran produksi",

      proc1_step: "LANGKAH 01",
      proc2_step: "LANGKAH 02",
      proc3_step: "LANGKAH 03",
      proc4_step: "LANGKAH 04",

      faq_eyebrow: "PERTANYAAN UMUM",
      faq_heading: "Hal yang Perlu Anda Ketahui Sebelum Memulai Kerja Sama",
      faq_subtext: "Transparansi penuh mengenai kepemilikan kode, kerahasiaan NDA, hingga alur pengerjaan.",
      faq1_q: "Siapa pemilik hak kekayaan intelektual dan kode sumber?",
      faq1_a: "Anda memiliki 100% seluruh hak kekayaan intelektual (IP), repositori kode sumber, dan akses server setelah serah terima selesai. Tanpa biaya lisensi tersembunyi atau keterikatan sepihak.",
      faq2_q: "Apakah Anda bersedia menandatangani perjanjian kerahasiaan (NDA)?",
      faq2_a: "Ya. Saya rutin menandatangani mutual NDA sebelum meninjau data internal, rahasia dagang, atau spesifikasi teknis mendalam bersama para founder dan klien korporat.",

      tz_title: "ZONA WAKTU BASIS: JAKARTA (WIB / UTC+7)",
      tz_status_live: "Jam Kerja Aktif",
      tz_overlap_note: "Berbasis di Jakarta (WIB / UTC+7). Fleksibel dan terbuka untuk penyesuaian jadwal rapat koordinasi lintas zona waktu internasional (US, Eropa, APAC) sesuai kesepakatan bersama.",

      cform_eyebrow: "MARI BANGUN PRODUK DIGITAL ANDA",
      cform_title: "Siap meluncurkan atau mengembangkan platform digital Anda?",
      cform_desc: "Baik perusahaan Anda membutuhkan mitra teknis full-stack untuk inisiatif produk baru maupun modernisasi sistem skala enterprise, mari jadwalkan diskusi awal untuk merumuskan arsitektur terbaik.",
      trust_timezone: "Zona Waktu Fleksibel: Siap Kolaborasi Klien Indonesia & Global",
      trust_flexible: "Skala Fleksibel: Dari Modul MVP Terarah hingga Arsitektur Enterprise",
      direct_email_label: "EMAIL LANGSUNG (KLIK UNTUK SALIN)",
      direct_li_label: "PROFIL LINKEDIN",

      form_lbl_name: "Nama Lengkap Anda",
      form_lbl_email: "Email Bisnis / Perusahaan",
      form_lbl_scope: "Kebutuhan Proyek Anda",
      opt_placeholder: "Pilih Kebutuhan Proyek Anda",
      opt_1: "Pengembangan Web App / SaaS Baru",
      opt_2: "Otomasi AI / Intelligent Assistant",
      opt_3: "Backend Aplikasi Mobile & API",
      opt_4: "Optimasi Performa & Efisiensi Biaya Server",
      form_lbl_details: "Ceritakan Rencana & Kebutuhan Proyek Anda",
      btn_submit: "Kirim Formulir Konsultasi",
      btn_submitting: "Mengirimkan Pesan...",
      btn_success: "Pesan Berhasil Terkirim!",

      footer_desc: "Senior Product Engineer & Technical Partner yang membangun produk digital berkinerja dan berpendapatan tinggi.",
      footer_copy: "© 2026 Eric Anthony. All rights reserved.",
      footer_sub: "Berbasis di Jakarta, Indonesia · Melayani Klien Global",
      footer_recruiter_link: "Mencari CV teknis koding & rekam jejak engineer? Lihat Portofolio Developer →"
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  let currentLang = (paramLang === 'id' || paramLang === 'en') ? paramLang : (localStorage.getItem('ea_lang') || 'en');

  /* ==========================================================================
     2. LANGUAGE SWITCHER FUNCTIONALITY
     ========================================================================== */
  function updateUrlParam(lang) {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get('lang') !== lang) {
        url.searchParams.set('lang', lang);
        window.history.replaceState(null, '', url.pathname + url.search + url.hash);
      }
    } catch (e) {}
  }

  function applyLanguage(lang, updateUrl = true) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ea_lang', lang);
    document.documentElement.lang = lang;

    if (updateUrl) {
      updateUrlParam(lang);
    }

    // Update active class on desktop switchers
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    // Update active class on mobile switchers
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    // Translate all elements with [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update placeholder text in form
    const nameInput = document.getElementById('clientName');
    const emailInput = document.getElementById('clientEmail');
    const detailsInput = document.getElementById('projectDetails');

    if (nameInput) {
      nameInput.placeholder = lang === 'id' ? 'misal: Budi Santoso' : 'e.g. Sarah Jenkins';
    }
    if (emailInput) {
      emailInput.placeholder = lang === 'id' ? 'budi@brandkamu.com' : 'sarah@company.com';
    }
    if (detailsInput) {
      detailsInput.placeholder = lang === 'id' 
        ? 'Jelaskan secara singkat apa yang ingin kamu bangun, target waktu, atau tujuan bisnis kamu...' 
        : 'Tell me briefly about what you are looking to build, desired timeline, or key objectives...';
    }

    // Dynamic SEO Metadata Synchronization
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const metaDesc = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');

    if (lang === 'id') {
      document.title = 'Eric Anthony | Partner Produk & Teknologi Bisnis | Web App & AI Systems';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://ericanthonywu.github.io/?lang=id');
      if (metaDesc) metaDesc.setAttribute('content', 'Ubah ide kompleks kamu jadi produk digital beromzet tinggi, automasi AI pintar, dan aplikasi web/mobile yang hemat server hingga 80% dan scale ke jutaan user.');
      if (metaKeywords) metaKeywords.setAttribute('content', 'Eric Anthony, Partner Teknologi Bisnis, Jasa Pembuatan Website, Jasa Bikin Web App, Developer Chatbot WhatsApp, Konsultan IT Jakarta, Jasa Coding Aplikasi, Fullstack Developer Indonesia, GoPay, 1Engage, Startup Indonesia');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony | Partner Produk & Teknologi Bisnis');
      if (ogDesc) ogDesc.setAttribute('content', 'Bantu founder dan pebisnis bangun web app cepat, automasi chatbot AI, dan aplikasi mobile yang siap melayani jutaan transaksi.');
      if (ogLocale) ogLocale.setAttribute('content', 'id_ID');
      if (twitterTitle) twitterTitle.setAttribute('content', 'Eric Anthony | Partner Produk & Teknologi Bisnis');
      if (twitterDesc) twitterDesc.setAttribute('content', 'Bantu founder dan pebisnis bangun web app cepat, automasi chatbot AI, dan aplikasi mobile yang siap melayani jutaan transaksi.');
    } else {
      document.title = 'Eric Anthony | Senior Product Engineer & Technical Partner';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://ericanthonywu.github.io/?lang=en');
      if (metaDesc) metaDesc.setAttribute('content', 'I turn complex ideas into high-revenue digital products, scalable SaaS platforms, and automated AI systems that cut operating costs by 80% and scale to millions of users.');
      if (metaKeywords) metaKeywords.setAttribute('content', 'Eric Anthony, Senior Product Engineer, Technical Partner, Software Consultant, Hire Fullstack Developer, SaaS Development, AI Chatbot Automation, Cloud Cost Optimization, Web Application Engineer, GoPay, 1Engage, Jakarta, Remote');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (ogDesc) ogDesc.setAttribute('content', 'Turn complex ideas into high-revenue digital products, automated AI workflows, and scalable apps that accelerate customer acquisition.');
      if (ogLocale) ogLocale.setAttribute('content', 'en_US');
      if (twitterTitle) twitterTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (twitterDesc) twitterDesc.setAttribute('content', 'Turn complex ideas into high-revenue digital products, automated AI workflows, and scalable apps that cut operating costs and scale to millions.');
    }
  }

  function initLanguageSwitcher() {
    // Desktop switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang, true);
      });
    });

    // Mobile switcher buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang, true);
      });
    });

    // Initial language application & URL synchronization
    applyLanguage(currentLang, true);
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    const links = document.querySelectorAll('.mobile-drawer__link');

    if (!toggle || !drawer) return;

    const closeDrawer = () => {
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      drawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    links.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
      }
    });
  }

  /* ==========================================================================
     4. CLIENT INQUIRY FORM SUBMISSION (Web3Forms + Mailto Fallback)
     ========================================================================== */
  function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const status = document.getElementById('formStatus');

    if (!form || !submitBtn || !status) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btnText = submitBtn.querySelector('.btn__text');
      const btnLoading = submitBtn.querySelector('.btn__loading');
      const btnSuccess = submitBtn.querySelector('.btn__success');

      if (btnText) btnText.style.display = 'none';
      if (btnLoading) btnLoading.style.display = 'inline';
      submitBtn.disabled = true;
      status.textContent = '';
      status.className = 'form-status';

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      data.access_key = 'e24711e5-ecf8-4265-a880-68e184e1c72e';

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const result = await response.json();

        if (result.success) {
          status.textContent = currentLang === 'id' 
            ? 'Terima kasih! Pesan kamu telah terkirim langsung ke email saya. Saya akan follow up secepatnya.' 
            : 'Thank you! Your inquiry has been sent directly to my email. I will follow up shortly.';
          status.className = 'form-status is-success';
          form.reset();
          if (btnLoading) btnLoading.style.display = 'none';
          if (btnSuccess) btnSuccess.style.display = 'inline';

          setTimeout(() => {
            if (btnSuccess) btnSuccess.style.display = 'none';
            if (btnText) btnText.style.display = 'inline';
            submitBtn.disabled = false;
          }, 4000);
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        // Fallback: If network error or adblocker blocks third-party endpoint, launch mailto
        const mailtoSubject = encodeURIComponent(`[Client Inquiry] ${data.engagement_type || 'New Project'} from ${data.name || 'Website Visitor'}`);
        const mailtoBody = encodeURIComponent(`Name: ${data.name || ''}\nEmail: ${data.email || ''}\nGoal: ${data.engagement_type || ''}\n\nProject Scope & Objectives:\n${data.message || ''}`);
        window.location.href = `mailto:ericanthonywu89@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        status.textContent = currentLang === 'id' 
          ? 'Membuka aplikasi email kamu untuk mengirimkan pesan...' 
          : 'Opening your email client to send message...';
        status.className = 'form-status is-success';

        setTimeout(() => {
          if (btnLoading) btnLoading.style.display = 'none';
          if (btnText) btnText.style.display = 'inline';
          submitBtn.disabled = false;
        }, 3000);
      }
    });
  }

  /* ==========================================================================
     5. COPY EMAIL FUNCTIONALITY
     ========================================================================== */
  function initCopyEmail() {
    const copyBlock = document.getElementById('copyEmailBlock');
    const copyBtn = document.getElementById('copyEmailBtn');
    const emailVal = document.getElementById('emailVal');

    if (!copyBlock || !copyBtn || !emailVal) return;

    const copyAction = (e) => {
      e.preventDefault();
      const email = 'ericanthonywu89@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyBtn.textContent = 'Copied! ✓';
        copyBtn.style.background = '#059669';
        copyBtn.style.color = '#ffffff';
        copyBtn.style.borderColor = '#059669';

        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.style.background = '';
          copyBtn.style.color = '';
          copyBtn.style.borderColor = '';
        }, 2500);
      }).catch(() => {
        window.location.href = `mailto:${email}`;
      });
    };

    copyBlock.addEventListener('click', copyAction);
    copyBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copyAction(e);
    });
  }

  /* ==========================================================================
     6. SMOOTH NAVIGATION HEADER SHADOW ON SCROLL
     ========================================================================== */
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 4px 20px -2px rgba(15, 23, 42, 0.08)';
      } else {
        header.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ==========================================================================
     7. CUSTOM SMOOTH SCROLL TRANSITION (SLOW -> FAST -> SLOW)
     ========================================================================== */
  function initSmoothScroll() {
    let currentAnimId = null;

    // Cubic Ease-In-Out: Starts slow -> accelerates in the middle -> gently glides to a stop
    function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function smoothScrollTo(targetPosition, duration) {
      if (currentAnimId) {
        cancelAnimationFrame(currentAnimId);
        currentAnimId = null;
      }

      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const distance = targetPosition - startPosition;
      if (Math.abs(distance) < 2) return;

      const startTime = performance.now();

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (progress < 1) {
          currentAnimId = requestAnimationFrame(step);
        } else {
          currentAnimId = null;
        }
      }

      currentAnimId = requestAnimationFrame(step);
    }

    // Cancel smooth scroll animation if user interrupts with mouse wheel or touch
    const cancelAnimation = () => {
      if (currentAnimId) {
        cancelAnimationFrame(currentAnimId);
        currentAnimId = null;
      }
    };
    window.addEventListener('wheel', cancelAnimation, { passive: true });
    window.addEventListener('touchmove', cancelAnimation, { passive: true });

    // Intercept all internal anchor link clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;

        const targetElement = document.querySelector(href);
        if (!targetElement) return;

        e.preventDefault();

        const header = document.getElementById('header');
        const headerOffset = header ? header.offsetHeight + 8 : 76;
        const targetPos = Math.max(0, targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset);

        const distance = Math.abs(targetPos - window.pageYOffset);
        // Dynamic duration: scaled between 650ms and 1100ms for natural slow -> fast -> slow momentum
        const duration = Math.min(1100, Math.max(650, Math.round(Math.pow(distance, 0.45) * 38)));

        smoothScrollTo(targetPos, duration);

        try {
          history.pushState(null, '', href);
        } catch (err) {}
      });
    });
  }

  /* ==========================================================================
     8. AMBIENT INTERACTIVE HERO CANVAS & CONSTELLATION NODES
     ========================================================================== */
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas || !canvas.parentElement) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    window.addEventListener('resize', () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    });

    const particles = [];
    const count = Math.min(32, Math.floor(width / 35));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2
      });
    }

    let mouse = { x: -999, y: -999 };
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
      heroSection.addEventListener('mouseleave', () => {
        mouse.x = -999;
        mouse.y = -999;
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(37, 99, 235, 0.45)';
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.18 * (1 - cdist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ==========================================================================
     9. MAGNETIC BUTTON PHYSICS
     ========================================================================== */
  function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  /* ==========================================================================
     10. LIVE JAKARTA TIMEZONE & AVAILABILITY RUNTIME
     ========================================================================== */
  function initLiveTimezoneClock() {
    const clockWIB = document.getElementById('clockWIB');
    const statusBadge = document.getElementById('tzStatusBadge');
    const statusText = document.getElementById('tzStatusText');

    function updateClocks() {
      const now = new Date();

      const timeFormat = (tz) => {
        try {
          return now.toLocaleTimeString('en-US', {
            timeZone: tz,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
          });
        } catch (e) {
          return '--:--:--';
        }
      };

      if (clockWIB) clockWIB.textContent = `${timeFormat('Asia/Jakarta')} WIB`;

      const jktHourStr = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', hour12: false });
      const jktHour = parseInt(jktHourStr, 10);
      const isWorkHours = jktHour >= 8 && jktHour < 22;

      if (statusBadge && statusText) {
        if (isWorkHours) {
          statusBadge.classList.remove('is-async');
          statusText.textContent = currentLang === 'id' ? 'Jam Kerja Aktif' : 'Working Hours Active';
        } else {
          statusBadge.classList.add('is-async');
          statusText.textContent = currentLang === 'id' ? 'Jadwal Fleksibel' : 'Flexible Scheduling';
        }
      }
    }

    updateClocks();
    setInterval(updateClocks, 1000);
  }

  /* ==========================================================================
     11. LINEAR-GRADE TACTILE SPOTLIGHT GLOW EFFECT
     ========================================================================== */
  function initCardSpotlights() {
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* ==========================================================================
     INITIALIZATION ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initContactForm();
    initCopyEmail();
    initHeaderScroll();
    initSmoothScroll();
    initAmbientCanvas();
    initMagneticButtons();
    initLiveTimezoneClock();
    initCardSpotlights();
  });

})();
