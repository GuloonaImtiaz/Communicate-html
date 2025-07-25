document.addEventListener('DOMContentLoaded', function() {
    // Get the header and logo elements
    const header = document.querySelector('.site-header');
    const logoCircle = document.querySelector('.logo-circle');
    const bottomNav = document.querySelector('.bottom-nav');
    const topNav = document.querySelector('.top-nav');
    
    // Initially hide the logo circle
    logoCircle.style.opacity = '0';
    logoCircle.style.visibility = 'hidden';
    
    // Add scroll event listener 
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;
        
        // Add/remove sticky class based on scroll position
        if (scrollPosition > 10) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Handle logo circle and nav visibility when scrolled past 200px
        if (scrollPosition > 200) {
            // Show and animate the logo circle
            logoCircle.style.opacity = '1';
            logoCircle.style.visibility = 'visible';
            logoCircle.classList.add('glow');
            
            // Hide the navbars
            if (bottomNav) bottomNav.style.display = 'none';
            if (topNav) topNav.style.display = 'none';
        } else {
            // Hide the logo circle
            logoCircle.style.opacity = '0';
            logoCircle.classList.remove('glow');
            
            // Show the navbars
            if (bottomNav) bottomNav.style.display = '';
            if (topNav) topNav.style.display = '';
            
            // Ensure visibility is reset after transition
            setTimeout(() => {
                if (scrollPosition <= 200) {
                    logoCircle.style.visibility = 'hidden';
                }
            }, 300); // Match this with the CSS transition time
        }
    });
});
