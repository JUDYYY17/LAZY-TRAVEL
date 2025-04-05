// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to feature cards on scroll
const featureCards = document.querySelectorAll('.feature-card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Add hover effect to pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'scale(1)';
        } else {
            card.style.transform = 'scale(1.05)';
        }
    });
});

// Mobile menu toggle (to be implemented)
// This is a placeholder for when you want to add a mobile menu
// const mobileMenuBtn = document.createElement('button');
// mobileMenuBtn.classList.add('mobile-menu-btn');
// mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
// document.querySelector('nav').appendChild(mobileMenuBtn);

// Step Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Handle step navigation
    const nextButtons = document.querySelectorAll('.next-step');
    const prevButtons = document.querySelectorAll('.prev-step');
    const steps = document.querySelectorAll('.step');
    const panels = document.querySelectorAll('.step-panel');

    function updateSteps(currentStep) {
        steps.forEach(step => {
            const stepNumber = parseInt(step.dataset.step);
            if (stepNumber < currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNumber === currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });

        panels.forEach(panel => {
            const panelStep = parseInt(panel.id.replace('step', ''));
            if (panelStep === currentStep) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }

    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStep = parseInt(this.dataset.next);
            if (validateCurrentStep(nextStep - 1)) {
                updateSteps(nextStep);
                if (nextStep === 3) {
                    showLoading();
                    setTimeout(showItinerary, 2000);
                }
            }
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevStep = parseInt(this.dataset.prev);
            updateSteps(prevStep);
        });
    });

    // Form Validation
    function validateCurrentStep(step) {
        const currentPanel = document.getElementById(`step${step}`);
        const requiredFields = currentPanel.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });

        if (!isValid) {
            alert('請填寫所有必填欄位');
        }

        return isValid;
    }

    // Loading and Itinerary Preview
    function showLoading() {
        const loading = document.querySelector('.loading');
        const preview = document.querySelector('.itinerary-preview');
        loading.style.display = 'block';
        preview.style.display = 'none';
    }

    function showItinerary() {
        const loading = document.querySelector('.loading');
        const preview = document.querySelector('.itinerary-preview');
        loading.style.display = 'none';
        preview.style.display = 'block';
    }

    // Initialize date inputs
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('start-date').min = today;
    document.getElementById('end-date').min = today;

    document.getElementById('start-date').addEventListener('change', function() {
        document.getElementById('end-date').min = this.value;
    });
}); 