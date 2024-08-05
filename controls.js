
document.addEventListener('DOMContentLoaded', function() {
  const spoilerH4 = document.querySelector('.spoiler-header');
  const spoilerContent = document.getElementById('spoiler');

  if (spoilerH4 && spoilerContent) {
      spoilerH4.addEventListener('click', function() {
          spoilerContent.classList.toggle('hidden');
      });
  }
});