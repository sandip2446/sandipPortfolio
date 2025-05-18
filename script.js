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
    <p class="profile-highlight">Full Stack .NET Developer with proven expertise in building enterprise-grade applications and cross-platform solutions. Demonstrated success in developing four comprehensive management systems using ASP.NET Core MVC, implementing complex features including master-detail relationships, role-based security, and automated workflows. Strong foundation in both backend and frontend technologies, with additional expertise in data science and analytics.</p>
    
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
        <h3>Enterprise Development</h3>
        <ul>
          <li><i class="fab fa-microsoft"></i> ASP.NET Core MVC & Web API</li>
          <li><i class="fas fa-database"></i> Entity Framework Core</li>
          <li><i class="fas fa-server"></i> SQL Server & SQLite</li>
          <li><i class="fas fa-plug"></i> RESTful API Design</li>
          <li><i class="fas fa-users"></i> CRM System Development</li>
          <li><i class="fas fa-building"></i> ERP System Integration</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Business Solutions</h3>
        <ul>
          <li><i class="fas fa-chart-line"></i> Business Analytics</li>
          <li><i class="fas fa-tasks"></i> Workflow Automation</li>
          <li><i class="fas fa-file-invoice"></i> Document Management</li>
          <li><i class="fas fa-user-shield"></i> Role-Based Security</li>
          <li><i class="fas fa-sync"></i> Real-time Synchronization</li>
          <li><i class="fas fa-chart-bar"></i> Custom Reporting</li>
        </ul>
      </div>
      <div class="skill-category">
        <h3>Frontend & Accessibility</h3>
        <ul>
          <li><i class="fab fa-html5"></i> HTML5 & CSS3</li>
          <li><i class="fab fa-js"></i> JavaScript</li>
          <li><i class="fab fa-microsoft"></i> .NET MAUI</li>
          <li><i class="fas fa-universal-access"></i> AAA Standards</li>
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
        // Show hints directly after response
        showFloatingHints(topic);
    }, 1000);
}

function generateTopicResponse(topic) {
    const greetingResponses = {
        greeting: [
            "👋 Hi! I'm your AI assistant. I can help you learn about Sandip's expertise in enterprise solutions, technical skills, and recent projects. How can I assist you today?",
            "👋 Hello! I'm here to tell you about Sandip's work as a Full Stack .NET Developer. Would you like to know about his projects, skills, or experience?",
            "👋 Hey there! I'm your guide to Sandip's portfolio. I can tell you about his Hospital Management System, Gym Management System, School Management System, and more. What interests you?",
            "👋 Greetings! I'm your AI assistant, ready to share information about Sandip's expertise in building enterprise applications. What would you like to know?",
            "👋 Hi! I'm here to help you explore Sandip's work. He's a Full Stack .NET Developer who builds amazing enterprise solutions. What would you like to learn about?"
        ],
        farewell: [
            "👋 Goodbye! Feel free to come back if you have more questions about Sandip's work!",
            "👋 See you later! Don't hesitate to return if you want to learn more about Sandip's projects!",
            "👋 Take care! Come back anytime to explore more about Sandip's expertise!",
            "👋 Bye for now! Remember, I'm here whenever you want to learn more about Sandip's work!",
            "👋 Have a great day! Feel free to return if you have more questions about Sandip's portfolio!"
        ],
        identity: [
            "🤖 I'm an AI assistant created to help you learn about Sandip's work as a Full Stack .NET Developer. I can tell you about his projects, skills, and experience!",
            "🤖 I'm your guide to Sandip's portfolio! I can share details about his enterprise applications, technical expertise, and project implementations.",
            "🤖 I'm an AI assistant here to showcase Sandip's work. I specialize in explaining his projects, technical skills, and professional achievements.",
            "🤖 I'm your AI companion, ready to tell you all about Sandip's work as a Full Stack .NET Developer. What would you like to know?",
            "🤖 I'm here to help you explore Sandip's portfolio! I can tell you about his projects, skills, and experience in enterprise development."
        ],
        howAreYou: [
            "😊 I'm doing great, thanks for asking! I'm here to help you learn about Sandip's work. What would you like to know?",
            "😊 I'm wonderful! Ready to tell you all about Sandip's projects and expertise. How can I help you today?",
            "😊 I'm excellent! I'd love to share information about Sandip's work with you. What interests you?",
            "😊 I'm fantastic! I'm here to help you explore Sandip's portfolio. What would you like to learn about?",
            "😊 I'm doing great! I'm excited to tell you about Sandip's work as a Full Stack .NET Developer. What would you like to know?"
        ],
        contact: `👋 I'd love to connect with you! Here's how you can reach out:

• 📧 Email: sandip2446@gmail.com
• 💼 LinkedIn: linkedin.com/in/sandip2446
• 💻 GitHub: github.com/sandip2446
• 📍 Location: Welland, ON, Canada

I'm available for:
• Full-time positions
• Remote opportunities
• Contract work
• Immediate start

Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and collaborations! 😊`
    };

    // General question templates
    const generalTemplates = {
        time: [
            "⏰ The current time is " + new Date().toLocaleTimeString() + ". Is there anything specific about Sandip's work you'd like to know?",
            "⏰ It's " + new Date().toLocaleTimeString() + ". Would you like to learn about Sandip's projects or expertise?"
        ],
        date: [
            "📅 Today is " + new Date().toLocaleDateString() + ". Would you like to know about Sandip's recent projects?",
            "📅 It's " + new Date().toLocaleDateString() + ". I can tell you about Sandip's work if you're interested!"
        ],
        weather: [
            "🌤️ I'm focused on telling you about Sandip's work as a Full Stack .NET Developer. Would you like to know about his projects?",
            "🌤️ While I can't check the weather, I can tell you about Sandip's expertise in enterprise solutions!"
        ],
        name: [
            "👋 I'm an AI assistant here to tell you about Sandip Acharya, a Full Stack .NET Developer. Would you like to know about his work?",
            "👋 I'm here to share information about Sandip Acharya's portfolio and projects. What would you like to know?"
        ],
        age: [
            "🎂 I'm here to discuss Sandip's professional experience and projects. Would you like to know about his technical expertise?",
            "🎂 Let me tell you about Sandip's work as a Full Stack .NET Developer instead!"
        ],
        location: [
            "📍 Sandip is based in Welland, ON, Canada. He's available for remote and local opportunities. Would you like to know more about his work?",
            "📍 Sandip works from Welland, ON, Canada, and is open to both remote and on-site positions. Shall I tell you about his projects?"
        ],
        education: [
            "🎓 Sandip is pursuing a Computer Programming Diploma at Niagara College, expected to graduate in 2025. Would you like to know about his projects?",
            "🎓 Sandip is studying at Niagara College, focusing on Computer Programming. I can tell you about his technical skills and projects!"
        ],
        experience: [
            "💼 Sandip has developed 4 comprehensive management systems and implemented Canadian AAA accessibility standards. Would you like to know more?",
            "💼 Sandip has extensive experience in enterprise application development. Shall I tell you about his recent projects?"
        ],
        skills: [
            `🛠️ Let me tell you about Sandip's technical expertise:

1. **Enterprise Development**
   • ASP.NET Core MVC & Web API
   • Entity Framework Core
   • SQL Server & SQLite
   • RESTful API Design
   • CRM System Development
   • ERP System Integration

2. **Business Solutions**
   • Business Analytics
   • Workflow Automation
   • Document Management
   • Role-Based Security
   • Real-time Synchronization
   • Custom Reporting

3. **Frontend & Accessibility**
   • HTML5 & CSS3
   • JavaScript
   • .NET MAUI
   • AAA Standards
   • Keyboard Navigation
   • Color Contrast

Would you like to know more about any specific skill set? 😊`,
            `🛠️ Here's an overview of Sandip's technical skills:

1. **Enterprise Development**
   • ASP.NET Core MVC & Web API
   • Entity Framework Core
   • SQL Server & SQLite
   • RESTful API Design
   • CRM System Development
   • ERP System Integration

2. **Business Solutions**
   • Business Analytics
   • Workflow Automation
   • Document Management
   • Role-Based Security
   • Real-time Synchronization
   • Custom Reporting

3. **Frontend & Accessibility**
   • HTML5 & CSS3
   • JavaScript
   • .NET MAUI
   • AAA Standards
   • Keyboard Navigation
   • Color Contrast

What specific area would you like to learn more about? 😊`
        ],
        projects: [
            "🚀 Sandip has built Hospital, Gym, School, and CRM Management Systems. Would you like to know about any specific project?",
            "🚀 Sandip's projects include enterprise solutions with advanced features. Shall I tell you about them?"
        ],
        availability: [
            "✅ Sandip is available for full-time positions, remote opportunities, and contract work. Would you like to know more about his work?",
            "✅ Sandip is open to new opportunities and can start immediately. Shall I tell you about his expertise?"
        ],
        salary: [
            "💰 Sandip's compensation expectations are competitive and based on market rates. Would you like to know about his skills and experience?",
            "💰 Sandip is open to discussing compensation based on the role and benefits. Shall I tell you about his expertise?"
        ],
        remote: [
            "🌐 Yes, Sandip is available for remote work! Would you like to know about his experience with distributed teams?",
            "🌐 Sandip is comfortable working remotely and has experience with remote collaboration tools. Shall I tell you more?"
        ],
        languages: [
            "💬 Sandip is fluent in English and works with programming languages like C#, JavaScript, and SQL. Would you like to know about his technical skills?",
            "💬 Sandip communicates in English and is proficient in multiple programming languages. Shall I tell you about his expertise?"
        ],
        tools: [
            "🛠️ Sandip uses Visual Studio, Git, Azure DevOps, and other modern development tools. Would you like to know about his technical stack?",
            "🛠️ Sandip is proficient with various development tools and technologies. Shall I tell you about his technical expertise?"
        ],
        methodology: [
            "📋 Sandip follows Agile development practices and clean code principles. Would you like to know about his development approach?",
            "📋 Sandip uses modern development methodologies and best practices. Shall I tell you about his work process?"
        ],
        team: [
            "👥 Sandip is a team player with experience in collaborative development. Would you like to know about his project experience?",
            "👥 Sandip works well in teams and has experience with various team structures. Shall I tell you about his collaborations?"
        ],
        challenges: [
            "🎯 Sandip has successfully implemented complex features and solved challenging technical problems. Would you like to know about specific examples?",
            "🎯 Sandip has overcome various technical challenges in his projects. Shall I tell you about his problem-solving approach?"
        ],
        future: [
            "🔮 Sandip is focused on continuous learning and taking on new challenges. Would you like to know about his career goals?",
            "🔮 Sandip is always looking to grow and take on new opportunities. Shall I tell you about his aspirations?"
        ],
        hobbies: [
            "🎨 While I'm here to discuss Sandip's professional work, I can tell you about his technical projects and achievements!",
            "🎨 I'm focused on sharing information about Sandip's work as a Full Stack .NET Developer. Would you like to know about his projects?"
        ]
    };

    // Handle general templates
    if (generalTemplates[topic]) {
        return generalTemplates[topic][Math.floor(Math.random() * generalTemplates[topic].length)];
    }

    // Handle existing greeting responses
    if (topic === 'greeting') {
        return greetingResponses.greeting[Math.floor(Math.random() * greetingResponses.greeting.length)];
    }
    if (topic === 'farewell') {
        return greetingResponses.farewell[Math.floor(Math.random() * greetingResponses.farewell.length)];
    }
    if (topic === 'identity') {
        return greetingResponses.identity[Math.floor(Math.random() * greetingResponses.identity.length)];
    }
    if (topic === 'howAreYou') {
        return greetingResponses.howAreYou[Math.floor(Math.random() * greetingResponses.howAreYou.length)];
    }
    if (topic === 'contact') {
        return `I'd love to connect with you! Here's how you can reach out:

• 📧 Email: sandip2446@gmail.com
• 💼 LinkedIn: linkedin.com/in/sandip2446
• 💻 GitHub: github.com/sandip2446
• 📍 Location: Welland, ON, Canada

I'm available for:
• Full-time positions
• Remote opportunities
• Contract work
• Immediate start

Feel free to reach out through any of these channels. I'm always excited to discuss new opportunities and collaborations! 😊`;
    }

    // Default response for unknown topics
    return `I'd be happy to connect you with Sandip to discuss this further! Here's how you can reach out:

• 📧 Email: sandip2446@gmail.com
• 💼 LinkedIn: linkedin.com/in/sandip2446
• 💻 GitHub: github.com/sandip2446
• 📍 Location: Welland, ON, Canada

He's available for:
• Full-time positions
• Remote opportunities
• Contract work
• Immediate start

Feel free to reach out through any of these channels. He's always excited to discuss new opportunities and collaborations! 😊`;
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
        hospital: `The Hospital Management System is one of my most exciting projects! 🏥

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

    return projectDetails[project] || `I'd be happy to tell you about my experience with ${project}! What would you like to know? 😊`;
}

function generateOverviewResponse() {
    return `Hey! I'd love to tell you about Sandip's expertise! 😊

He's a Full Stack .NET Developer who's really good at building enterprise applications. He works with cool technologies like ASP.NET Core MVC, Entity Framework Core, and SQL Server. 

Some of his recent projects are super interesting! He built a Hospital Management System in 2024, and in 2023 he created a Gym Management System, School Management System, and an Enterprise CRM System. All of these projects were successful and helped businesses run more smoothly.

What makes Sandip special is his ability to handle complex features, implement strong security measures, and create automated workflows. He's also really good at making sure everything meets Canadian AAA accessibility standards.

Would you like to know more about any of his projects or skills? I can tell you all about them! 😊`;
}

function generateRecentProjectsResponse() {
    return `Let me tell you about my recent projects from 2023:

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

Each project demonstrates my expertise in:
- Enterprise application development
- Database design and optimization
- Security implementation
- Automated workflow creation

Would you like to know more about any specific project or aspect? 😊`;
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
                } else if (topic === 'overview') {
                    response = generateOverviewResponse();
                } else if (topic === 'skills') {
                    response = generateTechnicalSkillsResponse();
                } else if (topic === 'projects') {
                    response = generateRecentProjectsResponse();
                } else {
                    response = generateTopicResponse(topic);
                }
                
                // Add bot response
                if (response) {
                    addMessage(response);
                    // Show hints immediately after response
                    setTimeout(() => {
                        showFloatingHints(topic);
                    }, 500);
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
    if (!chatContent) return;

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
    
    // Only scroll to bottom for bot responses, not for hints
    if (!isUser && !message.includes('Would you like to know more about')) {
        chatContent.scrollTop = chatContent.scrollHeight;
    }
    
    // Update conversation context
    updateConversationContext(message, isUser);
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
    
    // Add skill-related patterns
    if (message.includes('skill') || message.includes('expertise') || message.includes('technical') || 
        message.includes('technology') || message.includes('tech stack') || message.includes('what can you do')) {
        return 'skills';
    }
    
    // General template patterns
    if (message.match(/^(what('s| is) the time|current time|time now)$/i)) return 'time';
    if (message.match(/^(what('s| is) the date|today's date|current date)$/i)) return 'date';
    if (message.match(/^(what('s| is) the weather|weather today|weather now)$/i)) return 'weather';
    if (message.match(/^(what('s| is) your name|who are you|tell me your name)$/i)) return 'name';
    if (message.match(/^(how old are you|what('s| is) your age|age)$/i)) return 'age';
    if (message.match(/^(where are you|what('s| is) your location|location)$/i)) return 'location';
    if (message.match(/^(what('s| is) your education|education background|studied)$/i)) return 'education';
    if (message.match(/^(what('s| is) your experience|work experience|job experience)$/i)) return 'experience';
    if (message.match(/^(what projects|recent projects|portfolio projects)$/i)) return 'projects';
    if (message.match(/^(are you available|availability|when can you start)$/i)) return 'availability';
    if (message.match(/^(salary|compensation|pay|rate)$/i)) return 'salary';
    if (message.match(/^(remote work|work from home|wfh)$/i)) return 'remote';
    if (message.match(/^(what languages|programming languages|coding languages)$/i)) return 'languages';
    if (message.match(/^(what tools|development tools|software tools)$/i)) return 'tools';
    if (message.match(/^(what methodology|development methodology|work process)$/i)) return 'methodology';
    if (message.match(/^(team work|team player|collaboration)$/i)) return 'team';
    if (message.match(/^(challenges|problems solved|technical challenges)$/i)) return 'challenges';
    if (message.match(/^(future plans|career goals|aspirations)$/i)) return 'future';
    if (message.match(/^(hobbies|interests|what do you do for fun)$/i)) return 'hobbies';

    // Existing topic patterns
    if (message.match(/^(hi|hello|hey|greetings|good (morning|afternoon|evening))$/i)) return 'greeting';
    if (message.match(/^(bye|goodbye|see you|farewell|take care)$/i)) return 'farewell';
    if (message.match(/^(who are you|what are you|what is your name|tell me about yourself)$/i)) return 'identity';
    if (message.match(/^(how are you|how's it going|how do you do|what's up)$/i)) return 'howAreYou';
    if (message.match(/^(contact|connect|reach out|get in touch|email|linkedin|github)$/i)) return 'contact';

    // Existing project topics
    if (message === 'crm') return 'crm';
    if (message === 'erp') return 'erp';
    if (message === 'gym') return 'gym';
    if (message === 'school') return 'school';
    if (message === 'hospital') return 'hospital';
    if (message === 'pos') return 'pos';
    if (message === 'projects') return 'projects';
    if (message === 'skills') return 'skills';
    if (message === 'overview') return 'overview';

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

// Define hints object
const hints = {
    overview: {
        "Professional Profile": {
            title: "Professional Profile",
            questions: [
                {
                    text: "What's your current role and expertise?",
                    response: `I'm a Full Stack .NET Developer with expertise in:

• Enterprise application development
• ASP.NET Core MVC & Web API
• Entity Framework Core
• SQL Server & SQLite
• RESTful API Design
• Modern frontend technologies

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What's your educational background?",
                    response: `I'm currently pursuing:

• Computer Programming Diploma at Niagara College
• Expected graduation: 2025
• Key coursework includes:
  - ASP.NET Core Development
  - Database Management Systems
  - Web Development & Design
  - Software Engineering Principles

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What are your key achievements?",
                    response: `My key achievements include:

• Developed 4 comprehensive management systems
• Implemented Canadian AAA accessibility standards
• Mastered full-stack development
• Delivered complex projects with advanced features
• Created reusable components and solutions

Would you like to know more about my specific projects or technical skills? 😊`
                }
            ]
        },
        "Technical Expertise": {
            title: "Technical Expertise",
            questions: [
                {
                    text: "What are your core technical skills?",
                    response: `My core technical skills include:

• Backend: ASP.NET Core MVC, Entity Framework Core
• Database: SQL Server, SQLite, Database Design
• Frontend: HTML5, CSS3, JavaScript
• Architecture: RESTful APIs, Microservices
• Tools: Git, Visual Studio, Azure DevOps

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "What development methodologies do you follow?",
                    response: `I follow these methodologies:

• Agile Development practices
• Test-Driven Development (TDD)
• Clean Code principles
• SOLID principles
• Continuous Integration/Deployment

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "How do you handle project challenges?",
                    response: `I approach challenges by:

• Breaking down complex problems
• Following best practices and patterns
• Implementing robust error handling
• Writing maintainable, documented code
• Ensuring scalability and performance

Would you like to know more about my specific implementations or project examples? 😊`
                }
            ]
        },
        "Career Goals": {
            title: "Career Goals",
            questions: [
                {
                    text: "What are your career objectives?",
                    response: `My career objectives include:

• Contributing to impactful enterprise solutions
• Continuous learning and skill development
• Taking on leadership opportunities
• Building innovative applications
• Making a positive impact in the tech industry

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What type of role are you seeking?",
                    response: `I'm seeking roles that offer:

• Full Stack development opportunities
• Challenging technical problems
• Collaborative team environment
• Modern technology stack
• Clear growth and learning path

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What makes you a strong candidate?",
                    response: `My strengths include:

• Strong problem-solving abilities
• Excellent communication skills
• Quick learning and adaptation
• Focus on clean, maintainable code
• Proven track record of successful projects

Would you like to know more about my specific projects or technical skills? 😊`
                }
            ]
        }
    },
    projects: {
        "Portfolio Projects": {
            title: "Portfolio Projects",
            questions: [
                {
                    text: "What are your main projects?",
                    response: "My main projects include:\n• Hospital Management System (2024)\n• Gym Management System (2023)\n• School Management System (2023)\n• Enterprise CRM System (2023)\n• POS System (2023)"
                },
                {
                    text: "What technologies do you use?",
                    response: "I use modern technologies including:\n• ASP.NET Core MVC\n• Entity Framework Core\n• SQL Server & SQLite\n• RESTful API Design\n• Real-time Updates with SignalR"
                },
                {
                    text: "What makes your projects unique?",
                    response: "My projects stand out with:\n• Canadian AAA accessibility standards\n• Automated workflows\n• Real-time analytics\n• Secure payment processing\n• Comprehensive reporting"
                }
            ]
        },
        "Technical Implementation": {
            title: "Technical Implementation",
            questions: [
                {
                    text: "How do you handle security?",
                    response: "Security implementation includes:\n• Role-based access control\n• Data encryption\n• Secure authentication\n• Audit logging\n• Input validation"
                },
                {
                    text: "What about database design?",
                    response: "Database features include:\n• Complex entity relationships\n• Optimized queries\n• Data validation\n• Backup systems\n• Migration tools"
                },
                {
                    text: "How do you handle scalability?",
                    response: "Scalability features:\n• RESTful API architecture\n• Caching mechanisms\n• Load balancing\n• Database optimization\n• Modular design"
                }
            ]
        },
        "Business Impact": {
            title: "Business Impact",
            questions: [
                {
                    text: "What are the business benefits?",
                    response: "Business benefits include:\n• Improved operational efficiency\n• Better decision making\n• Cost reduction\n• Enhanced customer service\n• Increased productivity"
                },
                {
                    text: "How do you measure success?",
                    response: "Success metrics include:\n• User adoption rates\n• Performance improvements\n• Cost savings\n• Customer satisfaction\n• System reliability"
                },
                {
                    text: "What about future enhancements?",
                    response: "Future enhancements include:\n• AI/ML integration\n• Mobile applications\n• Advanced analytics\n• Cloud migration\n• API expansion"
                }
            ]
        }
    },
    hospital: {
        "Patient Management": {
            title: "Patient Management",
            questions: [
                {
                    text: "How does the patient registration work?",
                    response: "The patient registration system includes:\n• Digital patient registration with validation\n• Comprehensive medical history tracking\n• Automated appointment scheduling\n• Treatment and prescription records\n• Insurance information management"
                },
                {
                    text: "What features are available for appointment management?",
                    response: "The appointment management system includes:\n• Online booking portal\n• Automated email and SMS reminders\n• Doctor availability calendar\n• Waitlist management\n• Appointment rescheduling"
                },
                {
                    text: "How are medical records handled?",
                    response: "Medical records management includes:\n• Secure digital patient records\n• Prescription management\n• Test results and imaging tracking\n• Medical history documentation\n• Document version control"
                }
            ]
        },
        "Technical Implementation": {
            title: "Technical Implementation",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system is built with:\n• ASP.NET Core MVC Backend\n• Entity Framework Core\n• SQL Server Database\n• Real-time Updates with SignalR\n• Interactive Dashboard with Chart.js"
                },
                {
                    text: "How is security implemented?",
                    response: "Security features include:\n• Role-based access control\n• HIPAA compliance\n• Data encryption\n• Audit logging\n• AAA accessibility standards"
                },
                {
                    text: "What about analytics and reporting?",
                    response: "Analytics features include:\n• Real-time patient statistics\n• Treatment outcome tracking\n• Resource utilization metrics\n• Performance analytics\n• Custom report generation"
                }
            ]
        }
    },
    gym: {
        "Member Management": {
            title: "Member Management",
            questions: [
                {
                    text: "How does member registration work?",
                    response: "The member registration system includes:\n• Digital member registration with validation\n• Membership type selection (Basic, Premium, VIP)\n• Fitness goal tracking\n• Health metrics monitoring\n• Emergency contact information"
                },
                {
                    text: "What features are available for class management?",
                    response: "Class management features include:\n• Class scheduling and booking\n• Instructor assignment\n• Capacity management\n• Waitlist handling\n• Class type categorization"
                },
                {
                    text: "How is attendance tracked?",
                    response: "Attendance tracking includes:\n• Digital check-in system\n• Class participation records\n• Member attendance history\n• Automated notifications\n• Attendance analytics"
                }
            ]
        },
        "Technical Implementation": {
            title: "Technical Implementation",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system is built with:\n• ASP.NET Core MVC Backend\n• SQLite Database\n• Entity Framework Core\n• Payment Gateway Integration\n• Automated Scheduling System"
                },
                {
                    text: "How is payment processing handled?",
                    response: "Payment features include:\n• Secure payment gateway integration\n• Multiple payment method support\n• Automated billing system\n• Membership renewal handling\n• Payment history tracking"
                },
                {
                    text: "What about progress tracking?",
                    response: "Progress tracking features:\n• Fitness goal monitoring\n• Performance metrics\n• Achievement tracking\n• Progress reports\n• Member feedback system"
                }
            ]
        }
    },
    school: {
        "Student Management": {
            title: "Student Management",
            questions: [
                {
                    text: "How does student registration work?",
                    response: "Student registration includes:\n• Digital student enrollment\n• Academic record management\n• Course registration\n• Attendance tracking\n• Parent/guardian information"
                },
                {
                    text: "What features are available for grade management?",
                    response: "Grade management includes:\n• Automated grade calculation\n• Progress tracking\n• Report card generation\n• Academic performance analytics\n• Parent-teacher communication"
                },
                {
                    text: "How is attendance handled?",
                    response: "Attendance system includes:\n• Digital attendance tracking\n• Automated notifications\n• Absence reporting\n• Attendance analytics\n• Parent communication"
                }
            ]
        },
        "Technical Implementation": {
            title: "Technical Implementation",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system uses:\n• ASP.NET Core MVC Backend\n• Entity Framework Core\n• SQL Server Database\n• Automated Grade Calculation\n• Parent Communication Portal"
                },
                {
                    text: "How is communication handled?",
                    response: "Communication features include:\n• Parent-teacher messaging\n• Automated notifications\n• Announcement system\n• Document sharing\n• Calendar integration"
                },
                {
                    text: "What about academic reporting?",
                    response: "Academic reporting includes:\n• Performance analytics\n• Custom report generation\n• Progress tracking\n• Achievement monitoring\n• Statistical analysis"
                }
            ]
        }
    },
    erp: {
        "Business Management": {
            title: "Business Management",
            questions: [
                {
                    text: "What inventory features are available?",
                    response: "Inventory management includes:\n• Real-time stock tracking\n• Multi-location inventory\n• Automated reordering\n• Batch and serial tracking\n• Stock valuation"
                },
                {
                    text: "How is financial management handled?",
                    response: "Financial management includes:\n• General ledger\n• Accounts payable/receivable\n• Financial reporting\n• Budget management\n• Tax compliance"
                },
                {
                    text: "What HR features are included?",
                    response: "HR features include:\n• Employee management\n• Payroll processing\n• Time tracking\n• Benefits administration\n• Performance management"
                }
            ]
        },
        "Technical Features": {
            title: "Technical Features",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system uses:\n• ASP.NET Core MVC backend\n• Entity Framework Core\n• SQL Server Database\n• RESTful API Design\n• Role-based Security"
                },
                {
                    text: "How is data managed?",
                    response: "Data management includes:\n• Real-time reporting\n• Automated workflows\n• Data validation\n• Backup and recovery\n• Data migration tools"
                },
                {
                    text: "What about business intelligence?",
                    response: "Business intelligence features:\n• Real-time dashboards\n• Custom reporting\n• Data analytics\n• Performance metrics\n• Trend analysis"
                }
            ]
        }
    },
    crm: {
        "Customer Management": {
            title: "Customer Management",
            questions: [
                {
                    text: "How is lead management handled?",
                    response: "Lead management includes:\n• Lead tracking and scoring\n• Automated lead assignment\n• Lead status monitoring\n• Conversion tracking\n• Lead source analytics"
                },
                {
                    text: "What sales features are available?",
                    response: "Sales features include:\n• Visual pipeline management\n• Deal tracking and forecasting\n• Sales stage automation\n• Performance analytics\n• Revenue forecasting"
                },
                {
                    text: "How are customer interactions tracked?",
                    response: "Customer interaction tracking includes:\n• Customer profile management\n• Interaction history\n• Document management\n• Communication tracking\n• Customer segmentation"
                }
            ]
        },
        "Technical Implementation": {
            title: "Technical Implementation",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system uses:\n• ASP.NET Core MVC Backend\n• Entity Framework Core\n• SQL Server Database\n• RESTful API Design\n• Real-time Updates"
                },
                {
                    text: "How is automation implemented?",
                    response: "Automation features include:\n• Automated follow-ups\n• Task scheduling\n• Email notifications\n• Workflow automation\n• Calendar integration"
                },
                {
                    text: "What about reporting and analytics?",
                    response: "Reporting features include:\n• Sales performance metrics\n• Customer behavior analysis\n• Conversion rate tracking\n• Custom report generation\n• Real-time dashboards"
                }
            ]
        }
    },
    pos: {
        "Sales Management": {
            title: "Sales Management",
            questions: [
                {
                    text: "How are sales processed?",
                    response: "Sales processing includes:\n• Quick item scanning and lookup\n• Multiple payment method handling\n• Discount and promotion application\n• Receipt generation\n• Returns and refunds processing"
                },
                {
                    text: "What inventory features are available?",
                    response: "Inventory features include:\n• Real-time stock updates\n• Low stock alerts\n• Automatic reordering\n• Stock movement tracking\n• Price updates"
                },
                {
                    text: "How is customer management handled?",
                    response: "Customer management includes:\n• Customer profile creation\n• Purchase history tracking\n• Loyalty program management\n• Customer feedback collection\n• Marketing preferences"
                }
            ]
        },
        "Technical Features": {
            title: "Technical Features",
            questions: [
                {
                    text: "What technologies are used?",
                    response: "The system uses:\n• ASP.NET Core MVC backend\n• SQL Server database\n• Entity Framework Core\n• Payment Gateway Integration\n• Barcode Scanner Support"
                },
                {
                    text: "How is offline capability handled?",
                    response: "Offline features include:\n• Local data storage\n• Transaction queuing\n• Automatic synchronization\n• Conflict resolution\n• Data integrity checks"
                },
                {
                    text: "What about reporting and analytics?",
                    response: "Reporting features include:\n• Sales performance tracking\n• Inventory analytics\n• Customer insights\n• Custom report generation\n• Real-time dashboards"
                }
            ]
        }
    },
    contact: {
        "Job Opportunities": {
            title: "Job Opportunities",
            questions: [
                {
                    text: "What types of positions are you looking for?",
                    response: `I'm open to various opportunities:

• Full Stack .NET Developer roles
• Enterprise Application Developer positions
• Software Engineer opportunities
• Technical Lead positions
• Remote and on-site roles

Would you like to know more about my experience or specific skills? 😊`
                },
                {
                    text: "What are your salary expectations?",
                    response: `I'm looking for competitive compensation:

• Based on market rates for Full Stack .NET Developers
• Commensurate with experience and role
• Open to negotiation based on benefits and opportunities
• Considering total compensation package

Would you like to know more about my experience or specific skills? 😊`
                },
                {
                    text: "What's your preferred work environment?",
                    response: `I'm flexible with work arrangements:

• Open to both remote and on-site positions
• Prefer collaborative team environments
• Looking for companies with growth opportunities
• Interested in organizations with modern tech stacks

Would you like to know more about my experience or specific skills? 😊`
                }
            ]
        },
        "Professional Background": {
            title: "Professional Background",
            questions: [
                {
                    text: "What's your current experience level?",
                    response: `My experience includes:

• Full Stack .NET Development
• Enterprise application development
• Multiple successful project implementations
• Strong foundation in modern technologies
• Proven track record of delivering solutions

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What are your key technical skills?",
                    response: `My technical expertise includes:

• ASP.NET Core MVC & Web API
• Entity Framework Core
• SQL Server & SQLite
• RESTful API Design
• Modern frontend technologies

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What makes you a strong candidate?",
                    response: `My strengths include:

• Proven project success record
• Strong problem-solving abilities
• Excellent communication skills
• Quick learning and adaptation
• Focus on clean, maintainable code

Would you like to know more about my specific projects or technical skills? 😊`
                }
            ]
        },
        "Career Goals": {
            title: "Career Goals",
            questions: [
                {
                    text: "What are your career objectives?",
                    response: `My career goals include:

• Contributing to impactful projects
• Continuous learning and growth
• Taking on leadership opportunities
• Building innovative solutions
• Making a positive impact

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What type of company are you looking for?",
                    response: `I'm interested in companies that:

• Value innovation and quality
• Offer growth opportunities
• Have a strong technical culture
• Focus on employee development
• Build meaningful products

Would you like to know more about my specific projects or technical skills? 😊`
                },
                {
                    text: "What's your ideal role?",
                    response: `My ideal role would involve:

• Full Stack development opportunities
• Challenging technical problems
• Collaborative team environment
• Modern technology stack
• Clear growth path

Would you like to know more about my specific projects or technical skills? 😊`
                }
            ]
        }
    },
    skills: {
        "Enterprise Development": {
            title: "Enterprise Development",
            questions: [
                {
                    text: "What enterprise technologies do you specialize in?",
                    response: `I specialize in enterprise technologies including:

• ASP.NET Core MVC & Web API for robust backend development
• Entity Framework Core for efficient data management
• SQL Server & SQLite for database solutions
• RESTful API Design for scalable services
• CRM System Development for customer management
• ERP System Integration for business processes

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "How do you handle complex enterprise features?",
                    response: `I handle complex enterprise features through:

• Master-detail architecture implementation
• Role-based security and access control
• Automated workflow systems
• Real-time data synchronization
• Comprehensive error handling
• Performance optimization techniques

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "What's your approach to enterprise security?",
                    response: `My security approach includes:

• Role-based access control (RBAC)
• Data encryption and protection
• Secure authentication methods
• Input validation and sanitization
• Audit logging and monitoring
• Compliance with security standards

Would you like to know more about my specific implementations or project examples? 😊`
                }
            ]
        },
        "Business Solutions": {
            title: "Business Solutions",
            questions: [
                {
                    text: "What business solutions have you implemented?",
                    response: `I've implemented various business solutions including:

• Business Analytics dashboards
• Workflow Automation systems
• Document Management solutions
• Role-Based Security frameworks
• Real-time Synchronization systems
• Custom Reporting tools

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "How do you ensure business requirements are met?",
                    response: `I ensure business requirements through:

• Detailed requirement analysis
• Regular stakeholder communication
• Agile development methodology
• Continuous testing and validation
• User feedback integration
• Performance monitoring

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "What makes your business solutions effective?",
                    response: `My business solutions are effective because they:

• Focus on user experience and efficiency
• Implement automated workflows
• Provide real-time insights and analytics
• Ensure data accuracy and reliability
• Scale with business growth
• Maintain high performance standards

Would you like to know more about my specific implementations or project examples? 😊`
                }
            ]
        },
        "Frontend & Accessibility": {
            title: "Frontend & Accessibility",
            questions: [
                {
                    text: "What frontend technologies do you use?",
                    response: `I use modern frontend technologies including:

• HTML5 & CSS3 for structure and styling
• JavaScript for interactive features
• .NET MAUI for cross-platform development
• Responsive design principles
• Modern UI/UX practices
• Progressive enhancement

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "How do you implement accessibility?",
                    response: `I implement accessibility through:

• AAA Standards compliance
• Keyboard navigation support
• Screen reader compatibility
• Color contrast optimization
• ARIA implementation
• Semantic HTML structure

Would you like to know more about my specific implementations or project examples? 😊`
                },
                {
                    text: "What's your approach to responsive design?",
                    response: `My responsive design approach includes:

• Mobile-first development
• Flexible grid systems
• Adaptive layouts
• Touch-friendly interfaces
• Performance optimization
• Cross-browser compatibility

Would you like to know more about my specific implementations or project examples? 😊`
                }
            ]
        }
    }
};

// Update the showFloatingHints function
function showFloatingHints(topic) {
    if (!topic) return;

    // Remove any existing hints
    const existingHints = document.querySelector('.floating-hints');
    if (existingHints) {
        existingHints.remove();
    }

    const chatContent = document.querySelector('.chat-content');
    if (!chatContent) return;

    // Create hints container
    const hintContainer = document.createElement('div');
    hintContainer.className = 'floating-hints';
    hintContainer.style.opacity = '0'; // Start with opacity 0

    // Create hint content
    const hintContent = document.createElement('div');
    hintContent.className = 'hint-content';

    // Get hints for the current topic
    const topicHints = hints[topic];
    if (!topicHints) return;

    // Add each category with animation delay
    Object.entries(topicHints).forEach(([category, data], index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'hint-category';
        categoryDiv.style.opacity = '0'; // Start with opacity 0
        categoryDiv.style.transform = 'translateY(20px)'; // Start slightly below

        // Add category title
        const categoryTitle = document.createElement('h4');
        categoryTitle.className = 'hint-category-title';
        categoryTitle.textContent = data.title;
        categoryDiv.appendChild(categoryTitle);

        // Add questions
        const questionList = document.createElement('ul');
        questionList.className = 'hint-list';
        data.questions.forEach(question => {
            const listItem = document.createElement('li');
            listItem.className = 'hint-item';
            listItem.textContent = question.text;
            listItem.addEventListener('click', () => {
                // Show typing indicator
                const typingIndicator = showTypingIndicator();
                
                // Remove current hints
                hintContainer.remove();
                
                // Add response after a short delay
                setTimeout(() => {
                    removeTypingIndicator(typingIndicator);
                    addMessage(question.response);
                    
                    // Show hints again after response
                    setTimeout(() => {
                        showFloatingHints(topic);
                    }, 1500); // 1.5 second delay before showing hints again
                }, 1000); // 1 second delay before showing response
            });
            questionList.appendChild(listItem);
        });
        categoryDiv.appendChild(questionList);
        hintContent.appendChild(categoryDiv);
    });

    hintContainer.appendChild(hintContent);
    chatContent.appendChild(hintContainer);

    // Add animation with delay
    setTimeout(() => {
        hintContainer.style.opacity = '1';
        hintContainer.style.transition = 'opacity 0.5s ease-out';

        // Animate each category with staggered delay
        const categories = hintContainer.querySelectorAll('.hint-category');
        categories.forEach((category, index) => {
            setTimeout(() => {
                category.style.opacity = '1';
                category.style.transform = 'translateY(0)';
                category.style.transition = 'all 0.5s ease-out';
            }, index * 200); // 200ms delay between each category
        });
    }, 1000); // 1 second delay before starting animations
}

// Add CSS for the hint toggle button
const hintToggleStyle = document.createElement('style');
hintToggleStyle.textContent = `
    .hint-toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 10px auto;
        padding: 8px 16px;
        background: #f8fafc;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        color: #4b5563;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .hint-toggle-btn:hover {
        background: #f1f5f9;
        border-color: #2563eb;
        color: #2563eb;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.1);
    }

    .hint-toggle-btn i {
        color: #2563eb;
    }

    .floating-hints {
        position: relative;
        margin: 10px 0;
        background: #f8fafc;
        border-radius: 8px;
        padding: 15px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .hint-content {
        background: rgba(37, 99, 235, 0.1);
        border-left: 4px solid #2563eb;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 0.9rem;
        color: #1f2937;
    }

    .hint-category {
        margin-bottom: 15px;
    }

    .hint-category-title {
        color: #2563eb;
        font-size: 1rem;
        margin-bottom: 8px;
        font-weight: 600;
    }

    .hint-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .hint-item {
        margin: 8px 0;
        padding: 8px 12px;
        background: white;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 1px solid #e5e7eb;
    }

    .hint-item:hover {
        background: #f1f5f9;
        transform: translateX(5px);
        border-color: #2563eb;
        color: #2563eb;
        box-shadow: 0 2px 4px rgba(37, 99, 235, 0.1);
    }
`;
document.head.appendChild(hintToggleStyle);

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
            // Show hints directly after response
            showFloatingHints(topic);
        }, 1000);
    });
});