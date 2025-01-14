const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const image = card.querySelector('img');
  const modalImage = card.getAttribute('data-modal-image');

  card.addEventListener('click', () => {
    // Create a modal element
    const modal = document.createElement('div');
    modal.classList.add('modal');

    // Create a modal content element
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create a close button
    const closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.textContent = '×';

    // Create an image element for the modal
    const modalImageElement = document.createElement('img');
    modalImageElement.src = modalImage;

    // Append elements to the modal
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalImageElement);
    modal.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Show the modal
    modal.style.display = 'block';

    // Close the modal when the close button or outside the modal is clicked
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.removeChild(modal);
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        document.body.removeChild(modal);
      }
    });
  });
});


projectCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded'); 
  });
});
