/**
 * ERIC ANTHONY — SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER
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
      metric2_desc: "Streamlined mobile purchase and policy issuance flows at GoPay, cutting API latency by 30% and lifting customer conversion rates by 15–20%.",

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
      c2_outcome: "Achieved a ~30% reduction in screen loading latency, lifted customer insurance purchase conversion by 15–20%, and delivered all launches with zero critical production incidents.",
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
      c4_challenge: "The client had previously bought a POS app from another developer who disappeared after delivery — leaving behind critical bugs, zero after-sales support, and painful response delays. Frustrated store staff were forced back to slow manual paper filing for lens prescriptions.",
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
      proc_subtext: "From initial business discovery to live launch and post-release support — no guesswork, no technical confusion, and no endless meetings.",
      proc1_title: "1. Discovery & Strategic Alignment",
      proc1_text: "We deep-dive into your revenue goals, customer journey, and essential feature scope. We eliminate bloat and define a clear, high-ROI MVP roadmap.",
      proc2_title: "2. Rapid Milestone Execution",
      proc2_text: "Clean, modular builds delivered in focused 2–6 week milestones with continuous staging previews. You see real progress every single week.",
      proc3_title: "3. Real-World Testing & Staff Training",
      proc3_text: "Rigorous payment flow testing, stress testing, and complete admin walkthroughs so your internal team can operate the system effortlessly.",
      proc4_title: "4. Flawless Launch & Post-Release Support",
      proc4_text: "Zero-downtime deployment to production with post-launch technical warranty and ongoing performance monitoring for total peace of mind.",

      s4_eyebrow: "ENTERPRISE TRACK RECORD",
      s4_heading: "Trusted by Industry Leaders & Fast-Growing Companies",
      s4_subtext: "Over 7 years of senior engineering experience delivering business outcomes across Southeast Asia's leading unicorns, conglomerates, and global brands.",

      acad_tag: "ACADEMIC FOUNDATION & CAREER TIMELINE",
      acad_title: "Bachelor of Information Systems — Universitas Tarumanagara",
      acad_desc: "Engineering professionally since 2018 alongside university studies (graduated 2024 with published research on academic management systems in the peer-reviewed JIKSI journal), following intensive graduate web engineering training at Purwadhika Startup & Coding School.",

      tech_cv_tag: "TECHNICAL ARCHITECTURE & DEEP-DIVE",
      tech_cv_title: "Looking for Technical Code Demos & Full-Time Engineer CV?",
      tech_cv_desc: "Explore my dedicated software engineering portfolio featuring interactive terminal interfaces, WebGL animations, and distributed backend architecture matrix.",
      tech_cv_btn: "Explore Developer Portfolio →",

      ent_eyebrow: "ENTERPRISE SCALE & CAREER FOUNDATION",
      ent_heading: "Scalable Architectures Powering Millions of Daily Users",

      price_eyebrow: "ENGAGEMENT MODELS",
      price_heading: "Transparent Engagements Tailored to Your Growth Stage",
      price_subtext: "Clear milestone scopes, direct technical ownership, and zero agency overhead.",

      faq_eyebrow: "COMMON QUESTIONS",
      faq_heading: "Everything You Need to Know Before Working Together",
      faq_subtext: "Clear answers on code ownership, warranties, NDAs, and payment methods.",

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
      brand_role: "PARTNER PRODUK & TEKNOLOGI BISNIS",
      nav_results: "Hasil",
      nav_cases: "Studi Kasus",
      nav_capabilities: "Layanan",
      nav_process: "Alur Kerja",
      nav_track: "Pengalaman",
      nav_tech_cv: "CV Engineer ↗",
      nav_cta: "Yuk Konsultasi",
      status_text: "Available untuk Proyek Terpilih",
      drawer_footer: "Siap bantu untuk konsultasi proyek, build dari nol, hingga technical lead full-time.",

      hero_badge: "7+ TAHUN BIKIN PLATFORM DIGITAL CUAN & TAHAN BANTING",
      hero_title: 'Ubah ide kompleks kamu jadi <span class="text-highlight">produk digital yang cetak omzet</span> dan siap scale ke jutaan user.',
      hero_subtitle: 'Bantu founder, pebisnis, dan tim produk bangun web app super ngebut, automasi AI pintar, hingga aplikasi mobile yang siap pakai. Fokusnya jelas: <strong>akuisisi user lebih cepat, pangkas biaya server cloud sampai 80%, dan anti-down saat launching</strong>.',
      hero_cta_primary: "Yuk, Ngobrolin Proyek Kamu",
      hero_cta_secondary: "Lihat Hasil & Portofolio",

      metric1_tag: "Hemat Biaya",
      metric1_title: "Pangkas Tagihan Server & Cloud",
      metric1_desc: "Beresin struktur database dan cache di platform streaming audio Noice, bikin tagihan server bulanan drop sampai 80% tanpa ngurangin performa.",

      metric2_tag: "Konversi Naik",
      metric2_title: "Checkout Makin Ngebut, Omzet Naik",
      metric2_desc: "Bikin proses beli asuransi di GoPay jadi 30% lebih kencang, sukses ningkatin konversi penjualan sampai 15–20%.",

      metric3_tag: "Anti-Crash",
      metric3_title: "Launching Mulus, Zero-Downtime",
      metric3_desc: "Rilis berbagai platform fintech dan e-commerce ke jutaan user tanpa drama server crash atau bug fatal.",

      s1_eyebrow: "KENAPA KERJA BARENG SAYA?",
      s1_heading: "Codingan jago itu biasa. Yang penting: bikin bisnis kamu makin cuan dan operasional makin enteng.",
      s1_subtext: "Teknologi canggih nggak ada gunanya kalau nggak ngasilin impact nyata buat bisnis. Setiap baris kode yang saya bikin dirancang buat naikin konversi, hemat budget, dan bikin user kamu betah.",

      val1_title: "Performa Super Ngebut, Konversi Melesat",
      val1_text: "Web yang lelet bikin calon pembeli kabur. Saya bikin aplikasi yang instan kebuka dan alur checkout super mulus (Stripe, QRIS, Virtual Account, Apple Pay) biar user langsung bayar tanpa mikir dua kali.",

      val2_title: "Tekan Biaya Server Sampai Mentok",
      val2_text: "Nggak perlu bakar duit buat hosting mahal. Dengan arsitektur yang rapi dan efisien, pengeluaran cloud bulanan bisa ditekan drastis tanpa ngorbanin kecepatan.",

      val3_title: "Sistem Kebal Crash & Anti-Down",
      val3_text: "Nggak perlu panik server jebol pas lagi promo besar-besaran atau viral. Sistem dibangun tahan banting dengan backup otomatis dan pelacakan transaksi anti-gagal.",

      val4_title: "Eksekusi Cepat, Nggak Pake Ribet",
      val4_text: "Nggak perlu nunggu meeting berminggu-minggu. Dari desain UI, sistem backend, sampai approval App Store dan siap rilis, semuanya dieksekusi gesit dalam hitungan minggu.",

      s2_eyebrow: "HASIL NYATA & PORTFOLIO",
      s2_heading: "Kisah Sukses Produk Digital yang Udah Berhasil Scale",
      s2_subtext: "Lihat gimana saya bantu berbagai brand global, startup unicorn, sampai bisnis retail modernisasi sistem dan raih jutaan user.",

      story_challenge: "TANTANGAN BISNIS",
      story_solution: "SOLUSI YANG DIBIKIN",
      story_outcome: "HASIL NYATA",
      visit_platform: "Lihat Platform Live",

      c1_client: "E-COMMERCE & TRAVEL GLOBAL",
      c1_badge: "Checkout Global Multi-Mata Uang + AI",
      c1_title: "The Luxe Week: Rebuild Platform Mewah Global + AI Asisten Penjualan 24/7",
      c1_challenge: "Brand travel mewah global kewalahan pakai sistem lama yang lelet, nggak bisa terima cicilan Apple Pay/Google Pay multi-mata uang, dan tim sales keteteran balas chat prospek.",
      c1_solution: "Bikin ulang web platform super kencang dari nol, pasang sistem pembayaran multi-mata uang Stripe, dan bikin asisten AI yang otomatis kualifikasi calon pembeli langsung ke CRM.",
      c1_outcome: "Booking internasional dari USD, EUR, sampai GBP melonjak mulus dengan checkout instan Apple Pay dan prospek otomatis di-handle AI non-stop 24 jam.",
      c1_tag1: "Platform Web Kustom",
      c1_tag2: "Stripe Multi-Currency",
      c1_tag3: "AI Sales Agent",
      c1_tag4: "Integrasi CRM",

      c2_client: "GOTO FINANCIAL / GOPAY",
      c2_badge: "Jutaan Pengguna Aktif",
      c2_title: "GoPay Insurance: Bikin Pembelian Asuransi Digital 30% Lebih Kencang & Konversi Naik",
      c2_challenge: "GoPay butuh sistem underwriting dan tagihan langganan otomatis yang instan buat jutaan user aktif harian tanpa boleh ada error.",
      c2_solution: "Rancang backend transaksi inti, algoritma rekomendasi pintar, sistem auto-debet bulanan, dan optimasi tampilan layar aplikasi.",
      c2_outcome: "Waktu loading layar 30% lebih gesit, konversi beli asuransi naik 15–20%, dan seluruh produk live mulus tanpa insiden.",
      c2_tag1: "Core Engine Fintech",
      c2_tag2: "Langganan Otomatis",
      c2_tag3: "Respon 30% Lebih Cepat",
      c2_tag4: "Zero Downtime",

      c3_client: "SINARMAS GROUP / 1ENGAGE",
      c3_badge: "1 Juta+ Pesan Broadcast Tiap Hari",
      c3_title: "1Engage: Broadcast WhatsApp Massal & Cloud Call Center Tanpa Hardware Mahal",
      c3_challenge: "Perusahaan butuh kirim jutaan pesan WhatsApp promosi sekaligus dan call center fleksibel tanpa beli alat telepon kantor yang mahal.",
      c3_solution: "Bangun platform SaaS 1Engage: integrasi WhatsApp Business Cloud API untuk broadcast massal dan bikin call center langsung dari browser.",
      c3_outcome: "Bisa kirim 1.000.000+ pesan broadcast per hari dengan delivery rate tinggi dan telepon masuk otomatis dibagikan ke tim customer service.",
      c3_tag1: "WhatsApp Business API",
      c3_tag2: "Cloud Call Center",
      c3_tag3: "Skala 1 Juta+ Harian",
      c3_tag4: "SaaS Enterprise",

      c4_client: "RETAIL & KLINIK OPTIK",
      c4_badge: "Penyelamatan Sistem + Garansi After-Sales & AI",
      c4_title: "Optics POS: Penyelamatan Sistem Kasir Toko Kacamata + Asisten AI & Garansi After-Sales",
      c4_challenge: "Klien sebelumnya sempat beli aplikasi kasir dari developer lain, tapi malah ditinggal kabur (ghosting). Aplikasinya penuh bug fatal, respon developernya lambat banget dan susah dihubungi, serta nggak ada after-sales sama sekali. Karyawan toko pun terpaksa balik cari resep kacamata manual di laci arsip.",
      c4_solution: "Saya ambil alih penuh sistemnya: beresin semua bug yang ada, rapikan alur transaksi kasir, berikan pendampingan after-sales intensif dan training staf, serta pasang chatbot AI pintar yang bisa ditanya stok dan riwayat resep kacamata pakai bahasa sehari-hari.",
      c4_outcome: "Waktu layani pelanggan dan transaksi checkout kepangkas lebih dari 50%. Klien merasa jauh lebih tenang dan puas dengan tanggung jawab serta after-sales yang gercep, bahkan bilang: \"Coba dari awal ketemunya sama Eric!\"",
      c4_tag1: "Penyelamatan Sistem (Rescue)",
      c4_tag2: "Garansi After-Sales Gercep",
      c4_tag3: "Chatbot AI Inventaris",
      c4_tag4: "Manajemen Resep Lensa",

      c5_client: "PASAR AFRIKA ON-DEMAND",
      c5_badge: "4 Aplikasi Mobile Terhubung",
      c5_title: "Niosoapp: Backend Super-App Ojek Online, Makanan & Kurir Logistik",
      c5_challenge: "Startup Afrika butuh platform all-in-one buat ojek online, pesan makan, dan kurir paket yang sinkron ke 4 aplikasi mobile sekaligus.",
      c5_solution: "Bangun arsitektur backend real-time, sistem matching driver terdekat via GPS live, dan alur transaksi instan.",
      c5_outcome: "Ekosistem 4 aplikasi sukses rilis ke pasar dan beroperasi lancar layani ribuan trip tiap hari.",
      c5_tag1: "Backend Super-App",
      c5_tag2: "Pelacakan GPS Live",
      c5_tag3: "Ekosistem Multi-Aplikasi",
      c5_tag4: "Logistik On-Demand",

      m1_tag: "E-COMMERCE MOBILE",
      m1_title: "Splitoff Fashion Retail Platform",
      m1_desc: "Bikin backend API dan sistem transaksi kencang yang jalanin aplikasi belanja iOS dan Android di Play Store & App Store.",

      m2_tag: "EKONOMI KREATOR",
      m2_title: "Socialbread Marketing Platform",
      m2_desc: "Marketplace yang hubungin UMKM dengan influencer media sosial, lengkap dengan pelacakan performa kampanye dan pembayaran otomatis.",

      m3_tag: "HEALTH-TECH",
      m3_title: "Halodoc B2B Enterprise Portals",
      m3_desc: "Modernisasi portal kesehatan korporat, bikin dashboard super cepat buat klien enterprise Halodoc.",

      m4_tag: "STREAMING AUDIO",
      m4_title: "Noice Platform (Hemat Server 80%)",
      m4_desc: "Optimasi penyimpanan data dan cache platform audio Noice, sukses pangkas tagihan server bulanan ~80%.",

      s3_eyebrow: "LAYANAN & SOLUSI",
      s3_heading: "Solusi Produk Digital yang Siap Bantu Bisnis Kamu",
      s3_subtext: "Mau bikin produk SaaS baru dari nol atau benerin platform yang ada biar makin ngebut dan hemat budget? Ini yang bisa saya bantu:",

      srv1_title: "Bikin Web App & SaaS Kustom",
      srv1_text: "Platform web lengkap yang dirancang buat jualan, konversi tinggi, dan siap scale. Termasuk tampilan modern, sistem login aman, langganan bulanan, dan dashboard admin komplit.",
      srv1_i1: "Portal Pelanggan & SaaS Berlangganan",
      srv1_i2: "Integrasi Pembayaran Global & Lokal (Stripe, QRIS, VA BCA/Mandiri)",
      srv1_i3: "Onboarding User & Dashboard Admin Komplit",

      srv2_title: "Automasi AI & Chatbot Pintar",
      srv2_text: "Otomatiskan customer support dan alur kerja internal pakai asisten AI kustom yang bisa jualan 24/7, cari database otomatis, dan sinkron ke CRM kamu.",
      srv2_i1: "Asisten AI Sales & Customer Care 24/7",
      srv2_i2: "Pencarian Database & Stok Pakai Bahasa Santai",
      srv2_i3: "Automasi Alur Kerja CRM (CloseCRM, Meta API)",

      srv3_title: "Backend Mobile App & Fitur Real-Time",
      srv3_text: "Infrastruktur berkapasitas besar buat aplikasi iOS & Android, fitur chat instan, pelacakan GPS driver langsung, sampai panggilan suara WebRTC.",
      srv3_i1: "REST & WebSocket API Super Kencang",
      srv3_i2: "Fitur Chat Real-Time & Panggilan Suara",
      srv3_i3: "Deploy Backend Siap Rilis ke App Store & Play Store",

      srv4_title: "Beresin Web Lelet & Sunat Biaya Server",
      srv4_text: "Perbaiki aplikasi yang lambat dan hentikan tagihan cloud hosting yang membengkak. Saya cari akar masalahnya biar loading makin kencang dan hemat biaya server sampai 80%.",
      srv4_i1: "Pangkas Tagihan Server Hingga 80%",
      srv4_i2: "Kecepatan Loading 30%+ Lebih Kencang",
      srv4_i3: "Migrasi Mulus Tanpa Downtime",

      proc_eyebrow: "ALUR KOLABORASI",
      proc_heading: "Alur Kerja 4 Langkah: Transparan, Cepat, dan Jelas",
      proc_subtext: "Dari diskusi target omzet awal hingga peluncuran live dan pendampingan paska-rilis — tanpa tebak-tebakan, tanpa istilah bikin pusing, dan tanpa meeting bertele-tele.",
      proc1_title: "1. Diskusi Kebutuhan & Target Omzet",
      proc1_text: "Kita bedah target bisnis, alur transaksi pelanggan, dan fitur wajib yang benar-benar ngasilin cuan. Nggak ada fitur mubazir yang bikin buang budget.",
      proc2_title: "2. Eksekusi Cepat Bertahap (2–6 Minggu)",
      proc2_text: "Pengerjaan sistem secara transparan dan terukur dalam 2–6 minggu sesuai skala proyek. Kamu bisa pantau langsung progress-nya tiap minggu.",
      proc3_title: "3. Uji Coba Transaksi & Training Tim",
      proc3_text: "Simulasi transaksi nyata dan panduan penggunaan sistem yang gampang dipahami, biar tim admin/kasir kamu langsung lancar pakainya.",
      proc4_title: "4. Peluncuran Live & Garansi Pendampingan",
      proc4_text: "Sistem rilis live ke pasar tanpa downtime, lengkap dengan garansi maintenance dan pendampingan teknis biar operasional tenang.",

      s4_eyebrow: "REKAM JEJAK TERPERCAYA",
      s4_heading: "Pernah Dipercaya Unicorn & Perusahaan Ternama",
      s4_subtext: "7+ tahun pengalaman senior engineering yang udah terbukti ngasilin impact nyata buat unicorn, konglomerasi, dan brand global di Asia Tenggara.",

      acad_tag: "BACKGROUND AKADEMIK & PERJALANAN KARIER",
      acad_title: "Sarjana Sistem Informasi — Universitas Tarumanagara",
      acad_desc: "Mulai berkarier profesional di bidang software engineering sejak 2018 sembari menempuh perkuliahan (lulus 2024 dari Universitas Tarumanagara dengan publikasi ilmiah di jurnal JIKSI), setelah menyelesaikan pelatihan engineering intensif di Purwadhika Startup & Coding School.",

      tech_cv_tag: "REKAM JEJAK TEKNIS & KODING",
      tech_cv_title: "Mencari Demo Teknis Kodingan & CV Engineer Full-Time?",
      tech_cv_desc: "Jelajahi portofolio engineering saya yang lengkap dengan terminal interaktif, animasi WebGL, dan arsitektur backend microservices.",
      tech_cv_btn: "Buka Portofolio Engineer →",

      ent_eyebrow: "PENGALAMAN ENTERPRISE & SKALA JUTAAN USER",
      ent_heading: "Sistem Andal yang Melayani Jutaan Transaksi Harian",

      price_eyebrow: "PILIHAN KERJA SAMA",
      price_heading: "Paket Kerja Sama Fleksibel Sesuai Tahap Bisnis Kamu",
      price_subtext: "Target jelas per milestone, kepemilikan kode 100% milik kamu, tanpa birokrasi berbelit.",

      faq_eyebrow: "PERTANYAAN UMUM",
      faq_heading: "Semua yang Perlu Kamu Tahu Sebelum Mulai Proyek",
      faq_subtext: "Transparansi penuh soal hak cipta kode, garansi paska-launch, NDA, hingga opsi pembayaran.",

      cform_eyebrow: "YUK, MULAI PROYEK KAMU",
      cform_title: "Punya ide produk baru atau mau upgrade sistem yang ada?",
      cform_desc: "Baik kamu butuh automasi chatbot untuk bisnis toko/retail maupun platform web skala besar, mari ngobrol santai buat diskusikan solusi paling efisien.",
      trust_timezone: "Waktu Kerja Fleksibel: Siap Kolaborasi Klien Indonesia & Global",
      trust_flexible: "Skala Fleksibel: Dari Projek UMKM Berkembang Sampai Sistem Enterprise",
      direct_email_label: "EMAIL LANGSUNG (KLIK UNTUK COPY)",
      direct_li_label: "PROFIL LINKEDIN",

      form_lbl_name: "Nama Lengkap Kamu",
      form_lbl_email: "Email Bisnis / Perusahaan",
      form_lbl_scope: "Kebutuhan Proyek Kamu",
      opt_placeholder: "Pilih Kebutuhan Proyek Kamu",
      opt_1: "Mau Bikin Web App / SaaS Baru",
      opt_2: "Mau Bikin Automasi AI / Chatbot Pintar",
      opt_3: "Backend Aplikasi Mobile & API",
      opt_4: "Mau Bikin Web Makin Kencang & Hemat Server",
      form_lbl_details: "Ceritain Singkat Rencana Proyek Kamu",
      btn_submit: "Kirim Pesan & Konsultasi",
      btn_submitting: "Mengirimkan Pesan...",
      btn_success: "Pesan Berhasil Terkirim!",

      footer_desc: "Senior Product Engineer & Technical Partner yang bangun produk digital beromzet tinggi.",
      footer_copy: "© 2026 Eric Anthony. All rights reserved.",
      footer_sub: "Berbasis di Jakarta, Indonesia · Melayani Klien Global",
      footer_recruiter_link: "Mencari CV teknis kodingan & rekam jejak engineer? Lihat Portofolio Developer →"
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  const paramLang = urlParams.get('lang');
  let currentLang = (paramLang === 'id' || paramLang === 'en') ? paramLang : (localStorage.getItem('ea_lang') || 'en');

  /* ==========================================================================
     2. LANGUAGE SWITCHER FUNCTIONALITY
     ========================================================================== */
  function applyLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('ea_lang', lang);
    document.documentElement.lang = lang;

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
    if (lang === 'id') {
      document.title = 'Eric Anthony — Partner Produk & Teknologi Bisnis';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'Ubah ide kompleks kamu jadi produk digital beromzet tinggi, automasi AI pintar, dan aplikasi mobile yang hemat server hingga 80% dan scale ke jutaan user.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony — Partner Produk & Teknologi Bisnis');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Ubah ide kompleks kamu jadi produk digital beromzet tinggi yang siap scale ke jutaan user.');
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', 'id_ID');
    } else {
      document.title = 'Eric Anthony — Senior Product Engineer & Technical Partner';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', 'I turn complex ideas into high-revenue digital products, scalable SaaS platforms, and automated AI systems that cut operating costs by 80% and scale to millions of users.');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony — Senior Product Engineer & Technical Partner');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', 'Turn complex ideas into high-revenue digital products, automated AI workflows, and scalable apps that accelerate customer acquisition.');
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.setAttribute('content', 'en_US');
    }
  }

  function initLanguageSwitcher() {
    // Desktop switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    // Mobile switcher buttons
    document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    // Initial language check
    if (currentLang !== 'en') {
      applyLanguage(currentLang);
    }
  }

  /* ==========================================================================
     3. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const drawer = document.getElementById('mobileDrawer');
    const links = document.querySelectorAll('.mobile-drawer__link');

    if (!toggle || !drawer) return;

    toggle.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
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

      const formData = new FormData(form);
      const accessKey = formData.get('access_key');

      // Graceful fallback to mailto if Web3Forms key is not yet set
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_KEY') {
        const name = formData.get('name');
        const email = formData.get('email');
        const scope = formData.get('engagement_type');
        const details = formData.get('message');

        const mailtoUrl = `mailto:ericanthonywu89@gmail.com?subject=${encodeURIComponent('[Client Inquiry] ' + scope)}&body=${encodeURIComponent(`Client Name: ${name}\nBusiness Email: ${email}\nEngagement Goal: ${scope}\n\nProject Scope & Objectives:\n${details}`)}`;
        window.location.href = mailtoUrl;

        status.textContent = currentLang === 'id' 
          ? 'Membuka aplikasi email kamu dengan detail konsultasi...' 
          : 'Launching your email client with inquiry details...';
        status.className = 'form-status is-success';

        if (btnLoading) btnLoading.style.display = 'none';
        if (btnSuccess) btnSuccess.style.display = 'inline';
        submitBtn.disabled = false;
        form.reset();
        return;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          status.textContent = currentLang === 'id' 
            ? 'Terima kasih! Pesan kamu telah diterima. Saya akan follow up dalam waktu 24 jam.' 
            : 'Thank you! Your inquiry has been received. I will follow up within 24 hours.';
          status.className = 'form-status is-success';
          form.reset();
          if (btnLoading) btnLoading.style.display = 'none';
          if (btnSuccess) btnSuccess.style.display = 'inline';
        } else {
          throw new Error(result.message || 'Submission failed');
        }
      } catch (err) {
        status.textContent = currentLang === 'id' 
          ? 'Terjadi kendala pengiriman. Silakan kirim email langsung ke ericanthonywu89@gmail.com.' 
          : 'Submission error. Please email directly to ericanthonywu89@gmail.com.';
        status.className = 'form-status is-error';
        if (btnLoading) btnLoading.style.display = 'none';
        if (btnText) btnText.style.display = 'inline';
        submitBtn.disabled = false;
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
     INITIALIZATION ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    initContactForm();
    initCopyEmail();
    initHeaderScroll();
  });

})();
