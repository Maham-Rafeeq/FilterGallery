// Get all filter buttons and gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

// Add click event to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get the filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter gallery items
        galleryItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            
            // Show all items if "all" is selected
            if (filterValue === 'all') {
                item.classList.remove('hide');
                item.classList.add('show');
            } 
            // Show items that match the filter
            else if (itemCategory === filterValue) {
                item.classList.remove('hide');
                item.classList.add('show');
            } 
            // Hide items that don't match
            else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});

// Show all items on page load
window.addEventListener('DOMContentLoaded', () => {
    galleryItems.forEach(item => {
        item.classList.add('show');
    });
});