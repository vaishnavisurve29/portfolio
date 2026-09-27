/**
 * ==========================================================================
 * Personal Portfolio Website - Main JavaScript
 * Developer: Vaishnavi Surve (Aspiring Full Stack Developer)
 * Features:
 *   1. Mobile Navigation & Accessible Drawer Menu
 *   2. Active Link Highlighting on Scroll
 *   3. Sticky Header Box Shadow
 *   4. Client-Side Contact Form Validation with Inline Feedback
 *   5. Dynamic Copyright Year
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. DOM Element References
    // ----------------------------------------------------------------------
    const header = document.getElementById('header');
    const navToggle = document.getElementById('navToggle');
    const primaryNav = document.getElementById('primaryNav');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    const currentYearSpan = document.getElementById('currentYear');

    // Contact Form Elements
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const formSuccessMessage = document.getElementById('formSuccessMessage');

    // ----------------------------------------------------------------------
    // 2. Dynamic Year in Footer
    // ----------------------------------------------------------------------
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // ----------------------------------------------------------------------
    // 3. Mobile Navigation Menu Toggle
    // ----------------------------------------------------------------------
    if (navToggle && primaryNav) {
        // Toggle mobile drawer
        navToggle.addEventListener('click', () => {
            const isOpened = navToggle.classList.toggle('is-active');
            primaryNav.classList.toggle('is-active', isOpened);
            navToggle.setAttribute('aria-expanded', isOpened ? 'true' : 'false');
        });

        // Close mobile drawer when clicking on any navigation link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (primaryNav.classList.contains('is-active')) {
                    navToggle.classList.remove('is-active');
                    primaryNav.classList.remove('is-active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close mobile drawer when clicking outside
        document.addEventListener('click', (event) => {
            if (
                primaryNav.classList.contains('is-active') &&
                !primaryNav.contains(event.target) &&
                !navToggle.contains(event.target)
            ) {
                navToggle.classList.remove('is-active');
                primaryNav.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Reset mobile navigation state if viewport expands beyond mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && primaryNav.classList.contains('is-active')) {
                navToggle.classList.remove('is-active');
                primaryNav.classList.remove('is-active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ----------------------------------------------------------------------
    // 4. Header Shadow on Scroll
    // ----------------------------------------------------------------------
    const handleHeaderScroll = () => {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // Check initial position

    // ----------------------------------------------------------------------
    // 5. Active Navigation Link on Scroll (IntersectionObserver)
    // ----------------------------------------------------------------------
    if ('IntersectionObserver' in window && sections.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        if (link.getAttribute('href') === `#${activeId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => sectionObserver.observe(section));
    }

    // ----------------------------------------------------------------------
    // 6. Contact Form Client-Side Validation
    // ----------------------------------------------------------------------
    if (contactForm) {
        // Regular expression for validating standard email formats
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        /**
         * Helper function to show error message for a given field
         * @param {HTMLElement} inputElement - Input/Textarea element
         * @param {string} errorId - ID of error message span element
         * @param {string} message - Validation error description
         */
        const showError = (inputElement, errorId, message) => {
            const errorElement = document.getElementById(errorId);
            inputElement.classList.add('is-invalid');
            inputElement.setAttribute('aria-invalid', 'true');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('visible');
            }
        };

        /**
         * Helper function to clear error for a given field
         * @param {HTMLElement} inputElement - Input/Textarea element
         * @param {string} errorId - ID of error message span element
         */
        const clearError = (inputElement, errorId) => {
            const errorElement = document.getElementById(errorId);
            inputElement.classList.remove('is-invalid');
            inputElement.removeAttribute('aria-invalid');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.remove('visible');
            }
        };

        /**
         * Validate individual input fields
         * @returns {boolean} Whether all fields are valid
         */
        const validateForm = () => {
            let isValid = true;

            // 1. Validate Full Name
            const nameValue = nameInput.value.trim();
            if (!nameValue) {
                showError(nameInput, 'nameError', 'Please enter your full name.');
                isValid = false;
            } else if (nameValue.length < 2) {
                showError(nameInput, 'nameError', 'Name must be at least 2 characters long.');
                isValid = false;
            } else {
                clearError(nameInput, 'nameError');
            }

            // 2. Validate Email Address
            const emailValue = emailInput.value.trim();
            if (!emailValue) {
                showError(emailInput, 'emailError', 'Please enter your email address.');
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                showError(emailInput, 'emailError', 'Please provide a valid email format (e.g., name@example.com).');
                isValid = false;
            } else {
                clearError(emailInput, 'emailError');
            }

            // 3. Validate Subject
            const subjectValue = subjectInput.value.trim();
            if (!subjectValue) {
                showError(subjectInput, 'subjectError', 'Please enter a subject.');
                isValid = false;
            } else if (subjectValue.length < 3) {
                showError(subjectInput, 'subjectError', 'Subject must be at least 3 characters.');
                isValid = false;
            } else {
                clearError(subjectInput, 'subjectError');
            }

            // 4. Validate Message
            const messageValue = messageInput.value.trim();
            if (!messageValue) {
                showError(messageInput, 'messageError', 'Please enter your message.');
                isValid = false;
            } else if (messageValue.length < 10) {
                showError(messageInput, 'messageError', 'Message should be at least 10 characters long.');
                isValid = false;
            } else {
                clearError(messageInput, 'messageError');
            }

            return isValid;
        };

        // Real-time error clearing on input change
        nameInput.addEventListener('input', () => {
            if (nameInput.value.trim().length >= 2) clearError(nameInput, 'nameError');
        });

        emailInput.addEventListener('input', () => {
            if (emailRegex.test(emailInput.value.trim())) clearError(emailInput, 'emailError');
        });

        subjectInput.addEventListener('input', () => {
            if (subjectInput.value.trim().length >= 3) clearError(subjectInput, 'subjectError');
        });

        messageInput.addEventListener('input', () => {
            if (messageInput.value.trim().length >= 10) clearError(messageInput, 'messageError');
        });

        // Form Submit Handler
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Hide previous success state if any
            if (formSuccessMessage) {
                formSuccessMessage.style.display = 'none';
            }

            const isFormValid = validateForm();

            if (isFormValid) {
                // Show success feedback
                if (formSuccessMessage) {
                    formSuccessMessage.style.display = 'flex';
                    formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                // Reset form fields
                contactForm.reset();
            } else {
                // Focus first invalid element for accessibility
                const firstInvalid = contactForm.querySelector('.is-invalid');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    }
});
