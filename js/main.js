// ==========================================================================
// Noufal Ibrahim | Senior Mobile Engineer Portfolio - Clean & Natural Engine
// ==========================================================================

// Projects Dataset
const portfolioProjects = [
    {
        id: 'qolbu-app',
        name: 'Qolbu - Islamic Companion',
        client: 'Production App & Open Source',
        category: 'islamic',
        categoryLabel: 'Islamic & Lifestyle',
        featured: true,
        image: './images/qolbu_app_mockup.jpg',
        screenshots: [
            './images/qolbu_app_mockup.jpg',
            './images/qolbu_quran.jpg',
            './images/qolbu_ayah_detail.jpg',
            './images/qolbu_shalat.jpg',
            './images/qolbu_kiblat.jpg',
            './images/qolbu_kalender.jpg',
            './images/qolbu_hadist.jpg'
        ],
        icon: 'book-open',
        shortDesc: 'Modern all-in-one Islamic companion app built with Flutter & Clean Architecture, featuring real-time word-by-word Tahsin murottal, 100% offline SQLite database, Khatam tracker, and 288+ passed tests.',
        fullDesc: 'Qolbu is a comprehensive, production-grade Islamic companion application designed for modern Muslim worship and spiritual productivity. Engineered for maximum performance and zero API single point of failure (SPOF), it pre-seeds 114 Surahs, 79 daily duas, 99 Asmaul Husna, and morning/evening dzikir into local SQLite databases. Highlights include real-time word-by-word audio synchronization (Tahsin Murottal) using official LPMQ Kemenag fonts, background audio playback with lockscreen controls, automated Ramadhan Imsakiyah detection, exact alarm prayer schedules, and Smart Ring BLE wearable integration.',
        challenge: 'Synchronizing real-time audio with per-word text highlighting and smooth auto-scrolling during murottal playback, guaranteeing zero API single points of failure via pre-seeded SQLite databases, ensuring reliable exact alarm adzan playback across restrictive Android battery management, and maintaining high test coverage with 288+ automated tests.',
        architecture: 'Strict Clean Architecture + BLoC pattern (Presentation, Domain, and Data) with GetIt dependency injection. Pre-seeded SQLite database (ContentDatabase & Khatam DB) for 100% offline-first resilience. Background audio playback using just_audio_background, exact alarm scheduling via flutter_local_notifications, and BLE hardware integration for physical Smart Ring tasbih.',
        solution: 'Constructed an offline SQLite content pipeline pre-packaging 114 Surahs, 79 duas, 99 Asmaul Husna, and morning/evening dzikir. Implemented Quran.com v4 audio segmentation with proportional fallback algorithms for seamless word highlighting. Passed 288+ comprehensive automated tests (unit, widget, and property-based).',
        metrics: [
            { label: 'Automated Tests', value: '288 Passed' },
            { label: 'Offline Database', value: '100% SQLite' },
            { label: 'Store Readiness', value: 'Play Store' }
        ],
        tech: ['Flutter 3.x', 'Clean Architecture', 'BLoC', 'SQLite (sqflite)', 'just_audio', 'Exact Alarm', 'Overpass OSM API', 'Smart Ring BLE', '288+ Tests'],
        links: {
            github: 'https://github.com/Noufalgithub/qolbu'
        }
    },
    {
        id: 'afiat-smart-ring',
        name: 'AFIAT Smart Ring',
        client: 'AFIAT Health & IoT',
        category: 'islamic',
        secondaryCategory: 'healthcare',
        categoryLabel: 'Islamic Wellness & IoT',
        featured: true,
        image: './images/afiat_home.jpg',
        screenshots: [
            './images/afiat_home.jpg',
            './images/afiat_islamic.jpg',
            './images/afiat_tasbih.jpg',
            './images/afiat_calories.jpg',
            './images/afiat_heart.jpg',
            './images/afiat_sleep.jpg',
            './images/afiat_steps.jpg',
            './images/afiat_live_content.jpg'
        ],
        icon: 'activity',
        shortDesc: 'Next-generation smart ring companion blending continuous biomarker monitoring (BPM, HRV, SpO2, Sleep Stages) with Islamic lifestyle features, prayer vibration sync, and digital tasbih.',
        fullDesc: 'AFIAT Smart Ring is a flagship mobile health & Islamic lifestyle application built with Flutter (iOS & Android) that pairs seamlessly with physical smart rings via Bluetooth Low Energy (BLE). It delivers real-time biomarker tracking—including continuous Heart Rate, HRV recovery, SpO2 blood oxygen, estimated Blood Pressure, Stress Levels, and multi-stage Sleep tracking—alongside an integrated Islamic spiritual ecosystem. Features include instant physical ring vibration sync for prayer times (PrayerRingSyncService), a center-docked Smart Tasbih with haptic feedback, GPS prayer calculations, digital Al-Qur\'an, and dynamic community theming.',
        challenge: 'Maintaining low-latency, background Bluetooth Low Energy (BLE) connectivity with smart rings without excessive phone battery drain, parsing raw proprietary hex byte-streams from vendor hardware across both iOS and Android native bridges, rendering high-performance monotonic spline health curves with zero UI frame drops, and executing persistent offline biomarker storage with sub-millisecond query latency.',
        architecture: 'Clean Architecture with Feature-First structure, flutter_bloc (Bloc & Cubit) + freezed for immutable state, and get_it dependency injection. High-speed local persistence powered by ObjectBox embedded NoSQL database. Hardware communication engineered via native MethodChannels (com.example.ring_sdk/service in Swift & Kotlin). Background telemetry synchronization handled via flutter_foreground_task and workmanager. Interactive analytics visualized using Syncfusion Charts with custom trackballs and monotonic splines.',
        solution: 'Architected robust Native MethodChannels bridging the vendor Smart Ring SDK for seamless BLE pairing and one-key comprehensive health checks. Implemented ObjectBox for instant offline metric caching and fast historical aggregations. Integrated PrayerRingSyncService for physical ring haptic notifications at exact prayer times, and created CommunityThemeService for real-time dynamic UI customization.',
        metrics: [
            { label: 'Wearable Sync', value: 'Real-Time BLE' },
            { label: 'Local Engine', value: 'ObjectBox NoSQL' },
            { label: 'Health Metrics', value: '8+ Biomarkers' }
        ],
        tech: [
            'Flutter (Dart 3.9+)',
            'Clean Architecture',
            'BLoC / Cubit',
            'ObjectBox NoSQL',
            'Bluetooth LE (BLE)',
            'Native MethodChannel',
            'Syncfusion Charts',
            'Firebase & OneSignal',
            'iOS & Android'
        ],
        links: {
            appStore: 'https://apps.apple.com/id/app/afiat-smart-ring/id6755744157',
            playStore: 'https://play.google.com/store/apps/details?id=com.afiatsmartring.app'
        }
    },
    {
        id: 'cimb-arjuna',
        name: 'ARJUNA (Bank CIMB Niaga)',
        client: 'Bank CIMB Niaga / PT. Bumi Amartha Teknologi Mandiri',
        category: 'banking',
        categoryLabel: 'Banking & Fintech',
        featured: true,
        image: './images/cimb_banking_mockup.jpg',
        screenshots: [
            './images/cimb_banking_poster.jpg',
            './images/cimb_benefit.jpg',
            './images/cimb_leave.jpg',
            './images/cimb_attendance.jpg',
            './images/cimb_learning.jpg'
        ],
        icon: 'building-2',
        shortDesc: 'Core enterprise mobile banking platform serving millions of customers with biometric authentication, financial transactions, and 99.9% uptime stability.',
        fullDesc: 'As a core mobile developer for CIMB Niaga, one of Southeast Asia\'s leading financial institutions, I engineered mission-critical banking features for ARJUNA. The app processes millions of real-time transactions, account balances, and portfolio management operations with strict regulatory security compliance.',
        challenge: 'Strict regulatory financial guidelines, zero transaction loss tolerance, bulletproof biometric authentication (Face ID / Fingerprint), and consistent performance across hundreds of diverse device models.',
        architecture: 'Clean Architecture with BLoC pattern, strictly separating Presentation, Domain, and Data layers. Custom native Kotlin & Swift platform channels for secure biometric crypto storage and SSL certificate pinning.',
        solution: 'Built automated CI/CD deployment pipelines that reduced release cycle times by 40%. Implemented encrypted local session caches, biometric fallback flows, and optimized network resilience.',
        metrics: [
            { label: 'Uptime Stability', value: '99.9%' },
            { label: 'CI/CD Speedup', value: '40%' },
            { label: 'User Base', value: 'Millions' }
        ],
        tech: ['Flutter', 'Android (Kotlin)', 'iOS (Swift)', 'Clean Architecture', 'Biometrics', 'SSL Pinning', 'Fastlane'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.cimb.arjuna',
            appStore: 'https://apps.apple.com/id/app/arjuna-cimb-niaga/id1571642562'
        }
    },
    {
        id: 'scylla-x',
        name: 'Scyllax SFA-Mobile',
        client: 'PT. Komuri Indonesia GeekGarden / PT. Besi Makmur',
        category: 'enterprise',
        categoryLabel: 'Enterprise & SFA',
        featured: true,
        image: './images/scyllax_home.jpg',
        screenshots: [
            './images/scyllax_home.jpg',
            './images/scyllax_activity.jpg',
            './images/scyllax_menu.jpg',
            './images/scyllax_outlet.jpg',
            './images/scyllax_navigation.jpg',
            './images/scyllax_outlet_details.jpg',
            './images/scyllax_order_form.jpg',
            './images/scyllax_create_order.jpg',
            './images/scyllax_success_print.jpg',
            './images/scyllax_report.jpg'
        ],
        icon: 'truck',
        shortDesc: 'Enterprise Sales Force Automation (SFA) mobile application with offline-first ObjectBox NoSQL sync engine, PJP journey tracking, GPS geofencing, order taking, and Bluetooth thermal printing.',
        fullDesc: 'Scyllax SFA-Mobile is an enterprise-grade Sales Force Automation application engineered with Flutter 3.22.3 and GetX Clean Architecture for sales representatives and field distribution agents across 80+ modular screens. Built for enterprise distribution networks (including PT. Besi Makmur), Scyllax delivers end-to-end field sales capabilities: Permanent Journey Plan (PJP) scheduling, real-time GPS check-in/geofencing with photo verification, catalog order taking with dynamic pricing and promos, payment collection (COD, CBD, Credit), stock audits, digital signature capture, and instant ESC/POS Bluetooth thermal receipt printing.',
        challenge: 'Field sales agents regularly operate in remote rural distribution corridors and warehouse basements with zero cellular connectivity. The system had to guarantee zero order duplication or transaction loss, provide instant sub-millisecond local queries across thousands of SKUs and outlet records, handle reliable Bluetooth thermal receipt printing across varied printer chipsets, and manage continuous background location tracking without draining device battery.',
        architecture: 'GetX + Clean Architecture separating Presentation (80+ modular screens), Domain, Infrastructure (DAL with Dio interceptors & custom error handlers), and Services. Embedded ObjectBox NoSQL database paired with OfflineSyncService and ConnectivityService for automated throttled batch sync. Hardware integration layer supporting ESC/POS thermal printing (print_bluetooth_thermal, esc_pos_utils_plus), Google MLKit barcode scanner, and Syncfusion digital signatures.',
        solution: 'Constructed an offline-first transactional engine using ObjectBox NoSQL that queues orders, visits, and collection records locally and auto-synchronizes when connectivity resumes. Integrated portable Bluetooth thermal printing for on-the-spot invoice generation, automated in-app version management via Firebase Remote Config (AppVersionService with mandatory/optional update flows), and automated ABI-split production builds with Discord webhook deployment reporting.',
        metrics: [
            { label: 'Architecture', value: '80+ Screens' },
            { label: 'Offline Database', value: 'ObjectBox NoSQL' },
            { label: 'Hardware', value: 'Bluetooth ESC/POS' },
            { label: 'Framework', value: 'Flutter 3.22.3' }
        ],
        tech: ['Flutter 3.22.3', 'Dart 3.4.3', 'GetX', 'Clean Architecture', 'ObjectBox NoSQL', 'Bluetooth Printing', 'MLKit Scanner', 'Google Maps', 'Firebase Remote Config', 'Dio'],
        links: null
    },
    {
        id: 'pos-offline',
        name: 'POS Offline First (Kaki Lima)',
        client: 'Retail Point of Sale Solution',
        category: 'retail',
        categoryLabel: 'Retail & POS',
        featured: true,
        image: './images/pos_retail_mockup.jpg',
        screenshots: [
            './images/pos_retail_mockup.jpg',
            './images/pos_retail_drawer.jpg',
            './images/pos_laporan.jpg',
            './images/pos_staff.jpg',
            './images/pos_pengaturan.jpg',
            './images/pos_pajak.jpg'
        ],
        icon: 'shopping-bag',
        shortDesc: 'Production-ready point of sale system with ESC/POS Bluetooth thermal receipt printing, barcode scanning, offline cash drawer, and financial reporting.',
        fullDesc: 'An enterprise Point of Sale (POS) solution engineered to solve retail businesses\' requirement for completely autonomous, zero-dependency offline checkout operations. Supports multi-payment options (QRIS, Cash, Split Bill), ESC/POS hardware integration, staff role management, tax/charge configuration, and comprehensive analytics reporting.',
        challenge: 'Reliable communication with varied low-cost Bluetooth thermal receipt printers (58mm/80mm) with different character sets and ensuring atomic transactions during sudden tablet power cuts.',
        architecture: 'BLoC pattern paired with SQLite relational schema, supporting atomic database transactions, automatic database backup/restore, and custom Android Native Bluetooth ESC/POS drivers.',
        solution: 'Developed a custom ESC/POS byte-stream generator supporting logos, barcodes, and currency formatting. Integrated fast camera barcode scanning and daily sales summary PDF export.',
        metrics: [
            { label: 'Print Latency', value: '<1.2s' },
            { label: 'Availability', value: '100% Offline' },
            { label: 'Analytics Depth', value: '6+ KPIs' }
        ],
        tech: ['Flutter', 'Android (Java/Kotlin)', 'BLoC', 'SQLite', 'Bluetooth ESC/POS', 'QRIS', 'PDF Reporting'],
        links: null
    },
    {
        id: 'umeds-academy',
        name: 'Umeds by Ummacademy',
        client: 'PT. Umma Bright Indonesia',
        category: 'education',
        categoryLabel: 'Education & EdTech',
        featured: true,
        image: './images/umeds_cover.jpg',
        screenshots: [
            './images/umeds_cover.jpg',
            './images/umeds_app.jpg',
            './images/umeds_topics.jpg',
            './images/umeds_classes.jpg',
            './images/umeds_tutors.jpg'
        ],
        icon: 'graduation-cap',
        shortDesc: 'Medical and dental student e-learning platform featuring interactive study modules, exam drills, video lectures, and store deployments to Google Play & App Store.',
        fullDesc: 'Built Umeds from scratch to empower thousands of medical and dental students across Indonesia preparing for national board examinations. Includes interactive question banks, video lectures, and study progress tracking.',
        challenge: 'Delivering interactive anatomy illustrations and low-latency video streaming while keeping the app bundle small and maintaining smooth 60fps animations on lower-end devices.',
        architecture: 'Provider state management with Clean Architecture, cached network image pipelines, secure token-based authentication, and video stream playback optimization.',
        solution: 'Managed end-to-end publishing pipelines for both Apple App Store and Google Play Store with 4.8★ user feedback.',
        metrics: [
            { label: 'Store Rating', value: '4.8 ★' },
            { label: 'Platforms', value: 'iOS & Android' }
        ],
        tech: ['Flutter', 'iOS (Swift)', 'Provider', 'Video Streaming', 'App Store', 'Google Play'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.ummacademy.ummacademy',
            appStore: 'https://apps.apple.com/id/app/umeds-by-ummacademy/id6444504054'
        }
    },
    {
        id: 'hatpen-mobile',
        name: 'HATPEN Mobile',
        client: 'Aviation Health Regulatory Authority',
        category: 'healthcare',
        categoryLabel: 'Aviation & Healthcare',
        featured: true,
        image: './images/hatpen_dashboard.jpg',
        screenshots: [
            './images/hatpen_dashboard.jpg',
            './images/hatpen_riwayat.jpg',
            './images/hatpen_antrian.jpg',
            './images/hatpen_profile.jpg',
            './images/hatpen_barcode.jpg'
        ],
        icon: 'heart-pulse',
        shortDesc: 'Aviation health monitoring application for pilot fitness compliance, medical examination scheduling, and authority certifications.',
        fullDesc: 'Specialized healthcare system ensuring pilot, air traffic controller, and cabin crew fitness compliance in accordance with aviation regulatory bodies. Built comprehensive medical examination workflows with real-time status updates and digital medical certificates.',
        challenge: 'Strict regulatory confidentiality, complex multi-stage medical review workflows, and the need for cross-platform reliability for aviation personnel.',
        architecture: 'Flutter frontend with Android Kotlin native integrations, secure RESTful API communication, biometric verification, and Firebase push notifications.',
        solution: 'Implemented real-time examination status tracking and digital certificate verification with cryptographic QR codes.',
        metrics: [
            { label: 'Compliance', value: '100% Aviation' }
        ],
        tech: ['Flutter', 'Android (Kotlin)', 'Healthcare', 'QR Verification', 'Firebase'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.medex.mobile.medex_mobile',
            appStore: 'https://apps.apple.com/id/app/hatpen-mobile/id6737185435'
        }
    },
    {
        id: 'bpr-adipura',
        name: 'BPR Adipura Mobile Banking',
        client: 'BPR Adipura Regional Bank',
        category: 'banking',
        categoryLabel: 'Banking',
        featured: false,
        image: null,
        icon: 'credit-card',
        shortDesc: 'Regional digital banking application enabling secure account management, inter-bank transfers, biometric access, and loan portfolio tracking.',
        fullDesc: 'Mobile banking solution engineered for regional financial institution BPR Adipura. Enabled customers to execute secure fund transfers, check deposit accounts, and access loan schedules safely on mobile.',
        challenge: 'Bringing enterprise-grade financial security and biometric authentication to regional banking users with an intuitive, accessible UX.',
        architecture: 'Clean Architecture with Flutter, utilizing Kotlin native bridges for secure hardware keystore encryption and anti-tamper security checks.',
        solution: 'Engineered secure transaction PIN verification, biometric login, and real-time transaction notifications.',
        metrics: [
            { label: 'Security', value: 'Hardware Keystore' }
        ],
        tech: ['Flutter', 'Android (Kotlin)', 'Fintech Security', 'Biometrics', 'REST API'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.myadipura'
        }
    },
    {
        id: 'pataniku',
        name: 'Pataniku Agriculture Marketplace',
        client: 'PT. Pataniku Indonesia',
        category: 'retail',
        categoryLabel: 'Retail & AgTech',
        featured: true,
        image: './images/pataniku_home.jpg',
        screenshots: [
            './images/pataniku_home.jpg',
            './images/pataniku_promos.jpg'
        ],
        icon: 'sprout',
        shortDesc: 'Agricultural and artisanal MSME marketplace connecting local farmers and verified producers directly with consumers across Indonesia.',
        fullDesc: 'Pataniku is an agricultural and artisanal MSME marketplace mobile application engineered to empower local farmers and producers. It provides verified merchant storefronts (Toko Mitra), seasonal harvest promotions, category browsing (Sembako, Tanaman Pangan), and secure direct-to-consumer digital transactions.',
        challenge: 'Handling dynamic perishable farm goods, ensuring transparent pricing between rural producers and urban buyers, and delivering a smooth, responsive shopping experience across low-end mobile hardware.',
        architecture: 'Flutter with GetX architecture, Firebase real-time integration, Google Maps route logistics, and multi-channel payment gateways including QRIS.',
        solution: 'Built intuitive verified seller profiles, high-speed product catalog browsing with image caching, and streamlined checkout workflows.',
        metrics: [
            { label: 'Commerce', value: 'Farmer-to-Consumer' },
            { label: 'Store Readiness', value: 'Google Play' }
        ],
        tech: ['Flutter', 'GetX', 'Firebase', 'Google Maps API', 'Payment Gateways', 'Google Play'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.pataniku.pataniku_mobile&hl=id'
        }
    },
    {
        id: 'siranap-rs',
        name: 'Siranap RS Hospital Bed Monitor',
        client: 'Healthcare Services',
        category: 'healthcare',
        categoryLabel: 'Healthcare',
        featured: false,
        image: null,
        icon: 'hospital',
        shortDesc: 'Real-time hospital bed availability monitoring app helping emergency patients find available ICU and inpatient beds across regional hospitals.',
        fullDesc: 'Emergency healthcare application designed to prevent patient refusal and delay by providing live, synchronized hospital bed occupancy rates across public and private hospitals.',
        challenge: 'Real-time bed count updates during surge periods with high concurrent query traffic.',
        architecture: 'iOS Native (Swift) and Flutter hybrid architecture with WebSocket push synchronization and low-bandwidth caching.',
        solution: 'Provided instant emergency search filters (ICU, Isolation, Pediatric) with one-tap ambulance dispatch routing.',
        metrics: [
            { label: 'Data Sync', value: 'Real-time' }
        ],
        tech: ['iOS (Swift)', 'Flutter', 'WebSockets', 'Real-Time Sync'],
        links: {
            appStore: 'https://apps.apple.com/id/app/siranap-rs/id1552359146'
        }
    },
    {
        id: 'presensi-te',
        name: 'Presensi TE Workforce GPS',
        client: 'PT. Time Excelindo',
        category: 'enterprise',
        categoryLabel: 'Enterprise & HR Tech',
        featured: true,
        image: './images/presensi_dashboard.jpg',
        screenshots: [
            './images/presensi_dashboard.jpg',
            './images/presensi_masuk.jpg',
            './images/presensi_laporan.jpg'
        ],
        icon: 'map-pin',
        shortDesc: 'GPS-based attendance and geofenced workforce management system with selfie facial verification and automated shift reporting.',
        fullDesc: 'Workforce management tool designed for corporate and field employees, guaranteeing tamper-proof attendance recording via verified GPS geofencing and anti-fake-GPS algorithms.',
        challenge: 'Preventing mock GPS spoofing apps and verifying employee physical presence at exact branch coordinates.',
        architecture: 'Flutter and React Native with native Android & iOS location mock-detection libraries and camera capture.',
        solution: 'Engineered anti-mock GPS detection and automated shift check-in/check-out with offline log preservation.',
        metrics: [
            { label: 'GPS Precision', value: '<5 meters' }
        ],
        tech: ['Flutter', 'React Native', 'GPS & Geofencing', 'Anti-Mock GPS'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.te.presensi'
        }
    },
    {
        id: 'simanawa-mis',
        name: 'SIManawa School MIS',
        client: 'MA An-Nawawi Berjan Purworejo',
        category: 'education',
        categoryLabel: 'Education & MIS',
        featured: true,
        image: './images/simanawa_cover.jpg',
        screenshots: [
            './images/simanawa_cover.jpg',
            './images/simanawa_pembayaran.jpg',
            './images/simanawa_keuangan.jpg',
            './images/simanawa_summary_chart.jpg',
            './images/simanawa_pkg.jpg'
        ],
        icon: 'school',
        shortDesc: 'Comprehensive Islamic school & pesantren MIS connecting parents, teachers, and school leadership with financial tracking, PKG evaluations, and visual analytics.',
        fullDesc: 'Complete mobile academic and pesantren portal for MA An-Nawawi Berjan Purworejo. Features monthly SPP tuition tracking, institutional financial reporting (APBM/BOS/BOSDA) with PDF exports, principal analytics dashboard with interactive charts, and digital teacher performance evaluations (PKG).',
        challenge: 'Consolidating multifaceted pesantren and madrasah operations—from complex tuition installments to teacher appraisals and executive metrics—into a modern, accessible mobile application.',
        architecture: 'Flutter with clean modular architecture, PDF reporting engine, charting visualizer, and role-based access for parents, teachers, and principals.',
        solution: 'Built unified dashboard with role-based features: parent tuition status, financial reporting with PDF download, dynamic chart summaries, and multi-criteria PKG teacher assessment.',
        metrics: [
            { label: 'Active Community', value: '700+ Students & Staff' },
            { label: 'Analytics', value: 'Interactive Charts' }
        ],
        tech: ['Flutter', 'Android (Kotlin)', 'Interactive Charts', 'PDF Engine', 'Role-Based Access'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.te.annawawi'
        }
    },
    {
        id: 'flight-dnp',
        name: 'Flight Navigation DNP',
        client: 'Aviation Publications',
        category: 'enterprise',
        categoryLabel: 'Aviation',
        featured: false,
        image: null,
        icon: 'plane',
        shortDesc: 'Digital navigation publication tool for flight crews, offering offline aeronautical charts, airport specifications, and flight planning resources.',
        fullDesc: 'Mission-critical aviation publication reference app engineered for pilots and cockpit crews. Provides offline aeronautical navigation charts, runway data, radio frequencies, and NOTAM updates.',
        challenge: 'Offline rendering of complex vector charts and large PDF aeronautical publications with zero lag during flight.',
        architecture: 'Flutter and native iOS/Android PDF rendering engines with encrypted offline storage.',
        solution: 'Built high-speed offline caching for thousands of flight navigation charts and aerodrome data.',
        metrics: [
            { label: 'In-Flight', value: '100% Offline' }
        ],
        tech: ['Flutter', 'iOS & Android Native', 'Aviation', 'Offline Maps'],
        links: {
            playStore: 'https://play.google.com/store/apps/details?id=com.te.dnpmobile'
        }
    }
];

// Clean Technical Stack Dataset
const techStackItems = [
    { name: 'Flutter', category: 'mobile', sub: 'Cross-Platform', icon: 'smartphone' },
    { name: 'React Native', category: 'mobile', sub: 'Cross-Platform', icon: 'code-2' },
    { name: 'Android (Kotlin)', category: 'mobile', sub: 'Native Mobile', icon: 'smartphone' },
    { name: 'iOS (Swift)', category: 'mobile', sub: 'Native Mobile', icon: 'smartphone' },
    { name: 'Dart', category: 'mobile', sub: 'Core Language', icon: 'terminal' },
    { name: 'Java', category: 'mobile', sub: 'Android Native', icon: 'cpu' },
    { name: 'TypeScript / JS', category: 'mobile', sub: 'Web & React Native', icon: 'file-code' },
    { name: 'Clean Architecture', category: 'architecture', sub: 'Architecture Pattern', icon: 'layers' },
    { name: 'BLoC Pattern', category: 'architecture', sub: 'State Management', icon: 'workflow' },
    { name: 'Provider / GetX', category: 'architecture', sub: 'State Management', icon: 'component' },
    { name: 'Jetpack & StateFlow', category: 'architecture', sub: 'Android Native', icon: 'git-merge' },
    { name: 'Combine & Concurrency', category: 'architecture', sub: 'iOS Native', icon: 'refresh-cw' },
    { name: 'Offline-First & SQLite', category: 'architecture', sub: 'Local Persistence', icon: 'database' },
    { name: 'Unit & Widget Testing', category: 'architecture', sub: '288+ Test Suites', icon: 'check-circle-2' },
    { name: 'Bluetooth ESC/POS', category: 'hardware', sub: 'Thermal Printing', icon: 'printer' },
    { name: 'Bluetooth LE (BLE)', category: 'hardware', sub: 'Smart Ring Wearable', icon: 'bluetooth' },
    { name: 'Background Audio', category: 'hardware', sub: 'just_audio / Lockscreen', icon: 'volume-2' },
    { name: 'Biometric Keystore', category: 'hardware', sub: 'Face ID & Fingerprint', icon: 'shield-check' },
    { name: 'GPS Geofencing', category: 'hardware', sub: 'Location Services', icon: 'map-pin' },
    { name: 'Barcode & QR Scanner', category: 'hardware', sub: 'Camera Vision', icon: 'scan' },
    { name: 'Fastlane & Actions', category: 'devops', sub: 'Automated CI/CD', icon: 'git-pull-request' },
    { name: 'Google Play Console', category: 'devops', sub: 'Store Publishing', icon: 'upload-cloud' },
    { name: 'App Store Connect', category: 'devops', sub: 'Store Publishing', icon: 'upload-cloud' },
    { name: 'Firebase Suite', category: 'devops', sub: 'FCM, Crashlytics', icon: 'flame' }
];

// App State
let currentTheme = 'light';
let activeCategory = 'all';
let searchQuery = '';
let activeStack = 'all';

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    renderProjects();
    renderStack('all');
    initPhoneMockup();
    initFiltersAndSearch();
    initStackTabs();
    initModal();
    initClipboard();
    initMobileMenu();

    if (window.lucide) lucide.createIcons();
});

// --------------------------------------------------------------------------
// Theme (Clean Light / Dark - Light by Default)
// --------------------------------------------------------------------------
function initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    currentTheme = saved || 'light';
    applyTheme(currentTheme);

    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            showToast(`Theme switched to ${next}`, next === 'dark' ? 'moon' : 'sun');
        });
    }
}

function applyTheme(theme) {
    currentTheme = theme;
    const root = document.documentElement;
    if (theme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
    } else {
        root.classList.remove('light');
        root.classList.add('dark');
    }
    localStorage.setItem('portfolio-theme', theme);

    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerHTML = theme === 'dark' 
            ? '<i data-lucide="sun" class="w-4 h-4 text-amber-500"></i>'
            : '<i data-lucide="moon" class="w-4 h-4 text-zinc-700"></i>';
        if (window.lucide) lucide.createIcons();
    }
}

// --------------------------------------------------------------------------
// Hero Phone Mockup
// --------------------------------------------------------------------------
function initPhoneMockup() {
    const tabs = document.querySelectorAll('.phone-tab-btn');
    const slides = document.querySelectorAll('.phone-slide');
    if (!tabs.length || !slides.length) return;

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
                t.classList.add('text-muted');
            });
            tab.classList.add('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
            tab.classList.remove('text-muted');

            slides.forEach((s, idx) => {
                if (idx === index) s.classList.add('active');
                else s.classList.remove('active');
            });
        });
    });
}

// --------------------------------------------------------------------------
// Projects Render
// --------------------------------------------------------------------------
function renderProjects() {
    const grid = document.getElementById('projects-grid');
    const count = document.getElementById('projects-counter');
    if (!grid) return;

    const filtered = portfolioProjects.filter(p => {
        const matchCat = activeCategory === 'all' || 
            p.category === activeCategory || 
            (p.secondaryCategory && p.secondaryCategory === activeCategory);
        const matchQuery = !searchQuery || 
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (p.categoryLabel && p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())) ||
            p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchCat && matchQuery;
    });

    if (count) {
        count.textContent = `${filtered.length} Projects`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-muted">
                <p class="text-sm">No matching projects found.</p>
                <button onclick="resetProjectFilters()" class="mt-2 text-xs font-semibold text-blue-500 hover:underline">
                    Clear filters
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(p => `
        <article class="clean-card rounded-xl overflow-hidden flex flex-col group">
            <!-- Header Preview -->
            <div class="h-44 bg-zinc-900 relative overflow-hidden flex items-center justify-center">
                ${p.image ? `
                    <img src="${p.image}" alt="${p.name} Preview" class="w-full h-full object-cover object-top filter brightness-90 group-hover:scale-102 transition-transform duration-300">
                ` : `
                    <div class="w-full h-full bg-zinc-900 flex flex-col items-center justify-center p-4 text-center">
                        <div class="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 mb-2">
                            <i data-lucide="${p.icon}" class="w-5 h-5"></i>
                        </div>
                        <span class="text-xs font-semibold text-zinc-300">${p.name}</span>
                        <span class="text-[10px] text-zinc-500">${p.categoryLabel}</span>
                    </div>
                `}

                <span class="absolute top-3 left-3 px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-900/80 text-zinc-200 border border-zinc-700 backdrop-blur-sm">
                    ${p.categoryLabel}
                </span>

                <button onclick="openModal('${p.id}')" class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" aria-label="View case study for ${p.name}">
                    <span class="px-3 py-1.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs shadow-md">
                        Case Study
                    </span>
                </button>
            </div>

            <!-- Content -->
            <div class="p-5 flex-1 flex flex-col">
                <div class="mb-2">
                    <h3 class="text-base font-bold text-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        ${p.name}
                    </h3>
                    <span class="text-[11px] text-muted block mt-0.5">${p.client}</span>
                </div>

                <p class="text-xs text-secondary leading-relaxed line-clamp-3 mb-4 flex-1">
                    ${p.shortDesc}
                </p>

                <!-- Tech Badges -->
                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${p.tech.slice(0, 4).map(t => `<span class="badge-subtle text-[10px] py-0.5 px-2">${t}</span>`).join('')}
                    ${p.tech.length > 4 ? `<span class="text-[10px] text-muted self-center">+${p.tech.length - 4}</span>` : ''}
                </div>

                <!-- Footer Links -->
                <div class="pt-3 border-t border-base flex items-center justify-between text-xs mt-auto">
                    <button onclick="openModal('${p.id}')" class="font-medium text-heading hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
                        <span>Details</span>
                        <i data-lucide="arrow-right" class="w-3 h-3"></i>
                    </button>

                    <div class="flex items-center gap-2 text-muted">
                        ${p.links?.playStore ? `
                            <a href="${p.links.playStore}" target="_blank" rel="noopener noreferrer" class="hover:text-heading" title="Google Play">
                                <i data-lucide="play" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}
                        ${p.links?.appStore ? `
                            <a href="${p.links.appStore}" target="_blank" rel="noopener noreferrer" class="hover:text-heading" title="App Store">
                                <i data-lucide="apple" class="w-3.5 h-3.5"></i>
                            </a>
                        ` : ''}
                        ${p.links?.github ? `
                            <a href="${p.links.github}" target="_blank" rel="noopener noreferrer" class="hover:text-heading inline-flex items-center" title="GitHub Repository">
                                <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        </article>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function resetProjectFilters() {
    activeCategory = 'all';
    searchQuery = '';
    const input = document.getElementById('project-search');
    if (input) input.value = '';

    document.querySelectorAll('.filter-pill-btn').forEach(btn => {
        if (btn.dataset.category === 'all') {
            btn.classList.add('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
            btn.classList.remove('bg-card', 'text-muted');
        } else {
            btn.classList.remove('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
            btn.classList.add('bg-card', 'text-muted');
        }
    });

    renderProjects();
}

function initFiltersAndSearch() {
    const input = document.getElementById('project-search');
    if (input) {
        input.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderProjects();
        });
    }

    document.querySelectorAll('.filter-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill-btn').forEach(b => {
                b.classList.remove('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
                b.classList.add('bg-card', 'text-muted');
            });
            btn.classList.add('bg-zinc-900', 'dark:bg-white', 'text-white', 'dark:text-zinc-900');
            btn.classList.remove('bg-card', 'text-muted');

            activeCategory = btn.dataset.category;
            renderProjects();
        });
    });
}

// --------------------------------------------------------------------------
// Skills Render
// --------------------------------------------------------------------------
function renderStack(category) {
    const container = document.getElementById('tech-stack-grid');
    if (!container) return;

    const filtered = category === 'all' 
        ? techStackItems 
        : techStackItems.filter(item => item.category === category);

    container.innerHTML = filtered.map(item => `
        <div class="p-3 rounded-lg border border-base bg-card flex items-center justify-between">
            <div class="flex items-center gap-2.5">
                <i data-lucide="${item.icon}" class="w-4 h-4 text-muted"></i>
                <div>
                    <span class="text-xs font-semibold text-heading block leading-none">${item.name}</span>
                    <span class="text-[10px] text-muted block mt-0.5">${item.sub}</span>
                </div>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function initStackTabs() {
    document.querySelectorAll('.stack-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.stack-pill-btn').forEach(b => {
                b.classList.remove('bg-card', 'text-heading', 'border', 'border-base');
                b.classList.add('text-muted');
            });
            btn.classList.add('bg-card', 'text-heading', 'border', 'border-base');
            btn.classList.remove('text-muted');

            activeStack = btn.dataset.stack;
            renderStack(activeStack);
        });
    });
}

// --------------------------------------------------------------------------
// Clean Case Study Modal
// --------------------------------------------------------------------------
function openModal(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-body-content');
    if (!modal || !content) return;

    content.innerHTML = `
        <div>
            <!-- Banner Image if available -->
            ${project.image ? `
                <div class="h-60 w-full overflow-hidden rounded-t-2xl bg-zinc-900">
                    <img src="${project.image}" alt="${project.name}" class="w-full h-full object-cover object-top">
                </div>
            ` : ''}

            <div class="p-6 sm:p-8 space-y-6">
                <div>
                    <span class="badge-subtle text-xs mb-2">${project.categoryLabel}</span>
                    <h2 class="text-2xl font-bold text-heading tracking-tight">${project.name}</h2>
                    <p class="text-xs text-muted mt-1">${project.client}</p>
                </div>

                <div>
                    <h3 class="text-xs uppercase font-mono text-muted mb-1.5">Overview</h3>
                    <p class="text-xs sm:text-sm text-secondary leading-relaxed">${project.fullDesc}</p>
                </div>

                <!-- Challenge & Solution -->
                <div class="grid sm:grid-cols-2 gap-4">
                    <div class="p-4 rounded-lg bg-subtle border border-base">
                        <h4 class="text-xs font-bold text-heading mb-1 flex items-center gap-1.5">
                            <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-500"></i> The Challenge
                        </h4>
                        <p class="text-xs text-secondary leading-relaxed">${project.challenge}</p>
                    </div>
                    <div class="p-4 rounded-lg bg-subtle border border-base">
                        <h4 class="text-xs font-bold text-heading mb-1 flex items-center gap-1.5">
                            <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500"></i> The Solution
                        </h4>
                        <p class="text-xs text-secondary leading-relaxed">${project.solution}</p>
                    </div>
                </div>

                <!-- Architecture -->
                <div>
                    <h3 class="text-xs uppercase font-mono text-muted mb-1.5">Architecture & Engineering</h3>
                    <p class="text-xs text-secondary leading-relaxed p-4 rounded-lg bg-subtle border border-base">
                        ${project.architecture}
                    </p>
                </div>

                <!-- Tech Stack Badges -->
                <div>
                    <h3 class="text-xs uppercase font-mono text-muted mb-2">Technologies Used</h3>
                    <div class="flex flex-wrap gap-1.5">
                        ${project.tech.map(t => `<span class="badge-subtle text-xs">${t}</span>`).join('')}
                    </div>
                </div>

                <!-- Metrics Highlights if available -->
                ${project.metrics && project.metrics.length > 0 ? `
                    <div>
                        <h3 class="text-xs uppercase font-mono text-muted mb-2">Key Metrics & Verification</h3>
                        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            ${project.metrics.map(m => `
                                <div class="p-3 rounded-lg bg-subtle border border-base">
                                    <div class="text-base font-bold text-heading font-heading">${m.value}</div>
                                    <div class="text-[11px] text-muted mt-0.5">${m.label}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Screenshots Gallery if available -->
                ${project.screenshots && project.screenshots.length > 0 ? `
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <h3 class="text-xs uppercase font-mono text-muted">Application Interface</h3>
                            <span class="text-[10px] text-muted">Click image to expand</span>
                        </div>
                        <div class="grid grid-cols-2 ${project.screenshots.length >= 3 ? 'sm:grid-cols-3' : ''} gap-3">
                            ${project.screenshots.map(s => `
                                <div class="rounded-xl overflow-hidden border border-base bg-zinc-900/30 dark:bg-zinc-950 aspect-[9/19.5] max-h-[380px] sm:max-h-[420px] flex items-center justify-center group/shot relative cursor-pointer" onclick="openImageLightbox('${s}', '${project.name}')">
                                    <img src="${s}" alt="${project.name} Screenshot" class="w-full h-full object-contain group-hover/shot:scale-[1.02] transition-transform duration-200">
                                    <div class="absolute inset-0 bg-black/30 opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                        <span class="py-1 px-2.5 rounded-lg bg-zinc-900/90 text-white text-[11px] font-medium backdrop-blur-sm flex items-center gap-1 shadow-lg">
                                            <i data-lucide="zoom-in" class="w-3.5 h-3.5"></i> Expand
                                        </span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Store & Copy Links -->
                <div class="pt-4 border-t border-base flex flex-wrap items-center gap-2.5">
                    ${project.links?.playStore ? `
                        <a href="${project.links.playStore}" target="_blank" rel="noopener noreferrer" class="store-badge" title="Get it on Google Play">
                            <div class="store-badge-icon">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186A2.372 2.372 0 0 1 3 20.575V3.425c0-.626.22-1.196.609-1.611z" fill="#00E676"/>
                                    <path d="M17.189 8.604L13.792 12l3.397 3.396 3.829-2.188c1.096-.626 1.096-1.644 0-2.27l-3.829-2.334z" fill="#FFD600"/>
                                    <path d="M3.609 1.814l10.183 10.186 3.397-3.396L6.07 2.012a2.49 2.49 0 0 0-2.461-.198z" fill="#00B0FF"/>
                                    <path d="M17.189 15.396L13.792 12 3.609 22.186c.712.565 1.748.513 2.461-.174l11.119-6.616z" fill="#FF3D00"/>
                                </svg>
                            </div>
                            <div class="store-badge-text">
                                <span class="store-badge-sub">GET IT ON</span>
                                <span class="store-badge-title">Google Play</span>
                            </div>
                        </a>
                    ` : ''}
                    ${project.links?.appStore ? `
                        <a href="${project.links.appStore}" target="_blank" rel="noopener noreferrer" class="store-badge" title="Download on the App Store">
                            <div class="store-badge-icon">
                                <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.6-2.66 1.34-.56.65-.96 1.71-.83 2.74 1.02.08 2.06-.52 2.57-1.21z"/>
                                </svg>
                            </div>
                            <div class="store-badge-text">
                                <span class="store-badge-sub">Download on the</span>
                                <span class="store-badge-title">App Store</span>
                            </div>
                        </a>
                    ` : ''}
                    ${project.links?.github ? `
                        <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="store-badge" title="Explore source on GitHub">
                            <div class="store-badge-icon">
                                <svg class="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                                </svg>
                            </div>
                            <div class="store-badge-text">
                                <span class="store-badge-sub">SOURCE CODE</span>
                                <span class="store-badge-title">GitHub</span>
                            </div>
                        </a>
                    ` : ''}
                    <button data-copy-text="${project.name} - ${project.client}: ${project.shortDesc}" data-copy-label="${project.name} details" class="px-3.5 py-2.5 rounded-xl border border-base bg-subtle hover:bg-card text-muted hover:text-heading transition-all flex items-center gap-1.5 text-xs font-medium sm:ml-auto" title="Copy project summary">
                        <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                        <span>Copy Summary</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (window.lucide) lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Lightbox modal functions
function openImageLightbox(src, title) {
    const lightbox = document.getElementById('image-lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    if (!lightbox || !img) return;

    img.src = src;
    if (caption) caption.textContent = title || '';
    lightbox.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function closeImageLightbox() {
    const lightbox = document.getElementById('image-lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}

function initModal() {
    const closeBtn = document.getElementById('modal-close-btn');
    const modal = document.getElementById('project-modal');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const lightbox = document.getElementById('image-lightbox');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeImageLightbox);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeImageLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('active')) {
                closeImageLightbox();
            } else {
                closeModal();
            }
        }
    });
}

// --------------------------------------------------------------------------
// Clipboard & Toast (With Live Icon Feedback)
// --------------------------------------------------------------------------
function initClipboard() {
    document.addEventListener('click', (e) => {
        const copyBtn = e.target.closest('[data-copy-text]');
        if (!copyBtn) return;
        
        e.preventDefault();
        const text = copyBtn.getAttribute('data-copy-text');
        const label = copyBtn.getAttribute('data-copy-label') || 'Text';

        navigator.clipboard.writeText(text).then(() => {
            showToast(`${label} copied to clipboard`, 'check');
            
            // Swap icon to checkmark on the clicked element
            const icon = copyBtn.querySelector('[data-lucide], svg');
            if (icon) {
                const prevHTML = icon.outerHTML;
                icon.outerHTML = '<i data-lucide="check" class="w-3.5 h-3.5 text-emerald-500 inline-block"></i>';
                if (window.lucide) lucide.createIcons();

                setTimeout(() => {
                    const currentCheck = copyBtn.querySelector('[data-lucide="check"], svg.lucide-check');
                    if (currentCheck) {
                        currentCheck.outerHTML = prevHTML;
                        if (window.lucide) lucide.createIcons();
                    }
                }, 1800);
            }
        }).catch(() => {
            showToast('Failed to copy', 'alert-circle');
        });
    });
}

function showToast(message, icon = 'check') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `
        <i data-lucide="${icon}" class="w-3.5 h-3.5 text-blue-500"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 250);
    }, 2800);
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-nav-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}
