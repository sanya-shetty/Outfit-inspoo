function showCategory(category) {
    const outfits = document.querySelectorAll('.outfit');
    outfits.forEach(outfit => {
        if (category === 'all') {
            outfit.style.display = 'block';
        } else {
            outfit.style.display = outfit.classList.contains(category) ? 'block' : 'none';
        }
    });
}

// Show all outfits on page load
showCategory('all');