document.addEventListener('DOMContentLoaded', () => {
    const years = document.querySelectorAll('.year');
    const contents = document.querySelectorAll('.content');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0; // Start with 2012

    function updateVisibleYears() {
        years.forEach((year, index) => {
            year.style.display = (index === currentIndex) ? 'block' : 'none'; // Show only the current year
        });
        prevBtn.disabled = currentIndex === 0; // Disable prevBtn if at the beginning
        nextBtn.disabled = currentIndex === years.length - 1; // Disable nextBtn if at the end
    }

    function updateContent() {
        const selectedYear = years[currentIndex].getAttribute('data-year');
        contents.forEach(content => {
            content.classList.toggle('active', content.getAttribute('data-year') === selectedYear);
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateVisibleYears();
            updateContent();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < years.length - 1) {
            currentIndex++;
            updateVisibleYears();
            updateContent();
        }
    });

    // Initialize the timeline
    updateVisibleYears();
    updateContent();
});
