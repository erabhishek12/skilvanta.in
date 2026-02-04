/* ============================================
   SKILVANTA - Professional Internship Platform
   script.js - Part 1 of 3
   ============================================ */

'use strict';

/* ==========================================
   INTERNSHIP DATA
   ========================================== */
const internshipsData = [
    {
        id: 'web-development',
        title: 'Web Development',
        category: 'technical',
        mode: 'online',
        duration: '2 months',
        stipendMin: 8000,
        stipendMax: 12000,
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
        applications: 342,
        description: 'Master modern web development from scratch. Build responsive websites, learn React.js, and deploy real projects. Work with industry mentors on live client projects.',
        eligibility: [
            'Currently pursuing or completed graduation in any stream',
            'Basic understanding of computers and internet',
            'Passion for learning and building things',
            'Minimum 15-20 hours/week availability'
        ],
        curriculum: [
            { week: 'Week 1-2', content: 'HTML5 & CSS3 fundamentals, Flexbox, Grid, Responsive Design' },
            { week: 'Week 3-4', content: 'JavaScript ES6+, DOM manipulation, Events, APIs' },
            { week: 'Week 5-6', content: 'React.js basics, Components, Props, State, Hooks' },
            { week: 'Week 7-8', content: 'Project development, Git/GitHub, Deployment, Portfolio' }
        ],
        tools: ['VS Code', 'Chrome DevTools', 'GitHub', 'Figma', 'Netlify'],
        outcomes: [
            'Build 3+ responsive websites from scratch',
            'Create a React.js web application',
            'Deploy projects with custom domains',
            'Industry-ready portfolio'
        ],
        batchDates: ['Jan 15', 'Feb 1', 'Feb 15', 'Mar 1'],
        featured: true
    },
    {
        id: 'data-science',
        title: 'Data Science',
        category: 'technical',
        mode: 'online',
        duration: '2 months',
        stipendMin: 10000,
        stipendMax: 15000,
        skills: ['Python', 'Pandas', 'NumPy', 'ML Basics', 'Visualization'],
        applications: 287,
        description: 'Dive into the world of data science. Learn Python programming, data analysis, visualization, and machine learning fundamentals with hands-on projects.',
        eligibility: [
            'Background in science, engineering, or mathematics preferred',
            'Basic programming knowledge is a plus',
            'Analytical mindset and problem-solving skills',
            'Minimum 20 hours/week availability'
        ],
        curriculum: [
            { week: 'Week 1-2', content: 'Python programming, Data types, Functions, OOP basics' },
            { week: 'Week 3-4', content: 'NumPy, Pandas, Data cleaning, Exploratory Data Analysis' },
            { week: 'Week 5-6', content: 'Data visualization with Matplotlib, Seaborn, Plotly' },
            { week: 'Week 7-8', content: 'Machine Learning basics, Scikit-learn, Capstone project' }
        ],
        tools: ['Python', 'Jupyter Notebook', 'Google Colab', 'Kaggle', 'Tableau'],
        outcomes: [
            'Proficiency in Python for data analysis',
            'Complete 2+ data science projects',
            'Create interactive dashboards',
            'Kaggle competition participation'
        ],
        batchDates: ['Jan 20', 'Feb 5', 'Feb 20', 'Mar 5'],
        featured: true
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        category: 'marketing',
        mode: 'hybrid',
        duration: '1 month',
        stipendMin: 6000,
        stipendMax: 10000,
        skills: ['SEO', 'Social Media', 'Google Ads', 'Analytics', 'Content'],
        applications: 456,
        description: 'Learn the complete digital marketing ecosystem. From SEO to social media marketing, Google Ads to analytics - become a full-stack digital marketer.',
        eligibility: [
            'Any graduate or final year student',
            'Good communication skills',
            'Active on social media platforms',
            'Creative thinking ability'
        ],
        curriculum: [
            { week: 'Week 1', content: 'Digital marketing fundamentals, SEO on-page & off-page' },
            { week: 'Week 2', content: 'Social media marketing, Content strategy, Engagement' },
            { week: 'Week 3', content: 'Google Ads, Facebook Ads, Campaign management' },
            { week: 'Week 4', content: 'Analytics, Reporting, Live campaign project' }
        ],
        tools: ['Google Analytics', 'SEMrush', 'Canva', 'Hootsuite', 'Google Ads'],
        outcomes: [
            'Run live marketing campaigns',
            'SEO optimization skills',
            'Social media management expertise',
            'Google Ads certification preparation'
        ],
        batchDates: ['Jan 10', 'Jan 25', 'Feb 10', 'Feb 25'],
        featured: false
    },
    {
        id: 'graphic-design',
        title: 'Graphic Design',
        category: 'design',
        mode: 'online',
        duration: '1 month',
        stipendMin: 6000,
        stipendMax: 8000,
        skills: ['Photoshop', 'Illustrator', 'Canva', 'Branding', 'UI Basics'],
        applications: 234,
        description: 'Unleash your creativity with professional graphic design. Learn industry-standard tools and create stunning visuals for brands and businesses.',
        eligibility: [
            'Creative mindset and eye for design',
            'Basic computer skills',
            'Access to Adobe Creative Suite (trial available)',
            'Portfolio of any creative work (optional)'
        ],
        curriculum: [
            { week: 'Week 1', content: 'Design principles, Color theory, Typography, Composition' },
            { week: 'Week 2', content: 'Adobe Photoshop mastery, Photo editing, Manipulation' },
            { week: 'Week 3', content: 'Adobe Illustrator, Vector graphics, Logo design' },
            { week: 'Week 4', content: 'Branding projects, Social media designs, Portfolio' }
        ],
        tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Figma', 'Behance'],
        outcomes: [
            'Create professional brand identities',
            'Design social media content',
            'Build a design portfolio',
            'Freelance-ready skills'
        ],
        batchDates: ['Jan 12', 'Jan 28', 'Feb 12', 'Feb 28'],
        featured: false
    },
    {
        id: 'content-writing',
        title: 'Content Writing',
        category: 'content',
        mode: 'online',
        duration: '1 month',
        stipendMin: 5000,
        stipendMax: 8000,
        skills: ['Blog Writing', 'Copywriting', 'SEO Writing', 'Editing', 'Research'],
        applications: 312,
        description: 'Master the art of content writing. Learn to create compelling blogs, persuasive copy, and SEO-optimized content that drives results.',
        eligibility: [
            'Strong command over English language',
            'Passion for reading and writing',
            'Any educational background',
            'Basic understanding of digital platforms'
        ],
        curriculum: [
            { week: 'Week 1', content: 'Content writing fundamentals, Research, Structure' },
            { week: 'Week 2', content: 'Blog writing, Article formats, Storytelling' },
            { week: 'Week 3', content: 'SEO writing, Keywords, Meta descriptions' },
            { week: 'Week 4', content: 'Copywriting, Editing, Client projects' }
        ],
        tools: ['Grammarly', 'Hemingway Editor', 'Google Docs', 'WordPress', 'Ahrefs'],
        outcomes: [
            'Write SEO-optimized content',
            'Create engaging blog posts',
            'Develop copywriting skills',
            'Published writing samples'
        ],
        batchDates: ['Jan 8', 'Jan 22', 'Feb 8', 'Feb 22'],
        featured: false
    },
    {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        category: 'technical',
        mode: 'online',
        duration: '3 months',
        stipendMin: 10000,
        stipendMax: 15000,
        skills: ['Flutter', 'React Native', 'Dart', 'API Integration', 'Firebase'],
        applications: 198,
        description: 'Build cross-platform mobile applications for iOS and Android. Learn Flutter/React Native and deploy apps to app stores.',
        eligibility: [
            'Basic programming knowledge required',
            'Understanding of OOP concepts',
            'Computer Science or related background preferred',
            'Minimum 25 hours/week availability'
        ],
        curriculum: [
            { week: 'Week 1-3', content: 'Dart programming, Flutter basics, Widgets, Layouts' },
            { week: 'Week 4-6', content: 'State management, Navigation, Forms, Local storage' },
            { week: 'Week 7-9', content: 'API integration, Firebase, Authentication, Database' },
            { week: 'Week 10-12', content: 'Advanced UI, Animations, Testing, App Store deployment' }
        ],
        tools: ['Flutter', 'Android Studio', 'VS Code', 'Firebase', 'Postman'],
        outcomes: [
            'Build 2+ complete mobile applications',
            'Deploy app to Google Play Store',
            'Firebase integration expertise',
            'Cross-platform development skills'
        ],
        batchDates: ['Jan 15', 'Feb 1', 'Mar 1', 'Apr 1'],
        featured: true
    },
    {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        category: 'design',
        mode: 'online',
        duration: '2 months',
        stipendMin: 8000,
        stipendMax: 12000,
        skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
        applications: 267,
        description: 'Design user-centered digital experiences. Learn the complete UI/UX design process from research to high-fidelity prototypes.',
        eligibility: [
            'Interest in design and user experience',
            'Basic design sense (formal training not required)',
            'Attention to detail',
            'Problem-solving mindset'
        ],
        curriculum: [
            { week: 'Week 1-2', content: 'UX fundamentals, User research, Personas, Journey mapping' },
            { week: 'Week 3-4', content: 'Information architecture, Wireframing, User flows' },
            { week: 'Week 5-6', content: 'UI design principles, Figma mastery, Design systems' },
            { week: 'Week 7-8', content: 'Prototyping, Usability testing, Portfolio project' }
        ],
        tools: ['Figma', 'FigJam', 'Maze', 'Notion', 'Miro'],
        outcomes: [
            'Design complete mobile/web applications',
            'Conduct user research and testing',
            'Create interactive prototypes',
            'UX portfolio with case studies'
        ],
        batchDates: ['Jan 18', 'Feb 3', 'Feb 18', 'Mar 3'],
        featured: true
    },
    {
        id: 'business-development',
        title: 'Business Development',
        category: 'business',
        mode: 'hybrid',
        duration: '2 months',
        stipendMin: 8000,
        stipendMax: 12000,
        skills: ['Lead Generation', 'Sales', 'CRM', 'Negotiation', 'Market Research'],
        applications: 189,
        description: 'Learn the art of business development. From lead generation to closing deals, master the skills needed to drive business growth.',
        eligibility: [
            'MBA/BBA students or graduates preferred',
            'Excellent communication skills',
            'Self-motivated and target-oriented',
            'Basic understanding of B2B sales'
        ],
        curriculum: [
            { week: 'Week 1-2', content: 'Business development fundamentals, Market research' },
            { week: 'Week 3-4', content: 'Lead generation strategies, Cold outreach, Email campaigns' },
            { week: 'Week 5-6', content: 'Sales process, Pitching, Negotiation, CRM tools' },
            { week: 'Week 7-8', content: 'Partnership development, Client management, Live projects' }
        ],
        tools: ['HubSpot CRM', 'LinkedIn Sales Navigator', 'Apollo.io', 'Calendly', 'Zoom'],
        outcomes: [
            'Generate and qualify leads',
            'Close business deals',
            'CRM management expertise',
            'Business negotiation skills'
        ],
        batchDates: ['Jan 20', 'Feb 5', 'Feb 20', 'Mar 5'],
        featured: false
    },
    {
        id: 'human-resources',
        title: 'Human Resources',
        category: 'business',
        mode: 'offline',
        duration: '1 month',
        stipendMin: 6000,
        stipendMax: 10000,
        skills: ['Recruitment', 'Employee Engagement', 'Onboarding', 'HR Policies', 'HRIS'],
        applications: 156,
        description: 'Get hands-on experience in HR operations. Learn recruitment, employee engagement, and HR management in a corporate setting.',
        eligibility: [
            'MBA HR or related background preferred',
            'Strong interpersonal skills',
            'Good organizational abilities',
            'Available for office visits (Bangalore)'
        ],
        curriculum: [
            { week: 'Week 1', content: 'HR fundamentals, Organizational structure, HR policies' },
            { week: 'Week 2', content: 'Recruitment process, Sourcing, Screening, Interviews' },
            { week: 'Week 3', content: 'Onboarding, Employee engagement, Performance management' },
            { week: 'Week 4', content: 'HR analytics, HRIS systems, Compliance, Project' }
        ],
        tools: ['LinkedIn Recruiter', 'Zoho People', 'Google Workspace', 'Slack', 'MS Office'],
        outcomes: [
            'End-to-end recruitment experience',
            'Employee engagement strategies',
            'HR documentation skills',
            'Corporate HR exposure'
        ],
        batchDates: ['Jan 10', 'Feb 1', 'Feb 15', 'Mar 1'],
        featured: false
    },
    {
        id: 'video-editing',
        title: 'Video Editing',
        category: 'design',
        mode: 'online',
        duration: '2 months',
        stipendMin: 8000,
        stipendMax: 12000,
        skills: ['Premiere Pro', 'After Effects', 'Motion Graphics', 'Color Grading', 'Sound Design'],
        applications: 223,
        description: 'Master professional video editing and motion graphics. Create stunning videos for YouTube, social media, and commercial projects.',
        eligibility: [
            'Interest in video content and filmmaking',
            'Basic computer skills',
            'Access to Adobe Creative Suite',
            'Creative storytelling ability'
        ],
        curriculum: [
            { week: 'Week 1-2', content: 'Video editing fundamentals, Premiere Pro basics, Cuts, Transitions' },
            { week: 'Week 3-4', content: 'Advanced editing, Color grading, Audio editing, Sound design' },
            { week: 'Week 5-6', content: 'After Effects basics, Motion graphics, Titles, Lower thirds' },
            { week: 'Week 7-8', content: 'Advanced motion graphics, VFX basics, Client projects' }
        ],
        tools: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Audition', 'Media Encoder'],
        outcomes: [
            'Edit professional-quality videos',
            'Create motion graphics and titles',
            'Color grading expertise',
            'Video editing portfolio'
        ],
        batchDates: ['Jan 15', 'Feb 1', 'Feb 15', 'Mar 1'],
        featured: false
    }
];

/* ==========================================
   CONFIGURATION
   ========================================== */
const CONFIG = {
    // Form submission endpoints
    applicationFormEndpoint: 'https://formspree.io/f/mbldknqrv',
    contactFormEndpoint: 'https://formspree.io/f/xykprlzw',
    
    // Google Apps Script URL (for Razorpay - to be configured)
    appsScriptUrl: '',
    
    // Certificate verification - Google Sheets
    certificateSheetUrl: 'YOUR_GOOGLE_SHEETS_PUBLISHED_CSV_URL',
    
    // Animation settings
    animationDuration: 600,
    statsAnimationDuration: 2000,
    
    // Testimonial slider settings
    testimonialAutoplayInterval: 5000,
    
    // Notification popup settings
    notificationInterval: 30000,
    notificationDuration: 5000,
    
    // Scroll settings
    headerScrollThreshold: 50,
    backToTopThreshold: 500,
    
    // Local storage keys
    storageKeys: {
        theme: 'skilvanta_theme',
        cookieConsent: 'skilvanta_cookies',
        formData: 'skilvanta_form_data',
        quizAnswers: 'skilvanta_quiz_answers'
    }
};

/* ==========================================
   DOM ELEMENTS
   ========================================== */
const DOM = {
    // Header & Navigation
    header: document.getElementById('header'),
    navMenu: document.getElementById('navMenu'),
    navToggle: document.getElementById('navToggle'),
    navLinks: document.querySelectorAll('.nav__link'),
    scrollProgress: document.getElementById('scrollProgress'),
    
    // Theme toggles
    themeToggle: document.getElementById('themeToggle'),
    themeToggleMobile: document.getElementById('themeToggleMobile'),
    
    // Internships
    internshipsGrid: document.getElementById('internshipsGrid'),
    internshipSearch: document.getElementById('internshipSearch'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    noResults: document.getElementById('noResults'),
    
    // Modal
    internshipModal: document.getElementById('internshipModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalContent: document.getElementById('modalContent'),
    
    // Certificate Verification
    certificateVerifyForm: document.getElementById('certificateVerifyForm'),
    verifyResult: document.getElementById('verifyResult'),
    
    // Lightbox
    certificateLightbox: document.getElementById('certificateLightbox'),
    
    // Testimonials
    testimonialTrack: document.getElementById('testimonialTrack'),
    testimonialDots: document.getElementById('testimonialDots'),
    testimonialPrev: document.getElementById('testimonialPrev'),
    testimonialNext: document.getElementById('testimonialNext'),
    
    // Video Modal
    videoModal: document.getElementById('videoModal'),
    videoModalContent: document.getElementById('videoModalContent'),
    
    // Quiz
    quizContainer: document.getElementById('quizContainer'),
    quizProgressBar: document.getElementById('quizProgressBar'),
    quizProgressText: document.getElementById('quizProgressText'),
    quizQuestions: document.querySelectorAll('.quiz-question'),
    quizPrev: document.getElementById('quizPrev'),
    quizNext: document.getElementById('quizNext'),
    quizResults: document.getElementById('quizResults'),
    resultsCards: document.getElementById('resultsCards'),
    
    // FAQ
    faqItems: document.querySelectorAll('.faq-item'),
    
    // Application Form
    applicationForm: document.getElementById('applicationForm'),
    formSteps: document.querySelectorAll('.form-step'),
    progressSteps: document.querySelectorAll('.progress-step'),
    progressLines: document.querySelectorAll('.progress-line'),
    formPrev: document.getElementById('formPrev'),
    formNext: document.getElementById('formNext'),
    formSubmit: document.getElementById('formSubmit'),
    formLoading: document.getElementById('formLoading'),
    formSuccess: document.getElementById('formSuccess'),
    
    // Contact Form
    contactForm: document.getElementById('contactForm'),
    
    // Floating elements
    backToTop: document.getElementById('backToTop'),
    cookieConsent: document.getElementById('cookieConsent'),
    cookieAccept: document.getElementById('cookieAccept'),
    cookieDecline: document.getElementById('cookieDecline'),
    notificationPopup: document.getElementById('notificationPopup'),
    notificationClose: document.getElementById('notificationClose'),
    
    // Stats
    statNumbers: document.querySelectorAll('.stat-number')
};

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },
    
    // Generate unique ID
    generateId(prefix = 'SKV') {
        const timestamp = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2, 8).toUpperCase();
        return `${prefix}-${timestamp}-${random}`.toUpperCase();
    },
    
    // Local storage helpers
    storage: {
        get(key) {
            try {
                const item = localStorage.getItem(key);
                return item ? JSON.parse(item) : null;
            } catch (e) {
                console.error('Error reading from localStorage:', e);
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.error('Error writing to localStorage:', e);
            }
        },
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.error('Error removing from localStorage:', e);
            }
        }
    },
    
    // Animate value counting
    animateValue(element, start, end, duration) {
        const range = end - start;
        const startTime = performance.now();
        
        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + range * easeOut);
            
            element.textContent = current.toLocaleString('en-IN');
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    },
    
    // Validate email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // Validate phone (Indian)
    isValidPhone(phone) {
        const phoneRegex = /^[6-9]\d{9}$/;
        return phoneRegex.test(phone);
    },
    
    // Get random item from array
    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
};

/* ==========================================
   INITIALIZATION
   ========================================== */
const App = {
    state: {
        currentFilter: 'all',
        searchQuery: '',
        currentTestimonial: 0,
        testimonialCount: 5,
        currentQuizQuestion: 1,
        totalQuizQuestions: 5,
        quizAnswers: {},
        currentFormStep: 1,
        totalFormSteps: 5,
        formData: {},
        isMenuOpen: false,
        isModalOpen: false
    },
    
    init() {
        console.log('🚀 Skilvanta Platform Initializing...');
        
        // Initialize all modules
        Navigation.init();
        Theme.init();
        ScrollEffects.init();
        Internships.init();
        Modal.init();
        Testimonials.init();
        Quiz.init();
        FAQ.init();
        ApplicationForm.init();
        ContactForm.init();
        CertificateVerification.init();
        FloatingElements.init();
        Notifications.init();
        
        // Initialize AOS-like animations
        ScrollAnimations.init();
        
        console.log('✅ Skilvanta Platform Ready!');
    }
};

/* ==========================================
   NAVIGATION MODULE
   ========================================== */
const Navigation = {
    init() {
        this.bindEvents();
        this.setActiveLink();
    },
    
    bindEvents() {
        // Mobile menu toggle
        if (DOM.navToggle) {
            DOM.navToggle.addEventListener('click', () => this.toggleMenu());
        }
        
        // Close menu when clicking nav links
        DOM.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
                this.setActiveLink();
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (App.state.isMenuOpen && 
                !DOM.navMenu.contains(e.target) && 
                !DOM.navToggle.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Handle scroll for active link highlighting
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateActiveLink();
        }, 100));
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    this.smoothScroll(href);
                }
            });
        });
    },
    
    toggleMenu() {
        App.state.isMenuOpen = !App.state.isMenuOpen;
        DOM.navMenu.classList.toggle('active', App.state.isMenuOpen);
        DOM.navToggle.classList.toggle('active', App.state.isMenuOpen);
        document.body.classList.toggle('menu-open', App.state.isMenuOpen);
    },
    
    closeMenu() {
        App.state.isMenuOpen = false;
        DOM.navMenu.classList.remove('active');
        DOM.navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    },
    
    smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            const headerHeight = DOM.header.offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerHeight - 20;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    },
    
    setActiveLink() {
        const hash = window.location.hash || '#home';
        DOM.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    },
    
    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + DOM.header.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                DOM.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
};

/* ==========================================
   THEME MODULE (DARK MODE)
   ========================================== */
const Theme = {
    init() {
        this.loadTheme();
        this.bindEvents();
    },
    
    bindEvents() {
        if (DOM.themeToggle) {
            DOM.themeToggle.addEventListener('click', () => this.toggle());
        }
        if (DOM.themeToggleMobile) {
            DOM.themeToggleMobile.addEventListener('click', () => this.toggle());
        }
    },
    
    loadTheme() {
        const savedTheme = Utils.storage.get(CONFIG.storageKeys.theme);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        this.setTheme(theme);
    },
    
    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
        Utils.storage.set(CONFIG.storageKeys.theme, newTheme);
    },
    
    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.updateIcons(theme);
    },
    
    updateIcons(theme) {
        const icon = theme === 'dark' ? '☀️' : '🌙';
        const themeIcons = document.querySelectorAll('.theme-icon');
        themeIcons.forEach(iconEl => {
            iconEl.textContent = icon;
        });
    }
};

/* ==========================================
   SCROLL EFFECTS MODULE
   ========================================== */
const ScrollEffects = {
    init() {
        this.bindEvents();
        this.updateOnScroll();
    },
    
    bindEvents() {
        window.addEventListener('scroll', Utils.throttle(() => {
            this.updateOnScroll();
        }, 10));
    },
    
    updateOnScroll() {
        const scrollY = window.scrollY;
        
        // Update header style
        this.updateHeader(scrollY);
        
        // Update scroll progress
        this.updateScrollProgress();
        
        // Update back to top button
        this.updateBackToTop(scrollY);
    },
    
    updateHeader(scrollY) {
        if (DOM.header) {
            DOM.header.classList.toggle('scrolled', scrollY > CONFIG.headerScrollThreshold);
        }
    },
    
    updateScrollProgress() {
        if (DOM.scrollProgress) {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            DOM.scrollProgress.style.width = `${scrolled}%`;
        }
    },
    
    updateBackToTop(scrollY) {
        if (DOM.backToTop) {
            DOM.backToTop.classList.toggle('visible', scrollY > CONFIG.backToTopThreshold);
        }
    }
};

/* ==========================================
   SCROLL ANIMATIONS MODULE (AOS-like)
   ========================================== */
const ScrollAnimations = {
    observer: null,
    
    init() {
        this.createObserver();
        this.observeElements();
        this.initStatsCounter();
    },
    
    createObserver() {
        const options = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-animate');
                    
                    // Check if it's a stats section
                    if (entry.target.closest('.hero__stats')) {
                        this.animateStats();
                    }
                }
            });
        }, options);
    },
    
    observeElements() {
        const animatedElements = document.querySelectorAll('[data-aos]');
        animatedElements.forEach(el => {
            this.observer.observe(el);
        });
    },
    
    initStatsCounter() {
        // Create observer specifically for stats
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        const statsSection = document.querySelector('.hero__stats');
        if (statsSection) {
            statsObserver.observe(statsSection);
        }
    },
    
    animateStats() {
        DOM.statNumbers.forEach(stat => {
            if (stat.dataset.animated) return;
            
            const endValue = parseInt(stat.dataset.count, 10);
            Utils.animateValue(stat, 0, endValue, CONFIG.statsAnimationDuration);
            stat.dataset.animated = 'true';
        });
    }
};

/* ==========================================
   PARTNERS CAROUSEL (Auto-scroll handled by CSS)
   Additional JS for pause on hover
   ========================================== */
const PartnersCarousel = {
    init() {
        const track = document.querySelector('.partners__track');
        if (track) {
            // Pause animation on hover
            track.addEventListener('mouseenter', () => {
                track.style.animationPlayState = 'paused';
            });
            
            track.addEventListener('mouseleave', () => {
                track.style.animationPlayState = 'running';
            });
        }
    }
};

// Initialize Partners Carousel
document.addEventListener('DOMContentLoaded', () => {
    PartnersCarousel.init();
});

/* ==========================================
   BACK TO TOP FUNCTIONALITY
   ========================================== */
if (DOM.backToTop) {
    DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================
   DOCUMENT READY - INITIALIZE APP
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

/* ==========================================
   KEYBOARD NAVIGATION
   ========================================== */
document.addEventListener('keydown', (e) => {
    // Close modal on Escape
    if (e.key === 'Escape') {
        if (App.state.isModalOpen) {
            Modal.close();
        }
        if (DOM.videoModal && DOM.videoModal.classList.contains('active')) {
            closeVideoModal();
        }
        if (DOM.certificateLightbox && DOM.certificateLightbox.classList.contains('active')) {
            closeCertificateLightbox();
        }
    }
});
/* ============================================
   SKILVANTA - script.js - Part 2 of 3
   ============================================ */

/* ==========================================
   INTERNSHIPS MODULE
   ========================================== */
const Internships = {
    filteredData: [...internshipsData],
    
    init() {
        this.render();
        this.bindEvents();
    },
    
    bindEvents() {
        // Search input
        if (DOM.internshipSearch) {
            DOM.internshipSearch.addEventListener('input', Utils.debounce((e) => {
                App.state.searchQuery = e.target.value.toLowerCase().trim();
                this.filterAndRender();
            }, 300));
        }
        
        // Filter buttons
        DOM.filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                DOM.filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                App.state.currentFilter = btn.dataset.filter;
                this.filterAndRender();
            });
        });
    },
    
    filterAndRender() {
        this.filteredData = internshipsData.filter(internship => {
            // Category filter
            const matchesCategory = App.state.currentFilter === 'all' || 
                                   internship.category === App.state.currentFilter;
            
            // Search filter
            const matchesSearch = App.state.searchQuery === '' ||
                                 internship.title.toLowerCase().includes(App.state.searchQuery) ||
                                 internship.skills.some(skill => 
                                     skill.toLowerCase().includes(App.state.searchQuery)
                                 ) ||
                                 internship.category.toLowerCase().includes(App.state.searchQuery);
            
            return matchesCategory && matchesSearch;
        });
        
        this.render();
    },
    
    render() {
        if (!DOM.internshipsGrid) return;
        
        // Remove skeleton loader
        const skeleton = DOM.internshipsGrid.querySelector('.loading-skeleton');
        if (skeleton) skeleton.remove();
        
        // Check if no results
        if (this.filteredData.length === 0) {
            DOM.internshipsGrid.innerHTML = '';
            if (DOM.noResults) DOM.noResults.style.display = 'block';
            return;
        }
        
        if (DOM.noResults) DOM.noResults.style.display = 'none';
        
        // Render cards
        DOM.internshipsGrid.innerHTML = this.filteredData.map(internship => 
            this.createCard(internship)
        ).join('');
        
        // Bind view details buttons
        DOM.internshipsGrid.querySelectorAll('.view-details-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const internshipId = btn.dataset.id;
                const internship = internshipsData.find(i => i.id === internshipId);
                if (internship) {
                    Modal.open(internship);
                }
            });
        });
    },
    
    createCard(internship) {
        const modeClass = `badge--${internship.mode}`;
        const modeLabel = internship.mode.charAt(0).toUpperCase() + internship.mode.slice(1);
        const categoryLabel = internship.category.charAt(0).toUpperCase() + internship.category.slice(1);
        
        return `
            <div class="internship-card" data-category="${internship.category}">
                <div class="internship-card__header">
                    <div class="internship-card__badges">
                        <span class="badge ${modeClass}">${modeLabel}</span>
                        <span class="badge badge--category">${categoryLabel}</span>
                    </div>
                    <h3 class="internship-card__title">${internship.title}</h3>
                    <div class="internship-card__meta">
                        <span class="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            ${internship.duration}
                        </span>
                        <span class="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                                <path d="M16 3.13a4 4 0 010 7.75"/>
                            </svg>
                            ${internship.applications}+ applied
                        </span>
                    </div>
                </div>
                
                <div class="internship-card__body">
                    <div class="internship-card__stipend">
                        <span class="stipend-label">Stipend:</span>
                        <span class="stipend-amount">₹${internship.stipendMin.toLocaleString('en-IN')} - ₹${internship.stipendMax.toLocaleString('en-IN')}</span>
                        <span class="stipend-period">/month</span>
                    </div>
                    
                    <div class="internship-card__skills">
                        <span class="skills-label">Skills you'll learn</span>
                        <div class="skills-list">
                            ${internship.skills.slice(0, 4).map(skill => 
                                `<span class="skill-tag">${skill}</span>`
                            ).join('')}
                            ${internship.skills.length > 4 ? 
                                `<span class="skill-tag">+${internship.skills.length - 4} more</span>` : ''
                            }
                        </div>
                    </div>
                    
                    <div class="internship-card__applications">
                        <span class="applications-dot"></span>
                        <span>${Math.floor(Math.random() * 20) + 5} students applied today</span>
                    </div>
                </div>
                
                <div class="internship-card__footer">
                    <button class="view-details-btn" data-id="${internship.id}">
                        View Details & Apply
                    </button>
                </div>
            </div>
        `;
    }
};

// Global function for reset filters button
function resetFilters() {
    App.state.currentFilter = 'all';
    App.state.searchQuery = '';
    
    if (DOM.internshipSearch) DOM.internshipSearch.value = '';
    
    DOM.filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') btn.classList.add('active');
    });
    
    Internships.filterAndRender();
}

/* ==========================================
   MODAL MODULE
   ========================================== */
const Modal = {
    init() {
        this.bindEvents();
    },
    
    bindEvents() {
        // Close modal on overlay click
        if (DOM.modalOverlay) {
            DOM.modalOverlay.addEventListener('click', () => this.close());
        }
        
        // Close modal on close button click
        if (DOM.modalClose) {
            DOM.modalClose.addEventListener('click', () => this.close());
        }
    },
    
    open(internship) {
        if (!DOM.internshipModal || !DOM.modalContent) return;
        
        DOM.modalContent.innerHTML = this.createContent(internship);
        DOM.internshipModal.classList.add('active');
        document.body.classList.add('modal-open');
        App.state.isModalOpen = true;
        
        // Bind apply button in modal
        const applyBtn = DOM.modalContent.querySelector('.modal-apply-btn');
        if (applyBtn) {
            applyBtn.addEventListener('click', () => {
                this.close();
                // Scroll to application form
                Navigation.smoothScroll('#apply');
                
                // Pre-select the program in form
                setTimeout(() => {
                    const programSelect = document.getElementById('program');
                    if (programSelect) {
                        programSelect.value = internship.id;
                    }
                }, 500);
            });
        }
        
        // Bind batch date selection
        const batchDates = DOM.modalContent.querySelectorAll('.batch-date');
        batchDates.forEach(date => {
            date.addEventListener('click', () => {
                batchDates.forEach(d => d.classList.remove('selected'));
                date.classList.add('selected');
            });
        });
    },
    
    close() {
        if (!DOM.internshipModal) return;
        
        DOM.internshipModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        App.state.isModalOpen = false;
    },
    
    createContent(internship) {
        const modeClass = `badge--${internship.mode}`;
        const modeLabel = internship.mode.charAt(0).toUpperCase() + internship.mode.slice(1);
        const categoryLabel = internship.category.charAt(0).toUpperCase() + internship.category.slice(1);
        
        return `
            <div class="modal-header">
                <div class="modal-header__badges">
                    <span class="badge ${modeClass}">${modeLabel}</span>
                    <span class="badge badge--category">${categoryLabel}</span>
                    ${internship.featured ? '<span class="badge" style="background: rgba(245, 158, 11, 0.1); color: #F59E0B;">⭐ Featured</span>' : ''}
                </div>
                <h2 class="modal-header__title">${internship.title} Internship</h2>
                <div class="modal-header__meta">
                    <div class="modal-meta-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                        <span><strong>${internship.duration}</strong> Duration</span>
                    </div>
                    <div class="modal-meta-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                        </svg>
                        <span><strong>₹${internship.stipendMin.toLocaleString('en-IN')} - ₹${internship.stipendMax.toLocaleString('en-IN')}</strong>/month</span>
                    </div>
                    <div class="modal-meta-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                        </svg>
                        <span><strong>${internship.applications}+</strong> Applications</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="16" x2="12" y2="12"/>
                        <line x1="12" y1="8" x2="12.01" y2="8"/>
                    </svg>
                    About This Internship
                </h3>
                <p>${internship.description}</p>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,11 12,14 22,4"/>
                        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                    Eligibility Criteria
                </h3>
                <ul>
                    ${internship.eligibility.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                    </svg>
                    Weekly Curriculum
                </h3>
                <div class="curriculum-timeline">
                    ${internship.curriculum.map(week => `
                        <div class="curriculum-week">
                            <h4>${week.week}</h4>
                            <p>${week.content}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    Tools & Technologies
                </h3>
                <div class="tools-grid">
                    ${internship.tools.map(tool => `
                        <div class="tool-item">
                            <span>${tool}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="8" r="7"/>
                        <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
                    </svg>
                    Learning Outcomes
                </h3>
                <ul>
                    ${internship.outcomes.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Upcoming Batch Dates
                </h3>
                <div class="batch-dates">
                    ${internship.batchDates.map((date, index) => `
                        <div class="batch-date ${index === 0 ? 'selected' : ''}">
                            <span class="batch-date__month">2024</span>
                            <span class="batch-date__day">${date}</span>
                            <span class="batch-date__status">${index === 0 ? 'Starting Soon' : 'Open'}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="modal-section">
                <h3 class="modal-section__title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22,4 12,14.01 9,11.01"/>
                    </svg>
                    What You'll Get
                </h3>
                <ul>
                    <li>Verified Completion Certificate</li>
                    <li>Letter of Recommendation (Professional & Premium plans)</li>
                    <li>Monthly Stipend (₹${internship.stipendMin.toLocaleString('en-IN')} - ₹${internship.stipendMax.toLocaleString('en-IN')})</li>
                    <li>Portfolio-worthy projects</li>
                    <li>LinkedIn endorsement</li>
                    <li>Placement assistance (Premium plan)</li>
                </ul>
            </div>
            
            <div class="modal-footer">
                <div class="modal-price">
                    <span class="modal-price__label">Starting from</span>
                    <span class="modal-price__original">₹2,999</span>
                    <span class="modal-price__current">₹1,999</span>
                </div>
                <button class="btn btn-primary btn-lg modal-apply-btn">
                    <span>Apply Now</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        `;
    }
};

/* ==========================================
   TESTIMONIALS SLIDER MODULE
   ========================================== */
const Testimonials = {
    autoplayInterval: null,
    touchStartX: 0,
    touchEndX: 0,
    
    init() {
        if (!DOM.testimonialTrack) return;
        
        this.calculateSlides();
        this.createDots();
        this.bindEvents();
        this.startAutoplay();
    },
    
    calculateSlides() {
        // Calculate number of visible slides based on viewport
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 992) {
            this.slidesPerView = 3;
        } else if (viewportWidth >= 768) {
            this.slidesPerView = 2;
        } else {
            this.slidesPerView = 1;
        }
        
        this.totalSlides = App.state.testimonialCount;
        this.maxIndex = Math.max(0, this.totalSlides - this.slidesPerView);
    },
    
    createDots() {
        if (!DOM.testimonialDots) return;
        
        const dotsCount = this.maxIndex + 1;
        DOM.testimonialDots.innerHTML = '';
        
        for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('button');
            dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.addEventListener('click', () => this.goToSlide(i));
            DOM.testimonialDots.appendChild(dot);
        }
    },
    
    bindEvents() {
        // Previous button
        if (DOM.testimonialPrev) {
            DOM.testimonialPrev.addEventListener('click', () => this.prev());
        }
        
        // Next button
        if (DOM.testimonialNext) {
            DOM.testimonialNext.addEventListener('click', () => this.next());
        }
        
        // Touch events for swipe
        if (DOM.testimonialTrack) {
            DOM.testimonialTrack.addEventListener('touchstart', (e) => {
                this.touchStartX = e.changedTouches[0].screenX;
                this.pauseAutoplay();
            }, { passive: true });
            
            DOM.testimonialTrack.addEventListener('touchend', (e) => {
                this.touchEndX = e.changedTouches[0].screenX;
                this.handleSwipe();
                this.startAutoplay();
            }, { passive: true });
        }
        
        // Pause on hover
        const slider = document.querySelector('.testimonials__slider');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.pauseAutoplay());
            slider.addEventListener('mouseleave', () => this.startAutoplay());
        }
        
        // Recalculate on resize
        window.addEventListener('resize', Utils.debounce(() => {
            this.calculateSlides();
            this.createDots();
            this.goToSlide(Math.min(App.state.currentTestimonial, this.maxIndex));
        }, 250));
    },
    
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    },
    
    prev() {
        const newIndex = App.state.currentTestimonial - 1;
        this.goToSlide(newIndex < 0 ? this.maxIndex : newIndex);
    },
    
    next() {
        const newIndex = App.state.currentTestimonial + 1;
        this.goToSlide(newIndex > this.maxIndex ? 0 : newIndex);
    },
    
    goToSlide(index) {
        App.state.currentTestimonial = index;
        
        const slideWidth = 100 / this.slidesPerView;
        const offset = index * slideWidth;
        
        DOM.testimonialTrack.style.transform = `translateX(-${offset}%)`;
        
        // Update dots
        const dots = DOM.testimonialDots.querySelectorAll('.slider-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    },
    
    startAutoplay() {
        this.pauseAutoplay();
        this.autoplayInterval = setInterval(() => {
            this.next();
        }, CONFIG.testimonialAutoplayInterval);
    },
    
    pauseAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
};

/* ==========================================
   VIDEO MODAL FUNCTIONS
   ========================================== */
function openVideoModal(videoId) {
    if (!DOM.videoModal || !DOM.videoModalContent) return;
    
    // In a real implementation, you'd use actual YouTube embed URLs
    const videoUrls = {
        'video1': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'video2': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        'video3': 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    };
    
    const videoUrl = videoUrls[videoId] || videoUrls['video1'];
    
    DOM.videoModalContent.innerHTML = `
        <iframe 
            src="${videoUrl}?autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    DOM.videoModal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeVideoModal() {
    if (!DOM.videoModal) return;
    
    DOM.videoModalContent.innerHTML = '';
    DOM.videoModal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

/* ==========================================
   CERTIFICATE LIGHTBOX FUNCTIONS
   ========================================== */
function openCertificateLightbox() {
    if (!DOM.certificateLightbox) return;
    DOM.certificateLightbox.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeCertificateLightbox() {
    if (!DOM.certificateLightbox) return;
    DOM.certificateLightbox.classList.remove('active');
    document.body.classList.remove('modal-open');
}

/* ==========================================
   QUIZ MODULE
   ========================================== */
const Quiz = {
    init() {
        if (!DOM.quizContainer) return;
        
        this.loadSavedAnswers();
        this.bindEvents();
        this.updateUI();
    },
    
    loadSavedAnswers() {
        const saved = Utils.storage.get(CONFIG.storageKeys.quizAnswers);
        if (saved) {
            App.state.quizAnswers = saved;
            
            // Restore radio selections
            Object.entries(saved).forEach(([question, value]) => {
                const radio = document.querySelector(`input[name="${question}"][value="${value}"]`);
                if (radio) radio.checked = true;
            });
        }
    },
    
    bindEvents() {
        // Option selection
        const options = document.querySelectorAll('.quiz-question input[type="radio"]');
        options.forEach(option => {
            option.addEventListener('change', (e) => {
                const questionName = e.target.name;
                App.state.quizAnswers[questionName] = e.target.value;
                Utils.storage.set(CONFIG.storageKeys.quizAnswers, App.state.quizAnswers);
            });
        });
        
        // Previous button
        if (DOM.quizPrev) {
            DOM.quizPrev.addEventListener('click', () => this.prev());
        }
        
        // Next button
        if (DOM.quizNext) {
            DOM.quizNext.addEventListener('click', () => this.next());
        }
    },
    
    updateUI() {
        const current = App.state.currentQuizQuestion;
        const total = App.state.totalQuizQuestions;
        
        // Update progress bar
        if (DOM.quizProgressBar) {
            DOM.quizProgressBar.style.setProperty('--progress', `${(current / total) * 100}%`);
            const bar = DOM.quizProgressBar.querySelector('::after') || DOM.quizProgressBar;
            DOM.quizProgressBar.innerHTML = `<div style="width: ${(current / total) * 100}%; height: 100%; background: var(--primary-gradient); border-radius: var(--radius-full); transition: width 0.3s ease;"></div>`;
        }
        
        // Update progress text
        if (DOM.quizProgressText) {
            DOM.quizProgressText.textContent = `Question ${current} of ${total}`;
        }
        
        // Show/hide questions
        DOM.quizQuestions.forEach((question, index) => {
            question.classList.toggle('active', index + 1 === current);
        });
        
        // Update prev button visibility
        if (DOM.quizPrev) {
            DOM.quizPrev.classList.toggle('visible', current > 1);
            DOM.quizPrev.disabled = current === 1;
        }
        
        // Update next button text
        if (DOM.quizNext) {
            DOM.quizNext.innerHTML = current === total ? 
                '<span>See Results</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>' :
                '<span>Next</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>';
        }
    },
    
    prev() {
        if (App.state.currentQuizQuestion > 1) {
            App.state.currentQuizQuestion--;
            this.updateUI();
        }
    },
    
    next() {
        // Validate current question is answered
        const currentQuestionName = `q${App.state.currentQuizQuestion}`;
        if (!App.state.quizAnswers[currentQuestionName]) {
            this.showValidationError();
            return;
        }
        
        if (App.state.currentQuizQuestion < App.state.totalQuizQuestions) {
            App.state.currentQuizQuestion++;
            this.updateUI();
        } else {
            this.showResults();
        }
    },
    
    showValidationError() {
        const currentQuestion = document.querySelector(`.quiz-question[data-question="${App.state.currentQuizQuestion}"]`);
        if (currentQuestion) {
            currentQuestion.classList.add('shake');
            setTimeout(() => currentQuestion.classList.remove('shake'), 500);
        }
    },
    
    showResults() {
        // Hide quiz container, show results
        if (DOM.quizContainer) DOM.quizContainer.style.display = 'none';
        if (DOM.quizResults) DOM.quizResults.style.display = 'block';
        
        // Calculate recommendations
        const recommendations = this.calculateRecommendations();
        this.renderResults(recommendations);
    },
    
    calculateRecommendations() {
        const answers = App.state.quizAnswers;
        const scores = {};
        
        // Initialize scores for all internships
        internshipsData.forEach(internship => {
            scores[internship.id] = 0;
        });
        
        // Score based on field interest (q2)
        if (answers.q2) {
            internshipsData.forEach(internship => {
                if (internship.category === answers.q2) {
                    scores[internship.id] += 40;
                } else if (
                    (answers.q2 === 'technical' && internship.category === 'design') ||
                    (answers.q2 === 'design' && internship.category === 'technical')
                ) {
                    scores[internship.id] += 15;
                }
            });
        }
        
        // Score based on availability (q3)
        if (answers.q3) {
            internshipsData.forEach(internship => {
                const duration = parseInt(internship.duration);
                if (answers.q3 === '35+' && duration >= 2) {
                    scores[internship.id] += 20;
                } else if (answers.q3 === '25-35' && duration >= 2) {
                    scores[internship.id] += 15;
                } else if ((answers.q3 === '15-25' || answers.q3 === '10-15') && duration <= 2) {
                    scores[internship.id] += 20;
                }
            });
        }
        
        // Score based on goal (q4)
        if (answers.q4) {
            internshipsData.forEach(internship => {
                if (answers.q4 === 'earn-money' && internship.stipendMax >= 10000) {
                    scores[internship.id] += 20;
                }
                if (answers.q4 === 'get-job' && internship.featured) {
                    scores[internship.id] += 20;
                }
                if (answers.q4 === 'build-portfolio' && 
                    ['design', 'technical'].includes(internship.category)) {
                    scores[internship.id] += 20;
                }
            });
        }
        
        // Score based on experience (q5)
        if (answers.q5) {
            internshipsData.forEach(internship => {
                const duration = parseInt(internship.duration);
                if (answers.q5 === 'beginner' && duration <= 1) {
                    scores[internship.id] += 15;
                } else if (answers.q5 === 'advanced' && duration >= 2) {
                    scores[internship.id] += 15;
                } else if (answers.q5 === 'intermediate') {
                    scores[internship.id] += 10;
                }
            });
        }
        
        // Convert to array and sort by score
        const recommendations = Object.entries(scores)
            .map(([id, score]) => ({
                internship: internshipsData.find(i => i.id === id),
                score: Math.min(score + 20, 98) // Add base score, cap at 98%
            }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 3);
        
        return recommendations;
    },
    
    renderResults(recommendations) {
        if (!DOM.resultsCards) return;
        
        DOM.resultsCards.innerHTML = recommendations.map(rec => `
            <div class="result-card" onclick="Modal.open(internshipsData.find(i => i.id === '${rec.internship.id}'))">
                <div class="result-match">${rec.score}%</div>
                <div class="result-info">
                    <h4>${rec.internship.title}</h4>
                    <p>${rec.internship.duration} • ₹${rec.internship.stipendMin.toLocaleString('en-IN')} - ₹${rec.internship.stipendMax.toLocaleString('en-IN')}/month</p>
                </div>
                <div class="result-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9,18 15,12 9,6"/>
                    </svg>
                </div>
            </div>
        `).join('');
    }
};

// Global function to restart quiz
function restartQuiz() {
    App.state.currentQuizQuestion = 1;
    App.state.quizAnswers = {};
    Utils.storage.remove(CONFIG.storageKeys.quizAnswers);
    
    // Clear radio selections
    document.querySelectorAll('.quiz-question input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    
    // Show quiz, hide results
    if (DOM.quizContainer) DOM.quizContainer.style.display = 'block';
    if (DOM.quizResults) DOM.quizResults.style.display = 'none';
    
    Quiz.updateUI();
}

/* ==========================================
   FAQ MODULE
   ========================================== */
const FAQ = {
    init() {
        if (!DOM.faqItems || DOM.faqItems.length === 0) return;
        this.bindEvents();
    },
    
    bindEvents() {
        DOM.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (question) {
                question.addEventListener('click', () => this.toggle(item));
            }
        });
    },
    
    toggle(item) {
        const isActive = item.classList.contains('active');
        
        // Close all items (accordion behavior)
        DOM.faqItems.forEach(faq => {
            faq.classList.remove('active');
            const btn = faq.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            const btn = item.querySelector('.faq-question');
            if (btn) btn.setAttribute('aria-expanded', 'true');
        }
    }
};

/* ==========================================
   CERTIFICATE VERIFICATION MODULE
   Using Google Sheets as Database
   ========================================== */
const CertificateVerification = {
    // Sample certificate data (in production, this comes from Google Sheets)
    sampleCertificates: {
        'SKV-CERT-2024-001234': {
            name: 'Rahul Agarwal',
            program: 'Web Development Internship',
            completionDate: 'March 15, 2024',
            grade: 'A+',
            mentorName: 'Priya Sharma',
            duration: '2 months'
        },
        'SKV-CERT-2024-001235': {
            name: 'Priya Sharma',
            program: 'Data Science Internship',
            completionDate: 'February 28, 2024',
            grade: 'A',
            mentorName: 'Rajesh Kumar',
            duration: '2 months'
        },
        'SKV-CERT-2024-001236': {
            name: 'Amit Kumar',
            program: 'Digital Marketing Internship',
            completionDate: 'January 20, 2024',
            grade: 'A',
            mentorName: 'Anita Sharma',
            duration: '1 month'
        }
    },
    
    // Google Sheets Published URL (CSV format)
    sheetsUrl: '',
    certificatesCache: null,
    
    init() {
        if (!DOM.certificateVerifyForm) return;
        this.bindEvents();
    },
    
    bindEvents() {
        DOM.certificateVerifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.verify();
        });
    },
    
    async verify() {
        const input = document.getElementById('certificateId');
        const submitBtn = document.getElementById('verifyBtn');
        const certificateId = input.value.trim().toUpperCase();
        
        if (!certificateId) {
            this.showError('Please enter a certificate ID');
            return;
        }
        
        // Validate format
        const formatRegex = /^SKV-CERT-\d{4}-\d{6}$/;
        if (!formatRegex.test(certificateId)) {
            this.showError('Invalid certificate ID format. Expected: SKV-CERT-YYYY-XXXXXX');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Try to fetch from Google Sheets first
            let certificate = await this.fetchFromGoogleSheets(certificateId);
            
            // Fallback to sample data if sheets not configured
            if (!certificate) {
                certificate = this.sampleCertificates[certificateId];
            }
            
            // Simulate network delay for demo
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (certificate) {
                this.showSuccess(certificateId, certificate);
            } else {
                this.showError('Certificate not found. Please check the ID and try again.');
            }
        } catch (error) {
            console.error('Verification error:', error);
            
            // Fallback to sample data
            const certificate = this.sampleCertificates[certificateId];
            if (certificate) {
                this.showSuccess(certificateId, certificate);
            } else {
                this.showError('Certificate not found. Please check the ID and try again.');
            }
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    },
    
    async fetchFromGoogleSheets(certificateId) {
        // If no sheets URL configured, return null
        if (!this.sheetsUrl && !CONFIG.certificateSheetUrl) {
            return null;
        }
        
        const url = this.sheetsUrl || CONFIG.certificateSheetUrl;
        
        try {
            // If we haven't cached the data yet, fetch it
            if (!this.certificatesCache) {
                const response = await fetch(url);
                const csvText = await response.text();
                this.certificatesCache = this.parseCSV(csvText);
            }
            
            // Find the certificate
            return this.certificatesCache[certificateId] || null;
        } catch (error) {
            console.error('Error fetching from Google Sheets:', error);
            return null;
        }
    },
    
    parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
        const certificates = {};
        
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim());
            const certId = values[headers.indexOf('certificate_id')] || values[headers.indexOf('id')];
            
            if (certId) {
                certificates[certId.toUpperCase()] = {
                    name: values[headers.indexOf('name')] || values[headers.indexOf('student_name')] || 'N/A',
                    program: values[headers.indexOf('program')] || values[headers.indexOf('internship')] || 'N/A',
                    completionDate: values[headers.indexOf('completion_date')] || values[headers.indexOf('date')] || 'N/A',
                    grade: values[headers.indexOf('grade')] || 'N/A',
                    mentorName: values[headers.indexOf('mentor')] || values[headers.indexOf('mentor_name')] || 'N/A',
                    duration: values[headers.indexOf('duration')] || 'N/A'
                };
            }
        }
        
        return certificates;
    },
    
    showSuccess(certificateId, data) {
        if (!DOM.verifyResult) return;
        
        DOM.verifyResult.style.display = 'block';
        DOM.verifyResult.className = 'verify-result success';
        DOM.verifyResult.innerHTML = `
            <div class="verify-result__icon">✅</div>
            <h4 class="verify-result__title">Certificate Verified!</h4>
            <p>This certificate is authentic and was issued by Skilvanta.</p>
            <div class="verify-result__details">
                <div class="detail-row">
                    <span>Certificate ID</span>
                    <span>${certificateId}</span>
                </div>
                <div class="detail-row">
                    <span>Student Name</span>
                    <span>${data.name}</span>
                </div>
                <div class="detail-row">
                    <span>Program</span>
                    <span>${data.program}</span>
                </div>
                <div class="detail-row">
                    <span>Completion Date</span>
                    <span>${data.completionDate}</span>
                </div>
                <div class="detail-row">
                    <span>Duration</span>
                    <span>${data.duration}</span>
                </div>
                <div class="detail-row">
                    <span>Grade</span>
                    <span>${data.grade}</span>
                </div>
                <div class="detail-row">
                    <span>Mentor</span>
                    <span>${data.mentorName}</span>
                </div>
            </div>
        `;
        
        // Scroll to result
        DOM.verifyResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    },
    
    showError(message) {
        if (!DOM.verifyResult) return;
        
        DOM.verifyResult.style.display = 'block';
        DOM.verifyResult.className = 'verify-result error';
        DOM.verifyResult.innerHTML = `
            <div class="verify-result__icon">❌</div>
            <h4 class="verify-result__title">Verification Failed</h4>
            <p>${message}</p>
            <p style="margin-top: 1rem; font-size: 0.875rem;">
                If you believe this is an error, please contact us at 
                <a href="mailto:support@skilvanta.in">support@skilvanta.in</a>
            </p>
        `;
        
        // Scroll to result
        DOM.verifyResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
};

/* ==========================================
   CONFIGURE GOOGLE SHEETS FOR CERTIFICATE VERIFICATION
   
   To set up certificate verification with Google Sheets:
   
   1. Create a Google Sheet with columns:
      - certificate_id (e.g., SKV-CERT-2024-001234)
      - name (Student name)
      - program (e.g., Web Development Internship)
      - completion_date (e.g., March 15, 2024)
      - duration (e.g., 2 months)
      - grade (e.g., A+)
      - mentor_name (e.g., John Doe)
   
   2. Publish the sheet:
      - File > Share > Publish to web
      - Select the sheet tab
      - Choose "Comma-separated values (.csv)"
      - Click Publish
      - Copy the URL
   
   3. Update the CONFIG.certificateSheetUrl with your URL:
      CONFIG.certificateSheetUrl = 'https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv'
   
   ========================================== */
   /* ============================================
   SKILVANTA - script.js - Part 3 of 3
   ============================================ */

/* ==========================================
   APPLICATION FORM MODULE
   ========================================== */
const ApplicationForm = {
    init() {
        if (!DOM.applicationForm) return;
        
        this.loadSavedData();
        this.bindEvents();
        this.updateUI();
        this.setupFileUpload();
        this.setupCharacterCount();
    },
    
    loadSavedData() {
        const saved = Utils.storage.get(CONFIG.storageKeys.formData);
        if (saved) {
            App.state.formData = saved;
            this.populateForm(saved);
        }
    },
    
    populateForm(data) {
        Object.entries(data).forEach(([key, value]) => {
            const field = document.getElementById(key) || 
                         document.querySelector(`[name="${key}"]`);
            
            if (field) {
                if (field.type === 'radio') {
                    const radio = document.querySelector(`[name="${key}"][value="${value}"]`);
                    if (radio) radio.checked = true;
                } else if (field.type === 'checkbox') {
                    field.checked = value;
                } else {
                    field.value = value;
                }
            }
        });
    },
    
    bindEvents() {
        // Previous button
        if (DOM.formPrev) {
            DOM.formPrev.addEventListener('click', () => this.prevStep());
        }
        
        // Next button
        if (DOM.formNext) {
            DOM.formNext.addEventListener('click', () => this.nextStep());
        }
        
        // Form submission
        DOM.applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });
        
        // Auto-save form data
        const formInputs = DOM.applicationForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('change', () => this.saveFormData());
            input.addEventListener('input', Utils.debounce(() => this.saveFormData(), 500));
        });
        
        // Real-time validation
        formInputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        });
        
        // Edit buttons in review step
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const stepToEdit = parseInt(btn.dataset.editStep);
                this.goToStep(stepToEdit);
            });
        });
        
        // Plan selection visual feedback
        document.querySelectorAll('.plan-option input').forEach(input => {
            input.addEventListener('change', () => {
                document.querySelectorAll('.plan-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                input.closest('.plan-option').classList.add('selected');
            });
        });
    },
    
    setupFileUpload() {
        const fileInput = document.getElementById('resume');
        const fileUpload = document.getElementById('fileUpload');
        const fileInfo = document.getElementById('fileInfo');
        const fileName = document.getElementById('fileName');
        const removeFile = document.getElementById('removeFile');
        const uploadContent = document.querySelector('.file-upload__content');
        
        if (!fileInput) return;
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            
            if (file) {
                // Validate file type
                if (file.type !== 'application/pdf') {
                    this.showFieldError(fileInput, 'Please upload a PDF file only');
                    fileInput.value = '';
                    return;
                }
                
                // Validate file size (5MB max)
                if (file.size > 5 * 1024 * 1024) {
                    this.showFieldError(fileInput, 'File size must be less than 5MB');
                    fileInput.value = '';
                    return;
                }
                
                // Show file info
                if (uploadContent) uploadContent.style.display = 'none';
                if (fileInfo) {
                    fileInfo.style.display = 'flex';
                    fileName.textContent = file.name;
                }
                
                this.clearFieldError(fileInput);
            }
        });
        
        // Remove file
        if (removeFile) {
            removeFile.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                fileInput.value = '';
                if (uploadContent) uploadContent.style.display = 'flex';
                if (fileInfo) fileInfo.style.display = 'none';
            });
        }
        
        // Drag and drop
        if (fileUpload) {
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                fileUpload.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });
            
            ['dragenter', 'dragover'].forEach(eventName => {
                fileUpload.addEventListener(eventName, () => {
                    fileUpload.classList.add('drag-over');
                });
            });
            
            ['dragleave', 'drop'].forEach(eventName => {
                fileUpload.addEventListener(eventName, () => {
                    fileUpload.classList.remove('drag-over');
                });
            });
            
            fileUpload.addEventListener('drop', (e) => {
                const files = e.dataTransfer.files;
                if (files.length) {
                    fileInput.files = files;
                    fileInput.dispatchEvent(new Event('change'));
                }
            });
        }
    },
    
    setupCharacterCount() {
        const motivation = document.getElementById('motivation');
        const countDisplay = document.getElementById('motivationCount');
        
        if (motivation && countDisplay) {
            motivation.addEventListener('input', () => {
                const count = motivation.value.length;
                countDisplay.textContent = count;
                
                if (count > 450) {
                    countDisplay.style.color = 'var(--warning)';
                } else if (count >= 500) {
                    countDisplay.style.color = 'var(--error)';
                } else {
                    countDisplay.style.color = 'var(--text-muted)';
                }
            });
        }
    },
    
    saveFormData() {
        const formData = new FormData(DOM.applicationForm);
        const data = {};
        
        formData.forEach((value, key) => {
            if (key !== 'resume') { // Don't save file in localStorage
                data[key] = value;
            }
        });
        
        App.state.formData = data;
        Utils.storage.set(CONFIG.storageKeys.formData, data);
    },
    
    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name || field.id;
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Specific field validations
        if (value) {
            switch (fieldName) {
                case 'email':
                    if (!Utils.isValidEmail(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid email address';
                    }
                    break;
                    
                case 'phone':
                    if (!Utils.isValidPhone(value)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid 10-digit mobile number';
                    }
                    break;
                    
                case 'fullName':
                    if (value.length < 3) {
                        isValid = false;
                        errorMessage = 'Name must be at least 3 characters';
                    }
                    break;
                    
                case 'dob':
                    const birthDate = new Date(value);
                    const today = new Date();
                    const age = today.getFullYear() - birthDate.getFullYear();
                    if (age < 16 || age > 60) {
                        isValid = false;
                        errorMessage = 'Age must be between 16 and 60 years';
                    }
                    break;
                    
                case 'linkedin':
                    if (value && !value.includes('linkedin.com')) {
                        isValid = false;
                        errorMessage = 'Please enter a valid LinkedIn URL';
                    }
                    break;
                    
                case 'portfolio':
                    if (value && !value.match(/^https?:\/\//)) {
                        isValid = false;
                        errorMessage = 'Please enter a valid URL starting with http:// or https://';
                    }
                    break;
                    
                case 'motivation':
                    if (value.length < 50) {
                        isValid = false;
                        errorMessage = 'Please write at least 50 characters';
                    }
                    break;
            }
        }
        
        if (isValid) {
            this.clearFieldError(field);
        } else {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    },
    
    showFieldError(field, message) {
        field.classList.add('error');
        field.classList.remove('success');
        
        const errorElement = field.closest('.form-group')?.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    
    clearFieldError(field) {
        field.classList.remove('error');
        field.classList.add('success');
        
        const errorElement = field.closest('.form-group')?.querySelector('.error-message');
        if (errorElement) {
            errorElement.textContent = '';
        }
    },
    
    validateStep(stepNumber) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        if (!currentStepElement) return true;
        
        const requiredFields = currentStepElement.querySelectorAll('[required]');
        let isStepValid = true;
        
        requiredFields.forEach(field => {
            // For radio buttons, check if any in the group is selected
            if (field.type === 'radio') {
                const radioGroup = currentStepElement.querySelectorAll(`[name="${field.name}"]`);
                const isChecked = Array.from(radioGroup).some(r => r.checked);
                
                if (!isChecked) {
                    isStepValid = false;
                    const errorElement = field.closest('.form-group')?.querySelector('.error-message');
                    if (errorElement) {
                        errorElement.textContent = 'Please select an option';
                    }
                }
            } else {
                if (!this.validateField(field)) {
                    isStepValid = false;
                }
            }
        });
        
        return isStepValid;
    },
    
    prevStep() {
        if (App.state.currentFormStep > 1) {
            App.state.currentFormStep--;
            this.updateUI();
            this.scrollToForm();
        }
    },
    
    nextStep() {
        // Validate current step
        if (!this.validateStep(App.state.currentFormStep)) {
            // Shake the form to indicate error
            const currentStep = document.querySelector(`.form-step[data-step="${App.state.currentFormStep}"]`);
            if (currentStep) {
                currentStep.classList.add('shake');
                setTimeout(() => currentStep.classList.remove('shake'), 500);
            }
            return;
        }
        
        if (App.state.currentFormStep < App.state.totalFormSteps) {
            App.state.currentFormStep++;
            this.updateUI();
            this.scrollToForm();
            
            // If going to review step, populate review data
            if (App.state.currentFormStep === 5) {
                this.populateReview();
            }
        }
    },
    
    goToStep(stepNumber) {
        App.state.currentFormStep = stepNumber;
        this.updateUI();
        this.scrollToForm();
    },
    
    scrollToForm() {
        const formWrapper = document.querySelector('.apply-wrapper');
        if (formWrapper) {
            const offset = formWrapper.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    },
    
    updateUI() {
        const current = App.state.currentFormStep;
        const total = App.state.totalFormSteps;
        
        // Update form steps visibility
        DOM.formSteps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === current);
        });
        
        // Update progress steps
        DOM.progressSteps.forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');
            
            if (stepNum === current) {
                step.classList.add('active');
            } else if (stepNum < current) {
                step.classList.add('completed');
            }
        });
        
        // Update progress lines
        DOM.progressLines.forEach((line, index) => {
            line.classList.toggle('active', index < current - 1);
        });
        
        // Update navigation buttons
        if (DOM.formPrev) {
            DOM.formPrev.style.display = current > 1 ? 'flex' : 'none';
        }
        
        if (DOM.formNext) {
            DOM.formNext.style.display = current < total ? 'flex' : 'none';
        }
        
        if (DOM.formSubmit) {
            DOM.formSubmit.style.display = current === total ? 'flex' : 'none';
        }
    },
    
    populateReview() {
        this.saveFormData();
        const data = App.state.formData;
        
        // Personal Information
        const reviewPersonal = document.getElementById('reviewPersonal');
        if (reviewPersonal) {
            reviewPersonal.innerHTML = `
                <div class="review-row">
                    <span>Full Name</span>
                    <span>${data.fullName || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Email</span>
                    <span>${data.email || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Phone</span>
                    <span>+91 ${data.phone || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Date of Birth</span>
                    <span>${data.dob ? new Date(data.dob).toLocaleDateString('en-IN') : 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Gender</span>
                    <span>${data.gender ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1) : 'N/A'}</span>
                </div>
            `;
        }
        
        // Educational Information
        const reviewEducation = document.getElementById('reviewEducation');
        if (reviewEducation) {
            reviewEducation.innerHTML = `
                <div class="review-row">
                    <span>Qualification</span>
                    <span>${data.qualification || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>College</span>
                    <span>${data.college || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Branch</span>
                    <span>${data.branch || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Year</span>
                    <span>${data.year || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>CGPA/Percentage</span>
                    <span>${data.cgpa || 'N/A'}</span>
                </div>
            `;
        }
        
        // Internship Selection
        const reviewInternship = document.getElementById('reviewInternship');
        if (reviewInternship) {
            const programNames = {
                'web-development': 'Web Development',
                'data-science': 'Data Science',
                'digital-marketing': 'Digital Marketing',
                'graphic-design': 'Graphic Design',
                'content-writing': 'Content Writing',
                'mobile-app-development': 'Mobile App Development',
                'ui-ux-design': 'UI/UX Design',
                'business-development': 'Business Development',
                'human-resources': 'Human Resources',
                'video-editing': 'Video Editing'
            };
            
            const modeNames = {
                'online': 'Online (Work from Home)',
                'offline': 'Offline (In-office)',
                'hybrid': 'Hybrid'
            };
            
            const planNames = {
                'starter': 'Starter Plan - ₹1,999',
                'professional': 'Professional Plan - ₹3,999',
                'premium': 'Premium Plan - ₹6,999'
            };
            
            reviewInternship.innerHTML = `
                <div class="review-row">
                    <span>Program</span>
                    <span>${programNames[data.program] || data.program || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Mode</span>
                    <span>${modeNames[data.mode] || data.mode || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Start Date</span>
                    <span>${data.startDate || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Availability</span>
                    <span>${data.availability || 'N/A'} hours/week</span>
                </div>
                <div class="review-row">
                    <span>Plan</span>
                    <span>${planNames[data.plan] || data.plan || 'N/A'}</span>
                </div>
            `;
        }
        
        // Additional Information
        const reviewAdditional = document.getElementById('reviewAdditional');
        if (reviewAdditional) {
            const referralNames = {
                'google': 'Google Search',
                'social-media': 'Social Media',
                'friend': 'Friend/Family Referral',
                'college': 'College/University',
                'youtube': 'YouTube',
                'other': 'Other'
            };
            
            const resumeFile = document.getElementById('resume')?.files[0];
            
            reviewAdditional.innerHTML = `
                <div class="review-row">
                    <span>LinkedIn</span>
                    <span>${data.linkedin ? '<a href="' + data.linkedin + '" target="_blank">View Profile</a>' : 'Not provided'}</span>
                </div>
                <div class="review-row">
                    <span>Portfolio</span>
                    <span>${data.portfolio ? '<a href="' + data.portfolio + '" target="_blank">View Portfolio</a>' : 'Not provided'}</span>
                </div>
                <div class="review-row">
                    <span>Referral Source</span>
                    <span>${referralNames[data.referral] || data.referral || 'N/A'}</span>
                </div>
                <div class="review-row">
                    <span>Resume</span>
                    <span>${resumeFile ? resumeFile.name : 'Not uploaded'}</span>
                </div>
            `;
        }
    },
    
    async submitForm() {
        // Validate terms checkbox
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox?.checked) {
            this.showFieldError(termsCheckbox, 'Please accept the terms and conditions');
            return;
        }
        
        // Show loading state
        DOM.applicationForm.style.display = 'none';
        if (DOM.formLoading) DOM.formLoading.style.display = 'block';
        
        try {
            const formData = new FormData(DOM.applicationForm);
            
            // Add application ID
            const applicationId = Utils.generateId('SKV-APP');
            formData.append('applicationId', applicationId);
            formData.append('submittedAt', new Date().toISOString());
            
            // Submit to Formspree
            const response = await fetch(CONFIG.applicationFormEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                if (DOM.formLoading) DOM.formLoading.style.display = 'none';
                if (DOM.formSuccess) {
                    DOM.formSuccess.style.display = 'block';
                    const appIdElement = document.getElementById('applicationId');
                    if (appIdElement) {
                        appIdElement.textContent = applicationId;
                    }
                }
                
                // Clear saved form data
                Utils.storage.remove(CONFIG.storageKeys.formData);
                App.state.formData = {};
                
                // Scroll to success message
                DOM.formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            // Show error and restore form
            if (DOM.formLoading) DOM.formLoading.style.display = 'none';
            DOM.applicationForm.style.display = 'block';
            
            alert('There was an error submitting your application. Please try again.');
        }
    }
};

/* ==========================================
   CONTACT FORM MODULE
   ========================================== */
const ContactForm = {
    init() {
        if (!DOM.contactForm) return;
        this.bindEvents();
    },
    
    bindEvents() {
        DOM.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });
    },
    
    async submitForm() {
        const submitBtn = document.getElementById('contactSubmit');
        const originalContent = submitBtn.innerHTML;
        
        // Validate form
        const name = document.getElementById('contactName')?.value.trim();
        const email = document.getElementById('contactEmail')?.value.trim();
        const subject = document.getElementById('contactSubject')?.value;
        const message = document.getElementById('contactMessage')?.value.trim();
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (!Utils.isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4" stroke-linecap="round">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" from="0 12 12" to="360 12 12" repeatCount="indefinite"/>
                </circle>
            </svg>
            <span>Sending...</span>
        `;
        
        try {
            const formData = new FormData(DOM.contactForm);
            formData.append('submittedAt', new Date().toISOString());
            
            const response = await fetch(CONFIG.contactFormEndpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success
                submitBtn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    <span>Message Sent!</span>
                `;
                submitBtn.style.background = 'var(--success)';
                
                // Reset form
                DOM.contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalContent;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
            
            alert('There was an error sending your message. Please try again or email us directly at support@skilvanta.in');
        }
    }
};

/* ==========================================
   FLOATING ELEMENTS MODULE
   ========================================== */
const FloatingElements = {
    init() {
        this.initBackToTop();
        this.initCookieConsent();
    },
    
    initBackToTop() {
        if (!DOM.backToTop) return;
        
        DOM.backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    },
    
    initCookieConsent() {
        // Check if user already consented
        const hasConsented = Utils.storage.get(CONFIG.storageKeys.cookieConsent);
        
        if (!hasConsented && DOM.cookieConsent) {
            // Show cookie banner after a short delay
            setTimeout(() => {
                DOM.cookieConsent.classList.add('visible');
            }, 2000);
            
            // Accept button
            if (DOM.cookieAccept) {
                DOM.cookieAccept.addEventListener('click', () => {
                    Utils.storage.set(CONFIG.storageKeys.cookieConsent, 'accepted');
                    DOM.cookieConsent.classList.remove('visible');
                });
            }
            
            // Decline button
            if (DOM.cookieDecline) {
                DOM.cookieDecline.addEventListener('click', () => {
                    Utils.storage.set(CONFIG.storageKeys.cookieConsent, 'declined');
                    DOM.cookieConsent.classList.remove('visible');
                });
            }
        }
    }
};

/* ==========================================
   NOTIFICATIONS MODULE
   ========================================== */
const Notifications = {
    notificationInterval: null,
    
    // Sample notification data
    notificationData: [
        { name: 'Rahul from Delhi', action: 'just applied for Web Development internship' },
        { name: 'Priya from Mumbai', action: 'enrolled in Data Science program' },
        { name: 'Amit from Bangalore', action: 'just applied for Digital Marketing internship' },
        { name: 'Sneha from Chennai', action: 'enrolled in UI/UX Design program' },
        { name: 'Vikash from Kolkata', action: 'just applied for Mobile App Development internship' },
        { name: 'Neha from Pune', action: 'enrolled in Content Writing program' },
        { name: 'Arjun from Hyderabad', action: 'just applied for Business Development internship' },
        { name: 'Kavya from Jaipur', action: 'enrolled in Graphic Design program' },
        { name: 'Rohan from Ahmedabad', action: 'just applied for Video Editing internship' },
        { name: 'Ananya from Lucknow', action: 'enrolled in HR Management program' }
    ],
    
    init() {
        if (!DOM.notificationPopup) return;
        
        this.bindEvents();
        this.startNotifications();
    },
    
    bindEvents() {
        // Close notification
        if (DOM.notificationClose) {
            DOM.notificationClose.addEventListener('click', () => {
                this.hideNotification();
            });
        }
        
        // Close on click anywhere on notification
        DOM.notificationPopup.addEventListener('click', () => {
            this.hideNotification();
        });
    },
    
    startNotifications() {
        // Show first notification after 10 seconds
        setTimeout(() => {
            this.showRandomNotification();
        }, 10000);
        
        // Show subsequent notifications at intervals
        this.notificationInterval = setInterval(() => {
            this.showRandomNotification();
        }, CONFIG.notificationInterval);
    },
    
    showRandomNotification() {
        const notification = Utils.getRandomItem(this.notificationData);
        
        const nameElement = document.getElementById('notificationName');
        const actionElement = document.getElementById('notificationAction');
        
        if (nameElement) nameElement.textContent = notification.name;
        if (actionElement) actionElement.textContent = notification.action;
        
        DOM.notificationPopup.classList.add('visible');
        
        // Auto hide after duration
        setTimeout(() => {
            this.hideNotification();
        }, CONFIG.notificationDuration);
    },
    
    hideNotification() {
        DOM.notificationPopup.classList.remove('visible');
    },
    
    stopNotifications() {
        if (this.notificationInterval) {
            clearInterval(this.notificationInterval);
            this.notificationInterval = null;
        }
    }
};

/* ==========================================
   ADD SHAKE ANIMATION CSS
   ========================================== */
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    .drag-over .file-upload__content {
        border-color: var(--primary-blue) !important;
        background: rgba(79, 70, 229, 0.1) !important;
    }
    
    .plan-option.selected .plan-content {
        border-color: var(--primary-blue);
        background: rgba(79, 70, 229, 0.1);
    }
`;
document.head.appendChild(style);

/* ==========================================
   ADDITIONAL UTILITY FUNCTIONS
   ========================================== */

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const smoothScroll = (target, duration = 500) => {
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;
        
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = progress < 0.5 
                ? 2 * progress * progress 
                : 1 - Math.pow(-2 * progress + 2, 2) / 2;
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    };
    
    // Override smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) smoothScroll(target);
            }
        });
    });
}

/* ==========================================
   PERFORMANCE OPTIMIZATIONS
   ========================================== */

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Preload critical resources
const preloadResources = () => {
    const criticalResources = [
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', as: 'style' },
        { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap', as: 'style' }
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.as === 'style') {
            link.onload = function() { this.rel = 'stylesheet'; };
        }
        document.head.appendChild(link);
    });
};

// Run preload on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preloadResources);
} else {
    preloadResources();
}

/* ==========================================
   ERROR HANDLING & LOGGING
   ========================================== */

// Global error handler
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ', msg, '\nURL: ', url, '\nLine: ', lineNo, '\nColumn: ', columnNo, '\nError object: ', error);
    return false;
};

// Unhandled promise rejection handler
window.onunhandledrejection = function(event) {
    console.error('Unhandled promise rejection:', event.reason);
};

/* ==========================================
   EXPOSE GLOBAL FUNCTIONS
   ========================================== */

// Make certain functions available globally for inline onclick handlers
window.resetFilters = resetFilters;
window.restartQuiz = restartQuiz;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.openCertificateLightbox = openCertificateLightbox;
window.closeCertificateLightbox = closeCertificateLightbox;
window.Modal = Modal;
window.internshipsData = internshipsData;

/* ==========================================
   CONSOLE BRANDING
   ========================================== */
console.log(`
%c╔═══════════════════════════════════════╗
%c║                                       ║
%c║   🚀 SKILVANTA                        ║
%c║   India's Leading Paid Internship     ║
%c║   Platform                            ║
%c║                                       ║
%c║   Learn. Earn. Grow.                  ║
%c║                                       ║
%c║   🌐 skilvanta.in                     ║
%c║                                       ║
%c╚═══════════════════════════════════════╝
`,
'color: #4F46E5; font-weight: bold;',
'color: #4F46E5;',
'color: #4F46E5; font-weight: bold; font-size: 16px;',
'color: #7C3AED;',
'color: #7C3AED;',
'color: #4F46E5;',
'color: #10B981; font-style: italic;',
'color: #4F46E5;',
'color: #64748B;',
'color: #4F46E5;',
'color: #4F46E5; font-weight: bold;'
);

console.log('%c⚠️ Warning: This is a browser feature intended for developers. Do not paste any code here.', 'color: #EF4444; font-weight: bold; font-size: 14px;');