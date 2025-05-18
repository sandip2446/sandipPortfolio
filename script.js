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

// Conversation state
let conversationHistory = [];
let currentContext = null;

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

// Chat functionality
function initChat() {
    // Toggle chat visibility
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
        notificationBadge.style.display = 'none';
    });

    // Minimize chat
    document.querySelector('.minimize-chat').addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Close chat
    document.querySelector('.close-chat').addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });

    // Send message
    sendMessage.addEventListener('click', () => {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            setTimeout(() => {
                const response = processUserInput(message);
                addMessage(response);
            }, 1000);
        }
    });

    // Handle enter key press
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const message = chatInput.value.trim();
            if (message) {
                addMessage(message, true);
                chatInput.value = '';
                setTimeout(() => {
                    const response = processUserInput(message);
                    addMessage(response);
                }, 1000);
            }
        }
    });

    // Handle expertise button clicks
    document.querySelectorAll('.expertise-btn').forEach(button => {
        button.addEventListener('click', () => {
            const expertise = button.textContent.trim();
            addMessage(`I'm interested in ${expertise}. Can you tell me more about it?`, true);
            
            setTimeout(() => {
                const response = processUserInput(expertise);
                addMessage(response);
            }, 1000);
        });
    });

    // Show notification badge after 5 seconds if chat is not open
    setTimeout(() => {
        if (!chatContainer.classList.contains('active')) {
            notificationBadge.style.display = 'block';
        }
    }, 5000);

    // Scroll to top functionality
    scrollToTop.addEventListener('click', () => {
        chatContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add initial bot message
    addMessage("Hi! I'm your AI assistant, specialized in Sandip's portfolio. I can help you learn about his experience, projects, and skills. What would you like to know?", false);
}

// Add message to chat with enhanced formatting
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    // Format message with markdown-like syntax
    const formattedMessage = formatMessage(message);
    messageContent.innerHTML = formattedMessage;
    
    const messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.appendChild(messageContent);
    messageDiv.appendChild(messageTime);
    
    chatContent.appendChild(messageDiv);
    chatContent.scrollTop = chatContent.scrollHeight;

    // Update conversation history
    conversationHistory.push({
        role: isUser ? 'user' : 'assistant',
        content: message,
        timestamp: new Date().toISOString()
    });

    // Keep only last 10 messages for context
    if (conversationHistory.length > 10) {
        conversationHistory.shift();
    }
}

// Format message with markdown-like syntax
function formatMessage(message) {
    return message
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>');
}

// Process user input with enhanced context awareness
function processUserInput(input) {
    const lowerInput = input.toLowerCase();
    
    // Check for greetings
    if (lowerInput.match(/^(hi|hello|hey|greetings)/i)) {
        return "Hi! I'm your AI assistant, specialized in Sandip's portfolio. I can help you learn about his experience, projects, and skills. What would you like to know?";
    }

    // Check for project inquiries
    if (lowerInput.includes('project') || lowerInput.includes('system') || lowerInput.includes('work')) {
        if (lowerInput.includes('hospital')) {
            return `Let me tell you about Sandip's Hospital Management System (January 2024 - Present):<br><br>
            <strong>Key Achievements:</strong><br>
            • Streamlined patient management and appointment scheduling<br>
            • Implemented Canadian government AAA accessibility standards<br>
            • Improved operational efficiency with automated workflows<br>
            • Implemented real-time analytics for better decision-making<br><br>
            <strong>Technical Stack:</strong><br>
            • ASP.NET Core MVC with Entity Framework Core<br>
            • SQL Server with complex entity relationships<br>
            • Interactive dashboard with Chart.js<br>
            • Automated email notification system<br><br>
            Would you like to know more about the technical challenges, impact, or specific features?`;
        }
        if (lowerInput.includes('gym')) {
            return `Here's information about the Gym Management System (October 2023 - December 2023):<br><br>
            <strong>Key Features:</strong><br>
            • Automated member management and class scheduling<br>
            • Secure payment processing integration<br>
            • Self-service member portal<br>
            • Advanced attendance tracking<br><br>
            <strong>Technologies Used:</strong><br>
            • ASP.NET Core MVC with SQLite<br>
            • Entity relationships for members and classes<br>
            • Automated scheduling system<br>
            • Payment gateway integration<br><br>
            Would you like to know more about the member experience, technical implementation, or business impact?`;
        }
        return "Sandip has developed several management systems. Would you like to know about the Hospital Management System, Gym Management System, School Management System, or Enterprise CRM System?";
    }

    // Check for skills inquiries
    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack')) {
        if (lowerInput.includes('backend') || lowerInput.includes('server')) {
            return `Here are Sandip's backend development skills:<br><br>
            <strong>Core Technologies:</strong><br>
            • ASP.NET Core MVC & Web API<br>
            • Entity Framework Core<br>
            • SQL Server & SQLite<br>
            • RESTful API Design<br><br>
            <strong>Advanced Concepts:</strong><br>
            • Master-Detail Architecture<br>
            • View Models & DTOs<br>
            • Repository Pattern<br>
            • C# Development<br><br>
            Would you like to know more about specific implementations or project examples?`;
        }
        if (lowerInput.includes('frontend') || lowerInput.includes('ui') || input.includes('design')) {
            return `Here are Sandip's frontend development skills:<br><br>
            <strong>Web Technologies:</strong><br>
            • HTML5 & CSS3<br>
            • JavaScript<br>
            • Responsive Design<br>
            • UI/UX Implementation<br><br>
            <strong>Cross-Platform:</strong><br>
            • .NET MAUI<br>
            • UWP Applications<br>
            • Frontend Frameworks<br><br>
            Would you like to know more about specific projects or design approaches?`;
        }
        return "Sandip has expertise in various areas. Would you like to know about backend development, frontend development, accessibility standards, or data science skills?";
    }

    // Check for education inquiries
    if (lowerInput.includes('education') || lowerInput.includes('degree') || lowerInput.includes('school') || lowerInput.includes('college')) {
        return `Sandip is currently pursuing his education at Niagara College:<br><br>
        <strong>Program:</strong> Computer Programming Diploma<br>
        <strong>Location:</strong> Welland, ON<br>
        <strong>Expected Graduation:</strong> 2025<br><br>
        <strong>Key Coursework:</strong><br>
        • ASP.NET Core Development<br>
        • Database Management Systems<br>
        • Web Development & Design<br>
        • Software Engineering Principles<br><br>
        Would you like to know more about specific courses or how this education relates to his current work?`;
    }

    // Check for contact information
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('linkedin') || lowerInput.includes('github') || lowerInput.includes('reach')) {
        return `You can connect with Sandip through multiple channels:<br><br>
        <strong>Professional Networks:</strong><br>
        • LinkedIn: ${resumeData.personalInfo.linkedin}<br>
        • GitHub: ${resumeData.personalInfo.github}<br><br>
        <strong>Direct Contact:</strong><br>
        • Email: ${resumeData.personalInfo.email}<br>
        • Location: ${resumeData.personalInfo.location}<br><br>
        He's always open to discussing new opportunities and collaborations. Would you like to know the best way to reach out for specific types of opportunities?`;
    }

    // Check for summary/about
    if (lowerInput.includes('about') || lowerInput.includes('summary') || lowerInput.includes('overview') || lowerInput.includes('who')) {
        return `Let me tell you about Sandip:<br><br>
        <strong>Professional Focus:</strong><br>
        ${resumeData.summary}<br><br>
        <strong>Key Achievements:</strong><br>
        ${resumeData.keyAchievements.map(achievement => `• ${achievement}`).join('<br>')}<br><br>
        <strong>Current Role:</strong><br>
        • ${resumeData.personalInfo.title}<br>
        • Based in ${resumeData.personalInfo.location}<br><br>
        Would you like to know more about specific achievements, career goals, or areas of expertise?`;
    }

    // Handle unclear queries
    return "I can help you learn about Sandip's projects, skills, education, or contact information. What would you like to know?";
}

// Initialize chat when DOM is loaded
document.addEventListener('DOMContentLoaded', initChat); 