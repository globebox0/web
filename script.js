document.addEventListener('DOMContentLoaded', function() {
    // Tooltip functionality (Focus/Blur for accessibility, improved hover/click)
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    tooltipTriggers.forEach(trigger => {
        const tooltipId = trigger.getAttribute('data-tooltip-id');
        const tooltipContent = document.getElementById(tooltipId);

        if (tooltipContent) {
            // Show on click or focus
            trigger.addEventListener('click', () => {
                tooltipContent.classList.toggle('active');
            });
            trigger.addEventListener('focus', () => {
                tooltipContent.classList.add('active');
            });
            // Hide on blur (when focus moves away)
            trigger.addEventListener('blur', () => {
                // Timeout to allow click on tooltip content if needed
                setTimeout(() => {
                    if (!tooltipContent.matches(':hover')) {
                         tooltipContent.classList.remove('active');
                    }
                }, 100);
            });

            // Keep tooltip visible when hovering over the tooltip content itself
            tooltipContent.addEventListener('mouseenter', () => {
                tooltipContent.classList.add('active');
            });
            tooltipContent.addEventListener('mouseleave', () => {
                 tooltipContent.classList.remove('active');
            });

            // Hide tooltip if clicked outside
            document.addEventListener('click', function(event) {
                if (!trigger.contains(event.target) && !tooltipContent.contains(event.target)) {
                    tooltipContent.classList.remove('active');
                }
            });
        }
    });

    // Quiz Answer Functionality
    window.showAnswer = function(answerId, correctAnswer) {
        const answerBox = document.getElementById(answerId);
        if (answerBox) {
            answerBox.textContent = `정답: ${correctAnswer}`;
            answerBox.style.display = 'block'; // Or some other way to make it visible
        }
    };

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on header for styling (e.g., arrow icon)
            this.classList.toggle('active');

            const content = this.nextElementSibling;
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                content.classList.remove('active'); // Remove active class for padding
            } else {
                // Set max-height to the scrollHeight to enable the transition
                content.style.maxHeight = content.scrollHeight + "px";
                content.classList.add('active'); // Add active class for padding
            }
        });
    });

    // Smooth scrolling for table of contents
    const tocLinks = document.querySelectorAll('#table-of-contents a');
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});