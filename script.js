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
      brand_role: "SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER",
      nav_results: "Why Work With Me",
      nav_cases: "Case Studies",
      nav_capabilities: "Services",
      nav_process: "Process",
      nav_track: "Track Record",
      nav_tech_cv: "Engineer CV ↗",
      nav_cta: "Schedule Consultation",
      status_text: "Available for New Projects",
      drawer_footer: "Senior Product Engineer & Technical Partner helping companies build reliable web applications and scalable backend systems.",

      hero_badge: "SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER",
      hero_title: 'Build and scale <span class="text-highlight">reliable web applications</span> and digital products.',
      hero_subtitle: 'I partner with founders and engineering teams to design, build, and optimize high-performance web platforms, backend APIs, and AI integrations. Backed by 7+ years of senior engineering experience with GoPay, Halodoc, and Noice.',
      hero_cta_primary: "Schedule Project Consultation",
      hero_cta_secondary: "Explore Case Studies",

      hero_metrics_title: "what can i deliver for your business:",

      metric1_stat: "80%",
      metric1_tag: "Cost Reduction",
      metric1_title: "Cloud & Server Bill Optimization",
      metric1_desc: "Restructured database and caching architectures for a multi-vertical audio streaming platform, slashing monthly infrastructure costs by 80%.",

      metric2_stat: "+15–30%",
      metric2_tag: "Conversion Boost",
      metric2_title: "Checkout Speed & Revenue Growth",
      metric2_desc: "Streamlined mobile purchase and policy issuance flows at GoPay, cutting API latency by 30% and lifting customer conversion rates by 15–20%.",

      metric3_stat: "100%",
      metric3_tag: "Launch Reliability",
      metric3_title: "Zero-Downtime Product Releases",
      metric3_desc: "Shipped multiple mission-critical financial and e-commerce platforms from scratch with zero internal deployment downtime (excluding external upstream third-party provider outages).",

      s1_eyebrow: "THE BUSINESS ADVANTAGE",
      s1_heading: "Practical engineering focused on speed, cost efficiency, and uptime.",
      s1_subtext: "Clear technical execution without unnecessary complexity. I manage the architecture, development, and cloud infrastructure so your platform runs efficiently.",

      val1_title: "Fast Loading & Smooth Payments",
      val1_text: "Slow websites lose sales. I ensure your pages load quickly and checkouts (credit cards, Apple Pay, local bank transfers) work effortlessly so customers finish their purchases without friction.",

      val2_title: "Lean & Cost-Efficient Setup",
      val2_text: "You shouldn't overpay for servers or expensive subscriptions you don't need. I build efficient systems that handle high customer traffic while keeping monthly running costs low.",

      val3_title: "Reliable & Worry-Free Operations",
      val3_text: "Your platform shouldn't crash during a marketing campaign or busy weekend. I build stable systems with automated backups and security so your business runs smoothly 24/7.",

      val4_title: "Direct & Fast Execution",
      val4_text: "No middle managers, agency markups, or endless meetings. You work directly with a senior builder who turns your requirements into a working product on a clear schedule.",

      s2_eyebrow: "CLIENT SUCCESS STORIES",
      s2_heading: "Real Client Projects. Real Business Results.",
      s2_subtext: "See how businesses improved customer experience, automated sales inquiries, and modernized their systems.",

      story_challenge: "THE BUSINESS PROBLEM",
      story_solution: "THE SOLUTION",
      story_outcome: "BUSINESS RESULT",
      visit_platform: "Visit Live Platform",

      c1_client: "GLOBAL LUXURY TRAVEL & E-COMMERCE",
      c1_badge: "Global Checkout + 24/7 AI Lead Assistant",
      c1_title: "The Luxe Week: Modern Booking Platform & 24/7 AI Customer Assistant",
      c1_challenge: "The luxury travel company struggled with a slow website that couldn't handle global currencies, easy mobile payments, or high volumes of late-night customer inquiries.",
      c1_solution: "Built a fast, modern website from the ground up, added multi-currency checkouts (USD, EUR, GBP) with Apple Pay, and set up an automated AI assistant to answer and qualify customer leads 24/7.",
      c1_outcome: "Customers worldwide can now book trips easily in their local currency, while the sales team receives pre-qualified customer leads automatically.",
      c1_tag1: "Custom Web Platform",
      c1_tag2: "Global Multi-Currency",
      c1_tag3: "24/7 AI Assistant",
      c1_tag4: "Automated Lead Sync",

      c2_client: "GOTO FINANCIAL / GOPAY",
      c2_badge: "Millions of Active Users",
      c2_title: "GoPay Insurance: Instant Digital Policy Purchasing & 30% Faster Checkouts",
      c2_challenge: "GoPay needed a seamless, instant policy underwriting flow and automatic monthly billing for digital insurance products serving millions of app users.",
      c2_solution: "Engineered core backend transaction flows, personalized product recommendations, automated recurring billing, and optimized checkout screen loading times.",
      c2_outcome: "Reduced screen loading latency by 30%, lifted customer insurance purchase conversion by 15-20%, and delivered stable releases with zero production incidents.",
      c2_tag1: "Fintech Core Engine",
      c2_tag2: "Automated Billing",
      c2_tag3: "30% Faster Response",
      c2_tag4: "High Stability",

      c3_client: "SINARMAS GROUP / 1ENGAGE",
      c3_badge: "Enterprise Messaging & Real-Time Support",
      c3_title: "1Engage: Automated WhatsApp Messaging & Cloud Call Center",
      c3_challenge: "Businesses needed an affordable way to send large-scale broadcast updates over WhatsApp and manage incoming customer phone calls without buying expensive call-center equipment.",
      c3_solution: "Built a web-based platform that sends high-volume WhatsApp messages reliably and lets support agents answer phone calls directly through their web browser.",
      c3_outcome: "Enabled companies to reach thousands of customers instantly and handle support calls from anywhere with zero physical hardware costs.",
      c3_tag1: "WhatsApp Messaging",
      c3_tag2: "Browser Call Center",
      c3_tag3: "High-Volume Delivery",
      c3_tag4: "Custom Business SaaS",

      c4_client: "RETAIL & CLINICAL ERP",
      c4_badge: "System Rescue & Dedicated Training",
      c4_title: "Optics POS: Rescuing an Abandoned Retail System & Training Store Staff",
      c4_challenge: "The optical store was left with a broken, unfinished checkout system after their previous developer disappeared, forcing store staff back to handwriting lens prescriptions on paper.",
      c4_solution: "Took full ownership to fix all checkout errors, added a smart search tool so staff can find patient prescription histories instantly, and provided hands-on staff training with reliable support.",
      c4_outcome: "Cut checkout and prescription lookup times by over 50%, eliminated paper filing, and gave the business owner total peace of mind with responsive technical backing.",
      c4_tag1: "System Rescue & Fixes",
      c4_tag2: "Hands-On Staff Training",
      c4_tag3: "Smart Prescription Search",
      c4_tag4: "Dedicated Support",

      c5_client: "AFRICAN MARKET ON-DEMAND",
      c5_badge: "4 Connected Mobile Apps",
      c5_title: "Niosoapp: Ride-Hailing, Food Delivery & Logistics Backend",
      c5_challenge: "A regional startup needed an all-in-one system connecting riders, drivers, restaurants, and admins in real-time across 4 mobile apps.",
      c5_solution: "Built the centralized real-time backend engine, live GPS driver tracking, and instant customer notifications across the entire app ecosystem.",
      c5_outcome: "Successfully launched the multi-service mobile platform to market, processing daily rides and deliveries smoothly.",
      c5_tag1: "Connected Apps Engine",
      c5_tag2: "Live GPS Tracking",
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
      m4_title: "Noice Platform (~80% Cost Savings)",
      m4_desc: "Restructured data and caching infrastructure for Indonesia's premier audio platform, cutting monthly server hosting bills by ~80%.",

      s3_eyebrow: "HOW I CAN HELP YOU",
      s3_heading: "Complete Technology Solutions for Your Business",
      s3_subtext: "Whether you're starting a new product, adding automation, or fixing an existing system, here is how we can work together:",

      srv1_title: "Custom Web Apps & SaaS Platforms",
      srv1_text: "Launch your custom web application, customer portal, or subscription platform. Includes modern design, secure customer logins, automated billing, and an easy management dashboard for your team.",
      srv1_i1: "Customer Portals & Subscription Memberships",
      srv1_i2: "Global & Local Payments (Credit Cards, QRIS, Bank Transfers)",
      srv1_i3: "Easy-to-Use Admin & Management Dashboards",

      srv2_title: "AI Assistants & Workflow Automation",
      srv2_text: "Save hours of manual work every week. We integrate smart AI assistants into your business to answer customer questions 24/7, search product catalogs instantly, and update your sales CRM automatically.",
      srv2_i1: "24/7 Customer Inquiry AI Assistants",
      srv2_i2: "Instant Product Catalog & Document Search",
      srv2_i3: "Automated Lead Capture & CRM Syncing",

      srv3_title: "Mobile App Backends & Connected Systems",
      srv3_text: "The reliable engine behind your iOS and Android mobile apps. Handles real-time messaging, live GPS tracking, push notifications, and fast data synchronization for your users.",
      srv3_i1: "Fast & Reliable Mobile App Backends",
      srv3_i2: "Live GPS Tracking & Instant In-App Messaging",
      srv3_i3: "App Store & Play Store Launch Ready",

      srv4_title: "Speed Optimization & Server Cost Savings",
      srv4_text: "If your app is loading slowly or your monthly cloud hosting bills keep climbing, I diagnose the root causes, speed up your screens, and eliminate wasted hosting expenses.",
      srv4_i1: "Significant Monthly Server & Cloud Savings",
      srv4_i2: "Faster Screen Loading & Smoother User Experience",
      srv4_i3: "Zero-Downtime Improvements without Disrupting Users",

      price_eyebrow: "WAYS TO WORK TOGETHER",
      price_heading: "Simple, Transparent Engagement Models",
      price_subtext: "Clear milestone deliverables, direct communication, and you own 100% of your code and assets.",
      price1_badge: "FOCUSED SPRINT",
      price1_title: "Specific Feature or Fix",
      price1_floor: "Milestone-Based",
      price1_desc: "Ideal for building a specific feature, adding payment checkouts, setting up an AI assistant, or fixing performance bottlenecks with a defined timeline and scope.",
      price1_f1: "✓ Clearly defined milestone & timeline",
      price1_f2: "✓ Regular progress demos you can test",
      price1_f3: "✓ Complete handover & walkthrough",

      price2_badge: "MOST POPULAR",
      price2_title: "End-to-End Product Build",
      price2_floor: "Custom Project Scope",
      price2_desc: "We take your product from idea to a live, working platform. Covers design, development, payments, and release in clear, manageable stages.",
      price2_f1: "✓ Complete web or mobile platform",
      price2_f2: "✓ Secure payment & checkout setup",
      price2_f3: "✓ Smart automation & customer workflows",
      price2_f4: "✓ Team onboarding & operational training",

      price3_badge: "LONG-TERM PARTNER",
      price3_title: "Dedicated Tech Advisor & Lead",
      price3_floor: "Monthly Retainer",
      price3_desc: "Have an experienced senior engineer on your team without the cost of a full-time executive. Continuous feature improvements, system maintenance, and priority support.",
      price3_f1: "✓ Dedicated weekly engineering hours",
      price3_f2: "✓ Ongoing system health & security checks",
      price3_f3: "✓ Priority on-call support for launches",

      proc_eyebrow: "HOW WE WORK",
      proc_heading: "A Simple 4-Step Process from Idea to Launch",
      proc_subtext: "Clear communication, regular progress updates, and zero technical headaches.",
      proc1_title: "1. Goal & Scope Alignment",
      proc1_text: "We discuss what you want to achieve, who your customers are, and define the essential features to launch without wasted time or budget.",
      proc2_title: "2. Milestone Building & Previews",
      proc2_text: "Work is built in focused stages. You get live preview links to test features as they are built, plus regular plain-language progress updates.",
      proc3_title: "3. Real-World Testing & Training",
      proc3_text: "We test payment flows and edge cases thoroughly, and I walk your team through how to use and manage everything easily.",
      proc4_title: "4. Smooth Launch & Support",
      proc4_text: "We launch your product live, hand over all accounts and credentials, and I provide ongoing support so you have total peace of mind.",

      s4_eyebrow: "ENTERPRISE TRACK RECORD",
      s4_heading: "Trusted by Industry Leaders & Fast-Growing Companies",
      s4_subtext: "Over 7 years of senior engineering experience delivering business outcomes across Southeast Asia's leading tech companies, conglomerates, and global brands.",

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

      ent_eyebrow: "ENTERPRISE EXPERIENCE",
      ent_heading: "Proven Experience with High-Traffic Platforms",
      ent_c1_title: "Digital Insurance & Fast Checkouts",
      ent_c1_desc: "Sped up checkout response times by 30% and lifted purchase conversion by 15-20% for GoPay insurance products.",
      ent_c2_title: "Hosting & Server Cost Savings",
      ent_c2_desc: "Restructured data workflows for audio streaming platform Noice, reducing monthly server bills by ~80%.",
      ent_c3_title: "Corporate Healthcare Portals",
      ent_c3_desc: "Built fast, reliable administrative portals for Halodoc B2B corporate healthcare clients.",
      ent_c4_title: "Creator Marketplaces & Mobile Shopping",
      ent_c4_desc: "Built marketplace systems for Socialbread and retail backend APIs for Splitoff mobile shopping apps.",

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
      faq2_a: "Yes. I routinely sign mutual NDAs before reviewing proprietary data, business details, or project plans with founders and corporate clients.",

      tz_title: "BASE TIMEZONE: JAKARTA (WIB / UTC+7)",
      tz_status_live: "Working Hours Active",
      tz_overlap_note: "Based in Jakarta (WIB / UTC+7). Flexible and open to coordinating synchronous meeting hours across US, European, and APAC timezones upon discussion.",

      cform_eyebrow: "LET'S TALK",
      cform_title: "Ready to build or improve your digital product?",
      cform_desc: "Tell me what you're looking to build or solve, and let's discuss the best, most cost-effective way to get it done.",
      trust_timezone: "Global Collaboration: Overlapping with US, Europe & APAC",
      trust_flexible: "Flexible Engagements: Sprints, Full Builds & Retainers",
      direct_email_label: "DIRECT EMAIL (CLICK TO COPY)",
      direct_li_label: "LINKEDIN PROFILE",

      form_lbl_name: "Your Name",
      form_lbl_email: "Business Email",
      form_lbl_scope: "What is your main project goal?",
      opt_placeholder: "Select Your Project Goal",
      opt_1: "Build a New Web App or SaaS Platform",
      opt_2: "Add AI Assistants or Automate Workflows",
      opt_3: "Build a Mobile App Backend",
      opt_4: "Speed Up Platform & Reduce Server Costs",
      form_lbl_details: "Tell me briefly about your project and timeline",
      btn_submit: "Send Project Inquiry",
      btn_submitting: "Sending Inquiry...",
      btn_success: "Inquiry Sent Successfully!",

      footer_desc: "Senior Product Engineer & Technical Partner helping businesses launch and scale reliable digital products.",
      footer_copy: "© 2026 Eric Anthony. All rights reserved.",
      footer_sub: "Based in Jakarta, Indonesia · Serving Global Clients",
      footer_recruiter_link: "Looking for technical CV & engineering portfolio? View Engineer CV →"
    },

    id: {
      skip_link: "Lewati ke konten utama",
      brand_role: "SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER",
      nav_results: "Nilai Bisnis",
      nav_cases: "Studi Kasus",
      nav_capabilities: "Layanan",
      nav_process: "Alur Kerja",
      nav_track: "Pengalaman",
      nav_tech_cv: "CV Engineer ↗",
      nav_cta: "Jadwalkan Konsultasi",
      status_text: "Tersedia untuk Proyek Baru",
      drawer_footer: "Senior Product Engineer & Technical Partner yang membantu bisnis membangun aplikasi web andal dan sistem backend terukur.",

      hero_badge: "SENIOR PRODUCT ENGINEER & TECHNICAL PARTNER",
      hero_title: 'Bangun dan kembangkan <span class="text-highlight">aplikasi web dan produk digital</span> yang andal.',
      hero_subtitle: 'Saya membantu founder dan perusahaan merancang, membangun, dan mengoptimalkan aplikasi web berkinerja tinggi, backend API, dan integrasi AI. Didukung 7+ tahun pengalaman senior engineering di GoPay, Halodoc, dan Noice.',
      hero_cta_primary: "Jadwalkan Konsultasi Proyek",
      hero_cta_secondary: "Jelajahi Studi Kasus",

      hero_metrics_title: "apa yang bisa saya berikan untuk bisnis anda:",

      metric1_stat: "80%",
      metric1_tag: "Efisiensi Biaya",
      metric1_title: "Optimasi Biaya Cloud & Server",
      metric1_desc: "Menata ulang arsitektur database dan caching untuk platform streaming audio, memangkas biaya infrastruktur bulanan hingga 80%.",

      metric2_stat: "+15–30%",
      metric2_tag: "Peningkatan Konversi",
      metric2_title: "Kecepatan Checkout & Peningkatan Penjualan",
      metric2_desc: "Mengoptimalkan alur transaksi dan penerbitan polis di GoPay, memangkas jeda loading sebesar 30% dan meningkatkan konversi pembelian 15–20%.",

      metric3_stat: "100%",
      metric3_tag: "Keandalan Rilis",
      metric3_title: "Peluncuran Produk Tanpa Downtime",
      metric3_desc: "Meluncurkan berbagai platform finansial dan e-commerce penting dari nol tanpa downtime rilis internal (di luar kendala penyedia pihak ketiga).",

      s1_eyebrow: "NILAI UNTUK BISNIS ANDA",
      s1_heading: "Teknologi praktis yang berfokus pada kecepatan, efisiensi biaya, dan keandalan sistem.",
      s1_subtext: "Eksekusi teknis yang jelas tanpa kerumitan berlebih. Saya mengelola arsitektur, koding, dan deployment agar perangkat lunak Anda beroperasi stabil dan terukur.",

      val1_title: "Website Cepat & Pembayaran Lancar",
      val1_text: "Website yang lambat membuat calon pembeli batal bertransaksi. Saya memastikan halaman web Anda loading instan dan alur pembayaran (kartu kredit, QRIS, transfer bank, Apple Pay) berjalan mulus tanpa hambatan.",

      val2_title: "Hemat Biaya Bulanan & Bebas Pemborosan",
      val2_text: "Anda tidak perlu membayar mahal untuk server atau langganan software yang tidak dibutuhkan. Saya membangun sistem yang efisien dan mampu melayani banyak pengunjung tanpa tagihan hosting membengkak.",

      val3_title: "Sistem Stabil & Bebas Rasa Khawatir",
      val3_text: "Aplikasi Anda tidak boleh error saat promosi besar atau jam sibuk. Sistem dibangun dengan perlindungan keamanan, backup otomatis, dan kestabilan penuh agar bisnis Anda beroperasi 24/7 dengan tenang.",

      val4_title: "Pengerjaan Cepat & Komunikasi Langsung",
      val4_text: "Tanpa perantara birokrasi atau rapat bertele-tele. Anda berkomunikasi langsung dengan senior builder yang mewujudkan kebutuhan Anda menjadi produk nyata sesuai jadwal yang disepakati.",

      s2_eyebrow: "HASIL & STUDI KASUS KLIEN",
      s2_heading: "Proyek Nyata. Hasil Nyata untuk Klien.",
      s2_subtext: "Pelajari bagaimana para klien meningkatkan kepuasan pelanggan, mengotomatisasi pertanyaan prospek, dan memodernisasi sistem mereka.",

      story_challenge: "TANTANGAN BISNIS",
      story_solution: "SOLUSI YANG DIBERIKAN",
      story_outcome: "HASIL NYATA",
      visit_platform: "Kunjungi Platform Live",

      c1_client: "E-COMMERCE & TRAVEL MEWAH GLOBAL",
      c1_badge: "Checkout Global Multi-Mata Uang + AI Asisten 24/7",
      c1_title: "The Luxe Week: Platform Pemesanan Modern & Asisten AI 24 Jam",
      c1_challenge: "Brand perjalanan mewah internasional terkendala website lama yang lambat, tidak mendukung pembayaran mata uang global (USD, EUR, GBP) via Apple Pay, serta kewalahan melayani pertanyaan prospek di malam hari.",
      c1_solution: "Membangun website kustom yang cepat dan elegan dari awal, mengintegrasikan pembayaran multi-mata uang Stripe dengan Apple Pay, dan menyematkan asisten AI untuk menjawab serta menyaring data prospek 24/7.",
      c1_outcome: "Pelanggan dari seluruh dunia dapat memesan paket wisata dengan mata uang lokal mereka secara instan, sementara tim sales menerima data calon pelanggan yang sudah tersaring secara otomatis.",
      c1_tag1: "Platform Web Kustom",
      c1_tag2: "Pembayaran Global Multi-Currency",
      c1_tag3: "Asisten AI 24/7",
      c1_tag4: "Otomasi Data Prospek",

      c2_client: "GOTO FINANCIAL / GOPAY",
      c2_badge: "Melayani Jutaan Pengguna Aktif",
      c2_title: "GoPay Insurance: Pembelian Asuransi Digital & Checkout 30% Lebih Cepat",
      c2_challenge: "GoPay membutuhkan sistem penerbitan polis instan dan pemrosesan langganan otomatis yang stabil untuk jutaan pengguna aplikasi aktif harian.",
      c2_solution: "Merancang alur transaksi backend yang aman, rekomendasi produk pintar, debit otomatis berkala, serta mempercepat waktu respon halaman checkout.",
      c2_outcome: "Waktu loading checkout 30% lebih cepat, kenaikan pembelian asuransi sebesar 15-20%, dan kestabilan penuh tanpa gangguan transaksi.",
      c2_tag1: "Engine Transaksi Fintech",
      c2_tag2: "Langganan Otomatis",
      c2_tag3: "Checkout 30% Lebih Cepat",
      c2_tag4: "Stabilitas Tinggi",

      c3_client: "SINARMAS GROUP / 1ENGAGE",
      c3_badge: "Pesan Promosi Skala Besar & Call Center",
      c3_title: "1Engage: Otomasi Broadcast WhatsApp & Cloud Call Center",
      c3_challenge: "Perusahaan memerlukan cara hemat untuk mengirimkan pesan promosi WhatsApp secara massal serta pusat panggilan pelanggan tanpa harus membeli perangkat keras telepon yang mahal.",
      c3_solution: "Membangun platform berbasis web untuk pengiriman broadcast WhatsApp berskala besar dan memungkinkan tim customer service menjawab panggilan telepon langsung dari browser.",
      c3_outcome: "Klien dapat menjangkau ribuan pelanggan secara instan dan mendistribusikan panggilan dukungan pelanggan dari mana saja dengan biaya perangkat keras nol rupiah.",
      c3_tag1: "Broadcast WhatsApp",
      c3_tag2: "Call Center di Browser",
      c3_tag3: "Pengiriman Skala Besar",
      c3_tag4: "SaaS Bisnis Kustom",

      c4_client: "RETAIL & KLINIK OPTIK",
      c4_badge: "Penyelamatan Sistem & Pelatihan Staf",
      c4_title: "Optics POS: Menyelamatkan Sistem Kasir Toko & Pelatihan Tim",
      c4_challenge: "Pemilik toko optik ditinggalkan oleh pengembang sebelumnya dengan aplikasi kasir yang rusak dan belum selesai, memaksa staf kembali mencatat resep kacamata pelanggan secara manual di kertas.",
      c4_solution: "Mengambil alih proyek secara penuh untuk memperbaiki seluruh error sistem kasir, menambahkan fitur pencarian pintar untuk riwayat resep kacamata, serta memberikan pelatihan langsung bagi seluruh staf toko.",
      c4_outcome: "Waktu transaksi kasir dan pencarian data resep terpangkas hingga lebih dari 50%, meniadakan pencatatan kertas, dan memberi ketenangan pikiran bagi pemilik bisnis dengan dukungan teknis yang selalu siap membantu.",
      c4_tag1: "Perbaikan Sistem (Rescue)",
      c4_tag2: "Pelatihan Langsung Staf",
      c4_tag3: "Pencarian Resep Pintar",
      c4_tag4: "Dukungan Paska-Rilis",

      c5_client: "PASAR AFRIKA ON-DEMAND",
      c5_badge: "4 Aplikasi Mobile Terhubung",
      c5_title: "Niosoapp: Backend Super-App Transportasi, Pesan Antar & Logistik",
      c5_challenge: "Startup on-demand membutuhkan sistem terpusat yang menghubungkan pengguna, pengemudi, restoran, dan admin secara live di 4 aplikasi mobile.",
      c5_solution: "Membangun sistem backend terpusat real-time, pelacakan armada GPS live, dan notifikasi instan di seluruh ekosistem aplikasi.",
      c5_outcome: "Seluruh rangkaian 4 aplikasi berhasil dirilis ke publik dan memproses ribuan perjalanan serta pengiriman harian dengan lancar.",
      c5_tag1: "Sistem Terpusat Real-Time",
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
      m4_title: "Noice Platform (Hemat Server ~80%)",
      m4_desc: "Restrukturisasi alur data platform audio streaming Noice, berhasil memangkas biaya server hosting bulanan hingga ~80%.",

      s3_eyebrow: "LAYANAN UNTUK BISNIS ANDA",
      s3_heading: "Solusi Teknologi Lengkap untuk Bisnis Anda",
      s3_subtext: "Baik untuk membangun produk baru dari awal, menambah otomatisasi, maupun memperbaiki sistem yang lambat, berikut solusi yang dapat saya berikan:",

      srv1_title: "Pengembangan Web App & SaaS Kustom",
      srv1_text: "Luncurkan aplikasi web kustom, portal pelanggan, atau platform langganan bisnis Anda. Lengkap dengan desain modern, login pelanggan yang aman, pembayaran otomatis, dan dashboard admin yang mudah dikelola tim Anda.",
      srv1_i1: "Portal Pelanggan & Layanan Berlangganan",
      srv1_i2: "Pembayaran Global & Lokal (Kartu Kredit, QRIS, Transfer Bank)",
      srv1_i3: "Dashboard Admin & Manajemen yang Mudah Dikelola",

      srv2_title: "Asisten AI & Otomasi Alur Kerja",
      srv2_text: "Hemat waktu kerja tim Anda setiap minggu. Kami menyematkan asisten AI pintar ke dalam bisnis Anda untuk menjawab pertanyaan pelanggan 24/7, mencari data produk instan, dan mencatat data penjualan ke CRM secara otomatis.",
      srv2_i1: "Asisten AI Penjawab Pelanggan 24/7",
      srv2_i2: "Pencarian Katalog Produk & Dokumen Instan",
      srv2_i3: "Pencatatan Data Calon Pembeli & Sinkronisasi CRM",

      srv3_title: "Backend Aplikasi Mobile & Sistem Live",
      srv3_text: "Mesin andal di balik aplikasi mobile iOS dan Android Anda. Menangani fitur pesan instan, pelacakan lokasi GPS live, notifikasi otomatis, dan sinkronisasi data antar pengguna secara cepat.",
      srv3_i1: "Backend Aplikasi Mobile yang Cepat & Stabil",
      srv3_i2: "Pelacakan GPS Live & Pesan Instan Antar Pengguna",
      srv3_i3: "Sistem Siap Rilis ke App Store & Google Play Store",

      srv4_title: "Optimasi Kecepatan & Penghematan Biaya Server",
      srv4_text: "Jika aplikasi Anda loading lambat atau tagihan hosting bulanan terus membengkak, saya mendiagnosis penyebabnya, mempercepat loading layar, dan memangkas pengeluaran server yang tidak perlu.",
      srv4_i1: "Penghematan Signifikan Tagihan Server & Cloud Bulanan",
      srv4_i2: "Loading Layar Lebih Cepat untuk Kenyamanan Pengguna",
      srv4_i3: "Perbaikan Tanpa Downtime dan Tanpa Gangguan Pengguna",

      price_eyebrow: "PILIHAN KERJA SAMA",
      price_heading: "Skema Kerja Sama yang Jelas & Fleksibel",
      price_subtext: "Pengerjaan per milestone yang terarah, komunikasi langsung, dan kepemilikan 100% atas seluruh kode serta aset digital Anda.",
      price1_badge: "FOCUSED SPRINT",
      price1_title: "Fitur Spesifik atau Perbaikan",
      price1_floor: "Berbasis Milestone",
      price1_desc: "Pilihan tepat untuk membangun fitur tertentu, integrasi alur pembayaran, memasang asisten AI, atau memperbaiki kecepatan sistem dengan timeline dan biaya yang jelas per target.",
      price1_f1: "✓ Ruang lingkup target & timeline yang jelas",
      price1_f2: "✓ Preview staging langsung yang bisa Anda coba",
      price1_f3: "✓ Panduan lengkap & serah terima tuntas",

      price2_badge: "PALING DIMINATI",
      price2_title: "Pengembangan Produk Lengkap (0-to-1)",
      price2_floor: "Sesuai Lingkup Proyek",
      price2_desc: "Kami mewujudkan ide produk Anda dari nol hingga menjadi platform live yang siap dipakai. Mencakup desain, pembuatan sistem, integrasi pembayaran, hingga peluncuran dalam tahapan yang rapi.",
      price2_f1: "✓ Platform web atau mobile app lengkap",
      price2_f2: "✓ Pengaturan alur pembayaran yang aman",
      price2_f3: "✓ Otomasi pintar & alur kerja pelanggan",
      price2_f4: "✓ Pelatihan operasional untuk tim Anda",

      price3_badge: "PARTNER JANGKA PANJANG",
      price3_title: "Dedicated Tech Advisor & Lead",
      price3_floor: "Retainer Bulanan",
      price3_desc: "Miliki partner senior engineer di tim Anda tanpa biaya gaji eksekutif penuh. Peningkatan fitur berkelanjutan, pemeliharaan sistem, dan prioritas dukungan teknis.",
      price3_f1: "✓ Alokasi jam engineering mingguan terjamin",
      price3_f2: "✓ Pemeriksaan kesehatan & keamanan sistem berkala",
      price3_f3: "✓ Prioritas dukungan saat peluncuran atau kendala",

      c1_role: "Lead Technical Partner",
      c1_scope: "Sprint 6 Minggu",
      c3_role: "Core Architect",
      c3_scope: "Platform SaaS",
      c4_role: "Penyelamatan & Build Sistem",
      c4_scope: "POS + AI",

      ent_eyebrow: "PENGALAMAN ENTERPRISE",
      ent_heading: "Pengalaman Nyata Membangun Platform Berskala Besar",
      ent_c1_title: "Asuransi Digital & Checkout Cepat",
      ent_c1_desc: "Mempercepat waktu respon checkout sebesar 30% dan mendorong konversi pembelian 15-20% pada produk asuransi GoPay.",
      ent_c2_title: "Penghematan Biaya Hosting & Server",
      ent_c2_desc: "Menata ulang alur data platform streaming audio Noice, memangkas biaya server bulanan hingga ~80%.",
      ent_c3_title: "Portal Kesehatan Korporat B2B",
      ent_c3_desc: "Membangun portal administrasi kesehatan korporat yang cepat dan stabil bagi klien enterprise Halodoc B2B.",
      ent_c4_title: "Marketplace Kreator & Belanja Mobile",
      ent_c4_desc: "Membangun sistem marketplace influencer Socialbread dan sistem transaksi belanja retail mobile Splitoff.",

      proc_eyebrow: "PROSES KERJA",
      proc_heading: "4 Langkah Mudah dari Konsep hingga Peluncuran",
      proc_subtext: "Komunikasi transparan, update berkala dalam bahasa yang mudah dipahami, dan bebas kerumitan teknis.",
      proc1_title: "1. Diskusi Sasaran & Kebutuhan",
      proc1_text: "Kita mendiskusikan tujuan bisnis Anda, siapa pelanggan Anda, dan memprioritaskan fitur-fitur esensial agar produk dapat diluncurkan tepat waktu dan hemat biaya.",
      proc2_title: "2. Pengerjaan & Preview Langsung",
      proc2_text: "Sistem dibangun dalam tahapan terarah. Anda mendapatkan tautan preview live untuk mencoba fitur yang sudah selesai, didukung laporan progres berkala yang mudah dipahami.",
      proc3_title: "3. Pengujian Nyata & Pelatihan Tim",
      proc3_text: "Kita menguji alur pembayaran dan transaksi secara ketat, lalu saya mendampingi tim Anda memahami cara mengelola dan mengoperasikan sistem dengan mudah.",
      proc4_title: "4. Peluncuran Mulus & Dukungan",
      proc4_text: "Sistem diluncurkan ke publik, seluruh akses dan akun diserahterimakan penuh, serta didampingi dukungan paska-rilis agar Anda merasa tenang.",

      s4_eyebrow: "REKAM JEJAK TERPERCAYA",
      s4_heading: "Dipercaya oleh Perusahaan Terkemuka & Bisnis Berkembang",
      s4_subtext: "Lebih dari 7 tahun pengalaman senior engineering menghadirkan software handal bagi perusahaan teknologi, konglomerasi, dan brand global di Asia Tenggara.",

      acad_tag: "LATAR BELAKANG AKADEMIK & KARIER",
      acad_title: "Sarjana Sistem Informasi, Universitas Tarumanagara",
      acad_desc: "Berkarier profesional di bidang software engineering sejak 2018 beriringan dengan studi universitas (lulus 2024 dari Universitas Tarumanagara dengan publikasi ilmiah di jurnal JIKSI), setelah menyelesaikan pelatihan engineering intensif di Purwadhika Startup & Coding School.",

      tech_cv_tag: "REKAM JEJAK TEKNIS & PORTOFOLIO ENGINEERING",
      tech_cv_title: "Mencari Demo Teknis Koding & CV Software Engineer?",
      tech_cv_desc: "Jelajahi portofolio engineering saya yang lengkap dengan terminal interaktif, visualisasi WebGL, dan arsitektur backend microservices.",
      tech_cv_btn: "Buka Portofolio Engineer →",

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
      faq2_a: "Ya. Saya rutin menandatangani mutual NDA sebelum meninjau data internal, rahasia bisnis, atau rencana produk bersama para founder dan klien korporat.",

      tz_title: "ZONA WAKTU BASIS: JAKARTA (WIB / UTC+7)",
      tz_status_live: "Jam Kerja Aktif",
      tz_overlap_note: "Berbasis di Jakarta (WIB / UTC+7). Fleksibel dan terbuka untuk penyesuaian jadwal rapat koordinasi lintas zona waktu internasional (US, Eropa, APAC) sesuai kesepakatan bersama.",

      cform_eyebrow: "MARI BERKONSULTASI",
      cform_title: "Siap membangun atau mengembangkan produk digital Anda?",
      cform_desc: "Ceritakan apa yang ingin Anda bangun atau perbaiki, dan mari diskusikan solusi paling efisien dan hemat biaya untuk mewujudkannya.",
      trust_timezone: "Zona Waktu Fleksibel: Siap Kolaborasi Klien Indonesia & Global",
      trust_flexible: "Skala Fleksibel: Dari Modul MVP Terarah hingga Arsitektur Enterprise",
      direct_email_label: "EMAIL LANGSUNG (KLIK UNTUK SALIN)",
      direct_li_label: "PROFIL LINKEDIN",

      form_lbl_name: "Nama Lengkap Anda",
      form_lbl_email: "Email Bisnis / Perusahaan",
      form_lbl_scope: "Apa sasaran utama proyek Anda?",
      opt_placeholder: "Pilih Sasaran Proyek Anda",
      opt_1: "Membangun Web App atau Platform SaaS Baru",
      opt_2: "Menambahkan Asisten AI atau Otomasi Bisnis",
      opt_3: "Membangun Backend Aplikasi Mobile",
      opt_4: "Mempercepat Aplikasi & Menghemat Biaya Server",
      form_lbl_details: "Ceritakan singkat mengenai rencana proyek dan target waktu Anda",
      btn_submit: "Kirim Formulir Konsultasi",
      btn_submitting: "Mengirimkan Pesan...",
      btn_success: "Pesan Berhasil Terkirim!",

      footer_desc: "Senior Product Engineer & Technical Partner yang membantu bisnis meluncurkan dan mengembangkan produk digital yang andal.",
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
      document.title = 'Eric Anthony | Senior Product Engineer & Technical Partner';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://ericanthonywu.github.io/?lang=id');
      if (metaDesc) metaDesc.setAttribute('content', 'Membantu founder dan pemilik bisnis membangun aplikasi web yang andal, mengotomatisasi operasional, dan meluncurkan produk digital tanpa kerumitan teknis.');
      if (metaKeywords) metaKeywords.setAttribute('content', 'Eric Anthony, Senior Product Engineer, Technical Partner, Jasa Pembuatan Website, Jasa Aplikasi Web, Fullstack Developer Indonesia, GoPay, 1Engage, Startup Indonesia');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (ogDesc) ogDesc.setAttribute('content', 'Wujudkan ide Anda menjadi produk digital yang andal, berjalan lancar, dan siap berkembang bersama bisnis Anda.');
      if (ogLocale) ogLocale.setAttribute('content', 'id_ID');
      if (twitterTitle) twitterTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (twitterDesc) twitterDesc.setAttribute('content', 'Wujudkan ide Anda menjadi produk digital yang andal, berjalan lancar, dan siap berkembang bersama bisnis Anda.');
    } else {
      document.title = 'Eric Anthony | Senior Product Engineer & Technical Partner';
      if (canonicalLink) canonicalLink.setAttribute('href', 'https://ericanthonywu.github.io/?lang=en');
      if (metaDesc) metaDesc.setAttribute('content', 'I help founders and businesses build reliable web apps, automate repetitive workflows, and launch digital products without technical headaches.');
      if (metaKeywords) metaKeywords.setAttribute('content', 'Eric Anthony, Senior Product Engineer, Technical Partner, Web App Developer, SaaS Development, AI Automation, Fullstack Developer, GoPay, 1Engage, Jakarta, Remote');
      if (ogTitle) ogTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (ogDesc) ogDesc.setAttribute('content', 'Turn your ideas into reliable digital products that run smoothly and scale with your business.');
      if (ogLocale) ogLocale.setAttribute('content', 'en_US');
      if (twitterTitle) twitterTitle.setAttribute('content', 'Eric Anthony | Senior Product Engineer & Technical Partner');
      if (twitterDesc) twitterDesc.setAttribute('content', 'Turn your ideas into reliable digital products that run smoothly and scale with your business.');
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
