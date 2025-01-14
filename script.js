const colorChangingDivs = document.querySelectorAll('.color-changing-div');

colorChangingDivs.forEach(colorDiv => {
  colorDiv.addEventListener('mouseover', () => {
    const randomColor = getRandomColor();
    colorDiv.style.backgroundColor = randomColor;
  });

//colorDiv.addEventListener('mouseover', () => {
  //const randomColor = getRandomColor();
 // colorDiv.style.backgroundColor = randomColor;
//});

colorDiv.addEventListener('mouseout', () => {
  colorDiv.style.backgroundColor = 'white'; 
});
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});