document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    // Handle mobile menu toggle
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Reset navigation on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const links = navLinks.getElementsByTagName('a');
    for (let link of links) {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    // Modal functionality
    const cards = document.querySelectorAll('.card-item');
    let modalHtml = `
        <div class="modal">
            <div class="modal-content">
                <button class="close-modal">&times;</button>
                <img class="modal-image" src="" alt="Modal Image">
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal-image');
    const closeModal = document.querySelector('.close-modal');

    cards.forEach(card => {
        const cardImage = card.querySelector('.card-image');
        card.addEventListener('click', () => {
            modalImage.src = cardImage.src;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
