function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = timestamp => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current.toLocaleString('en-US');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.purecounter').forEach(counter => {
    const start = parseInt(counter.getAttribute('data-purecounter-start') || 0);
    const end = parseInt(counter.getAttribute('data-purecounter-end') || 0);
    const duration = parseFloat(counter.getAttribute('data-purecounter-duration') || 2) * 1000;
    animateCounter(counter, start, end, duration);
  });
});
