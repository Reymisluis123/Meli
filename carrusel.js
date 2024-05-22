let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
  reviews[currentReviewIndex].classList.remove('active');
  currentReviewIndex = (index + reviews.length) % reviews.length;
  reviews[currentReviewIndex].classList.add('active');
}

function changeReview(direction) {
  showReview(currentReviewIndex + direction);
}

// Mostrar la primera revisión al cargar la página
showReview(currentReviewIndex);
