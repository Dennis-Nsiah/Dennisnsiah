// Array of words to rotate through
const words = ["IT Enthusiast", "Web Developer", "Tech Explorer", "Cyber Security Expert", "Creative Coder"];
let index = 0; // Starting index for the words array
const dynamicText = document.getElementById("dynamic-text"); // Target element

// Function to change the text with fading effect
function changeText() {
    // First, fade out the current text
    dynamicText.classList.remove("fade-in");
    dynamicText.classList.add("fade-out");

    // After the fade-out transition, change the text
    setTimeout(() => {
        index = (index + 1) % words.length; // Update index to cycle through words array
        dynamicText.textContent = words[index]; // Set the new text

        // Fade the new text in
        dynamicText.classList.remove("fade-out");
        dynamicText.classList.add("fade-in");
    }, 500); // Timing to match the fade-out duration
}

// Initial call to set the first fade-in effect
dynamicText.classList.add("fade-in");

// Set interval to change the text every 2 seconds
setInterval(changeText, 2000);
// Get elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Add click event listener to the hamburger
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});


hamburger.addEventListener('click', function() {
    console.log('Hamburger clicked'); // Log to check if the click is registered
    navLinks.classList.toggle('show');
    console.log(navLinks.classList); // Log to see the class list
});

document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll(".skillItem");

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after it becomes visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    skillItems.forEach(item => {
        observer.observe(item);
    });
});

// Function to add 'visible' class to cards on scroll
function showExperienceCards() {
    const cards = document.querySelectorAll('.experience-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < windowHeight - 50) { // Trigger animation if the card is visible
            card.classList.add('visible');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', showExperienceCards);

$(document).ready(function(){
	$('.form-input').on('keyup, paste, cut, focusout', function(){
		var $parent = $(this).parents('.form-line');
		var input_value = $.trim($(this).val());
		var required = $(this).is(':required');

		if (input_value.length > 0) {
			$parent.find('label').addClass('top');

			$parent
				.removeClass('error')
				.addClass('success');
		}	else {
			$parent.find('label').removeClass('top');
			$parent.removeClass('success')

			if (required) {
				$parent.addClass('error');
			}
		}
	});
});

