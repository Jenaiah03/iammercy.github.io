// Example: Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const readMoreBtn = document.getElementById('read-more-btn');
    const folktaleContent = document.getElementById('folktale-content');

    readMoreBtn.addEventListener('click', function () {
        if (folktaleContent.style.maxHeight === 'none') {
            folktaleContent.style.maxHeight = '150px'; // Adjust based on initial max-height
            readMoreBtn.textContent = 'Read More';
        } else {
            folktaleContent.style.maxHeight = 'none';
            readMoreBtn.textContent = 'Read Less';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const readMoreChief = document.getElementById('read-more-chief');
    const chiefsFeastContent = document.getElementById('chiefs-feast-content');

    readMoreChief.addEventListener('click', function() {
        if (chiefsFeastContent.style.maxHeight === 'none') {
            chiefsFeastContent.style.maxHeight = '150px'; // Adjust this value based on your design
            readMoreChief.textContent = 'Read More';
        } else {
            chiefsFeastContent.style.maxHeight = 'none';
            readMoreChief.textContent = 'Read Less';
        }
    });
});
