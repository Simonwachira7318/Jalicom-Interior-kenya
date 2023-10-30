let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');

function showItem(index) {
    items.forEach(item => item.style.display = 'none');
    items[index].style.display = 'block';
}

function nextItem() {
    currentIndex = (currentIndex + 1) % items.length;
    showItem(currentIndex);
}

function prevItem() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showItem(currentIndex);
}

// Auto slide every 4 seconds
setInterval(nextItem, 4000);

// Initial display
showItem(currentIndex);