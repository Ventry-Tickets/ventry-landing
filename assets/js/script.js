// Ventry Landing Page JavaScript - Enhanced Luxury Experience

document.addEventListener('DOMContentLoaded', function() {
    // Initialize luxury loading experience
    initLuxuryLoader();
    
    // Initialize all functionality after loading
    setTimeout(() => {
        initCountdown();
        initEmailForm();
        initScrollEffects();
        initAnimations();
        initLuxuryEffects();
        initParallaxEffects();
        initPatternInteractions();
        initPatternVisibility();
        initDynamicPatterns();
    }, 500);
});

// Luxury Loading Experience
function initLuxuryLoader() {
    const loader = document.getElementById('luxuryLoader');
    
    if (loader) {
        // Hide loader after content is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('fade-out');
                
                // Remove loader from DOM after transition
                setTimeout(() => {
                    loader.remove();
                    
                    // Trigger entrance animations
                    document.body.style.overflow = 'visible';
                    triggerEntranceAnimations();
                }, 800);
            }, 1000);
        });
    }
}

// Trigger entrance animations
function triggerEntranceAnimations() {
    const heroElements = document.querySelectorAll('.logo-container, .hero-text');
    
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Luxury Effects and Micro-interactions
function initLuxuryEffects() {
    // Cursor trail effect for desktop
    if (window.innerWidth > 768) {
        createCursorTrail();
    }
    
    // Enhanced button interactions
    enhanceButtonInteractions();
    
    // Parallax mouse movement for hero elements
    initMouseParallax();
    
    // Smooth reveal animations on scroll
    initScrollReveal();
}

// Create subtle cursor trail effect
function createCursorTrail() {
    const trail = [];
    const trailLength = 8;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(217, 253, 7, ${0.8 - i * 0.1});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease-out;
            opacity: 0;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        let x = mouseX, y = mouseY;
        
        trail.forEach((dot, index) => {
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            dot.style.opacity = '1';
            
            const nextDot = trail[index + 1] || trail[0];
            x += (parseFloat(nextDot.style.left) - x) * 0.3;
            y += (parseFloat(nextDot.style.top) - y) * 0.3;
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Enhanced button interactions
function enhanceButtonInteractions() {
    const ctaButton = document.querySelector('.cta-button');
    const comingSoon = document.querySelector('.coming-soon');
    
    [ctaButton, comingSoon].forEach(button => {
        if (button) {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            button.addEventListener('mousedown', function() {
                this.style.transform = 'translateY(-1px) scale(0.98)';
            });
            
            button.addEventListener('mouseup', function() {
                this.style.transform = 'translateY(-3px) scale(1.02)';
            });
        }
    });
}

// Mouse parallax effect for hero elements
function initMouseParallax() {
    const hero = document.querySelector('.hero');
    const logo = document.querySelector('.ventry-logo');
    const headline = document.querySelector('.hero-headline');
    const subheadline = document.querySelector('.hero-subheadline');
    
    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            
            if (logo) {
                logo.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
            }
            
            if (headline) {
                headline.style.transform = `translate(${x * 5}px, ${y * 5}px)`;
            }
            
            if (subheadline) {
                subheadline.style.transform = `translate(${x * 3}px, ${y * 3}px)`;
            }
        });
        
        hero.addEventListener('mouseleave', () => {
            [logo, headline, subheadline].forEach(element => {
                if (element) {
                    element.style.transform = 'translate(0, 0)';
                }
            });
        });
    }
}

// Parallax effects on scroll
function initParallaxEffects() {
    const heroBackground = document.querySelector('.hero-background');
    const hero = document.querySelector('.hero');
    const patternLines = document.querySelectorAll('.pattern-line');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        // Enhanced pattern parallax
        patternLines.forEach((line, index) => {
            const lineRate = scrolled * (0.1 + index * 0.05);
            line.style.transform = `skew(-25deg) translateY(${lineRate}px)`;
        });
        
        // Hero pattern parallax
        if (hero) {
            const heroRect = hero.getBoundingClientRect();
            const heroParallax = scrolled * 0.3;
            hero.style.setProperty('--pattern-offset', `${heroParallax}px`);
        }
    });
}

// Enhanced pattern interactions
function initPatternInteractions() {
    // Pattern section interaction
    const patternSection = document.querySelector('.pattern-section');
    const patternLines = document.querySelectorAll('.pattern-line');
    
    if (patternSection && window.innerWidth > 768) {
        patternSection.addEventListener('mouseenter', () => {
            patternLines.forEach((line, index) => {
                line.style.animationPlayState = 'paused';
                line.style.transform = `skew(-25deg) scaleY(1.4)`;
                line.style.opacity = '1';
            });
        });
        
        patternSection.addEventListener('mouseleave', () => {
            patternLines.forEach((line, index) => {
                line.style.animationPlayState = 'running';
                line.style.transform = '';
                line.style.opacity = '';
            });
        });
    }
    
    // CTA section pattern pulse on form focus
    const emailInput = document.getElementById('email');
    const ctaSection = document.querySelector('.cta-section');
    
    if (emailInput && ctaSection) {
        emailInput.addEventListener('focus', () => {
            ctaSection.style.setProperty('--pattern-pulse', '1.1');
        });
        
        emailInput.addEventListener('blur', () => {
            ctaSection.style.setProperty('--pattern-pulse', '1');
        });
    }
}

// Initialize pattern visibility based on scroll
function initPatternVisibility() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px'
    };
    
    const patternObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pattern-visible');
                
                // Add subtle entrance animation to patterns
                const patterns = entry.target.querySelectorAll('::after, ::before');
                entry.target.style.setProperty('--pattern-entrance', '1');
            } else {
                entry.target.classList.remove('pattern-visible');
                entry.target.style.setProperty('--pattern-entrance', '0');
            }
        });
    }, observerOptions);
    
    // Observe sections with patterns
    const sectionsWithPatterns = document.querySelectorAll('.hero, .cta-section, .pattern-section, .about-section, .footer');
    sectionsWithPatterns.forEach(section => {
        patternObserver.observe(section);
    });
}

// Add dynamic pattern intensity based on time of day
function initDynamicPatterns() {
    const hour = new Date().getHours();
    let patternIntensity = 1;
    
    // Adjust pattern opacity based on time (more subtle during day hours)
    if (hour >= 6 && hour <= 18) {
        patternIntensity = 0.7; // Daytime - more subtle
    } else {
        patternIntensity = 1; // Evening/Night - full intensity
    }
    
    document.documentElement.style.setProperty('--pattern-intensity', patternIntensity);
}

// Scroll reveal animations
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate on scroll
    const animateElements = document.querySelectorAll('.cta-content, .about-content, .footer-content');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(element);
    });
}

// Countdown Timer
function initCountdown() {
    // Set launch date (30 days from now for demo purposes)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    const countdownTimer = document.getElementById('countdownTimer');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!countdownTimer) return;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate.getTime() - now;
        
        if (distance < 0) {
            countdownTimer.innerHTML = '<div class="countdown-ended">We\'re Live!</div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (daysElement) daysElement.textContent = String(days).padStart(2, '0');
        if (hoursElement) hoursElement.textContent = String(hours).padStart(2, '0');
        if (minutesElement) minutesElement.textContent = String(minutes).padStart(2, '0');
        if (secondsElement) secondsElement.textContent = String(seconds).padStart(2, '0');
    }
    
    // Update countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Email Form Handling - Enhanced
function initEmailForm() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const submitButton = form?.querySelector('.cta-button');
    
    if (!form || !emailInput || !submitButton) return;
    
    // Enhanced email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // Real-time validation feedback
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        const inputGroup = this.closest('.input-group');
        
        if (email.length > 0) {
            if (validateEmail(email)) {
                inputGroup.style.borderColor = 'rgba(217, 253, 7, 0.5)';
                inputGroup.style.boxShadow = '0 0 0 2px rgba(217, 253, 7, 0.2), 0 12px 40px rgba(11, 38, 251, 0.2)';
            } else {
                inputGroup.style.borderColor = 'rgba(255, 100, 100, 0.5)';
                inputGroup.style.boxShadow = '0 0 0 2px rgba(255, 100, 100, 0.2), 0 12px 40px rgba(11, 38, 251, 0.2)';
            }
        } else {
            inputGroup.style.borderColor = '';
            inputGroup.style.boxShadow = '';
        }
    });
    
    // Enhanced form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const originalButtonText = submitButton.innerHTML;
        
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Button loading state
        submitButton.innerHTML = `
            <span>Joining...</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="animate-spin">
                <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="32" stroke-dashoffset="32">
                    <animate attributeName="stroke-dashoffset" values="32;0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        submitButton.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Success state
            submitButton.innerHTML = `
                <span>Welcome!</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16 6L8 14L4 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            submitButton.style.background = 'linear-gradient(135deg, rgba(217, 253, 7, 0.9) 0%, rgba(217, 253, 7, 0.8) 100%)';
            submitButton.style.color = 'var(--primary-black)';
            
            showNotification('🎉 You\'re on the exclusive list! We\'ll be in touch soon.', 'success');
            
            // Reset form
            setTimeout(() => {
                emailInput.value = '';
                submitButton.innerHTML = originalButtonText;
                submitButton.disabled = false;
                submitButton.style.background = '';
                submitButton.style.color = '';
                
                const inputGroup = emailInput.closest('.input-group');
                inputGroup.style.borderColor = '';
                inputGroup.style.boxShadow = '';
            }, 3000);
            
        }, 2000);
    });
}

// Luxury notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existing = document.querySelector('.luxury-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `luxury-notification ${type}`;
    
    const colors = {
        success: 'rgba(217, 253, 7, 0.95)',
        error: 'rgba(255, 100, 100, 0.95)',
        info: 'rgba(11, 38, 251, 0.95)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        padding: 20px 30px;
        background: ${colors[type]};
        color: ${type === 'success' ? 'var(--primary-black)' : 'white'};
        border-radius: 12px;
        font-weight: 500;
        font-size: 0.95rem;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(20px);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        max-width: 350px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}
function initEmailForm() {
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    
    if (!emailForm || !emailInput) return;
    
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = emailForm.querySelector('.cta-button');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<span>Submitting...</span>';
        submitButton.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            showFormMessage('Thank you! You\'ll be the first to know when we launch.', 'success');
            emailInput.value = '';
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
    
    // Real-time email validation
    emailInput.addEventListener('input', function() {
        const email = this.value.trim();
        const inputGroup = this.closest('.input-group');
        
        if (email && !isValidEmail(email)) {
            inputGroup.style.borderColor = '#ff4444';
        } else {
            inputGroup.style.borderColor = '';
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageElement = document.createElement('div');
    messageElement.className = `form-message form-message--${type}`;
    messageElement.textContent = message;
    
    // Style the message
    messageElement.style.cssText = `
        margin-top: 20px;
        padding: 12px 20px;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        animation: fadeInUp 0.3s ease-out;
        ${type === 'success' 
            ? 'background: rgba(217, 253, 7, 0.1); color: #d9fd07; border: 1px solid #d9fd07;'
            : 'background: rgba(255, 68, 68, 0.1); color: #ff4444; border: 1px solid #ff4444;'
        }
    `;
    
    // Insert message after form
    const emailForm = document.getElementById('emailForm');
    emailForm.parentNode.insertBefore(messageElement, emailForm.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => messageElement.remove(), 300);
        }
    }, 5000);
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const ctaSection = document.getElementById('cta');
            if (ctaSection) {
                ctaSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Parallax effect for hero background
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxUpdate);
}

// Animation Observers
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.cta-content, .about-content, .countdown-content, .footer-content');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        observer.observe(element);
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization for scroll events
const debouncedScrollHandler = debounce(() => {
    // Additional scroll-based functionality can be added here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add CSS for additional animations
const additionalStyles = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-10px); }
    }
    
    .countdown-ended {
        font-size: 2rem;
        font-weight: 700;
        color: #d9fd07;
        text-align: center;
        padding: 20px;
        animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Error handling for missing elements
window.addEventListener('error', function(e) {
    console.warn('Ventry Landing Page: Non-critical error handled:', e.message);
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
    // Enhanced keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Add keyboard navigation styles
const keyboardStyles = `
    .keyboard-navigation *:focus {
        outline: 2px solid #d9fd07 !important;
        outline-offset: 2px !important;
    }
`;

const keyboardStyleSheet = document.createElement('style');
keyboardStyleSheet.textContent = keyboardStyles;
document.head.appendChild(keyboardStyleSheet);

