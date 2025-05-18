// Dynamic Content Generation
document.getElementById('hero').innerHTML = `
  <div class="hero-content dynamic-card">
    <div class="hero-header">
      <h1>Sandip Acharya</h1>
      <h2>Full Stack .NET Developer</h2>
      <p class="hero-tagline">Enterprise Solutions | Clean Code | Problem Solver</p>
      <p class="hero-subtitle">Building scalable applications that drive business growth</p>
    </div>
    <div class="hero-stats">
      <div class="stat-item">
        <span class="stat-number">4+</span>
        <span class="stat-label">Management Systems</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">100%</span>
        <span class="stat-label">Project Success</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">5+</span>
        <span class="stat-label">Technologies</span>
      </div>
    </div>
    <div class="hero-cta">
      <a href="#contact" class="cta-button primary">Hire Me</a>
      <a href="#projects" class="cta-button secondary">View Projects</a>
    </div>
    <div class="hero-icons">
      <a href="https://github.com/sandip2446" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/sandip2446" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="mailto:sandip2446@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
`;

document.getElementById('about').innerHTML = `
  <div class="dynamic-card">
    <h2><i class="fas fa-user"></i> About Me</h2>
    <p class="profile-highlight">Full Stack .NET Developer with proven expertise in building enterprise-grade applications and cross-platform solutions. Demonstrated success in developing four comprehensive management systems using ASP.NET Core MVC, implementing complex features including master-detail relationships, role-based security, and automated workflows.</p>
    
    <div class="expertise-grid">
      <div class="expertise-item">
        <i class="fas fa-code"></i>
        <h3>Enterprise Development</h3>
        <p>Building robust, scalable applications using ASP.NET Core MVC</p>
        <ul class="expertise-list">
          <li>Master-Detail Architecture</li>
          <li>Entity Framework Core</li>
          <li>SQL Server & SQLite</li>
        </ul>
      </div>
      <div class="expertise-item">
        <i class="fas fa-shield-alt"></i>
        <h3>Security & Standards</h3>
        <p>Implementing AAA standards and security best practices</p>
        <ul class="expertise-list">
          <li>Role-Based Access Control</li>
          <li>Data Validation</li>
          <li>Secure CRUD Operations</li>
        </ul>
      </div>
      <div class="expertise-item">
        <i class="fas fa-envelope"></i>
        <h3>Automation & Integration</h3>
        <p>Creating automated workflows and system integrations</p>
        <ul class="expertise-list">
          <li>Email Notifications</li>
          <li>Automated Scheduling</li>
          <li>Payment Processing</li>
        </ul>
      </div>
    </div>

    <div class="achievements-section">
      <h3>Key Achievements</h3>
      <div class="achievements-grid">
        <div class="achievement-item">
          <i class="fas fa-trophy"></i>
          <p>Developed 4 comprehensive management systems</p>
        </div>
        <div class="achievement-item">
          <i class="fas fa-shield-alt"></i>
          <p>Implemented AAA accessibility standards</p>
        </div>
        <div class="achievement-item">
          <i class="fas fa-code"></i>
          <p>Created reusable components</p>
        </div>
      </div>
    </div>
  </div>
`;

document.getElementById('skills').innerHTML = `
  <div class="dynamic-card">
    <h2><i class="fas fa-code"></i> Technical Expertise</h2>
    <div class="skills-flex">
      <div class="skill-category">
        <h3>Backend & Enterprise Development</h3>
        <ul>
          <li><i class="fab fa-microsoft"></i> ASP.NET Core MVC & Web API</li>
          <li><i class="fas fa-database"></i> Entity Framework Core</li>
          <li><i class="fas fa-server"></i> SQL Server & SQLite</li>
          <li><i class="fas fa-plug"></i> RESTful API Design</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Frontend & Cross-Platform</h3>
        <ul>
          <li><i class="fab fa-html5"></i> HTML5 & CSS3</li>
          <li><i class="fab fa-js"></i> JavaScript</li>
          <li><i class="fab fa-microsoft"></i> .NET MAUI</li>
          <li><i class="fab fa-windows"></i> UWP Applications</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Accessibility & Standards</h3>
        <ul>
          <li><i class="fas fa-universal-access"></i> Canadian AAA Standards</li>
          <li><i class="fas fa-check-circle"></i> WCAG 2.1 Guidelines</li>
          <li><i class="fas fa-keyboard"></i> Keyboard Navigation</li>
          <li><i class="fas fa-eye"></i> Color Contrast</li>
        </ul>
      </div>
    </div>
  </div>
`;

document.getElementById('projects').innerHTML = `
  <div class="dynamic-card">
    <h2><i class="fas fa-project-diagram"></i> Featured Projects</h2>
    <div class="project-flex">
      <div class="project-item">
        <h3><i class="fas fa-hospital"></i> Hospital Management System</h3>
        <p>Enterprise-grade hospital management solution with comprehensive CRUD operations, role-based access control, and automated email notifications for appointments and updates.</p>
        <div class="project-highlights">
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Patient Management</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>AAA Standards</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Real-time Analytics</span>
          </div>
        </div>
        <div class="tech-stack">
          <span>ASP.NET Core MVC</span>
          <span>SQL Server</span>
          <span>Entity Framework</span>
        </div>
      </div>
      <div class="project-item">
        <h3><i class="fas fa-dumbbell"></i> Gym Management System</h3>
        <p>Comprehensive gym management solution with member portal, class scheduling, and secure payment processing. Features automated workflows and attendance tracking.</p>
        <div class="project-highlights">
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Member Portal</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Payment Processing</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Class Scheduling</span>
          </div>
        </div>
        <div class="tech-stack">
          <span>ASP.NET Core MVC</span>
          <span>SQLite</span>
          <span>Payment Gateway</span>
        </div>
      </div>
      <div class="project-item">
        <h3><i class="fas fa-school"></i> School Management System</h3>
        <p>Complete school management solution with student records, grade management, and parent-teacher communication portal. Features automated attendance tracking and grade calculation.</p>
        <div class="project-highlights">
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Grade Management</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Parent Portal</span>
          </div>
          <div class="highlight-item">
            <i class="fas fa-check-circle"></i>
            <span>Attendance Tracking</span>
          </div>
        </div>
        <div class="tech-stack">
          <span>ASP.NET Core MVC</span>
          <span>Entity Framework</span>
          <span>Email Services</span>
        </div>
      </div>
    </div>
  </div>
`;

document.getElementById('contact').innerHTML = `
  <div class="dynamic-card">
    <h2><i class="fas fa-envelope"></i> Let's Connect</h2>
    <p class="contact-intro">Looking for a skilled .NET developer with expertise in enterprise applications, security implementation, and automated workflows? I'm ready to bring my expertise to your next project.</p>
    
    <div class="contact-info">
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <a href="mailto:sandip2446@gmail.com">sandip2446@gmail.com</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-linkedin"></i>
        <a href="https://linkedin.com/in/sandip2446" target="_blank">Connect on LinkedIn</a>
      </div>
      <div class="contact-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/sandip2446" target="_blank">View My Code</a>
      </div>
      <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Welland, ON, Canada</span>
      </div>
    </div>

    <div class="availability">
      <h3>I'm Available For</h3>
      <div class="status-grid">
        <p><i class="fas fa-check-circle"></i> Full-time positions</p>
        <p><i class="fas fa-check-circle"></i> Remote opportunities</p>
        <p><i class="fas fa-check-circle"></i> Contract work</p>
        <p><i class="fas fa-check-circle"></i> Immediate start</p>
      </div>
    </div>
  </div>
`;

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Mobile menu functionality
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (burger && navLinks) {
    burger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Animate links
        navItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                navItems.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
}

// Scroll-triggered animations
function revealOnScroll() {
  const reveals = document.querySelectorAll('.dynamic-card');
  const windowHeight = window.innerHeight;
  
  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// DOM Elements
const chatContainer = document.querySelector('.chat-container');
const chatToggle = document.querySelector('.chat-toggle');
const chatContent = document.querySelector('.chat-content');
const chatInput = document.querySelector('.chat-input');
const sendMessage = document.querySelector('.send-message');
const notificationBadge = document.querySelector('.notification-badge');
const scrollToTop = document.querySelector('.scroll-to-top');

// Enhanced conversation state management
const conversationState = {
    history: [],
    context: {
        currentTopic: null,
        userInterests: new Set(),
        lastIntent: null,
        conversationStage: 'initial' // initial, exploring, detailed, closing
    },
    maxHistoryLength: 10
};

function processUserInput(input) {
    if (!input.trim()) return;

    // Add user message to chat
    addMessage(input, true);

    // Show typing indicator
    const typingIndicator = showTypingIndicator();

    // Extract topic from input
    const topic = extractTopic(input);
    let response;

    // Handle project-specific topics
    if (['hospital', 'gym', 'school', 'crm', 'erp', 'pos'].includes(topic)) {
        response = generateProjectResponse(topic);
    } else {
        response = generateTopicResponse(topic);
    }

    // Remove typing indicator and add response
    setTimeout(() => {
        removeTypingIndicator(typingIndicator);
        addMessage(response);
    }, 1000);
}

function generateTopicResponse(topic) {
    const responses = {
        greeting: `🌟 Welcome! I'm your AI assistant, here to help you discover Sandip's expertise! 🌟

I can help you with:

1. **Enterprise Solutions**
   • Management Systems
   • E-commerce Platforms
   • Business Applications
   • Custom Software

2. **Technical Expertise**
   • ASP.NET Core Development
   • Database Management
   • Web Development
   • System Architecture

3. **Recent Projects**
   • Hospital Management System
   • Gym Management System
   • School Management System
   • Enterprise CRM System

4. **Contact & Collaboration**
   • Schedule a consultation
   • Get a free quote
   • View portfolio
   • Discuss your project

Feel free to:
• Click any button below
• Ask about specific topics
• Learn about our services
• Get in touch

How can I help you today? 😊`,

        contact: `🌟 Ready to Transform Your Business? Let's Connect! 🌟

I'm excited to help you bring your vision to life! Here's how we can work together:

1. **Your Vision, Our Expertise**
   • Custom enterprise solutions
   • Scalable applications
   • Modern technology stack
   • Proven track record
   • 100% project success rate

2. **Why Choose Us?**
   • 4+ successful management systems
   • Canadian AAA accessibility standards
   • Clean, maintainable code
   • On-time delivery
   • Dedicated support

3. **Our Process**
   • Initial consultation
   • Detailed requirements analysis
   • Custom solution design
   • Agile development
   • Continuous feedback

4. **Let's Get Started**
   • Schedule a free consultation
   • Discuss your requirements
   • Get a detailed proposal
   • Start your project
   • Transform your business

5. **Contact Options**
   • Email: sandip2446@gmail.com
   • LinkedIn: linkedin.com/in/sandip2446
   • GitHub: github.com/sandip2446
   • Location: Welland, ON, Canada

**Special Offer!** 🎉
Book a consultation now and get a free technical assessment of your current system!

Would you like to:
1. Schedule a consultation?
2. Learn more about our services?
3. See our portfolio?
4. Get a free quote?

Just let me know what interests you, and I'll guide you through the next steps! 😊`,

        farewell: `Thank you for chatting with me! 👋

I hope I was able to help you learn about Sandip's expertise and projects. If you have any more questions about:
• Enterprise solutions
• Technical skills
• Project implementations
• Or anything else

Feel free to come back anytime! Have a great day! 😊`,

        overview: `Let me tell you about Sandip's expertise! 👨‍💻

Here's what I can help you with:

1. **Enterprise Solutions**
   • Management Systems
   • E-commerce Platforms
   • Business Applications
   • Web Solutions
   • Custom Software

2. **Recent Projects**
   • Hospital Management System (2024)
   • Gym Management System (2023)
   • School Management System (2023)
   • Enterprise CRM System (2023)
   • All projects implemented with AAA standards

3. **Technical Stack**
   • ASP.NET Core MVC
   • Entity Framework Core
   • SQL Server & SQLite
   • Modern Frontend Technologies
   • RESTful API Design

4. **Key Strengths**
   • Clean Code Architecture
   • Scalable Solutions
   • Security Implementation
   • Automated Workflows
   • Accessibility Standards

5. **Business Impact**
   • Improved Efficiency
   • Cost Reduction
   • Better User Experience
   • Data-Driven Decisions
   • Process Automation

Would you like to know more about any specific aspect? I can tell you about my projects, technical skills, or how I can help with your specific needs! 😊`,

        skills: `Let me share my technical expertise with you! 💻

1. **Backend Development**
   • ASP.NET Core MVC & Web API
   • Entity Framework Core
   • SQL Server & SQLite
   • C# Programming
   • RESTful API Design
   • Repository Pattern
   • View Models & DTOs
   • Master-Detail Architecture

2. **Frontend Development**
   • HTML5 & CSS3
   • JavaScript
   • Responsive Design
   • UI/UX Implementation
   • Modern Web Technologies
   • Cross-Platform Development
   • Mobile-First Approach
   • Progressive Web Apps

3. **Database & Data Management**
   • Database Design
   • Query Optimization
   • Data Modeling
   • Data Migration
   • Backup & Recovery
   • Complex Relationships
   • Performance Tuning
   • Data Security

4. **Development Practices**
   • Clean Code Principles
   • SOLID Principles
   • Design Patterns
   • Unit Testing
   • Version Control (Git)
   • Agile Development
   • Code Documentation
   • Code Review

5. **Additional Expertise**
   • Canadian AAA Standards
   • Security Implementation
   • API Integration
   • Payment Processing
   • Email Services
   • Cloud Services
   • Performance Optimization
   • Accessibility Compliance

Would you like to know more about any specific skill set or how I can apply these skills to your project? 😊`,

        pos: `The POS System is a powerful sales solution! 💰

Here's how it works:

1. **Core Components**
   • Sales interface
   • Inventory management
   • Customer database
   • Payment processing
   • Reporting system

2. **System Architecture**
   • ASP.NET Core MVC
   • SQL Server database
   • Real-time updates
   • Secure transactions
   • Offline capability

3. **Key Features**
   • Quick sales processing
   • Multiple payment methods
   • Customer loyalty program
   • Inventory tracking
   • Sales analytics

4. **Integration Points**
   • Payment gateways
   • Barcode scanners
   • Receipt printers
   • Customer displays
   • Mobile devices

5. **Business Benefits**
   • Faster transactions
   • Better inventory control
   • Customer insights
   • Sales tracking
   • Business growth

Would you like to know more about any specific feature? 😊`,

        inventory: `The Inventory Management System is a powerful tool! 📦

Here's how it works:

1. **Core Components**
   • Stock tracking
   • Supplier management
   • Order processing
   • Warehouse management
   • Reporting system

2. **System Architecture**
   • ASP.NET Core MVC
   • Entity Framework Core
   • SQL Server database
   • Real-time updates
   • Mobile access

3. **Key Features**
   • Real-time stock tracking
   • Automated reordering
   • Supplier management
   • Batch tracking
   • Stock valuation

4. **Integration Points**
   • POS systems
   • E-commerce platforms
   • Shipping services
   • Accounting software
   • Mobile scanners

5. **Business Benefits**
   • Better stock control
   • Reduced costs
   • Improved efficiency
   • Data accuracy
   • Business growth

Would you like to know more about any specific feature? 😊`,

        website: `The Website Development solution is modern and responsive! 🌐

Here's how it works:

1. **Core Components**
   • Frontend interface
   • Content management
   • User authentication
   • Database system
   • Analytics tracking

2. **System Architecture**
   • ASP.NET Core MVC
   • Modern frontend framework
   • SQL Server database
   • RESTful API
   • Cloud hosting

3. **Key Features**
   • Responsive design
   • SEO optimization
   • Content management
   • User management
   • Analytics dashboard

4. **Integration Points**
   • Social media
   • Payment gateways
   • Email services
   • Analytics tools
   • Third-party APIs

5. **Business Benefits**
   • Online presence
   • Lead generation
   • Customer engagement
   • Brand building
   • Business growth

Would you like to know more about any specific feature? 😊`,

        ecommerce: `The E-commerce solution is a complete online store! 🛍️

Here's how it works:

1. **Core Components**
   • Product catalog
   • Shopping cart
   • Payment processing
   • Order management
   • Customer portal

2. **System Architecture**
   • ASP.NET Core MVC
   • Entity Framework Core
   • SQL Server database
   • Payment gateway
   • Cloud hosting

3. **Key Features**
   • Product management
   • Secure checkout
   • Order tracking
   • Customer accounts
   • Sales analytics

4. **Integration Points**
   • Payment gateways
   • Shipping services
   • Email marketing
   • Inventory systems
   • Mobile apps

5. **Business Benefits**
   • Online sales
   • Customer reach
   • 24/7 operation
   • Sales tracking
   • Business growth

Would you like to know more about any specific feature? 😊`,

        erp: `The ERP System is a comprehensive business solution! 🏢

Here's how it works:

1. **Core Components**
   • Inventory Management
   • Sales & CRM
   • Financial Accounting
   • Human Resources
   • Business Analytics

2. **System Architecture**
   • ASP.NET Core MVC backend
   • SQL Server database
   • Entity Framework Core
   • RESTful API design
   • Role-based security

3. **Key Features**
   • Real-time inventory tracking
   • Automated sales processing
   • Financial reporting
   • Employee management
   • Performance analytics

4. **Integration Points**
   • Payment gateways
   • Email services
   • Document management
   • Reporting tools
   • Mobile access

5. **Business Benefits**
   • Streamlined operations
   • Better decision making
   • Cost reduction
   • Improved efficiency
   • Data-driven insights

Would you like to know more about any specific feature? 😊`,

        crm: `The CRM System is a powerful customer management solution! 🤝

Here's how it works:

1. **Core Components**
   • Customer database
   • Sales pipeline
   • Marketing tools
   • Service management
   • Analytics dashboard

2. **System Architecture**
   • ASP.NET Core MVC
   • Entity Framework Core
   • SQL Server database
   • RESTful API
   • Real-time updates

3. **Key Features**
   • Lead management
   • Customer tracking
   • Sales forecasting
   • Marketing campaigns
   • Service tickets

4. **Integration Points**
   • Email marketing
   • Social media
   • Payment systems
   • Document management
   • Mobile apps

5. **Business Benefits**
   • Better customer relationships
   • Increased sales
   • Improved marketing
   • Better service
   • Business growth

Would you like to know more about any specific feature? 😊`,

        education: `🎓 **Education & Training**
• Computer Programming Diploma at Niagara College, Welland, ON
• Expected Graduation: 2025
• Key Courses:
  - ASP.NET Core Development
  - Database Management Systems
  - Web Development & Design
  - Software Engineering Principles

Would you like to know more about any specific course or training?`,

        courses: `📚 **Relevant Coursework**
• ASP.NET Core Development
  - Enterprise application development
  - MVC architecture implementation
  - Web API development
• Database Management Systems
  - SQL Server & SQLite
  - Entity Framework Core
  - Data modeling and optimization
• Web Development & Design
  - Frontend technologies
  - Responsive design
  - Accessibility standards
• Software Engineering Principles
  - Design patterns
  - Clean code practices
  - Version control

Would you like to know more about any specific course?`,

        experience: `💼 **Professional Experience**
• Hospital Management System (Jan 2024 - Present)
  - Patient management & scheduling
  - AAA accessibility implementation
  - Automated workflows
  - Real-time analytics

• Gym Management System (Oct 2023 - Dec 2023)
  - Member management
  - Payment processing
  - Self-service portal
  - Attendance tracking

• School Management System (Jul 2023 - Sep 2023)
  - Student records
  - Grade management
  - Parent-teacher communication
  - Attendance tracking

• Enterprise CRM System (Sep 2023 - Dec 2023)
  - Lead management
  - Sales analytics
  - Document control
  - Customer communication

Would you like to know more about any specific project?`,

        backend: `⚙️ **Backend & Enterprise Development**
• ASP.NET Core MVC & Web API
  - Enterprise application development
  - RESTful API design
  - Service architecture
• Entity Framework Core
  - Advanced data management
  - Complex relationships
  - Data optimization
• SQL Server & SQLite
  - Database design
  - Query optimization
  - Data modeling
• C# Development
  - Object-oriented programming
  - Design patterns
  - Clean code practices

Would you like to know more about any specific backend technology?`,

        frontend: `🛠️ **Frontend & Cross-Platform**
• HTML5 & CSS3
  - Modern web development
  - Responsive design
  - Mobile-first approach
• JavaScript
  - Interactive applications
  - Dynamic content
  - User interface
• .NET MAUI
  - Cross-platform development
  - Mobile applications
  - Native features
• UI/UX Implementation
  - User-centered design
  - Accessibility
  - Modern interfaces

Would you like to know more about any specific frontend technology?`,

        accessibility: `♿ **Accessibility & Standards**
• Canadian AAA Standards
  - Government compliance
  - Accessibility guidelines
  - Best practices
• WCAG 2.1 Guidelines
  - Web content accessibility
  - User experience
  - Inclusive design
• Screen Reader Support
  - Assistive technology
  - Navigation
  - Content structure
• ARIA Implementation
  - Enhanced accessibility
  - Semantic markup
  - User interaction

Would you like to know more about any specific accessibility feature?`,

        data: `📊 **Data Science & Analytics**
• Python
  - Data analysis
  - Scripting
  - Automation
• NumPy
  - Numerical computing
  - Data processing
  - Mathematical operations
• Pandas
  - Data manipulation
  - Analysis
  - Visualization
• Analytics Tools
  - Business intelligence
  - Reporting
  - Data insights

Would you like to know more about any specific data science tool?`,

        contact: `📞 **Contact Information**
• Email: sandip2446@gmail.com
• LinkedIn: linkedin.com/in/sandip2446
• GitHub: github.com/sandip2446
• Location: Welland, ON, Canada

Would you like to know more about any specific contact method?`,

        achievements: `🏆 **Key Achievements**
• Enterprise Solutions
  - Developed 4 management systems
  - ASP.NET Core MVC implementation
  - Complex feature development
• Accessibility Compliance
  - Canadian government standards
  - AAA accessibility
  - Inclusive design
• Technical Excellence
  - Full-stack development
  - Modern technologies
  - Best practices
• Project Success
  - Complex features
  - User satisfaction
  - Business efficiency

Would you like to know more about any specific achievement?`,

        hospital: `🏥 **Hospital Management System**
• Project Impact:
  - Patient management & scheduling
  - AAA accessibility standards
  - Automated workflows
  - Real-time analytics
• Technical Implementation:
  - ASP.NET Core MVC
  - Entity Framework Core
  - SQL Server
  - Chart.js dashboard
  - Email notifications

Would you like to know more about any specific feature?`,

        gym: `💪 **Gym Management System**
• Project Impact:
  - Member management
  - Class scheduling
  - Payment processing
  - Self-service portal
• Technical Implementation:
  - ASP.NET Core MVC
  - SQLite database
  - Entity relationships
  - Payment gateway
  - Scheduling system

Would you like to know more about any specific feature?`,

        school: `📚 **School Management System**
• Project Impact:
  - Student records
  - Grade management
  - Parent communication
  - Attendance tracking
• Technical Implementation:
  - ASP.NET Core MVC
  - Entity Framework
  - Complex relationships
  - Grade calculation
  - Communication portal

Would you like to know more about any specific feature?`,

        crm: `👥 **Enterprise CRM System**
• Project Impact:
  - Lead management
  - Sales analytics
  - Document control
  - Customer communication
• Technical Implementation:
  - ASP.NET Core MVC
  - SQLite database
  - Complex relationships
  - Analytics dashboard
  - Workflow automation

Would you like to know more about any specific feature?`,

        summary: `👋 **Professional Summary**
Full Stack .NET Developer with expertise in:
• Enterprise-grade applications
• Cross-platform solutions
• Four management systems
• ASP.NET Core MVC
• Complex features
• Role-based security
• Automated workflows
• Data science & analytics

Would you like to know more about any specific area?`,

        location: `📍 **Location & Availability**
• Current Location: Welland, ON, Canada
• Education: Niagara College
• Graduation: 2025
• Open to: Remote & Local Opportunities

Would you like to know more about my availability or location?`,

        technologies: `🛠️ **Technologies & Tools**
• Backend:
  - ASP.NET Core MVC
  - Entity Framework Core
  - SQL Server & SQLite
  - C# & .NET
• Frontend:
  - HTML5 & CSS3
  - JavaScript
  - .NET MAUI
  - UWP
• Data Science:
  - Python
  - NumPy
  - Pandas
• Tools:
  - Git
  - Visual Studio
  - VS Code

Would you like to know more about any specific technology?`,

        // Project Overview
        'projects': `🚀 **Project Portfolio Overview**
• Hospital Management System (2024)
  - Patient care & scheduling
  - Medical records management
  - Staff coordination
  - Analytics dashboard

• Gym Management System (2023)
  - Member management
  - Class scheduling
  - Payment processing
  - Progress tracking

• School Management System (2023)
  - Student administration
  - Academic management
  - Parent portal
  - Attendance system

• Enterprise CRM System (2023)
  - Customer management
  - Sales tracking
  - Document control
  - Communication hub

Would you like to know more about any specific project?`,

        // Project Features
        'project-features': `✨ **Project Features & Capabilities**
• Core Features:
  - User authentication & authorization
  - Role-based access control
  - Real-time data processing
  - Automated workflows
  - Reporting & analytics
  - Mobile responsiveness
  - Accessibility compliance

• Technical Features:
  - ASP.NET Core MVC architecture
  - Entity Framework Core
  - SQL Server/SQLite databases
  - RESTful APIs
  - Responsive UI/UX
  - Cross-platform support

Would you like to know more about specific features or technical implementation?`,

        // Project Architecture
        'project-architecture': `🏗️ **Project Architecture**
• System Design:
  - N-tier architecture
  - MVC pattern
  - Repository pattern
  - Service layer
  - Data access layer

• Technology Stack:
  - Backend: ASP.NET Core, C#
  - Frontend: HTML5, CSS3, JavaScript
  - Database: SQL Server/SQLite
  - ORM: Entity Framework Core
  - UI: Bootstrap, jQuery
  - Tools: Git, Visual Studio

Would you like to know more about any specific architectural aspect?`,

        // Project Benefits
        'project-benefits': `💡 **Project Benefits & Impact**
• Business Benefits:
  - Improved efficiency
  - Cost reduction
  - Better decision-making
  - Enhanced user experience
  - Streamlined operations
  - Data-driven insights

• Technical Benefits:
  - Scalable architecture
  - Maintainable code
  - Secure implementation
  - Performance optimization
  - Cross-platform support
  - Accessibility compliance

Would you like to know more about specific benefits or impact?`,

        // Project Development
        'project-development': `⚡ **Project Development Process**
• Development Approach:
  - Agile methodology
  - Iterative development
  - Continuous feedback
  - Regular testing
  - Code reviews
  - Documentation

• Implementation Steps:
  1. Requirements analysis
  2. System design
  3. Database modeling
  4. Core development
  5. UI/UX implementation
  6. Testing & deployment
  7. Maintenance & support

Would you like to know more about the development process?`,

        // Project Security
        'project-security': `🔒 **Project Security Features**
• Security Measures:
  - Authentication
  - Authorization
  - Data encryption
  - Input validation
  - XSS protection
  - CSRF protection
  - SQL injection prevention

• Compliance:
  - Data protection
  - Privacy standards
  - Security best practices
  - Regular audits
  - Access control
  - Secure communication

Would you like to know more about security features?`,

        // Project Integration
        'project-integration': `🔄 **Project Integration Points**
• System Integration:
  - API endpoints
  - Third-party services
  - Payment gateways
  - Email services
  - SMS services
  - Cloud services

• Data Integration:
  - Database connections
  - Data synchronization
  - Import/Export
  - Backup systems
  - Analytics tools
  - Reporting systems

Would you like to know more about integration capabilities?`,

        // Project Maintenance
        'project-maintenance': `🔧 **Project Maintenance & Support**
• Maintenance Services:
  - Regular updates
  - Bug fixes
  - Performance optimization
  - Security patches
  - Feature enhancements
  - Technical support

• Support Features:
  - User documentation
  - Technical documentation
  - Training materials
  - Help desk
  - Issue tracking
  - Version control

Would you like to know more about maintenance and support?`,

        // Project Timeline
        'project-timeline': `📅 **Project Timeline**
• Hospital System (2024):
  - Planning: Jan 2024
  - Development: Feb 2024
  - Testing: Mar 2024
  - Deployment: Apr 2024

• Gym System (2023):
  - Planning: Oct 2023
  - Development: Nov 2023
  - Testing: Dec 2023
  - Deployment: Dec 2023

• School System (2023):
  - Planning: Jul 2023
  - Development: Aug 2023
  - Testing: Sep 2023
  - Deployment: Sep 2023

• CRM System (2023):
  - Planning: Sep 2023
  - Development: Oct 2023
  - Testing: Nov 2023
  - Deployment: Dec 2023

Would you like to know more about any specific project timeline?`,

        // Project Challenges
        'project-challenges': `🎯 **Project Challenges & Solutions**
• Technical Challenges:
  - Complex data relationships
  - Performance optimization
  - Security implementation
  - Cross-platform compatibility
  - Integration complexity
  - Scalability requirements

• Business Challenges:
  - User adoption
  - Process automation
  - Data migration
  - Training requirements
  - Change management
  - System integration

Would you like to know more about specific challenges and solutions?`,

        // How it works templates
        'how-it-works': `🔄 **How Our Systems Work**
• Core Functionality:
  - User-friendly interfaces
  - Automated processes
  - Real-time updates
  - Secure data handling
  - Cross-platform access
  - Mobile responsiveness

• System Flow:
  1. User authentication
  2. Role-based access
  3. Data processing
  4. Automated workflows
  5. Real-time updates
  6. Report generation

Would you like to know more about any specific functionality?`,

        // Impact templates
        'system-impact': `💡 **System Impact & Benefits**
• Operational Impact:
  - Streamlined processes
  - Reduced manual work
  - Improved efficiency
  - Better decision-making
  - Cost savings
  - Time optimization

• User Impact:
  - Enhanced user experience
  - Easy access to information
  - Better communication
  - Increased productivity
  - Improved satisfaction
  - Reduced errors

Would you like to know more about specific impacts or benefits?`,

        // School System specific
        'school-how': `🏫 **How the School System Works**
• Student Management:
  - Digital enrollment
  - Attendance tracking
  - Grade management
  - Progress monitoring
  - Report generation
  - Parent communication

• Administrative Features:
  - Staff management
  - Class scheduling
  - Resource allocation
  - Fee management
  - Document handling
  - Communication tools

Would you like to know more about any specific feature?`,

        'school-impact': `📚 **School System Impact**
• For Students:
  - Easy access to grades
  - Online assignments
  - Progress tracking
  - Communication tools
  - Resource access
  - Learning support

• For Teachers:
  - Simplified grading
  - Attendance management
  - Lesson planning
  - Parent communication
  - Resource sharing
  - Performance tracking

• For Administrators:
  - Streamlined operations
  - Better resource management
  - Improved communication
  - Enhanced reporting
  - Data-driven decisions
  - Cost optimization

Would you like to know more about any specific impact area?`,

        // Hospital System specific
        'hospital-how': `🏥 **How the Hospital System Works**
• Patient Management:
  - Digital registration
  - Appointment scheduling
  - Medical records
  - Treatment tracking
  - Billing management
  - Patient communication

• Medical Features:
  - Doctor scheduling
  - Treatment plans
  - Medication tracking
  - Lab results
  - Medical history
  - Emergency response

Would you like to know more about any specific feature?`,

        'hospital-impact': `💊 **Hospital System Impact**
• For Patients:
  - Easy appointment booking
  - Quick access to records
  - Better communication
  - Reduced wait times
  - Improved care
  - Enhanced experience

• For Staff:
  - Streamlined workflows
  - Better coordination
  - Easy record access
  - Efficient scheduling
  - Improved communication
  - Enhanced productivity

• For Management:
  - Better resource allocation
  - Improved efficiency
  - Cost reduction
  - Better decision-making
  - Enhanced reporting
  - Quality improvement

Would you like to know more about any specific impact area?`,

        // Gym System specific
        'gym-how': `💪 **How the Gym System Works**
• Member Management:
  - Digital registration
  - Membership tracking
  - Class booking
  - Payment processing
  - Progress tracking
  - Communication tools

• Operational Features:
  - Staff scheduling
  - Equipment management
  - Class management
  - Payment processing
  - Report generation
  - Marketing tools

Would you like to know more about any specific feature?`,

        'gym-impact': `🏋️ **Gym System Impact**
• For Members:
  - Easy class booking
  - Progress tracking
  - Payment management
  - Communication tools
  - Resource access
  - Enhanced experience

• For Staff:
  - Simplified scheduling
  - Easy member management
  - Payment processing
  - Communication tools
  - Report generation
  - Resource management

• For Management:
  - Better operations
  - Improved efficiency
  - Cost reduction
  - Better decision-making
  - Enhanced reporting
  - Business growth

Would you like to know more about any specific impact area?`,

        // CRM System specific
        'crm-how': `👥 **How the CRM System Works**
• Customer Management:
  - Lead tracking
  - Customer profiles
  - Interaction history
  - Sales pipeline
  - Document management
  - Communication tools

• Business Features:
  - Sales tracking
  - Marketing tools
  - Analytics dashboard
  - Report generation
  - Task management
  - Team collaboration

Would you like to know more about any specific feature?`,

        'crm-impact': `📈 **CRM System Impact**
• For Sales Team:
  - Better lead management
  - Improved tracking
  - Enhanced communication
  - Easy reporting
  - Task automation
  - Performance insights

• For Management:
  - Better decision-making
  - Improved efficiency
  - Cost reduction
  - Enhanced reporting
  - Business insights
  - Growth tracking

• For Customers:
  - Better service
  - Improved communication
  - Faster response
  - Enhanced experience
  - Easy access
  - Better support

Would you like to know more about any specific impact area?`,

        // User Benefits
        'user-benefits': `🌟 **User Benefits & Advantages**
• For End Users:
  - Easy-to-use interfaces
  - Quick access to information
  - Time-saving features
  - Mobile accessibility
  - Real-time updates
  - 24/7 availability

• For Administrators:
  - Centralized management
  - Automated workflows
  - Comprehensive reporting
  - Data analytics
  - User management
  - System monitoring

• For Organizations:
  - Increased efficiency
  - Cost reduction
  - Better decision-making
  - Improved communication
  - Enhanced security
  - Scalable solutions

Would you like to know more about specific user benefits?`,

        // System Functionality
        'system-functionality': `⚙️ **System Functionality & Features**
• Core Features:
  - User authentication
  - Role-based access
  - Data management
  - Report generation
  - Search functionality
  - Export capabilities

• Technical Features:
  - Real-time processing
  - Data validation
  - Error handling
  - Backup systems
  - Security measures
  - Performance optimization

• Integration Features:
  - API connectivity
  - Third-party integration
  - Data synchronization
  - Import/Export tools
  - Communication tools
  - Analytics integration

Would you like to know more about any specific functionality?`,

        // User Experience
        'user-experience': `👥 **User Experience & Interface**
• Interface Design:
  - Clean, modern layout
  - Intuitive navigation
  - Responsive design
  - Mobile-friendly
  - Accessible interface
  - Customizable views

• User Features:
  - Dashboard views
  - Quick actions
  - Search functionality
  - Filter options
  - Sort capabilities
  - Export features

• Accessibility:
  - Screen reader support
  - Keyboard navigation
  - High contrast mode
  - Text scaling
  - Color adjustments
  - Focus indicators

Would you like to know more about the user experience?`,

        // System Performance
        'system-performance': `⚡ **System Performance & Reliability**
• Performance Features:
  - Fast loading times
  - Quick response
  - Efficient processing
  - Resource optimization
  - Caching system
  - Load balancing

• Reliability Features:
  - 99.9% uptime
  - Data backup
  - Error recovery
  - System monitoring
  - Performance tracking
  - Maintenance alerts

• Security Features:
  - Data encryption
  - Access control
  - Audit logging
  - Security monitoring
  - Threat detection
  - Compliance checks

Would you like to know more about system performance?`,

        // User Support
        'user-support': `🛠️ **User Support & Assistance**
• Support Features:
  - Help documentation
  - Video tutorials
  - User guides
  - FAQ section
  - Contact support
  - Live chat

• Training Resources:
  - Onboarding guides
  - Training videos
  - Best practices
  - Tips & tricks
  - Use cases
  - Troubleshooting guides

• Maintenance Support:
  - Regular updates
  - Bug fixes
  - Feature enhancements
  - Technical support
  - System maintenance
  - Performance optimization

Would you like to know more about user support?`,

        // System Integration
        'system-integration': `🔄 **System Integration & Connectivity**
• Integration Features:
  - API endpoints
  - Web services
  - Data import/export
  - Third-party apps
  - Cloud services
  - Mobile apps

• Connectivity Options:
  - REST APIs
  - WebSocket
  - Database connections
  - File sharing
  - Email integration
  - SMS integration

• Data Exchange:
  - Real-time sync
  - Batch processing
  - Data validation
  - Format conversion
  - Error handling
  - Logging

Would you like to know more about system integration?`,

        // User Analytics
        'user-analytics': `📊 **User Analytics & Reporting**
• Analytics Features:
  - Usage statistics
  - Performance metrics
  - User behavior
  - System health
  - Error tracking
  - Success rates

• Reporting Tools:
  - Custom reports
  - Data visualization
  - Export options
  - Scheduled reports
  - Real-time dashboards
  - Trend analysis

• Insights:
  - User patterns
  - System usage
  - Performance trends
  - Error analysis
  - Success metrics
  - Improvement areas

Would you like to know more about analytics and reporting?`,

        // System Security
        'system-security': `🔒 **System Security & Protection**
• Security Features:
  - User authentication
  - Access control
  - Data encryption
  - Secure communication
  - Audit logging
  - Threat detection

• Protection Measures:
  - Password policies
  - Session management
  - Data backup
  - Recovery options
  - Security monitoring
  - Compliance checks

• Privacy Features:
  - Data protection
  - Privacy controls
  - User consent
  - Data retention
  - Access logs
  - Privacy policies

Would you like to know more about system security?`,

        // User Customization
        'user-customization': `🎨 **User Customization & Preferences**
• Customization Options:
  - Personal settings
  - Interface themes
  - Layout options
  - Notification preferences
  - Display settings
  - Language options

• User Preferences:
  - Dashboard layout
  - Report formats
  - Email settings
  - Alert preferences
  - Time zone
  - Date format

• System Settings:
  - User roles
  - Access levels
  - Feature toggles
  - Integration settings
  - Security options
  - Performance settings

Would you like to know more about customization options?`,

        // System Updates
        'system-updates': `🔄 **System Updates & Maintenance**
• Update Features:
  - Regular updates
  - Feature releases
  - Bug fixes
  - Security patches
  - Performance improvements
  - New features

• Maintenance:
  - System checks
  - Database optimization
  - Cache clearing
  - Log rotation
  - Backup verification
  - Security scans

• Support:
  - Update guides
  - Release notes
  - Migration help
  - Technical support
  - Training materials
  - FAQ updates

Would you like to know more about system updates?`
    };

    return responses[topic] || "I'm not sure about that topic. Would you like to know about my skills, projects, or experience?";
}

function generateHowItWorksResponse(topic) {
    const responses = {
        inventory: `Let me explain how the Inventory Management System works in detail:

1. **Stock Tracking Process**
   • Real-time monitoring of stock levels
   • Automatic updates when items are sold/received
   • Multi-location inventory tracking
   • Batch and serial number tracking
   • Expiry date management

2. **Supplier Management**
   • Centralized supplier database
   • Automated purchase order generation
   • Price history tracking
   • Supplier performance metrics
   • Communication logging

3. **Order Processing**
   • Automated reorder point calculation
   • Purchase order generation
   • Order tracking and status updates
   • Delivery management
   • Quality control checks

4. **Technical Implementation**
   • ASP.NET Core MVC backend
   • Entity Framework Core for data access
   • SQL Server database
   • Real-time updates using SignalR
   • Mobile app integration

5. **Business Impact**
   • Reduced stockouts by 40%
   • Lower inventory holding costs
   • Improved supplier relationships
   • Better decision making
   • Increased operational efficiency

Would you like to know more about any specific aspect of how it works? 😊`,

        pos: `Let me explain how the POS System works in detail:

1. **Sales Processing**
   • Quick item scanning and lookup
   • Multiple payment method handling
   • Discount and promotion application
   • Receipt generation
   • Returns and refunds processing

2. **Inventory Integration**
   • Real-time stock updates
   • Low stock alerts
   • Automatic reordering
   • Stock movement tracking
   • Price updates

3. **Customer Management**
   • Customer profile creation
   • Purchase history tracking
   • Loyalty program management
   • Customer feedback collection
   • Marketing preferences

4. **Technical Implementation**
   • ASP.NET Core MVC backend
   • SQL Server database
   • Offline capability
   • Secure transaction processing
   • Real-time synchronization

5. **Business Impact**
   • Faster transactions
   • Reduced errors by 60%
   • Better customer service
   • Improved inventory control
   • Increased sales tracking

Would you like to know more about any specific aspect of how it works? 😊`
    };

    return responses[topic] || `Let me explain how the ${topic} system works. What specific aspect would you like to know about? 😊`;
}

function generateFeaturesResponse(topic) {
    const responses = {
        inventory: `Here are the key features of the Inventory Management System and how they benefit your business:

1. **Stock Management Features**
   • Real-time stock tracking
   - Benefit: Always know your current stock levels
   - Impact: Prevents stockouts and overstocking
   • Multi-location support
   - Benefit: Manage multiple warehouses/stores
   - Impact: Better resource allocation
   • Batch tracking
   - Benefit: Track product batches and expiry dates
   - Impact: Reduces waste and improves quality control

2. **Supplier Management Features**
   • Supplier database
   - Benefit: Centralized supplier information
   - Impact: Better supplier relationships
   • Automated reordering
   - Benefit: Automatic purchase order generation
   - Impact: Saves time and prevents stockouts
   • Price history tracking
   - Benefit: Monitor price changes
   - Impact: Better cost control

3. **Reporting Features**
   • Stock level reports
   - Benefit: Detailed inventory analysis
   - Impact: Better decision making
   • Movement analysis
   - Benefit: Track stock movement patterns
   - Impact: Optimize inventory levels
   • Cost tracking
   - Benefit: Monitor inventory costs
   - Impact: Improved profitability

4. **Integration Features**
   • POS system integration
   - Benefit: Real-time sales updates
   - Impact: Accurate stock levels
   • E-commerce platform integration
   - Benefit: Unified inventory management
   - Impact: Consistent stock levels across channels
   • Mobile access
   - Benefit: Access inventory anywhere
   - Impact: Improved flexibility

5. **Business Benefits**
   • 30% reduction in stockouts
   • 25% lower inventory holding costs
   • 40% faster order processing
   • 50% reduction in manual work
   • Improved customer satisfaction

Would you like to know more about any specific feature and its benefits? 😊`,

        pos: `Here are the key features of the POS System and how they benefit your business:

1. **Sales Processing Features**
   • Quick sales processing
   - Benefit: Faster transactions
   - Impact: Reduced customer wait time
   • Multiple payment methods
   - Benefit: Flexible payment options
   - Impact: Increased sales
   • Discount management
   - Benefit: Easy promotion handling
   - Impact: Increased sales

2. **Inventory Features**
   • Real-time stock updates
   - Benefit: Accurate inventory levels
   - Impact: Better stock control
   • Low stock alerts
   - Benefit: Proactive reordering
   - Impact: Prevents stockouts
   • Price management
   - Benefit: Easy price updates
   - Impact: Better pricing control

3. **Customer Features**
   • Customer profiles
   - Benefit: Personalized service
   - Impact: Better customer relationships
   • Loyalty program
   - Benefit: Customer retention
   - Impact: Increased repeat business
   • Purchase history
   - Benefit: Better customer insights
   - Impact: Targeted marketing

4. **Reporting Features**
   • Sales reports
   - Benefit: Business performance tracking
   - Impact: Better decision making
   • Inventory reports
   - Benefit: Stock level analysis
   - Impact: Optimized inventory
   • Customer insights
   - Benefit: Customer behavior analysis
   - Impact: Improved marketing

5. **Business Benefits**
   • 40% faster transactions
   • 30% reduction in errors
   • 25% increase in sales
   • 50% less manual work
   • Better customer service

Would you like to know more about any specific feature and its benefits? 😊`
    };

    return responses[topic] || `Let me tell you about the features of the ${topic} system. What specific aspect would you like to know about? 😊`;
}

function generateGreetingResponse() {
    return generateTopicResponse('greeting');
}

function generateExperienceResponse() {
    return `Let me tell you about Sandip's experience! 💼

He's been working as a Full Stack .NET Developer, creating amazing solutions for businesses. His journey started at Niagara College where he's studying Computer Programming, and he's already built some impressive projects!

In 2024, he created a Hospital Management System that helps hospitals manage patients, appointments, and medical records. It's like having a super-smart digital assistant for healthcare!

In 2023, he built three major systems:
• A Gym Management System that helps gyms track members and classes
• A School Management System for managing students and grades
• An Enterprise CRM System for businesses to manage customer relationships

Each project shows his ability to solve real business problems using modern technology. Would you like to know more about any specific project? 😊`;
}

function generateFeatureResponse(topic) {
    const featureResponses = {
        crm: `Let me tell you about the key features of the CRM system:

1. **Lead Management**
   - Lead tracking and scoring
   - Automated lead assignment
   - Lead status monitoring
   - Conversion tracking
   - Lead source analytics

2. **Sales Pipeline**
   - Visual pipeline management
   - Deal tracking and forecasting
   - Sales stage automation
   - Performance analytics
   - Revenue forecasting

3. **Customer Management**
   - Customer profile management
   - Interaction history
   - Document management
   - Communication tracking
   - Customer segmentation

4. **Automation Features**
   - Automated follow-ups
   - Task scheduling
   - Email notifications
   - Workflow automation
   - Calendar integration

5. **Reporting & Analytics**
   - Sales performance metrics
   - Customer behavior analysis
   - Conversion rate tracking
   - Custom report generation
   - Real-time dashboards

Would you like to know more about any specific feature or see how it's implemented technically?`,
        hospital: `Let me tell you about the key features of the Hospital Management System:

1. **Patient Management System**
   - Digital patient registration with validation
   - Comprehensive medical history tracking
   - Automated appointment scheduling
   - Treatment and prescription records
   - Insurance information management

2. **Appointment Management**
   - Online booking portal
   - Automated email and SMS reminders
   - Doctor availability calendar
   - Waitlist management
   - Appointment rescheduling

3. **Medical Records**
   - Secure digital patient records
   - Prescription management
   - Test results and imaging tracking
   - Medical history documentation
   - Document version control

4. **Analytics Dashboard**
   - Real-time patient statistics
   - Treatment outcome tracking
   - Resource utilization metrics
   - Performance analytics
   - Custom report generation

5. **Security & Compliance**
   - Role-based access control
   - HIPAA compliance
   - Data encryption
   - Audit logging
   - AAA accessibility standards

Would you like to know more about any specific feature or see how it's implemented technically?`,
        erp: `Let me tell you about the key features of the ERP system:

1. **Inventory Management**
   - Real-time stock tracking
   - Multi-location inventory
   - Automated reordering
   - Batch and serial tracking
   - Stock valuation

2. **Financial Management**
   - General ledger
   - Accounts payable/receivable
   - Financial reporting
   - Budget management
   - Tax compliance

3. **Sales & CRM**
   - Order management
   - Customer database
   - Sales analytics
   - Pricing management
   - Customer service

4. **Human Resources**
   - Employee management
   - Payroll processing
   - Time tracking
   - Benefits administration
   - Performance management

5. **Business Intelligence**
   - Real-time dashboards
   - Custom reporting
   - Data analytics
   - Performance metrics
   - Trend analysis

6. **Document Management**
   - Centralized document storage
   - Version control system
   - Document workflow automation
   - Access control and permissions
   - Document search and retrieval
   - Audit trail and tracking
   - Digital signature integration
   - Document archiving
   - Multi-format support
   - Collaboration tools

Would you like to know more about any specific feature or see how it's implemented technically?`
    };

    return featureResponses[topic] || `I can tell you about the features of ${topic}. What specific aspect would you like to know more about?`;
}

function generateProjectResponse(project) {
    const projectDetails = {
        hospital: `The Hospital Management System is one of Sandip's most exciting projects! 🏥

It's like having a super-smart digital assistant for hospitals. The system makes it super easy for patients to register online and book appointments. It even sends automatic reminders through email and SMS, which helps reduce no-shows by 25%!

Doctors love it because they can easily access patient records, manage prescriptions, and track test results all in one place. The hospital staff can see real-time statistics and track how well treatments are working.

Key Features:
• Patient Management & Registration
• Appointment Scheduling
• Medical Records Management
• Prescription Tracking
• Analytics Dashboard

Technical Implementation:
• ASP.NET Core MVC Backend
• Entity Framework Core
• SQL Server Database
• Real-time Updates with SignalR
• Interactive Dashboard with Chart.js
• Automated Email Notifications
• Role-based Security
• AAA Accessibility Standards

Would you like to know more about any specific part of the system? I can tell you about the features, how it's built, or how it's helping hospitals run better! 😊`,
        
        erp: `The ERP System is a comprehensive business solution! 🏢

It's like having a command center for your entire business. The system helps companies manage everything from inventory and sales to accounting and human resources, all in one place. It's really helped businesses streamline their operations and make better decisions.

Key Features:
• Inventory Management
• Sales & Purchase Tracking
• Financial Management
• HR & Payroll
• Business Analytics

Technical Implementation:
• ASP.NET Core MVC backend
• Entity Framework Core
• SQL Server Database
• RESTful API Design
• Role-based Security
• Real-time Reporting
• Automated Workflows
• Data Validation

Would you like to know more about how it works or how it's helping businesses? I can tell you about specific features or the technical implementation! 😊`,
        
        crm: `The CRM System is a powerful customer relationship management solution! 🤝

It helps businesses keep track of all their customer interactions in one place. Think of it as a digital memory bank that remembers every conversation, every deal, and every customer's needs. It's really helped businesses grow by making sure no customer falls through the cracks.

Key Features:
• Lead Management & Tracking
• Sales Pipeline Visualization
• Customer Interaction History
• Automated Follow-ups
• Document Management

Technical Implementation:
• ASP.NET Core MVC Backend
• Entity Framework Core
• SQL Server Database
• RESTful API Design
• Real-time Updates
• Email Integration
• Document Version Control
• Analytics Dashboard

Would you like to know more about how it works or how it's helping businesses? I can tell you about specific features or the technical implementation! 😊`,
        
        gym: `The Gym Management System is a comprehensive fitness center solution! 💪

It helps gyms manage everything from member registrations to class scheduling. Members can book classes online, track their progress, and even pay their membership fees through the system. The staff can easily manage schedules, track attendance, and keep everything running smoothly.

Key Features:
• Member Portal
• Class Scheduling
• Payment Processing
• Attendance Tracking
• Progress Monitoring

Technical Implementation:
• ASP.NET Core MVC Backend
• SQLite Database
• Entity Framework Core
• Payment Gateway Integration
• Automated Scheduling
• Email Notifications
• Mobile Responsive Design
• Role-based Access

Would you like to know more about how it works or how it's helping gyms? I can tell you about specific features or the technical implementation! 😊`,
        
        school: `The School Management System is a complete educational institution solution! 🏫

It makes it super easy for teachers to manage their classes, track grades, and communicate with parents. Students can check their schedules and assignments, and parents can stay updated on their child's progress. It's like having a digital school administrator that works 24/7!

Key Features:
• Student Records Management
• Grade Tracking
• Parent-Teacher Communication
• Attendance System
• Assignment Management

Technical Implementation:
• ASP.NET Core MVC Backend
• Entity Framework Core
• SQL Server Database
• Automated Grade Calculation
• Parent Communication Portal
• Document Management
• Real-time Updates
• Role-based Security

Would you like to know more about how it works or how it's helping schools? I can tell you about specific features or the technical implementation! 😊`,
        
        pos: `The POS (Point of Sale) System is a practical business solution! 💰

It's like having a super-smart cash register that does so much more than just process payments. The system helps businesses manage their sales, track inventory, and handle customer transactions all in one place. It's really helped small businesses grow by making their operations more efficient.

Key Features:
• Sales Processing
• Inventory Management
• Customer Management
• Real-time Reporting
• Payment Processing

Technical Implementation:
• ASP.NET Core MVC Backend
• SQL Server Database
• Entity Framework Core
• Payment Gateway Integration
• Barcode Scanner Support
• Receipt Printer Integration
• Offline Capability
• Real-time Sync

Would you like to know more about how it works or how it's helping businesses? I can tell you about specific features or the technical implementation! 😊`
    };

    return projectDetails[project] || `I'd be happy to tell you about Sandip's experience with ${project}! What would you like to know? 😊`;
}

function generateOverviewResponse() {
    return `Hey! I'd love to tell you about Sandip's expertise! 😊

He's a Full Stack .NET Developer who's really good at building enterprise applications. He works with cool technologies like ASP.NET Core MVC, Entity Framework Core, and SQL Server. 

Some of his recent projects are super interesting! He built a Hospital Management System in 2024, and in 2023 he created a Gym Management System, School Management System, and an Enterprise CRM System. All of these projects were successful and helped businesses run more smoothly.

What makes Sandip special is his ability to handle complex features, implement strong security measures, and create automated workflows. He's also really good at making sure everything meets Canadian AAA accessibility standards.

Would you like to know more about any of his projects or skills? I can tell you all about them! 😊`;
}

function generateRecentProjectsResponse() {
    return `Let me tell you about Sandip's recent projects from 2023:

1. **Gym Management System**
   - Member portal and class scheduling
   - Secure payment processing
   - Attendance tracking
   - Automated workflows
   - Built with ASP.NET Core MVC and SQLite

2. **School Management System**
   - Student records and grade management
   - Parent-teacher communication portal
   - Automated attendance tracking
   - Academic performance monitoring
   - Implemented with Entity Framework Core

3. **Enterprise CRM System**
   - Lead management and customer tracking
   - Sales analytics dashboard
   - Document version control
   - Automated customer communication
   - Features RESTful API design

Each project demonstrates Sandip's expertise in:
- Enterprise application development
- Database design and optimization
- Security implementation
- Automated workflow creation

Would you like to know more about any specific project or aspect?`;
}

function generateTechnicalSkillsResponse() {
    return `Let me tell you about Sandip's technical expertise:

1. **Backend Development**
   - ASP.NET Core MVC & Web API
   - Entity Framework Core
   - SQL Server & SQLite
   - C# Programming
   - RESTful API Design

2. **Frontend Development**
   - HTML5 & CSS3
   - JavaScript
   - Responsive Design
   - UI/UX Implementation
   - Modern Web Technologies

3. **Database & Data Management**
   - Database Design
   - Query Optimization
   - Data Modeling
   - Data Migration
   - Backup & Recovery

4. **Additional Skills**
   - Canadian AAA Accessibility Standards
   - Version Control (Git)
   - Agile Development
   - Unit Testing
   - Documentation

Would you like to know more about any specific skill set? I can provide more details about his experience with particular technologies or methodologies.`;
}

function addConversationElements(response, context) {
    const transitions = [
        "Let me tell you about that.",
        "I'd be happy to share more details.",
        "That's a great question!",
        "I think you'll find this interesting.",
        "Based on Sandip's experience with this..."
    ];

    // Add transition based on conversation stage
    if (context.conversationStage === 'initial') {
        return response;
    } else if (context.conversationStage === 'exploring') {
        return `${transitions[0]} ${response}`;
    } else if (context.conversationStage === 'detailed') {
        return `${transitions[1]} ${response}`;
    }

    return response;
}

function updateConversationContext(message, isUser = true) {
    // Add message to history
    conversationState.history.push({
        message,
        isUser,
        timestamp: new Date()
    });

    // Keep history within limits
    if (conversationState.history.length > conversationState.maxHistoryLength) {
        conversationState.history.shift();
    }

    // Update context based on user message
    if (isUser) {
        const intent = analyzeIntent(message);
        const topic = extractTopic(message);
        
        if (topic) {
            conversationState.context.currentTopic = topic;
            conversationState.context.userInterests.add(topic);
        }
        
        // Update conversation stage
        if (intent === 'greeting') {
            conversationState.context.conversationStage = 'initial';
        } else if (intent === 'detailedInfo') {
            conversationState.context.conversationStage = 'detailed';
        } else {
            conversationState.context.conversationStage = 'exploring';
        }
        
        conversationState.context.lastIntent = intent;
    }
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chat functionality
    initChat();
});

// Initialize chat with enhanced functionality
function initChat() {
    if (!chatToggle || !chatContainer || !chatContent || !chatInput || !sendMessage) {
        console.error('Required chat elements not found');
        return;
    }

    // Initialize conversation state
    conversationState.context = {
        currentTopic: null,
        userInterests: new Set(),
        lastIntent: null,
        conversationStage: 'initial'
    };

    // Toggle chat visibility
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
        if (notificationBadge) {
            notificationBadge.style.display = 'none';
        }
    });

    // Minimize chat
    const minimizeBtn = document.querySelector('.minimize-chat');
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });
    }

    // Close chat
    const closeBtn = document.querySelector('.close-chat');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            chatContainer.classList.remove('active');
        });
    }

    // Enhanced message sending with typing indicator
    function sendUserMessage() {
        const message = chatInput.value.trim();
        if (message) {
            processUserInput(message);
            chatInput.value = '';
        }
    }

    // Update send message handler
    sendMessage.addEventListener('click', sendUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    // Show notification badge after 5 seconds if chat is not open
    if (notificationBadge) {
        setTimeout(() => {
            if (!chatContainer.classList.contains('active')) {
                notificationBadge.style.display = 'block';
            }
        }, 5000);
    }

    // Clear existing chat content
    chatContent.innerHTML = '';

    // Add initial bot message
    const initialMessage = `👋 Hi! I'm your AI assistant. I can help you learn about Sandip's expertise in:

• Enterprise Solutions
• Technical Skills
• Recent Projects
• Contact Information

Click any button below or ask me anything! 😊`;

    addMessage(initialMessage);

    // Add expertise options
    const expertiseOptions = [
        { type: 'overview', icon: 'star', text: '👋 Meet Me' },
        { type: 'skills', icon: 'code', text: '💻 My Skills' },
        { type: 'projects', icon: 'project-diagram', text: '🚀 My Projects' },
        { type: 'hospital', icon: 'hospital', text: '🏥 Hospital System' },
        { type: 'gym', icon: 'dumbbell', text: '💪 Gym System' },
        { type: 'school', icon: 'school', text: '📚 School System' },
        { type: 'crm', icon: 'users', text: '🤝 CRM System' },
        { type: 'erp', icon: 'building', text: '🏢 ERP System' },
        { type: 'pos', icon: 'cash-register', text: '💰 POS System' },
        { type: 'contact', icon: 'envelope', text: '📬 Let\'s Connect' }
    ];

    const expertiseDiv = document.createElement('div');
    expertiseDiv.className = 'expertise-options';
    
    expertiseOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'expertise-btn';
        button.setAttribute('data-type', option.type);
        button.innerHTML = `<i class="fas fa-${option.icon}"></i> ${option.text}`;
        
        button.addEventListener('click', () => {
            const topic = option.type;
            const userMessage = `Tell me about ${option.text.replace(/[^\w\s]/g, '')}`;
            
            // Add user message
            addMessage(userMessage, true);
            
            // Show typing indicator
            const typingIndicator = showTypingIndicator();
            
            // Generate response based on topic
            setTimeout(() => {
                removeTypingIndicator(typingIndicator);
                let response;
                
                // Check if it's a project-specific topic
                if (['hospital', 'gym', 'school', 'crm', 'erp', 'pos'].includes(topic)) {
                    response = generateProjectResponse(topic);
                } else {
                    response = generateTopicResponse(topic);
                }
                
                // Add bot response
                addMessage(response);
                
                // Show hints immediately after response
                if (['hospital', 'gym', 'school', 'crm', 'erp', 'pos'].includes(topic)) {
                    showFloatingHints(topic);
                }
            }, 1000);
        });
        
        expertiseDiv.appendChild(button);
    });
    
    chatContent.appendChild(expertiseDiv);

    // Add CSS for expertise buttons
    const style = document.createElement('style');
    style.textContent = `
        .expertise-options {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            padding: 8px;
            margin: 0 -8px;
            max-width: 800px;
            margin: 0 auto;
        }

        .expertise-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            padding: 8px 12px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            background: #ffffff;
            color: #4b5563;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            text-align: center;
            width: 100%;
            min-height: 36px;
            position: relative;
            overflow: hidden;
        }

        .expertise-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.1));
            opacity: 0;
            transition: opacity 0.2s ease;
        }

        .expertise-btn:hover {
            background: #f8fafc;
            border-color: #d1d5db;
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .expertise-btn:hover::before {
            opacity: 1;
        }

        .expertise-btn:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .expertise-btn i {
            font-size: 0.9rem;
            color: #6b7280;
            transition: all 0.2s ease;
        }

        .expertise-btn:hover i {
            color: #2563eb;
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
            .expertise-options {
                grid-template-columns: repeat(2, 1fr);
                gap: 8px;
                padding: 6px;
            }

            .expertise-btn {
                padding: 6px 10px;
                font-size: 0.8rem;
                min-height: 32px;
            }
        }

        @media (max-width: 480px) {
            .expertise-options {
                grid-template-columns: 1fr;
                gap: 6px;
                padding: 4px;
            }

            .expertise-btn {
                padding: 8px 12px;
                font-size: 0.85rem;
                min-height: 36px;
            }
        }
    `;
    document.head.appendChild(style);
}

// Update the addMessage function to maintain conversation context
function addMessage(message, isUser = false) {
    const chatContent = document.querySelector('.chat-content');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = formatMessage(message);
    
    const messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);
    chatContent.appendChild(messageDiv);
    
    // Scroll to bottom
    chatContent.scrollTop = chatContent.scrollHeight;
    
    // Update conversation context
    updateConversationContext(message, isUser);
    
    // Show floating hints for bot messages
    if (!isUser) {
        const topic = extractTopic(message);
        setTimeout(() => showFloatingHints(topic), 1000);
    }
}

// Add CSS for floating hints
const style = document.createElement('style');
style.textContent = `
    .floating-hints {
        position: relative;
        margin: 10px 0;
        animation: slideIn 0.5s ease-out;
    }

    .hint-content {
        background: rgba(37, 99, 235, 0.1);
        border-left: 4px solid #2563eb;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 0.9rem;
        color: #1f2937;
    }

    .hint-item {
        margin: 4px 0;
        opacity: 0.9;
        transition: all 0.3s ease;
    }

    .hint-item:hover {
        opacity: 1;
        transform: translateX(5px);
        color: #2563eb;
        cursor: pointer;
    }

    .floating-hints.fade-out {
        animation: fadeOut 0.5s ease-out forwards;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(style);

// Intent analysis
function analyzeIntent(message) {
    message = message.toLowerCase();
    
    if (message.includes('experience') || message.includes('work') || message.includes('job') || message.includes('career')) {
        return 'experience';
    }
    
    if (message.includes('yes') || message.includes('sure') || message.includes('okay') || message.includes('ok')) {
        return 'yes';
    }
    
    if (message.includes('tell me more') || message.includes('more details') || message.includes('more information')) {
        return 'detailedInfo';
    }

    if (message.includes('code') || message.includes('example') || message.includes('implementation')) {
        return 'codeExample';
    }

    if (message.includes('case study') || message.includes('business case') || message.includes('success story')) {
        return 'caseStudy';
    }

    if (message.includes('architecture') || message.includes('diagram') || message.includes('structure')) {
        return 'architecture';
    }
    
    return 'greeting';
}

// Topic extraction
function extractTopic(message) {
    message = message.toLowerCase().trim();
    
    // Direct topic matches
    if (message === 'crm') return 'crm';
    if (message === 'erp') return 'erp';
    if (message === 'gym') return 'gym';
    if (message === 'school') return 'school';
    if (message === 'hospital') return 'hospital';
    if (message === 'pos') return 'pos';
    if (message === 'contact') return 'contact';
    if (message === 'projects') return 'projects';
    if (message === 'skills') return 'skills';
    if (message === 'overview') return 'overview';

    // Check for "tell me about" queries
    if (message.includes('tell me about')) {
        if (message.includes('crm')) return 'crm';
        if (message.includes('erp')) return 'erp';
        if (message.includes('gym')) return 'gym';
        if (message.includes('school')) return 'school';
        if (message.includes('hospital')) return 'hospital';
        if (message.includes('pos')) return 'pos';
        if (message.includes('contact')) return 'contact';
        if (message.includes('projects')) return 'projects';
        if (message.includes('skills')) return 'skills';
        if (message.includes('overview')) return 'overview';
    }

    // Check for greetings
    if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
        return 'greeting';
    }
    
    // Check for farewells
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
        return 'farewell';
    }

    return null;
}

// User preferences tracking
function updateUserPreferences(message) {
    const lowerMessage = message.toLowerCase();
    
    // Track user interests
    if (lowerMessage.includes('interested') || lowerMessage.includes('like') || lowerMessage.includes('want')) {
        const topics = extractTopic(message);
        if (topics !== 'general') {
            conversationState.context.userInterests.add(topics);
        }
    }
    
    // Track user concerns
    if (lowerMessage.includes('concern') || lowerMessage.includes('worry') || lowerMessage.includes('issue')) {
        conversationState.context.userPreferences.concerns = 
            conversationState.context.userPreferences.concerns || [];
        conversationState.context.userPreferences.concerns.push(message);
    }
}

// Resume Data
const resumeData = {
    personalInfo: {
        name: "Sandip Acharya",
        title: "Full Stack .NET Developer",
        email: "sandip2446@gmail.com",
        linkedin: "linkedin.com/in/sandip2446",
        github: "github.com/sandip2446",
        location: "Welland, ON, Canada"
    },
    summary: "Full Stack .NET Developer with proven expertise in building enterprise-grade applications and cross-platform solutions. Demonstrated success in developing four comprehensive management systems using ASP.NET Core MVC, implementing complex features including master-detail relationships, role-based security, and automated workflows. Strong foundation in both backend and frontend technologies, with additional expertise in data science and analytics.",
    keyAchievements: [
        "Developed 4 comprehensive management systems using ASP.NET Core MVC",
        "Implemented Canadian government AAA accessibility standards across all projects",
        "Mastered full-stack development with modern technologies",
        "Delivered complex projects with advanced features"
    ],
    projects: [
        {
            name: "Hospital Management System",
            period: "January 2024 - Present",
            impact: [
                "Streamlined patient management and appointment scheduling",
                "Implemented Canadian government AAA accessibility standards",
                "Improved operational efficiency with automated workflows",
                "Implemented real-time analytics for better decision-making"
            ],
            tech: [
                "ASP.NET Core MVC with Entity Framework Core",
                "SQL Server with complex entity relationships",
                "Interactive dashboard with Chart.js",
                "Automated email notification system"
            ]
        },
        {
            name: "Gym Management System",
            period: "October 2023 - December 2023",
            impact: [
                "Automated member management and class scheduling",
                "Implemented secure payment processing",
                "Enhanced member experience with self-service portal",
                "Improved attendance tracking and reporting"
            ],
            tech: [
                "ASP.NET Core MVC with SQLite database",
                "Entity relationships for members and classes",
                "Automated scheduling system",
                "Payment gateway integration"
            ]
        },
        {
            name: "School Management System",
            period: "July 2023 - September 2023",
            impact: [
                "Streamlined student records and grade management",
                "Enhanced parent-teacher communication",
                "Automated attendance tracking and reporting",
                "Improved academic performance monitoring"
            ],
            tech: [
                "ASP.NET Core MVC with Entity Framework",
                "Complex entity relationships for academic data",
                "Automated grade calculation system",
                "Parent communication portal"
            ]
        },
        {
            name: "Enterprise CRM System",
            period: "September 2023 - December 2023",
            impact: [
                "Streamlined lead management and customer tracking",
                "Enhanced sales analytics and reporting",
                "Improved document version control",
                "Automated customer communication"
            ],
            tech: [
                "ASP.NET Core MVC with SQLite",
                "Complex entity relationships",
                "Sales analytics dashboard",
                "Automated workflow system"
            ]
        }
    ],
    skills: {
        backend: [
            "ASP.NET Core MVC & Web API - Enterprise application development",
            "Entity Framework Core - Advanced data management",
            "SQL Server & SQLite - Database design and optimization",
            "RESTful API Design - Scalable service architecture",
            "Master-Detail Architecture - Complex data relationships",
            "View Models & DTOs - Clean data presentation",
            "Repository Pattern - Maintainable code structure",
            "C# Development - Object-oriented programming"
        ],
        frontend: [
            "HTML5 & CSS3 - Modern web development",
            "JavaScript - Interactive web applications",
            ".NET MAUI - Cross-platform mobile development",
            "UWP Applications - Windows platform development",
            "Responsive Design - Mobile-first approach",
            "UI/UX Implementation - User-centered design",
            "Frontend Frameworks - Modern web technologies"
        ],
        accessibility: [
            "Canadian AAA Standards - Government accessibility compliance",
            "WCAG 2.1 Guidelines - Web content accessibility",
            "Accessible Design - Inclusive user experience",
            "Screen Reader Support - Assistive technology compatibility",
            "Keyboard Navigation - Universal access support",
            "Color Contrast - Visual accessibility",
            "ARIA Implementation - Enhanced accessibility"
        ],
        dataScience: [
            "Python - Data analysis and scripting",
            "NumPy - Numerical computing",
            "Pandas - Data manipulation and analysis",
            "Data Processing - Large dataset handling",
            "Analytics Tools - Business intelligence"
        ]
    },
    education: {
        degree: "Computer Programming Diploma",
        school: "Niagara College, Welland, ON",
        graduation: "2025",
        coursework: [
            "ASP.NET Core Development",
            "Database Management Systems",
            "Web Development & Design",
            "Software Engineering Principles"
        ]
    }
};

// Add typing indicator
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-message bot typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatContent.appendChild(typingDiv);
    chatContent.scrollTop = chatContent.scrollHeight;
    return typingDiv;
}

// Remove typing indicator
function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

// Enhanced message formatting
function formatMessage(message) {
    if (!message) return '';
    
    // First decode any existing HTML entities to prevent double encoding
    let formatted = message
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");

    // Then escape HTML tags and special characters
    formatted = formatted
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    // Then handle line breaks and bullet points
    formatted = formatted
        .replace(/\n\n/g, '<br><br>')  // Double line breaks
        .replace(/\n/g, '<br>')        // Single line breaks
        .replace(/•/g, '<span class="bullet-point">•</span>');

    // Finally handle markdown formatting
    formatted = formatted
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

    return formatted;
}

function extractTopicFromHistory() {
    // Look through recent history to find the last mentioned topic
    for (let i = conversationState.history.length - 1; i >= 0; i--) {
        const message = conversationState.history[i].message.toLowerCase();
        if (message.includes('crm') || message.includes('customer')) return 'crm';
        if (message.includes('hospital')) return 'hospital';
        if (message.includes('gym')) return 'gym';
        if (message.includes('school')) return 'school';
    }
    return null;
}

// Add event listeners for expertise buttons
document.querySelectorAll('.expertise-btn').forEach(button => {
    button.addEventListener('click', () => {
        const topic = button.getAttribute('data-type');
        const userMessage = button.textContent.trim();
        
        // Add user message
        addMessage(userMessage, true);
        
        // Show typing indicator
        const typingIndicator = showTypingIndicator();
        
        // Generate response based on topic
        setTimeout(() => {
            removeTypingIndicator(typingIndicator);
            let response;
            
            // Check if it's a project-specific topic
            if (['hospital', 'gym', 'school', 'crm', 'erp', 'pos'].includes(topic)) {
                response = generateProjectResponse(topic);
            } else {
                response = generateTopicResponse(topic);
            }
            
            // Add bot response
            addMessage(response);
            
            // Show hints immediately after response
            showFloatingHints(topic);
        }, 1000);
    });
});

// Update the showFloatingHints function to ensure hints are displayed
function showFloatingHints(topic) {
    const hints = {
        project: {
            hospital: [
                "💡 Hospital System Chat Hints:",
                "• Tell me about patient registration",
                "• How does appointment scheduling work?",
                "• Explain medical records management",
                "• Show billing system features",
                "• Describe staff management",
                "• What analytics are available?",
                "• How does emergency response work?",
                "• Explain pharmacy management",
                "• How are lab results tracked?",
                "• Describe treatment planning"
            ],
            gym: [
                "💡 Gym System Chat Hints:",
                "• Tell me about member portal",
                "• How does class scheduling work?",
                "• Explain payment processing",
                "• Show attendance tracking",
                "• Describe equipment management",
                "• What membership plans exist?",
                "• How is trainer management handled?",
                "• Explain progress tracking",
                "• How does facility booking work?",
                "• Describe member communication"
            ],
            school: [
                "💡 School System Chat Hints:",
                "• Tell me about student management",
                "• How does grade tracking work?",
                "• Explain attendance system",
                "• Show parent-teacher portal",
                "• Describe course scheduling",
                "• What academic tracking exists?",
                "• How is fee management handled?",
                "• Explain library management",
                "• How does transportation work?",
                "• Describe event management"
            ],
            crm: [
                "💡 CRM System Chat Hints:",
                "• Tell me about lead management",
                "• How does sales pipeline work?",
                "• Explain customer profiles",
                "• Show document management",
                "• Describe communication tools",
                "• What analytics are available?",
                "• How is task tracking handled?",
                "• Explain marketing campaigns",
                "• How does customer service work?",
                "• Describe integration features"
            ],
            erp: [
                "💡 ERP System Chat Hints:",
                "• Tell me about inventory management",
                "• How does financial tracking work?",
                "• Explain HR management",
                "• Show document handling",
                "• Describe business intelligence",
                "• What supply chain features exist?",
                "• How is manufacturing managed?",
                "• Explain project management",
                "• How does quality control work?",
                "• Describe compliance features"
            ],
            pos: [
                "💡 POS System Chat Hints:",
                "• Tell me about sales processing",
                "• How does inventory tracking work?",
                "• Explain customer management",
                "• Show payment processing",
                "• Describe barcode scanning",
                "• What receipt features exist?",
                "• How are sales analyzed?",
                "• Explain employee management",
                "• How does discount system work?",
                "• Describe offline capabilities"
            ]
        }
    };

    // Get appropriate hints based on topic
    const selectedHints = hints.project?.[topic] || null;

    // Only show hints if we have relevant ones
    if (!selectedHints) return;

    // Remove any existing hints
    const existingHints = document.querySelector('.floating-hints');
    if (existingHints) {
        existingHints.remove();
    }

    // Create hint container
    const hintContainer = document.createElement('div');
    hintContainer.className = 'floating-hints';
    
    // Create hint content
    const hintContent = document.createElement('div');
    hintContent.className = 'hint-content';
    
    // Add header
    const header = document.createElement('div');
    header.className = 'hint-header';
    header.innerHTML = `
        <span class="hint-title">💡 Suggested Questions</span>
        <button class="hint-close-btn" title="Close hints">
            <i class="fas fa-times"></i>
        </button>
    `;
    hintContent.appendChild(header);
    
    // Add hint items
    const hintList = document.createElement('div');
    hintList.className = 'hint-list';
    
    selectedHints.forEach(hint => {
        const hintElement = document.createElement('div');
        hintElement.className = 'hint-item';
        hintElement.innerHTML = `
            <i class="fas fa-chevron-right"></i>
            <span>${hint}</span>
        `;
        
        // Make hints clickable
        hintElement.onclick = () => {
            const input = document.querySelector('.chat-input');
            const hintText = hint.replace('•', '').trim();
            input.value = hintText;
            input.focus();
            hintContainer.classList.add('fade-out');
            setTimeout(() => hintContainer.remove(), 500);
        };
        
        hintList.appendChild(hintElement);
    });
    
    hintContent.appendChild(hintList);
    hintContainer.appendChild(hintContent);
    
    // Add close button functionality
    const closeButton = hintContent.querySelector('.hint-close-btn');
    closeButton.onclick = () => {
        hintContainer.classList.add('fade-out');
        setTimeout(() => hintContainer.remove(), 500);
    };
    
    // Add to chat content
    document.querySelector('.chat-content').appendChild(hintContainer);

    // Add new CSS styles
    const style = document.createElement('style');
    style.textContent = `
        .floating-hints {
            position: relative;
            margin: 15px 0;
            animation: slideIn 0.5s ease-out;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
            max-width: 100%;
            overflow: hidden;
        }

        .hint-content {
            padding: 0;
        }

        .hint-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 16px;
            background: #f8fafc;
            border-bottom: 1px solid #e5e7eb;
        }

        .hint-title {
            font-weight: 600;
            color: #1f2937;
            font-size: 1rem;
        }

        .hint-close-btn {
            background: none;
            border: none;
            color: #6b7280;
            cursor: pointer;
            padding: 4px;
            border-radius: 4px;
            transition: all 0.2s ease;
        }

        .hint-close-btn:hover {
            background: #e5e7eb;
            color: #1f2937;
        }

        .hint-list {
            padding: 8px 0;
            max-height: 300px;
            overflow-y: auto;
        }

        .hint-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            cursor: pointer;
            transition: all 0.2s ease;
            color: #4b5563;
        }

        .hint-item:hover {
            background: #f3f4f6;
            color: #2563eb;
        }

        .hint-item i {
            font-size: 0.8rem;
            color: #9ca3af;
            transition: transform 0.2s ease;
        }

        .hint-item:hover i {
            transform: translateX(3px);
            color: #2563eb;
        }

        .hint-item span {
            flex: 1;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .floating-hints.fade-out {
            animation: fadeOut 0.5s ease-out forwards;
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translateY(0);
            }
            to {
                opacity: 0;
                transform: translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
}

// Update the getMainCategory function to handle all topics
function getMainCategory(topic) {
    const projectTopics = ['hospital', 'gym', 'school', 'crm', 'erp', 'pos'];
    const systemTopics = ['features', 'benefits', 'technical'];
    const skillsTopics = ['skills', 'expertise', 'projects', 'experience'];
    const featureTopics = ['management', 'security', 'integration'];
    
    if (projectTopics.includes(topic.toLowerCase())) return 'project';
    if (systemTopics.includes(topic.toLowerCase())) return 'system';
    if (skillsTopics.includes(topic.toLowerCase())) return 'skills';
    if (featureTopics.includes(topic.toLowerCase())) return 'feature';
    if (topic.toLowerCase() === 'overview') return 'overview';
    if (topic.toLowerCase() === 'contact') return 'contact';
    return 'default';
}

// Helper function to extract sub-topic from the conversation
function extractSubTopic(topic) {
    const topicMap = {
        // Project topics
        'hospital': 'hospital',
        'gym': 'gym',
        'school': 'school',
        'crm': 'crm',
        'erp': 'erp',
        'pos': 'pos',
        // System topics
        'features': 'features',
        'benefits': 'benefits',
        'technical': 'technical',
        // Skills topics
        'skills': 'technical',
        'expertise': 'technical',
        'projects': 'projects',
        'experience': 'experience',
        'management': 'management',
        'security': 'security',
        'integration': 'integration'
    };
    
    return topicMap[topic.toLowerCase()] || 'default';
}