const heroImage = document.querySelector('.hero-image');
const menuItems = document.querySelectorAll('#services li div');

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    // Generate random color
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    heroImage.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
});